"use client";

import React from "react";
import Link from "next/link";
import {
  TbArrowRight,
  TbShieldCheck,
  TbRefresh,
  TbScale,
} from "react-icons/tb";

/* ============================================================================
  Core Datasets (Synchronized with UpgradeUX Profile)
  ============================================================================ */

const COMPANY_INFO = {
  name: "UpgradeUX",
  legalName: "UpgradeUX Technologies",
  type: "Next-Gen Digital Product & UI/UX Agency",
  established: "2026",
  address: "Mumbai, Maharashtra, India",
  email: "support@upgradeux.in",
  phone: "+91 8369213418",
  website: "https://upgradeux.agency",
  supportHours: "10:00 AM – 6:00 PM (IST), Monday to Friday",
  description:
    "UpgradeUX is an elite digital engineering studio specializing in hyper-fluid UI/UX design architectures, high-performance full-stack web applications, and immersive frontend ecosystems.",

  grievanceOfficer: {
    title: "Data Protection & Grievance Officer",
    email: "support@upgradeux.in",
    turnaroundTime: "Within 7 business days",
  },
};

const POLICY_LINKS = [
  {
    title: "Refund Policy",
    description: "Review our project milestone cancellations, refund criteria timelines, and service terms.",
    link: "/refund-policy",
    icon: TbRefresh,
  },
  {
    title: "Privacy Policy",
    description: "Understand how your data is safely managed, encrypted, and structurally processed.",
    link: "/privacy-policy",
    icon: TbShieldCheck,
  },
  {
    title: "Terms of Service",
    description: "Read the governing structural conditions, development agreements, and legal layouts.",
    link: "/terms-service",
    icon: TbScale,
  },
];

/* ============================================================================
  Main Page Component
  ============================================================================ */

export default function HelpSupportPage() {
  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white">
      
      {/* 1. TOP HERO BANNER BLOCK */}
      <div className="w-full h-64 sm:h-80 bg-gradient-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 leading-none">
            Help Center
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Access immediate operational systems documentation or trigger direct integration support threads.
        </p>
      </div>

      {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24 mx-5 sm:mx-10">
        
        {/* LEFT PANEL: CONTENT STRIP & DIRECT TOUCHPOINTS */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.15] mb-6">
              We are always ready to help you and clear system bottlenecks
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 max-w-xl font-normal leading-relaxed mb-12">
              Have an operational infrastructure query, milestone dependency, or security parameter verification requirement? Review our legal frameworks or connect directly with the <strong>{COMPANY_INFO.name}</strong> desk.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: ACTION BRIEF & POLICY LINK REDIRECTS */}
        <div className="lg:col-span-6 flex flex-col gap-12 bg-white border-t lg:border-t-0 lg:border-l py-6 lg:pl-10 lg:pr-2 relative overflow-hidden">
          

          {/* Legal Frameworks & Redirect Links Segment */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-widest text-zinc-700">
              Legal Frameworks & Policies
            </h3>
            <div className="flex flex-col gap-3">
              {POLICY_LINKS.map((policy, idx) => {
                const Icon = policy.icon;
                return (
                  <Link
                    key={idx}
                    href={policy.link}
                    className="flex items-start gap-4 p-4 rounded-xl border border-zinc-300 hover:border-[#4DB2E0]/50 hover:bg-sky-50/10 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-600 group-hover:bg-[#4DB2E0]/10 group-hover:text-[#000000] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-zinc-800 transition-colors group-hover:text-[#000000]">
                          {policy.title}
                        </p>
                        <TbArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#000000] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                        {policy.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}