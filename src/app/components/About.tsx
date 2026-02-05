import { motion } from "motion/react";
import { Target, Eye, Heart, Zap } from "lucide-react";
const officeImage = "/assets/about-image.png";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Maqsadimiz",
      description: "Har bir talabaga sifatli ta'lim berish va ularning kelajagini yorug'lashtirish",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Eye,
      title: "Vazifamiz",
      description: "Zamonaviy o'quv dasturlari va professional o'qituvchilar orqali bilim berish",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Heart,
      title: "Qadriyatlarimiz",
      description: "Halollik, mas'uliyat, samimiylik va doimiy rivojlanish",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Innovatsiya",
      description: "Eng so'nggi texnologiyalar va o'qitish metodlaridan foydalanish",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Biz haqimizda
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
              Qorako'l Ziyo
            </span>{" "}
            <span className="dark:text-white">O'quv Markazi</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            2012-yilda tashkil etilgan markazimiz 14 yillik tajriba bilan minglab
            talabalarni muvaffaqiyatli kelajakka yo'naltirdi. Biz faqat bilim
            bermasdan, balki har bir talabaning qobiliyatini rivojlantiramiz.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={officeImage}
                alt="Modern Education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  14+
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  Yillik tajriba
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Nima uchun aynan bizni tanlashingiz kerak?
            </h3>
            <div className="space-y-4 mb-8">
              {[
                "Professional va tajribali o'qituvchilar jamoasi",
                "Kichik guruhlar - har bir talabaga individual yondashuv",
                "Zamonaviy texnologiyalar va o'quv materiallari",
                "Qulay o'quv xonalari va zamonaviy jihozlar",
                "Moslashuvchan jadval va turli kurs variantlari",
                "Doimiy maslahat va qo'llab-quvvatlash",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-full p-1 mt-1">
                    <svg
                      className="size-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div
                className={`bg-gradient-to-br ${value.color} p-3 rounded-lg inline-block mb-4`}
              >
                <value.icon className="size-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
