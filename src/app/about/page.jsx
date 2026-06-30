"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLayoutDashboard, LuCpu, LuEye } from "react-icons/lu";

export default function AboutPage() {
  const philosophyValues = [
    {
      icon: <LuLayoutDashboard className="size-5 text-zinc-900" />,
      title: "No Templates. No Shortcuts.",
      description:
        "Every project is designed from the ground up to match the brand, audience, and goals of the business we work with.",
    },
    {
      icon: <LuCpu className="size-5 text-zinc-900" />,
      title: "Built For Modern Web Standards",
      description:
        "Fast loading, SEO-friendly, responsive, and engineered using modern technologies that scale with your business.",
    },
    {
      icon: <LuEye className="size-5 text-zinc-900" />,
      title: "Design That Creates Trust",
      description:
        "We focus on creating polished digital experiences that make businesses look credible, professional, and memorable.",
    },
  ];

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white selection:bg-[#4DB2E0]/20">
      {/* 1. TOP HERO BANNER BLOCK */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 md:mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700  leading-none">
            About Us
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Explore our complete systematic workflow menu built explicitly on
          performant code ecosystems.
        </p>
      </div>

      {/* 2. CORE PHILOSOPHY SPLIT-LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28 mx-5 sm:mx-10">
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#4DB2E0] uppercase block mb-3">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-700 max-w-3xl leading-[1.1] mb-4">
              We founded UpgradeUX with a simple belief: businesses deserve
              websites that do more than just exist online.
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-2">
              Too many websites today are built from the same templates, follow
              the same patterns, and ultimately fail to create a memorable
              impression. They may look acceptable, but they rarely communicate
              trust, reflect the quality of the business behind them, or drive
              meaningful growth.
            </p>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-2">
              As a new generation of designers and developers, we saw an
              opportunity to approach web design differently.
            </p>

            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-2">
              UpgradeUX was created to help ambitious businesses stand out
              through thoughtful design, modern development, and user
              experiences that feel intentional from the very first interaction.
              Every project is crafted with a focus on clarity, performance, and
              conversion—because a website should be a business asset, not just
              a visual showcase.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-2">
              Founded by Suraj Savle, UpgradeUX operates as an independent
              digital studio specializing in custom websites, redesigns, and
              scalable web experiences built with modern technologies such as
              Next.js and React.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed mb-2">
              We work closely with founders, startups, creators, and growing
              businesses who understand that first impressions matter. Instead
              of outsourcing work or relying on generic themes, we create
              tailored solutions designed around each client&apos;s goals,
              audience, and vision.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed">
              Our mission is simple: transform ordinary websites into
              experiences that build trust, elevate brands, and create
              opportunities for growth.
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
    </div>
  );
}
