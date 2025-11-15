"use client";

import { useEffect, useRef } from "react";

export default function VerticalVideoTicker() {
  // typed container refs
  const containerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // typed video refs
  const allVideosRef = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const vids: HTMLVideoElement[] = [];

    containerRefs.forEach((ref) => {
      if (!ref.current) return;
      vids.push(...Array.from(ref.current.querySelectorAll("video")));
    });

    allVideosRef.current = vids;
  }, []);

  const handlePlayExclusive = (video: HTMLVideoElement) => {
    allVideosRef.current.forEach((v) => {
      if (v !== video) v.pause();
    });
    video.play().catch(() => {});
  };

  const handleStop = (video: HTMLVideoElement) => {
    video.pause();
  };

  const videoSrc = "/mobile.webm";

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          See it in action
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((col) => (
            <div
              key={col}
              ref={containerRefs[col]}
              className="relative h-[600px] overflow-hidden rounded-3xl"
            >
              <div className={`ticker-column ticker-speed-${col}`}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-[300px] overflow-hidden rounded-2xl border border-gray-800/40 shadow-xl mb-6 group"
                  >
                    <video
                      src={videoSrc}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover cursor-pointer"
                      onMouseEnter={(e) => handlePlayExclusive(e.currentTarget)}
                      onMouseLeave={(e) => handleStop(e.currentTarget)}
                      onClick={(e) => {
                        const video = e.currentTarget;
                        if (video.paused) {
                          handlePlayExclusive(video);
                        } else {
                          video.pause();
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-column {
          display: flex;
          flex-direction: column;
          animation: scrollInfinite linear infinite;
        }

        .ticker-speed-0 {
          animation-duration: 18s;
        }
        .ticker-speed-1 {
          animation-duration: 20s;
        }
        .ticker-speed-2 {
          animation-duration: 22s;
        }
        .ticker-speed-3 {
          animation-duration: 24s;
        }

        @keyframes scrollInfinite {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
