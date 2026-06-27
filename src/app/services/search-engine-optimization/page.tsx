"use client";

import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbArrowUpRight,
  TbCheck,
  TbSearch,
  TbBrain,
  TbChartBar,
  TbWorld,
  TbMap,
  TbCode,
  TbLink,
  TbFileText,
  TbMicrophone,
  TbRobot,
  TbDatabase,
  TbStar,
  TbEye,
  TbMessages,
  TbNetwork,
  TbShoppingCart,
  TbTarget,
} from "react-icons/tb";

const SEARCH_LAYERS_DETAIL = [
  {
    title: "Layer 1 — Traditional Search",
    subtitle: "SEO — Google Search Rankings",
    description:
      "Traditional Search Engine Optimisation focuses on ranking your website's pages on Google's search results for the keywords your customers type when looking for what you offer. This is still the highest-volume, highest-intent digital marketing channel available.",
    features: [
      "On-page optimisation — meta tags, headings, content, internal links",
      "Technical SEO — site speed, Core Web Vitals, crawlability, schema",
      "Off-page SEO — link building, brand mentions, authority signals",
      "Local SEO — Google Business Profile, local citations, map pack rankings",
      "Content strategy — keyword-targeted blogs, service pages, landing pages",
      "Monthly tracking — keyword rankings, traffic, leads, conversions",
    ],
    appearances:
      "Google Search results, Google Maps / local pack, Google Shopping, Google Discover, Bing Search",
    icon: TbSearch,
    color: "text-[#4DB2E0]",
    bgColor: "bg-[#4DB2E0]/10",
  },
  {
    title: "Layer 2 — AI Search",
    subtitle: "AIO / AEO / GEO — AI Search Visibility",
    description:
      "A new layer of search has emerged. AI Overviews appear at the very top of Google results. Users ask ChatGPT, Perplexity, and Gemini for recommendations. Voice assistants answer questions without showing a list of links. If your content is not optimised for this layer, you are invisible in it.",
    features: [
      "AIO — AI Optimisation for Google AI Overviews and ChatGPT-style responses",
      "AEO — Answer Engine Optimisation for featured snippets and voice search",
      "GEO — Generative Engine Optimisation to be cited by ChatGPT, Gemini, Perplexity",
      "Structured data and schema markup for AI interpretation",
      "Entity authority building — knowledge graph and brand signals",
      "Conversational content restructuring for natural language queries",
    ],
    appearances:
      "Google AI Overviews, ChatGPT answers, Google Gemini, Perplexity AI, Siri / Google Assistant / Alexa, Featured Snippets",
    icon: TbBrain,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const TRADITIONAL_SERVICES = [
  {
    icon: TbShoppingCart,
    title: "eCommerce SEO",
    description:
      "Drive sales through strategic product and category page optimisation — ranking for high-purchase-intent keywords that convert browsers into buyers. Ideal for WooCommerce, Shopify, and custom stores targeting Mumbai consumers.",
    tag: "Tailor-made development",
  },
  {
    icon: TbTarget,
    title: "Lead Generation SEO",
    description:
      "Attract qualified leads through targeted keyword strategies, conversion-optimised landing pages, and content that answers buyer questions at each stage of the decision journey — turning organic traffic into enquiries.",
    tag: "Long-term stability",
  },
  {
    icon: TbMap,
    title: "Local SEO — Mumbai, Thane, Navi Mumbai",
    description:
      "Dominate local search results with Google Business Profile optimisation, local citations, neighbourhood-specific content, and map pack rankings. Get found by customers searching 'near me' or within specific Mumbai areas.",
    tag: "Faster performance",
  },
  {
    icon: TbCode,
    title: "Technical SEO",
    description:
      "Site speed, Core Web Vitals, crawlability, indexing, structured data, canonical tags, XML sitemaps, and mobile optimisation — the technical foundations that determine whether Google can find, understand, and rank your pages.",
    tag: "Reliable 1 year support",
  },
  {
    icon: TbFileText,
    title: "Content SEO & Strategy",
    description:
      "Keyword research, content gap analysis, blog creation, service page optimisation, and pillar content strategies that build topical authority in your industry — giving Google and AI platforms a comprehensive, trustworthy source to reference.",
    tag: "Full ownership control",
  },
  {
    icon: TbLink,
    title: "Off-Page SEO & Link Building",
    description:
      "Quality backlink acquisition, brand mention building, digital PR, and authority signals that strengthen your domain's credibility in Google's eyes — one of the most impactful long-term ranking factors for competitive keywords.",
    tag: "Easy maintenance",
  },
];

const AI_SERVICES = [
  {
    icon: TbRobot,
    title: "AI-Ready Content Optimisation",
    description:
      "We restructure and rewrite existing content using semantic entities, clear answer formats, and conversational structuring — making it immediately digestible by AI systems that summarise and recommend sources.",
    tag: "AI-ready content optimisation",
  },
  {
    icon: TbDatabase,
    title: "Structured Data & Schema Implementation",
    description:
      "Advanced schema markup — FAQ, HowTo, Article, Organisation, LocalBusiness, and entity-based schemas — helps AI engines interpret your pages accurately and surface them in relevant results and AI Overviews.",
    tag: "Structured data schema implementation",
  },
  {
    icon: TbEye,
    title: "AI Overview & Featured Snippet Targeting",
    description:
      "We create quick-answer sections, FAQ blocks, and direct-answer formatting specifically designed to increase eligibility for AI summaries and featured position at the top of Google search results.",
    tag: "AI overview and featured snippet targeting",
  },
  {
    icon: TbNetwork,
    title: "Entity & Topical Authority Building",
    description:
      "We strengthen your brand signals through internal linking architecture, knowledge graph optimisation, content topic clusters, and entity disambiguation — making your brand a recognised, trusted authority in your field.",
    tag: "Entity and topical authority building",
  },
  {
    icon: TbMicrophone,
    title: "Voice Search Optimisation",
    description:
      "Content restructured for natural language queries and conversational intent — the way people actually speak to Google Assistant, Siri, Alexa, and smart devices — covering both English and the Hinglish patterns common in Mumbai.",
    tag: "Voice search optimisation",
  },
  {
    icon: TbChartBar,
    title: "AI Visibility Tracking & Reporting",
    description:
      "Monthly reports covering AI Overview appearances, featured snippet wins, entity visibility growth, organic traffic quality changes, keyword ranking movements, and specific improvement recommendations for the following month.",
    tag: "AI visibility tracking and reporting",
  },
];

const AI_ACRONYMS = [
  {
    acronym: "AIO",
    full: "AI Optimisation",
    status: "Active Now",
    description:
      "Optimising your website and content so AI systems can understand, summarise, and recommend your brand in AI-generated answers — including Google AI Overviews, ChatGPT-style responses, and Gemini summaries.",
    icon: TbRobot,
  },
  {
    acronym: "AEO",
    full: "Answer Engine Optimisation",
    status: "Evolving Fast",
    description:
      "Structuring content to appear in featured snippets, People Also Ask boxes, voice search results, and direct answers across search engines and voice assistants like Google Assistant, Siri, and Alexa.",
    icon: TbMessages,
  },
  {
    acronym: "GEO",
    full: "Generative Engine Optimisation",
    status: "Emerging Opportunity",
    description:
      "Preparing content to be referenced and cited by generative AI platforms — ChatGPT, Google Gemini, Perplexity AI, and others — that synthesise information and attribute sources in their generated responses.",
    icon: TbBrain,
  },
];

/* ============================================================================
  Component Render Layer
  ============================================================================ */

export default function SEOOptimisationPage() {
  return (
    <div className="w-full min-h-screen font-sans antialiased bg-gradient-to-br from-zinc-50 via-white to-zinc-50/80 text-zinc-900 selection:bg-[#4DB2E0]/20 scroll-smooth">
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none">
            seo optimisation
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-sm leading-relaxed hidden md:block">
          Traditional SEO for Google rankings now. AIO/AEO/GEO for AI visibility
          tomorrow. Both layers together for maximum search presence.
        </p>
      </div>

      {/* Core Transformation Breakdown */}
      <main className="">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-20 sm:mb-28 mx-5 sm:mx-10">
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-mono font-bold tracking-wider text-[#4DB2E0] uppercase block mb-3">
              Our SEO + AI Search Services
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-700 max-w-3xl leading-[1.1] mb-4">
                Two Layers of Search, Both Matter for Your Business.
              </h2>
            </div>

            <div className="space-y-2 text-base text-zinc-600 leading-relaxed mb-2">
              <p>
                Search has evolved. Today, your customers find you through two
                distinct channels — traditional Google rankings and AI-generated
                answers.
              </p>
              <p className="text-sm text-zinc-500 mb-2">
                Businesses that optimise for both layers create a compound
                visibility advantage that competitors who focus on only one
                channel cannot match.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://cal.com/suraj-savle-tua3qw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 shadow-sm hover:shadow-lg hover:shadow-zinc-900/20"
              >
                Get Your Free Audit
                <TbArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://wa.me/8369213418"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20ba59] shadow-sm hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-start">
            <Image
              src="/seo.png"
              alt="Custom Website Development"
              width={650}
              height={650}
              priority
              className="w-full md:max-w-150 h-auto object-contain"
            />
          </div>
        </section>

        {/* The Search Landscape */}
        <section className="space-y-12 px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-700 tracking-tight mt-4">
              Search Now Has Two Layers — Businesses Need Both
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              The way people find businesses online has fundamentally changed.
              Here is exactly what each layer is and why both matter for your
              business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {SEARCH_LAYERS_DETAIL.map((layer, index) => {
              const isAI = index === 1;
              return (
                <div
                  key={index}
                  className={`p-8 rounded border transition-all duration-300 ${
                    isAI
                      ? "bg-linear-to-br from-purple-50/50 to-pink-50/50 border-purple-200/60 hover:shadow-xl hover:shadow-purple-100/30"
                      : "bg-white border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/30"
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-800">
                        {layer.title}
                      </h3>
                      <p className="text-sm font-medium text-[#4DB2E0]">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-600 leading-relaxed mb-4">
                    {layer.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {layer.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <TbCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-900 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-zinc-300">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                      <TbWorld className="size-3.5" />
                      Where your content appears:
                    </span>
                    <p className="text-sm text-zinc-700 mt-1">
                      {layer.appearances}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strategic Insight */}
          <div className="p-6 bg-gradient-to-r from-[#4DB2E0]/10 via-[#4DB2E0]/5 to-transparent border-l-4 border-[#4DB2E0] rounded-r-2xl">
            <p className="text-sm text-zinc-700 leading-relaxed">
              <strong className="text-[#4DB2E0]">
                💡 The strategic insight:
              </strong>{" "}
              SEO and AIO/AEO/GEO are not competitors — they are complementary.
              Strong SEO builds the ranking authority that AI systems use to
              decide whose content to cite and surface. Businesses that optimise
              for both create a compound visibility advantage that competitors
              who focus on only one layer cannot match.
            </p>
          </div>
        </section>

        {/* Traditional SEO Services */}
        <section className="space-y-12 px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#4DB2E0] uppercase mb-2 bg-[#4DB2E0]/10 px-4 py-1.5 rounded-full inline-block">
              Traditional SEO Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight mt-4">
              Our Google SEO Services for Businesses
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Comprehensive SEO solutions tailored to your business type — from
              local visibility to national and eCommerce dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRADITIONAL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white border border-zinc-400 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#4DB2E0]/10 rounded-xl text-[#4DB2E0] group-hover:bg-[#4DB2E0] group-hover:text-white transition-colors duration-300 flex-shrink-0">
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

        {/* AI Search Optimisation - Acronyms */}
        <section className="space-y-12 px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-3xl">
            <span className="text-xs text-white font-bold tracking-widest uppercase mb-2 bg-black px-4 py-1.5 rounded-full inline-block">
              AI Search Optimisation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight mt-4">
              AIO / AEO / GEO — What Each One Means
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Three interconnected disciplines that position your brand across
              the new layer of AI-driven search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AI_ACRONYMS.map((item, index) => {
              const Icon = item.icon;
              const statusColors = {
                "Active Now":
                  "bg-emerald-100 text-emerald-700 border-emerald-200",
                "Evolving Fast": "bg-amber-100 text-amber-700 border-amber-200",
                "Emerging Opportunity":
                  "bg-blue-100 text-blue-700 border-blue-200",
              };
              return (
                <div
                  key={index}
                  className="group p-6 border border-zinc-300 rounded-2xl hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-linear-to-br from-[#4DB2E0] to-[#ffffff] rounded transition-transform duration-300">
                      <Icon className="size-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                        statusColors[
                          item.status as keyof typeof statusColors
                        ] || "bg-zinc-100 text-zinc-700 border-zinc-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#4DB2E0] mb-0.5">
                    {item.acronym}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-3">
                    {item.full}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI SEO Services */}
        <section className="space-y-12 px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4DB2E0] uppercase border mb-2 px-4 py-1.5 rounded-full inline-block">
              Our AI SEO Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-800 tracking-tight mt-4">
              What We Do for AIO / AEO / GEO
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Six core AI search optimisation services — working together to
              position your Mumbai business across every layer of modern search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-purple-50/30 to-pink-50/30 border border-zinc-300 rounded-2xl hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider mb-1">
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

        {/* Final CTA */}
        <section className="relative bg-linear-to-br from-[#4DB2E0] to-[#3ba5d4] text-center space-y-12 px-6 md:px-12 py-8 md:py-12 mb-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs font-semibold tracking-widest uppercase mb-4">
              <TbStar className="size-3.5" />
              Free SEO Audit
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Dominate Both Layers of Search?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and AI visibility assessment. We&apos;ll show
              you where you stand and give you a clear roadmap to dominate both
              traditional and AI search.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cal.com/suraj-savle-tua3qw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Your Free Audit
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
