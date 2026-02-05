import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon raqam",
      content: "+998 78 555 8 555",
      link: "tel:+998785558555",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Manzillarimiz",
      content: "Chorsu, Olmazor, Shahriston, Universam, Novza, Sergeli",
      link: "https://maps.google.com",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      content: "08:00 - 18:00",
      link: null,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      username: "@qorakolziyo",
      link: "https://instagram.com/qorakolziyo",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      name: "Telegram",
      username: "@qorakolziyo",
      link: "https://t.me/qorakolziyo",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Biz bilan bog'laning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Aloqa Ma'lumotlari
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning yoki to'g'ridan-to'g'ri
            tashrif buyuring
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 h-full"
                >
                  <div
                    className={`bg-gradient-to-br ${info.color} size-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <info.icon className="size-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.content}</p>
                </a>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                  <div
                    className={`bg-gradient-to-br ${info.color} size-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <info.icon className="size-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Ijtimoiy tarmoqlarda bizni kuzating
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${social.color} text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3`}
              >
                <social.icon className="size-6" />
                <div className="text-left">
                  <div className="font-bold">{social.name}</div>
                  <div className="text-sm opacity-90">{social.username}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Map placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 h-64 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin className="size-16 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-xl text-gray-800 mb-2">
                Bizning Manzilimiz
              </h4>
              <p className="text-gray-600">
                Qorako'l tumani, Bukhara viloyati
                <br />
                O'zbekiston
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Tezkor bog'lanish uchun
            </h4>
            <p className="text-white/90 mb-6">
              Ish vaqti: 08:00–18:00. Telegram’da 24/7 yozishingiz mumkin
              (javob ish vaqtida).
            </p>
            <div className="space-y-3">
              <a
                href="tel:+998785558555"
                className="block bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="size-5" />
                  <div>
                    <div className="text-sm opacity-80">Qo'ng'iroq qiling</div>
                    <div className="font-bold">+998 78 555 8 555</div>
                  </div>
                </div>
              </a>
              <a
                href="https://t.me/qorakolziyo"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="size-5" />
                  <div>
                    <div className="text-sm opacity-80">Telegram</div>
                    <div className="font-bold">@qorakolziyo</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Additional benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              Nima uchun bugun qo'ng'iroq qilishingiz kerak?
            </h4>
            <ul className="space-y-3">
              {[
                "Bepul konsultatsiya va yo'l-yo'riq",
                "Kurs va narxlar to'g'risida batafsil ma'lumot",
                "Maxsus chegirmalar va takliflar",
                "Moslashuvchan to'lov rejalari",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-full p-1 mt-0.5">
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
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
