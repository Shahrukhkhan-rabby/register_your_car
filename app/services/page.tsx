import Services from "@/components/Services";
import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Register a UK Car in Spain | Import & Registration Experts",
  description:
    "Need to register your UK car in Spain? We handle ITV, paperwork, and taxes so you get Spanish plates quickly. Start with an instant quote today.",
  openGraph: {
    title: "Register a UK Car in Spain | Import & Registration Experts",
    description:
      "Need to register your UK car in Spain? We handle ITV, paperwork, and taxes so you get Spanish plates quickly. Start with an instant quote today.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://register-your-car.com"}/services`, // replace with your actual URL
    siteName: "Register Your Car",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register a UK Car in Spain | Import & Registration Experts",
    description:
      "Need to register your UK car in Spain? We handle ITV, paperwork, and taxes so you get Spanish plates quickly. Start with an instant quote today.",
  },
};

// ✅ Page component
export default function ServicesPage() {
  return <Services />;
}
