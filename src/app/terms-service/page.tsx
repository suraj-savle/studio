"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  TbScale,
  TbMail,
  TbPhone,
  TbBuilding,
  TbFileText,
  TbShield,
  TbGavel,
  TbUserCheck,
  TbRefresh,
  TbExternalLink,
  TbAlertCircle,
  TbCheck,
  TbBook,
  TbMenu,
  TbX,
  TbClock,
  TbLock,
  TbDatabase,
  TbServer,
} from "react-icons/tb";

/* ============================================================================
  Core Datasets
  ============================================================================ */

const COMPANY_INFO = {
  name: "UpgradeUx",
  legalName: "UpgradeUx",
  address: "Navi Mumbai, Maharashtra, India",
  email: "contact@upgradeux.in",
  phone: "+91 8369213418",
  alternative_number: "+91 8369213418",
  website: "https://upgradeux.dev",
  lastUpdated: "1 July 2026",
};

const TABLE_OF_CONTENTS = [
  { id: "definitions", title: "Definitions & Parties", icon: TbFileText },
  { id: "acceptance", title: "Acceptance of Terms", icon: TbCheck },
  { id: "services", title: "Our Services", icon: TbServer },
  { id: "engagement", title: "Project Engagement", icon: TbUserCheck },
  { id: "payment", title: "Payment Terms", icon: TbShield },
  { id: "obligations", title: "Client Obligations", icon: TbLock },
  { id: "ip", title: "Intellectual Property", icon: TbScale },
  { id: "confidentiality", title: "Confidentiality", icon: TbLock },
  { id: "revisions", title: "Revisions & Changes", icon: TbRefresh },
  { id: "timelines", title: "Timelines & Delivery", icon: TbClock },
  { id: "warranties", title: "Warranties & Disclaimers", icon: TbShield },
  { id: "liability", title: "Limitation of Liability", icon: TbGavel },
  { id: "termination", title: "Termination", icon: TbFileText },
  { id: "website-use", title: "Website Use", icon: TbExternalLink },
  { id: "third-party", title: "Third-Party Services", icon: TbDatabase },
  { id: "governing-law", title: "Governing Law", icon: TbGavel },
  { id: "amendments", title: "Amendments", icon: TbRefresh },
  { id: "contact", title: "Contact", icon: TbMail },
];

const DEFINITIONS_TABLE = [
  {
    term: '"Company"',
    definition: `UpgradeUx , a digital agency operating remotely from Mumbai, Maharashtra, India.`,
  },
  {
    term: '"Client"',
    definition:
      "Any individual, business entity, startup, or organisation that engages the Company for any service or uses this website.",
  },
  {
    term: '"Services"',
    definition:
      "All web design, web development, mobile app development, digital marketing, SEO, graphic design, UI/UX design, AI solutions, maintenance, and support services offered by the Company.",
  },
  {
    term: '"Project"',
    definition:
      "A specific, scoped engagement agreed between the Company and the Client, governed by a Proposal, Quotation, or Statement of Work.",
  },
  {
    term: '"Deliverables"',
    definition:
      "All outputs, files, designs, code, reports, and materials produced by the Company for the Client under a Project.",
  },
  {
    term: '"Agreement"',
    definition:
      "These Terms of Service, together with any applicable Proposal, Quotation, or Statement of Work accepted by the Client.",
  },
];

const PAYMENT_TABLE = [
  {
    milestone: "Project Commencement (50% Advance)",
    due: "50% of total project value (advance)",
  },
  {
    milestone: "Design / Midpoint Approval",
    due: "25% of total project value",
  },
  {
    milestone: "Final Delivery / Launch",
    due: "Remaining 25% before final handover",
  },
];

