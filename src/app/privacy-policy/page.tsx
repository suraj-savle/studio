"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  TbShield,
  TbMail,
  TbPhone,
  TbBuilding,
  TbCookie,
  TbDatabase,
  TbShare,
  TbCheck,
  TbChevronRight,
  TbServer,
  TbScale,
  TbMenu,
  TbX,
} from "react-icons/tb";

/* ============================================================================
  Core Datasets
  ============================================================================ */

const COMPANY_INFO = {
  name: "UpgradeUX",
  legalName: "UpgradeUX",
  address: "Remote Business • Mumbai, Maharashtra, India",
  email: "upgradeux.agency@gmail.com",
  phone: "+91 8369213418",
  website: "https://upgradeux.in",
  established: "2026",
};

const TABLE_OF_CONTENTS = [
  { id: "who-we-are", title: "About Us", icon: TbBuilding },
  { id: "data-collect", title: "Information We Collect", icon: TbDatabase },
  { id: "how-collect", title: "How We Collect Information", icon: TbShare },
  { id: "how-use", title: "How We Use Information", icon: TbServer },
  { id: "legal-basis", title: "Legal Basis", icon: TbScale },
  { id: "data-sharing", title: "Sharing Information", icon: TbShare },
  { id: "cookies", title: "Cookies", icon: TbCookie },
];

const DATA_COLLECT_TABLE = [
  {
    category: "Personal Information",
    examples: "Full name, company name, job title",
    source: "Contact forms and direct enquiries",
  },
  {
    category: "Contact Details",
    examples: "Email address, phone number, WhatsApp number",
    source: "Contact forms and communication",
  },
  {
    category: "Project Information",
    examples: "Project requirements, business goals, budget, timeline",
    source: "Discovery calls, enquiry forms, proposals",
  },
  {
    category: "Communication Records",
    examples: "Emails, WhatsApp conversations, meeting notes",
    source: "Direct communication",
  },
  {
    category: "Technical Information",
    examples: "IP address, browser, device type, pages visited",
    source: "Analytics and website usage",
  },
  {
    category: "Billing Information",
    examples: "Invoices and payment history (excluding card details)",
    source: "Payment processing",
  },
];

const COOKIE_TABLE = [
  {
    type: "Essential",
    description: "Required for the website to function correctly.",
    examples: "Session management, security features",
  },
  {
    type: "Analytics",
    description: "Helps us understand how visitors use our website.",
    examples: "Google Analytics",
  },
  {
    type: "Preferences",
    description: "Remembers your settings for a better browsing experience.",
    examples: "Language and form preferences",
  },
];

