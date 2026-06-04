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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-4 sm:px-6">
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
                  className="pointer-events-none fixed z-50 flex h-32 w-32 items-center justify-center rounded-full bg-[#0066cc] text-sm font-semibold tracking-wide text-white shadow-2xl backdrop-blur-sm"
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
              className="relative z-10 flex flex-col items-center leading-[0.9] tracking-[-0.05em] transition-opacity duration-500 ease-out group-hover:opacity-75"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[2.75rem] font-bold text-zinc-950 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem]"
              >
                We Build Websites
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[2.75rem] font-light text-zinc-400 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem]"
              >
                That Drive Growth.
              </motion.span>
            </h1>
          </div>
        </Link>

        {/* Studio Agency Body Description block */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg font-normal"
        >
          We design and develop modern websites, web applications, and digital
          experiences that help businesses attract customers, build trust, and
          scale online.
        </motion.p>

        {/* Dynamic Vertical Text Cycler Carousel Widget */}
        <div className="relative mt-12 flex h-14 w-full max-w-xl items-center justify-center overflow-hidden border-y border-zinc-100">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ y: 25, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -25, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-sm font-mono uppercase tracking-wider text-zinc-800"
            >
              ✦ {rotatingText[current]}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}