"use client";

import Link from "next/link";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="relative flex w-full items-center justify-between p-5 md:px-20 lg:px-24 ">
      {/* LEFT: BRAND */}
      <Link href="/" className="group flex items-center">
        <div className="flex flex-col leading-none transition-transform duration-300 group-hover:translate-x-1">
          <div className="flex items-baseline gap-3">
            <span className="text-base font-bold tracking-tighter text-black">
              SS
            </span>
            <span className="text-base font-medium uppercase tracking-[0.3em] text-black/30 transition-colors duration-300 group-hover:text-black/80">
              Studio
            </span>
          </div>
          {/* Animated underline */}
          <div className="mt-2 h-[2px] w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full" />
        </div>
      </Link>

      {/* RIGHT: NAVIGATION & WORK BUTTON GRP */}
      <div className="hidden items-center gap-2 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative rounded-full px-6 py-3 transition-colors duration-300 hover:bg-black/[0.03]"
          >
            <div className="relative h-6 overflow-hidden">
              {/* Rolling Text Effect */}
              <span className="block text-sm font-bold uppercase tracking-[0.2em] text-black/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-hover:opacity-0">
                {link.name}
              </span>
              <span className="absolute inset-0 translate-y-full text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                {link.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* INTEGRATED WORK BUTTON */}
      <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-black px-10 py-4 transition-all duration-300 active:scale-95">
        {/* Hover Slide-up background */}
        <div className="absolute inset-0 translate-y-full bg-neutral-800 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

        <div className="relative z-10 flex h-5 items-center overflow-hidden">
          <div className="relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Work <TbArrowUpRight className="text-lg opacity-50" />
            </span>
            <span className="absolute top-full flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Explore <TbArrowUpRight className="text-lg rotate-45" />
            </span>
          </div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
