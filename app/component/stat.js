"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Package, Handshake, Boxes, Users } from "lucide-react";

const stats = [
  { number: 50000, label: "ORDERS FULFILLED", suffix: "k+", icon: <Package className="w-10 h-10 text-[#00e6ff]" /> },
  { number: 100, label: "BUSINESS PARTNERS", suffix: "+", icon: <Handshake className="w-10 h-10 text-[#00e6ff]" /> },
  { number: 20, label: "PRODUCT LINES SUPPORTED", suffix: "+", icon: <Boxes className="w-10 h-10 text-[#00e6ff]" /> },
  { number: 10000, label: "SATISFIED CUSTOMERS", suffix: "k+", icon: <Users className="w-10 h-10 text-[#00e6ff]" /> },
];

function Counter({ value, suffix }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, count]);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  const formatDisplay = () => {
    if (suffix === "k+") {
      return `${(display / 1000).toFixed(0)}k+`;
    }
    return `${display}${suffix}`;
  };

  return (
    <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
      {formatDisplay()}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-16 md:py-24">
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
                
                {/* Outer Gradient Border */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-[2px] bg-gradient-to-r from-[#00e6ff] to-[#139aff] shadow-[0_0_25px_rgba(0,230,255,0.4)]">
                  
                  {/* Inner Circle */}
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>

                <div className="mt-4">
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}