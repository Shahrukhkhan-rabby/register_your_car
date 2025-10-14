import Home from "@/components/Home";
import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Register Your Car in Spain | Hassle-Free Vehicle Registration",
  description:
    "We help expats register foreign cars, motorhomes, and motorcycles in Spain. Fixed-price service, clear process, and fast delivery of Spanish plates.",
  openGraph: {
    title: "Register Your Car in Spain | Hassle-Free Vehicle Registration",
    description:
      "We help expats register foreign cars, motorhomes, and motorcycles in Spain. Fixed-price service, clear process, and fast delivery of Spanish plates.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://register-your-car.com"}`, // replace with your real domain
    siteName: "Register Your Car",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register Your Car in Spain | Hassle-Free Vehicle Registration",
    description:
      "We help expats register foreign cars, motorhomes, and motorcycles in Spain. Fixed-price service, clear process, and fast delivery of Spanish plates.",
  },
};

// ✅ Page component (server by default, no "use client")
export default function Page() {
  return <Home />;
}
