"use client";

import React, { useState, useEffect } from "react";
import {
  TbSearch,
  TbPalette,
  TbCpu,
  TbShieldCheck,
  TbArrowRight,
  TbCheck,
} from "react-icons/tb";

// ============================================================================
// Types
// ============================================================================

interface ProcessStep {
  phase: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  metrics: { label: string; value: string }[];
  accentColor: string;
  features: string[];
}

const STEPS: ProcessStep[] = [
  {
    phase: "Step 01",
    title: "Discovery & Strategy",
    tagline: "Understanding your business before we build",
    description:
      "Every successful project starts with understanding your goals. We discuss your business, target audience, competitors, and requirements to create a clear roadmap that ensures your website delivers real business results.",
    icon: TbSearch,
    metrics: [
      { label: "Planning", value: "100%" },
      { label: "Duration", value: "1–2 Days" },
    ],
    accentColor: "indigo",
    features: [
      "Business Consultation",
      "Requirement Analysis",
      "Project Roadmap",
    ],
  },
  {
    phase: "Step 02",
    title: "UI/UX Design",
    tagline: "Designing experiences your customers will love",
    description:
      "We craft a modern, user-friendly interface that reflects your brand and creates a seamless experience across desktop, tablet, and mobile devices before development begins.",
    icon: TbPalette,
    metrics: [
      { label: "Design", value: "Custom" },
      { label: "Responsive", value: "100%" },
    ],
    accentColor: "violet",
    features: [
      "Custom UI Design",
      "Responsive Layout",
      "Interactive Prototype",
    ],
  },
  {
    phase: "Step 03",
    title: "Development & Optimization",
    tagline: "Building a fast, secure, and scalable website",
    description:
      "Once the design is approved, we transform it into a high-performance website using modern technologies. Every page is optimized for speed, SEO, accessibility, and a smooth user experience.",
    icon: TbCpu,
    metrics: [
      { label: "Performance", value: "90+" },
      { label: "SEO Ready", value: "Yes" },
    ],
    accentColor: "emerald",
    features: [
      "Clean Development",
      "Performance Optimization",
      "SEO Implementation",
    ],
  },
  {
    phase: "Step 04",
    title: "Testing, Launch & Support",
    tagline: "Launching with confidence and ongoing support",
    description:
      "Before going live, we thoroughly test every feature to ensure everything works perfectly. After launch, we continue supporting your website with updates, fixes, and guidance so your business stays online without worry.",
    icon: TbShieldCheck,
    metrics: [
      { label: "Testing", value: "Complete" },
      { label: "Support", value: "30 Days" },
    ],
    accentColor: "zinc",
    features: ["Quality Assurance", "Secure Deployment", "Post-Launch Support"],
  },
];

// ============================================================================
// Subcomponents
// ============================================================================

