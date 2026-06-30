"use client";

import React from "react";
import Image from "next/image";
import { TbStarFilled, TbQuote, TbArrowUpRight } from "react-icons/tb";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metricLabel: string;
  metricValue: string;
  avatar: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      quote:
        "UpgradeUX delivered exactly what we were looking for. The website is fast, modern, and much easier for our customers to use. Throughout the project, communication was clear, deadlines were met, and every detail was handled professionally.",
      author: "Rohan Mehta",
      role: "Founder",
      company: "Prism Digital Studio",
      metricLabel: "Project Delivery",
      metricValue: "On Time",
      avatar: "/blog/profile/suraj-savle.jpg",
    },
    {
      quote:
        "From the first design concepts to the final launch, the entire process felt smooth and well organized. The team understood our requirements, suggested valuable improvements, and delivered a website that truly represents our brand.",
      author: "Sarah Williams",
      role: "Marketing Manager",
      company: "Nova Solutions",
      metricLabel: "Client Rating",
      metricValue: "5/5",
      avatar: "/blog/profile/suraj-savle.jpg",
    },
    {
      quote:
        "What impressed us most was the attention to detail and performance. Our new website loads significantly faster, looks premium on every device, and has received great feedback from both clients and our internal team.",
      author: "Amit Sharma",
      role: "Business Owner",
      company: "Vertex Technologies",
      metricLabel: "Performance",
      metricValue: "Excellent",
      avatar: "/blog/profile/suraj-savle.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mt-1">
              What Partners Say About Us
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-500 max-w-sm leading-relaxed">
            Real feedback from companies that upgraded their digital tools,
            interface designs, and platform architectures.
          </p>
        </div>

        {/* Testimonials Grid Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 bg-zinc-50/50 hover:bg-white border border-zinc-200/60 hover:border-[#4DB2E0]/40 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {/* Top Accent Elements */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <TbStarFilled
                      key={i}
                      className="w-3.5 h-3.5 text-[#4DB2E0]"
                    />
                  ))}
                </div>
                <TbQuote className="w-6 h-6 text-zinc-200 group-hover:text-[#4DB2E0]/20 transition-colors" />
              </div>

              {/* Main Content Quote */}
              <p className="text-xs md:text-sm text-zinc-700 leading-relaxed font-medium mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Footer Panel Data */}
              <div className="pt-5 border-t border-zinc-200/60 mt-auto">
                {/* Metric Overlay Card */}
                <div className="mb-4 flex items-center justify-between bg-white border border-zinc-100 px-3 py-2 rounded-xl group-hover:border-zinc-200 transition-colors shadow-2xs">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    {item.metricLabel}
                  </span>
                  <span className="text-xs font-black text-[#4DB2E0] flex items-center gap-0.5">
                    {item.metricValue}{" "}
                    <TbArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                </div>

                {/* Author Profile Information */}
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 overflow-hidden rounded-full border border-zinc-200 shrink-0 bg-zinc-100">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-zinc-950 tracking-tight truncate">
                      {item.author}
                    </h4>
                    <p className="text-[10px] font-medium text-zinc-400 truncate">
                      {item.role} at{" "}
                      <span className="text-zinc-500 font-semibold">
                        {item.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
