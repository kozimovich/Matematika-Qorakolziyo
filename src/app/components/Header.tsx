import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useState } from "react";
const logo = "/assets/header-logo.png";

type HeaderProps = {
  theme: "light" | "dark" | "system";
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Header({ theme, isDark, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Bosh sahifa", id: "hero" },
    { name: "Biz haqimizda", id: "about" },
    { name: "Kurslar", id: "courses" },
    { name: "O'qituvchilar", id: "teachers" },
    { name: "Natijalar", id: "stats" },
    { name: "Aloqa", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => scrollToSection("hero")}
          >
            <img src={logo} alt="Qorako'l Ziyo Logo" className="size-8" />
            <span className="font-semibold text-[17px] tracking-tight text-gray-900 dark:text-white">
              Qorako'l Ziyo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              aria-label="Mavzu rejimini o'zgartirish"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "system" ? (
                <Monitor className="size-4" />
              ) : isDark ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </button>
            <a
              href="tel:+998785558555"
              className="text-sm font-medium bg-[#32368d] text-white px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Qo'ng'iroq qiling
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menyu"
          >
            {isMenuOpen ? (
              <X className="size-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="size-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-2 py-3 text-[17px] text-gray-800 dark:text-gray-200 border-b border-black/5 dark:border-white/10"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={onToggleTheme}
                className="block w-full text-left px-2 py-3 text-[17px] text-gray-800 dark:text-gray-200"
              >
                <span className="inline-flex items-center gap-2">
                  {theme === "system" ? (
                    <Monitor className="size-4" />
                  ) : isDark ? (
                    <Moon className="size-4" />
                  ) : (
                    <Sun className="size-4" />
                  )}
                  <span>
                    {theme === "system"
                      ? "Avto rejim"
                      : isDark
                        ? "Tungi rejim"
                        : "Yorug' rejim"}
                  </span>
                </span>
              </button>
              <a
                href="tel:+998785558555"
                className="block w-full text-center bg-[#32368d] text-white px-6 py-3 rounded-full font-medium mt-3"
              >
                Qo'ng'iroq qiling
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
