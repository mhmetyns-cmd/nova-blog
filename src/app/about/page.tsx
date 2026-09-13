import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda — Nova BLOG",
  description: "Web geliştirme yolculuğum, vizyonum ve Nova BLOG'un hikayesi.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* Üst Başlık */}
      <div className="border-b border-stone-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-stone-900">Hakkımda</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-950 mb-3">
          Geliştirici & Yazar: Mehmet
        </h1>
        <p className="text-base sm:text-lg text-stone-600">
          Öğrenmeye, tasarlamaya ve modern web teknolojileri üretmeye tutkulu bir geliştirici.
        </p>
      </div>

      {/* Profil Kartı */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-stone-100">
          <div className="w-20 h-20 rounded-2xl bg-stone-950 text-white text-3xl font-black flex items-center justify-center shadow-lg">
            M
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Nova BLOG
            </div>
            <h2 className="text-2xl font-bold text-stone-950">Geliştirici & Yazar: Mehmet</h2>
            <p className="text-sm text-stone-500">Minimalist & Modern Web Deneyimleri</p>
          </div>
        </div>

        <div className="space-y-6 text-stone-700 leading-relaxed text-base">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">
              Hikaye
            </h3>
            <p>
              Yazılım ve modern web geliştirme dünyasına sıfırdan başlayarak adım attım. 
              Nova BLOG, öğrendiğim teknolojileri 
              pratiğe dökmek ve düşüncelerimi estetik bir dergi formatında paylaşmak için geliştirdiğim kişisel projemdir.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">
              Gelecek Hedeflerim
            </h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">✓</span>
                <span>Yüksek performanslı, SEO uyumlu ve hızlı web uygulamaları inşa etmek</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">✓</span>
                <span>React bileşen mimarisini ve sunucu taraflı render (SSR) mantığını ustalıkla kullanmak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">✓</span>
                <span>Kullanıcı deneyimini ön planda tutan minimalist dijital ürünler üretmek</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md"
          >
            <span>←</span> Ana Sayfaya Dön
          </Link>
          <span className="text-xs text-stone-400 font-medium">© 2026 Mehmet</span>
        </div>
      </div>
    </div>
  );
}
