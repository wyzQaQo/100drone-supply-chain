import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog";

/**
 * Root sitemap: robots.ts advertises `${SITE.url}/sitemap.xml`, and the
 * per-locale pages live under /[locale]/*. This file satisfies that root URL and
 * lists every locale variant, so crawlers following robots.txt get a valid map
 * instead of a 404. Slugs come from the same BLOG_POSTS module used by the blog
 * route's generateStaticParams, so nothing can drift.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = SITE.url;
  const entries: MetadataRoute.Sitemap = [];

  const paths = [
    "",
    "/services",
    "/supply-chain",
    "/about",
    "/blog",
    "/contact",
    ...Object.keys(BLOG_POSTS).map((slug) => `/blog/${slug}`),
  ];

  for (const locale of routing.locales) {
    for (const path of paths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : path.startsWith("/blog") ? 0.7 : 0.9,
      });
    }
  }

  return entries;
}
