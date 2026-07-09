"use client";

import Image from "next/image";
import React from "react";

const SAMPLE_IMAGES = [
  { src: "/demo-images/bbms.png", alt: "Beach landscape" },
  { src: "/demo-images/gym-website.png", alt: "Beach landscape" },
  { src: "/demo-images/gym-website-1.png", alt: "Beach landscape" },
  { src: "/demo-images/gym-website-2.png", alt: "Beach landscape" },
  { src: "/demo-images/crs.png", alt: "Beach landscape" },
  { src: "/demo-images/portfolio.png", alt: "Beach landscape" },
];

interface ImageMarqueeProps {
  images?: { src: string; alt: string }[]; // Marked optional so you don't get TypeScript errors when calling it empty
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  imageWidth?: string;
  imageHeight?: string;
}

export default function ImageMarquee({
  images = SAMPLE_IMAGES, // Sets the integrated list as the default value
  speed = "medium",
  direction = "left",
  imageWidth = "w-74",
  imageHeight = "h-140",
}: ImageMarqueeProps) {
  const speedDurations = {
    slow: "10s",
    medium: "7s",
    fast: "5s",
  };

  const duration = speedDurations[speed];

  return (
    <div className="max-w-7xl mx-auto relative w-full overflow-hidden bg-transparent py-4">
      {/* Dynamic Inline CSS injection for seamless looping keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--duration) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--duration) linear infinite;
        }
      `,
        }}
      />

      {/* Outer container holding duplicate rows for visual seamless infinity */}
      <div
        className={`flex w-max`}
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {/* Track 1 & Track 2 (Cloned side-by-side) */}
        {Array.from({ length: 2 }).map((_, trackIdx) => (
          <div
            key={trackIdx}
            className={`marquee-track flex gap-6 px-3 shrink-0 ${
              direction === "left"
                ? "animate-marquee-left"
                : "animate-marquee-right"
            }`}
          >
            {images.map((img, imgIdx) => (
              <div
                key={`${trackIdx}-${imgIdx}`}
                className={`relative overflow-hidden flex items-start justify-start bg-zinc-800 shadow-md transition-transform duration-300 shrink-0 ${imageWidth} ${imageHeight}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                  fill
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
