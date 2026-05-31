"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { 
  Terminal, 
  Workflow, 
  Code2, 
  Layers, 
  ShieldCheck, 
  CloudLightning,
  ChevronRight,
  GitBranch,
  Cpu,
  MapPin,
  Clock,
  CheckCircle2,
  Zap
} from "lucide-react";

interface TransitStationProps {
  station: string;
  index: number;
  side: 'left' | 'right';
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
  technical: { code: string; details: string[] };
  progress: number;
}

const TransitStation = ({ 
  station, 
  index, 
  side, 
  icon: Icon, 
  title, 
  description, 
  technical, 
  progress
}: TransitStationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="relative flex flex-col lg:flex-row items-stretch justify-start min-h-[220px] mb-12 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central Node Pin */}
      <motion.div 
        className="absolute left-4 lg:left-1/2 top-6 z-30 -translate-x-1/2"
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#FAFAFA] bg-[#09090B] shadow-sm">
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#18181B] opacity-30"
            animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Progress Floating Text */}
      <motion.div 
        className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 -mt-7 z-20"
        initial={{ opacity: 0, y: 5 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <div className="text-[9px] font-mono text-[#71717A] font-medium tracking-wider whitespace-nowrap bg-[#F4F4F5] px-2 py-0.5 rounded border border-[#18181B]/5">
          {progress}% COMPLETED
        </div>
      </motion.div>

      {/* Adaptive Content Matrix */}
      <div className={`w-full flex ${side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
        <div className={`w-full lg:w-[46%] pl-12 lg:pl-0 ${side === 'left' ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
          <motion.div 
            className="rounded-2xl border border-[#18181B]/5 bg-[#FAFAFA]/90 backdrop-blur-md p-6 transition-all duration-500 hover:border-[#09090B]/20 relative overflow-hidden"
            whileHover={{ y: -2 }}
          >
            {/* Header Core */}
            <div className={`flex items-center gap-3 mb-3 ${side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4F4F5] text-[#18181B] border border-[#18181B]/5 shadow-sm">
                <Icon size={16} />
              </div>
              <div>
                <div className={`flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[#71717A] ${side === 'left' ? 'lg:justify-end' : ''}`}>
                  {side === 'left' && <MapPin size={9} />}
                  <span>STATION // {station}</span>
                  {side === 'right' && <MapPin size={9} />}
                </div>
                <h3 className="text-lg font-normal text-[#18181B] tracking-tight mt-0.5">
                  {title}
                </h3>
              </div>
            </div>

            {/* Description Area */}
            <p className="text-xs text-[#71717A] leading-relaxed mb-4">
              {description}
            </p>

            {/* Terminal Log Block */}
            <div className="rounded-xl bg-[#F4F4F5] p-3 text-left font-mono text-[10px] border border-[#18181B]/5">
              <div className="text-[#18181B] font-medium mb-1.5 flex items-center gap-1.5">
                {side === 'left' ? <GitBranch size={11} className="text-[#71717A]" /> : <Cpu size={11} className="text-[#71717A]" />}
                <span>{technical.code}</span>
              </div>
              {technical.details.map((detail, idx) => (
                <div key={idx} className="text-[#71717A] flex items-start gap-1 mt-0.5">
                  <ChevronRight size={10} className="text-[#18181B] mt-0.5 flex-shrink-0" />
                  <span className="opacity-80">{detail}</span>
                </div>
              ))}
            </div>

            {/* Bottom Meta Interface */}
            <div className="mt-4 pt-3 border-t border-[#18181B]/5 flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1.5 text-[#71717A]">
                <Clock size={11} />
                <span>Est. Week {index + 1}</span>
              </div>
              <motion.div 
                className="flex items-center gap-0.5 text-[#18181B] font-medium cursor-pointer"
                animate={{ x: isHovered ? 2 : 0 }}
              >
                <span>Details</span>
                <ChevronRight size={10} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block lg:w-[8%]" />
        <div className="hidden lg:block lg:w-[46%]" />
      </div>
    </motion.div>
  );
};

export default function HowWeWorkMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setScrollPercentage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });

  const trackHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(v => {
      setScrollPercentage(Math.round(v * 100));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const stations = [
    {
      station: "01",
      side: "left" as const,
      icon: Terminal,
      title: "Requirement Discovery",
      description: "Extracting core architectural metrics and business constraints. We chart telemetry vectors, user paths, and integration touchpoints to isolate early technical complexities.",
      technical: {
        code: "intake_stream.log",
        details: ["Mapping constraints & dependencies... DONE", "Structural roadmap definition set", "Client discovery workshop complete"]
      },
      progress: 100
    },
    {
      station: "02",
      side: "right" as const,
      icon: Workflow,
      title: "System Architecture",
      description: "Constructing the modular application layout system. We declare deterministic data model structures, API route matrices, and decoupled client-server channels.",
      technical: {
        code: "schema_validation.ts",
        details: ["Data Models: MERN Matrix", "Next.js API Routes defined", "Microservices architecture planned"]
      },
      progress: 100
    },
    {
      station: "03",
      side: "left" as const,
      icon: Layers,
      title: "Interface & Aesthetics",
      description: "Transforming layout primitives into high-fidelity screens. We implement sleek glassmorphic wrappers, organic fluid transitions, and responsive canvas sizing arrays.",
      technical: {
        code: "style_tokens.json",
        details: ["Glassmorphic Glass UI system", "Micro-interactions defined", "Responsive breakpoints configured"]
      },
      progress: 100
    },
    {
      station: "04",
      side: "right" as const,
      icon: Code2,
      title: "Full-Stack Construction",
      description: "Assembling runtime routines. Components are wired up using React states, server actions, strict types, and robust query controllers.",
      technical: {
        code: "npm run build:chunks",
        details: ["Compiling route endpoints... OK", "Dynamic server actions verified", "All components integrated"]
      },
      progress: 100
    },
    {
      station: "05",
      side: "left" as const,
      icon: ShieldCheck,
      title: "Guardrail & Security",
      description: "Executing rigorous component analysis. We resolve client-side hydration hurdles, scrub environment payloads, and run strict integration profiling.",
      technical: {
        code: "vitest run --coverage",
        details: ["Pass: 156 units (100%)", "Zero Payload Leaks detected", "Security audit passed"]
      },
      progress: 100
    },
    {
      station: "06",
      side: "right" as const,
      icon: CloudLightning,
      title: "Production Shipment",
      description: "Deploying production-ready build artifacts to serverless edge node infrastructure. Continuous delivery tracking ensures atomic rollouts and global reach.",
      technical: {
        code: "vercel --prod --confirm",
        details: ["Deployment Active", "100/100 Core Score achieved", "Global CDN distribution live"]
      },
      progress: 100
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#FAFAFA] py-24 overflow-hidden text-[#18181B]"
    >
      {/* Canvas Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#18181B_1px,transparent_1px),linear-gradient(to_bottom,#18181B_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 opacity-[0.01] mix-blend-multiply bg-[url('https://grainy-gradients.vercel. Vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#18181B]/5 bg-[#F4F4F5] px-3.5 py-1.5 shadow-sm">
            <Zap size={11} className="text-[#18181B]" />
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#71717A]">
              Execution Architecture
            </span>
          </div>
          
          <h2 className="text-4xl font-light tracking-tight text-[#18181B] sm:text-5xl mb-3 leading-tight">
            The Production{" "}
            <span className="font-normal border-b border-[#09090B] pb-0.5">
              Transit Pipeline
            </span>
          </h2>
          
          <p className="text-xs text-[#71717A] font-mono opacity-80 mt-4">
            // A deterministic track map mapping concepts into live environments
          </p>

          {/* Progress Architecture Component */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-24 h-[2px] bg-[#F4F4F5] border border-[#18181B]/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#09090B] rounded-full"
                style={{ width: trackHeight }}
              />
            </div>
            <span className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider">
              Pipeline Map Tracking
            </span>
          </div>
        </motion.div>

        {/* Dynamic Map Track Blueprint Layout */}
        <div className="relative">
          
          {/* Base Track Layout */}
          <div className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-[1px] bg-[#18181B]/10 -translate-x-1/2 pointer-events-none" />
          
          {/* Active Process Progress Line */}
          <motion.div 
            className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-[1px] bg-[#09090B] -translate-x-1/2 pointer-events-none will-change-transform"
            style={{ height: trackHeight }}
          />

          {/* Starting Cap Node */}
          <div className="absolute left-4 lg:left-1/2 -top-2 -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-2 h-2 rounded-full bg-[#09090B]" />
              <span className="text-[7px] font-mono tracking-widest text-[#71717A]">START</span>
            </div>
          </div>

          {/* Render Stations Stack */}
          {stations.map((station, idx) => (
            <TransitStation
              key={idx}
              station={station.station}
              index={idx}
              side={station.side}
              icon={station.icon}
              title={station.title}
              description={station.description}
              technical={station.technical}
              progress={station.progress}
            />
          ))}

          {/* End Cap Node */}
          <div className="absolute left-4 lg:left-1/2 -bottom-5 -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-[#09090B] flex items-center justify-center text-[#FAFAFA] shadow-sm">
                <CheckCircle2 size={10} />
              </div>
              <span className="text-[7px] font-mono tracking-widest text-[#09090B] font-bold">
                PROD RUNTIME
              </span>
            </div>
          </div>
        </div>

        {/* Structural Metrics Framework Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 bg-[#F4F4F5] rounded-2xl border border-[#18181B]/5 p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-light text-[#09090B]">06</div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-[#71717A] mt-1">Pipelines Live</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#09090B]">4-6</div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-[#71717A] mt-1">Weeks Scope</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#09090B]">100%</div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-[#71717A] mt-1">Deterministic</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#09090B]">Atomic</div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-[#71717A] mt-1">Build Shipment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}