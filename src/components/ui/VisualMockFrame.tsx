"use client";

import React from "react";
import { GoGraph } from "react-icons/go";
import {
  TbBrowserCheck,
  TbTrendingUp,
  TbHeadset,
  TbBellRinging,
  TbArrowUpRight,
} from "react-icons/tb";

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
    title: "3-Month Free Warranty",
    description:
      "Post-handoff peace of mind. We stay on board to cover critical security patches, stability checks, and foundational performance optimizations at zero extra cost.",
    icon: TbBrowserCheck,
    type: "warranty",
    visualAriaLabel: "Interface preview detailing technical support and system monitoring metrics",
  },
  {
    id: "feat-2",
    title: "Premium Site Redesign",
    description:
      "Transform outdated architecture into an elite, high-converting digital experience. Rebuilt from scratch with an emphasis on gorgeous aesthetics and lightning-fast speed indices.",
    icon: TbTrendingUp,
    type: "redesign",
    visualAriaLabel: "Visual interface preview illustrating an old legacy layout versus a optimized modern web application mockup",
  },
  {
    id: "feat-3",
    title: "Long-Term Reliability",
    description:
      "Project handoff is just the beginning. Our dedicated support pipeline makes launching urgent promotional updates or workflow performance modifications entirely seamless.",
    icon: TbHeadset,
    type: "support",
    visualAriaLabel: "Real-time communication conversation card preview demonstrating swift agency response times",
  },
  {
    id: "feat-4",
    title: "Search Visibility Engine",
    description:
      "Dominate digital landscapes with advanced semantic optimization. Track core web vitals, index rankings, and monthly organic footprints effortlessly.",
    icon: TbBellRinging,
    type: "seo",
    visualAriaLabel: "SEO management interface mockup highlighting search traffic milestones and core web health scoring",
  },
];

// ============================================================================
// Visual Mock Components
// ============================================================================

const SupportPeriodMock: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-6 select-none bg-gradient-to-b from-zinc-50/50 to-zinc-100/30">
    {/* Background Floating Element */}
    <div className="absolute top-10 bg-white border border-zinc-200/50 shadow-sm rounded-xl p-3 w-48 opacity-40 -translate-x-12 scale-90">
      <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-zinc-300" aria-hidden="true" />
        Server Health Check
      </div>
    </div>

    {/* Main Active Support Card Container */}
    <div className="bg-white border border-zinc-200/60 shadow-xl shadow-zinc-950/5 rounded-2xl p-4 w-64 sm:w-72 relative z-10 transition-transform duration-500 group-hover:scale-[1.03] group-hover:border-zinc-300">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[9px] font-bold"
            aria-hidden="true"
          >
            ✓
          </div>
          <h5 className="text-xs font-black text-zinc-950 tracking-tight">Technical Warranty</h5>
        </div>
        <span className="text-[9px] font-extrabold bg-zinc-950 text-white px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
          3-Mo Free
        </span>
      </div>

      <p className="text-[10px] font-medium text-zinc-500 pl-6 leading-normal">
        Post-handoff peace of mind covering all bug fixes, security patches, and performance optimizations.
      </p>

      {/* Internal Active Status Banner */}
      <div className="mt-4 ml-6 flex items-center justify-between bg-emerald-50/60 border border-emerald-100 text-emerald-700 px-2.5 py-1.5 rounded-xl text-[9px] font-bold font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span>Priority Queue Active</span>
        </div>
        <span className="text-emerald-600/70">0ms Delay</span>
      </div>
    </div>

    {/* Secondary Background Floating Element */}
    <div className="absolute bottom-10 bg-white border border-zinc-200/50 shadow-xs rounded-xl p-3 w-44 opacity-40 translate-x-12 scale-95">
      <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
        System Monitored
      </div>
    </div>
  </div>
);

