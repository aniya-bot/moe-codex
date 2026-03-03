import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moe Codex",
  description: "Session-first neon codex for dreamlike factions and characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-shell">
          <header className="site-header">
            <Link className="brand" href="/">
              Moe Codex
              <span>Session-First</span>
            </Link>
            <nav className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/factions">Factions</Link>
              <Link href="/characters">Characters</Link>
            </nav>
            <div className="header-glow" aria-hidden="true" />
          </header>
          <main className="page">{children}</main>
          <footer className="site-footer">
            <span>Dreamlike neon codex · Build 2026</span>
            <span className="pulse-dot" aria-hidden="true" />
          </footer>
        </div>
        <div className="ambient-orbs" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </body>
    </html>
  );
}
