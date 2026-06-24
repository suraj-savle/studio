import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#4DB2E0]/20`}
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
      </body>
    </html>
  );
}
