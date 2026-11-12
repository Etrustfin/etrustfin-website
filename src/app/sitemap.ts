import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/hubspot";
import { SITE_URL } from "@/lib/constants";

// Pages worth listing for search engines. The /build-your-plan campaign page is left out on purpose.
const PAGES = [
  "",
  "/about",
  "/who-we-serve",
  "/services",
  "/how-we-work",
  "/blog",
  "/events",
  "/concepts",
  "/reviews",
  "/contact",
  "/privacy-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedBlogPosts(100);
  return [
    ...PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: path === "/blog" || path === "/events" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated || post.publishDate || undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
