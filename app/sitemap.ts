import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.onlinecalculation.net";
  const basePaths = [
    "contact-us",
    "terms-of-service",
    "privacy-policy",
  ];

  const dynamicPaths = basePaths.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
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
