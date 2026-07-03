"use client";

import React from "react";
import { GoGraph } from "react-icons/go";
import {
  TbTrendingUp,
  TbHeadset,
  TbBellRinging,
} from "react-icons/tb";
import WalletCards from "./WalletCards";
import { MdOutlineSecurity } from "react-icons/md";
import { Sparkles, Zap, Layout } from "lucide-react";

// ============================================================================
// Types & Configuration
// ============================================================================

type FeatureType = "warranty" | "redesign" | "support" | "seo";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  type: FeatureType;
  visualAriaLabel: string;
}

const AGENCY_FEATURES: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Transparent Pricing & Project Protection",
    description:
      "Enjoy complete peace of mind with transparent pricing, secure payment milestones, and zero hidden charges. Every project is backed by quality assurance and Support That Doesn't End at Launch, ensuring your investment is protected from start to finish.",
    icon: MdOutlineSecurity,
    type: "warranty",
    visualAriaLabel:
      "Dashboard showing secure payment milestones, project protection, and warranty confirmation.",
  },
  {
    id: "feat-2",
    title: "Modern Design That Converts",
    description:
      "We transform outdated websites into fast, visually stunning digital experiences that build trust, strengthen your brand, and turn more visitors into customers across every device.",
    icon: TbTrendingUp,
    type: "redesign",
    visualAriaLabel:
      "Comparison between an outdated website and a modern, high-converting business website.",
  },
  {
    id: "feat-3",
    title: "Support Beyond Launch",
    description:
      "Launching your website is only the beginning. Whether you need updates, improvements, bug fixes, or expert guidance, we're always here to keep your website performing at its best.",
    icon: TbHeadset,
    type: "support",
    visualAriaLabel:
      "Conversation interface demonstrating responsive Support That Doesn't End at Launch and ongoing website maintenance.",
  },
  {
    id: "feat-4",
    title: "SEO & Performance Optimized",
    description:
      "Every website is built for speed, search engine visibility, and exceptional user experience. From Core Web Vitals to technical SEO, we help your business reach more customers online.",
    icon: TbBellRinging,
    type: "seo",
    visualAriaLabel:
      "Analytics dashboard displaying website performance, SEO health, and search visibility improvements.",
  },
];

const SupportPeriodMock: React.FC = () => (
  <div className="w-full h-full relative top-5 select-none flex items-center justify-center">
    <WalletCards />
  </div>
);

