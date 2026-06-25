"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbArrowUpRight,
  TbTerminal,
  TbCode,
  TbDeviceLaptop,
  TbRocket,
  TbCheck,
  TbDeviceMobile,
  TbSearch,
  TbClick,
  TbForms,
  TbPlus,
  TbAccessible,
  TbShieldCheck,
} from "react-icons/tb";

{/* ============================================================================
    Core Datasets
    ============================================================================ */}

const APPROACH_CHECKLIST = [
  "Built from scratch — no templates, no shortcuts, no hidden limitations.",
  "Free homepage mockup delivered before any payment or commitment.",
  "Dedicated project manager assigned as your single point of contact.",
  "1 full year of free post-launch technical support included standard.",
  "SEO optimization baked into core markup (Meta tags, Core Web Vitals).",
  "Fully responsive architecture tested meticulously across all device arrays.",
];

const ADVANTAGES = [
  { icon: TbRocket, title: "Faster Page Loading", desc: "Optimised code removes unnecessary resources and heavy dependencies, keeping visitors engaged without delays." },
  { icon: TbDeviceMobile, title: "Consistent on All Devices", desc: "Your website maintains proper layout, spacing, and readability across mobile, tablet, and desktop viewports." },
  { icon: TbSearch, title: "Better SEO Performance", desc: "Structured HTML markup helps search engines interpret your content accurately, improving page indexing rankings." },
  { icon: TbClick, title: "Smooth User Interaction", desc: "Buttons, menus, and forms operate reliably without plugin conflicts, reducing critical interaction errors." },
  { icon: TbForms, title: "Genuine Customer Enquiries", desc: "Validated forms minimise irrelevant submissions and capture genuine leads, letting you focus on real buyers." },
  { icon: TbPlus, title: "Flexible Future Expansion", desc: "New sections, pages, or features can be added anytime without rebuilding the entire website infrastructure." },
  { icon: TbAccessible, title: "Improved Accessibility", desc: "Clean semantic coding enhances usability for assistive technologies and improves accessibility for a wider range of users." },
  { icon: TbCode, title: "No Unnecessary Code Bloat", desc: "Only the features your business actually needs are built in, keeping the codebase lightweight and easy to maintain." },
];

{/* ============================================================================
    Component Layout Screen
    ============================================================================ */}

