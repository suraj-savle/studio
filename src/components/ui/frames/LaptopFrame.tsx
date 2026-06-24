"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LaptopFrameProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
}

const LaptopFrame: React.FC<LaptopFrameProps> = ({
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
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={frameRef} className={`relative w-full flex flex-col items-center select-none ${className}`}>
      <div className="relative w-full max-w-[200px] xs:max-w-[260px] sm:max-w-[440px] md:max-w-[590px]">
        
        <div className="relative bg-zinc-900 rounded-t-lg xs:rounded-t-xl p-0.5 xs:p-1 sm:p-1.5 shadow-xl border border-zinc-800/80">
          <div className="relative bg-zinc-950 rounded-sm xs:rounded-md sm:rounded-lg overflow-hidden aspect-[16/10]">
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
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-2 xs:p-3 sm:p-4 flex flex-col justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 xs:gap-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-800" />
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-800" />
                  </div>
                  <div className="flex-1 mx-1 sm:mx-2 px-1.5 sm:px-3 py-0.5 bg-zinc-900/50 rounded text-[6px] xs:text-[8px] sm:text-[10px] font-mono text-zinc-600 text-center border border-zinc-800/40">
                    upgradelabs.com
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center text-center p-1 sm:p-2">
                  <div className="text-[8px] xs:text-[10px] sm:text-xs font-mono font-bold tracking-wider text-zinc-400">
                    UPGRADE LABS
                  </div>
                  <div className="text-[6px] xs:text-[8px] sm:text-[10px] font-mono text-zinc-600 mt-0.5">
                    Internal System Frame
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  <div className="h-2 sm:h-4 bg-zinc-900/60 rounded border border-zinc-800/30" />
                  <div className="h-2 sm:h-4 bg-zinc-900/60 rounded border border-zinc-800/30" />
                  <div className="h-2 sm:h-4 bg-zinc-900/60 rounded border border-zinc-800/30" />
                  <div className="h-2 sm:h-4 bg-zinc-900/60 rounded border border-zinc-800/30" />
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-zinc-800 rounded-full" />
        </div>

        <div className="relative w-[104%] -ml-[2%] h-1 sm:h-2 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-950 rounded-b-xs sm:rounded-b-md border-b border-zinc-950 shadow-md" />
        <div className="relative w-[24%] mx-auto h-0.5 sm:h-1 bg-zinc-950 rounded-b-xs sm:rounded-b-md" />
        
      </div>
    </div>
  );
};

export default LaptopFrame;