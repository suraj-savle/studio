"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Logo() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);
  const fullText = "UpgradeUx";

  // Random animation trigger
  useEffect(() => {
    const triggerRandomAnimation = () => {
      const randomDelay = Math.random() * 8000 + 3000; // 3-11 seconds
      setTimeout(() => {
        setIsAnimating(true);
        setShowExpanded(true);
        
        // Reset after animation completes
        setTimeout(() => {
          setShowExpanded(false);
          setTimeout(() => {
            setIsAnimating(false);
          }, 300);
        }, 2500);
        
        triggerRandomAnimation();
      }, randomDelay);
    };

    triggerRandomAnimation();
    return () => {};
  }, []);

  // Hover animation
  const handleHoverStart = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowExpanded(true);
      setTimeout(() => {
        setShowExpanded(false);
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 2500);
    }
  };

  return (
    <div className="flex items-center min-w-[150px]">
      <Link 
        href="/" 
        className="group flex items-center focus:outline-none relative"
        onMouseEnter={handleHoverStart}
      >
        <span
          className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 group-hover:opacity-80 relative"
          style={{ color: "var(--primary-text)" }}
        >
          <span className="relative inline-block">
            {/* Always show "Ux" */}
            <span className="inline-block">Ux</span>
            
            {/* Expanded text overlay */}
            <AnimatePresence mode="wait">
              {showExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
                >
                  {fullText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20, rotateX: 90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className="inline-block"
                      style={{
                        transformOrigin: "center bottom",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Shine effect */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-200%" }}
              animate={{
                x: isAnimating ? "200%" : "-200%",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2,
              }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                filter: "blur(4px)",
              }}
            />
          </span>

          {/* Underline glow */}
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4DB2E0] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: isAnimating ? 1 : 0,
            }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </span>

        {/* Pulse dot */}
        <motion.span
          className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#4DB2E0]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Link>
    </div>
  );
}