import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import AppLoader from "@/components/ui/AppLoader";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const geist = Geist({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-geist",
});

const poppins = Poppins({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upgradeux.in"),

  title: {
    default: "UpgradeUX | Custom Web Development Agency",
    template: "%s | UpgradeUX",
  },

  description:
    "UpgradeUX creates fast, modern, SEO-optimized websites for startups and businesses. Expert web development, UI/UX design, and performance-focused digital solutions.",

  keywords: [
    "Web Development",
    "Web Design",
    "Website Development Company",
    "Next.js",
    "React",
    "SEO",
    "UI UX Design",
    "Website Redesign",
    "Business Website",
    "Mumbai Web Development",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://upgradeux.in",
    siteName: "UpgradeUX",
    title: "UpgradeUX | Custom Web Development Agency",
    description:
      "High-performance websites designed to grow your business.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UpgradeUX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UpgradeUX",
    description:
      "High-performance websites designed to grow your business.",
    images: ["/twitter-image.jpg"],
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
      className={`${plusJakartaSans.variable} ${geist.variable} ${poppins.variable} antialiased selection:bg-[#4DB2E0]/20`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col justify-between"
        suppressHydrationWarning
      >
        <AppLoader />
        <Navbar />
        <SmoothScrolling>
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
