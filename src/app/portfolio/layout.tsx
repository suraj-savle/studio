import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio | UpgradeUX Web Development Projects",
  description:
    "Browse UpgradeUX portfolio projects including custom websites, SaaS products, dashboards, and modern digital experiences.",
  path: "/portfolio",
  keywords: [
    "web development portfolio",
    "custom website projects",
    "SaaS web design",
    "React portfolio",
  ],
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
