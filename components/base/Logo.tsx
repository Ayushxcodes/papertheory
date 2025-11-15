"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { EscalatorUpIcon } from "@phosphor-icons/react/dist/ssr";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold font-space-grotesk flex items-center gap-2 group"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <EscalatorUpIcon
          weight="duotone"
          className="size-10 text-primary group-hover:text-primary/80 transition-colors"
        />
      </motion.div>
      <span className="group-hover:text-primary/80 transition-colors">
        Level Up Labs
      </span>
    </Link>
  );
}
