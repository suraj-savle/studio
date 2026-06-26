"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TbPalette,
  TbCode,
  TbDeviceMobile,
  TbSearch,
  TbArrowUpRight,
  TbActivityHeartbeat,
  TbFingerprint,
  TbCpu,
  TbGauge,
} from "react-icons/tb";

const DETAILED_SERVICES = [
  {
    title: "UI/UX Design Systems",
    subtitle: "High-Fidelity Interface Engineering",
    description:
      "Architecting atomic components, modular type hierarchies, and fluid interaction variables. We deliver predictable transactional flows that scale directly into clean multi-brand production engines.",
    image: "/seo.png",
    icon: TbPalette,
    metric: "40% Conversion Lift",
    metricIcon: TbActivityHeartbeat,
    stack: [
      "Figma Enterprise",
      "Tokens Studio",
      "Prototyping",
      "A/B Test Matrices",
    ],
  },
  {
    title: "Custom Web Applications",
    subtitle: "Performance-Driven Core Architectures",
    description:
      "Engineering decoupled serverless Next.js, React, and strict Tailwind modules optimized for critical loading phases, edge middleware caching, and robust relational data layouts.",
    image: "/2.png",
    icon: TbCode,
    metric: "0.2s Time to Interactive",
    metricIcon: TbGauge,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL Layers"],
  },
  {
    title: "Native Mobile Layers",
    subtitle: "Cross-Platform Application Frameworks",
    description:
      "Deploying fluid, production-hardened iOS and Android ecosystems built entirely on performance-tuned custom gesture layers, local data persistence setups, and background task runners.",
    image: "/3.png",
    icon: TbDeviceMobile,
    metric: "99.9% Crash-Free Sessions",
    metricIcon: TbFingerprint,
    stack: ["React Native", "Expo Core", "Zustand State", "Native Bridges"],
  },
  {
    title: "Programmatic SEO Engines",
    subtitle: "Structural Search Discoverability",
    description:
      "Structuring semantic schema markup injections, edge-rendered XML indexes, and fast caching configurations to systematically capture massive scale multi-market user acquisition.",
    image: "/4.png",
    icon: TbSearch,
    metric: "3x Organic Discovery Index",
    metricIcon: TbCpu,
    stack: [
      "Schema.org Injections",
      "Edge Rendering",
      "Core Web Vitals",
      "Analytics",
    ],
  },
];

export default function ServicesShowcaseRows() {
  return (
    <section className="w-full px-4 sm:px-28 bg-white text-zinc-950 select-none antialiased">
      <div className="mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-10">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter uppercase leading-none">
            Our Services
          </h2>
          <p className="text-xs md:text-xs font-medium text-zinc-500 max-w-sm leading-relaxed">
            We operate at the exact boundary line of extreme performance metrics
            and pure engineering clarity to scale custom platforms.
          </p>
        </div>

        <div className="flex flex-col">
          {DETAILED_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const MetricIcon = service.metricIcon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-zinc-200 py-16 first:pt-0 last:border-0"
              >
                <div className="lg:col-span-1 hidden lg:block pt-1">
                  <span className="text-sm font-mono font-extrabold text-zinc-300 group-hover:text-zinc-950 transition-colors duration-300">
                    [0{idx + 1}]
                  </span>
                </div>

                <div
                  className={`lg:col-span-5 relative w-full aspect-18/10 overflow-hidden bg-zinc-50 border border-zinc-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isEven ? "rounded-2xl lg:order-2" : "rounded-2xl lg:order-3"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                    priority={idx === 0}
                  />

                  <div className="absolute bottom-4 right-4 bg-zinc-950/90 text-white backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 border border-zinc-800 shadow-xl transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <MetricIcon className="text-emerald-400 text-sm animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-wide">
                      {service.metric}
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
                    isEven ? "lg:order-3 lg:pl-6" : "lg:order-2 lg:pr-6"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="text-sm text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
                      <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 group-hover:translate-x-1 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-zinc-500 font-normal max-w-xl">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.stack.map((item, tokenIdx) => (
                        <span
                          key={tokenIdx}
                          className="text-[10px] font-mono font-medium bg-zinc-50 text-zinc-600 border border-zinc-200/60 px-2 py-0.5 rounded-md transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-zinc-300 group-hover:border-zinc-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100 max-w-md cursor-pointer">
                    <span className="text-[11px] font-mono font-black tracking-wider uppercase text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300">
                      Request Deployment Specs
                    </span>
                    <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white group-hover:rotate-45">
                      <TbArrowUpRight className="text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ACTION LAYER: VIEW ALL SERVICES LINK */}
        <div className="w-full flex justify-center items-center pt-16 pb-24 border-t border-zinc-100 mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-zinc-950/10 hover:shadow-xl transition-all duration-300 group active:scale-[0.98]"
          >
            <span>View All Services</span>
            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 group-hover:rotate-45 transition-all duration-300">
              <TbArrowUpRight className="text-[10px]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
