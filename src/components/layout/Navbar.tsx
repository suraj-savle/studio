"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbArrowUpRight, TbMenu, TbX, TbChevronDown } from "react-icons/tb";

const DROPDOWN_SERVICES = [
  { name: "Custom Design", href: "/services/custom-website" },
  { name: "Website Redesign", href: "/services/website-redesign" },
  {
    name: "Seo Optimization",
    href: "/services/search-engine-optimization",
  },
  {
    name: "WordPress website",
    href: "/services/wordpress",
  },
  {
    name: "All services",
    href: "/services",
  },
];

const NAV_LINKS = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "About", href: "/about" },
  { name: "portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
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
          isScrolled ? "py-3.5 bg-linear-to-b from-white to-[#ffffffb5] shadow-sm" : "py-6"
        }`}
      >

        {/* LEFT BRAND LOGO */}
        <div className="flex items-center min-w-37.5">
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
                className="flex items-center gap-1 text-sm font-medium tracking-[0.15em]"
                style={{ color: "var(--primary-text)" }}
              >
                our Services
                <TbChevronDown
                  className={`text-xs transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  style={{ color: "var(--secondary-text)" }}
                />
              </span>
            </div>

            {/* Services Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-64 p-2 bg-white  rounded-xl shadow-xl z-50 transition-all duration-200  ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-0.5">
                {DROPDOWN_SERVICES.map((subItem) => {
                  return (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium transition-all duration-200 group/link border border-transparent hover:border-b-zinc-500"
                      style={{ color: "var(--secondary-text)" }}
                    >
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
              <div className="relative overflow-hidden">
                <span
                  className="block text-sm font-medium tracking-[0.15em] transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 text-[#171417]"
                >
                  {link.name}
                </span>
                <span
                  className="absolute inset-0 translate-y-full text-sm font-medium  tracking-[0.15em] transition-all duration-500 group-hover:translate-y-0 text-[#000000]"
                >
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT ACTION HUB */}
        <div className="flex items-center gap-3 min-w-37.5 justify-end">
          <Link
            href="/contact"
            className="hidden lg:group lg:flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 transition-all duration-300 active:scale-95 border border-gray-500"
          >
            <div className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <div className="relative z-10 flex h-4 items-center overflow-hidden">
              <span className="flex items-center gap-1 text-xs hover:text-gray-500 font-medium tracking-[0.15em]">
                Contact Us <TbArrowUpRight className="text-sm opacity-50" />
              </span>
            </div>
          </Link>

          {/* HAMBURGER TOGGLE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border text-zinc-950 transition-colors duration-300 focus:outline-none lg:hidden"
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
        <div className="flex flex-col justify-center items-start gap-4 my-auto pl-4">
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
            className="group inline-flex items-center gap-2 text-3xl font-bold tracking-tight text-[#4DB2E0] hover:text-[#4DB2E0]/80 transition-colors duration-200 pt-4 border-t w-full max-w-xs"
          >
            <span>Contact US</span>
            <TbArrowUpRight className="text-xl transition-transform duration-200 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Footer Area */}
        <div className="flex items-center justify-between text-zinc-400 text-[10px] font-mono pt-5 border-t border-zinc-100 w-full">
          <span>Web Development</span>
          <span>© 2026 UPGRADEUX</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
