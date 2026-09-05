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
  title: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
  description:
    "yo, I’m Hitesh, an engineer based in India, obsessed in building scalable web products, developer tools, and good design.",
  openGraph: {
    title: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
    description:
      "yo, I’m Hitesh, an engineer based in India, obsessed in building scalable web products, developer tools, and good design.",
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
      "yo, I’m Hitesh, an engineer based in India, obsessed in building scalable web products, developer tools, and good design.",
    images: ["./og-image.png"],
    creator: "@hiteshxdev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://hiteshdevcom.vercel.app",
  },
};
const jsonLd = [
  {
    "@content": "https://shema.org",
    "@type": "Person",
    name: "Hitesh Suthar",
    url: "https://hiteshdevcom.vercel.app",
    jobTitle: "Full-Stack Developer",
    description:
      "yo, I’m Hitesh, an engineer based in India, obsessed in building scalable web products, developer tools, and good design.",
    image: "/profile.jpeg",
    sameAs: [
      "https://github.com/senorhitesh",
      "https://www.linkedin.com/in/hiteshsutharr",
      "https://x.com/hiteshxdev",
    ],
    knowsAbout: ["Next.js", "React", "TypeScript", "JavaScript", "Node.js"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hitesh Suthar",
    url: "https://hiteshdevcom.vercel.app",
  },
];
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
        {" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
