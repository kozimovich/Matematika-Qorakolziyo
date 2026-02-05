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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img src={logo} alt="Qorako'l Ziyo Logo" className="size-14" />
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
                Qorako'l Ziyo
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Since 2012 | O'quv Markazi</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#32368d] dark:hover:text-[#ff5e2c] transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              aria-label="Mavzu rejimini o'zgartirish"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#32368d] dark:hover:text-[#ff5e2c] transition-colors"
            >
              {theme === "system" ? (
                <Monitor className="size-5" />
              ) : isDark ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
              <span className="text-sm hidden lg:inline">
                {theme === "system" ? "Avto" : isDark ? "Tungi" : "Yorug'"}
              </span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+998785558555"
              className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Qo'ng'iroq qiling
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="size-6 text-gray-700 dark:text-gray-300" />
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
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#32368d] dark:hover:text-[#ff5e2c] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={onToggleTheme}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#32368d] dark:hover:text-[#ff5e2c] transition-colors mt-2"
              >
                <span className="inline-flex items-center gap-2">
                  {theme === "system" ? (
                    <Monitor className="size-5" />
                  ) : isDark ? (
                    <Moon className="size-5" />
                  ) : (
                    <Sun className="size-5" />
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
                className="block w-full text-center bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-6 py-3 rounded-lg font-medium mt-4"
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
