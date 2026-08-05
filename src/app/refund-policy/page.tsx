"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  TbChevronRight,
  TbWallet,
  TbClock,
  TbPhone,
  TbMail,
  TbMapPin,
  TbFileText,
  TbReceipt,
  TbCreditCard,
  TbAlertCircle,
  TbRefresh,
  TbMenu,
  TbX as TbClose,
  TbInfoCircle,
  TbClockHour2,
  TbCash,
  TbBusinessplan,
  TbTransactionEuro,
} from "react-icons/tb";

/* ============================================================================
  Refund Policy Datasets
  ============================================================================ */

const COMPANY_INFO = {
  name: "upgradeux",
  legalName: "upgradeux",
  address: "Navi Mumbai, Maharashtra, India",
  email: "support@upgradeux.in",
  phone: "+91 8369213418",
  alternatePhone: "+91 8369213418",
  whatsapp: "8369213418",
};

const TABLE_OF_CONTENTS = [
  { id: "overview", title: "Overview", icon: TbInfoCircle },
  { id: "advance-payments", title: "Advance Payments", icon: TbCash },
  { id: "project-services", title: "Project-Based Services", icon: TbFileText },
  { id: "subscriptions", title: "Monthly Subscriptions", icon: TbBusinessplan },
  { id: "prepaid-hours", title: "Prepaid Support Hours", icon: TbClockHour2 },
  {
    id: "refund-may-apply",
    title: "When Refunds May Apply",
    icon: TbInfoCircle,
  },
  { id: "refund-not-issued", title: "Refunds We Do Not Issue", icon: TbClose },
  { id: "refund-process", title: "Refund Process", icon: TbRefresh },
  { id: "refund-timelines", title: "Refund Timelines", icon: TbClock },
  {
    id: "payment-disputes",
    title: "Payment Disputes",
    icon: TbTransactionEuro,
  },
  { id: "chargebacks", title: "Chargebacks", icon: TbCreditCard },
  { id: "Project-Abandonment", title: "Project Abandonment", icon: TbReceipt },
  {
    id: "Intellectual-Property",
    title: "Intellectual-Property",
    icon: TbFileText,
  },
  { id: "contact", title: "Contact Us", icon: TbPhone },
];

const REFUND_AT_A_GLANCE = [
  {
    icon: TbInfoCircle,
    title: "Refunds May Be Approved If",
    items: [
      "The Company is unable to deliver the agreed scope due to its own fault.",
      "The project is cancelled by the Company without a valid reason.",
      "A duplicate or incorrect payment was made.",
      "A recurring subscription is cancelled before any work begins for the current billing cycle.",
    ],
    bgClass: "bg-emerald-50 border-emerald-200",
    textClass: "text-emerald-700",
    iconClass: "text-emerald-600",
  },
  {
    icon: TbClose,
    title: "Refunds Will Not Be Issued If",
    items: [
      "Work has already started after the advance payment was received.",
      "The client cancels the project after work has commenced.",
      "Project delays are caused by the client or missing requirements.",
      "Deliverables have been reviewed, approved, or accepted by the client.",
      "The request is based solely on personal preference after approval.",
      "Prepaid support hours or consultation time have already been used.",
    ],
    bgClass: "bg-red-50 border-red-200",
    textClass: "text-red-700",
    iconClass: "text-red-600",
  },
];

const PROJECT_REFUND_TABLE = [
  {
    stage: "Before advance payment received — project not started",
    eligibility: "N/A — no payment taken",
  },
  {
    stage: "After advance paid, before any work commenced",
    eligibility:
      "Refund requests are reviewed individually. Any approved refund will be reduced by work completed, administrative costs, and applicable transaction fees.",
  },
  {
    stage: "After project kickoff and discovery commenced",
    eligibility: "Advance non-refundable; payment for work done is due",
  },
  {
    stage: "During active development (mid-project)",
    eligibility: "No refund — payment for completed milestones is due",
  },
  {
    stage: "After final delivery and client approval",
    eligibility: "No refund — work is complete and accepted",
  },
  {
    stage: "Company fails to deliver agreed scope (Company's default)",
    eligibility: "Proportionate refund for undelivered work",
  },
];

