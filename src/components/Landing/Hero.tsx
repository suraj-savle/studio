"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, ArrowDown } from "lucide-react";

const rotatingText = [
  "Turn Your Business Into A Digital Brand",
  "Go Digital. Scale Faster.",
  "Websites Built For Growth",
  "Modern Experiences That Convert",
  "High Performance. Clean Design.",
];

export default function HeroHeading() {
  const [current, setCurrent] = useState(0);

  // 1. Core Rotating Text Ticker Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full h-screen flex flex-col items-center justify-between px-4 py-12 font-sans antialiased relative overflow-hidden">
      

      {/* CENTERPIECE COLUMN: High-Fidelity Centered Editorial Layout */}
      <div className="w-full text-center flex flex-col items-center my-auto relative z-10 px-2 sm:px-6">

        {/* Symmetrical Massive Primary Headline */}
        <h1 className="text-[2.6rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.92] tracking-[-0.04em] font-light text-[#18181B] flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            We Design <span className="font-semibold text-[#09090B]">and</span> Build
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#71717A] font-extralight"
          >
            Modern Digital Engines.
          </motion.span>
        </h1>

        {/* FIXED HEIGHT CONTAINER: Holds the text rotation cleanly to prevent page layout jumps */}
        <div className="w-full max-w-3xl border-t border-b border-[#c6c6c6]/50 my-10 py-5 overflow-hidden h-16 sm:h-20 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-[#09090B] absolute"
            >
              ✨ {rotatingText[current]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Centered Cognitive Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#71717A] font-light"
        >
          We architect ultra-scalable interfaces calibrated for exceptional conversion rates and timeless brand authority. We strip out unnecessary digital noise to engineer clean, high-performance software modules.
        </motion.p>
      </div>

    </div>
  );
}