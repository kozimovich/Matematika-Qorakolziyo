import { motion } from "motion/react";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
const buildingImage = "/assets/hero-image.jpg";

const mathSymbols = [
  { char: "∑", style: { top: "14%", left: "4%" }, size: "text-6xl", duration: 7, delay: 0 },
  { char: "π", style: { top: "68%", left: "3%" }, size: "text-7xl", duration: 9, delay: 1.2 },
  { char: "√x", style: { top: "22%", right: "6%" }, size: "text-5xl", duration: 8, delay: 0.6 },
  { char: "∞", style: { bottom: "14%", right: "4%" }, size: "text-6xl", duration: 10, delay: 2 },
  { char: "ƒ(x)", style: { top: "48%", left: "44%" }, size: "text-4xl", duration: 11, delay: 1.6 },
  { char: "÷", style: { bottom: "30%", left: "12%" }, size: "text-5xl", duration: 8, delay: 2.4 },
];

export function Hero() {
  const features = [
    { icon: GraduationCap, text: "Professional o'qituvchilar" },
    { icon: Award, text: "Xalqaro olimpiadalar" },
    { icon: Users, text: "Kichik guruhlar" },
    { icon: BookOpen, text: "Zamonaviy dasturlar" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"
      />

      {/* Suzuvchi matematik belgilar */}
      {mathSymbols.map((symbol, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -22, 0], rotate: [0, 6, -6, 0] }}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={symbol.style}
          className={`absolute ${symbol.size} font-bold text-[#32368d]/10 dark:text-white/10 select-none pointer-events-none`}
          aria-hidden="true"
        >
          {symbol.char}
        </motion.span>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎓 O'zbekistondagi eng katta Matematika o'quv markazi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
                Qorako'l Ziyo
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">Matematika kurslari</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              2-sinfdan 11-sinfgacha professional matematika ta'limi.
              Zamonaviy ta'lim usullari va tajribali o'qituvchilar bilan
              bilimingizni yangi bosqichga olib chiqing!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(50, 54, 141, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://qorakol-ziyo.tilda.ws/math-form"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all text-lg cursor-pointer"
              >
                Ro'yxatdan o'tish
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#32368d" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 text-lg"
              >
                Kurslarni ko'rish
              </motion.button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center gap-2 text-center cursor-pointer"
                >
                  <feature.icon className="size-6 text-[#32368d]" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px]">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#32368d] to-[#ff5e2c] p-3 rounded-xl">
                    <GraduationCap className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl dark:text-white">24000+</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Bitiruvchilar</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6">
                  <img
                    src={buildingImage}
                    alt="Qorako'l Ziyo Building"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Secondary Card */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-0 right-0 left-12 bg-gradient-to-br from-[#32368d] to-[#ff5e2c] rounded-2xl shadow-2xl p-8 text-white"
              >
                <h3 className="font-bold text-2xl mb-2">98%</h3>
                <p className="text-white/80 mb-4">Talabalar mamnuniyati</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
