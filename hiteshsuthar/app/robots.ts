import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "YandexBot",
        allow: "/",
      },
    ],
    sitemap: "https://hiteshdevcom.vercel.app/sitemap.xml",
    host: "https://hiteshdevcom.vercel.app",
  };
}
