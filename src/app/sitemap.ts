import type { MetadataRoute } from "next";

const baseUrl = "https://upgradeux.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/custom-website",
    "/services/search-engine-optimization",
    "/services/website-redesign",
    "/services/wordpress",
    "/portfolio",
    "/blog",
    "/contact",
    "/free-consulting",
    "/how-we-work",
    "/help-center",
    "/privacy-policy",
    "/refund-policy",
    "/terms-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route.startsWith("/blog")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/services"
        ? 0.95
        : route.startsWith("/services/")
        ? 0.9
        : route === "/portfolio"
        ? 0.85
        : route === "/contact"
        ? 0.85
        : 0.7,
  }));
}