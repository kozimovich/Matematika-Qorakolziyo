import { motion } from "motion/react";
import { Star, Send } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  date: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: 5,
    comment: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load testimonials from localStorage
    const saved = localStorage.getItem("testimonials");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Default testimonials
      const defaultTestimonials: Testimonial[] = [
        {
          id: "1",
          name: "Aziz Rahimov",
          course: "Matematika Abituriyentlar",
          rating: 5,
          comment: "Matematika bo'yicha juda yaxshi o'qitadilar. O'qituvchilar professional va har bir talabaga alohida e'tibor berishadi.",
          date: new Date().toLocaleDateString(),
        },
        {
          id: "2",
          name: "Dilnoza Karimova",
          course: "Prezident maktabiga tayyorlov",
          rating: 5,
          comment: "Farzandim prezident maktabiga o'qishga kirdi. Markazga katta rahmat! O'qituvchilar juda malakali.",
          date: new Date().toLocaleDateString(),
        },
        {
          id: "3",
          name: "Bobur Tursunov",
          course: "SAT",
          rating: 5,
          comment: "SAT imtihoniga a'lo tayyorladdilar. Natijam kutganimdan ham yaxshi bo'ldi. Tavsiya qilaman!",
          date: new Date().toLocaleDateString(),
        },
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(defaultTestimonials));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      course: formData.course,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem("testimonials", JSON.stringify(updated));

    // Reset form
    setFormData({
      name: "",
      course: "",
      rating: 5,
      comment: "",
    });
    setShowForm(false);

    // Show success message
    alert("Rahmat! Sizning fikringiz qo'shildi!");
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Talabalar fikrlari
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
              Bizni Tanlagan Talabalar
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Minglab talabalar hayotini o'zgartirdi. Ularning fikrlari
          </p>
          
          {!showForm && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              O'z fikringizni qoldiring
            </motion.button>
          )}
        </motion.div>

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">O'z fikringizni qoldiring</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                        className={`size-8 ${
                          star <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="O'quv markazi haqida fikringizni yozing..."
                />
              </div>

              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  <Send className="size-5" />
                  Yuborish
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowForm(false)}
                  className="px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Bekor qilish
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#32368d] to-[#ff5e2c] size-12 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-500">
                {testimonial.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
