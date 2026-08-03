"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbArrowUpRight,
  TbCode,
  TbRocket,
  TbCheck,
  TbDeviceMobile,
  TbSearch,
  TbClick,
  TbForms,
  TbPlus,
  TbAccessible,
} from "react-icons/tb";

{
  /* ============================================================================
    Core Datasets
    ============================================================================ */
}

const APPROACH_CHECKLIST = [
  "100% custom design tailored to your business.",
  "Free homepage design before you commit.",
  "Dedicated project manager throughout the project.",
  "Responsive on desktop, tablet, and mobile devices.",
  "Built with SEO best practices from day one.",
  "Optimized for speed and Core Web Vitals.",
  "Secure, reliable, and easy to maintain.",
  "One year of technical support after launch.",
];

const ADVANTAGES = [
  {
    icon: TbRocket,
    title: "Lightning Fast Performance",
    desc: "Optimized code and modern development practices ensure your website loads quickly, keeping visitors engaged and improving search rankings.",
  },
  {
    icon: TbDeviceMobile,
    title: "Responsive on Every Device",
    desc: "Your website automatically adapts to desktops, tablets, and smartphones, delivering a consistent experience everywhere.",
  },
  {
    icon: TbSearch,
    title: "SEO Ready",
    desc: "Built with search engine best practices to help your business rank higher and attract more organic traffic.",
  },
  {
    icon: TbClick,
    title: "Designed to Convert",
    desc: "Strategic layouts, clear calls to action, and intuitive navigation help turn visitors into customers.",
  },
  {
    icon: TbForms,
    title: "Lead Generation",
    desc: "Professional contact forms, inquiry systems, and conversion-focused sections help capture high-quality leads.",
  },
  {
    icon: TbPlus,
    title: "Easy to Scale",
    desc: "Add new pages, services, features, or integrations anytime without rebuilding your website.",
  },
  {
    icon: TbAccessible,
    title: "Accessible & User Friendly",
    desc: "Designed for everyone with clear navigation, readable layouts, and accessibility best practices.",
  },
  {
    icon: TbCode,
    title: "Clean & Maintainable Code",
    desc: "Modern development standards ensure your website remains secure, reliable, and easy to maintain for years.",
  },
];

const phoneNumber = "918369213418";
const message =
  "Hello! I am looking to build a website for my business and would love to discuss details.";

export default function CustomWebsitePage() {
  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/50 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Dynamic Grid Background Overlay */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 md:mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700  leading-none">
            Custom Website
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          Unlike templates, every page is designed specifically for your brand,
          making your website faster, more professional, easier to scale, and
          built to convert visitors into customers.
        </p>
      </div>

      <div className="px-6 sm:px-12 flex flex-col lg:flex-row-reverse items-start justify-between gap-12 md:gap-16 border-b border-zinc-200 pb-20 mt-30">
        {/* Left Image */}
        <div className="flex justify-start">
          <Image
            src="/services/customwebsite1.png"
            alt="Custom Website Development"
            width={650}
            height={650}
            priority
            className="w-full md:max-w-150 h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 uppercase">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-zinc-700">
            Websites That
            <br />
            <span className="text-[#4DB2E0]">Grow Your Business</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600">
            We design and develop high-performance custom websites tailored to
            your business. Every page is built from scratch for better speed,
            SEO, user experience, and higher conversion rates without relying on
            generic templates.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://cal.com/upgradeux/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Schedule a Free Consultation
              <TbArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20ba59]"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Our Approach Strategy */}
      <section id="approach" className="px-6 sm:px-12 pt-28 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4DB2E0]">
              Why Choose a Custom Website
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight leading-tight">
              Designed Around Business Goals
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              A custom website layout strategy is engineered around your
              services, target demographic parameters, and specific conversion
              indicators. From credibility content modules to strict
              call-to-action fields, everything serves an explicit business
              purpose.
            </p>
          </div>
          <div className=" flex flex-col items-start w-full md:ml-5 gap-2">
            {APPROACH_CHECKLIST.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 p-3 hover:bg-zinc-50 rounded-xl transition-all"
              >
                <div className="p-1 rounded-md bg-[#4DB2E0]/10 text-[#4DB2E0] mt-0.5 shrink-0">
                  <TbCheck className="size-3.5 stroke-3" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Go Custom Architecture Benefits */}
      <section id="why-custom" className="mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4DB2E0]">
              ARCHITECTURAL BENEFITS
            </span>
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
              Advantages of Custom Coding
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, i) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="p-2.5 bg-zinc-50 border border-zinc-100 rounded-xl w-fit text-zinc-800 shadow-3xs group-hover:bg-[#4DB2E0]/10 group-hover:text-[#4DB2E0] transition-colors duration-300">
                      <AdvIcon className="size-4.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 ">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-2 mt-2 border-t border-zinc-100/60">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Intelligence Table */}
      <section id="comparison" className="px-6 sm:px-12 py-12">
        <div className="">
          <div className="text-start mb-14">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4DB2E0]">
              Compare Your Options
            </span>

            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-zinc-700 uppercase">
              Why Businesses Choose
              <span className="text-[#4DB2E0]"> Custom Websites</span>
            </h2>

            <p className="mt-5 text-zinc-600 leading-7">
              Every solution has its place, but if your goal is performance,
              flexibility, and long-term growth, a custom-built website gives
              you the greatest advantage.
            </p>
          </div>

          <div className="overflow-x-auto  border border-zinc-200 bg-white ">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-zinc-700 text-white">
                <tr>
                  <th className="px-8 py-5 text-sm font-semibold">Features</th>

                  <th className="px-8 py-5 text-center bg-[#4DB2E0] text-white">
                    Custom Website
                  </th>

                  <th className="px-8 py-5 text-center">WordPress</th>

                  <th className="px-8 py-5 text-center">Website Builders</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-200">
                {[
                  [
                    "Unique Design",
                    "✓ Fully Custom",
                    "Theme Based",
                    "Template Based",
                  ],
                  ["Loading Speed", "✓ Excellent", "Good", "Average"],
                  ["SEO Ready", "✓ Built-in", "Plugin Required", "Basic"],
                  ["Mobile Friendly", "✓ Yes", "✓ Yes", "✓ Yes"],
                  [
                    "Security",
                    "✓ High",
                    "Depends on Plugins",
                    "Platform Managed",
                  ],
                  ["Scalability", "✓ Unlimited", "Moderate", "Limited"],
                  ["Code Ownership", "✓ Complete", "Complete", "No"],
                  [
                    "Maintenance",
                    "Low",
                    "Regular Updates",
                    "Platform Controlled",
                  ],
                  [
                    "Best For",
                    "Growing Businesses",
                    "Blogs & CMS",
                    "Small Personal Sites",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-zinc-50 transition-colors"
                  >
                    <td className="px-8 py-5 font-semibold text-zinc-900">
                      {row[0]}
                    </td>

                    <td className="px-8 py-5 text-center font-semibold text-[#0F766E] bg-[#4DB2E0]/5">
                      {row[1]}
                    </td>

                    <td className="px-8 py-5 text-center text-zinc-600">
                      {row[2]}
                    </td>

                    <td className="px-8 py-5 text-center text-zinc-500">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
