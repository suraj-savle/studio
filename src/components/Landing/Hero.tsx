"use client";

import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const rotatingText = [
  "Built for speed and performance",
  "Designed to convert visitors into customers",
  "Optimized for SEO and growth",
  "Crafted with modern technologies",
  "Engineered for long-term scalability",
];

export default function HeroHeading() {
  const totalDuration = rotatingText.length * 3.2; // 16 seconds total loop

  return (
    <section 
      className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16 md:py-0 overflow-x-hidden bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF]"
    >
      {/* CSS Keyframes injected directly to avoid external stylesheet dependencies */}
      <style jsx global>{`
        @keyframes customFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textRotationLoop {
          0%, 15% { opacity: 1; transform: translateY(0); }
          20%, 95% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 0; transform: translateY(16px); }
        }
        .animate-fade-up {
          animation: customFadeUp 1000s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="block relative decoration-transparent outline-none group">
          <div className="relative select-none py-2 md:py-4">
            
            {/* Dynamic Typography Header Layout */}
            <h1
              className="relative z-10 flex flex-col items-center leading-[0.95] md:leading-[0.9] tracking-[-0.04em] md:tracking-tighter transform gap-3 md:gap-5 animate-fade-up"
              style={{ animationDuration: '1000ms' }}
            >
              <span className="text-[3rem] text-zinc-800 sm:text-[4rem] md:text-[6.5rem]">
                We Build Websites
              </span>

              <span className="text-[2.25rem] font-light text-zinc-600 sm:text-[4rem] md:text-[5rem]">
                That Drive Growth.
              </span>
            </h1>
          </div>
        </div>

        {/* --- PURE CSS FIXED TEXT ROTATOR --- */}
        <div 
          className="relative h-8 md:h-8 overflow-hidden w-full flex justify-center animate-fade-up"
          style={{ animationDuration: '1000ms', animationDelay: '75ms' }}
        >
          {rotatingText.map((text, idx) => {
            const delay = idx * 3.2;
            return (
              <span
                key={idx}
                className="absolute text-xs md:text-sm font-mono font-bold tracking-[0.15em] text-zinc-700 uppercase opacity-0 transform translate-y-4"
                style={{
                  animation: `textRotationLoop ${totalDuration}s infinite ease-in-out`,
                  animationDelay: `${delay}s`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>

        {/* Studio Agency Body Description block */}
        <p
          className="mt-4 max-w-2xl text-xs md:text-lg leading-relaxed text-zinc-600 font-normal transform animate-fade-up"
          style={{ animationDuration: '1000ms', animationDelay: '150ms' }}
        >
          We design and develop modern websites, web applications, and digital
          experiences that help businesses attract customers, build trust, and
          scale online.
        </p>

        {/* --- DYNAMIC CTA BUTTON --- */}
        <div
          className="mt-5 transform animate-fade-up"
          style={{ animationDuration: '1000ms', animationDelay: '300ms' }}
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