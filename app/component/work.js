import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative w-full h-[400px] md:h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url('/work.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/15 to-[#139aff]/25"></div>

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
            href="/partner"
            className="text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
            }}
          >
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}