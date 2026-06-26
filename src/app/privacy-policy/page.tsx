"use client";
import React, { useState, useEffect } from "react";
import {
  TbShield,
  TbLock,
  TbUser,
  TbMail,
  TbPhone,
  TbMapPin,
  TbBuilding,
  TbCookie,
  TbDatabase,
  TbShare,
  TbClock,
  TbCheck,
  TbChevronRight,
  TbServer,
  TbGlobe,
  TbScale,
  TbCalendarEvent,
  TbUsers,
  TbMenu,
  TbX,
} from "react-icons/tb";

/* ============================================================================
  Core Datasets
  ============================================================================ */

const COMPANY_INFO = {
  name: "WebCraft India",
  legalName: "WebCraft India Pvt. Ltd.",
  address:
    "B-204, Techno Park, SV Road, Andheri East, Mumbai – 400093, Maharashtra, India",
  email: "info@webcraftindia.com",
  phone: "9876543210",
  alternatePhone: "9876543211",
  gst: "27AABCW1234D1ZP",
  established: "2018",
};

const TABLE_OF_CONTENTS = [
  { id: "who-we-are", title: "Who We Are", icon: TbBuilding },
  { id: "data-collect", title: "Data We Collect", icon: TbDatabase },
  { id: "how-collect", title: "How We Collect Data", icon: TbShare },
  { id: "how-use", title: "How We Use Your Data", icon: TbServer },
  { id: "legal-basis", title: "Legal Basis", icon: TbScale },
  { id: "data-sharing", title: "Data Sharing", icon: TbShare },
  { id: "cookies", title: "Cookies & Tracking", icon: TbCookie },
  { id: "data-retention", title: "Data Retention", icon: TbClock },
  { id: "data-security", title: "Data Security", icon: TbLock },
  { id: "your-rights", title: "Your Rights", icon: TbUser },
  { id: "third-party", title: "Third-Party Links", icon: TbGlobe },
  { id: "children", title: "Children's Privacy", icon: TbUsers },
  { id: "updates", title: "Policy Updates", icon: TbCalendarEvent },
  { id: "contact", title: "Contact Us", icon: TbPhone },
];

const DATA_COLLECT_TABLE = [
  {
    category: "Identity Data",
    examples: "Full name, business name, job title, company role",
    source: "Contact forms, direct communication",
  },
  {
    category: "Contact Data",
    examples: "Email address, phone number, WhatsApp number, mailing address",
    source: "Contact forms, enquiry messages",
  },
  {
    category: "Project Data",
    examples:
      "Project briefs, requirements, business descriptions, budget range",
    source: "Contact forms, proposals, direct email",
  },
  {
    category: "Communication Data",
    examples: "Email correspondence, WhatsApp messages, call records",
    source: "Direct communication",
  },
  {
    category: "Technical Data",
    examples:
      "IP address, browser type, device type, pages visited, time on site",
    source: "Website analytics tools",
  },
  {
    category: "Financial Data",
    examples: "Invoice and payment records (not card or bank details)",
    source: "Payment transactions",
  },
];

const COOKIE_TABLE = [
  {
    type: "Essential",
    description: "Required for the website to function. Cannot be disabled.",
    examples: "Session management, security tokens",
  },
  {
    type: "Analytics",
    description: "Track visitor behaviour to help us improve the website.",
    examples: "Google Analytics (_ga, _gid)",
  },
  {
    type: "Preference",
    description: "Remember settings or choices you have made on the site.",
    examples: "Language preference, form state",
  },
];

const RETENTION_TABLE = [
  {
    category: "Enquiry and pre-sales communication",
    period: "2 years from last contact, or until you request deletion",
  },
  {
    category: "Active client project data and correspondence",
    period: "Duration of project + 3 years",
  },
  {
    category: "Invoices and financial records",
    period: "7 years (as required by Indian accounting and tax law)",
  },
  {
    category: "Website analytics data",
    period: "26 months (Google Analytics default)",
  },
  {
    category: "Support and maintenance records",
    period: "Duration of engagement + 2 years",
  },
];

