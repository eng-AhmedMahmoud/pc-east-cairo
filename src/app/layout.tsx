import type { Metadata, Viewport } from "next";
import { Tajawal, Oswald } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const description =
  "Property Chance — استشارات ووساطة عقارية متخصصة في شرق القاهرة: التجمع الخامس، مدينتي، الشروق، الرحاب ومستقبل سيتي. أسعار حقيقية ومتابعة حتى استلام الوحدة.";

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    default: "Property Chance | استشارات ووساطة عقارية في شرق القاهرة",
    template: "%s | Property Chance",
  },
  description,
  keywords: [
    "عقارات شرق القاهرة",
    "التجمع الخامس",
    "مدينتي",
    "الشروق",
    "مستقبل سيتي",
    "وساطة عقارية",
    "استشارات عقارية",
    "Property Chance",
    "PC East Cairo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.brand.url,
    siteName: "Property Chance — PC East Cairo",
    title: "Property Chance | عقارك في شرق القاهرة يبدأ من فرصة صح",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Chance | عقارك في شرق القاهرة يبدأ من فرصة صح",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.brand.name,
  alternateName: "PC - East Cairo",
  description,
  email: site.brand.email,
  url: site.brand.url,
  taxID: site.brand.taxId,
  areaServed: site.coverage.areas.map((name) => ({ "@type": "Place", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "القاهرة الجديدة",
    addressRegion: "القاهرة",
    addressCountry: "EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${oswald.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
