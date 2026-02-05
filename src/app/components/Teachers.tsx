import { motion } from "motion/react";
import { Award, Star, BookOpen } from "lucide-react";

export function Teachers() {
  const teachers = [
    {
      name: "G'afforov Sardor",
      experience: "14 yillik tajriba",
      achievements: [
        "IDC kitoblar mualliflaridan biri",
        "TasIMO Xalqaro olimpiada hakamlar hay'ati a'zosi",
        "2012 - Matematika fanidan Respublika 1-o'rin",
        "2013 - Oliy matematika fanidan Respublika 1-o'rin",
        "2020 - O'qituvchilar o'rtasida Toshkent shahar Olimpiadasi 1-o'rin",
        "2021 - O'qituvchilar o'rtasida Respublika 1-o'rin",
      ],
      stats: [
        "1000+ Abituriyent",
        "17 ta Prezident maktabi",
        "27 ta Al-Xorazmiy maktabi",
        "Ko'plab Xalqaro va Respublika olimpiada g'oliblari ustozi",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Jumayev Sherzod",
      experience: "19 yillik tajriba",
      achievements: [
        "IDC kitoblar mualliflaridan biri",
        "2005 - Matematika fanidan Respublika 1-o'rin",
      ],
      stats: [
        "1600+ Abituriyent",
        "50+ JIDU talabasi",
        "170+ Xalqaro Westminster Universitet talabasi",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Ergashov Doniyor",
      experience: "14 yillik tajriba",
      achievements: [],
      stats: [
        "7 ta Mirzo Ulug'bek",
        "50+ Akademik litsey",
        "1000+ abituriyent",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Ro'ziyev Baxtiyor",
      experience: "19 yillik tajriba",
      achievements: [
        "IDC kitoblar muallifi",
        "2008-2009 - Oliy matematika fanidan Respublika 1-o'rin",
      ],
      stats: ["1400+ abituriyentlar"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Abdulxayev Ulug'bek",
      experience: "14 yillik tajriba",
      achievements: [
        "2011 - Fizika bo'yicha Respublika 1-o'rin",
        "4 ta Fizika bo'yicha O'zbekiston terma jamoa a'zosi",
      ],
      stats: [
        "1400+ abituriyentlar",
        "50+ Gubkina grant",
        "15+ INHA grant",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Fayzullayev Sunnat",
      experience: "15 yillik tajriba",
      achievements: [],
      stats: [
        "1400+ abituriyentlar",
        "25+ INHA talabasi",
        "250+ TATU talabasi",
        "15+ JIDU talabasi",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      name: "Bobomurodov Shaxzod",
      experience: "13 yillik tajriba",
      achievements: ["2013 - Fizika fanidan Respublikada 1-o'rin"],
      stats: [
        "1000+ abituriyentlar",
        "15+ INHA talabasi",
        "15+ Gubkina talabasi",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Safoyev Sherzod",
      experience: "18 yillik tajriba",
      achievements: [
        "2008 - Xalqaro Matematika olimpiadasi bronza medal sohibi",
      ],
      stats: [
        "1700+ abituriyentlar",
        "60+ INHA grant",
        "140+ Xalqaro Westminster universiteti talabalari",
        "20+ TURIN grant",
        "80+ Gubkina talabasi",
        "50+ JIDU talabasi",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="teachers" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning Jamoa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] bg-clip-text text-transparent">
              Professional O'qituvchilar
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tajribali va malakali o'qituvchilar bilan o'rganing. Har bir ustoz
            o'z sohasida ko'p yillik tajribaga ega
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${teacher.color} h-2`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`bg-gradient-to-br ${teacher.color} size-16 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {teacher.name.charAt(0)}
                    </span>
                  </div>
                  <div className="bg-yellow-50 rounded-lg px-3 py-1 flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-800">5.0</span>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-1 text-gray-800 dark:text-gray-300">
                  {teacher.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{teacher.experience}</p>

                {teacher.achievements.length > 0 && (
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="size-4 text-blue-600" />
                      <p className="font-semibold text-sm text-gray-800 dark:text-gray-300">
                        Yutuqlari:
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 pl-2">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="size-4 text-blue-600" />
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-300">
                      Natijalar:
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {teacher.stats.map((stat, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 pl-2">
                        • {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Professional o'qituvchilar bilan o'rganishni boshlang
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://qorakol-ziyo.tilda.ws/math-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#32368d] to-[#ff5e2c] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            Bepul konsultatsiya olish
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
