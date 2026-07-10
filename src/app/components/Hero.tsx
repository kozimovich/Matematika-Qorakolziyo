import { motion } from "motion/react";
import { GraduationCap, Award, Users, BookOpen, ChevronRight } from "lucide-react";
const buildingImage = "/assets/hero-image.jpg";

const mathSymbols = [
  { char: "∑", style: { top: "18%", left: "6%" }, size: "text-6xl", duration: 9, delay: 0 },
  { char: "π", style: { top: "62%", left: "4%" }, size: "text-7xl", duration: 11, delay: 1.2 },
  { char: "√x", style: { top: "20%", right: "7%" }, size: "text-5xl", duration: 10, delay: 0.6 },
  { char: "∞", style: { bottom: "16%", right: "5%" }, size: "text-6xl", duration: 12, delay: 2 },
  { char: "ƒ(x)", style: { top: "42%", right: "16%" }, size: "text-4xl", duration: 13, delay: 1.6 },
  { char: "÷", style: { bottom: "28%", left: "13%" }, size: "text-5xl", duration: 10, delay: 2.4 },
];

export function Hero() {
  const features = [
    { icon: GraduationCap, text: "Professional o'qituvchilar" },
    { icon: Award, text: "Xalqaro olimpiadalar" },
    { icon: Users, text: "Kichik guruhlar" },
    { icon: BookOpen, text: "Zamonaviy dasturlar" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 bg-white dark:bg-black overflow-hidden transition-colors"
    >
      {/* Suzuvchi matematik belgilar — juda sokin */}
      {mathSymbols.map((symbol, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -18, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={symbol.style}
          className={`absolute ${symbol.size} font-semibold text-[#32368d]/[0.06] dark:text-white/[0.06] select-none pointer-events-none`}
          aria-hidden="true"
        >
          {symbol.char}
        </motion.span>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#ff5e2c] font-semibold mb-4"
        >
          O'zbekistondagi eng katta matematika o'quv markazi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.05]"
        >
          Matematika.
          <br />
          <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
            Yangi darajada.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          2-sinfdan 11-sinfgacha professional matematika ta'limi.
          Tajribali o'qituvchilar. Isbotlangan natijalar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-5 mb-14"
        >
          <a
            href="https://qorakol-ziyo.tilda.ws/math-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#32368d] text-white px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity"
          >
            Ro'yxatdan o'tish
          </a>
          <button
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-1 text-[17px] text-[#32368d] dark:text-[#8f94e8] hover:underline underline-offset-4"
          >
            Kurslarni ko'rish
            <ChevronRight className="size-4" />
          </button>
        </motion.div>

        {/* Bino rasmi — markazda, katta radius */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={buildingImage}
            alt="Qorako'l Ziyo binosi"
            className="w-full max-h-[420px] object-cover rounded-3xl shadow-2xl"
          />

          {/* Shisha chiplar */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 left-4 md:left-8 bg-white/70 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-left shadow-lg"
          >
            <div className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              24 000+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Bitiruvchilar</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-5 right-4 md:right-8 bg-white/70 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-left shadow-lg"
          >
            <div className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              98%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Talabalar mamnuniyati
            </div>
          </motion.div>
        </motion.div>

        {/* Feature chiplar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
              className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#1d1d1f] px-4 py-2.5"
            >
              <feature.icon className="size-4 text-[#32368d] dark:text-[#8f94e8]" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
