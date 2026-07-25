"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AppLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.45,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#eef9ff]" />

          {/* Optional subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right,#000 1px,transparent 1px),
                linear-gradient(to bottom,#000 1px,transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative text-5xl sm:text-8xl font-black tracking-tight bg-gradient-to-b from-[#4DB2E0] to-[#7b7c7c] bg-clip-text text-transparent"
          >
            UpgradeUX
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}