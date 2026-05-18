import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/formations";
import { getSiteUrl } from "@/lib/site-url";

const STATIC_PATHS = [
  "",
  "/formations",
  "/a-propos",
  "/inscription",
  "/contact",
  "/galerie",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const formationPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/formations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...formationPages];
}
