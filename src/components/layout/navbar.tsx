"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  TbArrowUpRight,
  TbMenu,
  TbX,
  TbChevronDown,
  TbBrandWordpress,
  TbRefresh,
  TbSettings,
  TbPalette,
} from "react-icons/tb";

const DROPDOWN_SERVICES = [
  { name: "Website Design", href: "/services/website-design", icon: TbPalette },
  { name: "Redesign Systems", href: "/services/redesign", icon: TbRefresh },
  {
    name: "Automation Pipelines",
    href: "/services/automation",
    icon: TbSettings,
  },
  {
    name: "WordPress Architectures",
    href: "/services/wordpress",
    icon: TbBrandWordpress,
  },
];

const NAV_LINKS = [
  { name: "Process", href: "/process" },
  { name: "Our Work", href: "/work" },
  { name: "Tech Stack", href: "/stack" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ================= STICKY NAVBAR WRAPPER ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex w-full items-center justify-between px-6 md:px-12 lg:px-12 select-none transition-all duration-300 ease-out ${
          isScrolled ? "py-3.5 bg-white shadow-sm" : "py-6"
        }`}
      >
        {/* LEFT BRAND LOGO */}
        <div className="flex items-center min-w-[150px]">
          <Link href="/" className="group flex items-center focus:outline-none">
            <span
              className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 group-hover:opacity-80"
              style={{ color: "var(--primary-text)" }}
            >
              UpgradeUx
            </span>
          </Link>
        </div>

        {/* CENTER NAV LINKS (DESKTOP) */}
        <div className="hidden items-center gap-0.5 lg:flex mx-auto">
          {/* Services Dropdown Trigger */}
          <div
            className="group relative rounded-full px-4 py-2 cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="relative flex items-center gap-1 h-5 overflow-hidden">
              <span
                className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "var(--primary-text)" }}
              >
                Services
                <TbChevronDown
                  className={`text-xs transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  style={{ color: "var(--secondary-text)" }}
                />
              </span>
            </div>

            {/* Services Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 p-2 bg-white border rounded-xl shadow-xl z-50 transition-all duration-200 ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-0.5">
                {DROPDOWN_SERVICES.map((subItem) => {
                  const Icon = subItem.icon;
                  return (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group/link hover:bg-zinc-50"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      <div
                        className="p-1.5 rounded-md"
                        style={{ backgroundColor: "var(--primary)" }}
                      >
                        <Icon
                          className="text-sm"
                          style={{ color: "var(--secondary-text)" }}
                        />
                      </div>
                      <span
                        className="flex-1 transition-colors duration-200 group-hover/link:text-black"
                        style={{ color: "var(--primary-text)" }}
                      >
                        {subItem.name}
                      </span>
                      <TbArrowUpRight
                        className="text-sm opacity-40 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:rotate-45"
                        style={{ color: "var(--secondary-text)" }}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Standard Main Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-full px-4 py-2 focus:outline-none"
            >
              <div className="relative h-4 overflow-hidden">
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
                  style={{ color: "var(--secondary-text)" }}
                >
                  {link.name}
                </span>
                <span
                  className="absolute inset-0 translate-y-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500 group-hover:translate-y-0"
                  style={{ color: "var(--primary-text)" }}
                >
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT ACTION HUB */}
        <div className="flex items-center gap-3 min-w-[150px] justify-end">
          <Link
            href="/contact"
            className="hidden lg:group lg:flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 transition-all duration-300 active:scale-95 border border-zinc-200"
          >
            <div className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <div className="relative z-10 flex h-4 items-center overflow-hidden">
              <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em]">
                Let&apos;s Talk{" "}
                <TbArrowUpRight className="text-sm opacity-50" />
              </span>
            </div>
          </Link>

          {/* HAMBURGER TOGGLE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 hover:border-zinc-950 text-zinc-950 transition-colors duration-300 focus:outline-none lg:hidden"
          >
            <TbMenu className="text-xl" />
          </button>
        </div>
      </nav>

      {/* ================= FULLSCREEN MOBILE OVERLAY (WHITE BACKGROUND) ================= */}
      <div
        className={`fixed inset-0 z-50 bg-white text-zinc-950 p-6 md:p-12 flex flex-col justify-between overflow-y-auto lg:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header bar */}
        <div className="flex w-full items-center justify-between border-b border-zinc-100 pb-5">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold tracking-tight text-zinc-950"
          >
            UpgradeUx
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <TbX className="text-xl" />
          </button>
        </div>

        {/* Clean Mobile Links Track */}
        <div className="flex flex-col justify-center items-start gap-6 my-auto pl-4">

          {/* 1. Services Router Link */}
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="group inline-flex items-center gap-2 text-3xl font-bold tracking-tight text-zinc-500 hover:text-zinc-950 transition-colors duration-200"
          >
            <span>Services</span>
            <TbArrowUpRight className="text-xl opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:rotate-45" />
          </Link>

          {/* 2. Main Navigation Array Links */}
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group inline-flex items-center gap-2 text-3xl font-bold tracking-tight text-zinc-500 hover:text-zinc-950 transition-colors duration-200"
            >
              <span>{link.name}</span>
              <TbArrowUpRight className="text-xl opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:rotate-45" />
            </Link>
          ))}

          {/* 3. Let's Talk CTA Link */}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="group inline-flex items-center gap-2 text-3xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition-colors duration-200 pt-4 border-t border-zinc-100 w-full max-w-xs"
          >
            <span>Let&apos;s Talk</span>
            <TbArrowUpRight className="text-xl transition-transform duration-200 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Footer Area */}
        <div className="flex items-center justify-between text-zinc-400 text-[10px] font-mono pt-5 border-t border-zinc-100 w-full">
          <span>MINIMALIST UX ARCHITECTURE</span>
          <span>© 2026 UPGRADEUX</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
