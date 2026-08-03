import React from "react";
import type { Metadata } from "next";

import {
  TbBuildingStore,
  TbRocket,
  TbBrandNextjs,
  TbArrowUpRight,
  TbCircleCheck,
  TbTools,
  TbSettings,
  TbCrown,
  TbSeo,
  TbUsersGroup,
  TbStack2,
} from "react-icons/tb";
import { TbRefresh, TbBrandWordpress } from "react-icons/tb";

interface ServiceTier {
  id: string;
  title: string;
  price: string;
  timeline: string;
  bestFor: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  featured: boolean;
  tag: string;
  slug: string;
  highlights: string[];
}

interface MaintenanceTier {
  title: string;
  price: string;
  period: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_SHOWCASE: ServiceTier[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    price: "7,999",
    timeline: "3–5 Days",
    bestFor: "Campaigns & Local Businesses",
    description:
      "High-converting landing pages built to generate more leads and sales.",
    icon: TbRocket,
    featured: false,
    tag: "Starter",
    slug: "/services/custom-website",
    highlights: ["Premium UI", "Lead Forms", "Mobile Responsive", "SEO Ready"],
  },
  {
    id: "business-website",
    title: "Business Website",
    price: "14,999",
    timeline: "1–2 Weeks",
    bestFor: "Businesses & Agencies",
    description:
      "Professional websites that build trust and grow your business online.",
    icon: TbBuildingStore,
    featured: true,
    tag: "Most Popular",
    slug: "/services/custom-website",
    highlights: ["Up to 8 Pages", "WhatsApp", "Google Maps", "SEO Optimized"],
  },
  {
    id: "wordpress",
    title: "WordPress Website",
    price: "16,999",
    timeline: "1–2 Weeks",
    bestFor: "Blogs & Business Sites",
    description:
      "Easy-to-manage WordPress websites with a custom professional design.",
    icon: TbBrandWordpress,
    featured: false,
    tag: "CMS",
    slug: "/services/wordpress",
    highlights: ["Custom Theme", "Easy Editing", "SEO Friendly", "Admin Panel"],
  },
  {
    id: "redesign",
    title: "Website Redesign",
    price: "11,999",
    timeline: "1–2 Weeks",
    bestFor: "Existing Websites",
    description:
      "Refresh your outdated website with a modern, faster, and responsive design.",
    icon: TbRefresh,
    featured: false,
    tag: "Refresh",
    slug: "/services/website-redesign",
    highlights: [
      "Modern UI",
      "Better Speed",
      "Mobile Ready",
      "Content Migration",
    ],
  },
  {
    id: "nextjs",
    title: "Next.js Development",
    price: "24,999+",
    timeline: "Custom",
    bestFor: "High-Performance Websites",
    description:
      "Fast, scalable websites built with Next.js for the best performance.",
    icon: TbBrandNextjs,
    featured: true,
    tag: "Performance",
    slug: "/services/custom-website",
    highlights: ["App Router", "SSR & SSG", "SEO Ready", "Lightning Fast"],
  },
  {
    id: "mern",
    title: "MERN Stack Development",
    price: "29,999+",
    timeline: "Custom",
    bestFor: "Web Apps & Dashboards",
    description:
      "Custom MERN applications with secure authentication and APIs.",
    icon: TbStack2,
    featured: false,
    tag: "Full Stack",
    slug: "/services/custom-website",
    highlights: ["MongoDB", "Express API", "React Frontend", "Node Backend"],
  },
  {
    id: "crm",
    title: "CRM Solutions",
    price: "Custom",
    timeline: "Project Based",
    bestFor: "Growing Businesses",
    description:
      "Custom CRM implementation and automation to manage customers efficiently.",
    icon: TbUsersGroup,
    featured: false,
    tag: "Business",
    slug: "/services/custom-website",
    highlights: ["Zoho CRM", "EspoCRM", "Automation", "Training"],
  },
  {
    id: "seo-ai",
    title: "SEO & AI Optimization",
    price: "4,999+",
    timeline: "Ongoing",
    bestFor: "Business Growth",
    description:
      "Improve search visibility and prepare your business for AI-powered search.",
    icon: TbSeo,
    featured: false,
    tag: "Growth",
    slug: "/services/search-engine-optimization",
    highlights: ["Technical SEO", "Local SEO", "AI Visibility", "Analytics"],
  },
];

const SUPPORT_SERVICES: MaintenanceTier[] = [
  {
    title: "Essential Care",
    price: "Get Support",
    period: "",
    description:
      "Perfect for small websites that need regular updates, backups, and reliable technical support.",
    icon: TbTools,
    highlights: [
      "Security Updates",
      "Scheduled Backups",
      "Bug Fixes",
      "Content Updates",
    ],
  },
  {
    title: "Business Care",
    price: "Get Support",
    period: "",
    description:
      "Proactive maintenance with performance monitoring, SEO health checks, and priority support.",
    icon: TbSettings,
    highlights: [
      "Performance Monitoring",
      "SEO Health Check",
      "Priority Support",
      "Website Reports",
    ],
  },
  {
    title: "Premium Care",
    price: "Get Support",
    period: "",
    description:
      "Complete website management with continuous monitoring, advanced security, and dedicated support.",
    icon: TbCrown,
    highlights: [
      "Advanced Security",
      "Performance Reviews",
      "Strategy Support",
      "Priority Queue",
    ],
  },
];

