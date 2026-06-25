"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLayoutDashboard, LuCpu, LuEye } from "react-icons/lu";

export default function AboutPage() {
  const metrics = [
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Custom Built Solutions" },
    { value: "Next.js", label: "Core Technology" },
    { value: "India", label: "Operating Worldwide" },
  ];

  const philosophyValues = [
    {
      icon: <LuLayoutDashboard className="size-5 text-zinc-900" />,
      title: "Built For Business Growth",
      description:
        "Every website is designed to improve credibility, increase conversions, and create measurable business impact rather than simply looking attractive.",
    },
    {
      icon: <LuCpu className="size-5 text-zinc-900" />,
      title: "Modern Development Standards",
      description:
        "We build using Next.js, React, and modern web technologies to deliver exceptional speed, SEO performance, scalability, and long-term reliability.",
    },
    {
      icon: <LuEye className="size-5 text-zinc-900" />,
      title: "Design That Stands Out",
      description:
        "Instead of generic templates, we create distinctive digital experiences with thoughtful interactions, premium visuals, and memorable user experiences.",
    },
  ];

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white selection:bg-[#4DB2E0]/20">
      {/* 1. TOP HERO BANNER BLOCK */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 uppercase leading-none">
            about us
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Explore our complete systematic workflow menu built explicitly on
          performant code ecosystems.
        </p>
      </div>

      {/* 2. CORE PHILOSOPHY SPLIT-LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28 mx-5 sm:mx-10">
        {/* LEFT PANEL: MISSION DECLARATION STATEMENT */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#4DB2E0] uppercase block mb-3">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 max-w-3xl leading-[1.1] mb-6">
              We started UpgradeUX because most websites look good, but very few
              actually help businesses grow.
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-6">
              UpgradeUX is an independent web design and development studio
              founded by developers who believe a website should be more than
              just a digital brochure. It should build trust, communicate value,
              and turn visitors into customers.
            </p>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-6">
              We partner with startups, creators, agencies, and growing
              businesses to design modern digital experiences that are fast,
              scalable, and built with purpose. Every project combines
              thoughtful design, clean development, and a deep focus on business
              outcomes.
            </p>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed">
              Unlike traditional agencies that rely on templates and bloated
              processes, we work closely with every client, crafting custom
              solutions that are tailored to their goals. From strategy and
              design to development and launch, every decision is made to help
              your business move forward.
            </p>
          </div>

          {/* Social Network Connection Anchor Group */}
          <div className="border-t border-zinc-100 pt-8 mt-4">
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-3">
              Follow Our Pulse
            </span>
            <div className="flex items-center gap-5 text-zinc-600">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DB2E0] transition-colors"
              >
                <FaXTwitter className="size-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DB2E0] transition-colors"
              >
                <FaLinkedinIn className="size-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DB2E0] transition-colors"
              >
                <FaGithub className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DB2E0] transition-colors"
              >
                <FaInstagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: PHILOSOPHY VALUES ARCHITECTURE */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full border-t lg:border-t-0 lg:border-l border-zinc-200/60 pt-8 lg:pt-0 lg:pl-10">
          <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-2">
            Engineering Pillars
          </span>

          {philosophyValues.map((value, idx) => (
            <div
              key={idx}
              className="group border-b border-zinc-100 pb-5 last:border-0 last:pb-0"
            >
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200/50 text-zinc-900 group-hover:bg-[#4DB2E0]/10 group-hover:border-[#4DB2E0]/40 transition-colors duration-300 desktop:p-3">
                  {value.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STUDIO METRICS STRIP CONTAINER */}
      <div className="mx-5 sm:mx-10 mb-16 sm:mb-24">
        <div className="w-full bg-zinc-50 border border-zinc-200/50 rounded-[32px] p-8 sm:p-12 relative overflow-hidden group">
          {/* Ambient Design Token Mesh Glow */}
          <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[#4DB2E0]/10 rounded-full filter blur-2xl pointer-events-none select-none transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 leading-snug">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
