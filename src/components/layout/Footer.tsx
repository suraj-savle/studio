"use client";
import React from "react";
import Link from "next/link";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const servicesLinks = [
    { name: "Custom Website", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Seo", href: "#" },
    { name: "Redesign", href: "#" },
    { name: "Free Consulting", href: "#" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Free Consulting", href: "#" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: FaGithub },
    { name: "X", href: "#", icon: FaXTwitter },
    { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { name: "Instagram", href: "#", icon: FaInstagram },
  ];

  return (
    <footer className="w-full text-zinc-900 pt-16 overflow-hidden relative">
      {/* TOP LINKS LAYER */}
      {/* TOP FOOTER */}
      <div className="mx-auto flex flex-col gap-12 border-b border-zinc-200/60 px-4 pb-16 sm:px-12 lg:flex-row lg:justify-between lg:gap-16">
        {/* LEFT : BRAND */}
        <div className="max-w-sm shrink-0">
          <p className="text-lg font-medium leading-snug tracking-tight text-zinc-900">
            UpgradeUX is an independent digital agency crafting high-performance
            websites, modern user experiences, and scalable digital products.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-medium text-zinc-400">
              Currently accepting new projects
            </span>
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          {/* SERVICES */}
          <div className="flex min-w-[180px] flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              Services
            </span>

            <nav className="flex flex-col gap-2">
              {servicesLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* COMPANY */}
          <div className="flex min-w-[180px] flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              Company
            </span>

            <nav className="flex flex-col gap-2">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* SOCIALS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:text-zinc-950"
                  >
                    <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT : CONTACT */}
        <div className="flex w-full max-w-sm flex-col gap-6 lg:ml-auto">

          {/* EMAIL */}
          <a
            href="mailto:upgradeux@gmail.com"
            className="group flex items-center justify-between border-b border-zinc-200 pb-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400">
                Email
              </p>

              <h4 className="mt-1 text-base font-semibold text-zinc-950">
                upgradeux@gmail.com
              </h4>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-xs text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </div>
          </a>

          {/* LOCATION */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-zinc-400">
              Location
            </p>

            <h4 className="mt-1 text-base font-semibold text-zinc-950">
              Mumbai, India
            </h4>

            <p className="mt-1 text-sm text-zinc-500">
              Working remotely with clients worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* GIANT BACKGROUND TYPOGRAPHY ELEMENT */}
      <div className="w-full relative pointer-events-none select-none overflow-hidden h-[120px] sm:h-[180px] md:h-[240px] lg:h-[280px]">
        <h1 className="absolute -bottom-[20%] text-[16.8vw] font-black tracking-tighter leading-none antialiased uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#4DB2E0]">
          UpgradeUX
        </h1>
      </div>
    </footer>
  );
}
