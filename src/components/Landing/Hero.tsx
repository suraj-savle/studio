"use client";

import React, { useEffect, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const rotatingText = [
  "Built for speed and performance",
  "Designed to convert visitors into customers",
  "Optimized for SEO and growth",
  "Crafted with modern technologies",
  "Engineered for long-term scalability",
];

export default function HeroHeading() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Initial load transition trigger
  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingText.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16 md:py-0 overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #4DB2E0 0%, #FFFFFF 100%)"
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="block relative decoration-transparent outline-none group">
          <div className="relative select-none py-2 md:py-4">
            
            {/* Dynamic Typography Header Layout */}
            <h1
              className={`relative z-10 flex flex-col items-center leading-[0.95] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.05em] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform gap-3 md:gap-5 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-[3rem]  text-zinc-800 sm:text-[4rem] md:text-[6.5rem]">
                We Build Websites
              </span>

              <span className="text-[2.25rem] font-light text-zinc-600 sm:text-[4rem] md:text-[5rem]">
                That Drive Growth.
              </span>
            </h1>
          </div>
        </div>

        {/* --- IMPROVED FIXED TEXT ROTATOR --- */}
        <div 
          className={`relative h-6 md:h-8 mt-2 overflow-hidden transition-all duration-1000 delay-75 w-full flex justify-center ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {rotatingText.map((text, idx) => (
            <span
              key={idx}
              className={`absolute text-xs md:text-sm font-mono font-bold tracking-[0.15em] text-zinc-700 uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                idx === current
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
               {text}
            </span>
          ))}
        </div>

        {/* Studio Agency Body Description block */}
        <p
          className={`mt-4 max-w-2xl text-xs md:text-lg leading-relaxed text-zinc-600 font-normal transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We design and develop modern websites, web applications, and digital
          experiences that help businesses attract customers, build trust, and
          scale online.
        </p>

        {/* --- ADDED DYNAMIC CTA BUTTON --- */}
        <div
          className={`mt-5 transition-all duration-1000 delay-300 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-950 px-6 py-3.5 md:px-8 md:py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-95"
          >
            <div className="absolute inset-0 -translate-x-full bg-zinc-800 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
            <span className="relative z-10 flex items-center gap-1.5">
              Start Your Project
              <TbArrowUpRight className="text-sm transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}