import { motion } from "motion/react";
import { Star, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  created_at: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; theme?: "light" | "dark" | "auto" }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function Testimonials() {
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: 5,
    comment: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!showForm || !turnstileSiteKey) return;

    const renderWidget = () => {
      if (!turnstileContainerRef.current || !window.turnstile) return;
      if (turnstileWidgetIdRef.current) return;
      turnstileWidgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        { sitekey: turnstileSiteKey, theme: "auto" }
      );
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existing = document.getElementById("turnstile-script") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", renderWidget, { once: true });
      return () => existing.removeEventListener("load", renderWidget);
    }

    const script = document.createElement("script");
    script.id = "turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget, { once: true });
    document.body.appendChild(script);
  }, [showForm, turnstileSiteKey]);

  useEffect(() => {
    if (showForm) return;
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.remove(turnstileWidgetIdRef.current);
    }
    turnstileWidgetIdRef.current = null;
  }, [showForm]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, course, rating, comment, created_at")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setTestimonials(data as Testimonial[]);
      }
      setIsLoading(false);
    };

    loadTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    const tokenInput = formRef.current?.querySelector(
      'input[name="cf-turnstile-response"]'
    ) as HTMLInputElement | null;
    const token = tokenInput?.value;

    if (!token) {
      setSubmitError("CAPTCHA tasdiqlash kerak.");
      return;
    }

    setIsSubmitting(true);

    const res = await fetch("/api/submit-testimonial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        course: formData.course,
        rating: formData.rating,
        comment: formData.comment,
        token,
      }),
    });

    await res.json().catch(() => null);

    if (!res.ok) {
      setSubmitError("Xatolik: fikringizni yuborib bo'lmadi. Keyinroq urinib ko'ring.");
      setIsSubmitting(false);
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
      return;
    }

    // Fikr moderatsiyadan o'tgach saytda ko'rinadi — ro'yxatga darhol qo'shilmaydi
    setIsSubmitting(false);

    setFormData({
      name: "",
      course: "",
      rating: 5,
      comment: "",
    });
    setShowForm(false);
    setSubmitSuccess(true);
    window.setTimeout(() => setSubmitSuccess(false), 6000);
  };

  const formatDate = (value: string) => {
    const d = new Date(value);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    return `${dd}.${mm}.${d.getFullYear()}`;
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1d1d1f] text-gray-900 dark:text-white placeholder:text-gray-400 border border-transparent focus:border-[#32368d] focus:ring-2 focus:ring-[#32368d]/20 outline-none transition-all";

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Talabalar fikrlari</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            Bizni tanlagan talabalar
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Minglab talabalar hayotini o'zgartirdi. Ularning fikrlari
          </p>

          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#32368d] text-white px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity"
            >
              O'z fikringizni qoldiring
            </button>
          )}

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-block bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-5 py-3 rounded-full text-sm font-medium"
            >
              Rahmat! Fikringiz qabul qilindi — tekshiruvdan so'ng saytda ko'rinadi.
            </motion.div>
          )}
        </motion.div>

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-14 bg-white dark:bg-[#161617] rounded-3xl shadow-lg p-8 border border-black/5 dark:border-white/10"
          >
            <h3 className="text-2xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-white">
              O'z fikringizni qoldiring
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {submitError && (
                <div className="text-sm text-red-600">{submitError}</div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ismingiz
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="To'liq ismingizni kiriting"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Qaysi kursda o'qidingiz?
                </label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Tanlang</option>
                  <option value="Matematika Abituriyentlar">Matematika Abituriyentlar</option>
                  <option value="SAT">SAT</option>
                  <option value="Prezident maktabiga">Prezident maktabiga tayyorlov</option>
                  <option value="Al-Xorazmiy">Al-Xorazmiy maktabiga</option>
                  <option value="Mirzo Ulug'bek">Mirzo Ulug'bek maktabiga</option>
                  <option value="Al-Beruniy">Al-Beruniy maktabiga</option>
                  <option value="Litsey">Litseylarga tayyorlov</option>
                  <option value="Ingliz tili">Ingliz tili va IELTS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Baho
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`size-8 transition-colors ${
                          star <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fikringiz
                </label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="O'quv markazi haqida fikringizni yozing..."
                />
              </div>

              {turnstileSiteKey ? (
                <div ref={turnstileContainerRef} />
              ) : (
                <div className="text-sm text-red-600">
                  CAPTCHA sozlanmagan. VITE_TURNSTILE_SITE_KEY ni .env ga qo'shing.
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#32368d] text-white px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="size-4" />
                  Yuborish
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-full text-[17px] text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && testimonials.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Hozircha fikrlar yo'q. Birinchi bo'lib fikr qoldiring!
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-3xl p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#32368d]">
                  <span className="text-lg font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.course}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <p className="text-xs text-gray-400 dark:text-gray-500">
                {formatDate(testimonial.created_at)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
