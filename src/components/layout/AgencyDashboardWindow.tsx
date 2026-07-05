"use client";
import { User2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  TbRocket,
  TbCalendar,
  TbArrowUpRight,
  TbChartBar,
  TbBrandGoogle,
  TbPalette,
  TbCode,
  TbHome,
  TbInbox,
  TbFileText,
  TbAlertCircle,
  TbGraph,
  TbMail,
  TbStars,
  TbHeadset,
  TbShield,
} from "react-icons/tb";

const FEATURE_DATA = {
  "web-development": {
    title: "Modern Web Development",
    subtitle:
      "Lightning-fast Next.js websites built for performance and scalability.",
    stats: "Performance Optimized",
    description:
      "We build high-performance websites that load in under 1 second, are SEO-ready, and provide a seamless user experience across all devices.",
    tasks: [
      {
        id: 1,
        name: "Next.js Framework with SSG & ISR",
        date: "Core",
        status: "UI/UX Design",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 2,
        name: "Responsive & Mobile-First Design",
        date: "Core",
        status: "Next.js Development",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 3,
        name: "Performance Optimization (98/100)",
        date: "Core",
        status: "CMS Integration",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 4,
        name: "Clean & Scalable Code Architecture",
        date: "Core",
        status: "SEO Optimization",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 5,
        name: "SEO-Ready Structure & Meta Tags",
        date: "Core",
        status: "Performance Optimization",
        variant: "bg-amber-50 text-amber-600 border-amber-100",
      },
    ],
    benefits: [
      "🚀 50% faster load times",
      "📱 100% responsive design",
      "🔒 Enterprise-grade security",
      "⚡ Modern Architecture",
    ],
  },
  "seo-strategy": {
    title: "SEO & Google Rankings",
    subtitle:
      "Dominate search results and drive organic traffic to your business.",
    stats: "Top 3 Rankings",
    description:
      "Our SEO strategy helps you rank higher on Google, attract qualified leads, and grow your business organically with sustainable results.",
    tasks: [
      {
        id: 1,
        name: "Advanced Keyword Research & Mapping",
        date: "SEO",
        status: "SEO Optimization",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 2,
        name: "On-Page SEO & Meta Optimization",
        date: "SEO",
        status: "DoSEO Optimizationne",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 3,
        name: "Schema Markup & Rich Snippets",
        date: "SEO",
        status: "SEO Optimization",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 4,
        name: "XML Sitemaps & Robots.txt Setup",
        date: "SEO",
        status: "SEO Optimization",
        variant: "bg-amber-50 text-amber-600 border-amber-100",
      },
      {
        id: 5,
        name: "Core Web Vitals Optimization",
        date: "SEO",
        status: "SEO Optimization",
        variant: "bg-amber-50 text-amber-600 border-amber-100",
      },
    ],
    benefits: [
      "📈 Conversion Focused growth",
      "🎯 Target high-intent keywords",
      "📊 Real-time ranking tracking",
      "🏆 Beat your competitors",
    ],
  },
  "conversion-roi": {
    title: "Conversion & ROI Growth",
    subtitle: "Turn visitors into customers with conversion-focused design.",
    stats: "SEO Ready",
    description:
      "We design websites that don't just look good — they convert. Our data-driven approach helps you get more leads, sales, and revenue from your website.",
    tasks: [
      {
        id: 1,
        name: "Strategic CTA Placement & Design",
        date: "Growth",
        status: "Analytics",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 2,
        name: "User Experience (UX) Optimization",
        date: "Growth",
        status: "Analytics",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 3,
        name: "Trust Signals & Social Proof Integration",
        date: "Growth",
        status: "Analytics",
        variant: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
      {
        id: 4,
        name: "A/B Testing Framework Setup",
        date: "Growth",
        status: "Performance Optimization",
        variant: "bg-amber-50 text-amber-600 border-amber-100",
      },
      {
        id: 5,
        name: "Analytics & Conversion Tracking",
        date: "Growth",
        status: "Performance Optimization",
        variant: "bg-amber-50 text-amber-600 border-amber-100",
      },
    ],
    benefits: [
      "💰 2x+ average revenue increase",
      "📊 Data-driven decisions",
      "🎯 Higher conversion rates",
      "📈 Scalable growth strategy",
    ],
  },
};

const GRAPH_DATA = {
  monthly: [
    { label: "Jan", baseline: 20, optimized: 45 },
    { label: "Feb", baseline: 25, optimized: 60 },
    { label: "Mar", baseline: 22, optimized: 85 },
    { label: "Apr", baseline: 30, optimized: 110 },
    { label: "May", baseline: 28, optimized: 145 },
    { label: "Jun", baseline: 35, optimized: 198 },
  ],
  quarterly: [
    { label: "Q1", baseline: 67, optimized: 190 },
    { label: "Q2", baseline: 93, optimized: 453 },
  ],
};

type FeatureKey = keyof typeof FEATURE_DATA;
type NavigationTab = "services" | "about-us" | "why-website" | "lead-graph";

export default function AgencyDashboardWindow() {
  const [currentNav, setCurrentNav] = useState<NavigationTab>("services");
  const [activeTab, setActiveTab] = useState<FeatureKey>("web-development");
  const [graphTimeline, setGraphTimeline] = useState<"monthly" | "quarterly">(
    "monthly",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const currentData = FEATURE_DATA[activeTab];

  return (
    <section className="w-full max-w-7xl mx-auto relative px-4 -top-30 select-none z-20">
      {/* Main Display */}
      <div className="w-full bg-zinc-200 rounded-xl border border-zinc-200 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-180">
        {/* LEFT SIDEBAR PANEL */}
        <aside className="w-full md:w-64 bg-zinc-50 p-4 flex flex-col border-b md:border-b-0 md:border-r border-zinc-200 shrink-0">
          {/* App Header Window Buttons */}
          <div className="flex items-center justify-between pl-3 mb-8 px-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] block cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] block cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] block cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 space-y-5 overflow-y-auto">
            <div>
              <nav className="space-y-0.5">
                <button
                  onClick={() => setCurrentNav("about-us")}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${currentNav === "about-us" ? "bg-zinc-200 text-zinc-900 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
                >
                  <TbHome className="text-sm text-zinc-400" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setCurrentNav("why-website")}
                  className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${currentNav === "why-website" ? "bg-zinc-200 text-zinc-900 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <TbInbox className="text-sm text-zinc-400" />
                    <span>Why Online Presence?</span>
                  </div>
                  <span className="bg-[#4DB2E0]/10 text-[#4DB2E0] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    Vital
                  </span>
                </button>
                <button
                  onClick={() => setCurrentNav("lead-graph")}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${currentNav === "lead-graph" ? "bg-zinc-200 text-zinc-900 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
                >
                  <TbFileText className="text-sm text-zinc-400" />
                  <span>Interactive ROI Graphs</span>
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-3 block mb-1.5">
                Our Services
              </span>
              <nav className="space-y-0.5">
                <button
                  onClick={() => {
                    setCurrentNav("services");
                    setActiveTab("web-development");
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentNav === "services" && activeTab === "web-development"
                      ? "bg-[#4DB2E0]/10 text-[#4DB2E0] font-semibold"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <TbRocket className="text-sm shrink-0" />
                    <span className="truncate">Web Development</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setCurrentNav("services");
                    setActiveTab("seo-strategy");
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentNav === "services" && activeTab === "seo-strategy"
                      ? "bg-[#4DB2E0]/10 text-[#4DB2E0] font-semibold"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <TbBrandGoogle className="text-sm shrink-0" />
                    <span className="truncate">SEO & Rankings</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setCurrentNav("services");
                    setActiveTab("conversion-roi");
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentNav === "services" && activeTab === "conversion-roi"
                      ? "bg-[#4DB2E0]/10 text-[#4DB2E0] font-semibold"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <TbChartBar className="text-sm shrink-0" />
                    <span className="truncate">Conversion & ROI</span>
                  </div>
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-3 block mb-1.5">
                Quick Guarantees
              </span>
              <div className="space-y-1.5 text-xs text-zinc-600 px-3">
                <div className="flex items-center gap-2.5 hover:text-zinc-900 transition-colors cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Next.js Specialization</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-zinc-900 transition-colors cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>30+ Active Deployments</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-zinc-900 transition-colors cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Conversion Driven UX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Status */}
          <div className="pt-4 border-t border-zinc-200 flex flex-col gap-2 mt-auto">
            <a
              href="/contact"
              className="w-full bg-linear-to-r from-[#4DB2E0] to-[#2D8BB5] hover:from-[#3D9FC8] hover:to-[#1D7B9F] text-white font-bold text-xs px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#4DB2E0]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <TbArrowUpRight className="text-sm" />
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT WINDOW */}
        <main className="flex-1 px-4 md:px-6 flex flex-col bg-white">
          <div className="w-full flex items-center justify-between text-lg text-zinc-900 mb-4">
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                UpgradeUx Agency
              </span>
            </div>
            <div className="flex items-center justify-center px-3 w-12 h-12">
              <Image
                src="/assets/logo.png"
                alt="User Profile"
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* VIEW 1: CORE SERVICES PANEL */}
          {currentNav === "services" && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-5 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                    <span>Core Service</span>
                    <span>/</span>
                    <span className="text-zinc-600 font-semibold">
                      {currentData.title}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-zinc-900 mt-1 tracking-tight">
                    {currentData.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1 max-w-lg">
                    {currentData.description}
                  </p>
                </div>
                <div className="bg-[#4DB2E0]/10 text-[#4DB2E0] font-bold text-xs px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
                  {currentData.stats}
                </div>
              </div>

              {/* Benefits Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3.5 border-b border-zinc-100">
                {currentData.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="text-[10px] font-medium text-zinc-600 flex items-center gap-1.5 hover:bg-zinc-50 p-1 rounded transition-colors cursor-default"
                  >
                    <span className="text-emerald-500">
                      {benefit.split(" ")[0]}
                    </span>
                    <span>{benefit.split(" ").slice(1).join(" ")}</span>
                  </div>
                ))}
              </div>

              {/* Timeline Header */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-zinc-400 py-2.5 bg-zinc-50/60 border-b border-zinc-100 rounded-t-lg mt-4 font-bold tracking-wider uppercase">
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">
                  Phase 1: Foundation
                </div>
                <div className="text-[#4DB2E0] hover:underline cursor-pointer">
                  Phase 2: Growth
                </div>
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">
                  Phase 3: Scale
                </div>
              </div>

              {/* Task Cards */}
              <div className="flex-1 mt-4 relative min-h-[280px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentData.tasks
                  .filter((task) =>
                    task.name.toLowerCase().includes(searchQuery.toLowerCase()),
                  )
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-white border border-zinc-100 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#4DB2E0]/30 hover:shadow-md group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-xs font-bold text-zinc-800 tracking-tight group-hover:text-[#4DB2E0] transition-colors line-clamp-2">
                            {task.name}
                          </h4>
                          <span
                            className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${task.variant}`}
                          >
                            {task.status}
                          </span>
                        </div>
                        <div className="text-[10px] font-medium text-zinc-400 mt-2.5 flex items-center gap-1.5">
                          <TbCalendar className="text-zinc-400 text-xs" />
                          <span>{task.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-50 pt-3 mt-4">
                        <span className="text-[10px] font-medium text-zinc-400">
                          {activeTab === "web-development"
                            ? "Performance Asset"
                            : activeTab === "seo-strategy"
                              ? "Ranking Asset"
                              : "Growth Asset"}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors inline-flex items-center gap-0.5">
                          View Details{" "}
                          <TbArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-xs" />
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* VIEW 2: ABOUT US SNAPSHOT */}
          {currentNav === "about-us" && (
            <div className="flex flex-col h-full justify-between animate-fadeIn">
              <div>
                {/* Header Section with Enhanced Visuals */}
                <div className="border-b border-zinc-100 pb-4 mb-6 relative">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#4DB2E0]/5 rounded-full blur-xl" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block w-1 h-4 bg-[#4DB2E0] rounded-full" />
                    <span className="text-[11px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                      Why Businesses Choose UpgradeUX
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 tracking-tight mt-1.5 leading-tight">
                    Building Websites That{" "}
                    <span className="text-[#4DB2E0]">Grow</span> Businesses
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 font-medium">
                    Trusted by 500+ companies worldwide
                  </p>
                </div>

                {/* Main Description with Enhanced Formatting */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#4DB2E0]/20 to-transparent rounded-full" />
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl mb-6 pl-3">
                    At{" "}
                    <span className="font-semibold text-zinc-800">
                      UpgradeUX
                    </span>
                    , we combine strategy, design, and development to create
                    websites that do more than look great. Every project is
                    built to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                    <div className="flex items-start gap-2.5 bg-gradient-to-br from-blue-50/50 to-transparent p-3 rounded-xl border border-blue-100/50">
                      <TbRocket className="text-[#4DB2E0] text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-[11px] font-bold text-zinc-800">
                          Drive Growth
                        </h4>
                        <p className="text-[10px] text-zinc-500">
                          Generate qualified leads
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gradient-to-br from-indigo-50/50 to-transparent p-3 rounded-xl border border-indigo-100/50">
                      <TbShield className="text-indigo-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-[11px] font-bold text-zinc-800">
                          Build Trust
                        </h4>
                        <p className="text-[10px] text-zinc-500">
                          Increase credibility
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gradient-to-br from-emerald-50/50 to-transparent p-3 rounded-xl border border-emerald-100/50">
                      <TbChartBar className="text-emerald-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-[11px] font-bold text-zinc-800">
                          Ensure Success
                        </h4>
                        <p className="text-[10px] text-zinc-500">
                          Long-term business growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Grid with Enhanced Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {/* Card 1 - Design */}
                  <div className="group relative p-5 rounded-2xl bg-white border border-zinc-100 hover:border-[#4DB2E0]/30 hover:shadow-xl hover:shadow-[#4DB2E0]/5 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4DB2E0]/0 to-[#4DB2E0]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-[#4DB2E0]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <TbPalette className="text-[#4DB2E0] text-xl" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1.5">
                        High-End UI Aesthetics
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Organic layouts, responsive grids, and stunning modern
                        visual flows that captivate users and reinforce brand
                        identity.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-[#4DB2E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <TbArrowUpRight className="text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Development */}
                  <div className="group relative p-5 rounded-2xl bg-white border border-zinc-100 hover:border-[#2D8BB5]/30 hover:shadow-xl hover:shadow-[#2D8BB5]/5 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D8BB5]/0 to-[#2D8BB5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-[#2D8BB5]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <TbCode className="text-[#2D8BB5] text-xl" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1.5">
                        Clean Architecture
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Production-ready setups using high-speed Next.js
                        patterns with type-safe code, optimal performance, and
                        scalability built-in.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-[#2D8BB5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <TbArrowUpRight className="text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Performance (New) */}
                  <div className="group relative p-5 rounded-2xl bg-white border border-zinc-100 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-400/5 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <TbRocket className="text-emerald-500 text-xl" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1.5">
                        Lightning Performance
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Optimized for speed with 90+ Lighthouse scores, instant
                        page loads, and smooth interactions that keep users
                        engaged.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <TbArrowUpRight className="text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Support (New) */}
                  <div className="group relative p-5 rounded-2xl bg-white border border-zinc-100 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-400/5 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <TbHeadset className="text-purple-500 text-xl" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1.5">
                        Dedicated Support
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        24/7 expert assistance, regular maintenance updates, and
                        a dedicated team that ensures your website runs
                        flawlessly.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <TbArrowUpRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Section (New) */}
                <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100/50">
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#4DB2E0]">
                      500+
                    </div>
                    <div className="text-[10px] font-medium text-zinc-500 mt-0.5">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center border-l border-r border-blue-100/50">
                    <div className="text-2xl font-black text-[#4DB2E0]">
                      98%
                    </div>
                    <div className="text-[10px] font-medium text-zinc-500 mt-0.5">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#4DB2E0]">
                      4.9★
                    </div>
                    <div className="text-[10px] font-medium text-zinc-500 mt-0.5">
                      Average Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 text-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DB2E0]/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TbStars className="text-[#4DB2E0] text-lg" />
                      <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                        Featured Portfolio
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4 max-w-md mx-auto">
                      Explore our complete design philosophy, full portfolio,
                      and company milestones.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="/about"
                        className="group inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 hover:shadow-white/20"
                      >
                        <span>View Full Portfolio</span>
                        <TbArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-zinc-700/50 hover:bg-zinc-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-zinc-600/50"
                      >
                        <TbMail className="text-sm" />
                        <span>Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: WHY YOU NEED AN ONLINE PRESENCE */}
          {currentNav === "why-website" && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="border-b border-zinc-100 pb-4 mb-4">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1">
                  <TbAlertCircle className="text-sm" /> Lacking an Online
                  Presence?
                </span>
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight mt-1">
                  Why a Website is Non-Negotiable
                </h3>
              </div>

              <p className="text-sm text-zinc-600 mb-6">
                Without a modern, high-converting digital storefront, your
                business loses credibility to modern competitors every second.
                Here is how we bridge the gap:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 font-bold text-sm">
                      01
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                      Complete Redesign
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                      Transform broken, dated designs into sleek, organic
                      interfaces that look exceptional on mobile and desktop
                      platforms alike.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600 mt-4 block uppercase">
                    Establishes Authority
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 font-bold text-sm">
                      02
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                      High Intent SEO
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                      Stop hiding on page 2. We capture organic local and
                      international search intents to deliver compounding free
                      business traffic.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 mt-4 block uppercase">
                    Attracts Customers
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center text-[#4DB2E0] mb-3 font-bold text-sm">
                      03
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                      Automated Leads
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                      Incorporate micro-interactions, strategic validation
                      headers, and crisp forms that capture user details
                      automatically.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[#4DB2E0] mt-4 block uppercase">
                    Maximizes ROI
                  </span>
                </div>
              </div>

              <button
                onClick={() => setCurrentNav("lead-graph")}
                className="mt-6 w-full py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 hover:bg-zinc-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <TbGraph className="text-base text-[#4DB2E0]" />
                <span>See the Visual Lead Conversion Graph</span>
              </button>
            </div>
          )}

          {/* VIEW 4: INTERACTIVE LEAD GENERATION & ROI GRAPH */}
          {currentNav === "lead-graph" && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 mb-6 gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    Metrics Dashboard
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 tracking-tight mt-1">
                    Compounding Lead Generation
                  </h3>
                </div>

                {/* Timeline Toggle Filter Controls */}
                <div className="flex bg-zinc-100 p-1 rounded-xl self-start sm:self-center border border-zinc-200">
                  <button
                    onClick={() => setGraphTimeline("monthly")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${graphTimeline === "monthly" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setGraphTimeline("quarterly")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${graphTimeline === "quarterly" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Quarterly
                  </button>
                </div>
              </div>

              {/* Graphic Plot Display Area */}
              <div className="flex-1 bg-zinc-50 rounded-2xl border border-zinc-100 p-4 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-zinc-300 block" />
                    <span>Without Website (Baseline)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-gradient-to-t from-[#2D8BB5] to-[#4DB2E0] block" />
                    <span>Our Next.js SEO Platform</span>
                  </div>
                </div>

                {/* Simulated Graph Bars */}
                <div className="flex items-end justify-between h-40 pt-6 px-4 border-b border-zinc-200 relative">
                  {GRAPH_DATA[graphTimeline].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 flex-1 group"
                    >
                      <div className="flex items-end gap-1.5 w-full justify-center h-28">
                        {/* Baseline column bar */}
                        <div
                          style={{ height: `${(item.baseline / 200) * 100}%` }}
                          className="w-4 sm:w-6 bg-zinc-200 rounded-t transition-all duration-700 ease-out group-hover:bg-zinc-300 relative"
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-zinc-800 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.baseline}
                          </span>
                        </div>
                        {/* Optimized growth column bar */}
                        <div
                          style={{ height: `${(item.optimized / 200) * 100}%` }}
                          className="w-4 sm:w-6 bg-gradient-to-t from-[#2D8BB5] to-[#4DB2E0] rounded-t transition-all duration-700 ease-out relative shadow-sm group-hover:brightness-105"
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-[#2D8BB5] text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {item.optimized} Leads
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-medium text-zinc-500 mt-2 px-2 flex items-center gap-1.5">
                  <span className="p-0.5 bg-emerald-100 text-emerald-700 rounded font-bold text-[10px]">
                    +287% ROI
                  </span>
                  <span>
                    Hover over any chart column bar metric node to see explicit
                    interactive monthly volume indicators.
                  </span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
