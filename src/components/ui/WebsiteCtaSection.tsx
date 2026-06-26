"use client";

import Link from "next/link";
import { TbArrowRight, TbArrowUpRight } from "react-icons/tb";

export default function WebsiteCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-white px-6 py-28 sm:px-12">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DB2E0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex rounded-full border border-[#4DB2E0]/20 bg-[#4DB2E0]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4DB2E0]">
          Ready to Build?
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Let's Build a Website
          <br />
          <span className="bg-linear-to-r from-zinc-400 via-zinc-500 to-zinc-400 bg-clip-text font-light text-transparent">
            That Works as Hard as You Do.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-600">
          Whether you're launching a new business or upgrading an existing
          website, we'll create a fast, modern, and conversion-focused
          experience designed to help your business grow.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-zinc-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-xl sm:w-auto"
          >
            <div className="absolute inset-0 translate-y-full bg-zinc-800 transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <TbArrowRight className="text-base transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/portfolio"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-zinc-700 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 sm:w-auto"
          >
            View Our Work
            <TbArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
          <div>✓ Free Consultation</div>

          <div>✓ Custom Design</div>

          <div>✓ SEO Optimized</div>

          <div>✓ 1 Year Support</div>
        </div>
      </div>
    </section>
  );
}
