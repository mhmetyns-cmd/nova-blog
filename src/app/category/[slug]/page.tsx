import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getPostsByCategorySlug, categories } from "@/data/posts";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Kategori Bulunamadı | Nova BLOG",
    };
  }

  return {
    title: `${category.title} — Nova BLOG`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategorySlug(slug);

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Kategori Başlık Alanı (Hero) */}
      <div className="border-b border-stone-200 pb-8 lg:pb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-stone-900">{category.name}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-950 mb-4">
          {category.title}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Yazılar Listesi */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-stone-900 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Kart İçeriği */}
              <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-950 group-hover:text-stone-700 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
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
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
          <p className="text-stone-500 text-lg mb-4">Bu kategoride henüz yazı bulunmuyor.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 rounded-full hover:bg-stone-800 transition-all"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      )}
    </div>
  );
}
