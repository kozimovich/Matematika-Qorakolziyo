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
    <div className="relative overflow-hidden bg-[#1d1d1f] py-3.5 border-y border-white/10">
      <motion.div
        className="flex w-max items-center gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((loc, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide"
          >
            <MapPin className="size-3.5 text-[#ff5e2c]" />
            {loc} filiali
            <span className="ml-10 text-white/20 select-none">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
