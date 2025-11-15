"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

type LenisContextType = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    // Defer state update → fixes: "setState synchronously in effect"
    Promise.resolve().then(() => setLenis(l));

    let rafId: number;
    const raf = (time: number) => {
      l.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      l.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
}
