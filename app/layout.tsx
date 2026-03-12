import type { Metadata } from "next";
import { Outfit, Playfair_Display, Space_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://climet.wacren.net"),
  title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
  description: "WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research and resilience across West and Central Africa.",
  keywords: ["WACREN", "CLI-MET", "Climate Resilience", "Digital Infrastructure", "Climate Research", "West Africa", "Central Africa", "Open Science"],
  authors: [{ name: "WACREN" }],
  openGraph: {
    title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
    description: "Building a connected, open, and resilient climate ecosystem for West & Central Africa.",
    url: "https://climet.wacren.net",
    siteName: "WACREN CLI-MET",
    images: [
      {
        url: "/og-image.jpg", // User should provide this eventually
        width: 1200,
        height: 630,
        alt: "WACREN CLI-MET",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
    description: "Building a connected, open, and resilient climate ecosystem for West & Central Africa.",
    site: "@wacren",
    creator: "@wacren",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
