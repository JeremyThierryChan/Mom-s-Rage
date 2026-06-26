import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { content } from "@/data/content";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono-sp",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.zh.meta.title,
  description: content.zh.meta.description,
  keywords: ["妈见打", "Mom's Rage", "艺术品牌", "原创IP", "泥塑", "小众艺术", "art brand"],
  openGraph: {
    title: content.zh.meta.title,
    description: content.zh.meta.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${anton.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        {/* Brush calligraphy for decorative Chinese — subset to only the glyphs we use */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&text=%E5%A6%88%E8%A7%81%E6%89%93%E7%81%B5%E9%AD%82%E5%8F%91%E5%A3%B0%E8%89%BA%E6%9C%AF%E6%97%A0%E7%95%8C%E5%B0%8F%E4%BC%97%E4%B8%8D%E5%8F%9B%E9%80%86%E7%81%AD%E7%9C%9F%E6%9C%89%E6%84%8F%E6%80%9D&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
