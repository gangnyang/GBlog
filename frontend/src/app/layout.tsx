import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Cormorant_Garamond } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const bodyFont = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "GBLOG",
  description: "개인 소개와 게시글 소개를 담는 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-sans text-ink antialiased`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
          <footer className="mx-auto max-w-6xl px-6 pb-10 pt-2 text-sm text-ink/55">
            Personal introduction and writing archive for local development.
          </footer>
        </div>
      </body>
    </html>
  );
}

