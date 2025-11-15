"use client";

import { useState, useEffect, useRef } from "react";

export default function ScrollLinkedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const content = [
    {
      title: "Designed for creators",
      text: "Powerful tools crafted to elevate your workflow and visual presence.",
      video: "/mobile.webm",
    },
    {
      title: "Effortless customization",
      text: "Change layouts, themes, and entire experiences instantly.",
      video: "/mobile.webm",
    },
    {
      title: "Lightning fast performance",
      text: "Built for speed—from idea to output in seconds.",
      video: "/mobile.webm",
    },
    {
      title: "A platform that grows with you",
      text: "Scalable, modular, and ready for everything ahead.",
      video: "/mobile.webm",
    },
  ];

  // Scroll-linked text observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionsRef.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Update video source ONLY when activeIndex changes → lightweight!
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    video.style.opacity = "0"; // fade-out

    setTimeout(() => {
      video.src = content[activeIndex].video;
      video.play().catch(() => {});
      video.style.opacity = "1"; // fade-in
    }, 250);
  }, [activeIndex]);

  return (
    <section className="relative bg-black text-white py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-4">
        {/* LEFT — TEXT SECTIONS */}
        <div className="space-y-32 relative">
          {content.map((item, i) => (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="min-h-[50vh] flex flex-col justify-center"
            >
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-20"
                }`}
              >
                {item.title}
              </h2>

              <p
                className={`text-lg text-gray-400 max-w-md transition-opacity duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-20"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT — SINGLE VIDEO PLAYER */}
        <div className="sticky top-32 h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-800/40 shadow-2xl">
            <video
              ref={videoRef}
              src={content[0].video}
              muted
              loop
              playsInline
              autoPlay
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
