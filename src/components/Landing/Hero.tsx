"use client";
import React from "react";

const rotatingText = [
  "Lightning-Fast Performance",
  "Designed to Convert Visitors into Customers",
  "SEO-Optimized for Higher Rankings",
  "Built with Modern Technologies",
  "Scalable Solutions for Growing Businesses",
];

const domains = [
  "E-Commerce",
  "SaaS Platforms",
  "Corporate Websites",
  "Custom Web Apps",
  "UI/UX Design",
  "SEO Strategy",
  "Brand Identity",
];

export default function HeroHeading() {
  const totalDuration = rotatingText.length * 3.2; // 16 seconds total loop

  return (
    <section className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16 md:py-0 overflow-x-hidden select-none bg-linear-to-b from-[#4DB2E0] to-[#ffffffe4] border-none outline-none">
      {/* BACKGROUND VIDEO FRAMEWORK CONTAINER */}
      <div className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 border-none outline-none select-none">
        <video
          poster="/landing-page.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/landing-page-1.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
      </div>

      {/* CSS Keyframes injected directly to avoid external stylesheet dependencies */}
      <style jsx global>{`
        @keyframes customFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes textRotationLoop {
          0%,
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          20%,
          95% {
            opacity: 0;
            transform: translateY(-16px);
          }
          100% {
            opacity: 0;
            transform: translateY(16px);
          }
        }
        @keyframes marqueeLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-fade-up {
          animation: customFadeUp 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-marquee {
          animation: marqueeLoop 25s linear infinite;
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center w-full">
        <div className="block relative decoration-transparent outline-none group">
          <div className="relative select-none py-2 md:py-4">
            {/* Dynamic Typography Header Layout */}
            <h1
              className="relative z-10 flex flex-col items-center leading-[0.9] tracking-tighter gap-2 md:gap-4 animate-fade-up"
              style={{ animationDuration: "1000ms" }}
            >
              <span className="text-[3rem] sm:text-[5rem] font-medium text-white">
                Your Next Best
              </span>

              <span className="text-[1.5rem] sm:text-[5rem] text-[#17282f]">
                Business decisions start here.
              </span>
            </h1>
          </div>
        </div>

        {/* --- PURE CSS FIXED TEXT ROTATOR --- */}
        <div
          className="relative h-8 md:h-8 overflow-hidden w-full flex justify-center animate-fade-up"
          style={{ animationDuration: "1000ms", animationDelay: "75ms" }}
        >
          {rotatingText.map((text, idx) => {
            const delay = idx * 3.2;
            return (
              <span
                key={idx}
                className="absolute text-xs md:text-sm font-medium text-[#1f282d] opacity-0 transform translate-y-2 sm:translate-y-4"
                style={{
                  animation: `textRotationLoop ${totalDuration}s infinite ease-in-out`,
                  animationDelay: `${delay}s`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>

        {/* Studio Agency Body Description block */}
        <p
          className=" sm:mt-6 max-w-3xl text-[10px] sm:text-sm leading-3.5 sm:leading-5 text-zinc-700 px-4 animate-fade-up"
          style={{ animationDuration: "1000ms", animationDelay: "150ms" }}
        >
          We create high-performance websites that help businesses attract more
          customers, build credibility, and increase revenue. Every project is
          crafted with modern design, clean code, SEO best practices, and a
          seamless user experience that drives measurable results.
        </p>

        {/* --- INFINITE MARQUEE DOMAIN ROW --- */}
        <div
          className="relative sm:mt-5 w-full overflow-hidden py-4 animate-fade-up"
          style={{ animationDuration: "1000ms", animationDelay: "225ms" }}
        >
          <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
            {[...domains, ...domains].map((domain, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm md:text-base font-medium tracking-wide text-[#feffff] px-5 py-2"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
