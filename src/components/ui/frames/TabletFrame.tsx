"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TabletFrameProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
}

const TabletFrame: React.FC<TabletFrameProps> = ({
  videoSrc,
  poster,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(frameRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={frameRef} className={`relative w-full flex justify-center select-none ${className}`}>
      <div className="relative w-full max-w-[190px] xs:max-w-[230px] sm:max-w-[280px] md:max-w-[320px]">
        
        {/* Gray Tablet Bezel Wrapper */}
        <div className="relative bg-zinc-300 p-0.5 xs:p-1 sm:p-1.5 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] shadow-md border border-zinc-400/60 ring-1 ring-black/5">
          
          {/* Top Sensor Cluster (Adjusted color layout for light frame background) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-0.5 z-20">
            <div className="w-5 xs:w-1 h-0.5 xs:h-1 bg-zinc-400 rounded-full border border-zinc-500/30 flex items-center justify-center">
              <div className="w-5 h-1 bg-zinc-800 rounded-full" />
            </div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full opacity-40" />
          </div>

          <div className="relative bg-zinc-950 rounded-[14px] xs:rounded-[16px] sm:rounded-[18px] overflow-hidden aspect-[3/4] shadow-inner z-10 border border-zinc-900/40">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-2 xs:p-3 sm:p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-1 xs:pb-2">
                  <div className="flex gap-0.5 xs:flex-row">
                    <div className="w-0.5 h-0.5 xs:w-1 xs:h-1 rounded-full bg-zinc-800" />
                    <div className="w-0.5 h-0.5 xs:w-1 xs:h-1 rounded-full bg-zinc-800" />
                  </div>
                  <div className="px-1 xs:px-1.5 py-0.5 bg-zinc-900/40 rounded text-[6px] xs:text-[8px] font-mono text-zinc-600 border border-zinc-900/20">
                    upgradeUx.com
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center p-0.5">
                  <div className="text-[8px] xs:text-[10px] font-mono font-bold tracking-wider text-zinc-500">
                    UPGRADE Ux
                  </div>
                  <div className="text-[6px] xs:text-[8px] font-mono text-zinc-700 mt-0.5">
                    Micro Tablet Layout
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1 xs:gap-1.5">
                  <div className="h-3 xs:h-4 bg-zinc-900/30 rounded border border-zinc-900/10" />
                  <div className="h-3 xs:h-4 bg-zinc-900/30 rounded border border-zinc-900/10" />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* --- REALISTIC ELLIPTICAL DROP SHADOW --- */}
        <div className="absolute -bottom-4 left-[4%] right-[4%] h-4 bg-zinc-950/15 rounded-full blur-md mix-blend-multiply pointer-events-none -z-10" />

      </div>
    </div>
  );
};

export default TabletFrame;