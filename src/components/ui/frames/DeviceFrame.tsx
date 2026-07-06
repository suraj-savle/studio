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
  mobileVideo = "/video/mobile-video.mp4",
  tabletVideo = "/video/tablet-video.mp4",
  laptopVideo = "/video/laptop-video.mp4",
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
      className={`w-full max-w-7xl px-4 sm-px-0 my-24 flex flex-col mx-auto bg-zinc-50/40 rounded-3xl ${className}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-10 md:mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-zinc-950 leading-[1.1]">
              Flawless on every
              <br />
              <span className="text-zinc-900">viewport</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-700 max-w-sm ">
            We engineer adaptive digital ecosystems. Your software scales fluidly across desktop, tablet, and mobile displays without compromising performance or aesthetics.
          </p>
        </div>

      <div className="w-full flex flex-row items-center justify-center native-device-composite select-none pointer-events-none origin-center px-2 sm:px-0">
        <div className="max-w-[110px] sm:max-w-[160px] lg:max-w-[220px] xl:max-w-[260px] flex justify-center order-1 z-30 -mr-8 sm:-mr-12 xl:-mr-14 sm:scale-90 select-none">
          <TabletFrame
            videoSrc={tabletVideo}
          />
        </div>

        <div className="max-w-[400px] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[620px] flex justify-center order-2 z-20 relative select-none">
          <LaptopFrame
            videoSrc={laptopVideo}
          />
        </div>

        <div className="max-w-[75px] sm:max-w-[100px] lg:max-w-[135px] xl:max-w-[150px] flex justify-center order-3 z-30 -ml-10 sm:-ml-14 xl:-ml-16 sm:scale-95 select-none pt-2 sm:pt-6">
          <MobileFrame
            videoSrc={mobileVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceShowcase;
