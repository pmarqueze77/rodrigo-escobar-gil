import type { MetadataRoute } from "next";
import { blogPostsEs, blogPostsEn } from "@/lib/data";

const BASE = "https://rodrigoescobargil.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEs = [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const staticEn = [
    { url: `${BASE}/en`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/en/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const postsEs = blogPostsEs.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const postsEn = blogPostsEn.map((p) => ({
    url: `${BASE}/en/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEs, ...staticEn, ...postsEs, ...postsEn];
}
