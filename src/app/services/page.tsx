"use client";

import React from "react";
import Image from "next/image";
import {
  TbPalette,
  TbCode,
  TbSearch,
  TbArrowUpRight,
  TbActivityHeartbeat,
  TbCpu,
  TbGauge,
  TbLayoutDashboard,
  TbBolt,
  TbGlobe,
} from "react-icons/tb";

const ALL_EXTENDED_SERVICES = [
  {
    id: "01",
    title: "UI/UX Design Systems",
    subtitle: "High-Fidelity Interface Engineering",
    description:
      "Architecting atomic components, modular type hierarchies, and fluid interaction variables. We deliver predictable transactional flows that scale directly into clean multi-brand production engines.",
    image: "/services/customwebsite.png",
    icon: TbPalette,
    metric: "40% Conversion Lift",
    metricIcon: TbActivityHeartbeat,
    capabilities: [
      "Tokens Studio Isolation",
      "Figma Variables Matrix",
      "Asymmetric Wireframing",
      "Micro-Interaction Blueprints",
    ],
  },
  {
    id: "02",
    title: "Custom Web Applications",
    subtitle: "Performance-Driven Core Architectures",
    description:
      "Engineering decoupled serverless Next.js, React, and strict Tailwind modules optimized for critical loading phases, edge middleware caching, and robust relational data layouts.",
    image: "/services/customwebsite1.png",
    icon: TbCode,
    metric: "0.2s Time to Interactive",
    metricIcon: TbGauge,
    capabilities: [
      "Next.js Router Architecture",
      "TypeScript Typings",
      "Tailwind Isolation",
      "Edge Caching Layers",
    ],
  },{
    id: "04", // Update this index according to your array order
    title: "Premium Digital Portfolios",
    subtitle: "Custom Brand Showcases & Developer Kits",
    description:
      "Engineering lightning-fast, highly animated digital portfolios and resume platforms built with smooth micro-interactions, clean layout patterns, and robust content systems designed to secure premium inquiries.",
    image: "/services/portfolio.png",
    icon: TbLayoutDashboard, // Or use TbBriefcase / TbUserCheck from your current imports
    metric: "100% Core Web Vitals",
    metricIcon: TbBolt,
    capabilities: [
      "Framer Motion Workflows",
      "Next.js Static Generation",
      "Tailwind Glassmorphism",
      "SEO & Discovery Tuning",
    ],
  },
  {
    id: "04",
    title: "Programmatic SEO Engines",
    subtitle: "Structural Search Discoverability",
    description:
      "Structuring semantic schema markup injections, edge-rendered XML indexes, and fast caching configurations to systematically capture massive scale multi-market user acquisition.",
    image: "/services/seo.png",
    icon: TbSearch,
    metric: "3x Organic Discovery Index",
    metricIcon: TbCpu,
    capabilities: [
      "Schema Injections",
      "Edge Metadata Rendering",
      "Vitals Optimization",
      "Automated Map Indexing",
    ],
  },
  {
    id: "05",
    title: " headless & Custom WordPress",
    subtitle: "Enterprise Content Infrastructure",
    description:
      "Transforming monolithic WordPress setups into lightning-fast platforms using custom Gutenberg block development, decoupled Headless React architectures, and high-security caching structures.",
    image: "/services/wordpress-website.png",
    icon: TbGlobe, // Represents the open-web nature of WP
    metric: "Under 1.2s Content Load",
    metricIcon: TbBolt,
    capabilities: [
      "Headless WP via GraphQL",
      "Custom Gutenberg Blocks",
      "Advanced Custom Fields",
      "WooCommerce Scale Tuning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen text-zinc-950 antialiased font-sans selection:bg-[#4DB2E0]/20">
      {/* 1. HERO HEADER AREA */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none">
            Our Services
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Explore our complete systematic workflow menu built explicitly on
          performant code ecosystems.
        </p>
      </div>

      {/* 2. GRID DIRECTORY OVERVIEW */}
      <div className="mx-5 sm:mx-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ALL_EXTENDED_SERVICES.map((service) => {
            const Icon = service.icon;
            const MetricIcon = service.metricIcon;

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between border-t border-zinc-200/80 pt-6 hover:border-zinc-950 transition-colors duration-500"
              >
                <div>
                  {/* Title Metrics Layout Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-black text-zinc-300 group-hover:text-zinc-950 transition-colors duration-300">
                      {service.id}
                    </span>
                    <div className="flex items-center gap-1.5 bg-zinc-50 group-hover:bg-zinc-950 border border-zinc-100 group-hover:border-zinc-900 px-2.5 py-1 rounded-lg transition-colors duration-500">
                      <MetricIcon className="text-emerald-500 text-xs animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-zinc-300">
                        {service.metric}
                      </span>
                    </div>
                  </div>

                  {/* PREMIUM ASPECT RATIO IMAGE LAYER */}
                  <div className="relative w-full aspect-16/10 bg-zinc-50 border border-zinc-100/80 overflow-hidden rounded-xl rounded-br-[42px] mb-6 transition-all duration-500 group-hover:shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>

                  {/* Icon & Label Cluster */}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="text-base text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3 group-hover:translate-x-0.5 transition-transform duration-300">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Component Capabilities List */}
                  <div className="flex flex-col gap-1.5 border-t border-zinc-100 pt-4 mb-8">
                    {service.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        className="flex items-center gap-2 text-[11px] text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300 font-mono"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-[#4DB2E0] transition-colors" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Action Button Trigger */}
                <div className="flex items-center justify-between border-t border-zinc-50 pt-4 mt-auto cursor-pointer">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300">
                    Initialize Project Scope
                  </span>
                  <div className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white group-hover:rotate-45">
                    <TbArrowUpRight className="text-xs" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
