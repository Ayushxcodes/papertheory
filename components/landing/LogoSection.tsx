"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PlayIcon } from "@phosphor-icons/react/dist/ssr";
import SmartVideo from "@/components/SmartVideo"; // your smart video component

export default function VideoShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to load lighter video
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* GPU-friendly subtle gradients */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Captivate & Convert
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <PlayIcon weight="fill" className="w-4 h-4" />
              How it works
            </motion.button>
          </div>
        </motion.div>

        {/* VIDEO MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-400/5 to-transparent blur-xl pointer-events-none" />

            {/* Laptop screen */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-t-2xl p-3 shadow-xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 mb-3 px-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
              </div>

              {/* VIDEO AREA */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <SmartVideo
                  src="/mobile.webm"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-start justify-end p-8 md:p-12">
                  <div className="absolute top-8 left-8 w-12 h-12 bg-yellow-400 rounded-full"></div>

                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-yellow-300 mb-4">
                    Launch
                    <br />
                    day
                  </h3>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-yellow-300/60 hover:border-yellow-300 text-yellow-300 font-semibold rounded-full transition-colors backdrop-blur-sm"
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="relative h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl"></div>
            <div className="relative h-2 bg-gradient-to-b from-gray-900 to-black mx-auto w-3/4 rounded-b-lg"></div>
          </div>

          {/* GPU-friendly glow */}
          <div className="absolute -left-28 top-1/2 w-56 h-56 bg-teal-400/5 rounded-full blur-2xl"></div>
          <div className="absolute -right-28 top-1/2 w-56 h-56 bg-orange-400/5 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