const REFUND_TIMELINES = [
  {
    method: "UPI / IMPS / NEFT bank transfer",
    timeline: "3–5 business days from approval",
  },
  {
    method: "Razorpay — debit card",
    timeline: "5–7 business days (subject to bank processing)",
  },
  {
    method: "Razorpay — credit card",
    timeline: "5–10 business days (reflected in next statement cycle)",
  },
  { method: "Razorpay — net banking", timeline: "3–7 business days" },
  { method: "RTGS / bank wire", timeline: "1–3 business days from initiation" },
];

/* ============================================================================
  Component Render Layer
  ============================================================================ */

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = TABLE_OF_CONTENTS.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className="w-full min-h-screen font-sans antialiased scroll-smooth">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-zinc-700 text-white rounded-full shadow-xl border border-sky-400/20 hover:bg-[#3ba5d4] transition-all"
          aria-label="Toggle Navigation Table of Contents"
        >
          {isMobileMenuOpen ? (
            <TbClose className="w-6 h-6" />
          ) : (
            <TbMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Navigation */}
      <div
        className={`
        lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-45 shadow-2xl transition-transform duration-300 ease-in-out transform
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-4 pt-12 overflow-y-auto h-full">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-zinc-100">
            <TbWallet className="w-5 h-5 " />
            <span className="text-sm font-bold uppercase tracking-wider text-zinc-700">
              Policy Contents
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
                  aria-label={item.title}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm transition-all text-left
                    ${
                      isActive
                        ? "bg-zinc-100  font-semibold"
                        : "text-zinc-600 hover:bg-zinc-50"
                    }
                  `}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "" : "text-zinc-400"}`}
                  />
                  <span className="flex-1 text-xs ">{item.title}</span>
                  {isActive && <TbChevronRight className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Editorial Header Section */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none">
            Refund Policy
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          We aim to be transparent, baseline operations fairly, and resolve
          financial matters with absolute clarity. This policy clarifies
          processing logic across our service layers.
        </p>
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="px-6 sm:px-12 py-12 lg:py-16">
        <div className="flex gap-12 lg:gap-16">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <div className="border border-zinc-200/60 shadow-sm p-4">
                <div className="flex items-center gap-2 px-3 py-2 mb-2 border-b border-zinc-100">
                  <TbWallet className="w-4 h-4 " />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Contents
                  </span>
                </div>
                <nav className="space-y-0.5 max-h-fit overflow-y-auto pr-1">
                  {TABLE_OF_CONTENTS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        aria-label={item.title}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-all text-left
                          ${
                            isActive
                              ? "bg-[#0005081a] font-semibold"
                              : "text-zinc-600 hover:bg-zinc-50"
                          }
                        `}
                      >
                        <Icon
                          className={`w-4 h-4 shrink-0 ${isActive ? "" : "text-zinc-400"}`}
                        />
                        <span className="flex-1 text-xs">{item.title}</span>
                        {isActive && (
                          <div className="w-1 h-4 bg-[#000000] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-16 pb-12">
            {/* At a Glance Framework blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REFUND_AT_A_GLANCE.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border ${section.bgClass} transition-all duration-300 hover:shadow-sm`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className={`w-5 h-5 ${section.iconClass}`} />
                      <h3 className="text-sm font-bold text-zinc-800">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs leading-relaxed text-zinc-600"
                        >
                          <span
                            className={`text-base leading-none ${section.iconClass}`}
                          >
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Section 1: Overview */}
            <div id="overview" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbInfoCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  1. Overview
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Because every project is custom-built, significant planning,
                  design, development, and resource allocation begin shortly
                  after payment is received. This Refund Policy explains when
                  refunds may or may not be available.
                </p>
                <p>
                  By making a payment for any of our services, you acknowledge
                  and agree to the refund conditions described below.
                </p>
              </div>
            </div>

            {/* Section 2: Advance Payments */}
            <div id="advance-payments" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbCash className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  2. Advance Payments
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Most projects require an advance payment before work begins.
                  This payment allows us to allocate our team, schedule project
                  resources, conduct research, and start development.
                </p>
                <p>
                  If no work has started, a partial refund may be considered at
                  our discretion after deducting any administrative or
                  transaction charges.
                </p>
                <p>
                  Administrative deductions may include payment gateway charges,
                  banking fees, currency conversion fees (if applicable), and
                  work already completed.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <TbAlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Once work has commenced, the advance payment becomes
                    non-refundable, as resources have already been committed to
                    your project.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Project-Based Services */}
            <div id="project-services" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbFileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  3. Project-Based Services
                </h2>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Refund eligibility depends on the stage of the project at the
                time of cancellation. Any completed work, approved milestones,
                or delivered services remain payable, even if the project is
                cancelled before completion.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                If the Company is unable to deliver the agreed scope due to its
                own fault, a proportionate refund may be issued for the
                unfinished portion of the project.
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60 shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-700 font-bold">
                    <tr>
                      <th className="py-3.5 px-4">Stage at Cancellation</th>
                      <th className="py-3.5 px-4">Refund Eligibility Matrix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-600">
                    {PROJECT_REFUND_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/40 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-medium text-zinc-800">
                          {row.stage}
                        </td>
                        <td className="py-3.5 px-4">{row.eligibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Monthly Subscriptions */}
            <div id="subscriptions" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbBusinessplan className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  4. Monthly Subscriptions
                </h2>
              </div>
              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Monthly maintenance plans, SEO services, AMC contracts, and
                  other recurring services are billed in advance.
                </p>
                <ul className="space-y-2 pl-4 list-disc text-xs text-zinc-500">
                  <li>
                    <strong>30-Day Notice Framework:</strong> Subscriptions may
                    be cancelled by providing at least 30 days written notice
                    before the next billing cycle.
                  </li>
                  <li>
                    <strong>Mid-Cycle Cancellations:</strong> Payments already
                    made for the current billing period are non-refundable, and
                    services will continue until the end of the paid term.
                  </li>
                  <li>
                    Failure to cancel before the next billing cycle may result
                    in automatic renewal where applicable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Prepaid Support Hours */}
            <div id="prepaid-hours" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbClockHour2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  5. Prepaid Support Hours
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Prepaid support hours remain valid until they are fully used,
                  unless otherwise agreed in writing.
                </p>
                <p>
                  Hours already utilized are non-refundable. Refund requests for
                  unused hours may be reviewed on a case-by-case basis, after
                  deducting any applicable administrative charges.
                </p>
              </div>
            </div>

            {/* Section 6: When Refunds May Apply */}
            <div id="refund-may-apply" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbInfoCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  6. When Refunds May Apply
                </h2>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Refund requests may be approved under the following
                circumstances:
              </p>
              <ul className="space-y-2 text-xs text-zinc-600 pl-4 list-disc">
                <li>Duplicate payments made by mistake.</li>
                <li>The Company cancels the project without a valid reason.</li>
                <li>
                  The Company fails to deliver the agreed scope due to its own
                  fault.
                </li>
                <li>A refund is otherwise required by applicable law.</li>
              </ul>
            </div>

            {/* Section 7: Refunds We Do Not Issue */}
            <div id="refund-not-issued" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-red-500">
                  <TbClose className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  7. Refunds We Do Not Issue
                </h2>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Refunds will generally not be issued in the following
                situations:
              </p>
              <ul className="space-y-2 text-xs text-zinc-600 pl-4 list-disc">
                <li>
                  Work has already commenced after receiving the advance
                  payment.
                </li>
                <li>
                  The client changes their mind after the project has started.
                </li>
                <li>Delays or additional work caused by the client.</li>
                <li>Approved designs or completed deliverables.</li>
                <li>
                  Dissatisfaction based solely on personal preference after
                  approval.
                </li>
                <li>
                  Third-party services such as domains, hosting, SSL
                  certificates, software licenses, premium plugins, themes,
                  APIs, advertising costs, or similar purchases.
                </li>
              </ul>
            </div>

            {/* Section 8: Refund Process */}
            <div id="refund-process" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbRefresh className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  8. Refund Process
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  To request a refund, please email us with your invoice number,
                  payment details, and the reason for your request.{" "}
                  <code className="bg-zinc-100  px-1.5 py-0.5 rounded text-xs font-mono">
                    {COMPANY_INFO.email}
                  </code>
                  . Our team will review your request within 7 business days and
                  may contact you if additional information is required.
                </p>
                <p>
                  If approved, the refund will be processed using the original
                  payment method wherever possible.
                </p>
              </div>
            </div>

            {/* Section 9: Refund Timelines */}
            <div id="refund-timelines" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbClock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  9. Refund Timelines
                </h2>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Once a refund has been approved, processing times depend on your
                payment method and financial institution. While we initiate
                refunds promptly, the actual credit may vary depending on your
                bank or payment provider.
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60 shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-700 font-bold">
                    <tr>
                      <th className="py-3 px-4">Payment Method</th>
                      <th className="py-3 px-4">Estimated Processing Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-600">
                    {REFUND_TIMELINES.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/40 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-zinc-800">
                          {row.method}
                        </td>
                        <td className="py-3 px-4">{row.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 10: Payment Disputes */}
            <div id="payment-disputes" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbTransactionEuro className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  10. Payment Disputes
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  If you believe there has been a billing error, please contact
                  us within 14 calendar days of the payment date.
                </p>
                <p>
                  We encourage clients to contact us first so that any issues
                  can be resolved quickly before initiating a dispute with the
                  payment provider.
                </p>
              </div>
            </div>

            {/* Section 11: Chargebacks */}
            <div id="chargebacks" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbCreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  11. Chargebacks
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  If a chargeback is initiated without first contacting us to
                  resolve the issue, we reserve the right to suspend or
                  terminate all ongoing services while the dispute is under
                  review.
                </p>
                <p>
                  We may provide invoices, communication records, project files,
                  and delivery evidence to the payment provider as part of the
                  chargeback investigation.
                </p>
                <p>
                  If a chargeback is resolved in the Company&apos;s favor, the
                  Client remains responsible for any outstanding balances,
                  chargeback fees, legal costs (where applicable), and unpaid
                  invoices.
                </p>
              </div>
            </div>

            <div id="Project-Abandonment" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbCreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  12. Project Abandonment
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  If the client remains unresponsive for more than 45
                  consecutive days without a valid reason, the project may be
                  considered abandoned.
                </p>
                <p>
                  Any payments made before the project is abandoned are
                  non-refundable. Resuming the project may require a new
                  timeline, revised quotation, or additional fees.
                </p>
              </div>
            </div>

            <div id="Intellectual-Property" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbFileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  13. Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Until all outstanding payments have been received in full, all
                  project files, source code, designs, documents, and related
                  intellectual property remain the property of the Company.
                </p>
                <p>
                  Ownership will be transferred to the client only after full
                  payment has been completed, unless otherwise agreed in
                  writing.
                </p>
              </div>
            </div>

            {/* Section 14: Contact Us */}
            <div id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg ">
                  <TbPhone className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  14. Contact Us
                </h2>
              </div>
              <div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-600">
                  {/* Left Side: Corporate Identity & Address Card */}
                  <div className="p-5 rounded-xl border border-zinc-200/50 bg-linear-to-br from-white to-zinc-50/50 space-y-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-100 mt-0.5">
                        <TbReceipt className="w-4 h-4 shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-800 text-sm tracking-tight leading-tight">
                          {COMPANY_INFO.name}
                        </h4>
                        <p className="text-zinc-400 font-medium mt-0.5">
                          Legal Entity:{" "}
                          <span className="text-zinc-500 font-semibold">
                            {COMPANY_INFO.legalName}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-zinc-200/60" />

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-100 text-zinc-400 mt-0.5">
                        <TbMapPin className="w-4 h-4 shrink-0 text-zinc-500" />
                      </div>
                      <p className="leading-relaxed text-zinc-600 font-medium pt-1">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Communication Channels Card */}
                  <div className="p-5 rounded-xl border border-zinc-200/50 bg-linear-to-br from-white to-zinc-50/50 flex flex-col justify-between gap-3.5 shadow-sm">
                    <div className="space-y-2.5">
                      {/* Primary Email */}
                      <div className="flex items-center gap-3 group">
                        <div className="p-2 rounded-lg transition-colors duration-200 bg-zinc-100">
                          <TbMail className="w-4 h-4 shrink-0" />
                        </div>
                        <span className="text-zinc-700 font-semibold break-all">
                          {COMPANY_INFO.email}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-zinc-200/60" />

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-100">
                        <TbPhone className="w-4 h-4 shrink-0 " />
                      </div>
                      <div className="flex flex-col gap-1 font-semibold text-zinc-700 pt-0.5">
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="hover:text-[#4DB2E0] transition-colors"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400 space-y-1">
              <p>
                These Refund Policy were last updated on{" "}
                <strong className="text-zinc-600">6 July 2026</strong>.
              </p>
              <p>
                By purchasing or using our services, you acknowledge that you
                have read, understood, and agree to this Refund Policy.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
