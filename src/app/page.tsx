import Link from "next/link";
import { getAllPosts } from "@/data/posts";

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

        {/* Fotoğrafın Sağ Alt Köşesi - Mehmet İmzası */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white shadow-2xl hover:bg-black/60 transition-all duration-200 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
              Mehmet
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MODERN YAZI KARTLARI (3 Adet Kart, Büyük Fotoğraf, Kategori, Başlık)   */}
      {/* ========================================================================= */}
      <section id="yazilar" className="scroll-mt-28 space-y-10">
        {/* Bölüm Başlığı & İnce Çizgi Detayı */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-1">
              Seçkiler
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-stone-950">
              Öne Çıkan Hikayeler
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-xs sm:text-right">
            Düşünceye değer katan en son kültür, teknoloji ve seyahat yazıları.
          </p>
        </div>

        {/* 3'lü Masaüstü Grid Sistemi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-stone-400 transition-all duration-300"
            >
              {/* Kart Görseli */}
              <Link
                href={`/blog/${post.id}`}
                className="relative block aspect-[16/10] overflow-hidden bg-stone-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Görsel Üzeri Kategori Rozeti */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-stone-900 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Kart Metin İçeriği */}
              <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tarih ve Okuma Süresi */}
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl font-bold text-stone-950 group-hover:text-stone-700 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Kısa Açıklama */}
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Alt Yazar Bilgisi ve Okuma Linki */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-500">
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-stone-950 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Yazıyı İncele</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EDİTORYAL DERGİ BÜLTEN BÖLÜMÜ (Premium Detay)                          */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-2xl lg:rounded-3xl border border-stone-200/90 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
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
