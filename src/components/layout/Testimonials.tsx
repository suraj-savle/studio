"use client";

import React from "react";
import Image from "next/image";
import { TbUser } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metricLabel: string;
  metricValue: string;
  avatar?: string;
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
      avatar: "/assets/testimonials/default.jpg",
    },
    {
      quote:
        "What stood out wasn't just the design—it was the attention to detail. Every interaction feels polished, the performance is excellent, and the team was always available whenever we needed changes or guidance. It genuinely feels like having a long-term digital partner.",
      author: "Sarah",
      role: "Marketing Manager",
      company: "",
      metricLabel: "Client Satisfaction",
      metricValue: "5.0 / 5",
      avatar: "/assets/testimonials/default.jpg",
    },
    {
      quote:
        "Our previous website looked outdated and wasn't generating many enquiries. UpgradeUX completely transformed it into a modern experience that reflects our brand. We've already noticed better engagement, faster load times, and more confidence from potential clients.",
      author: "Tushar",
      role: "",
      company: "",
      metricLabel: "Performance",
      metricValue: "+92 Lighthouse",
      avatar: "/assets/testimonials/default.jpg",
    },
  ];

  const row1 = [...reviews, ...reviews, ...reviews];
  const row2 = [...reviews, ...reviews, ...reviews];
  const row3 = [...reviews, ...reviews, ...reviews];

  const CardContent = ({ item }: { item: Testimonial }) => {
    const hasRole = item.role && item.role.trim() !== "";
    const hasCompany = item.company && item.company.trim() !== "";
    const hasMeta = hasRole || hasCompany;

    return (
      <div className="group/card relative flex flex-col p-6 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-[0000003b] hover:shadow-[#0000003b] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#00000034]">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#4DB2E0]/0 via-[#4DB2E0]/0 to-[#4DB2E0]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-[#4DB2E0]/20 text-2xl mb-4 group-hover/card:text-[#000000b7] transition-colors duration-300" />

          {/* Quote Text */}
          <p className="text-sm text-zinc-600 leading-relaxed font-normal antialiased mb-6 line-clamp-4 group-hover/card:text-zinc-500 transition-colors duration-300">
            &ldquo;{item.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-5 group-hover/card:via-[#4DB2E0]/30 transition-all duration-300" />

          {/* Footer */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-zinc-100 group-hover/card:border-[#4DB2E0]/30 transition-all duration-300 shrink-0 bg-[#4DB2E0] flex items-center justify-center">
              {item.avatar && item.avatar.trim() !== "" ? (
                <Image
                  src={item.avatar}
                  alt={item.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <TbUser className="w-5 h-5 text-zinc-100 group-hover/card:text-[#000000] transition-colors duration-300" />
              )}
            </div>

            {/* Author Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-zinc-900 tracking-tight group-hover/card:text-[#00000082] transition-colors duration-300">
                {item.author}
              </h4>
              {hasMeta && (
                <p className="text-xs text-zinc-400 mt-0.5 truncate">
                  {hasRole && <span>{item.role}</span>}
                  {hasRole && hasCompany && <span className="mx-1">·</span>}
                  {hasCompany && (
                    <span className="text-zinc-500 font-medium">
                      {item.company}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 bg-linear-to-b from-white to-zinc-50/50 py-12 sm:py-20 select-none border-t border-zinc-100">
      <style jsx global>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        .animate-marquee-up {
          display: flex;
          flex-direction: column;
          height: max-content;
          animation: marquee-up 25s linear infinite;
        }

        .animate-marquee-down {
          display: flex;
          flex-direction: column;
          height: max-content;
          animation: marquee-down 25s linear infinite;
        }

        .mask-gradient-container {
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl text-zinc-900 font-medium">
            Loved by Clients.
            <br />
            <span className="text-zinc-900">Built to Perform.</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
          Businesses choose UpgradeUX because we focus on more than beautiful
          design. We deliver fast, conversion-focused websites backed by clear
          communication, reliable support, and measurable results.
        </p>
      </div>

      {/* Three Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-25">
        {/* Row 1 - Moving UP */}
        <div className="hidden sm:block relative h-162.5 overflow-hidden mask-gradient-container group">
          <div className="animate-marquee-up hover:[animation-play-state:paused] transition-all duration-300">
            {row1.map((item, idx) => (
              <CardContent key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving DOWN */}
        <div className="hidden sm:block relative h-162.5 mask-gradient-container group">
          <div className="animate-marquee-down hover:[animation-play-state:paused] transition-all duration-300">
            {row2.map((item, idx) => (
              <CardContent key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 3 - Moving UP */}
        <div className="relative h-162.5 overflow-hidden mask-gradient-container group">
          <div className="animate-marquee-up hover:[animation-play-state:paused] transition-all duration-300">
            {row3.map((item, idx) => (
              <CardContent key={`row3-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
