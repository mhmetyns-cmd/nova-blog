"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/data/posts";

interface BlogSearchSectionProps {
  posts: Post[];
}

export default function BlogSearchSection({ posts }: BlogSearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Hepsi");

  const categories = ["Hepsi", "Kültür", "Yaşam", "Teknoloji", "Seyahat"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Hepsi" || post.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === "" ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const handleClear = () => {
    setSearchQuery("");
    setSelectedCategory("Hepsi");
  };

  return (
    <section id="yazilar" className="scroll-mt-28 space-y-8">
      {/* Başlık & Arama Çubuğu */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-1">
            Seçkiler & Koleksiyon
          </span>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-stone-950">
            Öne Çıkan Hikayeler
          </h2>
        </div>

        {/* Canlı Arama Kutusu */}
        <div className="w-full lg:w-96 relative">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-stone-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Yazı, yazar veya konu ara..."
              className="w-full pl-11 pr-10 py-3 bg-white border border-stone-300 rounded-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-stone-950 focus:ring-1 focus:ring-stone-950 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-stone-400 hover:text-stone-900 text-sm"
                title="Aramayı Temizle"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Kategori Filtre Butonları */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                selectedCategory === cat
                  ? "bg-stone-950 text-white shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sonuç Sayacı */}
        <span className="text-xs font-semibold text-stone-500">
          {filteredPosts.length} yazı bulundu
        </span>
      </div>

      {/* Yazı Kartları Izgarası */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredPosts.map((post) => (
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
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-stone-900 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Kart Metin İçeriği */}
              <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-950 group-hover:text-stone-700 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

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
      ) : (
        /* Arama Sonucu Bulunamadığında */
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 p-8 space-y-4">
          <div className="text-4xl">🔍</div>
          <h4 className="text-xl font-bold text-stone-950">
            Aradığınız kriterlere uygun yazı bulunamadı
          </h4>
          <p className="text-sm text-stone-500 max-w-md mx-auto">
            &quot;{searchQuery}&quot; kelimesiyle eşleşen bir makale bulamadık. Farklı bir kelime deneyebilir veya filtreleri sıfırlayabilirsiniz.
          </p>
          <div>
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2.5 bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              Filtreleri Temizle
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
