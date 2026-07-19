import type { Metadata } from "next";
// Optimized fonts: Only load what you actually use
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

import SmoothScrolling from "@/components/ui/SmoothScrolling";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import AppLoader from "@/components/ui/AppLoader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Reduced weights to speed up LCP
  variable: "--font-plus-jakarta",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "600"], // Reduced weights
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upgradeux.in"),
  applicationName: "UpgradeUX",
  title: {
    default: "UpgradeUX | Premium Web Design & Development Agency in India",
    template: "%s | UpgradeUX",
  },
  description:
    "UpgradeUX is a modern web design and development agency helping businesses grow with fast, SEO-friendly websites, custom web applications, UI/UX design, business automation, and AI-powered digital solutions.",
  keywords: [
    "UpgradeUX",
    "Web Design Agency India",
    "Website Development Company",
    "Custom Website Development",
    "Next.js Agency",
    "React Development",
    "WordPress Development",
    "SEO Services",
    "UI UX Design",
  ], // Keep keywords focused and natural
  authors: [{ name: "UpgradeUX", url: "https://www.upgradeux.in" }],
  creator: "UpgradeUX",
  publisher: "UpgradeUX",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.upgradeux.in",
    siteName: "UpgradeUX",
    title: "UpgradeUX | Premium Web Design & Development Agency in India",
    description:
      "We build fast, modern, SEO-optimized websites and digital experiences that help businesses grow.",
    images: [
      {
        url: "/social/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UpgradeUX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UpgradeUX | Premium Web Design & Development Agency",
    description:
      "Modern websites engineered for performance, SEO, and business growth.",
    images: ["/social/twitter-image.jpg"],
  },
  verification: {
    // google: "ADD_YOUR_ACTUAL_CODE_HERE",
  },
  appleWebApp: {
    capable: true,
    title: "UpgradeUX",
    statusBarStyle: "default",
  },
  archives: ["https://www.upgradeux.in/blog"],
  appLinks: {
    web: {
      url: "https://www.upgradeux.in",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // Keep here if using dark/light theme providers
      className={`${plusJakartaSans.variable} ${geist.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col justify-between">
        {/* Structured Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />

        <AppLoader />
        <Navbar />

        {/* Smooth scroll can sometimes mess with anchor links / crawl indexing. Ensure your SmoothScrolling component uses native fallback for crawlers */}
        <SmoothScrolling>
          <main>{children}</main>
        </SmoothScrolling>

        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
