import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://backmatterstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: base, changeFrequency: "weekly", priority: 1 }];
}
