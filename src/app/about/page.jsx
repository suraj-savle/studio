"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Layers } from "lucide-react";

const metrics = [
  { value: "99.9%", label: "System Uptime Guaranteed" },
  { value: "40%+", label: "Average Conversion Lift" },
  { value: "25M+", label: "API Requests Processed Daily" },
];

const pillars = [
  {
    icon: <Zap className="w-5 h-5 text-[#09090B]" />,
    title: "Radical Performance",
    description: "We optimize every single line of code. No bloat, no heavy frameworks where they don't belong—just raw, lightweight speed that ranks higher and converts faster."
  },
  {
    icon: <Layers className="w-5 h-5 text-[#09090B]" />,
    title: "Systemic Architecture",
    description: "We don't build temporary landing pages. We build modular software frameworks and digital design languages that scale comfortably alongside your ARR."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#09090B]" />,
    title: "Timeless Authority",
    description: "Trends fade within quarters. We lean heavily into minimalist, high-contrast, type-driven editorial layouts that look as striking in five years as they do today."
  }
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-[#18181B] font-sans antialiased py-20 sm:py-32 px-4 border-t border-neutral-100 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: Sticky Header Context */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start lg:h-[75vh] lg:sticky lg:top-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-[#09090B] inline-block animate-pulse" />
              Who We Are
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#09090B]">
              Engineered for <br />
              <span className="font-semibold text-neutral-400">the modern web.</span>
            </h2>
          </div>

          {/* Core Metric Highlights */}
          <div className="grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8 w-full mt-8 lg:mt-0">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#09090B]">
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-xs leading-tight text-[#71717A] font-light">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Detailed Editorial Context */}
        <div className="lg:col-span-7 flex flex-col gap-16 lg:pl-12">
          
          {/* Manifesto Intro Paragraph */}
          <div className="flex flex-col gap-6">
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-[#404047]">
              Most digital experiences are choked with unnecessary scripts, confusing layouts, and transient design patterns. We operate on a fundamentally different philosophy. 
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed text-[#71717A]">
              We sit at the intersection of rigid software architecture and boundary-pushing branding. By stripping away digital excess, we expose the absolute core value of your product, translating complex operations into ultra-slick, intuitive consumer interfaces.
            </p>
          </div>

          {/* The Core Pillars Grid */}
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono border-b border-neutral-100 pb-3">
              Our Operational Parameters
            </h3>
            
            <div className="flex flex-col gap-8">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group flex flex-col sm:flex-row items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-300"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-100 shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium text-[#09090B] flex items-center gap-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Minimalist Action Call */}
          <div className="pt-4">
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 text-sm font-medium tracking-tight bg-[#09090B] text-white px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-colors group shadow-sm"
            >
              Review Our Proven Protocols
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}