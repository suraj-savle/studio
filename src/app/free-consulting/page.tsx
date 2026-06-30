"use client";

import React, { useState } from "react";
import {
  TbCalendarEvent,
  TbClock,
  TbDeviceLaptop,
  TbMessages,
  TbBulb,
  TbSparkles,
  TbLoaderQuarter,
} from "react-icons/tb";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ============================================================================
  Core Configuration & Metadata
  ============================================================================ */
const CONSULTATION_METADATA = {
  title: "Free Strategy Briefing",
  duration: "30 Minutes",
  platform: "Google Meet or Zoom Video",
  availability: "Within 24-48 Hours",
  description:
    "Connect directly with our lead structural engineers and UX product architects. We will dissect your existing interface stack, map architecture constraints, and identify explicit design performance growth vectors.",
};

const VALUE_PROPS = [
  {
    icon: TbMessages,
    title: "UX Architecture Review",
    description:
      "A deep dive diagnostic of your current application onboarding bottlenecks and retention layout flaws.",
  },
  {
    icon: TbDeviceLaptop,
    title: "Engineering Feasibility",
    description:
      "Structural feedback regarding tech stack capabilities, Next.js setups, and system rendering optimization.",
  },
  {
    icon: TbBulb,
    title: "Strategic Action Plan",
    description:
      "An actionable 3-phase execution proposal containing exact component design and timeline projections.",
  },
];

/* ============================================================================
  Main Free Consultation Page Component
  ============================================================================ */
export default function FreeConsultingPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    Phone_number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
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
          Phone_number: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(
          data.error || "The processing cluster timed out. Please retry.",
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network interface timeout error. Please retry shortly.");
    } finally {
      loading && setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white">
      <div>
        {/* 1. TOP HERO BANNER BLOCK */}
        <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 md:mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 leading-none">
              free consultation
            </h1>
          </div>
          <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
            Unlock high-performance UI/UX blueprints tailored strictly around
            your digital core business metrics.
          </p>
        </div>

        {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24 mx-5 sm:mx-10">
          {/* LEFT PANEL: CONSULTATION DEEP DIVE DESCRIPTION */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.15] mb-6">
                Let&apos;s engineer an elegant solution to your complex product
                pipeline
              </h2>

              <p className="text-sm sm:text-base text-zinc-500 max-w-xl font-normal leading-relaxed mb-12">
                {CONSULTATION_METADATA.description}
              </p>
            </div>

            {/* Value Props Stack Line */}
            <div className="flex flex-col gap-6 border-t border-zinc-100 pt-10 mb-10">
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

            {/* Quick Contact & Social coordinates to match Contact Page left column depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 border-t border-zinc-100 pt-10">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Direct Line
                </span>
                <a
                  href="tel:+918369213418"
                  className="text-base font-bold text-zinc-900 hover:text-[#4DB2E0] transition-colors"
                >
                  +91 8369213418
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Social Network
                </span>
                <div className="flex items-center gap-4 mt-1 text-zinc-600">
                  <a
                    href="https://twitter.com/surajsavle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaXTwitter className="size-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/surajsavle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaLinkedinIn className="size-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/upgradeux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaInstagram className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: SECURE APPOINTMENT SCHEDULER BRIEF CARD */}
          <div className="lg:col-span-5 bg-white border-t lg:border-t-0 lg:border-l py-6 lg:pl-10 lg:pr-2 relative overflow-hidden group/card">

            {/* Success Overlay Display (Matches ContactPage Absolute Layout Pattern) */}
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center text-white mb-4 shadow-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  Brief Captured Successfully
                </h3>
                <p className="text-xs text-zinc-500 max-w-[240px] mt-1 leading-relaxed">
                  Our digital design architects are analyzing your data. Check
                  your email framework within 12 hours for an instant calendar
                  sync invite.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 relative z-10"
            >
              {/* Input 1: Identity */}
              <div className="flex flex-col gap-2 border-b border-zinc-700 py-2.5">
                <label className="text-sm font-bold uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="client name"
                  value={formState.fullName}
                  onChange={(e) =>
                    setFormState({ ...formState, fullName: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-400 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 2: Communication Coordinates */}
              <div className="flex flex-col gap-2 border-b border-zinc-700 py-2.5">
                <label className="text-sm font-bold text-zinc-700 uppercase">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  disabled={loading}
                  placeholder="client@upgradeux.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 3: Asset Pointer */}
              <div className="flex flex-col gap-2 border-b border-zinc-00 py-2.5">
                <label className="text-sm font-bold tracking-wider text-zinc-00 uppercase">
                  Whatsapp mobile number
                </label>
                <input
                  type="number"
                  disabled={loading}
                  placeholder="+91 8369213418"
                  value={formState.Phone_number}
                  onChange={(e) =>
                    setFormState({ ...formState, Phone_number: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-base text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0 disabled:opacity-50"
                />
              </div>

              {/* Input 5: Context Brief */}
              <div className="flex flex-col gap-2 border-b border-zinc-00 py-2.5">
                <label className="text-sm font-bold tracking-wider text-zinc-00 uppercase">
                  Any Specific message or context you want to share with our team?
                </label>
                <textarea
                  rows={3}
                  required
                  disabled={loading}
                  placeholder="Hii , I am looking for a free consultation regarding my product's UX architecture and would like to discuss potential improvements and strategies."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
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
                className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 group active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                <span>
                  {loading ? "Processing Brief..." : "send brief & schedule"}
                </span>
                {loading ? (
                  <TbLoaderQuarter className="w-4 h-4 animate-spin text-[#4DB2E0]" />
                ) : (
                  <TbSparkles className="w-3.5 h-3.5 text-[#4DB2E0] group-hover:rotate-12 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 3. EDGE-TO-EDGE MONOCHROME MAP CONTAINER */}
        <div className="w-full h-80 sm:h-105 overflow-hidden border border-zinc-200 relative shadow-inner bg-zinc-100 grayscale contrast-115 brightness-95 transition-all duration-700">
          <iframe
            title="UpgradeUX Navi Mumbai Location Map"
            src="https://maps.google.com/maps?q=Navi%20Mumbai&t=&z=13&ie=UTF-8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
