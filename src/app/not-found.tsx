"use client";

import React from "react";
import Link from "next/link";
import { TbArrowLeft, TbCompass } from "react-icons/tb";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 select-none relative overflow-hidden font-sans antialiased">
      
      {/* Subtle Geometric Wireframe Grid Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      {/* Ambient Blue Radial Glow Fields */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4DB2E0]/10 rounded-full w-[500px] h-[500px] blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Glassmorphism Card Stack Container */}
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center space-y-6 bg-zinc-900/20 backdrop-blur-md border border-zinc-900 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-black/40 group">
        
        {/* Dynamic Broken Compass Graphic Badge */}
        <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-[#4DB2E0] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4DB2E0]/5 pointer-events-none" />
          <TbCompass className="w-7 h-7 animate-pulse" />
        </div>

        {/* Error Status Code Identifier Tag */}
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full">
          Error Code: 404
        </span>

        {/* Messaging Text Area Layout */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Lost in Cyberspace
          </h1>
          <p className="text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
            The link you followed might be broken, or the page has been migrated to a premium framework layout.
          </p>
        </div>

        {/* Action Button Matrix Navigation Core */}
        <div className="pt-4 w-full">
          <Link
            href="/"
            className="w-full group/btn relative inline-flex items-center justify-center gap-2.5 bg-white text-zinc-950 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider overflow-hidden shadow-xl shadow-white/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <TbArrowLeft className="text-sm transition-transform duration-300 ease-out group-hover/btn:-translate-x-1" />
            Return to Safety
          </Link>
        </div>
      </div>

      {/* Footnote Branding Accent Container */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium text-zinc-600 tracking-widest uppercase">
        UpgradeUX Platform Architecture
      </div>
    </main>
  );
}