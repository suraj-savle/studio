"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiTargetBold } from "react-icons/pi";
import {
  TbRocket,
  TbArrowUpRight,
  TbChartBar,
  TbBrandGoogle,
  TbPalette,
  TbCode,
  TbHome,
  TbInbox,
  TbFileText,
  TbAlertCircle,
  TbMail,
  TbStars,
  TbHeadset,
  TbUsers,
  TbTrendingUp,
  TbCheck,
  TbX,
  TbEyeOff,
  TbMapPin,
} from "react-icons/tb";

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

type NavigationTab =
  | "what-you-get"
  | "about-us"
  | "why-website"
  | "lead-graph"
  | "seo-services";

export default function AgencyDashboardWindow() {
  // ✅ Set "about-us" as default view
  const [currentNav, setCurrentNav] = useState<NavigationTab>("about-us");
  const [graphTimeline, setGraphTimeline] = useState<"monthly" | "quarterly">(
    "monthly",
  );

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
                    <span>How we Work?</span>
                  </div>
                  <span className="bg-[#4DB2E0]/10 text-[#4DB2E0] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    Vital
                  </span>
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-3 block mb-1.5">
                Other
              </span>
              <nav className="space-y-0.5">
                <button
                  onClick={() => setCurrentNav("lead-graph")}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${currentNav === "lead-graph" ? "bg-zinc-200 text-zinc-900 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
                >
                  <TbFileText className="text-sm text-zinc-400" />
                  <span>Why it Matters</span>
                </button>
                <button
                  onClick={() => setCurrentNav("what-you-get")}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${currentNav === "what-you-get" ? "bg-zinc-200 text-zinc-900 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
                >
                  <PiTargetBold  className="text-sm text-zinc-400" />
                  <span>what you get</span>
                </button>
                <button
                  onClick={() => setCurrentNav("seo-services")}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    currentNav === "seo-services"
                      ? "bg-zinc-200 text-zinc-900 font-semibold"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <TbBrandGoogle className="text-sm text-zinc-400" />
                  <span>SEO Services</span>
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
              <span>Book a Free Consultation</span>
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

          {/* VIEW 2: ABOUT US SNAPSHOT (DEFAULT VIEW) */}
          {currentNav === "about-us" && (
            <div className="flex flex-col h-full justify-between animate-fadeIn">
              {/* Trust Badge Section */}
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-1 h-5 bg-[#4DB2E0] rounded-full" />
                  <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                    Trusted by 500+ Businesses
                  </span>
                </div>

                <h2 className="text-3xl font-black text-zinc-900 tracking-tight leading-tight mb-2">
                  We Build Websites That
                  <span className="text-[#4DB2E0] block sm:inline">
                    {" "}
                    Drive Real Results
                  </span>
                </h2>

                <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                  At{" "}
                  <span className="font-semibold text-zinc-800">UpgradeUX</span>
                  , we combine strategy, design, and development to create
                  high-performing websites that help businesses grow.
                </p>
              </div>

              {/* What We Do Best - Simple Value Props */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-zinc-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#4DB2E0] rounded-full" />
                  What We Do Best
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-zinc-100 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TbPalette className="text-[#4DB2E0] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">
                        Stunning Design
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Beautiful, responsive designs that captivate and convert
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-zinc-100 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-[#2D8BB5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TbCode className="text-[#2D8BB5] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">
                        Clean Code
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Lightning-fast performance with modern tech stack
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-zinc-100 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TbRocket className="text-emerald-500 text-lg" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">
                        Fast Performance
                      </h4>
                      <p className="text-xs text-zinc-500">
                        90+ Lighthouse scores, instant load times
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-zinc-100 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TbHeadset className="text-purple-500 text-lg" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">
                        Dedicated Support
                      </h4>
                      <p className="text-xs text-zinc-500">
                        24/7 expert help and regular maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-2 pt-6 border-t border-zinc-100 mb-5">
                <div className="text-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6">
                  <h4 className="text-white font-bold text-sm mb-2">
                    Ready to Build Something Amazing?
                  </h4>
                  <p className="text-zinc-400 text-xs mb-4">
                    Join 500+ happy clients who trust us with their digital
                    presence
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="/portfolio"
                      className="group inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>View Our Work</span>
                      <TbArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                      href="/contact"
                      className="group inline-flex items-center gap-2 bg-zinc-700/50 hover:bg-zinc-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all border border-zinc-600/50"
                    >
                      <TbMail className="text-sm" />
                      <span>Start a Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: WHY YOU NEED AN ONLINE PRESENCE */}
          {currentNav === "why-website" && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* Header Section */}
              <div className="border-b border-zinc-100 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-1 h-4 bg-[#4DB2E0] rounded-full" />
                  <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                    Our Process
                  </span>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight mt-1.5 leading-tight">
                  How We Build Websites That{" "}
                  <span className="text-[#4DB2E0]">Work</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1.5">
                  A proven 4-step process from strategy to launch
                </p>
              </div>

              {/* Process Steps - Clean Timeline */}
              <div className="space-y-4 flex-1">
                {/* Step 1 */}
                <div className="relative pl-6 pb-4 border-l-2 border-[#4DB2E0]/20 last:border-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4DB2E0] border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-[#4DB2E0]">
                      01
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Discovery & Strategy
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pl-9">
                    We learn about your business, goals, and audience to create
                    a clear roadmap for success.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 pl-9">
                    <span className="text-[9px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                      Consultation
                    </span>
                    <span className="text-[9px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                      Research
                    </span>
                    <span className="text-[9px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                      Planning
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-6 pb-4 border-l-2 border-violet-200 last:border-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-violet-500">
                      02
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900">
                      UI/UX Design
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pl-9">
                    We design a modern, user-friendly interface that reflects
                    your brand and delights visitors.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 pl-9">
                    <span className="text-[9px] font-medium bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full">
                      Wireframing
                    </span>
                    <span className="text-[9px] font-medium bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full">
                      Prototyping
                    </span>
                    <span className="text-[9px] font-medium bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full">
                      Responsive
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-6 pb-4 border-l-2 border-emerald-200 last:border-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-emerald-500">
                      03
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Development & Optimization
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pl-9">
                    We build a fast, secure website optimized for speed, SEO,
                    and a seamless experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 pl-9">
                    <span className="text-[9px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                      Clean Code
                    </span>
                    <span className="text-[9px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                      Speed
                    </span>
                    <span className="text-[9px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                      SEO
                    </span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative pl-6 pb-0 border-l-2 border-zinc-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-600 border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-zinc-600">
                      04
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Launch & Support
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pl-9">
                    We test everything, launch with confidence, and provide
                    ongoing support to keep you running.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 pl-9">
                    <span className="text-[9px] font-medium bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full">
                      Testing
                    </span>
                    <span className="text-[9px] font-medium bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full">
                      Deployment
                    </span>
                    <span className="text-[9px] font-medium bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full">
                      Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 4: INTERACTIVE LEAD GENERATION & ROI GRAPH */}
          {currentNav === "lead-graph" && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* Header with Transformation Story */}
              <div className="border-b border-zinc-100 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-1 h-4 bg-[#4DB2E0] rounded-full" />
                  <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                    Before vs After
                  </span>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                  What Happens When You Take Your{" "}
                  <span className="text-[#4DB2E0]">Business Online</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1.5">
                  See the transformation from invisible to unstoppable
                </p>
              </div>

              {/* Before & After Cards - No Numbers */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Before Card */}
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🌐</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Without Website
                    </span>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 bg-zinc-200 rounded-full opacity-20" />
                      <TbEyeOff className="text-3xl text-zinc-300" />
                    </div>
                    <p className="text-xs text-zinc-400 text-center mt-2 leading-relaxed">
                      Invisible to potential customers
                    </p>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                      <TbX className="text-zinc-300" />
                      <span>No online presence</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                      <TbX className="text-zinc-300" />
                      <span>Zero brand visibility</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                      <TbX className="text-zinc-300" />
                      <span>Missing opportunities</span>
                    </div>
                  </div>
                </div>

                {/* After Card */}
                <div className="p-4 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🚀</span>
                    <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-wider">
                      With Website (online presence)
                    </span>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4DB2E0]/20 to-[#2D8BB5]/20 rounded-full animate-pulse" />
                      <TbRocket className="text-3xl text-[#4DB2E0]" />
                    </div>
                    <p className="text-xs text-zinc-600 text-center mt-2 leading-relaxed font-medium">
                      Visible to thousands of customers
                    </p>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                      <TbCheck className="text-emerald-500" />
                      <span>Professional online presence</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                      <TbCheck className="text-emerald-500" />
                      <span>Strong brand authority</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                      <TbCheck className="text-emerald-500" />
                      <span>Continuous lead generation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TbTrendingUp className="text-sm text-[#4DB2E0]" />
                  <span className="text-[10px] font-bold text-zinc-600">
                    Growth Trajectory
                  </span>
                </div>
                <div className="flex bg-zinc-100 p-1 rounded-lg border border-zinc-200">
                  <button
                    onClick={() => setGraphTimeline("monthly")}
                    className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all ${
                      graphTimeline === "monthly"
                        ? "bg-white text-zinc-950 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setGraphTimeline("quarterly")}
                    className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all ${
                      graphTimeline === "quarterly"
                        ? "bg-white text-zinc-950 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Quarterly
                  </button>
                </div>
              </div>

              {/* Graph with Icons & Growth Indicators */}
              <div className="flex-1 bg-white rounded-2xl border border-zinc-100 p-4 flex flex-col mb-4">
                {/* Legend */}
                <div className="flex flex-wrap items-center gap-4 mb-3 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-zinc-200 block" />
                    <span className="text-zinc-400">Without Website</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-linear-to-t from-[#2D8BB5] to-[#4DB2E0] block" />
                    <span className="text-[#4DB2E0]">With website</span>
                  </div>
                </div>

                {/* Chart Bars - No Numbers */}
                <div className="flex-1 flex items-end justify-between h-40 pt-4 pb-2 px-2 border-b border-zinc-200 relative min-h-40">
                  {GRAPH_DATA[graphTimeline].map((item, index) => {
                    const growthLevel =
                      index === 0
                        ? "low"
                        : index === 1
                          ? "medium"
                          : index === 2
                            ? "high"
                            : "peak";
                    const barHeight =
                      growthLevel === "low"
                        ? 15
                        : growthLevel === "medium"
                          ? 40
                          : growthLevel === "high"
                            ? 70
                            : 95;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 flex-1 group"
                      >
                        <div className="flex items-end gap-1.5 w-full justify-center h-28">
                          {/* Before Bar - Flat/Minimal */}
                          <div
                            style={{
                              height: `${Math.max(barHeight - 10, 5)}%`,
                            }}
                            className="w-4 sm:w-6 bg-zinc-200 rounded-t transition-all duration-700 ease-out group-hover:bg-zinc-300 relative"
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-[8px] font-mono font-bold bg-zinc-800 text-white px-1.5 py-0.5 rounded whitespace-nowrap">
                                Minimal
                              </span>
                            </div>
                          </div>
                          {/* After Bar - Growing */}
                          <div
                            style={{ height: `${barHeight}%` }}
                            className="w-4 sm:w-6 bg-gradient-to-t from-[#2D8BB5] to-[#4DB2E0] rounded-t transition-all duration-700 ease-out relative shadow-sm group-hover:brightness-110"
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-[8px] font-mono font-bold bg-[#2D8BB5] text-white px-1.5 py-0.5 rounded whitespace-nowrap z-10">
                                Growing
                              </span>
                            </div>
                            {/* Growth indicator */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-emerald-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                              ↑
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono font-bold text-zinc-400">
                            {item.label}
                          </span>
                          {index >= 1 && (
                            <span className="text-[8px] text-emerald-500">
                              ↑
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Growth Insights - No Numbers */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
                    <TbTrendingUp className="text-emerald-600" />
                    <div>
                      <div className="text-[10px] font-bold text-emerald-700">
                        Exponential
                      </div>
                      <div className="text-[8px] text-emerald-600">
                        Growth Trajectory
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
                    <TbUsers className="text-blue-600" />
                    <div>
                      <div className="text-[10px] font-bold text-blue-700">
                        Thousands
                      </div>
                      <div className="text-[8px] text-blue-600">
                        Monthly Visitors
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-indigo-50 rounded-lg border border-indigo-100">
                    <TbRocket className="text-indigo-600" />
                    <div>
                      <div className="text-[10px] font-bold text-indigo-700">
                        Higher
                      </div>
                      <div className="text-[8px] text-indigo-600">
                        Conversion Rates
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <Link
                  href="/contact"
                  className="mt-4 w-full py-3 bg-gradient-to-r from-[#2D8BB5] to-[#4DB2E0] hover:from-[#2D8BB5]/90 hover:to-[#4DB2E0]/90 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#4DB2E0]/20"
                >
                  <TbRocket className="text-sm" />
                  <span>Take Your Business Online Today</span>
                  <TbArrowUpRight className="text-sm" />
                </Link>
              </div>
            </div>
          )}

          {/* VIEW 5: INTERACTIVE LEAD GENERATION & ROI GRAPH */}
          {currentNav === "what-you-get" && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* Header Section */}
              <div className="border-b border-zinc-100 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-1 h-4 bg-[#4DB2E0] rounded-full" />
                  <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                    what you get
                  </span>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                  Everything You Need to{" "}
                  <span className="text-[#4DB2E0]">Succeed Online</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1.5">
                  A complete package designed to launch your business with
                  confidence
                </p>
              </div>

              {/* Main Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                {/* Design & UI */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#4DB2E0]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbPalette className="text-[#4DB2E0] text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Custom UI Design
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Tailored designs that reflect your brand identity and
                        captivate your audience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Development */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#2D8BB5]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2D8BB5]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbCode className="text-[#2D8BB5] text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Responsive Development
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Flawless experience across desktop, tablet, and mobile
                        devices
                      </p>
                    </div>
                  </div>
                </div>

                {/* SEO */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-emerald-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbBrandGoogle className="text-emerald-500 text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          SEO Setup
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Optimized structure and content to rank higher in search
                        results
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-purple-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbRocket className="text-purple-500 text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Performance Optimization
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Lightning-fast load times and smooth user interactions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Forms */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#4DB2E0]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbMail className="text-[#4DB2E0] text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Contact Forms
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Strategic forms designed to capture and convert leads
                        effectively
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#2D8BB5]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2D8BB5]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbChartBar className="text-[#2D8BB5] text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Analytics Integration
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Track visitor behavior and measure what matters for your
                        business
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deployment */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-emerald-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbRocket className="text-emerald-500 text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Deployment
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Seamless launch with zero downtime and reliable hosting
                        setup
                      </p>
                    </div>
                  </div>
                </div>

                {/* Documentation */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-purple-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbFileText className="text-purple-500 text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Documentation
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Complete guides and resources to manage your website
                        confidently
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus Section - What's Included Summary */}
              <div className="mt-6 pt-6 mb-5 border-t border-zinc-100">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TbStars className="text-[#4DB2E0] text-lg" />
                    <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                      All-in-One Package
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                    No hidden costs or surprises. Everything you need is
                    included — from design to deployment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                      <TbCheck className="text-emerald-400 text-xs" />
                      <span>Design</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                      <TbCheck className="text-emerald-400 text-xs" />
                      <span>Development</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                      <TbCheck className="text-emerald-400 text-xs" />
                      <span>SEO</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                      <TbCheck className="text-emerald-400 text-xs" />
                      <span>Launch</span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <Link
                    href="/contact"
                    className="mt-4 w-full py-3 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span>Get Started Today</span>
                    <TbArrowUpRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {currentNav === "seo-services" && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* Header Section */}
              <div className="border-b border-zinc-100 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-1 h-4 bg-[#4DB2E0] rounded-full" />
                  <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-[0.2em]">
                    SEO Services
                  </span>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                  You Have a Website.{" "}
                  <span className="text-[#4DB2E0]">Why No Clients?</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1.5">
                  We help you rank higher and get found by the right people
                </p>
              </div>

              {/* Problem Statement */}
              <div className="mb-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <TbAlertCircle className="text-amber-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-800">
                      Your Website Isn&apos;t Being Found
                    </h4>
                    <p className="text-xs text-amber-700 leading-relaxed mt-0.5">
                      Even with a great website, if you&apos;re not ranking on
                      the first page of Google, potential customers will never
                      find you. That&apos;s where we come in.
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                {/* SEO Audit */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#4DB2E0]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbFileText className="text-[#4DB2E0] text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Full SEO Audit
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Identify what&apos;s holding your website back from
                        ranking
                      </p>
                    </div>
                  </div>
                </div>

                {/* Keyword Strategy */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#2D8BB5]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2D8BB5]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbBrandGoogle className="text-[#2D8BB5] text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Keyword Strategy
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Target the right keywords your customers are actually
                        searching for
                      </p>
                    </div>
                  </div>
                </div>

                {/* On-Page SEO */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-emerald-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbCode className="text-emerald-500 text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          On-Page Optimization
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Optimize content, meta tags, and structure for search
                        engines
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical SEO */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-purple-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbRocket className="text-purple-500 text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Technical SEO
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Fix site speed, mobile issues, and crawl errors holding
                        you back
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Strategy */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#4DB2E0]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4DB2E0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbFileText className="text-[#4DB2E0] text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Content Strategy
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Create valuable content that attracts and converts
                        visitors
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local SEO */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#2D8BB5]/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2D8BB5]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbMapPin className="text-[#2D8BB5] text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Local SEO
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Dominate local search results and attract nearby
                        customers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Link Building */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-emerald-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbUsers className="text-emerald-500 text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Link Building
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Build authority with high-quality backlinks from trusted
                        sources
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytics & Reporting */}
                <div className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-purple-400/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TbChartBar className="text-purple-500 text-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <h4 className="text-sm font-bold text-zinc-900">
                          Analytics & Reporting
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 pl-6">
                        Track rankings, traffic, and conversions with
                        transparent reports
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section - Before/After */}
              <div className="mt-6 pt-6 mb-5 border-t border-zinc-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Before Card */}
                  <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TbEyeOff className="text-zinc-400 text-lg" />
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Before SEO
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <TbX className="text-red-400 text-sm" />
                        <span>Hidden on page 5+ of Google</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <TbX className="text-red-400 text-sm" />
                        <span>No organic traffic</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <TbX className="text-red-400 text-sm" />
                        <span>Zero leads from search</span>
                      </div>
                    </div>
                  </div>

                  {/* After Card */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TbRocket className="text-[#4DB2E0] text-lg" />
                      <span className="text-[10px] font-bold text-[#4DB2E0] uppercase tracking-wider">
                        After SEO
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-zinc-700">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <span>Ranking on page 1 of Google</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-700">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <span>Consistent organic traffic</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-700">
                        <TbCheck className="text-emerald-500 text-sm" />
                        <span>Qualified leads coming in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}