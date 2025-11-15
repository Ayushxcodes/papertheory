"use client";
import { motion } from "motion/react";

export default function ContactShowcase() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">
      {/* Ambient motion glows */}
      <motion.div
        animate={{ x: ["-20%", "20%", "-10%"], y: ["0%", "10%", "-5%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[160px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{ x: ["10%", "-15%", "5%"], y: ["-5%", "15%", "0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-white text-5xl md:text-7xl font-light leading-tight">
            Got a brief? A hunch?
            <br />
            Or an impossible idea?
          </h2>
        </motion.div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-gray-400 uppercase tracking-widest text-sm">
              location
            </h3>
            <p className="text-white text-xl leading-relaxed">
              Pratap Bhawan, 5 Bahadur Shah Zafer Marg 110002,
              <br />
              ITO, Delhi, 110002
            </p>
          </motion.div>

          {/* Inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-gray-400 uppercase tracking-widest text-sm">
                inquiry
              </h3>
              <p className="text-white text-xl">hello@papertheorynetwork.com</p>
            </div>

            <div>
              <h3 className="text-gray-400 uppercase tracking-widest text-sm">
                phone
              </h3>
              <p className="text-white text-xl">+91 9811909437</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