/* ============================================================================
  Component
  ============================================================================ */

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("definitions");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  // Optimized IntersectionObserver configuration
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
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

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-zinc-50/50 text-zinc-900 scroll-smooth">
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

      {/* Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Drawer Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-45 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-24 overflow-y-auto h-full space-y-4">
          <div className="flex items-center gap-2 px-2 text-zinc-400">
            <TbBook className="size-4" />
            <span className="text-xs font-bold tracking-widest">
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

      {/* Hero Header */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 md:md:mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 leading-none">
            terms of service
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Please read these terms carefully before engaging our services or
          using this website.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-12 py-12">
        <div className="flex gap-12 relative items-start">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
            <div className="border border-zinc-300 bg-white p-4 shadow-xs space-y-3">
              <div className="flex items-center gap-2 px-2 text-zinc-400">
                <TbBook className="size-3.5 text-[#000000]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                  table of contents
                </span>
              </div>
              <nav className="space-y-1 max-h-fit overflow-y-auto pr-1">
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

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 space-y-12 pb-24">
            {/* Section 1: Definitions & Parties */}
            <section id="definitions" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#000000]">
                  <TbFileText className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  1. Definitions &amp; Parties
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  For the purposes of these Terms, the following definitions
                  apply:
                </p>

                <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-zinc-50/70 border-b border-zinc-200">
                      <tr>
                        <th className="py-3 px-4 font-bold text-zinc-700 w-1/4">
                          Term
                        </th>
                        <th className="py-3 px-4 font-bold text-zinc-700">
                          Definition
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-zinc-600">
                      {DEFINITIONS_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-zinc-50/30 transition-colors"
                        >
                          <td className="py-3 px-4 font-mono text-sm text-[#000000] align-top whitespace-nowrap">
                            {row.term}
                          </td>
                          <td className="py-3 px-4 text-zinc-600 text-sm leading-relaxed">
                            {row.definition}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbCheck className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  2. Acceptance of Terms
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  These Terms become legally binding upon the earliest of:{" "}
                  <strong>(a)</strong> written acceptance of a Proposal or
                  Quotation; <strong>(b)</strong> payment of any invoice or
                  advance; <strong>(c)</strong> commencement of any project work
                  at the Client&apos;s request; or <strong>(d)</strong>{" "}
                  continued use of this website following notice of any update
                  to these Terms.
                </p>

                <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-3">
                  <TbAlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    <strong>Note:</strong> Verbal instructions or informal
                    messages (WhatsApp, email) requesting the commencement of
                    work constitute acceptance of these Terms and the applicable
                    quoted scope, even in the absence of a signed document.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Our Services */}
            <section id="services" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbServer className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  3. Our Services
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                The Company provides professional digital services including,
                but not limited to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-600">
                {[
                  "Web design and development — custom websites, WordPress, WooCommerce, Shopify, and website redesign",
                  "Application development — MERN Stack, Laravel, mobile applications (iOS, Android, Flutter)",
                  "AI and machine learning solutions — chatbots, automation, predictive analytics, and generative AI integration",
                  "Digital marketing — SEO, AIO/AEO/GEO, Google Ads management, and content strategy",
                  "Design services — UI/UX design, graphic design, branding, and visual identity",
                  "Support and maintenance — website AMC plans, prepaid developer support hours",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 px-3 py-2 bg-zinc-200 rounded"
                  >
                    <TbCheck className="size-4 shrink-0 mt-0.5 text-[#4DB2E0]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Project Engagement */}
            <section id="engagement" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbUserCheck className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  4. Project Engagement &amp; Scope
                </h2>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    4.1 Proposals &amp; Quotations
                  </h4>
                  <p>
                    All Proposals, Quotations, and Statements of Work issued by
                    the Company describe the agreed scope, estimated timeline,
                    pricing, and deliverables for a Project. Unless otherwise
                    stated, quotations remain valid for 30 days and may be
                    revised if the requested scope changes before acceptance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">
                    4.2 Project Commencement
                  </h4>
                  <p>
                    A Project will commence only after the Client has accepted
                    the Proposal or Quotation, paid the required advance
                    payment, and provided all necessary content, access
                    credentials, and other information reasonably required to
                    begin work. Delivery timelines commence from the date these
                    requirements have been fulfilled.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">
                    4.3 Scope of Work
                  </h4>
                  <p>
                    The Company will perform only the services specifically
                    described in the accepted Proposal or Quotation. Any
                    additional functionality, pages, integrations, redesigns,
                    content creation, or other work outside the agreed scope
                    will be treated as a Change Request and may require a
                    revised quotation, additional fees, and an updated delivery
                    timeline.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">
                    4.4 Project Suspension &amp; Abandonment
                  </h4>
                  <p>
                    If the Client fails to provide required content, approvals,
                    feedback, access credentials, or other necessary information
                    for more than
                    <strong> 30 consecutive days</strong>, the Company may
                    suspend the Project and consider it abandoned. Restarting an
                    abandoned Project may require a revised schedule, updated
                    quotation, or reactivation fee. The Company shall not be
                    responsible for delays resulting from the Client&apos;s
                    failure to cooperate.
                  </p>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-3">
                  <TbAlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    <strong>Scope Creep Notice:</strong> Requests that extend
                    the agreed project scope—including additional pages, new
                    features, third-party integrations, major design changes, or
                    revisions beyond those included in the Proposal—will be
                    treated as Change Requests and quoted separately. Approval
                    of such requests may extend the agreed delivery timeline.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Payment Terms */}
            <section id="payment" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbShield className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  5. Payment Terms
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    5.1 Payment Structure
                  </h4>
                  <p className="mb-2">
                    Standard payment terms for project-based engagements are as
                    follows:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead className="bg-zinc-50/70 border-b border-zinc-200">
                        <tr>
                          <th className="py-3 px-4 font-bold text-zinc-700">
                            Milestone
                          </th>
                          <th className="py-3 px-4 font-bold text-zinc-700">
                            Payment Due
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 text-zinc-600">
                        {PAYMENT_TABLE.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-zinc-50/30 transition-colors"
                          >
                            <td className="py-3 px-4 text-zinc-600">
                              {row.milestone}
                            </td>
                            <td className="py-3 px-4 text-zinc-800 font-medium">
                              {row.due}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">
                    For monthly service engagements (SEO, maintenance plans,
                    retainers), payment is due in advance on or before the first
                    day of each billing period.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">
                    5.2 Accepted Payment Methods
                  </h4>
                  <p>
                    The Company accepts payment via bank transfer
                    (NEFT/RTGS/IMPS), UPI, Razorpay (debit/credit card, net
                    banking), or any other method agreed in writing. All amounts
                    are quoted in Indian Rupees (INR) unless explicitly stated
                    otherwise.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">5.3 Taxes</h4>
                  <p>
                    Unless otherwise stated, all prices are quoted in Indian
                    Rupees (INR). If the Company becomes legally required to
                    collect applicable taxes in the future, such taxes may be
                    added to invoices in accordance with applicable law.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">
                    5.4 Late Payment
                  </h4>
                  <p>
                    The Company reserves the right to suspend work on any active
                    project if an invoice remains unpaid beyond 7 days of the
                    due date. Persistent non-payment may result in project
                    termination.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-800">5.5 Refunds</h4>
                  <p>
                    Refunds are governed by the Company&apos;s Refund Policy,
                    which forms part of these Terms of Service. By engaging our
                    services, the Client agrees to the applicable Refund Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    5.6 Failed or Reversed Payments
                  </h4>
                  <p>
                    If any payment is declined, reversed, disputed, or charged
                    back without valid legal grounds, the Company reserves the
                    right to immediately suspend all services, revoke access to
                    deliverables where legally permitted, and recover any
                    outstanding amounts together with applicable collection
                    costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    5.7 Non-Payment Clause
                  </h4>
                  <p>
                    The Company may suspend hosting, maintenance, development,
                    or access to staging environments until overdue invoices are
                    settled.
                  </p>
                  <p>
                    Ownership of deliverables, source code, design files,
                    credentials, and deployment materials transfers only after
                    all outstanding invoices have been paid in full.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Client Obligations */}
            <section id="obligations" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbLock className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  6. Client Obligations
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                The Client warrants that all content, including text, images,
                logos, videos, software, trademarks, and other materials
                supplied to the Company is owned by the Client or properly
                licensed for use. The Company shall not be liable for any claims
                arising from Client-supplied materials.
              </p>
            </section>

            {/* Section 7: Intellectual Property */}
            <section id="ip" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbScale className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  7. Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    7.1 Ownership Upon Full Payment
                  </h4>
                  <p>
                    Upon receipt of full and final payment for a project, all
                    intellectual property rights in the custom deliverables
                    produced specifically for that project — including source
                    code, design files, and written content — are assigned to
                    the Client. Until full payment is received, all deliverables
                    remain the exclusive property of the Company.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    7.2 Company&apos;s Pre-Existing IP
                  </h4>
                  <p>
                    The Company retains all intellectual property rights in
                    pre-existing tools, frameworks, libraries, methodologies,
                    templates, proprietary code components, and development
                    workflows used in the delivery of services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    7.3 Portfolio Rights
                  </h4>
                  <p>
                    Unless otherwise agreed in writing, the Company may identify
                    the Client by name, logo, screenshots, or publicly available
                    materials solely for portfolio and marketing purposes after
                    the Project has been publicly launched.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    7.4 Open-Source Software
                  </h4>
                  <p>
                    Projects may incorporate open-source software, libraries,
                    frameworks, plugins, or publicly available tools that are
                    distributed under their respective licenses. Ownership of
                    such third-party components remains subject to their
                    original license terms and is not transferred by this
                    Agreement.
                  </p>
                </div>
                <div>
                  <p>
                    The Company retains ownership of any reusable components,
                    frameworks, development methodologies, utilities, internal
                    libraries, automation scripts, and know-how created
                    independently of the Client&apos;s Project.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Confidentiality */}
            <section id="confidentiality" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbLock className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  8. Confidentiality
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  Each party agrees to keep confidential information strictly
                  confidential, use it solely for fulfilling obligations under
                  the Agreement, and apply reasonable care to protect it from
                  unauthorised disclosure. This obligation does not apply to
                  information already in the public domain, independently
                  developed, or required to be disclosed by law.
                </p>
                <p>
                  The collection, storage, processing, and protection of
                  personal information are governed by the Company&apos;s
                  Privacy Policy, which forms part of these Terms.
                </p>
                <div className="p-4 bg-zinc-100/70 rounded-xl border border-zinc-200">
                  <p className="text-xs sm:text-sm text-zinc-700">
                    Confidentiality obligations survive the termination of the
                    Agreement for a period of <strong>one (1) year</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Revisions & Changes */}
            <section id="revisions" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbRefresh className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  9. Revisions &amp; Change Requests
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    9.1 Included Revisions
                  </h4>
                  <p>
                    The number of revision rounds included in a project is
                    specified in the relevant Proposal or Quotation. A revision
                    round refers to a single consolidated set of feedback
                    submitted by the Client.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    9.2 Additional Revisions
                  </h4>
                  <p>
                    the total amount paid by the Client for the specific Project
                    giving rise to the claim.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    9.3 Change Requests
                  </h4>
                  <p>
                    Any request by the Client to add features, expand scope, or
                    otherwise modify the project beyond the accepted Proposal is
                    considered a Change Request. The Company will assess Change
                    Requests within 3 business days with a revised time and cost
                    estimate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    9.4 Approval of Deliverables
                  </h4>
                  <p>
                    The Client agrees to review submitted deliverables promptly.
                    If no feedback, revision request, or approval is received
                    within 7 business days, the submitted deliverable shall be
                    deemed approved, and the Project may proceed to the next
                    milestone.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Timelines & Delivery */}
            <section id="timelines" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbClock className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  10. Timelines &amp; Delivery
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  Estimated timelines provided in Proposals are good-faith
                  estimates based on the information available at the time of
                  quoting. The Company will make reasonable efforts to meet
                  agreed timelines.
                </p>
                <p>
                  Delays caused by the Client automatically extend delivery
                  timelines by at least the duration of the delay and may
                  require project rescheduling.
                </p>
                <div className="p-4 bg-zinc-100/70 rounded-xl border border-zinc-200">
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong>Note:</strong> Timelines are calculated from the
                    project kickoff date — defined as the date by which the
                    advance payment has been received and all required kickoff
                    materials have been provided by the Client.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Warranties */}
            <section id="warranties" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbShield className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  11. Warranties &amp; Disclaimers
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    11.1 Company Warranties
                  </h4>
                  <p>
                    The Company warrants that services will be performed with
                    reasonable care and skill, deliverables will substantially
                    conform to the agreed specification, and the Company has the
                    right to provide the services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    11.2 No Guarantee of Specific Outcomes
                  </h4>
                  <p>
                    The Company does not warrant or guarantee specific business
                    outcomes including search engine rankings, website traffic,
                    conversion rates, or return on investment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    11.3 Warranty Period
                  </h4>
                  <p>
                    Unless otherwise agreed in writing, the Company provides a
                    30-day limited warranty following final delivery to correct
                    bugs directly related to the originally agreed scope.
                  </p>
                  <p>The warranty does not cover:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>new features</li>
                    <li>browser updates</li>
                    <li>third-party plugins</li>
                    <li>hosting</li>
                    <li>client modifications</li>
                    <li>server issues</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 font-medium">
                  <p>
                    Websites are tested against the latest stable versions of
                    Chrome, Edge, Firefox, and Safari. Compatibility with
                    outdated browsers is not guaranteed unless agreed in
                    writing.
                  </p>
                  <p>
                    Unless expressly included in the Proposal, the Company is
                    not responsible for hosting administration, server
                    maintenance, email delivery, domain renewal, SSL certificate
                    renewal, DNS configuration, backups, or third-party
                    infrastructure.
                  </p>
                  <p>
                    Neither party shall be liable for delays or failure to
                    perform obligations caused by events beyond reasonable
                    control, including natural disasters, internet outages,
                    cyberattacks, government restrictions, labor disputes,
                    pandemics, or failures of third-party infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Liability */}
            <section id="liability" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbGavel className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  12. Limitation of Liability
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-3">
                  <TbAlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    <strong>Please read this section carefully.</strong> It
                    limits the Company&apos;s liability to the Client.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  To the maximum extent permitted by applicable law, the
                  Company&apos;s total aggregate liability shall not exceed the
                  total fees paid by the Client under the specific project in
                  the 3 months preceding the event. The Company shall not be
                  liable for any loss of profit, revenue, business, data, or any
                  indirect, consequential, or special damages.
                </p>
              </div>
            </section>

            {/* Section 13: Termination */}
            <section id="termination" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbFileText className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  13. Termination
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    13.1 Termination by the Client
                  </h4>
                  <p>
                    The Client may terminate by providing written notice, paying
                    for all work completed up to the date of termination.
                    Advance payments are non-refundable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    13.2 Termination by the Company
                  </h4>
                  <p>
                    The Company may terminate with immediate effect if the
                    Client fails to make payment, engages in abusive conduct, or
                    requests unlawful deliverables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    13.3 Monthly Service Cancellation
                  </h4>
                  <p>
                    Monthly service engagements may be cancelled by either party
                    with a minimum of 30 days written notice prior to the next
                    billing date. No partial refunds are issued for
                    cancellations mid-billing period.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 14: Website Use */}
            <section id="website-use" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbExternalLink className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  14. Use of This Website
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  You may access and use this website for lawful purposes only.
                  You agree not to use this website in any way that violates
                  applicable law, is fraudulent or harmful, or attempts to gain
                  unauthorised access.
                </p>
                <div className="p-4 bg-zinc-100/70 rounded-xl border border-zinc-200">
                  <p className="text-xs sm:text-sm text-zinc-700">
                    While the Company endeavours to keep information accurate,
                    we make no warranty regarding completeness or accuracy.
                    Pricing, service descriptions, and availability are subject
                    to change without notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 15: Third-Party Services */}
            <section id="third-party" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbDatabase className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  15. Third-Party Services &amp; Costs
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                The Company is not responsible for downtime, service
                interruptions, policy changes, pricing changes, or failures of
                third-party providers including hosting companies, payment
                gateways, APIs, plugins, and cloud services.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Certain projects require the use of third-party services. Unless
                explicitly included in the quoted price, the following are the
                Client&apos;s responsibility:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-600">
                {[
                  "Domain registration and renewal — annual domain costs payable directly to the registrar",
                  "Web hosting — server or hosting subscription costs",
                  "Software licences — premium plugins, themes, SaaS tools, or platform subscriptions",
                  "API usage fees — costs arising from usage of third-party APIs beyond any free tier",
                  "Stock assets — licensed stock photography, fonts, or illustration packs",
                  "App Store fees — Apple Developer Programme and Google Play Console registration fees",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 px-3 py-2 bg-zinc-200 rounded"
                  >
                    <TbCheck className="size-4 shrink-0 mt-0.5 text-[#4DB2E0]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 16: Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbGavel className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  16. Governing Law &amp; Dispute Resolution
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    16.1 Governing Law
                  </h4>
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of India.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    16.2 Jurisdiction
                  </h4>
                  <p>
                    Any dispute shall be subject to the exclusive jurisdiction
                    of the courts of Mumbai, Maharashtra, India.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    16.3 Dispute Resolution Process
                  </h4>
                  <p>
                    The parties agree to first attempt to resolve disputes
                    amicably through direct negotiation. If a dispute cannot be
                    resolved within 30 days, either party may pursue formal
                    legal remedies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 17: Amendments */}
            <section id="amendments" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbRefresh className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  17. Amendments to These Terms
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                <p>
                  The Company reserves the right to update or modify these Terms
                  at any time. When material changes are made, the updated Terms
                  will be published with a revised Last Updated date. Continued
                  use of this website or continuation of an active service
                  engagement following the posting of updated Terms is
                  considered acceptance of those changes.
                </p>
              </div>
            </section>

            {/* Section 18: Contact */}
            <section id="contact" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg">
                  <TbMail className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  18. Contact &amp; Legal Notices
                </h2>
              </div>
              <div className="text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
                <p>
                  All legal notices, queries regarding these Terms, or formal
                  communications should be addressed to:
                </p>
                <div className="p-5 bg-white rounded-xl border border-zinc-300">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <TbBuilding className="size-4 text-zinc-400 mt-0.5" />
                      <div>
                        <span className="font-medium text-zinc-800">
                          {COMPANY_INFO.legalName}
                        </span>
                        <span className="block text-zinc-500">
                          {COMPANY_INFO.address}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TbMail className="size-4 text-zinc-400 mt-0.5" />
                      <span className="text-[#000000]">
                        {COMPANY_INFO.email}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <TbPhone className="size-4 text-zinc-400 mt-0.5" />
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="text-[#000000] hover:text-[#3fa1cc] transition-colors block"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                        <a
                          href={`tel:${COMPANY_INFO.alternative_number}`}
                          className="text-[#000000] hover:text-[#3fa1cc] transition-colors block"
                        >
                          {COMPANY_INFO.alternative_number}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-400">
                  We will make reasonable efforts to respond to legal notices
                  and contractual enquiries within five (5) business days.
                </p>
              </div>
            </section>

            {/* Footer Note */}
            <div className="pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400 space-y-1">
              <p>
                These Terms were last updated on{" "}
                <strong className="text-zinc-600">6 July 2026</strong>.
              </p>
              <p>
                By accessing this website or engaging our services, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
