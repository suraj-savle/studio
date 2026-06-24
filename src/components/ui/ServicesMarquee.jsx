"use client";

import React from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/1.png", alt: "Showcase Project One" },
  { src: "/2.png", alt: "Showcase Project Two" },
  { src: "/3.png", alt: "Showcase Project Three" },
  { src: "/4.png", alt: "Showcase Project Four" },
];

export default function WorkShowcaseMarquee() {
  return (
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden select-none">
      <div className="relative w-full">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track wrapper container with pause-on-hover logic */}
        <div className="flex w-max gap-6 animate-image-marquee hover:[animation-play-state:paused] cursor-pointer py-4">
          
          {/* Array Group One */}
          {IMAGES.map((img, idx) => (
            <div
              key={`img1-${idx}`}
              className="relative shrink-0 w-72 h-44 md:w-[440px] md:h-[260px] overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-xs hover:border-zinc-400 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 288px, 440px"
                className="object-cover"
                priority={idx < 2}
              />
            </div>
          ))}

          {/* Array Group Two (Duplicate to guarantee gapless continuous loop) */}
          {IMAGES.map((img, idx) => (
            <div
              key={`img2-${idx}`}
              className="relative shrink-0 w-72 h-44 md:w-[440px] md:h-[260px] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-xs hover:border-zinc-400 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 288px, 440px"
                className="object-cover"
              />
            </div>
          ))}
          
        </div>
      </div>

      {/* CSS Animation injection */}
      <style jsx global>{`
        .animate-image-marquee {
          animation: globalImageMarqueeTrack 28s linear infinite;
        }
        @keyframes globalImageMarqueeTrack {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}