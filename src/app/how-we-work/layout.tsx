import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process & How We Work | Next.js & Web Engineering Agency",
  description: "Discover our step-by-step web development workflow: Discovery, Conversion Design, Next.js Engineering, and Continuous Growth Optimization.",
  alternates: {
    canonical: "/how-we-work",
  },
  openGraph: {
    title: "How We Work | UpgradeUX Engineering Process",
    description: "Explore our proven strategy, design, and Next.js development workflow built for measurable business growth.",
    url: "/how-we-work",
  },
};

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}