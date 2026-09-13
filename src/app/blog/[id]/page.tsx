import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/data/posts";
import LikeButton from "@/components/LikeButton";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | Nova BLOG",
    };
  }

  return {
    title: `${post.title} — Nova BLOG`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

const categorySlugMap: Record<string, string> = {
  "Kültür": "kultur",
  "Yaşam": "yasam",
  "Teknoloji": "teknoloji",
  "Seyahat": "seyahat",
};

function renderFormattedContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return (
        <h2
          key={idx}
          className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight pt-6 pb-2"
        >
          {trimmed.replace(/^###\s+/, "")}
        </h2>
      );
    }

    if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
      const lines = trimmed.split("\n");
      return (
        <ul
          key={idx}
          className="space-y-3.5 my-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs"
        >
          {lines.map((line, lIdx) => {
            const cleanLine = line.replace(/^(\d+\.|\-)\s+/, "");
            const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
            return (
              <li
                key={lIdx}
                className="text-stone-800 text-base sm:text-lg leading-relaxed flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-stone-900 mt-2.5 shrink-0" />
                <span>
                  {parts.map((p, pIdx) => {
                    if (p.startsWith("**") && p.endsWith("**")) {
                      return (
                        <strong key={pIdx} className="font-bold text-stone-950">
                          {p.slice(2, -2)}
                        </strong>
                      );
                    }
                    return p;
                  })}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }

    const parts = trimmed.split(/(\*\*.*?\*\*)/g);
    return (
      <p
        key={idx}
        className="text-stone-800 text-lg sm:text-xl leading-relaxed font-normal"
      >
        {parts.map((p, pIdx) => {
          if (p.startsWith("**") && p.endsWith("**")) {
            return (
              <strong key={pIdx} className="font-bold text-stone-950">
                {p.slice(2, -2)}
              </strong>
            );
          }
          return p;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const categorySlug = categorySlugMap[post.category] || "kultur";
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto space-y-12">
      {/* 1. Üst Navigasyon & Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
        <Link href="/" className="hover:text-stone-950 transition-colors">
          Ana Sayfa
        </Link>
        <span>/</span>
        <Link
          href={`/category/${categorySlug}`}
          className="hover:text-stone-950 transition-colors"
        >
          {post.category}
        </Link>
      </nav>

      {/* 2. Başlık ve Üst Bilgi Kartı */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
          <Link
            href={`/category/${categorySlug}`}
            className="px-3 py-1 bg-stone-950 text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            {post.category}
          </Link>
          <span className="text-stone-300">•</span>
          <span className="text-stone-500 font-medium">{post.date}</span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-500 font-medium">{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-[1.12]">
          {post.title}
        </h1>

        {/* Vurgulu Spot / Özet Metni */}
        <p className="text-xl sm:text-2xl text-stone-600 font-normal leading-relaxed border-l-4 border-stone-950 pl-5 italic">
          {post.excerpt}
        </p>

        {/* Yazar Bilgisi */}
        <div className="flex items-center gap-3.5 pt-4 border-t border-stone-200">
          <div className="w-11 h-11 rounded-full bg-stone-950 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-stone-950">{post.author}</p>
            <p className="text-xs text-stone-500">Nova BLOG Yazarı & Editörü</p>
          </div>
        </div>
      </header>

      {/* 3. Büyük Kapak Görseli */}
      <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-stone-100 shadow-xl border border-stone-200/80">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. Makale Gövdesi (Biçimlendirilmiş Başlıklar ve Paragraflar) */}
      <div className="space-y-6">
        {renderFormattedContent(post.content)}
      </div>

      {/* 5. Beğeni & Etkileşim Alanı */}
      <div className="py-8 my-10 border-y border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60 p-6 rounded-2xl border">
        <div>
          <h4 className="text-sm font-bold text-stone-950 mb-0.5">
            Bu yazıyı faydalı buldunuz mu?
          </h4>
          <p className="text-xs text-stone-500">
            Düşüncenizi canlı tepkiyle paylaşın.
          </p>
        </div>
        <LikeButton />
      </div>

      {/* 6. Yazar Biyografi Kutusu */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-stone-950 text-white text-2xl font-black flex items-center justify-center shrink-0 shadow-md">
          {post.author.charAt(0)}
        </div>
        <div className="space-y-1.5 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
            Yazar Hakkında
          </span>
          <h3 className="text-lg font-bold text-stone-950">{post.author}</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Nova BLOG ekibinde {post.category.toLowerCase()} ve modern yaşam alanında araştırmalar yapıyor, yeni perspektifler ve editoryal yazılar kaleme alıyor.
          </p>
        </div>
      </div>

      {/* 7. İlgili / Diğer Hikayeler */}
      {relatedPosts.length > 0 && (
        <section className="pt-10 border-t border-stone-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-stone-950 tracking-tight">
              Okumaya Devam Et
            </h3>
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                href={`/blog/${rPost.id}`}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={rPost.image}
                    alt={rPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    {rPost.category}
                  </span>
                  <h4 className="text-sm font-bold text-stone-950 group-hover:text-stone-700 transition-colors line-clamp-2 leading-snug">
                    {rPost.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 8. Alt Buton */}
      <footer className="pt-8 border-t border-stone-200 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider bg-stone-950 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm"
        >
          <span>←</span>
          <span>Ana Sayfaya Dön</span>
        </Link>
        <span className="text-xs text-stone-400">
          Nova BLOG • Minimalist Editorial Dergi
        </span>
      </footer>
    </article>
  );
}
