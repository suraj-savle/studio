"use client";

import React from "react";
import Image from "next/image";
import { TbUser } from "react-icons/tb";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metricLabel: string;
  metricValue: string;
  avatar?: string; // Made optional to natively handle missing paths
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      quote:
        "Working with UpgradeUX was one of the best decisions for our business. They redesigned our website into something that looks premium, loads incredibly fast, and makes it much easier for customers to understand our services. The entire process was transparent, smooth, and delivered exactly on schedule.",
      author: "Swapanil",
      role: "Founder",
      company: "rare ui",
      metricLabel: "Project Delivery",
      metricValue: "100% On Time",
      avatar: "",
    },
    {
      quote:
        "What stood out wasn't just the design—it was the attention to detail. Every interaction feels polished, the performance is excellent, and the team was always available whenever we needed changes or guidance. It genuinely feels like having a long-term digital partner.",
      author: "Sarah",
      role: "Marketing Manager",
      company: "",
      metricLabel: "Client Satisfaction",
      metricValue: "5.0 / 5",
      avatar: "",
    },
    {
      quote:
        "Our previous website looked outdated and wasn't generating many enquiries. UpgradeUX completely transformed it into a modern experience that reflects our brand. We've already noticed better engagement, faster load times, and more confidence from potential clients.",
      author: "Tushar",
      role: "",
      company: "",
      metricLabel: "Performance",
      metricValue: "+92 Lighthouse",
      avatar: "",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 bg-white py-12 sm:py-20 select-none border-t border-zinc-100">
      {/* Global CSS Inject Block for Marquee Track Architecture */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl tracking-tight text-zinc-950 leading-tight">
              Loved by Clients.
              <br />
              Built to Perform.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-500 max-w-sm leading-relaxed">
            Businesses choose UpgradeUX because we focus on more than beautiful
            design. We deliver fast, conversion-focused websites backed by clear
            communication, reliable support, and measurable results.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Stream Wrapper Layout Container */}
      <div className="relative w-full max-w-7xl mx-auto overflow-x-hidden  flex mask-gradient-container group">
        {/* Dual Loop Tracks for Gapless Streaming Layouts */}
        <div className="animate-marquee flex gap-6 pr-6 hover:[animation-play-state:paused]">
          {[...reviews, ...reviews, ...reviews].map((item, idx) => {
            // Clean conditional flags to keep metadata seamless
            const hasRole = item.role && item.role.trim() !== "";
            const hasCompany = item.company && item.company.trim() !== "";
            const hasMeta = hasRole || hasCompany;

            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-6 bg-[#f2f2f258] backdrop-blur-md hover:bg-white border border-zinc-200/60 hover:border-[#4DB2E0]/40 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out w-80 shrink-0 group/card"
              >
                {/* Top Profile Header Area */}
                <div className="flex flex-col items-center text-center gap-3">
                  {/* Avatar Ring */}
                  <div className="relative w-10 h-10 overflow-hidden rounded-full border border-zinc-200 shrink-0 bg-[#4db1e074] flex items-center justify-center transition-transform duration-300 group-hover/card:scale-105">
                    {item.avatar && item.avatar.trim() !== "" ? (
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <TbUser className="w-5 h-5 text-zinc-900" />
                    )}
                  </div>

                  {/* Identity Texts with Precise Fallbacks */}
                  <div className="flex flex-col items-center justify-center min-w-0 max-w-full">
                    <h4 className="text-sm font-medium text-zinc-950 tracking-tight truncate w-full">
                      {item.author}
                    </h4>

                    {hasMeta && (
                      <p className="text-xs font-medium text-zinc-400 mt-0.5 truncate w-full px-2">
                        {hasRole && <span>{item.role}</span>}
                        {hasRole && hasCompany && (
                          <span className="mx-1 opacity-60">at</span>
                        )}
                        {hasCompany && (
                          <span className="text-[#4DB2E0] transition-colors">
                            {item.company}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                </div>

                {/* Main Content Quote Block */}
                <div className="mt-5 border-t border-zinc-100/80 flex-1 flex items-center justify-center">
                  <p className="text-xs md:text-[13px] text-zinc-600 leading-relaxed font-medium text-center antialiased">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
