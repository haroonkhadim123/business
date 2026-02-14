"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Radio, Users, Star } from "lucide-react";

// Stats data
const stats = [
  { number: 199, label: "SUCCESSFUL PROJECTS", icon: <Briefcase className="w-10 h-10 text-white" /> },
  { number: 300, label: "MEDIA ACTIVITIES", icon: <Radio className="w-10 h-10 text-white" /> },
  { number: 699, label: "SKILLED EXPERTS", icon: <Users className="w-10 h-10 text-white" /> },
  { number: 120, label: "HAPPY CLIENTS", icon: <Star className="w-10 h-10 text-white" /> },
];

// ✅ FIXED Counter Component
function Counter({ value }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, count]);

  // Listen to value changes safely
  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  return (
    <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
      {display}+
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-24 -z-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-44 md:w-52"
            >
              
              <div className="relative mb-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white flex items-center justify-center bg-transparent">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-900 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>

                <div className="mt-4">
                  <Counter value={stat.number} />
                </div>
              </div>

              <p className="text-white text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
