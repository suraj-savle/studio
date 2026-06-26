"use client";

import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbArrowUpRight,
  TbCheck,
  TbChevronRight,
  TbBrandWordpress,
  TbLayoutDashboard,
  TbCode,
  TbPlug,
  TbShoppingCart,
  TbTransfer,
  TbBuilding,
  TbTools,
  TbClock,
  TbShield,
  TbApi,
  TbUsers,
  TbEye,
  TbSearch,
  TbChartBar,
  TbDatabase,
  TbSpeedboat,
  TbPalette,
  TbSettings,
  TbCertificate,
  TbMessageCircle,
  TbCalendar,
  TbHeadset,
  TbRocket,
  TbCloud,
  TbWorld,
  TbDeviceMobile,
  TbServer,
  TbLock,
} from "react-icons/tb";

/* ============================================================================
  WordPress Services Datasets
  ============================================================================ */

const SERVICES = [
  {
    icon: TbBrandWordpress,
    title: "WordPress Website Design",
    description:
      "Responsive, custom-designed WordPress websites built to deliver exceptional user experiences across all devices — optimised for performance, brand consistency, and organic search visibility from day one.",
    tag: "WordPress website design Mumbai",
  },
  {
    icon: TbPalette,
    title: "Custom WordPress Theme Development",
    description:
      "We build unique WordPress themes from scratch — optimised for speed, SEO, responsiveness, and plugin compatibility — precisely reflecting your brand identity and business requirements. No off-the-shelf themes.",
    tag: "Custom WordPress theme development Mumbai",
  },
  {
    icon: TbPlug,
    title: "WordPress Plugin Development",
    description:
      "Our developers build lightweight, secure, and scalable custom plugins to enhance your site's functionality with specific features — without compromising performance or opening security vulnerabilities.",
    tag: "WordPress plugin development Mumbai",
  },
  {
    icon: TbShoppingCart,
    title: "WooCommerce eCommerce Development",
    description:
      "Launch a robust, user-friendly online store with our WooCommerce solutions — product management, Razorpay/PayU payment integration, GST handling, and seamless shopping experiences built for Mumbai customers.",
    tag: "WooCommerce eCommerce development Mumbai",
  },
  {
    icon: TbTransfer,
    title: "WordPress Migration Services",
    description:
      "Moving to WordPress from another platform? We ensure smooth, secure, and SEO-preserving migrations with zero data loss, full redirect mapping, and minimal downtime throughout the entire process.",
    tag: "WordPress migration services Mumbai",
  },
  {
    icon: TbBuilding,
    title: "Enterprise WordPress Development",
    description:
      "Scalable, secure enterprise-level WordPress platforms with API integrations, custom workflows, multi-user environments, role-based access, and advanced performance architecture for larger Mumbai businesses.",
    tag: "Enterprise WordPress development Mumbai",
  },
  {
    icon: TbTools,
    title: "WordPress Maintenance & Support",
    description:
      "From uptime monitoring to plugin updates, security patches, and troubleshooting — our maintenance plans keep your WordPress website running smoothly, securely, and efficiently every day.",
    tag: "WordPress maintenance and support Mumbai",
  },
  {
    icon: TbClock,
    title: "WordPress Retainer Services",
    description:
      "Need ongoing WordPress support? Get access to our dedicated WordPress professionals for continuous improvements, new feature additions, content updates, and long-term development on a retainer basis.",
    tag: "WordPress retainer services Mumbai",
  },
  {
    icon: TbShield,
    title: "WordPress Security & Hardening",
    description:
      "We secure your WordPress installation with professional hardening — Wordfence/Sucuri setup, two-factor authentication, login protection, firewall configuration, and regular malware scanning.",
    tag: "WordPress security hardening Mumbai",
  },
];

const ADVANCED_CAPABILITIES = [
  {
    icon: TbApi,
    title: "Headless WordPress Development",
    description:
      "Blazing-fast, scalable websites powered by WordPress as a headless CMS with modern front-end frameworks like React and Next.js — ideal for high-traffic or performance-critical projects.",
  },
  {
    icon: TbUsers,
    title: "LMS & eLearning Development",
    description:
      "Custom Learning Management Systems built on WordPress — course structures, student enrolment, progress tracking, assessments, and payment integration for Mumbai coaching institutes and educators.",
  },
  {
    icon: TbDatabase,
    title: "API Integration Services",
    description:
      "Integrate third-party systems — CRMs, ERP platforms, payment gateways, inventory systems, and custom APIs — to enhance data flow and automate operations across your business.",
  },
  {
    icon: TbEye,
    title: "Accessibility Compliance",
    description:
      "Make your website inclusive with WCAG-compliant optimisations — improved navigation, semantic HTML, contrast checks, and accessibility enhancements for a wider range of users.",
  },
  {
    icon: TbSearch,
    title: "Technical SEO",
    description:
      "From site architecture and schema markup to load speed and crawl optimisation — we build every WordPress website technically ready to rank and perform in Google search results.",
  },
  {
    icon: TbChartBar,
    title: "WordPress SEO Services",
    description:
      "Complete on-page SEO including metadata, schema implementation, content strategy, Yoast/RankMath configuration, and speed improvements — for higher visibility on Google and AI search platforms.",
  },
];

