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
  title: "Nova BLOG — Hayatı Farklı Bir Açıdan Keşfet",
  description: "Kültür, yaşam, teknoloji ve seyahat üzerine modern ve minimalist editorial dergi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
        {/* Üst Bölüm: Minimalist & Şık Dergi Header */}
        <header className="border-b border-stone-200/80 bg-[#FAF9F5]/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-baseline gap-1.5 transition-transform duration-200"
            >
              <span className="text-2xl lg:text-3xl font-black tracking-tighter text-black uppercase">
                Nova
              </span>
              <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase px-1.5 py-0.5 border border-stone-300 rounded-sm">
                BLOG
              </span>
            </Link>

            {/* Menü */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <Link
                href="/"
                className="text-stone-950 font-semibold transition-colors hover:text-black"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/#kultur"
                className="hover:text-stone-950 transition-colors"
              >
                Kültür
              </Link>
              <Link
                href="/#yasam"
                className="hover:text-stone-950 transition-colors"
              >
                Yaşam
              </Link>
              <Link
                href="/#teknoloji"
                className="hover:text-stone-950 transition-colors"
              >
                Teknoloji
              </Link>
              <Link
                href="/#seyahat"
                className="hover:text-stone-950 transition-colors"
              >
                Seyahat
              </Link>
            </nav>

            {/* Sağ Buton / Eylem */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200"
              >
                Bültene Katıl
              </button>
            </div>
          </div>
        </header>

        {/* Ana İçerik Alanı */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-10 lg:py-16">
          {children}
        </main>

        {/* Alt Bölüm (Footer) */}
        <footer className="border-t border-stone-200 bg-white/60 mt-20 py-12 text-stone-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200/60">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-black uppercase">Nova</span>
                <span className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase px-1 border border-stone-300 rounded-xs">BLOG</span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-stone-500">
                <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
                <Link href="/about" className="hover:text-stone-900 transition-colors">Hakkımızda</Link>
                <a href="#kultur" className="hover:text-stone-900 transition-colors">Kültür</a>
                <a href="#yasam" className="hover:text-stone-900 transition-colors">Yaşam</a>
                <a href="#teknoloji" className="hover:text-stone-900 transition-colors">Teknoloji</a>
                <a href="#seyahat" className="hover:text-stone-900 transition-colors">Seyahat</a>
              </div>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
              <p>© 2026 Nova BLOG. Tüm hakları saklıdır. Minimalist Editorial Dergi.</p>
              <p className="tracking-wide">Tasarım & Geliştirme: <span className="text-stone-700 font-semibold">Mehmet</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
