import { motion } from "motion/react";
import { Target, Eye, Heart, Zap, Check } from "lucide-react";
const officeImage = "/assets/about-image.jpg";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Maqsadimiz",
      description:
        "Har bir talabaga sifatli ta'lim berish va ularning kelajagini yorug'lashtirish",
    },
    {
      icon: Eye,
      title: "Vazifamiz",
      description:
        "Zamonaviy o'quv dasturlari va professional o'qituvchilar orqali bilim berish",
    },
    {
      icon: Heart,
      title: "Qadriyatlarimiz",
      description: "Halollik, mas'uliyat, samimiylik va doimiy rivojlanish",
    },
    {
      icon: Zap,
      title: "Innovatsiya",
      description:
        "Eng so'nggi texnologiyalar va o'qitish metodlaridan foydalanish",
    },
  ];

  const reasons = [
    "Professional va tajribali o'qituvchilar jamoasi",
    "Kichik guruhlar - har bir talabaga individual yondashuv",
    "Zamonaviy texnologiyalar va o'quv materiallari",
    "Qulay o'quv xonalari va zamonaviy jihozlar",
    "Moslashuvchan jadval va turli kurs variantlari",
    "Doimiy maslahat va qo'llab-quvvatlash",
  ];

  return (
    <section id="about" className="py-24 bg-[#f5f5f7] dark:bg-[#161617] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Biz haqimizda</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            Qorako'l Ziyo O'quv Markazi
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            2012-yilda tashkil etilgan markazimiz 14 yillik tajriba bilan minglab
            talabalarni muvaffaqiyatli kelajakka yo'naltirdi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={officeImage}
              alt="Qorako'l Ziyo o'quv markazi"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-3 md:-right-5 bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 shadow-lg text-center"
            >
              <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
                14+
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Yillik tajriba</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-gray-900 dark:text-white">
              Nima uchun aynan bizni tanlashingiz kerak?
            </h3>
            <div className="space-y-4">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex size-5 items-center justify-center rounded-full bg-[#32368d]">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-[17px] text-gray-700 dark:text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#1d1d1f] p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#32368d]/10 dark:bg-white/10 mb-5">
                <value.icon className="size-5 text-[#32368d] dark:text-[#8f94e8]" />
              </span>
              <h4 className="font-semibold text-lg tracking-tight mb-2 text-gray-900 dark:text-white">
                {value.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
