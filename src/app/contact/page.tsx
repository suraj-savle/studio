"use client";

import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased ">
      <div className="">
        {/* 1. TOP HERO HERO BANNER BLOCK (Inspired by image_379f24.jpg) */}
        <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 border-b border-zinc-100 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800 uppercase leading-none">
              contact us
            </h1>
          </div>
          <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
            Explore our complete systematic workflow menu built explicitly on
            performant code ecosystems.
          </p>
        </div>

        {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24 mx-5 sm:mx-10">
          {/* LEFT PANEL: CONTENT STRIP & METADATA GRID */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.15] mb-6">
                We are always ready to help you and answer your questions
              </h2>

              <p className="text-sm sm:text-base text-zinc-500 max-w-xl font-normal leading-relaxed mb-12">
                Have a deep infrastructure engineering proposal or an adaptive
                design design pipeline requirement? Connect directly with our
                Mumbai headquarters. Our technical architects respond within 12
                business hours.
              </p>
            </div>

            {/* Metadata Contact Blocks 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 border-t border-zinc-100 pt-10">
              {/* Box 1: Communications */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider  uppercase">
                  Call Center
                </span>
                <a
                  href="tel:+912218002345"
                  className="text-base font-bold text-zinc-900 hover:text-[#4DB2E0] transition-colors"
                >
                  +91 8369213418
                </a>
              </div>

              {/* Box 2: Location Parameters */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider  uppercase">
                  Our Location
                </span>
                <p className="text-base font-bold text-zinc-900 leading-tight">
                  Remote (Navi Mumbai, India)
                </p>
              </div>

              {/* Box 3: Email Coordinates */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider  uppercase">
                  Email
                </span>
                <a
                  href="mailto:iamsurajsavle@gmail.com"
                  className="text-base font-bold text-zinc-900 hover:text-[#4DB2E0] transition-colors"
                >
                  iamsurajsavle@gmail.com
                </a>
              </div>

              {/* Box 4: Networks */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider  uppercase">
                  Social network
                </span>
                <div className="flex items-center gap-4 mt-1 text-zinc-600">
                  <a
                    href="#"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaXTwitter className="size-4" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaLinkedinIn className="size-4" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaGithub className="size-4" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaInstagram className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: PREMIUM FLOATING INPUT FORM CARD */}
          <div className="lg:col-span-5 bg-white border-t md:border-t-0 md:border-l py-6 sm:p-10 relative overflow-hidden group/card">
            {/* Success Overlay with premium backdrop-blur styling */}
            {submitted && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-[32px] z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center text-white mb-4 shadow-md shadow-zinc-950/10">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  Message Captured
                </h3>
                <p className="text-xs text-zinc-500 max-w-[240px] mt-1 leading-relaxed">
                  We will review your ecosystem configuration parameters and get
                  back to you shortly.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 relative z-10"
            >
              {/* Input 1: Full Name */}
              <div className="flex flex-col gap-3 border-b py-2.5 transition-all duration-200">
                <label className="text-2xl font-bold  tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Carter"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0"
                />
              </div>

              {/* Input 2: Email */}
              <div className="flex flex-col gap-3 border-b py-2.5 transition-all duration-200">
                <label className="text-2xl font-bold  tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0"
                />
              </div>

              {/* Input 3: Subject */}
              <div className="flex flex-col gap-3 border-b py-2.5 transition-all duration-200">
                <label className="text-2xl font-bold  tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ecosystem development scope"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300 font-medium focus:ring-0"
                />
              </div>

              {/* Input 4: Message */}
              <div className="flex flex-col gap-3 border-b py-2.5 transition-all duration-200">
                <label className="text-2xl font-bold  tracking-wider">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your product goals..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-transparent border-0 outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300 font-medium resize-none leading-relaxed focus:ring-0"
                />
              </div>

              {/* Submit Pill Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-md shadow-zinc-950/10 hover:shadow-xl transition-all duration-300 group active:scale-[0.98]"
              >
                <span>Send message</span>
                <IoPaperPlaneOutline className="size-3.5  group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* 3. EDGE-TO-EDGE MONOCHROME MAP CONTAINER (Inspired by image_379f24.jpg) */}
        <div className="w-full h-[320px] sm:h-[420px] overflow-hidden border border-zinc-200 relative shadow-inner bg-zinc-100 grayscale contrast-115 brightness-95 transition-all duration-700">
          <iframe
            title="UpgradeUX Navi Mumbai Location Map"
            src="https://maps.google.com/maps?q=Navi%20Mumbai,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
