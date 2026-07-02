"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaGithub } from "react-icons/fa";
import { TbLayersIntersect, TbActivity, TbArrowUpRight } from "react-icons/tb";

// ============================================================================
// Types & Constants
// ============================================================================

interface Project {
  id: string;
  title: string;
  category: string; // Maps to "Notes & Journaling" area
  docNum: string;    // Maps to "05" area
  docType: string;   // Maps to "Doc" area
  countStr: string;  // Maps to "1270 Notes" area
  icon: React.ElementType;
  description: string;
  link: string;
  mediaType: "video" | "gallery";
  imageSrc?: string;
  videoSrc?: string;
  images?: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: "fitnation",
    title: "Fitnation GYM",
    category: "Health & Fitness Platform",
    docNum: "01",
    docType: "App",
    countStr: "24 Screens",
    icon: TbActivity,
    mediaType: "video",
    imageSrc: "/portfolio/gym.png",
    videoSrc: "/video/gym.mp4",
    description:
      "Fitnation is a dynamic fitness platform that empowers users to achieve their health goals through personalized workout plans, nutrition tracking, and community engagement.",
    link: "",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Creative Showcase",
    docNum: "02",
    docType: "Dev",
    countStr: "8 Components",
    icon: TbActivity,
    mediaType: "video",
    imageSrc: "/portfolio/portfolio.png",
    videoSrc: "/video/portfolio.mp4",
    description:
      "An optimized sleek personal platform designed using modern React patterns, premium motion architectures, and highly adaptive structural performance layouts.",
    link: "",
  },
  {
    id: "Invoice-Generator",
    title: "Invoice Generator",
    category: "B2B SaaS Utility",
    docNum: "03",
    docType: "Doc",
    countStr: "140 Invoices",
    icon: TbLayersIntersect,
    mediaType: "gallery",
    images: [
      "/portfolio/invoice.png",
      "/portfolio/invoice1.png",
      "/portfolio/invoice2.png",
    ],
    description:
      "Invoice Generator is a web application that allows users to create professional invoices quickly and easily, with customizable templates and automated calculations.",
    link: "",
  },
];

const SLIDE_INTERVAL = 3000;

// ============================================================================
// Subcomponents
// ============================================================================

