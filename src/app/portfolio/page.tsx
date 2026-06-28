"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaGithub } from "react-icons/fa";
import {
  TbLayersIntersect,
  TbActivity,
  TbFlame,
  TbArrowUpRight,
} from "react-icons/tb";

// ============================================================================
// Types & Constants
// ============================================================================

interface Project {
  id: string;
  title: string;
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
    id: "vibe-toast",
    title: "VIBETOAST NOTIFICATION SYSTEM",
    icon: TbFlame,
    mediaType: "video",
    imageSrc:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    videoSrc: "/vibe-toast.mp4",
    description:
      "An open-source React notification package specializing in fluid canvas blob animations and glassmorphism styling frameworks.",
    link: "https://github.com",
  },
  {
    id: "bbms-portal",
    title: "BLOOD BANK SYSTEM PLATFORM",
    icon: TbActivity,
    mediaType: "video",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-numbers-31919-large.mp4",
    description:
      "A secure real-time inventory engine designed for localized medical distribution tracking.",
    link: "",
  },
  {
    id: "justus-kit",
    title: "JUSTUS-KIT CLI TOOLS",
    icon: TbLayersIntersect,
    mediaType: "gallery",
    images: [
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    ],
    description:
      "An automated multi-platform CLI workflow scaffold that structures post-initialization parameters for scalable production setups.",
    link: "https://github.com",
  },
];

const SLIDE_INTERVAL = 3000;

// ============================================================================
// Subcomponents
// ============================================================================

/**
 * GallerySlideFrame - Autoplay gallery utilizing premium sliding deck transitions
 */
const GallerySlideFrame: React.FC<{ images: string[] }> = React.memo(
  ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, SLIDE_INTERVAL);

      return () => clearInterval(intervalId);
    }, [images.length]);

    const getSlideClassName = useCallback(
      (index: number, activeIndex: number, total: number) => {
        const isCurrent = index === activeIndex;
        const isPast =
          index < activeIndex || (activeIndex === 0 && index === total - 1);

        if (isCurrent) {
          return "opacity-100 translate-x-0 scale-102 z-10";
        }
        return isPast
          ? "opacity-0 -translate-x-6 scale-100 z-0"
          : "opacity-0 translate-x-6 scale-100 z-0";
      },
      [],
    );

    return (
      <div className="w-full h-full relative overflow-hidden bg-zinc-700 rounded group/gallery">
        {images.map((imgUrl, idx) => (
          <Image
            key={idx}
            src={imgUrl}
            alt={`Slide track asset frame ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${getSlideClassName(idx, activeIndex, images.length)}`}
            width={800}
            height={600}
          />
        ))}

        {/* Sleek Minimal Structural Progress Blocks */}
        <div className="absolute bottom-0 left-0 w-full z-20 flex h-1 bg-zinc-950/40 backdrop-blur-xs transition-opacity duration-300">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-full transition-all duration-500 ease-out rounded flex-1 ${
                idx === activeIndex ? "bg-[#4DB2E0]" : "bg-white/15"
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Maps explicitly to project frame snapshot index ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  },
);

GallerySlideFrame.displayName = "GallerySlideFrame";

/**
 * VideoHoverFrame - Seamless crossfade hover play controls for optimized standard video media assets
 */
