"use client";

import React, { useRef, useEffect } from "react";
import SmartVideo from "@/components/SmartVideo";

// Video data
const videoCards = [
  {
    id: 1,
    video: "/mobile.webm",
    mobile: "/mobile-low.webm",
    title: "Product Launch",
  },
  {
    id: 2,
    video: "/mobile.webm",
    mobile: "/mobile-low.webm",
    title: "Team Meeting",
  },
  {
    id: 3,
    video: "/mobile.webm",
    mobile: "/mobile-low.webm",
    title: "Workshop",
  },
  {
    id: 4,
    video: "/mobile.webm",
    mobile: "/mobile-low.webm",
    title: "Conference",
  },
];

const tickerItems = [...videoCards, ...videoCards];

export default function AnimatedVideoCardsTicker() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Function ref to register videos
  const registerVideo = (el: HTMLVideoElement | null) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  // Pause all on mount
  useEffect(() => {
    videoRefs.current.forEach((v) => v.pause());
  }, []);

  const playOnly = (video: HTMLVideoElement) => {
    videoRefs.current.forEach((v) => {
      if (v !== video) v.pause();
    });
    video.play().catch(() => {});
  };

  const togglePlay = (video: HTMLVideoElement) => {
    if (video.paused) playOnly(video);
    else video.pause();
  };

  return (
    <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Gradients */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-2xl"></div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Engaging Experiences
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Create memorable moments with interactive video content that
          captivates your audience.
        </p>
      </div>

      {/* Ticker */}
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-6 md:gap-10 animate-ticker">
          {tickerItems.map((card, index) => (
            <div
              key={index}
              className="relative group w-48 md:w-60 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 shadow-xl"
            >
              {/* SmartVideo */}
              <SmartVideo
                src={card.video}
                mobileSrc={card.mobile}
                ref={registerVideo}
                autoPlay={false}
                preload="none"
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <button
                    className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                    onClick={() => {
                      const video = videoRefs.current[index];
                      if (video) togglePlay(video);
                    }}
                  >
                    <svg
                      className="w-7 h-7 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* LIVE Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600/90 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span className="text-xs font-semibold text-white">LIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker animation */}
      <style jsx>{`
        .animate-ticker {
          width: 200%;
          animation: ticker 22s linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
