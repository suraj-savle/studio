import React from "react";
import type { Metadata } from "next";
import BlogCard from "@/components/ui/blog/BlogCard";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog & SEO Insights | UpgradeUX",
  description:
    "Explore web development, SEO, AI automation, and digital growth insights from UpgradeUX — a modern agency for businesses that want stronger online visibility.",
  alternates: {
    canonical: "https://www.upgradeux.in/blog",
  },
  keywords: [
    "web development blog",
    "SEO insights",
    "AI automation blog",
    "marketing agency insights",
    "UpgradeUX",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllBlogsPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <main className="w-full pb-20 animate-in fade-in duration-500">
      <div className="w-full h-64 sm:h-80 bg-linear-to-b from-[#4DB2E0] to-[#FFFFFF] relative flex items-end justify-between px-4 sm:px-12 pb-12 md:mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-zinc-800  leading-none">
            Blog & Insights
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-normal text-zinc-500 max-w-xs leading-relaxed hidden md:block">
          Explore our collection of articles, tutorials, and insights on web
          development, design, and technology trends. Stay informed and inspired
          with our expert content.
        </p>
      </div>

      <div className="w-full px-4 sm:px-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {allPosts.length > 0 ? (
          <div>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-200 rounded-2xl">
            <p className="text-sm text-zinc-400">
              No blog articles published yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
