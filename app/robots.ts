import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.register-your-car.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",          // Allow everything by default
        disallow: "/private" // Block private section (you can add more if needed)
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
