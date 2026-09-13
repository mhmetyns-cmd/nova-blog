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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-10">
      {/* Üst Navigasyon */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors"
        >
          <span>←</span>
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>

      {/* Başlık ve Üst Bilgiler */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
          <span className="text-stone-900 border-b-2 border-stone-900 pb-0.5">
            {post.category}
          </span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-400 font-normal">{post.date}</span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-400 font-normal">{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-lg text-stone-600 font-normal leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
          <div className="w-10 h-10 rounded-full bg-stone-900 text-white font-bold flex items-center justify-center text-sm">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-stone-900">{post.author}</p>
            <p className="text-xs text-stone-500">Nova BLOG Editörü</p>
          </div>
        </div>
      </header>

      {/* Büyük Kapak Görseli */}
      <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-stone-100 shadow-md">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Makale Gövdesi */}
      <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed text-lg space-y-6 whitespace-pre-line">
        {post.content}
      </div>

      {/* Beğeni Butonu (useState / Client Component Etkileşimi) */}
      <div className="py-6 my-8 border-y border-stone-200 flex items-center justify-between">
        <LikeButton />
        <span className="text-xs text-stone-400">Canlı React Durumu</span>
      </div>

      {/* Alt Paylaşım & Geri Dön Alanı */}
      <footer className="pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm"
        >
          <span>←</span>
          <span>Tüm Hikayelere Dön</span>
        </Link>
        <span className="text-xs text-stone-400">
          Nova BLOG • Kültür, Yaşam, Teknoloji, Seyahat
        </span>
      </footer>
    </article>
  );
}
