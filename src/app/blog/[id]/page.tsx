import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TbArrowLeft } from "react-icons/tb";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { getPostById, getRelatedPosts } from "@/lib/posts";
import { MediaContainer } from "@/components/MediaContainer"; // Path to your loader component

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  // Pre-fetching related posts simultaneously
  const relatedPosts = getRelatedPosts(post.id);

  return (
    <>
      <div className="w-full h-64 sm:h-80 bg-gradient-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-5 sm:px-10 pb-12"></div>
      <article className="w-full max-w-5xl mx-auto px-6 pb-20  animate-in fade-in duration-300 z-99">
        
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-950 mb-8 group transition-colors"
        >
          <TbArrowLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
          Back to all blogs
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-zinc-400 mb-4">
            {post.category && (
              <>
                <span className="text-primary-600 font-semibold">
                  {post.category}
                </span>
                <span>•</span>
              </>
            )}
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-sm" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-sm" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl font-extrabold text-zinc-700 tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-sm md:text-lg font-medium text-zinc-500 leading-relaxed py-1 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Author */}
          {post.author && (
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-zinc-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 text-lg font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div className="font-semibold text-zinc-900">
                  {post.author.name}
                </div>
                <div className="text-sm text-zinc-500">{post.author.role}</div>
              </div>
            </div>
          )}
        </header>

        {/* Cover Image Wrapper with Loader */}
        {post.coverImage && (
          <MediaContainer 
            type="image" 
            src={post.coverImage} 
            alt={post.title} 
            priority={true} 
          />
        )}

        {/* Video Embed Wrapper with Loader */}
        {post.videoUrl && (
          <MediaContainer 
            type="video" 
            src={post.videoUrl} 
            alt={post.title} 
          />
        )}

        {/* Content */}
        <div className="prose prose-zinc max-w-none text-base text-zinc-800 leading-relaxed pt-6 border-t border-zinc-100">
          {post.content}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-zinc-100">
            <div className="flex flex-wrap items-center gap-2">
              <FiTag className="text-zinc-400 mr-1" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full hover:bg-zinc-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-zinc-100">
            <h3 className="text-lg font-bold text-zinc-950 mb-4">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  <h4 className="font-medium text-zinc-900 text-sm mb-1">
                    {relatedPost.title}
                  </h4>
                  <p className="text-xs text-zinc-500">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/posts");
  const posts = getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}