/* ============================================================================
  Component
  ============================================================================ */

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("who-we-are");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = TABLE_OF_CONTENTS.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-linear-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-white rounded-xl shadow-lg border border-zinc-200/60 hover:shadow-xl transition-all"
        >
          {isMobileMenuOpen ? (
            <TbX className="size-5 text-zinc-700" />
          ) : (
            <TbMenu className="size-5 text-zinc-700" />
          )}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
        lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-45 shadow-2xl transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-6 pt-20 overflow-y-auto h-full">
          <div className="flex items-center gap-2 mb-6">
            <TbShield className="size-5 text-[#4DB2E0]" />
            <span className="text-sm font-bold uppercase tracking-wider text-zinc-700">
              Contents
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
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all text-left
                    ${
                      isActive
                        ? "bg-[#4DB2E0]/10 text-[#4DB2E0] font-semibold"
                        : "text-zinc-600 hover:bg-zinc-50"
                    }
                  `}
                >
                  <Icon
                    className={`size-4 ${isActive ? "text-[#4DB2E0]" : "text-zinc-400"}`}
                  />
                  <span className="flex-1">{item.title}</span>
                  {isActive && <TbChevronRight className="size-3.5" />}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none">
            Privacy Policy
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          We are committed to protecting your personal information and handling
          it with transparency and care. This policy explains what data we
          collect, why we collect it, and how it is used and protected.
        </p>
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="px-6 md:px-12 py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <div className="border border-zinc-200/60 shadow-sm p-4">
                <div className="flex items-center gap-2 px-3 py-2 mb-2">
                  <TbShield className="size-4 text-[#4DB2E0]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Contents
                  </span>
                </div>
                <nav className="space-y-0.5 max-h-[calc(100vh-240px)] overflow-y-auto pr-1 custom-scrollbar">
                  {TABLE_OF_CONTENTS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 text-sm rounded transition-all text-left
                          ${
                            isActive
                              ? "bg-[#4DB2E0]/10 text-[#4DB2E0] font-semibold shadow-sm"
                              : "text-zinc-600 hover:bg-zinc-50"
                          }
                        `}
                      >
                        <Icon
                          className={`size-4 shrink-0 ${isActive ? "text-[#4DB2E0]" : "text-zinc-400"}`}
                        />
                        <span className="flex-1 text-xs">{item.title}</span>
                        {isActive && (
                          <div className="w-1 h-6 bg-[#4DB2E0] rounded-full" />
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
            {/* Section 1: Who We Are */}
            <div id="who-we-are" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbBuilding className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  1. Who We Are
                </h2>
              </div>
              <div className="prose prose-zinc max-w-none">
                <p className="text-zinc-600 leading-relaxed">
                  <strong>{COMPANY_INFO.name}</strong> is a professional web
                  design, development, and digital marketing services brand
                  operated by <strong>{COMPANY_INFO.legalName}</strong>,
                  registered and operating from:
                </p>
                <div className="mt-4 p-6 bg-zinc-50 rounded-xl border border-zinc-200/60">
                  <div className="flex items-start gap-3">
                    <TbMapPin className="size-5 text-zinc-400 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-zinc-900">
                        {COMPANY_INFO.legalName}
                      </p>
                      <p className="text-zinc-600 whitespace-pre-line">
                        {COMPANY_INFO.address}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-4 text-zinc-600">
                        <span className="flex items-center gap-1.5">
                          <TbMail className="text-[#4DB2E0]" />
                          {COMPANY_INFO.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <TbPhone className="text-[#4DB2E0]" />
                          {COMPANY_INFO.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-zinc-600 leading-relaxed">
                  We act as the data controller in respect of personal data
                  collected through this website and service interactions. If
                  you have any questions about how your data is handled, please
                  contact us using the details above.
                </p>
              </div>
            </div>

            {/* Section 2: Data We Collect */}
            <div id="data-collect" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbDatabase className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  2. Data We Collect
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We collect personal data only to the extent necessary to provide
                our services and communicate effectively with prospective and
                active clients. The categories of data we may collect include:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
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
                  <tbody className="divide-y divide-zinc-100">
                    {DATA_COLLECT_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/50 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-zinc-800">
                          {row.category}
                        </td>
                        <td className="py-3 px-4 text-zinc-600">
                          {row.examples}
                        </td>
                        <td className="py-3 px-4 text-zinc-600">
                          {row.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <TbCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800">
                  <strong>We do not collect or store</strong> sensitive personal
                  data such as Aadhaar numbers, PAN numbers, passwords,
                  biometric data, or payment card details.
                </p>
              </div>
            </div>

            {/* Section 3: How We Collect Data */}
            <div id="how-collect" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbShare className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  3. How We Collect Your Data
                </h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-[#4DB2E0] font-bold text-sm">•</span>
                  <p>
                    <strong>Contact and enquiry forms:</strong> When you submit
                    a form on this website requesting a quote, consultation, or
                    information, we collect the details you provide.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4DB2E0] font-bold text-sm">•</span>
                  <p>
                    <strong>WhatsApp and direct communication:</strong> When you
                    contact us via WhatsApp, email, or phone, we retain records
                    of those communications to manage our relationship and
                    project delivery.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4DB2E0] font-bold text-sm">•</span>
                  <p>
                    <strong>Website analytics:</strong> When you visit this
                    website, automated tools (such as Google Analytics) may
                    collect technical data including your IP address, device
                    type, browser, and browsing behaviour on our site.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4DB2E0] font-bold text-sm">•</span>
                  <p>
                    <strong>Project onboarding:</strong> During the course of a
                    service engagement, you may share additional information
                    necessary for project delivery. This is handled in strict
                    confidence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4DB2E0] font-bold text-sm">•</span>
                  <p>
                    <strong>Referrals and networking:</strong> Occasionally,
                    your contact details may be shared with us by a mutual
                    contact or referral. We will inform you of this at the first
                    point of direct contact.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: How We Use Your Data */}
            <div id="how-use" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbServer className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  4. How We Use Your Data
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We use personal data only for the purposes for which it was
                collected or for compatible purposes you would reasonably
                expect. Specifically, we use your data to:
              </p>
              <ul className="space-y-2 text-zinc-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Respond to enquiries, provide quotations, and discuss project
                  requirements
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Deliver contracted services — web design, development,
                  marketing, and support
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Manage the client relationship throughout and after a project
                  engagement
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Issue invoices, process payments, and maintain financial
                  records as required by law
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Send service-related updates, project status communications,
                  and post-project support
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Improve our website and service offerings based on aggregated
                  analytics data
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  Comply with applicable legal, regulatory, and tax obligations
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
                <TbShield className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  <strong>We do not</strong> use your personal data to send
                  unsolicited marketing emails, sell or rent your data to third
                  parties, or use it for automated decision-making.
                </p>
              </div>
            </div>

            {/* Section 5: Legal Basis */}
            <div id="legal-basis" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbScale className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  5. Legal Basis for Processing
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Under India's Digital Personal Data Protection Act, 2023 (DPDP
                Act) and applicable data protection principles, we process your
                personal data on the following lawful bases:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Processing Activity
                      </th>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 text-zinc-600">
                        Responding to enquiries and providing quotations
                      </td>
                      <td className="py-3 px-4 text-zinc-700 font-medium">
                        Consent; Legitimate interest
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 text-zinc-600">
                        Delivering contracted services
                      </td>
                      <td className="py-3 px-4 text-zinc-700 font-medium">
                        Contractual necessity
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 text-zinc-600">
                        Issuing invoices and maintaining financial records
                      </td>
                      <td className="py-3 px-4 text-zinc-700 font-medium">
                        Legal obligation
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 text-zinc-600">
                        Website analytics and performance monitoring
                      </td>
                      <td className="py-3 px-4 text-zinc-700 font-medium">
                        Legitimate interest; Consent
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 text-zinc-600">
                        Post-project support and relationship management
                      </td>
                      <td className="py-3 px-4 text-zinc-700 font-medium">
                        Legitimate interest; Contractual necessity
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: Data Sharing */}
            <div id="data-sharing" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbShare className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  6. Data Sharing & Disclosure
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal data. We share data
                only in the following limited circumstances:
              </p>
              <ul className="space-y-3 text-zinc-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong>Within our team:</strong> Project data is shared
                    with the specific team members working on your project on a
                    need-to-know basis. All team members are bound by
                    confidentiality obligations.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong>Payment processors:</strong> When you make a
                    payment, transaction data is processed by Razorpay. We do
                    not receive or store card or bank account details.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong>Cloud service providers:</strong> We use third-party
                    cloud tools for project management, email communication, and
                    file storage. These providers process data on our behalf
                    under appropriate data processing terms.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong>Legal and regulatory requirements:</strong> We may
                    disclose data where required by law, court order, or the
                    lawful request of a government authority.
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 7: Cookies */}
            <div id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbCookie className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  7. Cookies & Website Tracking
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    7.1 What Are Cookies?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Cookies are small text files placed on your device when you
                    visit a website. They help websites function correctly,
                    remember preferences, and collect analytics data about how
                    visitors use the site.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    7.2 Cookies We Use
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-50 border-b border-zinc-200">
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
                            className="hover:bg-zinc-50/50 transition-colors"
                          >
                            <td className="py-3 px-4 font-medium text-zinc-800">
                              {row.type}
                            </td>
                            <td className="py-3 px-4 text-zinc-600">
                              {row.description}
                            </td>
                            <td className="py-3 px-4 text-zinc-600">
                              {row.examples}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    7.3 Managing Cookies
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    You can control and manage cookies through your browser
                    settings. Most browsers allow you to refuse all cookies,
                    accept only certain types, or delete cookies already stored
                    on your device.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    7.4 Google Analytics
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    We use Google Analytics to understand how visitors use our
                    website. Google Analytics collects anonymised data on pages
                    visited, session duration, device type, and referral source.
                    You can opt out by installing the Google Analytics Opt-out
                    Browser Add-on.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8: Data Retention */}
            <div id="data-retention" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbClock className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  8. Data Retention
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We retain personal data only for as long as necessary to fulfil
                the purposes for which it was collected, or as required by
                applicable law. Our standard retention periods are:
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Data Category
                      </th>
                      <th className="py-3 px-4 font-bold text-zinc-700">
                        Retention Period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {RETENTION_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50/50 transition-colors"
                      >
                        <td className="py-3 px-4 text-zinc-600">
                          {row.category}
                        </td>
                        <td className="py-3 px-4 text-zinc-700 font-medium">
                          {row.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                At the end of the applicable retention period, personal data is
                securely deleted or anonymised. You may request early deletion
                of your data — see Section 10 for your rights.
              </p>
            </div>

            {/* Section 9: Data Security */}
            <div id="data-security" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbLock className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  9. Data Security
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We take the security of your personal data seriously and
                implement appropriate technical and organisational measures to
                protect it. Our security measures include:
              </p>
              <ul className="space-y-2 text-zinc-600 leading-relaxed mb-4">
                <li className="flex items-start gap-3">
                  <TbCheck className="size-4 text-emerald-600 shrink-0 mt-1" />
                  SSL/TLS encryption for all data transmitted between your
                  browser and our website
                </li>
                <li className="flex items-start gap-3">
                  <TbCheck className="size-4 text-emerald-600 shrink-0 mt-1" />
                  Access controls — only authorised personnel can access client
                  data
                </li>
                <li className="flex items-start gap-3">
                  <TbCheck className="size-4 text-emerald-600 shrink-0 mt-1" />
                  Secure cloud infrastructure with reputable providers
                </li>
                <li className="flex items-start gap-3">
                  <TbCheck className="size-4 text-emerald-600 shrink-0 mt-1" />
                  Regular security practices including strong password policies
                  and two-factor authentication
                </li>
              </ul>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <span className="text-amber-600 text-xl shrink-0">⚠️</span>
                <p className="text-sm text-amber-800">
                  While we take all reasonable precautions, no method of
                  internet transmission or electronic storage is completely
                  secure. We commit to notifying you promptly in the event of a
                  data breach that may affect your personal data.
                </p>
              </div>
            </div>

            {/* Section 10: Your Rights */}
            <div id="your-rights" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbUser className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  10. Your Rights
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Under India's Digital Personal Data Protection Act, 2023 (DPDP
                Act), you have the following rights in respect of your personal
                data:
              </p>
              <ul className="space-y-3 text-zinc-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong className="text-zinc-800">Right to access:</strong>{" "}
                    Request a summary of the personal data we hold about you and
                    how it is being used.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong className="text-zinc-800">
                      Right to correction:
                    </strong>{" "}
                    Request that inaccurate or incomplete personal data be
                    corrected.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong className="text-zinc-800">Right to erasure:</strong>{" "}
                    Request that we delete your personal data where there is no
                    longer a lawful basis for retention.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong className="text-zinc-800">
                      Right to withdraw consent:
                    </strong>{" "}
                    Withdraw consent at any time where processing is based on
                    your consent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TbChevronRight className="size-4 text-[#4DB2E0] shrink-0 mt-1" />
                  <div>
                    <strong className="text-zinc-800">
                      Right to grievance redressal:
                    </strong>{" "}
                    Raise a complaint if you believe your data rights have not
                    been respected.
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-6 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <h4 className="font-bold text-zinc-800 mb-2">
                  How to Exercise Your Rights
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  To exercise any of the above rights, please contact us in
                  writing at{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#4DB2E0] font-medium hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>{" "}
                  with the subject line Data Rights Request. We will respond
                  within 30 days of receiving a verifiable request.
                </p>
              </div>
            </div>

            {/* Section 11: Third-Party Links */}
            <div id="third-party" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbGlobe className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  11. Third-Party Links
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                This website may contain links to third-party websites, social
                media platforms, and external resources. We have no control over
                the content, privacy practices, or security of third-party
                websites and accept no responsibility for them.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                We encourage you to review the privacy policies of any
                third-party website you visit before providing any personal
                information.
              </p>
            </div>

            {/* Section 12: Children's Privacy */}
            <div id="children" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbUsers className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  12. Children's Privacy
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Our services are directed at businesses and adult individuals.
                This website is not intended for use by anyone under the age of
                18, and we do not knowingly collect personal data from minors.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                If you believe that a child under 18 has submitted personal data
                to us, please contact us immediately at{" "}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#4DB2E0] font-medium hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>{" "}
                and we will take prompt steps to delete that information.
              </p>
            </div>

            {/* Section 13: Updates */}
            <div id="updates" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbCalendarEvent className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  13. Updates to This Policy
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, applicable law, or the services we
                offer. When material changes are made, the updated policy will
                be published on this page with a revised "Last Updated" date.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Where changes are significant, we will notify active clients
                directly by email. We encourage you to review this page
                periodically.
              </p>
            </div>

            {/* Section 14: Contact */}
            <div id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4DB2E0]/10 rounded-lg text-[#4DB2E0]">
                  <TbPhone className="size-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  14. Contact Us
                </h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                For any questions, concerns, or requests related to this Privacy
                Policy or the handling of your personal data, please contact us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
                  <div className="flex items-center gap-3 text-[#4DB2E0] mb-3">
                    <TbBuilding className="size-5" />
                    <span className="font-bold text-zinc-800">Company</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-sm text-zinc-600">
                    {COMPANY_INFO.legalName}
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
                  <div className="flex items-center gap-3 text-[#4DB2E0] mb-3">
                    <TbMapPin className="size-5" />
                    <span className="font-bold text-zinc-800">Address</span>
                  </div>
                  <p className="text-sm text-zinc-600 whitespace-pre-line">
                    {COMPANY_INFO.address}
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
                  <div className="flex items-center gap-3 text-[#4DB2E0] mb-3">
                    <TbMail className="size-5" />
                    <span className="font-bold text-zinc-800">Email</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm text-[#4DB2E0] font-medium hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="p-6 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
                  <div className="flex items-center gap-3 text-[#4DB2E0] mb-3">
                    <TbPhone className="size-5" />
                    <span className="font-bold text-zinc-800">Phone</span>
                  </div>
                  <p className="text-sm text-zinc-600">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-zinc-500">
                    {COMPANY_INFO.alternatePhone}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <p className="text-sm text-zinc-600">
                  <strong>Response time:</strong> We aim to respond to all
                  privacy-related queries within 5 business days. For data
                  rights requests, we will respond within 30 days as required by
                  law.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-200/60">
                <p className="text-sm text-zinc-500 text-center">
                  This Privacy Policy was last updated on{" "}
                  <strong className="text-zinc-700">10 April 2025</strong>.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
                  <a href="#" className="text-[#4DB2E0] hover:underline">
                    Terms of Service →
                  </a>
                  <a href="#" className="text-[#4DB2E0] hover:underline">
                    Refund Policy →
                  </a>
                  <a href="#" className="text-[#4DB2E0] hover:underline">
                    Contact Us →
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* CSS for custom scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
}
