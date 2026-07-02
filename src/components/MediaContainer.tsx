"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MediaProps {
  type: "image" | "video";
  src: string;
  alt?: string;
  priority?: boolean;
}

export function MediaContainer({ type, src, alt = "", priority = false }: MediaProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-zinc-100 shadow-lg group">
      {/* CSS Loader / Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 animate-pulse">
          <div className="w-8 h-8 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin"></div>
        </div>
      )}

      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-w-1024px) 100vw, 1024px"
          className={`object-cover transition-all duration-500 ${
            isLoading ? "scale-105 blur-md" : "scale-100 blur-0"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <iframe
          src={src}
          title={`${alt} - Video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}