export const metadata: Metadata = {
  title: "Web Development & Design Services | UpgradeUX",

  description:
    "Explore UpgradeUX services including custom website development, Next.js, React, WordPress, website redesign, SEO, AI automation, n8n workflows, CRM solutions, landing pages, and ongoing website maintenance for businesses and startups.",

  keywords: [
    "Web Development Services",
    "Website Development Company",
    "Custom Website Development",
    "Business Website",
    "Landing Page Design",
    "Next.js Development",
    "React Development",
    "MERN Stack Development",
    "WordPress Development",
    "Website Redesign",
    "SEO Services",
    "Technical SEO",
    "Local SEO",
    "AI Automation",
    "n8n Automation",
    "Business Automation",
    "CRM Solutions",
    "WhatsApp Chatbot",
    "AI Assistant",
    "Website Maintenance",
    "Performance Optimization",
    "Startup Website",
    "Agency Website",
    "UpgradeUX",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Web Development Services | Websites, SEO & AI Automation | UpgradeUX",

    description:
      "From custom websites and Next.js development to SEO, AI automation, CRM integrations, and website maintenance—UpgradeUX helps businesses build a powerful online presence.",

    url: "https://www.upgradeux.in/services",

    siteName: "UpgradeUX",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/social/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UpgradeUX Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Development Services | UpgradeUX",

    description:
      "Custom websites, Next.js, WordPress, SEO, AI automation, CRM solutions, website redesigns, and business growth services.",

    images: ["/social/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesOverviewPage() {
  return (
    <div className="w-full min-h-screen text-zinc-950 antialiased">
      {/* Premium Minimal Hero Header Area */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-4 md:px-12 pb-12 md:mb-20">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 leading-none">
            Our Services
          </h1>
        </div>
        <p className="hidden sm:block text-sm font-medium text-zinc-500 max-w-sm leading-relaxed">
          Explore our range of web solutions, from high-converting landing pages
          to scalable e-commerce systems and bespoke web applications, all
          designed to elevate your digital presence.
        </p>
      </div>

      {/* Primary Project Showcase Card Grid Layout */}
      <div className="px-4 md:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {SERVICE_SHOWCASE.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-sm p-2 border transition-all duration-300 flex flex-col justify-between min-h-[450px] ${
                  service.featured
                    ? "border-zinc-400/80 shadow-md hover:shadow-xl hover:scale-[1.01]"
                    : "border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300"
                }`}
              >
                {/* Upper Premium Tinted Sub-Container Card Block */}
                <div
                  className={`relative overflow-hidden rounded-sm p-5 flex flex-col justify-between min-h-[270px] transition-all duration-300 ${
                    service.featured
                      ? "bg-linear-to-b from-[#4DB2E0] to-[#ededed] text-zinc-950"
                      : "bg-[#f3f4f6]/70"
                  }`}
                >
                  {/* Subtle Ambient Mesh Color Gradient Glow for Featured Flagship Card */}
                  {service.featured && (
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12 opacity-90" />
                  )}

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                          service.featured
                            ? "bg-white/10 border-white/10 text-white"
                            : "bg-white border-zinc-200 text-zinc-800 shadow-sm"
                        }`}
                      >
                        <ServiceIcon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                          service.featured
                            ? "bg-white/10 text-white border border-white/10"
                            : "bg-zinc-200 text-zinc-700 font-bold"
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p
                        className={`text-[11px] font-medium leading-normal ${
                          service.featured ? "text-zinc-800" : "text-zinc-500"
                        }`}
                      >
                        {service.description}
                      </p>
                      <div className="space-y-0.5 py-2.5 rounded-xl">
                        <span className="text-xs text-zinc-400 block">
                          Best For
                        </span>
                        <p className="text-xs font-bold text-zinc-700 leading-tight">
                          {service.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Stack and Redirecting Details Anchor Link Trigger */}
                  <div className="relative z-10 ">
                    <a
                      href={service.slug}
                      className={`w-full py-3 rounded-sm font-bold text-xs tracking-wide flex items-center justify-center gap-1 transition-all shadow-sm ${
                        service.featured
                          ? "bg-white text-zinc-950 hover:bg-zinc-100"
                          : "bg-zinc-950 text-white hover:bg-zinc-900"
                      }`}
                    >
                      View Details
                      <TbArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          service.featured ? "text-zinc-500" : "text-zinc-400"
                        }`}
                      />
                    </a>
                  </div>
                </div>

                {/* Lower Project Feature Highlights List & Inclusions */}
                <div className=" pt-5 pb-1 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2.5">
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs font-medium text-zinc-600"
                          >
                            <TbCircleCheck className="text-zinc-400 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                            <span className="leading-tight">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Horizontal Rule Metadata Baseline Layout */}
                  <div className=" pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[10px] font-bold text-zinc-400 tracking-wider">
                    <span>DELIVERY TIME</span>
                    <span className="text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded text-[9px] font-extrabold">
                      {service.timeline}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Auxiliary Retainers & Continuous Code Maintenance Section */}
      <div className="py-20">
        <div className="px-6 lg:px-12">
          <div className="max-w-xl mb-12 space-y-2">
            <h2 className="text-2xl font-black text-zinc-950 tracking-tight">
              Ongoing Maintenance & Optimization
            </h2>
            <p className="text-zinc-500 font-medium text-xs sm:text-sm">
              Continuous deployment cycles, performance tuning audits, and
              server infrastructure oversight post-launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SUPPORT_SERVICES.map((plan, idx) => {
              const PlanIcon = plan.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-100 rounded-sm p-5 border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[180px] hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-[#092837] flex items-center justify-center">
                        <PlanIcon className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] font-bold text-zinc-400 uppercase block leading-none">
                          Starting from
                        </span>
                        <span className="text-xs font-black text-zinc-950">
                          ₹{plan.price}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-400">
                          /{plan.period}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-950 group-hover:text-[#727474] transition-colors">
                        {plan.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 font-medium leading-relaxed mt-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
