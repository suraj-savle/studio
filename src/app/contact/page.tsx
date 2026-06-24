"use client";

import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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
        <div
          className="w-full h-[220px] sm:h-[320px] relative overflow-hidden mb-16 sm:mb-24 "
          style={{
            background: "linear-gradient(to bottom, #4DB2E0 0%, #FFFFFF 100%)",
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Contacts
          </h1>
        </div>

        {/* 2. MIDDLE TWO-COLUMN GRID INTERACTION LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* LEFT PANEL: CONTENT STRIP & METADATA GRID */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.15] mb-6">
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
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Call Center
                </span>
                <a
                  href="tel:+912218002345"
                  className="text-base font-bold text-zinc-900 hover:text-[#4DB2E0] transition-colors"
                >
                  +91 (22) 1800-2345
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-xs text-zinc-500 font-medium"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Box 2: Location Parameters */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Our Location
                </span>
                <p className="text-base font-bold text-zinc-900 leading-tight">
                  Bandra Kurla Complex
                </p>
                <span className="text-xs text-zinc-500 font-medium">
                  Mumbai, MH – 400051, India
                </span>
              </div>

              {/* Box 3: Email Coordinates */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Email
                </span>
                <a
                  href="mailto:hello@surajdev.com"
                  className="text-base font-bold text-zinc-900 hover:text-[#4DB2E0] transition-colors"
                >
                  hello@surajdev.com
                </a>
              </div>

              {/* Box 4: Networks */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Social network
                </span>
                <div className="flex items-center gap-4 mt-1 text-zinc-600">
                  <a
                    href="#"
                    className="hover:text-[#4DB2E0] transition-colors"
                  >
                    <FaTwitter className="size-4" />
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

          {/* RIGHT PANEL: MINIMAL FLOATING INPUT FORM CARD */}
          <div className="lg:col-span-5 bg-[#F8F9FA] border border-zinc-200/50 rounded-[32px] p-8 sm:p-10 shadow-xs relative">
            {submitted && (
              <div className="absolute inset-0 bg-[#F8F9FA]/FA rounded-[32px] z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                <span className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white mb-3">
                  ✓
                </span>
                <h3 className="text-base font-bold text-zinc-950">
                  Message Captured
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  We will review your ecosystem configuration shortly.
                </p>
              </div>
            )}

            <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
              Get in Touch
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-8">
              Define your goals and identify areas where modern design and AI
              integrations can add explosive value to your corporate footprint.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Input 1 */}
              <div className="flex flex-col border-b border-zinc-200 focus-within:border-zinc-950 transition-colors pb-1.5">
                <label className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Carter"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-transparent border-none outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300"
                />
              </div>

              {/* Input 2 */}
              <div className="flex flex-col border-b border-zinc-200 focus-within:border-zinc-950 transition-colors pb-1.5">
                <label className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-transparent border-none outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300"
                />
              </div>

              {/* Input 3 */}
              <div className="flex flex-col border-b border-zinc-200 focus-within:border-zinc-950 transition-colors pb-1.5">
                <label className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
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
                  className="w-full bg-transparent border-none outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300"
                />
              </div>

              {/* Input 4 */}
              <div className="flex flex-col border-b border-zinc-200 focus-within:border-zinc-950 transition-colors pb-1.5">
                <label className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Tell us about your product goals..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-transparent border-none outline-hidden p-0 text-sm text-zinc-900 placeholder:text-zinc-300 resize-none leading-relaxed"
                />
              </div>

              {/* Submit Pill Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 self-start mt-4 px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-xs font-semibold tracking-wide shadow-xs transition-colors group"
              >
                <span>Send a message</span>
                <IoPaperPlaneOutline className="size-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* 3. EDGE-TO-EDGE MONOCHROME MAP CONTAINER (Inspired by image_379f24.jpg) */}
        <div className="w-full h-[320px] sm:h-[420px] rounded-[32px] overflow-hidden border border-zinc-200 relative shadow-inner bg-zinc-100 grayscale contrast-115 brightness-95 hover:grayscale-0 hover:brightness-100 transition-all duration-700">
          <iframe
            title="UpgradeUX Mumbai Headquarters Location"
            src="https://maps.google.com/maps?q=Bandra%20Kurla%20Complex,%20Mumbai,%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
