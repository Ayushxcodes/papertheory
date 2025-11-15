"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Logo from "@/components/base/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <Container>
        <div className="relative z-10 py-14 md:py-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <Logo />
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base font-space-grotesk"
          >
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ABOUT US
            </a>
            <a
              href="#what-we-do"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WHAT WE DO
            </a>
            <a
              href="#work"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WORK
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              CONTACT
            </a>
          </motion.nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10 text-xs md:text-sm text-muted-foreground font-space-grotesk"
          >
            © 2025 Paper Theory Network. All Right Reserved
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
