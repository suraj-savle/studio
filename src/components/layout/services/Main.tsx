"use client";
import React from "react";
import { motion } from "framer-motion";;

export default function ServicesIntro() {
  return (
    <section className="w-full h-full flex items-center justify-center text-[#09090B]  font-sans antialiased">
      {/* Massive Dynamic Title Block */}
      <div className="lg:col-span-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full flex items-center justify-center text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light  text-[#18181B]"
        >
          Our Agency Services
        </motion.h1>
      </div>
    </section>
  );
}
