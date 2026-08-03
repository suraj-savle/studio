import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Consultation | UpgradeUX",
  description:
    "Book a free strategy call for website development, SEO, UX design, and AI automation for your business.",
  path: "/free-consultation",
  keywords: [
    "free consultation",
    "web strategy session",
    "SEO consultation",
    "business website planning",
  ],
});

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