const GallerySlideFrame: React.FC<{ images: string[] }> = React.memo(({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (images.length <= 1) return;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const getSlideClassName = useCallback((index: number, activeIndex: number, total: number) => {
    const isCurrent = index === activeIndex;
    const isPast = index < activeIndex || (activeIndex === 0 && index === total - 1);

    if (isCurrent) return "opacity-100 scale-100 z-10";
    return isPast ? "opacity-0 scale-95 z-0" : "opacity-0 scale-95 z-0";
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      {!loadedImages[activeIndex] && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
          <div className="w-6 h-6 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin"></div>
        </div>
      )}

      {images.map((imgUrl, idx) => (
        <Image
          key={imgUrl}
          src={imgUrl}
          alt={`Slide tracking asset ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${getSlideClassName(
            idx,
            activeIndex,
            images.length
          )}`}
          width={450}
          height={300}
          sizes="450px"
          priority={idx === 0}
          onLoad={() => handleImageLoad(idx)}
        />
      ))}
    </div>
  );
});

GallerySlideFrame.displayName = "GallerySlideFrame";

const VideoHoverFrame: React.FC<{
  videoSrc: string;
  imageSrc: string;
  isCardHovered: boolean;
}> = React.memo(({ videoSrc, imageSrc, isCardHovered }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPosterLoading, setIsPosterLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isCardHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isCardHovered]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-100">
      {isPosterLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
          <div className="w-6 h-6 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin"></div>
        </div>
      )}

      <Image
        src={imageSrc}
        alt="Video cover frame snapshot"
        width={450}
        height={300}
        onLoad={() => setIsPosterLoading(false)}
        className={`w-full h-full object-fit absolute inset-0 z-10 transition-opacity duration-500 ${
          isCardHovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        controls={false}
        preload="metadata"
        className="w-full h-full object-fit absolute inset-0"
      />
    </div>
  );
});

VideoHoverFrame.displayName = "VideoHoverFrame";

/**
 * TaskelloStyleCard - Inspired explicitly by the custom tab file card design format layout
 */
const TaskelloStyleCard: React.FC<{
  project: Project;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}> = React.memo(({ project, isHovered, onHover }) => {
  const hasSocialLinks = project.link && project.link.trim() !== "";

  return (
    <div
      className="relative bg-[#ffffff] rounded-2xl p-2 flex flex-col justify-between w-full h-fit shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-300 transform-gpu"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* 1. TOP MEDIA SECTION CONTAINER */}
      <div className="absolute inset-x-4 top-4 h-48 rounded overflow-hidden z-0">
        {project.mediaType === "video" && project.videoSrc ? (
          <VideoHoverFrame
            videoSrc={project.videoSrc}
            imageSrc={project.imageSrc || ""}
            isCardHovered={isHovered}
          />
        ) : (
          <GallerySlideFrame images={project.images || []} />
        )}
      </div>

      {/* 2. TAB CUTOUT DESIGN LOWER CONTENT BODY */}
      <div 
        className="mt-32 w-full flex-1 bg-[#ffffff] rounded-2xl border border-zinc-300 z-10 pt-6 px-4 pb-2 flex flex-col justify-between relative"
        style={{
          // Creates a sleek folder-tab style layout line structure
          clipPath: "polygon(0% 16px, 120px 16px, 150px 0%, 100px 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex flex-col gap-0.5 mt-2">
          {/* Header Row Container */}
          <div className="flex items-center justify-between gap-2">
            {hasSocialLinks ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-black tracking-tight text-zinc-900 flex items-center gap-1 group/link truncate"
              >
                <span className="truncate">{project.title}</span>
                <TbArrowUpRight className="size-4 shrink-0 opacity-50 group-hover/link:opacity-100 transition-all" />
              </a>
            ) : (
              <h2 className="text-sm font-black tracking-tight text-zinc-900 truncate">
                {project.title}
              </h2>
            )}

            {hasSocialLinks && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 transition-colors shrink-0"
              >
                <FaGithub className="size-4" />
              </a>
            )}
          </div>

          {/* Subtitle Tag Section Area */}
          <p className="text-sm text-zinc-400/90 tracking-wide mt-0.5">
            {project.category}
          </p>

          {/* Description Text Mask Section */}
          <p className="text-xs text-zinc-500/80 leading-relaxed font-normal tracking-wide line-clamp-3 mt-3">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
});

TaskelloStyleCard.displayName = "TaskelloStyleCard";

// ============================================================================
// Main Workspace Entry
// ============================================================================

export default function ProjectsPage() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleHover = useCallback((id: string | null) => {
    setHoveredCardId(id);
  }, []);

  return (
    <div className="w-full min-h-screen antialiased">
      {/* Header Container Section */}
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 mb-20">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900">
            Our Projects
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-medium text-zinc-400 max-w-xs leading-relaxed">
          A systematic showcase of engineering infrastructure, custom responsive UI layouts, and production application templates.
        </p>
      </div>

      {/* Grid Canvas Component Showcase Workspace */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <TaskelloStyleCard
              key={project.id}
              project={project}
              isHovered={hoveredCardId === project.id}
              onHover={handleHover}
            />
          ))}

          {/* Call to Action Container Section Block Component */}
          <div className="bg-[#6ABDE5] rounded-2xl p-4 flex flex-col items-center justify-between w-full h-64 shadow-sm relative group overflow-hidden border border-zinc-300">
            <div className="space-y-3 pt-6">
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#FAF9F5] leading-tight">
                Have an Idea?
                <br />
                <span className="text-sm"></span>
              </h3>
            </div>

            <Link
              href="/contact"
              className="group/btn w-full bg-[#FAF9F5] hover:bg-[#FAF9F5]/90 text-zinc-950 font-bold text-xs tracking-wider p-4 rounded-2xl transition-all duration-300 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <TbArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}