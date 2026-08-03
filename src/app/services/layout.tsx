import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services | UpgradeUX",
  description:
    "Explore custom websites, SEO services, WordPress development, website redesigns, and AI automation solutions built for growth.",
  path: "/services",
  keywords: [
    "custom website development",
    "SEO services",
    "website redesign",
    "WordPress development",
    "AI automation",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
