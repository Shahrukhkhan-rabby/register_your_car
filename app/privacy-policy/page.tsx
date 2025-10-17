
import PrivacyPolicy from "@/components/PrivacyPolicy";
import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Privacy Policy | Register Your Car in Spain",
  description:
    "Read our privacy policy explaining how we handle your data when helping you register your vehicle in Spain.",
  openGraph: {
    title: "Privacy Policy | Register Your Car in Spain",
    description:
      "Read our privacy policy explaining how we handle your data when helping you register your vehicle in Spain.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://register-your-car.com"}/privacy-policy`, // replace with your actual URL
    siteName: "Register Your Car",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Register Your Car in Spain",
    description:
      "Read our privacy policy explaining how we handle your data when helping you register your vehicle in Spain.",
  },
};

// ✅ Page component
export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
