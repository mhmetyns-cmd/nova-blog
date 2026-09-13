import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda | KodGünlüğüm",
  description: "Web geliştirme yolculuğum ve kendim hakkında kısa bilgiler",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-xs space-y-6">
      <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center shadow-md">
          M
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mehmet</h1>
          <p className="text-sm text-gray-500">Öğrenmeye ve üretmeye hevesli Junior Geliştirici</p>
        </div>
      </div>

      <section className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">Merhaba!</h2>
        <p>
          Yazılım ve modern web geliştirme dünyasına ilk adımlarımı attım. 
          Bu blogu oluşturmamdaki temel amaç; öğrendiğim konuları yazarak pekiştirmek 
          ve gelişim sürecimi kayıt altına almaktır.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Öğrendiğim Teknolojiler</h2>
        <div className="flex flex-wrap gap-2">
          {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Hedeflerim</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Modern web uygulamaları geliştirebilmek</li>
          <li>Bileşen (Component) mimarisini eksiksiz kavramak</li>
          <li>Kendi tam teşekküllü projelerimi hayata geçirmek</li>
        </ul>
      </section>

      <div className="pt-6 border-t border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <span>←</span> Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
