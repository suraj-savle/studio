"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbArrowUpRight,
  TbTrendingUp,
  TbUserCheck,
  TbBolt,
  TbShieldLock,
  TbFingerprint,
  TbLayoutDashboard,
  TbAlertCircle,
  TbCheck,
  TbX,
  TbCircleCheck,
  TbClock,
  TbDeviceMobile,
  TbEye,
  TbFileText,
  TbChartBar,
  TbLink,
  TbServer,
  TbRefresh,
  TbSearch,
  TbMap,
  TbCode,
  TbSettings,
  TbShield,
} from "react-icons/tb";

/* ============================================================================
  Strategic Redesign Core Datasets
  ============================================================================ */

const REDESIGN_PHASES = [
  "Website audit to identify design, speed, and usability issues.",
  "Protect existing SEO rankings and important content.",
  "Create a modern custom design tailored to your brand.",
  "Develop a fast, responsive website using modern technologies.",
  "Test across desktop, tablet, and mobile devices.",
  "Launch smoothly with post-launch support included.",
];

const METRIC_BENEFITS = [
  {
    icon: TbTrendingUp,
    title: "Increase Conversions",
    desc: "Convert more visitors into customers with a website designed around your business goals and user experience.",
  },
  {
    icon: TbBolt,
    title: "Fast Loading Speeds",
    desc: "Deliver a smooth browsing experience that keeps visitors engaged and improves your search engine rankings.",
  },
  {
    icon: TbUserCheck,
    title: "Professional First Impression",
    desc: "Build confidence from the first click with a modern, polished website that reflects the quality of your business.",
  },
  {
    icon: TbFingerprint,
    title: "Designed for Your Brand",
    desc: "Every page is custom-designed to match your identity, helping your business stand out from the competition.",
  },
  {
    icon: TbShieldLock,
    title: "Secure & Future-Ready",
    desc: "Built using modern technologies to provide better security, reliability, and long-term performance.",
  },
  {
    icon: TbLayoutDashboard,
    title: "Built to Scale",
    desc: "As your business grows, your website can easily expand with new services, pages, and functionality.",
  },
];

const AUDIT_SIGNS = [
  "Your pages take more than 3 seconds to load on a mobile network.",
  "Visitors bounce quickly or do not scroll past your first section.",
  "Your design feels cramped, inconsistent, or hard to read on mobile.",
  "Your service pages are generic and do not answer real buyer questions.",
  "You made a server or site change and your rankings dropped.",
  "Your contact form is unreliable or you have no conversion tracking.",
  "Your competitors look more credible, clearer, and more modern.",
  "Your website was last updated more than 3 years ago.",
];

const REDESIGN_MEANING = [
  {
    title: 'What "Redesign" Actually Means',
    description:
      "A real redesign improves how the website works as a system — how information is organised, how pages interconnect, how fast the site loads, how clearly you communicate value, and how reliably search engines can crawl and understand your content.",
    icon: TbRefresh,
  },
  {
    title: "What We Aim to Improve",
    description:
      "We improve clarity (value understood in seconds), trust (proof and transparency), speed (lighter pages with better Core Web Vitals), mobile UX (readability and easy navigation), SEO structure (headings, internal links, schema), and conversions (better CTAs and smoother enquiry forms).",
    icon: TbTrendingUp,
  },
  {
    title: "What We Deliberately Avoid",
    description:
      "We avoid design-only changes that ignore performance and SEO. We also avoid risky launches that break existing URLs, remove high-ranking content, or accidentally block search engine crawling. Your redesign should strengthen your rankings, not reset them.",
    icon: TbX,
  },
];

const WHY_MUMBAI = [
  "Over 78% of Mumbai web traffic now comes from mobile devices — slow or non-mobile-friendly sites lose these visitors immediately.",
  "Google increasingly rewards pages that answer real buyer questions — not just pages that repeat a keyword. Your service pages need to explain what you do, who it is for, what problems you solve, and how to get started.",
  "A website older than 3 years is typically missing key technical SEO elements, Core Web Vitals compliance, and modern trust signals that customers expect in 2025.",
  "Redesign, when done strategically, does not just refresh the appearance — it produces compounding gains in traffic, enquiries, and conversions over time.",
];

const DELIVERABLES = [
  {
    title: "Audit Summary + Prioritised Roadmap",
    description:
      "A clear list of issues affecting speed, SEO, content quality, and conversions — prioritised by impact. Prevents random changes and focuses effort where it genuinely matters most.",
    icon: TbFileText,
  },
  {
    title: "Wireframes for All Key Pages",
    description:
      "Wireframes define section order, CTAs, proof blocks, and FAQ placement before visual design begins. They reduce rework and ensure every design decision serves your business goals.",
    icon: TbLayoutDashboard,
  },
  {
    title: "SEO-Safe Launch Checklist",
    description:
      "Full redirect mapping (301s), canonical checks, robots.txt validation, sitemap submission, and post-launch monitoring steps — so you do not lose any ranking signals during the transition.",
    icon: TbSearch,
  },
  {
    title: "Post-Launch Monitoring + 1 Year Support",
    description:
      "We monitor Search Console for crawl errors, check Core Web Vitals, and track rankings in the weeks after launch. Plus 12 months of free post-launch technical support on every project.",
    icon: TbShield,
  },
];

