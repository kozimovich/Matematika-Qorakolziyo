import { motion } from "motion/react";
import { Calculator, Globe2, Target, Trophy, Check, ChevronRight } from "lucide-react";

export function Courses() {
  const courses = [
    {
      icon: Calculator,
      title: "Matematika Abituriyentlar uchun",
      description: "9-10-11-sinflar uchun",
      features: [
        "Matematika I qism",
        "Matematika II qism",
        "Matematika III qism",
        "Geometriya",
        "Sterometriya",
        "Testlar to'plami",
        "Bepul sinov testlari",
      ],
    },
    {
      icon: Trophy,
      title: "SAT",
      description: "Xalqaro standart test",
      features: [
        "SAT Math tayyorlov",
        "Critical thinking",
        "Problem solving",
        "Amaliy mashqlar",
      ],
    },
    {
      icon: Target,
      title: "Prezident va Al Xorazmiy maktabiga tayyorlov",
      description: "2-3-4-sinflar uchun",
      features: [
        "Yosh iqtidor egalari uchun 1-qism",
        "Yosh iqtidor egalari uchun 2-qism",
        "Yosh iqtidor egalari uchun 3-qism",
        "Tanqidiy fikrlash",
        "Muammoni hal qilish",
      ],
    },
    {
      icon: Calculator,
      title: "Mirzo Ulug'bek maktabiga tayyorlov",
      description: "4-5-6-sinflar uchun",
      features: [
        "Matematika asoslari",
        "Mantiqiy fikrlash",
        "Olimpiada masalalari",
        "Amaliy topshiriqlar",
      ],
    },
    {
      icon: Calculator,
      title: "Al-Beruniy maktabiga tayyorlov",
      description: "7-8-sinflar uchun",
      features: [
        "Matematika chuqur",
        "Algebra",
        "Geometriya",
        "Olimpiada tayyorlov",
      ],
    },
    {
      icon: Calculator,
      title: "Litseylarga tayyorlov",
      description: "7-8-9-sinflar uchun",
      features: [
        "Matematika",
        "Algebra va geometriya",
        "Testlar yechimlari",
        "Imtihon tayyorlov",
      ],
    },
    {
      icon: Calculator,
      title: "Fizika",
      description: "7-11-sinflar uchun",
      features: [
        "Nazariy va amaliy darslar",
        "Masalalar yechish",
        "Laboratoriya ishlariga tayyorlov",
        "Imtihon va olimpiada savollari",
      ],
    },
    {
      icon: Target,
      title: "Ona tili",
      description: "5-11-sinflar uchun",
      features: [
        "Imlo va grammatik qoidalar",
        "Matn tahlili",
        "Diktant va yozma mashqlar",
        "Imtihon tayyorlov",
      ],
    },
    {
      icon: Globe2,
      title: "Ingliz tili va IELTS kurslari",
      description: "Barcha darajalar uchun",
      features: [
        "Beginner - Advanced",
        "IELTS tayyorlov",
        "Speaking va Listening",
        "Grammar va Writing",
      ],
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Bizning kurslar</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            O'quv yo'nalishlari
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Turli yo'nalishlarda professional o'qituvchilar bilan o'rganing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-3xl p-7 hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#32368d] mb-5">
                <course.icon className="size-6 text-white" />
              </span>
              <h3 className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                {course.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check
                      className="size-4 mt-0.5 text-[#32368d] dark:text-[#8f94e8]"
                      strokeWidth={3}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://qorakol-ziyo.tilda.ws/math-form"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-[15px] font-medium text-[#32368d] dark:text-[#8f94e8] hover:underline underline-offset-4"
              >
                Ro'yxatdan o'tish
                <ChevronRight className="size-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
