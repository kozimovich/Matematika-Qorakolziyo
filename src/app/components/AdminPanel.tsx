import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LogOut, Trash2, RefreshCcw } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  created_at: string;
}

export function AdminPanel() {
  const [sessionReady, setSessionReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setIsSignedIn(!!data.session);
      setSessionReady(true);
    };

    init();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadTestimonials = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from("testimonials")
      .select("id, name, course, rating, comment, created_at")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError("Ma'lumotlarni olishda xatolik bo'ldi.");
    } else {
      setTestimonials((data || []) as Testimonial[]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isSignedIn) {
      loadTestimonials();
    }
  }, [isSignedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Login yoki parol xato.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Haqiqatan ham ushbu fikrni o'chirmoqchimisiz?");
    if (!confirmed) return;

    setIsDeleting(id);
    const { error: deleteError } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError("O'chirishda xatolik bo'ldi.");
    } else {
      setTestimonials((prev) => prev.filter((item) => item.id !== id));
    }

    setIsDeleting(null);
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredTestimonials = normalizedSearch
    ? testimonials.filter((item) =>
        [item.name, item.course, item.comment]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      )
    : testimonials;

  if (!sessionReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-600">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin panel</h1>
            <p className="text-gray-600">Talabalar fikrlarini boshqarish</p>
          </div>
          {isSignedIn && (
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Qidirish: ism, kurs, fikr"
                  className="w-full md:w-72 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={loadTestimonials}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
              >
                <RefreshCcw className="size-4" />
                Yangilash
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
              >
                <LogOut className="size-4" />
                Chiqish
              </button>
            </div>
          )}
        </div>

        {!isSignedIn ? (
          <div className="max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Admin kirish</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parol</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700"
              >
                Kirish
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
            {isLoading ? (
              <p className="text-gray-600">Yuklanmoqda...</p>
            ) : filteredTestimonials.length === 0 ? (
              <p className="text-gray-600">Qidiruv bo‘yicha fikr topilmadi.</p>
            ) : (
              <div className="grid gap-4">
                {filteredTestimonials.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.course}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(item.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">{item.comment}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-600">Baho: {item.rating}/5</div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={isDeleting === item.id}
                        className="inline-flex items-center gap-2 rounded-lg border border-red-200 text-red-600 px-3 py-2 text-sm hover:bg-red-50 disabled:opacity-60"
                      >
                        <Trash2 className="size-4" />
                        O'chirish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
