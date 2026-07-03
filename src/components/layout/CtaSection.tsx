"use client";

import React from "react";
import Link from "next/link";
import { TbArrowRight, TbArrowUpRight } from "react-icons/tb";

export default function CtaSection() {
  return (
    <section className="w-full max-w-8xl mx-auto relative mb-20">
      <div className="w-full flex flex-col justify-center items-center bg-linear-to-b from-[#ffffff] via-[#4db1e060] to-[#ffffff] relative z-10 py-12 md:py-28 gap-8">
        {/* Headline */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-2xl sm:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
            Ready to Build a Website
          </h2>
          <h2 className="text-center text-2xl sm:text-6xl  text-zinc-500 leading-[1.1]">
            That Actually Grows Your Business?
          </h2>
        </div>
        {/* Description */}
        <p className="max-w-3xl mx-auto text-center text-xs sm:text-base text-zinc-900 font-normal px-4 leading-relaxed">
          Whether you&apos;re launching a new business or upgrading an outdated
          website, we&apos;ll create a fast, conversion-focused experience
          tailored to your goals. From strategy to launch, we handle everything
          with precision.
        </p>

        {/* Action Button Matrix */}
        <div className="w-full flex sm:flex-row gap-4 justify-center items-center px-5">
          {/* Primary Action Button */}
          <Link
            href="/contact"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-zinc-950 text-white rounded-full px-4 sm:px-8 py-2 sm:py-4 text-[10px] sm:text-xs tracking-[0.15em] overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            <div className="absolute inset-0 translate-y-full bg-zinc-800 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-2.5">
              Contact Us
              <TbArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Secondary Action Link */}
          <Link
            href="/portfolio"
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 border border-zinc-900 text-zinc-900 rounded-full px-4 sm:px-8 py-2 sm:py-4 text-[10px] tracking-[0.15em] transition-all duration-300 hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-50/80 shadow-2xs active:scale-[0.98]"
          >
            View Our Work
            <TbArrowUpRight className="text-[10px] sm:text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
