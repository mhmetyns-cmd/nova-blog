import Link from "next/link";
import { getAllPosts } from "@/data/posts";
import BlogSearchSection from "@/components/BlogSearchSection";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* ========================================================================= */}
      {/* 1. HERO BÖLÜMÜ (Büyük Şehir Fotoğrafı, Güçlü Tipografi, Keşfet Butonu)   */}
      {/* ========================================================================= */}
      <section className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-stone-900">
        {/* Şehir Arka Plan Fotoğrafı */}
        <div className="relative h-[500px] sm:h-[580px] lg:h-[640px] w-full">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Şehir Mimarisi"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
          {/* Editorial Karartma & Gradyan Kaplama */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>

        {/* Hero İçerik (Metinler ve Buton) */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16 max-w-4xl">
          {/* Küçük Üst Etiket */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300">
              Editorial • Yeni Sayı
            </span>
          </div>

          {/* Büyük Başlık */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5">
            Hayatı farklı bir açıdan keşfet
          </h1>

          {/* Kısa Açıklama */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200/90 font-normal leading-relaxed max-w-2xl mb-8">
            Gözden kaçan detayların, sessiz sokakların ve modern dünyanın
            kesişim noktalarında yeni perspektifler arayanlar için hazırlandı.
          </p>

          {/* Keşfet Butonu */}
          <div>
            <a
              href="#yazilar"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-950 font-bold text-sm tracking-wider uppercase rounded-full hover:bg-stone-100 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <span>Keşfet</span>
              <span className="text-stone-400 group-hover:translate-y-0.5 group-hover:text-stone-900 transition-all">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Fotoğrafın Sağ Alt Köşesi - Geliştirici & Yazar İmzası */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white shadow-2xl hover:bg-black/60 transition-all duration-200 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
              Geliştirici & Yazar: Mehmet
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CANLI ARAMA & YAZI KARTLARI (Client Component)                         */}
      {/* ========================================================================= */}
      <BlogSearchSection posts={posts} />

      {/* ========================================================================= */}
      {/* 3. EDİTORYAL DERGİ BÜLTEN BÖLÜMÜ (Premium Detay)                          */}
      {/* ========================================================================= */}
      <section id="bulten" className="scroll-mt-28 bg-white rounded-2xl lg:rounded-3xl border border-stone-200/90 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="max-w-xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-2">
            Haftalık Nova Dergi
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight mb-3">
            Yeni hikayeler her pazar sabahı e-postanızda.
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Spam yok, gereksiz bildirim yok. Sadece ilham veren makaleler ve özenle seçilmiş perspektifler.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="E-posta adresiniz..."
            className="px-5 py-3.5 text-sm bg-stone-50 border border-stone-300 rounded-full focus:outline-hidden focus:border-stone-950 focus:bg-white text-stone-900 transition-all w-full sm:w-72"
          />
          <button
            type="button"
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-stone-950 hover:bg-stone-800 text-white rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            Kayıt Ol
          </button>
        </div>
      </section>
    </div>
  );
}
