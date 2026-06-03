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
    default: "Hitesh Suthar - Developer, Creator and Learner  .",
    template: "%s – Hitesh Suthar",
  },
  description: "Full-Stack developer, AI enthusiast, Freelancer and Learner.",
  openGraph: {
    title: "Hitesh Suthar - Developer & creator.",
    description:
      "Full-Stack developer, JavaScript , Python , AI Agents , Freelancer and  Learner.",
    url: siteUrl,
    siteName: "Hitesh Suthar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Suthar - Developer, writer, creator.",
    description:
      "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
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
