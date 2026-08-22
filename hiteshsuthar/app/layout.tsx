import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hiteshdevcom.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
    template: "%s | Hitesh Suthar",
  },

  description:
    "Hitesh Suthar is a Engineer, AI enthusiast, freelancer, creator.",

  openGraph: {
    title: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
    description:
      "Full-stack developer, AI enthusiast, freelancer, creator, and learner.",
    url: siteUrl,
    siteName: "Hitesh Suthar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "./og-image.png",
        width: 1200,
        height: 630,
        alt: "Hitesh Suthar - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
    description:
      "Full-stack developer, AI enthusiast, freelancer, creator, and learner.",
    images: ["./og-image.png"],
    creator: "@hiteshxdev",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex realtive flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
