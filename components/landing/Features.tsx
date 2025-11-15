"use client";

import React from "react";
import { motion } from "motion/react";

const companies = [
  { name: "Adobe", logo: "ADOBE" },
  { name: "1Password", logo: "1Password" },
  { name: "Square", logo: "Square" },
  { name: "Checkr", logo: "Checkr" },
  { name: "twilio", logo: "twilio" },
  { name: "1Password", logo: "1Password" },
  { name: "BROADCOM", logo: "BROADCOM" },
  { name: "NBA", logo: "NBA" },
  { name: "Sendoso", logo: "Sendoso" },
  { name: "Adobe", logo: "ADOBE" },
  { name: "Brex", logo: "Brex" },
  { name: "motive", logo: "motive" },
  { name: "univision", logo: "univision" },
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Gradient Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                World-class teams are upgrading to Welcome
              </h2>
              <p className="text-gray-400 text-lg">
                Companies are landing legacy platforms for the ability to
                deliver an engaging experience at every level.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                </svg>
                <span className="text-2xl font-bold">66%</span>
              </div>
              <span className="text-gray-400">attendance rate</span>
            </div>
            <p className="text-sm text-gray-500">
              Key information for Welcome customers
            </p>
          </motion.div>

          {/* Right Column - Company Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold text-sm md:text-base opacity-60 hover:opacity-100">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