const ENTERPRISE_SOLUTIONS = [
  {
    icon: TbBuilding,
    title: "B2B WordPress Development",
    description:
      "Secure, scalable B2B platforms with CRM integration, lead generation tools, and enterprise-level data handling for Mumbai's manufacturing, wholesale, and corporate businesses.",
  },
  {
    icon: TbWorld,
    title: "WordPress Multisite Development",
    description:
      "Manage multiple websites from a single WordPress dashboard — ideal for franchises, educational institutions, enterprise networks, or brands with multiple Mumbai locations.",
  },
  {
    icon: TbSpeedboat,
    title: "Speed Optimisation Services",
    description:
      "Improve page load times and reduce bounce rates with expert caching (WP Rocket / W3 Total Cache), code minification, lazy loading, image compression (WebP), and Core Web Vitals improvements.",
  },
  {
    icon: TbUsers,
    title: "Hire a Dedicated WordPress Team",
    description:
      "Partner with our experienced Mumbai-based WordPress developers to build, optimise, and manage your website — with full transparency, regular updates, and complete accountability.",
  },
  {
    icon: TbLayoutDashboard,
    title: "Elementor & Gutenberg Development",
    description:
      "Flexible drag-and-drop powered websites with Elementor Pro or block-based designs using Gutenberg — optimised for performance while giving you full control over your content layout.",
  },
  {
    icon: TbCloud,
    title: "WordPress Hosting Consultation",
    description:
      "We help you choose and configure secure, scalable hosting solutions for WordPress — from shared hosting recommendations to managed WordPress hosting and VPS server setups.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: TbCertificate,
    title: "12+ Years of WordPress Expertise",
    description:
      "Our team has been building WordPress websites since 2014. That depth of experience means fewer mistakes, faster delivery, and a team that has solved virtually every WordPress challenge you might face.",
    tag: "WordPress Expertise",
  },
  {
    icon: TbRocket,
    title: "Business-Centric Approach",
    description:
      "We do not just build websites — we solve business problems. Every WordPress website we build is designed to generate enquiries, build trust with customers, and grow alongside your business in Mumbai.",
    tag: "Business-Centric Approach",
  },
  {
    icon: TbTools,
    title: "Rigorous QA Before Every Launch",
    description:
      "Every site undergoes thorough testing for performance, cross-browser compatibility, mobile responsiveness, security, and form functionality. Nothing goes live until it passes our complete quality checklist.",
    tag: "Rigorous QA Before Every Launch",
  },
  {
    icon: TbMessageCircle,
    title: "Transparent, Collaborative Process",
    description:
      "We prioritise open communication at every stage — regular WhatsApp updates, milestone previews, and complete involvement so your vision stays at the centre from brief to launch and beyond.",
    tag: "Collaborative Process",
  },
  {
    icon: TbCalendar,
    title: "On-Time, On-Budget Delivery",
    description:
      "Our structured workflows and experienced project managers guarantee timely delivery with clear milestones — without last-minute surprises on the timeline or the invoice.",
    tag: "On-Budget Delivery",
  },
  {
    icon: TbHeadset,
    title: "1 Year Free Post-Launch Support",
    description:
      "Every WordPress project includes 12 months of free post-launch support — updates, bug fixes, security patches, and technical assistance. You are never on your own after handover.",
    tag: "Reliable 1 year support",
  },
];

/* ============================================================================
  Component Render Layer
  ============================================================================ */

export default function WordPressServicesPage() {
  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/70 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Editorial Header Section */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 uppercase leading-none">
            WordPress
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          From simple business websites to complex enterprise platforms — our
          WordPress services cover every requirement a Mumbai business might
          have.
        </p>
      </div>

      {/* Core Transformation Breakdown */}
      <main className="px-6 sm:px-12 py-20 space-y-40">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-700 leading-tight tracking-tight uppercase">
                WordPress Website
                <br />
                <span className="text-[#4DB2E0]">Services We Offer</span>
              </h2>
            </div>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
              <p>
                From a simple business website to a complex multi-language
                enterprise platform — our WordPress services cover every
                requirement a Mumbai business might have.
              </p>
              <p className="text-sm text-zinc-500">
                We build custom WordPress solutions that are fast, secure,
                scalable, and designed to convert visitors into customers.
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
                src="/wordpress-website.png"
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
            SERVICES GRID
            ============================================================ */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase block mb-2">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight">
              WordPress Solutions for Every Business Need
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              From design to development, migration to maintenance — we offer
              end-to-end WordPress services tailored to Mumbai businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 border border-zinc-400 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#4DB2E0]/10 rounded-xl text-[#4DB2E0] group-hover:bg-[#4DB2E0] group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#4DB2E0] uppercase tracking-wider mb-1">
                        {service.tag}
                      </div>
                      <h3 className="text-sm font-bold text-zinc-800 mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            SPECIALISED CAPABILITIES
            ============================================================ */}
        <section className="space-y-10">
          <div className=" max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight">
              Advanced WordPress Capabilities
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Beyond standard development — technical capabilities that add real
              business value for growing organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANCED_CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white border border-zinc-400 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-zinc-50 border border-zinc-200/50 rounded-xl w-fit text-zinc-700 group-hover:bg-[#4DB2E0]/10 group-hover:text-[#4DB2E0] transition-colors duration-300 mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-800 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            ENTERPRISE SOLUTIONS
            ============================================================ */}
        <section className="space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight">
              More Advanced WordPress Solutions
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Enterprise-grade WordPress capabilities available for complex,
              high-performance Mumbai business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTERPRISE_SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-linear-to-br from-zinc-50 to-white border border-zinc-400 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-[#4DB2E0]/10 rounded-xl text-[#4DB2E0] group-hover:bg-[#4DB2E0] group-hover:text-white transition-colors duration-300 w-fit mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-800 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
            ============================================================ */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#000000] to-[#000000] p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Build Your WordPress Website?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8">
              Get a free consultation with our WordPress experts. We&apos;ll
              discuss your requirements, provide recommendations, and give you a
              clear roadmap for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cal.com/suraj-savle-tua3qw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Project
                <TbArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/8369213418"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20ba59] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
