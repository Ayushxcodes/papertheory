"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Button } from "@/components/ui/button";
import { RocketLaunchIcon, PlayIcon } from "@phosphor-icons/react/dist/ssr";
import { MentorSvg } from "@/components/svg/svg";

export default function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-foreground leading-tight">
              Ready to Reach the{" "}
              <span className="text-primary">Next Level?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk max-w-lg">
              Move beyond basics — master new skills with engaging, real-world
              practice and AI-guided learning paths!
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto font-space-grotesk group"
              >
                Start Learning
                <RocketLaunchIcon
                  className="size-5"
                  weight="light"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-space-grotesk"
              >
                <PlayIcon className="size-4 mr-2" weight="fill" />
                Try Free Lesson
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full max-w-lg flex items-center justify-center px-4 md:px-0">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full h-auto max-w-full"
              >
                <div className="w-full overflow-hidden">
                  <MentorSvg />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
