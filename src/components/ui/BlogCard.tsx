// components/ui/BlogCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FiClock, FiCalendar } from "react-icons/fi";
import { BlogPost } from "@/lib/posts";

interface BlogCardProps {
  post: BlogPost;
  variant?: "grid" | "featured";
}

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  const isFeatured = variant === "featured" || post.featured;

  return (
    <Link href={`/blog/${post.id}`}>
      <article className={`
        group relative rounded overflow-hidden shadow-sm 
        transition-all duration-300 hover:-translate-y-1 border border-zinc-300 h-full flex flex-col
        ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}
      `}>
        {/* Media Container */}
        <div className="relative aspect-video overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500"
              priority={isFeatured}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white text-4xl font-bold opacity-20">UP</span>
            </div>
          )}
          
          {/* Video Badge */}
          {post.videoUrl && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                <FaPlay className="text-primary-600 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Meta Info */}
          <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
            <span className="flex items-center gap-1">
              <FiCalendar className="text-zinc-400" />
              {post.date}
            </span>
            <span className="w-px h-4 bg-zinc-200" />
            <span className="flex items-center gap-1">
              <FiClock className="text-zinc-400" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-zinc-700 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-[10px] font-medium text-zinc-400">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}