const VideoHoverFrame: React.FC<{
  videoSrc: string;
  imageSrc: string;
  isCardHovered: boolean;
}> = React.memo(({ videoSrc, imageSrc, isCardHovered }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="w-full h-full relative overflow-hidden bg-zinc-950 rounded">
      <Image
        src={imageSrc}
        alt="Video thumbnail mask container"
        width={800}
        height={600}
        className={`w-full h-full object-cover absolute inset-0 z-10 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) rounded ${
          isCardHovered
            ? "opacity-0 scale-105 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        controls={false}
        className={`w-full h-full object-cover absolute inset-0 rounded transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isCardHovered ? "scale-100 opacity-100" : "scale-98 opacity-0"
        }`}
      />
    </div>
  );
});

VideoHoverFrame.displayName = "VideoHoverFrame";

/**
 * ProjectCard - Locked fixed height desktop architecture card template
 */
const ProjectCard: React.FC<{
  project: Project;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}> = React.memo(({ project, isHovered, onHover }) => {
  const hasSocialLinks = project.link && project.link.trim() !== "";

  return (
    <div
      className="flex flex-col gap-4 rounded group"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* DESKTOP FIXED BOX ARCHITECTURE (Locks dimensions uniformly across viewport transformations) */}
      <div className="w-full h-60 sm:h-64 overflow-hidden bg-zinc-50 border border-zinc-200/60 relative select-none transition-all duration-500 group-hover:border-zinc-400 group-hover:shadow-xl group-hover:shadow-zinc-950/5 rounded">
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

      {/* Content Text Mesh Block */}
      <div className="flex flex-col gap-1.5 px-0.5 rounded">
        <div className="flex items-center justify-between rounded">
          <div className="flex items-center gap-2 min-w-0 rounded">
            {hasSocialLinks ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-black tracking-wider text-zinc-950 uppercase hover:text-[#4DB2E0] transition-colors inline-flex items-center gap-1 group/link truncate rounded"
              >
                <span className="relative overflow-hidden inline-block">
                  <span className="inline-block transition-transform duration-300 transform group-hover:translate-x-0.5">
                    {project.title}
                  </span>
                </span>
                <TbArrowUpRight className="size-3.5 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300 ease-out" />
              </a>
            ) : (
              <h2 className="text-sm font-black tracking-wider text-zinc-950 uppercase truncate rounded">
                {project.title}
              </h2>
            )}
          </div>

          {hasSocialLinks && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-950 transition-colors duration-300 shrink-0 rounded"
              aria-label={`Access external source branch for repository compilation: ${project.title}`}
            >
              <FaGithub className="size-4" />
            </a>
          )}
        </div>

        <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed text-justify pt-0.5 rounded transition-colors duration-300 group-hover:text-zinc-700">
          {project.description}
        </p>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ============================================================================
// Main Workspace Entry
// ============================================================================

export default function ProjectsPage() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleHover = useCallback((id: string | null) => {
    setHoveredCardId(id);
  }, []);

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-white text-zinc-950 selection:bg-[#4DB2E0]/20">
      {/* 1. Flat Header Structural Panel Block */}
      <header className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12 mb-16 rounded">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-700 leading-none rounded">
            Our Projects
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block rounded">
          A systematic showcase of engineering infrastructure, modular scripts,
          and production application systems.
        </p>
      </header>

      {/* 2. Standard Performance System Grid Container Layout */}
      <section className="mx-5 sm:mx-10 mb-24 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 rounded">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredCardId === project.id}
              onHover={handleHover}
            />
          ))}

          <div className="w-full h-60 sm:h-64 relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none transition-all duration-500 rounded-2xl group hover:shadow-2xl hover:shadow-[#4DB2E0]/5 border border-dashed border-zinc-800/80 hover:border-zinc-700/80 hover:-translate-y-1">
            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="space-y-1.5">
                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl leading-tight uppercase">
                  Have an Idea?
                  <br />
                  <span className="text-[#4DB2E0]">Let&apos;s Build It.</span>
                </h3>
              </div>
            </div>

            {/* CTA Section */}
            <Link
              href="/contact"
              className="relative z-10 flex items-center justify-between gap-4 cursor-pointer"
            >
              <button className="group/btn relative overflow-hidden px-5 py-2.5 bg-zinc-800 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg shadow-zinc-950/50">
                {/* Slid-in Accent Overlay */}
                <span className="absolute inset-0 w-full h-full bg-[#4DB2E0] translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />

                {/* Button Text & Icon Layer */}
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-zinc-950">
                  <span className="text-white">Contact Us</span>
                  <TbArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
