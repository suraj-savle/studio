import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";

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
  title: "UpgradeUX | Independent Digital Agency",
  description:
    "Crafting high-end responsive interfaces, premium design systems, and modern full-stack web applications.",
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
