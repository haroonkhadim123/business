import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative w-full h-[400px] md:h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url('/work.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Let’s discuss about how we can help <br /> make your business better
        </motion.h2>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Let’s Work Together
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
