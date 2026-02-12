import { motion } from "motion/react";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";
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
    {
      icon: Users,
      value: 24000,
      suffix: "+",
      label: "Bitiruvchilar",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      value: 98,
      suffix: "%",
      label: "Muvaffaqiyat darajasi",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Award,
      value: 700,
      suffix: "+",
      label: "Yutuqlar va mukofotlar",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Talabalar mamnuniyati",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                             radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning Natijalar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Raqamlarda ko'rsatkich
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            14 yillik faoliyatimiz davomida erishgan yutuqlarimiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-xl shadow-2xl p-8 text-center relative overflow-hidden group"
            >
              {/* Animated gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                animate={isVisible ? {
                  rotate: [0, 360],
                } : {}}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                }}
                className={`bg-gradient-to-br ${stat.color} size-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <stat.icon className="size-8 text-white" />
              </motion.div>

              {/* Number */}
              <div className="mb-2">
                <span className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {isVisible && <AnimatedNumber end={stat.value} />}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium">{stat.label}</p>

              {/* Decorative element */}
              <motion.div
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + 0.5,
                }}
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Har yili 2000+ yangi talabalar bizga ishonishadi
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Siz ham muvaffaqiyatli o'quvchilar qatoriga qo'shiling
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://qorakol-ziyo.tilda.ws/math-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
          >
            Hoziroq boshlash
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
