import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const locations = [
  "Chorsu",
  "Olmazor",
  "Shahriston",
  "Universam",
  "Novza",
  "Sergeli",
];

export function LocationsMarquee() {
  // 3 nusxa ketma-ket qo'yiladi; lenta bir nusxa kenglikka surilib, uzluksiz aylanadi
  const row = [...locations, ...locations, ...locations];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#32368d] to-[#ff5e2c] py-4">
      <motion.div
        className="flex w-max items-center gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((loc, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-white font-medium tracking-wide"
          >
            <MapPin className="size-4 opacity-80" />
            {loc} filiali
            <span className="ml-10 text-white/50 select-none">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