const RedesignMock: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-6 select-none bg-gradient-to-b from-zinc-50/50 to-zinc-100/30">
    {/* Background Card - Legacy Outline */}
    <div className="absolute bg-white border border-dashed border-zinc-300 w-60 h-36 rounded-2xl top-10 translate-x-[-16px] opacity-40 z-0 flex items-center justify-center">
      <div className="text-center space-y-1">
        <div className="w-12 h-2 bg-zinc-200 rounded-full mx-auto" />
        <div className="w-20 h-2 bg-zinc-200 rounded-full mx-auto" />
        <p className="text-[8px] font-mono tracking-widest uppercase text-zinc-400 mt-2">Old Legacy Site</p>
      </div>
    </div>

    {/* Foreground Card - Premium Experience */}
    <div className="bg-white border border-zinc-200/80 shadow-2xl shadow-zinc-950/5 rounded-2xl p-4 w-64 sm:w-72 relative z-10 transition-all duration-500 group-hover:scale-[1.03] group-hover:border-zinc-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 bg-indigo-50 border border-indigo-100 rounded-md flex items-center justify-center text-indigo-600 text-xs font-bold"
            aria-hidden="true"
          >
            ✨
          </div>
          <div>
            <h5 className="text-[10px] font-black text-zinc-950 leading-none">Visual Glow-Up</h5>
            <p className="text-[8px] text-zinc-400 mt-0.5 font-medium">Rebuilt from scratch</p>
          </div>
        </div>
        <span className="text-[8px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
          Live Now
        </span>
      </div>

      {/* Bento Transformation Grid */}
      <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
        {[
          { label: "Aesthetic", value: "Elite", unit: "Vibe", highlight: true },
          { label: "Conversions", value: "+42%", unit: "Rate", highlight: false },
          { label: "Speed Index", value: "99", unit: "/100", highlight: false },
        ].map((stat) => (
          <div key={stat.label} className="bg-zinc-50/80 border border-zinc-100 rounded-xl py-2 px-1">
            <p className="text-[7px] font-bold text-zinc-400 uppercase tracking-wide">{stat.label}</p>
            <p className={`text-[11px] font-black mt-0.5 tracking-tight ${stat.highlight ? 'text-indigo-600 font-extrabold' : 'text-zinc-950'}`}>
              {stat.value}
              <span className="text-[7px] text-zinc-400 font-normal tracking-normal">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[8px] text-zinc-400 font-medium font-mono">
        <span>Optimization Layer</span>
        <span className="text-emerald-500 font-bold">100% Core Web Vitals</span>
      </div>
    </div>
  </div>
);

const SupportMock: React.FC = () => (
  <div className="w-full h-full flex items-end justify-center relative pt-8 px-4 overflow-hidden select-none">
    <div className="w-56 sm:w-64 h-64 bg-white border border-zinc-200/80 rounded-t-[2.5rem] shadow-2xl shadow-zinc-950/5 p-4 relative transition-transform duration-500 group-hover:scale-[1.02]">
      <div className="w-20 h-4 bg-zinc-950 rounded-full mx-auto mb-4" aria-hidden="true" />
      
      <div className="flex items-center gap-2 mb-4 border-b border-zinc-100 pb-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
        <h4 className="text-xs font-black text-zinc-950">Post-Launch Support</h4>
      </div>

      <div className="space-y-3 max-h-[170px] overflow-hidden">
        <div className="flex flex-col items-start max-w-[85%]">
          <p className="text-[7px] font-bold text-zinc-400 mb-0.5 pl-1">Client (6 Months Post-Launch) • Just now</p>
          <div className="bg-zinc-100 rounded-2xl rounded-tl-xs px-2.5 py-1.5">
            <p className="text-[9px] font-medium text-zinc-800 leading-tight">
              Hey team! Our site has been running great, but we need to roll out a quick performance optimization update for today&apos;s campaign. Available?
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end max-w-[85%] ml-auto">
          <p className="text-[7px] font-bold text-zinc-400 mb-0.5 pr-1 text-right">Alex • Agency Lead</p>
          <div className="bg-zinc-950 text-white rounded-2xl rounded-tr-xs px-2.5 py-1.5 shadow-sm">
            <p className="text-[9px] font-medium leading-tight text-zinc-100">
              Always! Project handoff was just the beginning. We’ve got you covered. Let&apos;s push it live. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-16 right-4 bg-white border border-zinc-200/60 shadow-lg px-3 py-1.5 rounded-full flex items-center gap-2 z-20 transition-transform duration-500 group-hover:-translate-x-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-[9px] font-black tracking-wider uppercase text-zinc-950">
        24/7 Reliability
      </span>
    </div>
  </div>
);

const NotificationMock: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-6 select-none">
    <div className="bg-white border border-zinc-200/60 shadow-xl shadow-zinc-950/5 rounded-2xl p-4 w-64 sm:w-72 relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 bg-emerald-50 border border-emerald-100 rounded-md flex items-center justify-center text-emerald-600 text-xs font-bold"
            aria-hidden="true"
          >
            <GoGraph />
          </div>
          <div>
            <h5 className="text-[10px] font-black text-zinc-950 leading-none">Search Visibility</h5>
            <p className="text-[8px] text-zinc-400 mt-0.5">Organic Presence Milestone</p>
          </div>
        </div>
        <span className="text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
          +24%
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1 border-t border-zinc-100 pt-2.5 text-center">
        {[
          { label: "Traffic", value: "14.2k", total: "mo", highlight: false },
          { label: "SEO Health", value: "98", total: "100", highlight: true },
          { label: "Keywords", value: "#1", total: "Rank", highlight: false },
        ].map((stat) => (
          <div key={stat.label} className="bg-zinc-50 rounded-lg py-1.5 px-1">
            <p className="text-[7px] font-bold text-zinc-400 uppercase">{stat.label}</p>
            <p className={`text-[10px] font-black mt-0.5 ${stat.highlight ? 'text-emerald-600' : 'text-zinc-950'}`}>
              {stat.value}
              <span className="text-[7px] text-zinc-400 font-normal">/{stat.total}</span>
            </p>
          </div>
        ))}
      </div>
    </div>

    <div
      className="absolute bg-zinc-200/30 w-52 h-20 rounded-2xl bottom-8 scale-95 opacity-50 z-0 blur-[1px]"
      aria-hidden="true"
    />
  </div>
);

const VisualMockFrame: React.FC<{ featureType: FeatureType }> = ({ featureType }) => {
  switch (featureType) {
    case "warranty":
      return <SupportPeriodMock />;
    case "redesign":
      return <RedesignMock />;
    case "support":
      return <SupportMock />;
    case "seo":
      return <NotificationMock />;
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
      className="group bg-[#F4F3EE]/60 border border-zinc-200/40 rounded-[2.5rem] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-zinc-950/5 hover:bg-[#F4F3EE]/90 max-w-2xl mx-auto w-full"
      role="article"
      aria-label={`${feature.title} capability`}
    >
      <div
        className="w-full h-56 bg-gradient-to-b from-zinc-100/10 to-zinc-200/20 border-b border-zinc-200/30 relative overflow-hidden flex items-center justify-center"
        aria-label={feature.visualAriaLabel}
        role="img"
      >
        <VisualMockFrame featureType={feature.type} />
      </div>

      <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-white border border-zinc-200/60 shadow-2xs flex items-center justify-center text-zinc-900 shrink-0 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-300">
                <IconComponent className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black tracking-tight text-zinc-900 truncate">
                {feature.title}
              </h3>
            </div>
            <TbArrowUpRight
              className="w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:text-zinc-950 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 hidden sm:block"
              aria-hidden="true"
            />
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed tracking-wide font-normal">
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
      className="w-full py-24 px-6 md:px-12 font-sans antialiased selection:bg-zinc-950/10 border-t border-zinc-200/30"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2
            id="features-heading"
            className="text-3xl sm:text-5xl font-serif text-zinc-900 tracking-tight font-medium"
          >
            Engineered to scale your online presence
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed max-w-lg mx-auto">
            From seamless brand revamps to ongoing deployment maintenance frameworks, we build modern solutions that handle everything for your web application.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          role="list"
        >
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