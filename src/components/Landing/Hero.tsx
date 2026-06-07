"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const rotatingText = [
  "Built for speed and performance",
  "Designed to convert visitors into customers",
  "Optimized for SEO and growth",
  "Crafted with modern technologies",
  "Engineered for long-term scalability",
];

export default function HeroHeading() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance Framer Motion tracking values (Bypasses standard React state rerenders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics spring configurations for the tracking indicator badge
  const springConfig = { stiffness: 450, damping: 32, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingText.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Track cursor location relative directly to the viewport window bounds
    mouseX.set(e.clientX - 64); // Centered offset: half of w-32 size element
    mouseY.set(e.clientY - 64);
  };

  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        
        {/* Clickable Area Wrapper linked directly to work redirection path */}
        <Link 
          href="/work"
          className="block relative decoration-transparent outline-none group"
        >
          <div
            ref={containerRef}
            className="relative cursor-none select-none py-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Viewport Bound Floating Interaction Cursor */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="pointer-events-none fixed z-50 flex h-32 w-32 items-center justify-center rounded-full  text-sm font-semibold tracking-wide text-primary shadow-2xl backdrop-blur-xs border border-primary overflow-hidden"
                  style={{
                    left: cursorX,
                    top: cursorY,
                  }}
                >
                  View Work ↗
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dynamic Typography Header Layout */}
            <h1
              className="relative z-10 flex flex-col items-center leading-[0.9] tracking-[-0.05em] transition-opacity duration-500 ease-out group-hover:opacity-75 gap-5"
            >
              <span
                className="text-[3.75rem] font-bold text-zinc-950 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem]"
              >
                We Build Websites
              </span>

              <span
                className="text-[2.75rem] font-light text-zinc-400 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem]"
              >
                That Drive Growth.
              </span>
            </h1>
          </div>
        </Link>

        {/* Studio Agency Body Description block */}
        <p
          className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg font-normal"
        >
          We design and develop modern websites, web applications, and digital
          experiences that help businesses attract customers, build trust, and
          scale online.
        </p>
      </div>
    </section>
  );
}