export default function CustomWebsitePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/50 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Dynamic Grid Background Overlay */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 uppercase leading-none">
              Custom Website Design
            </h1>
          </div>
          <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
            Explore our complete systematic workflow menu built explicitly on
            performant code ecosystems.
          </p>
        </div>


      {/* Hero Section & Value Prop */}
      <header className="relative pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto bg-white border-b border-zinc-200/60 rounded-b-[2.5rem] shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 uppercase leading-[1.05]">
              Built for Your Business. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-[#285f77] to-[#00aeff]">No Templates.</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 max-w-xl leading-relaxed">
              We design and develop fully custom websites using clean HTML5, CSS3, Bootstrap, and modern web standards. No templates, no CMS software limitations—only optimized code built specifically around your brand metrics.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={() => scrollToSection("quote-form")} className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center gap-2 group">
                <span>Get Free Quote</span>
                <TbArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-sm transition-all flex items-center gap-2">
                <FaWhatsapp className="size-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Our Approach Strategy */}
      <section id="approach" className="max-w-7xl mx-auto px-6 sm:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4DB2E0]">{`// BUSINESS STRATEGY MATRICES`}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight leading-tight">Designed Around Business Goals</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              A custom website layout strategy is engineered around your services, target demographic parameters, and specific conversion indicators. From credibility content modules to strict call-to-action fields, everything serves an explicit business purpose.
            </p>
          </div>
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-[2rem] p-6 sm:p-8 grid grid-cols-1 gap-2 shadow-2xs">
            {APPROACH_CHECKLIST.map((item, i) => (
              <div key={i} className="flex items-start gap-3.5 p-3 hover:bg-zinc-50 rounded-xl transition-all">
                <div className="p-1 rounded-md bg-[#4DB2E0]/10 text-[#4DB2E0] mt-0.5 flex-shrink-0">
                  <TbCheck className="size-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Go Custom Architecture Benefits */}
      <section id="why-custom" className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4DB2E0]">{`// ARCHITECTURAL BENEFITS`}</span>
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Advantages of Custom Coding</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, i) => {
              const AdvIcon = adv.icon;
              return (
                <div key={i} className="p-6 bg-white border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="p-2.5 bg-zinc-50 border border-zinc-100 rounded-xl w-fit text-zinc-800 shadow-3xs group-hover:bg-[#4DB2E0]/10 group-hover:text-[#4DB2E0] transition-colors duration-300">
                      <AdvIcon className="size-4.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 uppercase">{adv.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-2 mt-2 border-t border-zinc-100/60">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Intelligence Table */}
      <section id="matrix" className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-8 bg-white border border-zinc-200/60 rounded-[2rem] p-6 sm:p-10 shadow-3xs overflow-hidden">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4DB2E0]">{`// RIGOROUS BENCHMARKS`}</span>
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Custom Architecture vs Platforms</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-400 font-mono text-[10px] uppercase tracking-widest bg-zinc-50/50">
                  <th className="py-4 px-4 font-bold">Feature Matrix Parameters</th>
                  <th className="py-4 px-4 font-bold text-zinc-900 bg-zinc-100/60 rounded-t-lg">Custom Web Stack</th>
                  <th className="py-4 px-4 font-bold">WordPress Engine</th>
                  <th className="py-4 px-4 font-bold">Standard Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-medium text-zinc-700">
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">Page Load Speed</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ Fastest — Lean Hand-Coded</td>
                  <td className="py-4 px-4 text-zinc-500">~ Moderate — Plugin Dependent</td>
                  <td className="py-4 px-4 text-zinc-400">✗ Often Slow — Heavy Scripts</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">Design Uniqueness</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ 100% Unique Design Frameworks</td>
                  <td className="py-4 px-4 text-zinc-500">~ Customizable Layout Themes</td>
                  <td className="py-4 px-4 text-zinc-400">✗ Duplicated Global Form Templates</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">Core Security Isolation</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ High — No External Plugin Vulnerability</td>
                  <td className="py-4 px-4 text-zinc-500">~ Patch Dependent Core System</td>
                  <td className="py-4 px-4 text-zinc-500">~ Central Platform Dependent</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">Long-Term Stability</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ No Forced Version Level Breaks</td>
                  <td className="py-4 px-4 text-zinc-500">~ Regular Ecosystem Maintenances</td>
                  <td className="py-4 px-4 text-zinc-400">✗ Locked Subscription Controls</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">Full Code Ownership</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ 100% Full Ownership File Trees</td>
                  <td className="py-4 px-4 text-[#285f77]">✓ 100% Full Ownership File Trees</td>
                  <td className="py-4 px-4 text-zinc-400">✗ Database Sandbox Platform Bound</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-zinc-900">SEO Capabilities</td>
                  <td className="py-4 px-4 text-[#285f77] font-bold bg-zinc-50/60">✓ Clean Structural Index Performance</td>
                  <td className="py-4 px-4 text-zinc-500">~ Extensible via Plugin Extensions</td>
                  <td className="py-4 px-4 text-zinc-400">✗ Heavy Restricted Metadata Scripting</td>
                </tr>
                <tr className="bg-zinc-50/30">
                  <td className="py-4 px-4 font-black text-zinc-950">Recommended Target For</td>
                  <td className="py-4 px-4 font-black text-[#285f77] bg-zinc-100/40 rounded-b-lg">Performance, Uniqueness & Scale</td>
                  <td className="py-4 px-4 text-zinc-600">Content Portals, Easy Self-Edits</td>
                  <td className="py-4 px-4 text-zinc-400">Minimal Budgets, Personal Layouts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}