const RedesignMock: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative top-10 p-6 select-none bg-linear-to-b from-zinc-50/40 to-zinc-100/10">
    {/* Ambient Glow Effects */}
    <div
      className="absolute bg-[#4DB2E0] rounded-full w-44 h-44 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      aria-hidden="true"
    />

    {/* Foreground Card - Elite Modern UI Experience */}
    <div className="bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xl shadow-zinc-950/5 rounded-2xl p-3.5 w-66 sm:w-100 relative z-10 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-[#4DB2E0]/5 group-hover:border-zinc-300">
      {/* Dynamic Header Component */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 bg-sky-50 border border-sky-100 rounded-md flex items-center justify-center text-[#4DB2E0] transition-all duration-300 group-hover:bg-[#4DB2E0] group-hover:text-white group-hover:border-[#4DB2E0]"
            aria-hidden="true"
          >
            <Sparkles className="w-2.5 h-2.5 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div>
            <h5 className="text-[10px] font-black text-zinc-950 leading-none tracking-tight">
              Visual Glow-Up
            </h5>
            <p className="text-[7px] font-medium text-zinc-400 mt-0.5">
              Rebuilt from scratch
            </p>
          </div>
        </div>
        <span className="text-[7px] font-bold bg-sky-50 text-[#4DB2E0] border border-sky-100 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono shadow-2xs">
          Live Now
        </span>
      </div>

      {/* Simulated Premium Browser Mockup Window */}
      <div className="w-full bg-zinc-50/80 rounded-xl p-2.5 border border-zinc-100/80 mb-3 group-hover:bg-white transition-colors duration-500">
        {/* Browser Top Window Ribbon Chrome */}
        <div
          className="flex items-center justify-between border-b border-zinc-200/40 pb-1.5 mb-2.5"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-red-400/80" />
            <div className="w-1 h-1 rounded-full bg-amber-400/80" />
            <div className="w-1 h-1 rounded-full bg-emerald-400/80" />
          </div>
          <div className="w-32 h-2 bg-zinc-200/50 rounded-sm text-[4.5px] text-zinc-400 flex items-center justify-center font-mono scale-90">
            premium-experience.io
          </div>
          <div className="w-3 h-1" />
        </div>

        {/* Mock Application Interface Hero Elements */}
        <div className="space-y-2 py-0.5">
          <div className="w-8/12 h-2.5 bg-gradient-to-r from-[#4DB2E0] to-sky-300 rounded-xs" />

          {/* Detailed Features Inside Canvas Window */}
          <div className="grid grid-cols-1 gap-1 pt-0.5">
            {[
              {
                text: "Responsive Design",
                label: "All Devices",
                color:
                  "text-emerald-600 bg-emerald-50/70 border-emerald-100/50",
                icon: <Layout  className="w-2 h-2 text-emerald-500 shrink-0" />,
              },
              {
                text: "Performance Optimized",
                label: "90+ Score",
                color: "text-sky-600 bg-sky-50/70 border-sky-100/50",
                icon: <Zap  className="w-2 h-2 text-sky-500 shrink-0" />,
              },
              {
                text: "Easy to Manage",
                label: "CMS",
                color: "text-indigo-600 bg-indigo-50/70 border-indigo-100/50",
                icon: (
                  <Sparkles  className="w-2 h-2 text-indigo-500 shrink-0" />
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between gap-1.5 border rounded-md p-1 text-[6.5px] font-medium ${item.color}`}
              >
                <div className="flex items-center gap-1 min-w-0">
                  {item.icon}
                  <span className="truncate tracking-tight">{item.text}</span>
                </div>
                <span className="font-mono font-bold scale-90 px-1 py-0.2 bg-white/80 rounded-sm shadow-2xs whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Performance Metric Matrix Grid */}
      <div className="grid grid-cols-3 gap-1 pt-0.5 text-center">
        {[
          { label: "Responsive", value: "100%", unit: "Vibe", highlight: true },
          {
            label: "Performance",
            value: "90+",
            unit: "Rate",
            highlight: false,
          },
          { label: "SEO", value: "Ready", unit: "/100", highlight: false },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-50/60 border border-zinc-100 rounded-xl py-2 px-1 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xs group-hover:border-zinc-200/60"
          >
            <p className="text-[7px] font-bold text-zinc-400 uppercase tracking-wide">
              {stat.label}
            </p>
            <p
              className={`text-[10px] font-black mt-0.5 tracking-tight ${stat.highlight ? "text-[#4DB2E0]" : "text-zinc-950"}`}
            >
              {stat.value}
              <span className="text-[6px] text-zinc-400 font-normal tracking-normal ml-0.5">
                {stat.unit}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Footer Optimization Details Container */}
      <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between text-[7px] text-zinc-400 font-medium font-mono">
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-[#4DB2E0] animate-pulse" />
          Modern Tech Stack
        </span>
        <span className="text-[#4DB2E0] font-bold">100% SEO Ready</span>
      </div>
    </div>
  </div>
);

const SupportMock: React.FC = () => (
  <div className="w-full h-full flex items-end justify-center relative pt-8 px-4 overflow-hidden select-none">
    <div className="w-56 sm:w-64 h-64 bg-white border-t-4 border-x-4 border-zinc-900 rounded-t-2xl shadow-xl shadow-zinc-200 p-2 relative top-12 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
      {/* Phone Operating System Top Bar Module */}
      <div
        className="absolute top-0 left-0 w-full h-5 bg-zinc-950 flex items-center justify-between px-3 text-white text-[8px] font-medium font-sans select-none z-50"
        aria-hidden="true"
      >
        <div className="flex items-center tracking-tight">9:41</div>
        <div className="w-12 h-3 bg-black/40 rounded-full blur-xs hidden sm:block opacity-30" />
        <div className="flex items-center gap-1 opacity-90">
          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 22h20V2z" opacity="0.3" />
            <path d="M17 7L2 22h15z" />
          </svg>
          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21l-12-14.3c.3-.2 5.5-4.7 12-4.7s11.7 4.5 12 4.7l-12 14.3z" />
          </svg>
          <div className="w-3 h-1.5 border border-white/70 rounded-[2px] p-[0.5px] flex items-center relative">
            <div className="w-[85%] h-full bg-emerald-400 rounded-2xs" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 pt-8">
        <div
          className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
          aria-hidden="true"
        />
        <h4 className="text-[10px] font-black text-zinc-950">
          Dedicated Client Support
        </h4>
      </div>

      <div className="space-y-3 max-h-[170px] overflow-hidden">
        <div className="flex flex-col items-start max-w-[85%]">
          <p className="text-[7px] font-bold text-zinc-400 mb-0.5 pl-1">
            Sarah • Business Owner • 2 min ago
          </p>

          <div className="bg-zinc-100 rounded-2xl rounded-tl-2xs px-2.5 py-1.5">
            <p className="text-[9px] font-medium text-zinc-800 leading-tight">
              Hi! We&apos;re launching a new campaign tomorrow. Could you update
              our homepage banner and add a new offer today?
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end max-w-[85%] ml-auto">
          <p className="text-[7px] font-bold text-zinc-400 mb-0.5 pr-1 text-right">
            UpgradeUX • Support Team
          </p>

          <div className="bg-zinc-950 text-white rounded-2xl rounded-tr-2xs px-2.5 py-1.5 shadow-xs">
            <p className="text-[9px] font-medium leading-tight text-zinc-100">
              Absolutely! We&apos;ve already started the update and it will be
              live within the next hour. We&apos;ll notify you as soon as
              it&apos;s ready.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-xs border border-zinc-200/60 shadow-md px-3 py-1.5 rounded-full flex items-center gap-2 z-20 transition-transform duration-500 group-hover:-translate-x-1">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      <span className="text-[8px] font-bold tracking-wider uppercase text-zinc-950">
        Always Here to Help
      </span>
    </div>
  </div>
);

const SeoMock: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-6 select-none bg-gradient-to-b from-zinc-50/40 to-zinc-100/10">
    {/* Animated Background Layer 1: Ambient Shadow Glow Up */}
    <div
      className="absolute bg-emerald-500/5 rounded-full w-40 h-40 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      aria-hidden="true"
    />

    {/* Animated Background Layer 2: Core Web Vital Speed Sheet Slide */}
    <div
      className="absolute bg-white border border-zinc-200/50 w-56 h-24 rounded-2xl top-12 -translate-x-3 opacity-30 z-0 flex items-start justify-between p-3 transition-all duration-500 group-hover:opacity-10 group-hover:translate-y-2"
      aria-hidden="true"
    >
      <div className="space-y-1">
        <div className="w-10 h-1.5 bg-zinc-200 rounded-full" />
        <div className="w-16 h-1.5 bg-zinc-100 rounded-full" />
      </div>
      <div className="w-4 h-4 rounded-full border border-dashed border-zinc-200" />
    </div>

    {/* Foreground Card: Main Search Metrics Console */}
    <div className="bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xl shadow-zinc-950/5 rounded-2xl p-4 w-64 sm:w-72 relative z-10 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-emerald-500/5 group-hover:border-zinc-300">
      {/* Header Profile Module */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 bg-emerald-50 border border-emerald-100 rounded-md flex items-center justify-center text-emerald-600 text-xs font-bold shadow-2xs transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500"
            aria-hidden="true"
          >
            <GoGraph className="w-2.5 h-2.5 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div>
            <h5 className="text-[10px] font-black text-zinc-950 leading-none tracking-tight">
              Search Visibility
            </h5>
            <p className="text-[7px] font-medium text-zinc-400 mt-0.5">
              Organic Footprint Engine
            </p>
          </div>
        </div>
        <span className="text-[8px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full font-mono tracking-tighter shadow-2xs animate-pulse">
          +24.8%
        </span>
      </div>

      {/* Embedded Sparkline Graphic */}
      <div className="h-9 w-full mb-3 flex items-end justify-between px-1 bg-zinc-50/50 rounded-lg border border-zinc-100/80 pt-2 relative overflow-hidden group-hover:bg-white transition-colors duration-500">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="seoSparklineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Shaded Area Layer */}
          <path
            d="M 0 20 L 0 16 Q 15 8, 25 12 T 50 4 T 75 9 T 100 2 L 100 20 Z"
            fill="url(#seoSparklineGrad)"
            className="transition-all duration-500"
          />
          {/* Main Vector Stroke Stroke */}
          <path
            d="M 0 16 Q 15 8, 25 12 T 50 4 T 75 9 T 100 2"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="transition-all duration-500 [stroke-dasharray:100] [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0]"
          />
        </svg>
        {/* Absolute Scanning Anchor Tag */}
        <div className="absolute right-1 top-1 flex items-center gap-0.5 text-[6px] font-bold text-emerald-600 bg-emerald-50/80 border border-emerald-100 px-1 rounded-sm scale-90">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
          Live
        </div>
      </div>

      {/* Bento Meta Grid Matrix */}
      <div className="grid grid-cols-3 gap-1 border-t border-zinc-100/80 pt-2.5 text-center">
        {[
          { label: "Traffic", value: "14.2k", total: "mo", highlight: false },
          { label: "SEO Health", value: "98", total: "100", highlight: true },
          { label: "Keywords", value: "#1", total: "Rank", highlight: false },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-50/60 border border-zinc-100/40 rounded-xl py-1.5 px-1 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xs group-hover:border-zinc-200/60"
          >
            <p className="text-[7px] font-bold text-zinc-400 uppercase tracking-wide">
              {stat.label}
            </p>
            <p
              className={`text-[10px] font-black mt-0.5 tracking-tight ${stat.highlight ? "text-emerald-600" : "text-zinc-950"}`}
            >
              {stat.value}
              <span className="text-[6px] text-zinc-400 font-normal ml-0.5 tracking-normal">
                /{stat.total}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Footer Audit Context Layer */}
      <div className="mt-2.5 pt-2 border-t border-zinc-100/60 flex items-center justify-between text-[6.5px] text-zinc-400 font-medium font-mono">
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-emerald-500 transition-colors" />
          Index updated 2m ago
        </span>
        <span className="text-zinc-500 group-hover:text-zinc-950 transition-colors font-sans font-bold">
          Google Core Verified
        </span>
      </div>
    </div>

    {/* Stack Backdrop Card Layer */}
    <div
      className="absolute bg-zinc-200/10 border border-zinc-200/10 w-52 h-20 rounded-2xl bottom-8 scale-95 opacity-40 z-0 blur-[1px] transition-all duration-500 group-hover:translate-y-2 group-hover:scale-90 group-hover:opacity-20"
      aria-hidden="true"
    />
  </div>
);

const VisualMockFrame: React.FC<{ featureType: FeatureType }> = ({
  featureType,
}) => {
  switch (featureType) {
    case "warranty":
      return <SupportPeriodMock />;
    case "redesign":
      return <RedesignMock />;
    case "support":
      return <SupportMock />;
    case "seo":
      return <SeoMock />;
    default:
      return null;
  }
};

// ============================================================================
// Feature Card Component
// ============================================================================

const FeatureCard: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div
      className="group bg-gradient-to-b from-white to-zinc-50/50 border border-zinc-200/70 rounded-2xl flex flex-col overflow-hidden transition-all duration-500 max-w-[450px] mx-auto shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300/80"
      role="article"
      aria-label={`${feature.title} capability`}
    >
      <div
        className="w-full h-56 relative overflow-hidden flex items-center justify-center bg-zinc-50/30 border-b border-zinc-100"
        aria-label={feature.visualAriaLabel}
        role="img"
      >
        <VisualMockFrame featureType={feature.type} />
      </div>

      <div className="p-8 sm:p-10 flex flex-col items-center justify-between flex-1">
        <div className="space-y-3.5 w-full">
          <div className="flex justify-center items-center gap-3">
            {/* Animated Micro-Interaction Icon Base Wrapper */}
            <div className="w-9 h-9 rounded-xl border border-zinc-200 shadow-2xs flex items-center justify-center text-white shrink-0 transition-all duration-500 bg-zinc-950 relative group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/20 overflow-hidden">
              <IconComponent
                className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h3 className="text-center text-base font-bold text-zinc-900 tracking-tight">
              {feature.title}
            </h3>
          </div>

          <p className="text-center text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal px-2">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export default function AgencyFeatures() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 antialiased border-t border-zinc-100"
      aria-labelledby="features-heading"
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl text-zinc-700 font-medium max-w-xl leading-[1.1]"
          >
            Why Businesses Choose UpgradeUX
          </h2>
          <p className="text-xs text-zinc-500 max-w-sm leading-relaxed font-medium">
            We don&apos;t just build beautiful websites—we create fast,
            conversion-focused digital experiences backed by transparent
            communication, modern technology, and long-term support. Every
            project is designed to help your business stand out, earn trust, and
            grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
          {AGENCY_FEATURES.map((feature) => (
            <div key={feature.id} role="listitem">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
