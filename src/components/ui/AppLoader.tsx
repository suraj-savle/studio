"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AppLoader() {
  const [isFinished, setIsFinished] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = "hidden";
    
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        let next;
        if (isLoaded) {
          next = prev + 5; // Clean finish burst
        } else {
          next = prev < 88 ? prev + (prev < 45 ? 2 : 1) : prev; 
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            document.body.style.overflow = "unset";
          }, 250); // Clear visual confirmation window
          return 100;
        }
        return next;
      });
    }, 22);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [isLoaded]);

  // Clean layout casing for brand typography match
  const nameLetters = "Upgrade Ux".split("");

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-50 w-screen h-screen select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Light Theme Clean Engineering Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02]" 
            style={{
              backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative flex flex-col items-center justify-center text-center px-6">

            {/* Title Brand Layout Engine */}
            <div className="flex overflow-hidden mb-10 sm:mb-12">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl sm:text-9xl font-black bg-clip-text text-transparent bg-linear-to-b from-[#FFFFFF] to-[#4DB2E0] uppercase inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12 + (i * 0.035),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* <div className="w-44 sm:w-156 flex flex-col gap-2.5">
              <div className="relative h-0.5 w-full bg-zinc-200 rounded overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-linear-to-r from-[#00aeff] to-[#4DB2E0]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-zinc-400 font-mono text-[10px] font-bold tracking-wider">
                <span className="uppercase opacity-60">System Ready</span>
                <div className="flex items-baseline gap-0.5 text-zinc-500">
                  <span className="tabular-nums font-black text-zinc-900">{progress}</span>
                  <span className="opacity-60">%</span>
                </div>
              </div>
            </div> */}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}