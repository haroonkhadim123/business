"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Al Hoorab",
    role: "Chief Executive Officer",
    img: "/ceo.jpg",
  },
  {
    name: "Fatima Al Rashid",
    role: "Chief Operating Officer",
    img: "/leader2.jpg",
  },
  {
    name: "Omar Al Saud",
    role: "Director of Supply Chain",
    img: "/leader3.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <>
      {/* CEO STORY SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
           <div className="relative rounded-3xl overflow-hidden shadow-2xl">
  <Image
    src="/ceo.jpg"
    alt="CEO of HOORAB GROUP"
    width={600}
    height={700}
    className="object-cover"  // ✅ Remove w-full h-[500px] from here
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
    quality={85}  // ✅ Better quality for important image
    priority={true}  // ✅ CEO image is important - load early
  />
</div>
              {/* Quote Icon Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#00e6ff] to-[#139aff] p-4 rounded-full shadow-xl">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* CEO Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="uppercase tracking-widest font-semibold text-sm text-[#00e6ff]">
                CEO Story
              </p>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Building Trust Through{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Quality & Integrity
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                At HOORAB GROUP, our journey is driven by a clear vision of building a business that stands for 
                <span className="font-semibold text-[#139aff]"> trust, quality, and long-term value</span>. 
                From the beginning, the goal has been to create more than just a company. The goal has been to 
                build a strong business foundation that connects products, opportunities, and markets with 
                professionalism and purpose.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                Our CEO believes that real business success is built on 
                <span className="font-semibold text-[#00e6ff]"> commitment, consistency, and strong relationships</span>. 
                With a focus on retail, wholesale, sourcing, and distribution, HOORAB GROUP was established to 
                meet market needs through reliable supply solutions and customer-focused service.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                The vision behind the company is simple: to grow through honesty, deliver through quality, 
                and build partnerships that last. Every step forward is guided by a dedication to operational 
                excellence, business growth, and creating value for clients and partners.
              </p>

              {/* CEO Quote Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#00e6ff]/5 to-[#139aff]/5 rounded-2xl border-l-4 border-[#00e6ff]">
                <p className="text-gray-700 italic text-lg">
                  "Our vision for HOORAB GROUP is built on trust, quality, and long-term business growth. 
                  We believe in creating strong partnerships, delivering reliable solutions, and building a 
                  company that stands for professionalism and consistency in every market we serve."
                </p>
                <p className="mt-3 font-bold text-[#139aff]">— CEO, HOORAB GROUP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM SECTION */}
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-gray-900"
          >
            Meet Our <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">Leadership</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-[#00e6ff]/30 shadow-md">
  <Image
    src={member.img}
    alt={`${member.name} - ${member.role}`}
    fill
    className="object-cover"
    sizes="192px"  // ✅ Fixed size - circle is always 192px (w-48 = 12rem = 192px)
    quality={80}   // ✅ Changed from 75 to 80 for better quality on small images
  />
</div>
                <h3 className="mt-8 text-2xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-2 text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}