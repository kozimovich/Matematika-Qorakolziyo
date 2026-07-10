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
    },
    {
      name: "Ergashov Doniyor",
      experience: "14 yillik tajriba",
      achievements: [],
      stats: ["7 ta Mirzo Ulug'bek", "50+ Akademik litsey", "1000+ abituriyent"],
    },
    {
      name: "Ro'ziyev Baxtiyor",
      experience: "19 yillik tajriba",
      achievements: [
        "IDC kitoblar muallifi",
        "2008-2009 - Oliy matematika fanidan Respublika 1-o'rin",
      ],
      stats: ["1400+ abituriyentlar"],
    },
    {
      name: "Abdulxayev Ulug'bek",
      experience: "14 yillik tajriba",
      achievements: [
        "2011 - Fizika bo'yicha Respublika 1-o'rin",
        "4 ta Fizika bo'yicha O'zbekiston terma jamoa a'zosi",
      ],
      stats: ["1400+ abituriyentlar", "50+ Gubkina grant", "15+ INHA grant"],
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
    },
    {
      name: "Bobomurodov Shaxzod",
      experience: "13 yillik tajriba",
      achievements: ["2013 - Fizika fanidan Respublikada 1-o'rin"],
      stats: ["1000+ abituriyentlar", "15+ INHA talabasi", "15+ Gubkina talabasi"],
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
    },
  ];

  return (
    <section id="teachers" className="py-24 bg-[#f5f5f7] dark:bg-[#161617] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Bizning jamoa</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            Professional o'qituvchilar
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Har bir ustoz o'z sohasida ko'p yillik tajribaga ega
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-[#1d1d1f] rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#32368d]">
                  <span className="text-xl font-semibold text-white">
                    {teacher.name.charAt(0)}
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1">
                  <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    5.0
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-lg tracking-tight mb-0.5 text-gray-900 dark:text-white">
                {teacher.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
                {teacher.experience}
              </p>

              {teacher.achievements.length > 0 && (
                <div className="mb-4 pb-4 border-b border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="size-4 text-[#ff5e2c]" />
                    <p className="font-medium text-sm text-gray-900 dark:text-white">
                      Yutuqlari
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {teacher.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs leading-relaxed text-gray-500 dark:text-gray-400"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="size-4 text-[#32368d] dark:text-[#8f94e8]" />
                  <p className="font-medium text-sm text-gray-900 dark:text-white">
                    Natijalar
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {teacher.stats.map((stat, idx) => (
                    <li
                      key={idx}
                      className="text-xs leading-relaxed text-gray-500 dark:text-gray-400"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-14"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-5">
            Professional o'qituvchilar bilan o'rganishni boshlang
          </p>
          <a
            href="https://qorakol-ziyo.tilda.ws/math-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#32368d] text-white px-7 py-3 rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity"
          >
            Bepul konsultatsiya olish
          </a>
        </motion.div>
      </div>
    </section>
  );
}
