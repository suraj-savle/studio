"use client";

import React, { useState } from "react";
import { TbArrowUpRight, TbX, TbCircleDot, TbSparkles } from "react-icons/tb";

export default function SaleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-white border-b border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.01)] text-zinc-900 select-none z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-3 min-h-[44px]">
        
        {/* Left Side: Solid, Non-Moving Premium Position Nodes */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 flex-1">
          <div className="flex items-center gap-1.5 bg-zinc-950 text-white text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md shrink-0 shadow-sm">
            <TbSparkles className="text-[#4DB2E0]" />
            <span>Q3 Offer</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
            <span>UpgradeUX Architecture Bundle Open</span>
            <TbCircleDot className="text-zinc-300 text-[10px] hidden sm:block" />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span>Next.js Setup Included</span>
            <TbCircleDot className="text-zinc-300 text-[10px]" />
            <span>Save 20% on Fast-Track Slots</span>
          </div>
        </div>

        {/* Right Side: Action CTA and Close Layout Buttons */}
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center md:justify-end border-t md:border-t-0 border-zinc-100 pt-2 md:pt-0">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 text-white font-black text-[11px] px-3.5 py-1.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Claim Slot</span>
            <TbArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs stroke-[2.5]" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close Announcement"
            className="p-1.5 rounded-md text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors border border-transparent hover:border-zinc-200 shrink-0"
          >
            <TbX className="text-xs stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}