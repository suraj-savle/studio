"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // close menu automatically when back on top
      if (window.scrollY < 80) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed left-0 top-0 z-50 flex h-20 w-full items-center px-6 md:h-24 md:px-12 transition-all duration-500 ${
          isScrolled ? "justify-end" : "justify-between"
        }`}
      >
        {/* LEFT : BRAND */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href="/" className="group relative flex items-center">
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col leading-none"
                >
                  <div className="flex items-end gap-2">
                    <span className="text-[15px] font-semibold tracking-[-0.04em] text-black md:text-[17px]">
                      SS
                    </span>

                    <span className="mb-px text-[10px] font-medium uppercase tracking-[0.35em] text-black/35 transition-all duration-300 group-hover:text-black/60">
                      Studio
                    </span>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 h-px bg-black/70"
                  />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CENTER NAV */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden items-center gap-10 md:flex lg:gap-14"
            >
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative overflow-hidden py-2"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-[14px] overflow-hidden"
                  >
                    <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-black/70 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0">
                      {link.name}
                    </span>

                    <span className="absolute inset-0 translate-y-full text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                      {link.name}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 h-px origin-left bg-black"
                  />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* CTA BEFORE SCROLL */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.button
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative hidden overflow-hidden rounded-full border border-black/10 bg-black px-6 py-3 sm:block"
              >
                <div className="absolute inset-0 translate-y-full rounded-full bg-neutral-800 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />

                <span className="relative z-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
                  Book Call
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: "easeInOut",
                    }}
                    className="text-xs"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* HAMBURGER ONLY AFTER SCROLL */}
          <AnimatePresence>
            {isScrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative z-[60] flex h-12 w-12 items-center justify-center"
              >
                {menuOpen ? (
                  <X className="h-5 w-5 text-black" />
                ) : (
                  <Menu className="h-5 w-5 text-black" />
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      {/* FULLSCREEN MENU */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "-100%",
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-2xl"
          >
            {/* Inner Content */}
            <div className="flex h-full flex-col items-center justify-center gap-10 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 40,
                  }}
                  transition={{
                    delay: 0.12 + i * 0.08,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative block overflow-hidden"
                  >
                    <span className="block text-5xl md:text-7xl font-light tracking-[-0.06em] text-black/70 transition-all duration-500 group-hover:text-black">
                      {link.name}
                    </span>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-3 h-px origin-left bg-black"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
