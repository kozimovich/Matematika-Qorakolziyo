import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Sayt qulashidan ko'ra, feature'ni o'chirib qo'yamiz va konsolga ogohlantirish chiqaramiz.
  // Foydalanuvchi VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY ni env'larga qo'shishi kerak.
  console.warn(
    "Supabase env vars missing (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). Testimonials and admin features will be disabled."
  );
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseAnonKey ?? "placeholder-anon-key"
);
