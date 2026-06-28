"use client";

import React, { useState } from "react";
import {
  TbGitBranch,
  TbLayersIntersect,
  TbTerminal,
  TbRocket,
} from "react-icons/tb";
import { HiArrowLongRight } from "react-icons/hi2";

const WORK_STEPS = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    subtitle: "Understanding Your Business",
    icon: TbLayersIntersect,
    description:
      "Every project starts with understanding your business, audience, goals, and competitive landscape. We identify opportunities, define clear objectives, and create a strategic roadmap that ensures every design and development decision supports measurable growth.",
  },
  {
    phase: "02",
    title: "Design & Experience",
    subtitle: "Crafting User-Centered Interfaces",
    icon: TbTerminal,
    description:
      "We design modern, conversion-focused experiences that balance aesthetics with usability. From wireframes and user journeys to high-fidelity UI systems, every screen is carefully crafted to build trust, engage visitors, and drive action.",
  },
  {
    phase: "03",
    title: "Development & Integration",
    subtitle: "Building Reliable Digital Products",
    icon: TbGitBranch,
    description:
      "Using modern technologies like Next.js, React, and scalable backend solutions, we transform designs into fast, responsive, and production-ready websites. Every component is optimized for performance, SEO, security, and long-term maintainability.",
  },
  {
    phase: "04",
    title: "Launch & Growth",
    subtitle: "Continuous Optimization",
    icon: TbRocket,
    description:
      "Launching is only the beginning. We rigorously test, deploy, and monitor every project while continuously improving speed, user experience, and conversion performance to help businesses grow confidently online.",
  },
];

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white text-zinc-950">
      <div>
        {/* 1. TOP HERO BANNER BLOCK */}
        <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700  leading-none">
              How We Work
            </h1>
          </div>
          <p className="text-sm sm:text-base text-zinc-500 max-w-md leading-relaxed hidden md:block">
            Our proven workflow combines strategy, design, and development to
            create websites that not only look exceptional but also generate
            real business results.
          </p>
        </div>

        {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24 mx-5 sm:mx-10">
          {/* LEFT PANEL: INTERACTIVE ACCORDION ROW LIST */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-700 max-w-2xl leading-[1.15] mb-10">
                A transparent process designed to transform ideas into
                high-performing digital experiences.
              </h2>
            </div>

            {/* Accordion Steps List */}
            <div className="flex flex-col border-t border-zinc-100">
              {WORK_STEPS.map((step, idx) => {
                const isSelected = activeStep === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left py-6 border-b border-zinc-100 flex items-center justify-between group outline-hidden cursor-pointer transition-all duration-300 ${
                      isSelected ? "ps-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-xs font-mono font-bold tracking-wider transition-colors duration-300 ${
                          isSelected
                            ? "text-[#4DB2E0]"
                            : "text-zinc-300 group-hover:text-zinc-500"
                        }`}
                      >
                        [{step.phase}]
                      </span>
                      <h3
                        className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                          isSelected
                            ? "text-zinc-950"
                            : "text-zinc-400 group-hover:text-zinc-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 ${
                        isSelected
                          ? "bg-zinc-950 border-zinc-950 text-white rotate-0"
                          : "bg-transparent text-zinc-400 -rotate-45 group-hover:rotate-0 group-hover:text-zinc-950"
                      }`}
                    >
                      <HiArrowLongRight className="text-sm" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: DISPLAY DETAILS CARD COMPLEMENTING THE LABELS */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l py-6 lg:p-10 lg:ps-16 relative overflow-hidden">
            {/* Dynamic Content Display Block synchronized by active key indices */}
            <div
              key={activeStep}
              className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500"
            >

              {/* Subtitle / Spec Tracker */}
              <div className="flex flex-col gap-2 border-b py-2.5">
                <label className="text-2xl font-bold tracking-wider uppercase text-zinc-800">
                  {WORK_STEPS[activeStep].subtitle}
                </label>
                <div className="text-xs font-mono font-semibold uppercase tracking-widest mt-1">
                  Our Process
                </div>
              </div>

              {/* Comprehensive Summary Block */}
              <div className="flex flex-col gap-3 py-2.5">
                <label className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  What Happens Here
                </label>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  {WORK_STEPS[activeStep].description}
                </p>
              </div>

              {/* Status Verification Footer */}
              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400 font-bold tracking-wider uppercase">
                <span>Quality Assured</span>
                <span>Ready For Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
