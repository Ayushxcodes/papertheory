"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/** Unified play/pause control */
function useSmartVideo() {
  const videos = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            // Pause all others
            videos.current.forEach((v) => {
              if (v !== vid) v.pause();
            });
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    videos.current.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return {
    register: (v: HTMLVideoElement | null) => {
      if (v && !videos.current.includes(v)) {
        videos.current.push(v);
      }
    },
  };
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { register } = useSmartVideo();

  // Detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Low vs high quality
  const videoSrc = isMobile ? "/mobile.webm" : "/mobile.webm";

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-6xl md:text-7xl font-light text-white leading-none">
                Makes other platforms
                <br />
                look like the 1990&apos;s
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                — REAL CUSTOMER STORIES
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Powered by
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                PaperTheory
                <br />
                <span className="block mt-2">Net</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Cards */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-white font-semibold text-lg">
                  Brand customization
                </h3>
                <p className="text-gray-400 text-sm">
                  Tailor every aspect to reflect your brand identity.
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-white font-semibold text-lg">Stage Kit</h3>
                <p className="text-gray-400 text-sm">
                  Beautiful layouts and near-infinite product variety.
                </p>
              </div>

              <div className="bg-yellow-400 rounded-2xl p-6 space-y-3">
                <span className="text-xs text-black/70">Confirmed</span>
                <h3 className="text-black font-bold text-2xl">Postbooth</h3>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-white font-semibold text-lg">
                  Design Room
                </h3>
                <p className="text-gray-400 text-sm">
                  A space to seek, share, and grow ideas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all group">
                See all features
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT — SMART VIDEO STACK */}
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md h-[650px] -mt-20">
                {/* Vid 1 */}
                <motion.div className="absolute top-0 left-8 w-[260px] h-[420px] rounded-3xl overflow-hidden border border-gray-800/50">
                  <video
                    ref={register}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Vid 2 */}
                <motion.div className="absolute top-20 right-0 w-[260px] h-[420px] rounded-3xl overflow-hidden border border-gray-800/50 rotate-6">
                  <video
                    ref={register}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Vid 3 */}
                <motion.div className="absolute bottom-0 left-16 w-[260px] h-[420px] rounded-3xl overflow-hidden border border-gray-800/50 -rotate-6">
                  <video
                    ref={register}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <div className="flex justify-center mt-10">
              <div className="w-[240px] h-[380px] rounded-3xl overflow-hidden border border-gray-700">
                <video
                  ref={register}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
