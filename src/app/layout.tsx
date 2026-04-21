import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevate Softworks | Elevating Ideas into Scalable Digital Solutions",
  description:
    "Elevate Softworks is a premium software house specializing in web applications, SaaS platforms, business automation, and AI-powered solutions. We build scalable digital products that drive growth.",
  keywords: [
    "software house",
    "web development",
    "SaaS",
    "business automation",
    "AI solutions",
    "Elevate Softworks",
    "custom software",
    "digital transformation",
  ],
  authors: [{ name: "Elevate Softworks" }],
  openGraph: {
    title: "Elevate Softworks | Elevating Ideas into Scalable Digital Solutions",
    description:
      "Premium software house building scalable web apps, SaaS platforms, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Softworks",
    description:
      "Elevating Ideas into Scalable Digital Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
