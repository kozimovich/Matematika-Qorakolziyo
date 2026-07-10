import { motion } from "motion/react";
import { useEffect, useState } from "react";

function AnimatedNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 24000, suffix: "+", label: "Bitiruvchilar" },
    { value: 98, suffix: "%", label: "Muvaffaqiyat darajasi" },
    { value: 700, suffix: "+", label: "Yutuqlar va mukofotlar" },
    { value: 95, suffix: "%", label: "Talabalar mamnuniyati" },
  ];

  return (
    <section id="stats" className="py-28 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Bizning natijalar</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5">
            Raqamlar o'zi gapiradi.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            14 yillik faoliyatimiz davomida erishgan yutuqlarimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#8f94e8] to-[#ff5e2c] bg-clip-text text-transparent mb-3">
                {isVisible && <AnimatedNumber end={stat.value} />}
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-[15px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
            Har yili 2000+ yangi talabalar bizga ishonishadi
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Siz ham muvaffaqiyatli o'quvchilar qatoriga qo'shiling
          </p>
          <a
            href="https://qorakol-ziyo.tilda.ws/math-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity"
          >
            Hoziroq boshlash
          </a>
        </motion.div>
      </div>
    </section>
  );
}
