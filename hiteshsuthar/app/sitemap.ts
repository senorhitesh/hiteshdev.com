import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "hiteshdevcom.vercel.app";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: now,
    },
    {
      url: `${baseUrl}/get-in-touch`,
      changeFrequency: "monthly",
      priority: 0.9,
      lastModified: now,
    },
  ];
}
