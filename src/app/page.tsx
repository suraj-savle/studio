import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Landing/Hero";

const AgencyDashboardSection = dynamic(
  () => import("@/components/layout/AgencyDashboardWindow"),
  {
    loading: () => <SectionLoadingBlock className="h-[520px] sm:h-[620px]" />,
  },
);

const ServicesPage = dynamic(() => import("@/components/layout/ServicesPage"), {
  loading: () => <SectionLoadingBlock className="h-[720px]" />,
});

const Features = dynamic(() => import("@/components/layout/Features"), {
  loading: () => <SectionLoadingBlock className="h-[760px]" />,
});

const HowWework = dynamic(() => import("@/components/layout/HowWework"), {
  loading: () => <SectionLoadingBlock className="h-[760px]" />,
});

const Testimonials = dynamic(() => import("@/components/layout/Testimonials"), {
  loading: () => <SectionLoadingBlock className="h-[560px]" />,
});

const AgencyFAQ = dynamic(() => import("@/components/layout/AgencyFAQ"), {
  loading: () => <SectionLoadingBlock className="h-[620px]" />,
});

const CtaSection = dynamic(() => import("@/components/layout/CtaSection"), {
  loading: () => <SectionLoadingBlock className="h-[320px]" />,
});

function SectionLoadingBlock({ className }: { className: string }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div
        className={`rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-100 to-zinc-50 animate-pulse ${className}`}
      />
    </div>
  );
}

export const metadata: Metadata = {
  title: "UpgradeUX | Web Development, SEO & AI Automation Agency",
  description:
    "UpgradeUX builds high-performance websites, SEO strategies, and AI automation solutions for startups and growing businesses in India and worldwide.",
  alternates: {
    canonical: "https://www.upgradeux.in/",
  },
  keywords: [
    "web development agency",
    "SEO agency",
    "AI automation agency",
    "custom website development",
    "Mumbai web agency",
  ],
};

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Hero />
      <AgencyDashboardSection />
      <ServicesPage />
      <Features />
      <HowWework />
      <Testimonials />
      <AgencyFAQ />
      <CtaSection />
    </div>
  );
}
