import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact UpgradeUX | Web Development, SEO & Automation Agency",
  description:
    "Book a free consultation for custom websites, SEO, and AI automation services with UpgradeUX in Mumbai and worldwide.",
  path: "/contact",
  keywords: [
    "contact web agency",
    "website development consultation",
    "SEO consultation",
    "AI automation consultation",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
