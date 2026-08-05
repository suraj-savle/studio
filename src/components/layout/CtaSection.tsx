"use client";

import React from "react";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function CtaSection() {
  return (
    <section className="w-full max-w-7xl mx-auto relative mb-24 md:mb-32 select-none overflow-hidden">
      
      {/* Main Card Wrapper Layout */}
      <div className="relative rounded-xl bg-linear-to-bl from-[#f3f4f6] to-[#e5e7eb] py-8 px-4 sm:p-12 md:p-24 text-center  overflow-hidden group mx-4 sm:mx-0">
        
        {/* Reference Style 1: Subtle Minimalist Dotted Grid Overlay Background */}
        <div 
          className="absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle, #e4e4e7 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px"
          }}
          aria-hidden="true"
        />

        {/* Reference Style 2: Ambient Soft Glow Fields */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4db1e0]/15 rounded-full w-[450px] h-[450px] blur-[100px] pointer-events-none mix-blend-screen" 
          aria-hidden="true" 
        />

        {/* Core Elements Stack */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-8">

          {/* Reference Style 4: High Contrast Clean Headline Structure */}
          <div className="flex flex-col items-center gap-3 sm:gap-2">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-[1.05] antialiased">
              Ready to Build a Website
            </h2>
            <h2 className="text-lg sm:text-5xl md:text-6xl text-zinc-500 leading-[1.05] antialiased">
              That Actually Grows Your Business?
            </h2>
          </div>

          {/* Styled Balanced Explainer Paragraph */}
          <p className="max-w-2xl text-xs sm:text-base text-zinc-500 font-normal leading-relaxed antialiased px-2">
            Whether you&apos;re launching a new business or upgrading an outdated website, we&apos;ll create a fast, conversion-focused experience tailored to your goals. From strategy to launch, we handle everything with precision.
          </p>

          {/* Refined Actions Layout */}
          <div className="pt-4 flex sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            
            {/* Primary Action Call Button */}
            <Link
              href="/contact"
              aria-label="Contact Us"
              className="w-full sm:w-auto group/btn flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white rounded-full px-4 sm:px-8 py-4 text-xs tracking-wider shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
              <TbArrowUpRight className="text-xs sm:text-sm transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            {/* Secondary Action Work Link */}
            <Link
              href="/portfolio"
              aria-label="View Our Work"
              className="w-full sm:w-auto group/btn flex items-center justify-center gap-2 border border-zinc-200 bg-zinc-50/40 backdrop-blur-xs text-zinc-700 rounded-full px-4 sm:px-8 py-4 text-xs tracking-wider transition-all duration-300 hover:border-zinc-400 hover:text-zinc-950 hover:bg-white active:scale-[0.98]"
            >
              View Our Work
            </Link>
            
          </div>
        </div>

        {/* Reference Style 5: Large Faded Background Typography Watermark */}
        <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden h-32 md:h-44 opacity-[0.03] z-0">
          <h1 className="text-[14vw] font-black tracking-tighter leading-none text-center text-blue-950 uppercase">
            UpgradeUX
          </h1>
        </div>

      </div>
    </section>
  );
}