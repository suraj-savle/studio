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

      {/* Main Card */}
      <div className="relative z-10 w-full text-center flex flex-col items-center space-y-6p-8 sm:p-12 group">      
        <div className="space-y-4">
          <h1 className="text-3xl font-medium text-gray-900 sm:text-6xl">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
            The page youre looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-4 max-w-md">
          <Link
            href="/"
            className="w-full group/btn relative inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white rounded-full px-6 py-3.5 text-xs overflow-hidden shadow-lg shadow-gray-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-sm hover:shadow-gray-900/20"
          >
            <TbArrowLeft className="text-sm transition-transform duration-300 ease-out group-hover/btn:-translate-x-1" />
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}