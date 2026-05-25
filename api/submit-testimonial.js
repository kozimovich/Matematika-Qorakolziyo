import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

if (!supabaseUrl || !supabaseServiceRole || !turnstileSecret) {
  throw new Error(
    "Missing server env vars. Set VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TURNSTILE_SECRET_KEY."
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceRole, {
  auth: { persistSession: false },
});

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const ALLOWED_COURSES = new Set([
  "Matematika Abituriyentlar",
  "SAT",
  "Prezident maktabiga",
  "Al-Xorazmiy",
  "Mirzo Ulug'bek",
  "Al-Beruniy",
  "Litsey",
  "Ingliz tili",
]);

const NAME_MAX = 80;
const COMMENT_MAX = 1000;
const COURSE_MAX = 80;

function isNonEmptyString(value, max) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // 1) Origin / Referer tekshiruvi — boshqa domenlardan POST bloklash
  if (ALLOWED_ORIGINS.length > 0) {
    const origin = req.headers.origin || "";
    const referer = req.headers.referer || "";
    const ok =
      ALLOWED_ORIGINS.some((o) => origin === o) ||
      ALLOWED_ORIGINS.some((o) => referer.startsWith(o + "/"));
    if (!ok) {
      res.status(403).json({ error: "Forbidden origin" });
      return;
    }
  }

  const { name, course, rating, comment, token } = req.body || {};

  // 2) Tip va uzunlik validatsiyasi
  if (!isNonEmptyString(name, NAME_MAX)) {
    res.status(400).json({ error: "Invalid name" });
    return;
  }
  if (!isNonEmptyString(course, COURSE_MAX) || !ALLOWED_COURSES.has(course)) {
    res.status(400).json({ error: "Invalid course" });
    return;
  }
  if (!isNonEmptyString(comment, COMMENT_MAX)) {
    res.status(400).json({ error: "Invalid comment" });
    return;
  }
  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    res.status(400).json({ error: "Invalid rating" });
    return;
  }
  if (!isNonEmptyString(token, 4096)) {
    res.status(400).json({ error: "Missing CAPTCHA token" });
    return;
  }

  // 3) Cloudflare Turnstile tasdiqi
  const remoteIp =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    "";

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: token,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
    }
  );

  const verifyData = await verifyRes.json().catch(() => ({ success: false }));
  if (!verifyData.success) {
    res.status(400).json({ error: "CAPTCHA verification failed" });
    return;
  }

  // 4) Yozish
  const { data, error } = await supabase
    .from("testimonials")
    .insert({
      name: name.trim(),
      course: course.trim(),
      rating: ratingNum,
      comment: comment.trim(),
    })
    .select("id, name, course, rating, comment, created_at")
    .single();

  if (error) {
    res.status(500).json({ error: "Failed to save testimonial" });
    return;
  }

  res.status(200).json({ data });
}
