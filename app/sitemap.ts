import { MetadataRoute } from "next";
import { robotsTxtPath } from "@/config/database";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.onlinecalculation.net";

  const dynamicPaths = robotsTxtPath.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...dynamicPaths,
  ];
}
