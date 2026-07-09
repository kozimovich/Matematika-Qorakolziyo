import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Teachers } from "./components/Teachers";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AdminPanel } from "./components/AdminPanel";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { LocationsMarquee } from "./components/LocationsMarquee";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [isDark, setIsDark] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const shouldUseDark =
        theme === "dark" || (theme === "system" && mediaQuery.matches);
      document.documentElement.classList.toggle("dark", shouldUseDark);
      setIsDark(shouldUseDark);
    };

    applyTheme();

    const handleSystemChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      setIsAdminRoute(path.endsWith("/admin") || hash === "#/admin");
    };

    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);
    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  const cycleTheme = () => {
    setTheme((current) => {
      if (current === "system") return "light";
      if (current === "light") return "dark";
      return "system";
    });
  };

  if (isAdminRoute) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollProgress />
      <Header theme={theme} isDark={isDark} onToggleTheme={cycleTheme} />
      <main>
        <Hero />
        <LocationsMarquee />
        <About />
        <Courses />
        <Teachers />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
