import type { MetadataRoute } from "next";

const BASE_URL = "https://www.upgradeux.in";

const routes = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/services/custom-website",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/search-engine-optimization",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/website-redesign",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/wordpress",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/portfolio",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/blog",
    priority: 0.9,
    changeFrequency: "daily",
  },
  {
    path: "/contact",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/free-consultation",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/how-we-work",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/help-center",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/refund-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms-service",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}