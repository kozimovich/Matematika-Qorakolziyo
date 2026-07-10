import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  Check,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon raqam",
      content: "+998 78 555 8 555",
      link: "tel:+998785558555",
    },
    {
      icon: MapPin,
      title: "Manzillarimiz",
      content: "Chorsu, Olmazor, Shahriston, Universam, Novza, Sergeli",
      link: "https://t.me/qorakolziyo_manzillar",
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      content: "08:00 - 18:00",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      username: "@qorakolziyo",
      link: "https://instagram.com/qorakolziyo",
    },
    {
      icon: MessageCircle,
      name: "Telegram",
      username: "@qorakolziyo",
      link: "https://t.me/qorakolziyo",
    },
  ];

  const benefits = [
    "Bepul konsultatsiya va yo'l-yo'riq",
    "Kurs va narxlar to'g'risida batafsil ma'lumot",
    "Maxsus chegirmalar va takliflar",
    "Moslashuvchan to'lov rejalari",
  ];

  return (
    <section id="contact" className="py-24 bg-[#f5f5f7] dark:bg-[#161617] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#ff5e2c] font-semibold mb-3">Biz bilan bog'laning</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            Aloqa ma'lumotlari
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning yoki to'g'ridan-to'g'ri
            tashrif buyuring
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {contactInfo.map((info, index) => {
            const inner = (
              <>
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#32368d]/10 dark:bg-white/10 mb-5">
                  <info.icon className="size-5 text-[#32368d] dark:text-[#8f94e8]" />
                </span>
                <h4 className="font-semibold text-lg tracking-tight mb-1.5 text-gray-900 dark:text-white">
                  {info.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">{info.content}</p>
              </>
            );
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
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
                    className="block bg-white dark:bg-[#1d1d1f] rounded-3xl p-7 h-full shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="bg-white dark:bg-[#1d1d1f] rounded-3xl p-7 h-full shadow-sm">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-center mb-6 text-gray-900 dark:text-white">
            Ijtimoiy tarmoqlarda bizni kuzating
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#1d1d1f] rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <social.icon className="size-5 text-[#32368d] dark:text-[#8f94e8]" />
                <div className="text-left">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {social.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    {social.username}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#32368d] rounded-3xl p-8 text-white"
          >
            <h4 className="text-2xl font-semibold tracking-tight mb-3">
              Tezkor bog'lanish uchun
            </h4>
            <p className="text-white/70 mb-6">
              Ish vaqti: 08:00–18:00. Telegram'da 24/7 yozishingiz mumkin
              (javob ish vaqtida).
            </p>
            <div className="space-y-3">
              <a
                href="tel:+998785558555"
                className="block bg-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="size-5" />
                  <div>
                    <div className="text-sm text-white/60">Qo'ng'iroq qiling</div>
                    <div className="font-semibold">+998 78 555 8 555</div>
                  </div>
                </div>
              </a>
              <a
                href="https://t.me/qorakolziyo"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="size-5" />
                  <div>
                    <div className="text-sm text-white/60">Telegram</div>
                    <div className="font-semibold">@qorakolziyo</div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Additional benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-[#1d1d1f] rounded-3xl p-8 shadow-sm"
          >
            <h4 className="font-semibold text-lg tracking-tight mb-5 text-gray-900 dark:text-white">
              Nima uchun bugun qo'ng'iroq qilishingiz kerak?
            </h4>
            <ul className="space-y-3.5">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-[#32368d]">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
