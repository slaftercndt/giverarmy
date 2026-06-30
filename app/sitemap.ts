import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getStories } from "@/lib/stories";

export const revalidate = 1800;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stories = await getStories();
  const routes = ["", "/movement", "/stories", "/impact", "/multiply", "/about"];
  const base = routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${site.url}/stories/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...base, ...storyRoutes];
}
