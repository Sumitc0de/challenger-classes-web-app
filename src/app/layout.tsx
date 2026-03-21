import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Challenger Classes | Best Coaching in Nalasopara East (Achole Road)",
    template: "%s | Challenger Classes Nalasopara East",
  },
  description:
    "Challenger Classes in Nalasopara East, Achole Road — Leading coaching institute for Class 10, Class 12 & competitive exams. Experienced faculty, proven results. Enroll now!",
  keywords: [
    "Coaching Classes in Nalasopara East",
    "Coaching Classes in Achole Road",
    "Class 10 Coaching Nalasopara",
    "Class 12 Coaching Nalasopara",
    "Best Coaching Classes near me",
    "Challenger Classes",
    "coaching institute Palghar Mumbai",
    "MHT-CET coaching Nalasopara",
    "SSC coaching Nalasopara",
    "HSC coaching Nalasopara",
  ],
  authors: [{ name: "Challenger Classes" }],
  openGraph: {
    title: "Challenger Classes | Best Coaching in Nalasopara East",
    description:
      "Top coaching institute in Nalasopara East for Class 10, 12 & competitive exams. Expert faculty, proven track record.",
    url: "https://challengerclasses.com",
    siteName: "Challenger Classes",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Challenger Classes",
              description:
                "Leading coaching institute for Class 10, Class 12 & competitive exams in Nalasopara East, Achole Road, Palghar, Mumbai.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Achole Road",
                addressLocality: "Nalasopara East",
                addressRegion: "Maharashtra",
                postalCode: "401209",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.4187",
                longitude: "72.8745",
              },
              openingHours: "Mo-Sa 08:00-19:00",
              telephone: "+91-98765-43210",
              url: "https://challengerclasses.com",
              areaServed: ["Nalasopara East", "Achole Road", "Palghar", "Mumbai"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
