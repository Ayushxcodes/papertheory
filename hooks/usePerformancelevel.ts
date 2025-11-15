"use client";

import { useEffect, useState } from "react";

type PerfLevel = "high" | "medium" | "low";

export function usePerformanceLevel(): PerfLevel {
  const [level, setLevel] = useState<PerfLevel>("high");

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const memory = (navigator as any).deviceMemory || 4;
    const lowMemory = memory <= 2;

    const conn = (navigator as any).connection;
    const slowConnection =
      conn?.saveData ||
      conn?.effectiveType === "2g" ||
      conn?.effectiveType === "slow-2g";

    let gpuWeak = false;

    let last = performance.now();
    let frames = 0;

    const testGpu = () => {
      const now = performance.now();
      const delta = now - last;
      last = now;
      frames++;

      if (frames < 25) {
        requestAnimationFrame(testGpu);
      } else {
        if (delta > 25) gpuWeak = true;

        evaluate();
      }
    };

    const evaluate = () => {
      if (prefersReducedMotion || lowMemory || slowConnection || gpuWeak) {
        setLevel("low");
      } else if (isMobile) {
        setLevel("medium");
      } else {
        setLevel("high");
      }
    };

    requestAnimationFrame(testGpu);
  }, []);

  return level;
}
