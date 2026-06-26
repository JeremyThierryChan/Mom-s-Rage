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
        {/* Brush calligraphy for decorative Chinese — subset to only the glyphs we use.
            Add any new brush glyph (work / creator) to this &text= list. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&text=妈见打灵魂发声艺术无界小众不叛逆灭真有意思壹贰叁怒闷喷倔拙乱趣贴装杂狂泥反怪&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
