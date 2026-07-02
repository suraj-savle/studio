"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MobileFrameProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
}

const MobileFrame: React.FC<MobileFrameProps> = ({
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
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={frameRef} className={`relative w-full flex justify-center select-none ${className}`}>
      <div className="relative w-full max-w-[170px] xs:max-w-[210px] sm:max-w-[240px] md:max-w-[280px]">
        
        {/* Gray Mobile Outer Bezel/Chassis */}
        <div className="relative bg-zinc-300 p-0.5 xs:p-1 sm:p-1 rounded-[12px] xs:rounded-[26px] sm:rounded-[16px] shadow-md border border-zinc-400/60 ring-1 ring-black/5">
          
          {/* Top Speaker/Camera Dynamic Island Component */}
          <div className="absolute top-1 xs:top-2 sm:top-2 left-1/2 -translate-x-1/2 w-6 xs:w-8 h-1.5 xs:h-2.5 bg-zinc-400 rounded-full z-20 flex items-center justify-end px-0.5 xs:px-1 border border-zinc-500/30 shadow-inner">
            <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-zinc-800 rounded-full border border-blue-900/20 flex items-center justify-center">
              <div className="w-px h-px bg-blue-500/30 rounded-full opacity-60" />
            </div>
          </div>
          
          {/* Screen Display Area */}
          <div className="relative bg-zinc-950 rounded-[12px] xs:rounded-[22px] sm:rounded-[16px] overflow-hidden aspect-[9/19.5] shadow-inner z-10 border border-zinc-900/40">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-2 xs:p-3 sm:p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pt-1 xs:pt-2">
                  <span className="text-[6px] xs:text-[7px] font-mono font-bold text-zinc-600">9:41</span>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1 h-0.5 xs:w-1.5 xs:h-1 bg-zinc-700 rounded-xs" />
                    <div className="w-2 h-1 xs:w-2.5 xs:h-1.5 bg-zinc-700 rounded-xs" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center p-0.5">
                  <div className="text-[7px] xs:text-[9px] font-mono font-bold tracking-wider text-zinc-500">
                    UPGRADE Ux
                  </div>
                  <div className="text-[5px] xs:text-[7px] font-mono text-zinc-700 mt-0.5">
                    Mobile Viewport
                  </div>
                </div>

                <div className="space-y-0.5 xs:space-y-1 w-full">
                  <div className="h-2 xs:h-3 bg-zinc-900/40 rounded border border-zinc-900/10 w-full" />
                  <div className="h-2 xs:h-3 bg-zinc-900/40 rounded border border-zinc-900/10 w-2/3" />
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Virtual Home Indicator Strip */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-8 xs:w-12 h-0.5 bg-zinc-400 rounded-full z-20 opacity-50" />
        </div>
        
        {/* --- REALISTIC BLUR SHADOW UNDERFOOT --- */}
        <div className="absolute -bottom-4 left-[6%] right-[6%] h-4 bg-zinc-950/15 rounded-full blur-md mix-blend-multiply pointer-events-none -z-10" />
        
      </div>
    </div>
  );
};

export default MobileFrame;