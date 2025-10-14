// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./providers";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import WhatsAppWidget from "@/components/WhatsAppWidget"; 

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MRGL9G9Z";

export const metadata: Metadata = {
  title: {
    default: "Register Your Car in Spain | Vehicle Registration Services",
    template: "%s | Register Your Car"
  },
  description: "Professional vehicle registration services in Spain. We help you import and register your car quickly and efficiently.",
  keywords: "car registration Spain, import car Spain, vehicle registration",
  robots: "index, follow",
  authors: [{ name: "Register Your Car" }],
  openGraph: {
    type: "website",
    locale: "en_ES",
    siteName: "Register Your Car",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="text-white bg-[#1d253f]">
        {/* ✅ Google Tag Manager (noscript) - must be just after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  );
}