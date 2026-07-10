import { motion } from "motion/react";
import { Phone, MapPin, Instagram, MessageCircle, Heart } from "lucide-react";
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
    <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors">
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Kelajagingizni bugun boshlang.
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Professional o'qituvchilar va zamonaviy o'quv dasturlari bilan
          bilimingizni yangi bosqichga olib chiqing
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+998785558555"
            className="inline-flex items-center gap-2 bg-[#32368d] text-white px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="size-4" />
            Qo'ng'iroq qiling
          </a>
          <a
            href="https://t.me/qorakolziyo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white px-7 py-3 rounded-full text-[17px] font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
          >
            <MessageCircle className="size-4" />
            Telegram
          </a>
        </div>
      </motion.div>

      {/* Apple uslubidagi kulrang ma'lumot bloki */}
      <div className="bg-[#f5f5f7] dark:bg-[#161617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div
                className="flex items-center gap-2.5 mb-4 cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                <img src={logo} alt="Qorako'l Ziyo Logo" className="size-9" />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900 dark:text-white">
                    Qorako'l Ziyo
                  </h3>
                  <p className="text-xs text-gray-500">Since 2012 | O'quv Markazi</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                2012-yildan buyon sifatli ta'lim xizmatlari ko'rsatib kelamiz.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/qorakolziyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href="https://t.me/qorakolziyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex size-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
                >
                  <MessageCircle className="size-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">
                Tezkor havolalar
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">
                Kurslarimiz
              </h4>
              <ul className="space-y-2.5">
                {courses.map((course) => (
                  <li key={course}>
                    <button
                      onClick={() => scrollToSection("courses")}
                      className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {course}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">
                Bog'lanish
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+998785558555"
                    className="flex items-start gap-3 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Phone className="size-4 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-400">Telefon</div>
                      <div className="text-sm">+998 78 555 8 555</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-500">
                    <MapPin className="size-4 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-400">Manzillar</div>
                      <div className="text-sm">
                        Chorsu, Olmazor, Shahriston, Universam, Novza, Sergeli
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-black/10 dark:border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-xs text-gray-500 text-center md:text-left">
                © {year} Qorako'l Ziyo O'quv Markazi. Barcha huquqlar himoyalangan.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Heart className="size-3.5 fill-red-500 text-red-500" />
                <span>bilan Toshkentda ishlab chiqildi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
