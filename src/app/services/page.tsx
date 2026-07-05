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
    title: "UI/UX Design",
    subtitle: "Beautiful Experiences That Drive Results",
    description:
      "We design modern, intuitive interfaces that strengthen your brand, build customer trust, and create seamless user experiences. Every screen is crafted with strategy, usability, and conversion in mind.",
    image: "/services/customwebsite.png",
    icon: TbPalette,
    metric: "Conversion-Focused Design",
    metricIcon: TbActivityHeartbeat,
    capabilities: [
      "Custom UI Design",
      "User Experience Strategy",
      "Interactive Prototypes",
      "Design Systems",
    ],
  },

  {
    id: "02",
    title: "Custom Website Development",
    subtitle: "Fast, Scalable & Built for Growth",
    description:
      "We develop high-performance websites using modern technologies like Next.js and React. Every project is optimized for speed, security, SEO, and long-term scalability.",
    image: "/services/customwebsite1.png",
    icon: TbCode,
    metric: "Lightning-Fast Performance",
    metricIcon: TbGauge,
    capabilities: [
      "Next.js Development",
      "React & TypeScript",
      "Responsive Design",
      "Performance Optimization",
    ],
  },

  {
    id: "03",
    title: "Business Portfolios",
    subtitle: "Showcase Your Brand with Confidence",
    description:
      "From personal portfolios to company profile websites, we create visually engaging digital experiences that highlight your expertise, build credibility, and generate new business opportunities.",
    image: "/services/portfolio.png",
    icon: TbLayoutDashboard,
    metric: "Professional Online Presence",
    metricIcon: TbBolt,
    capabilities: [
      "Personal Portfolios",
      "Company Profiles",
      "Modern Animations",
      "SEO Optimization",
    ],
  },

  {
    id: "04",
    title: "SEO & Website Optimization",
    subtitle: "Get Found by the Right Customers",
    description:
      "A great website deserves to be seen. We optimize your website for search engines, improve loading speed, and implement technical SEO best practices to increase visibility and attract qualified traffic.",
    image: "/services/seo.png",
    icon: TbSearch,
    metric: "SEO Ready",
    metricIcon: TbCpu,
    capabilities: [
      "Technical SEO",
      "Schema Markup",
      "Core Web Vitals",
      "Google Search Optimization",
    ],
  },

  {
    id: "05",
    title: "WordPress & Headless CMS",
    subtitle: "Flexible Content Management Solutions",
    description:
      "Whether you need a traditional WordPress website or a modern Headless CMS solution, we build secure, scalable platforms that make managing your content simple while delivering exceptional performance.",
    image: "/services/wordpress-website.png",
    icon: TbGlobe,
    metric: "Easy Content Management",
    metricIcon: TbBolt,
    capabilities: [
      "Custom WordPress",
      "Headless CMS",
      "WooCommerce",
      "Content Management",
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
