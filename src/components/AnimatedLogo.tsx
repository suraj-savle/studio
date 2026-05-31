"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoExpanded, setIsAutoExpanded] = useState(false);

  const expanded = isHovered || isAutoExpanded;

  // Smooth random auto expand
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startLoop = () => {
      const randomDelay = Math.floor(Math.random() * 5000) + 5000;

      timeout = setTimeout(() => {
        setIsAutoExpanded(true);

        setTimeout(() => {
          setIsAutoExpanded(false);
          startLoop();
        }, 2600);
      }, randomDelay);
    };

    startLoop();

    return () => clearTimeout(timeout);
  }, []);

  const fullText = useMemo(() => "Suraj Savle", []);

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center"
    >
      <motion.div
        animate={{
          width: expanded ? 205 : 92,
        }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative flex h-11 items-center overflow-hidden rounded-full border border-black/10 bg-white/80 px-4 backdrop-blur-xl"
      >
        {/* Subtle Background Glow */}
        <motion.div
          animate={{
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent"
        />

        {/* COLLAPSED */}
        <motion.div
          animate={{
            opacity: expanded ? 0 : 1,
            y: expanded ? -12 : 0,
            filter: expanded ? "blur(4px)" : "blur(0px)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute left-4 flex items-end gap-2"
        >
          <span className="text-[15px] font-semibold tracking-[-0.05em] text-black">
            SS
          </span>

          <span className="mb-[1px] text-[9px] font-medium uppercase tracking-[0.32em] text-black/40">
            Studio
          </span>
        </motion.div>

        {/* EXPANDED */}
        <AnimatePresence mode="wait">
          {expanded && (
            <motion.div
              initial={{
                opacity: 0,
                y: 14,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -10,
                filter: "blur(6px)",
              }}
              transition={{
                duration: 0.55,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-4 flex items-end whitespace-nowrap"
            >
              {/* Name */}
              <div className="flex">
                {fullText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.018,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className={`text-[14px] font-medium tracking-[-0.045em] text-black ${
                      char === " " ? "mr-[4px]" : ""
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Studio */}
              <motion.span
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.18,
                  duration: 0.4,
                }}
                className="mb-[1px] ml-2 text-[9px] font-medium uppercase tracking-[0.34em] text-black/40"
              >
                Studio
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Line */}
        <motion.div
          animate={{
            scaleX: expanded ? 1 : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-gradient-to-r from-black/40 via-black/10 to-transparent"
        />
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;