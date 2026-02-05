import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Teachers } from "./components/Teachers";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Detect system dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleDarkModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Set initial dark mode
    handleDarkModeChange(darkModeMediaQuery);
    
    // Listen for changes
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}