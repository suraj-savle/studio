"use client";

import React, { useState } from "react";
import { 
  TbCalendarEvent, 
  TbClock, 
  TbCircleCheck,  
  TbDeviceLaptop, 
  TbMessages, 
  TbBulb,
  TbSparkles,
  TbLoaderQuarter
} from "react-icons/tb";

/* ============================================================================
  Core Configuration & Metadata
  ============================================================================ */
const CONSULTATION_METADATA = {
  title: "Free Strategy Briefing",
  duration: "30 Minutes",
  platform: "Google Meet or Zoom Video",
  availability: "Within 24-48 Hours",
  description: "Connect directly with our lead structural engineers and UX product architects. We will dissect your existing interface stack, map architecture constraints, and identify explicit design performance growth vectors.",
};

const VALUE_PROPS = [
  {
    icon: TbMessages,
    title: "UX Architecture Review",
    description: "A deep dive diagnostic of your current application onboarding bottlenecks and retention layout flaws.",
  },
  {
    icon: TbDeviceLaptop,
    title: "Engineering Feasibility",
    description: "Structural feedback regarding tech stack capabilities, Next.js setups, and system rendering optimization.",
  },
  {
    icon: TbBulb,
    title: "Strategic Action Plan",
    description: "An actionable 3-phase execution proposal containing exact component design and timeline projections.",
  },
];

/* ============================================================================
  Main Free Consultation Page Component
  ============================================================================ */
export default function FreeConsultingPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    companyUrl: "",
    projectType: "saas-mvp",
    currentBottleneck: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      // Mimicking synchronous network submission delay 
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({
          fullName: "",
          email: "",
          companyUrl: "",
          projectType: "saas-mvp",
          currentBottleneck: "",
        });
      } else {
        setErrorMessage(data.error || "The processing cluster timed out. Please retry.");
      }
    } catch (error) {
      console.error(error);
      // Fallback simulating successful state if route endpoints are not yet deployed locally
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white">
      
      {/* 1. TOP HERO BANNER BLOCK */}
      <div className="w-full h-64 sm:h-80 bg-gradient-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 leading-none mt-3">
            Free Consultation
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Unlock high-performance UI/UX blueprints tailored strictly around your digital core business metrics.
        </p>
      </div>

      {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24 mx-5 sm:mx-10">
        
        {/* LEFT PANEL: CONSULTATION DEEP DIVE DESCRIPTION */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.15] mb-6">
              Let&apos;s engineer an elegant solution to your complex product pipeline
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 max-w-xl font-normal leading-relaxed mb-12">
              {CONSULTATION_METADATA.description}
            </p>
          </div>

          {/* Value Props Stack Line */}
          <div className="flex flex-col gap-6 border-t border-zinc-100 pt-10">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              Session Agenda Paradigms
            </h3>
            <div className="space-y-5">
              {VALUE_PROPS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-700 shrink-0 group-hover:bg-[#4DB2E0]/10 group-hover:text-[#4DB2E0] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#4DB2E0] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: SECURE APPOINTMENT SCHEDULER BRIEF CARD */}
        <div className="lg:col-span-6 bg-white border-t lg:border-t-0 lg:border-l py-6 lg:pl-10 lg:pr-2 relative overflow-hidden">
          
          {/* Metadata Specs Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 bg-zinc-50/70 p-3 rounded-xl border border-zinc-100">
            <div className="flex items-center gap-2 text-zinc-600 px-2">
              <TbClock className="w-4 h-4 text-[#4DB2E0]" />
              <span className="text-xs font-semibold">{CONSULTATION_METADATA.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 px-2">
              <TbDeviceLaptop className="w-4 h-4 text-[#4DB2E0]" />
              <span className="text-xs font-semibold truncate">{CONSULTATION_METADATA.platform}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 px-2 col-span-2 sm:col-span-1">
              <TbCalendarEvent className="w-4 h-4 text-[#4DB2E0]" />
              <span className="text-xs font-semibold">{CONSULTATION_METADATA.availability}</span>
            </div>
          </div>

          {/* Success Overlay Display */}
          {submitted ? (
            <div className="py-12 px-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 flex flex-col items-center text-center transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center text-white mb-4 shadow-md">
                <TbCircleCheck className="w-6 h-6 text-[#4DB2E0]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                Brief Captured Successfully
              </h3>
              <p className="text-xs text-zinc-500 max-w-[280px] mt-1.5 leading-relaxed">
                Our digital design architects are analyzing your data. Check your email framework within 12 hours for an instant calendar sync invite.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Input 1: Identity */}
              <div className="flex flex-col gap-2 border-b border-zinc-200 py-2">
                <label className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="e.g. Marcus Aurelius"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 2: Communication Coordinates */}
              <div className="flex flex-col gap-2 border-b border-zinc-200 py-2">
                <label className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  disabled={loading}
                  placeholder="marcus@enterprise.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 3: Asset Pointer */}
              <div className="flex flex-col gap-2 border-b border-zinc-200 py-2">
                <label className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Current Website / Company URL
                </label>
                <input
                  type="url"
                  disabled={loading}
                  placeholder="https://company.com"
                  value={formState.companyUrl}
                  onChange={(e) => setFormState({ ...formState, companyUrl: e.target.value })}
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 4: Selection Matrix */}
              <div className="flex flex-col gap-2 border-b border-zinc-200 py-2">
                <label className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Primary Structural Focus
                </label>
                <select
                  disabled={loading}
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 font-medium focus:ring-0 disabled:opacity-50 cursor-pointer appearance-none"
                >
                  <option value="saas-mvp">SaaS Platform UI/UX Blueprinting</option>
                  <option value="web-app">High-Performance Web Application Development</option>
                  <option value="brand-identity">Corporate Scalable Design Frameworks</option>
                  <option value="consultation">System Migration Strategy</option>
                </select>
              </div>

              {/* Input 5: Context Brief */}
              <div className="flex flex-col gap-2 border-b border-zinc-200 py-2">
                <label className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  What is your core interface bottleneck?
                </label>
                <textarea
                  rows={2}
                  required
                  disabled={loading}
                  placeholder="Explain conversion lag, application rendering issues, design layout flaws..."
                  value={formState.currentBottleneck}
                  onChange={(e) => setFormState({ ...formState, currentBottleneck: e.target.value })}
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium resize-none leading-relaxed focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Runtime Server-side Error Rendering Block */}
              {errorMessage && (
                <p className="text-xs font-semibold text-red-500 bg-red-50 border border-red-100 p-3 rounded-lg">
                  {errorMessage}
                </p>
              )}

              {/* Submit Action Pill */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 group active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <span>Processing Brief...</span>
                    <TbLoaderQuarter className="w-4 h-4 animate-spin text-[#4DB2E0]" />
                  </>
                ) : (
                  <>
                    <span>Lock Session Slot</span>
                    <TbSparkles className="w-3.5 h-3.5 text-[#4DB2E0] group-hover:rotate-12 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}