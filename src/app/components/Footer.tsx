import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Heart,
} from "lucide-react";
const logo = "/assets/header-logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { name: "Bosh sahifa", id: "hero" },
    { name: "Biz haqimizda", id: "about" },
    { name: "Kurslar", id: "courses" },
    { name: "O'qituvchilar", id: "teachers" },
    { name: "Natijalar", id: "stats" },
    { name: "Aloqa", id: "contact" },
  ];

  const courses = [
    "Matematika Abituriyentlar",
    "SAT",
    "Prezident maktabiga",
    "Al-Xorazmiy maktabiga",
    "Mirzo Ulug'bek",
    "Al-Beruniy",
    "Litseylarga tayyorlov",
    "Ingliz tili va IELTS",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img src={logo} alt="Qorako'l Ziyo Logo" className="size-12" />
              <div>
                <h3 className="font-bold text-xl">Qorako'l Ziyo</h3>
                <p className="text-sm text-gray-400">Since 2012 | O'quv Markazi</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              2012-yildan buyon sifatli ta'lim xizmatlari ko'rsatib kelamiz.
              Har bir talabaning kelajagini yorug'lashtirish bizning
              vazifamizdir.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/qorakolziyo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Instagram className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://t.me/qorakolziyo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="size-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tezkor havolalar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kurslarimiz</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <button
                    onClick={() => scrollToSection("courses")}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Bog'lanish</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+998785558555"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="size-5 mt-0.5 group-hover:text-blue-400 transition-colors" />
                  <div>
                    <div className="text-sm text-gray-500">Telefon</div>
                    <div>+998 78 555 8 555</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="size-5 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Manzillar</div>
                    <div>Chorsu, Olmazor, Shahriston, Universam, Novza, Sergeli</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {year} Qorako'l Ziyo O'quv Markazi. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Ishlab chiqildi</span>
              <Heart className="size-4 fill-red-500 text-red-500 animate-pulse" />
              <span>bilan</span>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Kelajagingizni bugun boshlang!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Professional o'qituvchilar va zamonaviy o'quv dasturlari bilan
            bilimingizni yangi bosqichga olib chiqing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+998785558555"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-xl hover:shadow-2xl transition-shadow inline-flex items-center gap-2"
            >
              <Phone className="size-5" />
              Qo'ng'iroq qiling
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/qorakolziyo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium hover:bg-white/30 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="size-5" />
              Telegram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