/* ============================================================================
  Component
  ============================================================================ */

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("who-we-are");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  // Optimized IntersectionObserver configuration for highlighting active items
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus tracking on modern dynamic viewport space
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    TABLE_OF_CONTENTS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveSection(id);
      setIsMobileMenuOpen(false);

      element.scrollIntoView({ behavior: "smooth" });

      // Debounce mechanism back to native visual tracker processing loop
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/50 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Floating Mobile Sticky Fab Action */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3.5 bg-zinc-950 text-white rounded-full shadow-xl hover:bg-zinc-900 transition-all active:scale-95"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <TbX className="size-5" />
          ) : (
            <TbMenu className="size-5" />
          )}
        </button>
      </div>

      {/* Backdrop Backdrop Overlay Container */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Drawer Mobile Architectural Layout */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-45 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-24 overflow-y-auto h-full space-y-4">
          <div className="flex items-center gap-2 px-2 text-zinc-400">
            <TbShield className="size-4 " />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              Table of Contents
            </span>
          </div>
          <nav className="space-y-1">
            {TABLE_OF_CONTENTS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg transition-all text-left ${
                    isActive
                      ? "bg-[#4DB2E0]/10 font-semibold"
                      : "text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  <Icon
                    className={`size-4 shrink-0 ${isActive ? "" : "text-zinc-400"}`}
                  />
                  <span className="flex-1">{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Hero Header Space Content Container */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 md:mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800  leading-none">
            privacy policy
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          This privacy policy outlines how we collect, use, and protect your
        </p>
      </div>

      {/* Core Structural Dynamic Grid Layout Area */}
      <div className="px-6 sm:px-12 py-12">
        <div className="flex gap-12 relative items-start">
          {/* Persistent Floating Desktop Sidebar Viewport Elements */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
            <div className="border border-zinc-300 bg-white p-4 shadow-xs space-y-3">
              <div className="flex items-center gap-2 px-2 text-zinc-400">
                <TbShield className="size-3.5 text-[#000000]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                  Document Navigation
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {TABLE_OF_CONTENTS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-all text-left ${
                        isActive
                          ? "bg-[#0000001f] font-semibold"
                          : "text-zinc-600 hover:bg-zinc-50/80"
                      }`}
                    >
                      <Icon
                        className={`size-4 shrink-0 ${isActive ? "text-[#000000]" : "text-zinc-400"}`}
                      />
                      <span className="flex-1 truncate">{item.title}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Context Node Container Blocks */}
          <main className="flex-1 min-w-0 space-y-20 pb-24">
            {/* Section 1: Who We Are */}
            <section id="who-we-are" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#000000]">
                  <TbBuilding className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  1. Who We Are
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  UpgradeUX is an independent web design and development
                  business operated remotely by Suraj Savle from Mumbai,
                  Maharashtra, India. We provide custom website design, website
                  development, UI/UX design, website redesign, SEO optimization,
                  and related digital services to clients worldwide. This
                  Privacy Policy explains how we collect, use, and protect your
                  information when you use our website or contact us.
                </p>
                <div className="p-5 bg-white rounded-xl border border-zinc-300">
                  <div className="flex items-start gap-3">
                    <div className="text-xs sm:text-sm space-y-1.5">
                      <p className="font-bold text-zinc-900">
                        {COMPANY_INFO.legalName}
                      </p>
                      <p className="text-zinc-500 leading-relaxed whitespace-pre-line">
                        {COMPANY_INFO.address}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-zinc-600 font-medium">
                        <span className="flex items-center gap-1.5">
                          <TbMail className="" />
                          {COMPANY_INFO.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <TbPhone className="" />
                          {COMPANY_INFO.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Data We Collect */}
            <section id="data-collect" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbDatabase className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  2. Data We Collect
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We collect personal data only to the extent necessary to provide
                our services and communicate effectively with prospective and
                active clients. The categories of data we may collect include:
              </p>

              <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-zinc-50/70 border-b border-zinc-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Category
                      </th>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Specific Data Points
                      </th>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-600">
                    {DATA_COLLECT_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/30 transition-colors"
                      >
                        <td className="py-3 px-4 font-semibold text-zinc-800 shrink-0">
                          {row.category}
                        </td>
                        <td className="py-3 px-4 max-w-sm sm:max-w-xs">
                          {row.examples}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50/50 border border-emerald-200/60 rounded-xl flex items-start gap-3">
                <TbCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  <strong>We do not collect or store</strong> sensitive personal
                  data such as government national ID mappings, credentials
                  tokens, biometric systems indicators, or full visual payment
                  card details inside production storage tiers.
                </p>
              </div>
            </section>

            {/* Section 3: How We Collect Data */}
            <section id="how-collect" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbShare className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  3. How We Collect Your Data
                </h2>
              </div>
              <div className="grid gap-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {[
                  {
                    title: "Contact and enquiry forms",
                    desc: "When you submit a form on this website requesting a quote, consultation, or information, we collect the details you provide.",
                  },
                  {
                    title: "WhatsApp and direct communication",
                    desc: "When you contact us via WhatsApp, email, or phone, we retain records of those communications to manage our relationship and project delivery.",
                  },
                  {
                    title: "Website analytics",
                    desc: "When you visit this website, automated tools (such as Google Analytics) may collect technical data including your IP address, device type, browser, and browsing behaviour on our site.",
                  },
                  {
                    title: "Project onboarding",
                    desc: "During the course of a service engagement, you may share additional information necessary for project delivery. This is handled in strict confidence.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-zinc-300 rounded flex items-start gap-3 shadow-2xs"
                  >
                    <p>
                      <strong>{item.title}:</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: How We Use Your Data */}
            <section id="how-use" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbServer className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  4. How We Use Your Data
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We use personal data only for the purposes for which it was
                collected or for compatible purposes you would reasonably
                expect. Specifically, we use your data to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-600">
                {[
                  "Respond to enquiries, provide quotations, and discuss project requirements",
                  "Deliver contracted services — web design, development, marketing, and support",
                  "Manage the client relationship throughout and after a project engagement",
                  "Issue invoices, process payments, and maintain financial records as required by law",
                  "Improve our website and service offerings based on aggregated analytics data",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 px-3 py-2 bg-zinc-200 rounded"
                  >
                    <TbChevronRight className="size-4 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Legal Basis */}
            <section id="legal-basis" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbScale className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  5. Legal Basis for Processing
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Under India&apos;s Digital Personal Data Protection Act, 2023
                (DPDP Act) and applicable data protection principles, we process
                your personal data on the following lawful bases:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-zinc-50/70 border-b border-zinc-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Processing Activity
                      </th>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-600">
                    {[
                      {
                        act: "Responding to enquiries and providing quotations",
                        basis: "Consent; Legitimate interest",
                      },
                      {
                        act: "Delivering contracted services",
                        basis: "Contractual necessity",
                      },
                      {
                        act: "Issuing invoices and maintaining financial records",
                        basis: "Legal obligation",
                      },
                      {
                        act: "Website analytics and performance monitoring",
                        basis: "Legitimate interest; Consent",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/30 transition-colors"
                      >
                        <td className="py-3 px-4 text-zinc-600">{row.act}</td>
                        <td className="py-3 px-4 text-zinc-800 font-medium whitespace-nowrap">
                          {row.basis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Data Sharing */}
            <section id="data-sharing" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbShare className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  6. Data Sharing & Disclosure
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We do not sell, rent, or trade your personal information. Your
                information may be shared only with trusted third-party service
                providers that help us operate our business, such as website
                hosting providers, email delivery services, analytics providers,
                payment processors, or when required by law.
              </p>
            </section>

            {/* Section 7: Cookies */}
            <section id="cookies" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbCookie className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  7. Cookies & Website Tracking
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                <div className="space-y-1">
                  <p>
                    Cookies are small text files placed on your device to help
                    websites run dynamically, optimize user preferences, and
                    process anonymous telemetry indicators.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-white shadow-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-zinc-50/70 border-b border-zinc-200">
                      <tr>
                        <th className="py-3 px-4 font-bold text-zinc-700">
                          Cookie Type
                        </th>
                        <th className="py-3 px-4 font-bold text-zinc-700">
                          Purpose
                        </th>
                        <th className="py-3 px-4 font-bold text-zinc-700">
                          Examples
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {COOKIE_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-zinc-50/30 transition-colors"
                        >
                          <td className="py-3 px-4 font-medium text-zinc-800">
                            {row.type}
                          </td>
                          <td className="py-3 px-4 max-w-xs">
                            {row.description}
                          </td>
                          <td className="py-3 px-4 text-zinc-500 font-mono text-[11px]">
                            {row.examples}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            
            {/* Footer Note */}
            <div className="pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400 space-y-1">
              <p>
                These Privacy Policy were last updated on{" "}
                <strong className="text-zinc-600">
                  1 July 2026
                </strong>
                .
              </p>
              <p>
                By engaging our services or using this website, you confirm that
                you have read, understood, and agree to be bound by these Terms
                in their entirety.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
