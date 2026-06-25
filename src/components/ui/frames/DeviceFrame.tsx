"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MobileFrame from "./MobileFrame";
import TabletFrame from "./TabletFrame";
import LaptopFrame from "./LaptopFrame";

interface DeviceShowcaseProps {
  className?: string;
  mobileVideo?: string;
  tabletVideo?: string;
  laptopVideo?: string;
}

const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({
  className = "",
  mobileVideo = "/videos/mobile-demo.mp4",
  tabletVideo = "/videos/tablet-demo.mp4",
  laptopVideo = "/vibe-toast.mp4",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center justify-center bg-zinc-50/40 rounded-3xl ${className}`}
    >
      <div className="w-full max-w-2xl text-center mb-12 sm:mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 text-zinc-100 rounded-full text-[11px] font-mono tracking-wider uppercase mb-4 border border-zinc-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Omnichannel Delivery
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Flawless on every viewport.
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-500 max-w-lg font-normal leading-relaxed">
          We engineer adaptive digital ecosystems. Your software scales fluidly
          across desktop, tablet, and mobile displays without compromising
          performance or aesthetics.
        </p>
      </div>

      <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center native-device-composite select-none pointer-events-none origin-center px-2 sm:px-0">
        <div className="max-w-[130px] sm:max-w-[160px] lg:max-w-[220px] xl:max-w-[260px] flex justify-center order-1 z-30 -mr-8 sm:-mr-12 xl:-mr-14 sm:scale-90 select-none">
          <TabletFrame
            videoSrc={tabletVideo}
            poster="/posters/tablet-poster.jpg"
          />
        </div>

        <div className="max-w-[360px] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[620px] flex justify-center order-2 z-20 relative select-none">
          <LaptopFrame
            videoSrc={laptopVideo}
            poster="/posters/laptop-poster.jpg"
          />
        </div>

        <div className="max-w-[95px] sm:max-w-[100px] lg:max-w-[130px] xl:max-w-[150px] flex justify-center order-3 z-30 -ml-10 sm:-ml-14 xl:-ml-16 sm:scale-95 select-none pt-2 sm:pt-6">
          <MobileFrame
            videoSrc={mobileVideo}
            poster="/posters/mobile-poster.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceShowcase;
