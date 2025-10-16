import Terms from "@/components/Teerms"; // make sure the import path is correct
import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Terms & Conditions | Register Your Car in Spain",
  description:
    "View the terms and conditions of using Register Your Car in Spain’s services.",
  openGraph: {
    title: "Terms & Conditions | Register Your Car in Spain",
    description:
      "View the terms and conditions of using Register Your Car in Spain’s services.",
    url:  `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://register-your-car.com"}/terms`, // replace with your actual URL
    siteName: "Register Your Car",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Register Your Car in Spain",
    description:
      "View the terms and conditions of using Register Your Car in Spain’s services.",
  },
};

// ✅ Page component
export default function TermsAndConditionPage() {
  return <Terms />;
}
