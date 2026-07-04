"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const servicesLinks = [
    { name: "Custom Website", href: "/services/custom-website" },
    { name: "SEO Optimization", href: "/services/search-engine-optimization" },
    { name: "Website Redesign", href: "/services/website-redesign" },
    { name: "WordPress Website", href: "/services/wordpress" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help-center" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Terms of Service", href: "/terms-service" },
    { name: "Free Consulting", href: "/free-consulting" },
  ];

  const socialLinks = [
    { name: "X", href: "https://twitter.com/surjasavle", icon: FaXTwitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/surajsavle/", icon: FaLinkedinIn },
    { name: "Instagram", href: "https://www.instagram.com/upgradeux/", icon: FaInstagram },
  ];

  return (
    <footer className="w-full text-zinc-900 pt-16 md:pt-24 overflow-hidden relative border-t border-zinc-100 bg-white select-none">
      <div className=" px-4 sm:px-6 lg:px-12">
        
        {/* MAIN STRUCTURAL GRID CONFIGURATION */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 md:gap-5 lg:gap-8">
          
          {/* COLUMN 1: BRAND ARCHITECTURE */}
          <div className="flex flex-col space-y-5 sm:col-span-2 lg:col-span-1 sm:max-w-sm">
            <p className="text-base sm:text-sm md:text-lg font-medium leading-relaxed tracking-tight text-zinc-800 antialiased">
              UpgradeUX is an independent digital agency crafting high-performance
              websites, modern user experiences, and scalable digital products.
            </p>

            <div className="inline-flex items-center gap-2.5 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-zinc-400 font-mono">
                Accepting New Projects
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 w-full sm:max-w-sm">

          
          {/* COLUMN 2: SERVICES LINKS */}
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-zinc-400">
              Services
            </span>
            <nav className="flex flex-col space-y-2.5">
              {servicesLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-[#4DB2E0]"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>


          {/* COLUMN 3: COMPANY & SOCIAL LINK STACKS */}
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-zinc-400">
              Company
            </span>
            <nav className="flex flex-col space-y-2.5">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-[#4DB2E0]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Actions Integration */}
            <div className="pt-3 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4DB2E0] hover:text-[#4DB2E0]"
                  >
                    <Icon className="text-sm transition-transform duration-300 group-hover:scale-105" />
                  </Link>
                );
              })}
            </div>
            </div>
            </div>

          {/* COLUMN 4: INBOUND INTERACTION CONTACTS */}
          <div className="flex flex-col space-y-6 sm:col-span-2 lg:col-span-1 lg:pl-4">
            {/* EMAIL LINK COMPONENT */}
            <a
              href="mailto:upgradeux.agency@gmail.com"
              className="group flex items-center justify-between border-b border-zinc-100 pb-5"
            >
              <div className="min-w-0">
                <p className="text-xs sm:text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Email Inquiry
                </p>
                <h4 className="mt-1 text-xl sm:text-sm md:base font-bold text-zinc-950 truncate hover:text-[#4DB2E0] transition-colors duration-200 hover:underline">
                  upgradeux.agency@gmail.com
                </h4>
              </div>
            </a>

            {/* LOCATION FOOTPRINT DATA */}
            <div>
              <p className="text-xs sm:text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                Location
              </p>
              <h4 className="mt-1 text-xl sm:text-sm md:base font-bold text-zinc-950">
                Mumbai, India
              </h4>
              <p className="mt-1 sm:text-sm text-zinc-400 font-medium">
                Working remotely with clients worldwide.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* HERO SCALED TEXT OVERLAY BACKGROUND ELEMENT */}
      <div className="w-full relative pointer-events-none select-none overflow-hidden h-30 sm:h-45 md:h-60 lg:h-70">
        <h1 className="absolute bottom-[-20%] right-0.5 text-[17.5vw] font-black tracking-tighter leading-none antialiased uppercase bg-clip-text text-transparent bg-linear-to-b from-[#FFFFFF] to-[#4DB2E0] font-geist">
          UpgradeUX
        </h1>
      </div>
    </footer>
  );
}