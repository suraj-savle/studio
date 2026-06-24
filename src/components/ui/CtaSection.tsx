"use client";

import React from "react";
import Link from "next/link";
import { TbArrowRight, TbArrowUpRight } from "react-icons/tb";

export default function CtaSection() {
  return (
    <section className="w-full py-28 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-zinc-200/60 text-center relative overflow-hidden selection:bg-[#4DB2E0]/20">
      {/* Subtle background ambient blur mesh to tie into your aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-[#4DB2E0]/10 to-transparent rounded-full filter blur-[80px] pointer-events-none select-none" />

      <div className="relative max-w-4xl mx-auto space-y-8 z-10">

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
          Missing online presence? <br />
          <span className="font-light text-zinc-400 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-400">
            Let’s find solutions.
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
          We partner with a limited number of clients per quarter to preserve
          engineering refinement and strategic accuracy. Reach out to schedule a
          scoping layout discussion.
        </p>

        {/* Action Button Matrix */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Primary Action Button */}
          <Link 
            href="/contact"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-zinc-950 text-white rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            <div className="absolute inset-0 translate-y-full bg-zinc-800 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-2.5">
              Initiate Scoping
              <TbArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Secondary Action Link */}
          <Link
            href="/portfolio"
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 border border-zinc-200 text-zinc-600 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-50/80 shadow-2xs active:scale-[0.98]"
          >
            View Our Work
            <TbArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

        </div>
      </div>
    </section>
  );
}