const ProgressIndicator: React.FC<{ current: number; total: number }> = ({
  current,
  total,
}) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-1 rounded-full transition-all duration-500 ${
          i === current
            ? "w-8 bg-zinc-950"
            : i < current
              ? "w-4 bg-zinc-400"
              : "w-4 bg-zinc-200"
        }`}
      />
    ))}
  </div>
);

const FeaturePill: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => (
  <div
    className="flex items-center gap-1.5 bg-zinc-50/80 border border-zinc-100/60 rounded-full px-1 sm:px-3 py-1 sm:py-1.5 animate-[fadeInUp_0.5s_ease-out_both]"
    style={{ animationDelay: `${delay}ms` }}
  >
    <TbCheck className="w-3 h-3 text-emerald-500" />
    <span className="text-[6px] sm:text-[10px] font-medium text-zinc-700">{text}</span>
  </div>
);

// ============================================================================
// Main Component
// ============================================================================

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentStep = STEPS[activeStep];

  // Color mapping for accent colors
  const getAccentClasses = (color: string) => {
    const map: Record<string, string> = {
      indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-200/30",
      violet: "from-violet-500/20 to-violet-500/5 border-violet-200/30",
      emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-200/30",
      zinc: "from-zinc-500/20 to-zinc-500/5 border-zinc-200/30",
    };
    return map[color] || map.zinc;
  };

  return (
    <section
      className="w-full py-12 sm:py-24 px-4 md:px-12  border-t border-zinc-200/30 selection:bg-zinc-950/10"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 space-y-4 relative">
          <div>
            <h2
              id="process-heading"
              className="text-3xl sm:text-5xl text-zinc-900 font-medium"
            >
              How we scale
            </h2>
            <h2
              id="process-heading"
              className="text-3xl sm:text-5xl text-zinc-900 font-medium"
            >
              your ecosystem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
            A precise four-stage deployment model calibrated to eliminate design
            clutter and maximize technical speed parameters.
          </p>
        </div>

        {/* Core Layout Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Left Layout Pane: The Interactive Curved Node Tree */}
          <div className="lg:col-span-5 flex justify-center relative min-h-[380px] lg:min-h-[460px]">
            {/* The SVG Curved Timeline Tracker */}
            <svg
              className="absolute left-[10%] sm:left-[25%] lg:left-[-30%] top-0 h-full w-40 pointer-events-none hidden sm:block"
              viewBox="0 0 100 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 10,0 C 80,100 80,300 10,400"
                stroke="#E4E4E7"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 10,0 C 80,100 80,300 10,400"
                stroke="#4DB2E0"
                strokeWidth="2"
                strokeDasharray="500"
                strokeDashoffset={500 - (activeStep + 1) * 100}
                className="transition-all duration-700 ease-in-out"
              />
            </svg>

            {/* Step Selection Node Stack */}
            <div className="flex flex-col justify-around w-full md:max-w-xs sm:max-w-none sm:pl-12 lg:pl-30 space-y-3 relative z-10">
              {STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                const isSelected = activeStep === idx;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={step.phase}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`group relative flex items-center gap-4 p-4 rounded-full border text-left transition-all duration-500 w-full sm:w-64 lg:w-60 xl:w-64 ${
                      isSelected
                        ? "bg-white border-zinc-200/80 shadow-xl shadow-zinc-950/5 translate-x-2 scale-[1.02]"
                        : isCompleted
                          ? "bg-zinc-50 border-zinc-200 opacity-60 hover:opacity-80"
                          : "bg-transparent border-zinc-500 opacity-50 hover:opacity-80 hover:bg-white/50"
                    }`}
                  >
                    {/* Node Badge Anchor */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-zinc-500 transition-all duration-500 shadow-sm ${
                        isSelected
                          ? "bg-zinc-950 text-white border-zinc-950 scale-110"
                          : isCompleted
                            ? "bg-[#4DB2E0] text-zinc-900 border-zinc-200"
                            : "bg-[#00aeff] text-zinc-900 border-zinc-700 group-hover:border-zinc-300"
                      }`}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>

                    <div>
                      <h4 className="text-xs text-zinc-950 mt-0.5">
                        {step.title}
                      </h4>
                    </div>

                    {/* Completion checkmark */}
                    {isCompleted && (
                      <div className="absolute -right-1 -top-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center animate-[popIn_0.3s_ease-out]">
                        <TbCheck className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Layout Pane: The Dynamic Folder Bento Display Card */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full relative p-2 select-none">
            {/* ====================================================================
      1. THE SCREEN / LAPTOP LID (Upright Position)
     ==================================================================== */}
            <div className="w-full max-w-2xl bg-[#52525b] p-1 pb-1 rounded-t-xl rounded-b-sm border-t border-x border-zinc-300/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] relative z-20">
              {/* Screen Outer Display Gasket (Black Bezel Frame) */}
              <div className="w-full bg-[#09090b] p-1 rounded-2xl pb-2 md:pb-4 shadow-[inset_0_12px_24px_rgba(0,0,0,0.4)] relative flex flex-col">
                {/* Hardware Camera Array Bezel Inset */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40 bg-zinc-900/90 px-3 py-0.5 rounded-full border border-zinc-800/60 shadow-md">
                  <div className="w-1 h-1 rounded-full bg-black" />
                  <div className="w-2 h-2 rounded-full bg-[#111115] border border-zinc-700 flex items-center justify-center relative">
                    <div className="w-0.5 h-0.5 rounded-full bg-indigo-500/60 shadow-[0_0_2px_#4f46e5]" />
                  </div>
                  <div className="w-1 h-1 rounded-full bg-emerald-500/40 shadow-[0_0_2px_#10b981] animate-pulse" />
                </div>

                {/* The Live Browser Display Interface Container */}
                <div
                  className="w-full bg-white rounded-lg overflow-hidden border border-zinc-950 flex flex-col relative z-20 shadow-2xl"
                  key={activeStep}
                >
                  {/* Hardware Glass Glare Coating Reflection Line */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none z-30 mix-blend-overlay" />

                  {/* Browser Top Navigation Bar */}
                  <div className="flex items-center justify-between gap-4 w-full bg-zinc-100 border-b border-zinc-300/80 px-2 sm:px-4 py-1 sm:py-2 shrink-0">
                    {/* OS Window Management Control Glyphs */}
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0.5px_1px_rgba(0,0,0,0.15)]" />
                      <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0.5px_1px_rgba(0,0,0,0.15)]" />
                      <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#27c93f] shadow-[0_0.5px_1px_rgba(0,0,0,0.15)]" />
                    </div>

                    {/* Active Web URL Address Area Bar */}
                    <div className="flex-1 max-w-md bg-white border border-zinc-300/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.02)] rounded-md py-0.5 px-1 sm:px-3 flex items-center justify-between gap-2 text-[6px] sm:text-[10px] text-zinc-500">
                      <div className="flex items-center gap-1.5 truncate">
                        <svg
                          className="w-2.5 h-2.5 text-emerald-600 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                        <span className="font-medium text-zinc-800">
                          localhost:3000
                        </span>
                        <span className="text-zinc-400">
                          /upgradeux/step-0{activeStep + 1}
                        </span>
                      </div>
                      <svg
                        className="w-2.5 h-2.5 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>

                    <div className="w-12 hidden sm:flex items-center gap-1.5 text-zinc-400 justify-end opacity-50">
                      <div className="w-2 h-2 border border-zinc-500 rounded-xs" />
                      <div className="w-2 h-0.5 bg-zinc-500" />
                    </div>
                  </div>

                  {/* Render Viewport Body Workspace Content (Completely Adaptive Dynamic Height) */}
                  <div className=" p-1 sm:p-4 space-y-6 relative flex-1 flex flex-col justify-between bg-white">
                    {/* Accent ambient lighting wash logic layer */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getAccentClasses(
                        currentStep.accentColor,
                      )} opacity-10 mix-blend-multiply transition-opacity duration-700 pointer-events-none z-0`}
                    />

                    <div className="h-30 sm:h-50 relative space-y-1 sm:space-y-2 z-10">
                      {/* Header Identity Core Layout */}
                      <div className="sm:space-y-2 animate-[fadeInUp_0.6s_ease-out]">
                        <div className="inline-flex items-center gap-1.5 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full text-[5px] sm:text-[6px] font-extrabold text-zinc-600 uppercase tracking-wider shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {currentStep.tagline}
                        </div>
                        <h3 className="ml-1 text-[10px] sm:text-sm font-black text-zinc-950 tracking-tight leading-tight">
                          {currentStep.title}
                        </h3>
                      </div>

                      {/* Description Body Parameter Block */}
                      <p className="text-[6px] sm:text-[8px] text-zinc-600 leading-relaxed font-normal max-w-xl animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
                        {currentStep.description}
                      </p>

                      {/* Pill Mapping Structure */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                        {currentStep.features.map((feature, idx) => (
                          <FeaturePill
                            key={feature}
                            text={feature}
                            delay={idx * 100}
                          />
                        ))}
                      </div>

                      {/* Parameter Data Performance Grid Insets */}
                      <div className="grid grid-cols-2 gap-3 pt-2 sm:pt-4 border-t border-zinc-100 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                        {currentStep.metrics.map((metric, idx) => (
                          <div
                            key={metric.label}
                            className="bg-zinc-50/70 border border-zinc-200/50 rounded-xl p-2 sm:p-2 hover:bg-white hover:shadow-md hover:border-zinc-300/80 transition-all duration-300 group/metric"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <p className="text-[6px] font-bold text-zinc-400">
                              {metric.label}
                            </p>
                            <p className="text-[6px] sm:text-[8px] font-black text-zinc-950 mt-0.5 tracking-tight group-hover/metric:text-zinc-900">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Browser System Execution Navigation Matrix Section Bar Anchor */}
                    <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-zinc-100 relative z-10 bg-white/40 backdrop-blur-xs -mx-1 px-1 rounded-lg mt-2 sm:mt-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                      <ProgressIndicator
                        current={activeStep}
                        total={STEPS.length}
                      />

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setActiveStep((prev) =>
                              prev === 0 ? STEPS.length - 1 : prev - 1,
                            );
                            setIsAutoPlaying(false);
                          }}
                          className="p-1.5 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-950 transition-all active:scale-95"
                          aria-label="Previous step"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => {
                            setActiveStep((prev) => (prev + 1) % STEPS.length);
                            setIsAutoPlaying(false);
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 h-4 sm:h-8 bg-zinc-950 text-white rounded sm:rounded-lg text-[6px] sm:text-[10px] font-black tracking-wider hover:bg-zinc-800 active:scale-[0.97] transition-all shadow-sm"
                        >
                          <span>Next Phase</span>
                          <TbArrowRight className="w-2 sm:w-3.5 h-2 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>

                        <button
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                          className={`p-1.5 rounded-lg transition-all duration-300 active:scale-95 ${
                            isAutoPlaying
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-zinc-100 text-zinc-400 hover:text-zinc-700"
                          }`}
                          aria-label={
                            isAutoPlaying ? "Pause autoplay" : "Resume autoplay"
                          }
                        >
                          {isAutoPlaying ? (
                            <svg
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          ) : (
                            <svg
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================================
      2. THE KEYBOARD SECTION BASE CHASSIS (Perspective Aluminum Deck Layer)
     ==================================================================== */}
            <div className="w-full max-w-[calc(2xl+1.5rem)] h-3 bg-linear-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-b-2xl border-x border-b border-zinc-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] relative z-30 flex flex-col items-center justify-start">
              {/* Dark Mechanical Screen Display Hinge Strip */}
              <div className="w-[85%] h-1 bg-zinc-800 rounded-b-md absolute -top-0.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />

              {/* Center Aluminum Display Notch Grab Recess lip */}
              <div className="w-20 h-1 bg-zinc-600/60 rounded-b-sm border-b border-zinc-400/20 absolute top-0 shadow-inner" />

              {/* 3D Skeuomorphic Front Trackpad Inset Indicator */}
              <div className="w-32 h-3.5 mt-0.5 bg-gradient-to-b from-zinc-300/40 to-zinc-400/20 rounded-t-md border-t border-x border-zinc-500/30 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] relative opacity-90">
                {/* Precision Trackpad separator rim highlight border line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          80% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(10px) translateX(15px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
