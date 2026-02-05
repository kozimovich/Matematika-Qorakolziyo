import { motion } from "motion/react";
import { Calculator, Globe2, Target, Trophy } from "lucide-react";

export function Courses() {
  const courses = [
    {
      icon: Calculator,
      title: "Matematika Abituriyentlar uchun",
      description: "9-10-11-sinflar uchun",
      duration: "8-12 oy",
      color: "from-blue-500 to-blue-600",
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
      duration: "6-10 oy",
      color: "from-purple-500 to-purple-600",
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
      duration: "6-8 oy",
      color: "from-teal-500 to-teal-600",
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
      duration: "6-8 oy",
      color: "from-indigo-500 to-indigo-600",
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
      duration: "6-10 oy",
      color: "from-orange-500 to-orange-600",
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
      duration: "6-10 oy",
      color: "from-green-500 to-green-600",
      features: [
        "Matematika",
        "Algebra va geometriya",
        "Testlar yechimlari",
        "Imtihon tayyorlov",
      ],
    },
    {
      icon: Globe2,
      title: "Ingliz tili va IELTS kurslari",
      description: "Barcha darajalar uchun",
      duration: "6-12 oy",
      color: "from-pink-500 to-pink-600",
      features: [
        "Beginner - Advanced",
        "IELTS tayyorlov",
        "Speaking va Listening",
        "Grammar va Writing",
      ],
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning Kurslar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
              O'quv Yo'nalishlari
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Turli yo'nalishlarda professional o'qituvchilar bilan o'rganing va
            kelajagingizni mustahkamlang
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${course.color} p-6 text-white`}>
                <course.icon className="size-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-white/90 text-sm">{course.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Davomiyligi</p>
                    <p className="font-semibold text-gray-800">{course.duration}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`bg-gradient-to-br ${course.color} rounded-full p-0.5 mt-1`}>
                        <svg
                          className="size-3 text-white"
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
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://qorakol-ziyo.tilda.ws/math-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  Ro'yxatdan o'tish
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