const SEO_SAFEGUARDS = [
  {
    issue: "Important page URLs change without 301 redirects being set up",
    safeguard: "Page-by-page URL mapping and full 301 redirect setup",
  },
  {
    issue: "High-performing ranking content is removed rather than improved",
    safeguard: "Metadata and heading structure review for all pages",
  },
  {
    issue: "robots.txt or noindex is accidentally applied to key pages",
    safeguard: "Internal link audit and navigation cleanup",
  },
  {
    issue: "Canonical tags are set to the wrong URL across the new site",
    safeguard: "Structured data validation (Service, FAQ, Organisation schema)",
  },
  {
    issue: "Redirect chains waste crawl budget and dilute link equity",
    safeguard: "XML sitemap refresh and Google Search Console resubmission",
  },
  {
    issue: "Server instability causes intermittent crawl errors post-launch",
    safeguard: "Post-launch monitoring for crawl errors and impression data",
  },
  {
    issue: "Google Analytics and Search Console are not reconnected",
    safeguard: "Analytics and conversion tracking verified before go-live",
  },
];

/* ============================================================================
  Component Render Layer
  ============================================================================ */

export default function PremiumRedesignPage() {
  // Initialize state as empty array (JavaScript syntax)
  const [selectedSigns, setSelectedSigns] = useState([]);

  const toggleSign = (index) => {
    setSelectedSigns((prev) => {
      // Safety check: if prev is undefined or null, return [index]
      if (!prev || !Array.isArray(prev)) {
        return [index];
      }
      return prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
    });
  };

  const isSignSelected = (index) => {
    return Array.isArray(selectedSigns) && selectedSigns.includes(index);
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/70 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Editorial Header Section */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none">
            Redesign Website
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          We redesign outdated websites into fast, modern experiences that help
          you stand out and convert more visitors.
        </p>
      </div>

      {/* Core Transformation Breakdown */}
      <main className="px-6 sm:px-12 space-y-32">
        {/* Split Screen Concept Audit */}
        <section className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-700 leading-tight tracking-tight">
              Is Your Website Holding Your Business Back?
            </h2>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
              <p>
                An outdated website can make even a great business look
                unprofessional. Slow loading speeds, confusing navigation, poor
                mobile experiences, and outdated designs often cause visitors to
                leave before taking action.
              </p>
              <p className="text-sm text-zinc-500">
                Our redesign process improves every part of your website—from
                design and performance to SEO and user experience—creating a
                modern digital presence that builds trust and generates more
                enquiries.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://cal.com/suraj-savle-tua3qw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 shadow-sm"
              >
                Schedule a Free Consultation
                <TbArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://wa.me/8369213418"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20ba59] shadow-sm"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            <div className="relative">
              <Image
                src="/website-redesign.png"
                alt="Premium interface comparison mockup"
                width={580}
                height={500}
                priority
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            QUICK AUDIT SECTION
            ============================================================ */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-700 tracking-tight">
              Signs Your Website Is Costing You Leads Right Now
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              If two or more of these are true for your website, it is likely
              losing you enquiries every single day. A strategic redesign fixes
              the root causes — not just the visuals.
            </p>
          </div>

          {/* Audit Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {AUDIT_SIGNS.map((sign, index) => (
              <div
                key={index}
                onClick={() => toggleSign(index)}
                className={`
                  flex items-start gap-3 px-4 py-4 border cursor-pointer transition-all duration-300
                 
                `}
              >
                <div className="shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#000000] flex items-center justify-center">
                    <TbCheck className="size-3 text-white" />
                  </div>
                </div>
                <p
                  className={`
                    text-sm leading-relaxed
                    
                  `}
                >
                  {sign}
                </p>
              </div>
            ))}
          </div>

          {/* Audit CTA */}
          <div className="text-center pt-4 max-w-2xl mx-auto">
            <p className="text-sm text-zinc-500 mb-4">
              Not sure if your website needs a redesign? We offer a free website
              audit — we review your current site, identify what&apos;s costing
              you leads, and give you a clear priority roadmap.
            </p>
            <a
              href="https://cal.com/suraj-savle-tua3qw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#4DB2E0] text-white font-semibold rounded-xl hover:bg-[#000000] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4DB2E0]/25 mx-2"
            >
              Get My Free Meeting Schedule
              <TbArrowUpRight className="size-4" />
            </a>
            <a
              href="https://wa.me/8369213418"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#000000] text-white font-semibold rounded-xl hover:bg-[#3ba5d4] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4DB2E0]/25 mx-2"
            >
              Get My Free consultation
              <TbArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        {/* ============================================================
            WHAT REDESIGN ACTUALLY MEANS
            ============================================================ */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight">
              What a Website Redesign Actually Involves
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-2xl">
              A redesign is not just swapping a theme or changing colours. Here
              is what a real, strategic redesign improves — and what we
              deliberately avoid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REDESIGN_MEANING.map((item, index) => {
              const Icon = item.icon;
              const isAvoid = item.title.includes("Avoid");
              return (
                <div
                  key={index}
                  className={`
                    p-6 rounded-2xl border transition-all duration-300
                    ${
                      isAvoid
                        ? "bg-amber-50/50 border-amber-200/60 hover:shadow-lg hover:shadow-amber-100/30"
                        : "bg-white border-zinc-200/60 hover:shadow-xl hover:shadow-zinc-200/30"
                    }
                  `}
                >
                  <div
                    className={`
                      p-2.5 rounded-xl w-fit mb-4
                      ${
                        isAvoid
                          ? "bg-amber-100 text-amber-700"
                          : "bg-[#4DB2E0]/10 text-[#4DB2E0]"
                      }
                    `}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white border border-zinc-200/70 rounded-3xl p-8 sm:p-12 shadow-2xs">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight">
                Why Businesses Need a Redesign in 2026
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Business buyers research faster and compare more options than
                ever before. Whether you sell services, products, or B2B
                solutions, your website is typically the first meeting a
                potential customer has with your business.
              </p>
            </div>

            <div className="lg:w-2/3 space-y-4">
              {WHY_MUMBAI.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50/80 transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <TbCircleCheck className="size-5 text-emerald-500" />
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-100">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#4DB2E0]">
                    30–60%
                  </div>
                  <div className="text-xs text-zinc-500">Faster Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#4DB2E0]">
                    20–50%
                  </div>
                  <div className="text-xs text-zinc-500">More Enquiries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#4DB2E0]">100%</div>
                  <div className="text-xs text-zinc-500">SEO-Safe Launch</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            DELIVERABLES
            ============================================================ */}
        <section className="space-y-10">
          <div className=" max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase block mb-2">
              What You Receive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight">
              Deliverables Included in Every Redesign Project
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              You get more than a new design. Every project includes
              documentation and assets that make the outcome transparent,
              measurable, and easy to maintain after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white border border-zinc-200/60 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#4DB2E0]/10 rounded-xl text-[#4DB2E0] group-hover:bg-[#4DB2E0] group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            SEO SAFETY
            ============================================================ */}
        <section className=" p-8 sm:p-12">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase block mb-2">
                SEO Safety
              </span>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
                How We Protect Your Rankings During a Redesign
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Rankings drop after redesign when SEO is treated as an
                afterthought. We build a full SEO migration plan into every
                redesign project from the very first phase.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 border-b border-zinc-200">
                  <tr>
                    <th className="py-3 px-4 font-bold text-zinc-700 w-1/2">
                      What Typically Goes Wrong (with other agencies)
                    </th>
                    <th className="py-3 px-4 font-bold text-[#4DB2E0] w-1/2 bg-[#4DB2E0]/5">
                      Our Redesign Process (included in every project)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {SEO_SAFEGUARDS.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-zinc-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-zinc-600">
                        <span className="flex items-start gap-2">
                          <TbX className="size-4 text-red-400 shrink-0 mt-0.5" />
                          {item.issue}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-zinc-700 bg-[#4DB2E0]/5">
                        <span className="flex items-start gap-2">
                          <TbCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          {item.safeguard}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Infrastructure Framework */}
        <section className="bg-white border border-zinc-200/70 rounded-3xl p-8 sm:p-12 shadow-2xs">
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            <div className="lg:w-1/3 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase block">
                Deployment Safeguards
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase tracking-tight leading-tight">
                How We Redesign Your Website
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Redesigning your website shouldn&apos;t mean losing your SEO,
                rankings, or existing content. Our process ensures a smooth
                transition while protecting everything your business has already
                built.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REDESIGN_PHASES.map((phase, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl hover:bg-zinc-50/80 transition-colors"
                >
                  <div className="p-1 rounded-md bg-[#4DB2E0]/15 text-[#3ba5d4] font-mono text-xs font-bold px-2 shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    {phase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structural Metrics Matrix */}
        <section className="space-y-12 mb-20">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase block">
              Performance Blueprints
            </span>
            <h2 className="text-3xl font-black text-zinc-800 tracking-tight uppercase">
              THE STRATEGIC BENEFITS OF NEXT-GEN ENGINEERING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METRIC_BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-white border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="p-2.5 bg-zinc-50 border border-zinc-200/50 rounded-xl w-fit text-zinc-700 group-hover:bg-[#4DB2E0]/10 group-hover:text-[#4DB2E0] transition-colors duration-300">
                      <Icon className="size-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black tracking-wider text-zinc-800 uppercase">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-5 mt-5 border-t border-zinc-100">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
