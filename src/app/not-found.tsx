"use client";

import React from "react";
import Link from "next/link";
import { TbArrowLeft, TbCompass } from "react-icons/tb";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-6 select-none relative overflow-hidden font-sans antialiased">
      
      {/* Simple Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      {/* Soft Blue Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400/10 rounded-full w-[500px] h-[500px] blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Card */}
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center space-y-6 bg-white/80 backdrop-blur-md border border-gray-200 p-8 sm:p-12 rounded-[2.5rem] shadow-lg shadow-gray-200/50 group">
        
        {/* Compass Icon */}
        <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-blue-500 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
          <TbCompass className="w-7 h-7 animate-pulse" />
        </div>

        {/* Status Badge */}
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase font-mono bg-red-50 text-red-500 border border-red-200 px-3 py-1 rounded-full">
          Error 404
        </span>

        {/* Message */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-4 w-full">
          <Link
            href="/"
            className="w-full group/btn relative inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider overflow-hidden shadow-lg shadow-gray-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-gray-900/20"
          >
            <TbArrowLeft className="text-sm transition-transform duration-300 ease-out group-hover/btn:-translate-x-1" />
            Go Back Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium text-gray-400 tracking-widest uppercase">
        Simple Design System
      </div>
    </main>
  );
}