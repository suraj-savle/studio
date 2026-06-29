import { post as post1 } from "@/data/blog/welcome-to-upgradeux";

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  readTime: string;
  coverImage?: string;
  videoUrl?: string;
  author?: BlogAuthor;
  category?: string;
  tags?: string[];
  featured?: boolean;
}

// Import all blog posts
const allPosts: BlogPost[] = [
  post1,
];

export function getAllPosts(): BlogPost[] {
  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPostById(id: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.id === id);
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category?.toLowerCase() === category.toLowerCase());
}

export function getRelatedPosts(id: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostById(id);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((post) => post.id !== id)
    .filter((post) => {
      // Share at least one tag
      return post.tags?.some((tag) => currentPost.tags?.includes(tag));
    })
    .slice(0, limit);

  return related;
}