"use client";

import { useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  postId: string;
}

const defaultComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "c1",
      author: "Murat Aydın",
      content: "Metropolün gürültüsünden kaçmak için sabah yürüyüşleri ve minimalist köşeler gerçekten çok iyi geliyor. Kaleminize sağlık!",
      date: "12 Eylül 2026",
    },
    {
      id: "c2",
      author: "Ceren Aksoy",
      content: "Gözden kaçırdığımız o kadar çok mimari detay var ki. Bu yazı bana etrafıma farklı bir gözle bakmayı hatırlattı.",
      date: "13 Eylül 2026",
    },
  ],
  "2": [
    {
      id: "c3",
      author: "Deniz Koç",
      content: "Yapay zeka ne kadar gelişirse gelişsin insan kusurlarının getirdiği samimiyeti taklit edemeyecek. Çok derin bir bakış açısı.",
      date: "11 Eylül 2026",
    },
  ],
  "3": [
    {
      id: "c4",
      author: "Berkant Şen",
      content: "Lofoten adaları hayallerimin rotası! 'Friluftsliv' felsefesini de ilk kez burada duydum, çok ilham verici.",
      date: "9 Eylül 2026",
    },
  ],
  "4": [
    {
      id: "c5",
      author: "Zeynep Yurt",
      content: "Japon estetiğindeki 'Ma' kavramı üzerine okumak zihnimi ferahlattı. Sadeleşmenin gücünü anlatan harika bir yazı.",
      date: "7 Eylül 2026",
    },
  ],
};

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(
    defaultComments[postId] || [
      {
        id: "c0",
        author: "Ahmet Erdem",
        content: "Harika bir editoryal içerik, serinin devamını merakla bekliyorum!",
        date: "Bugün",
      },
    ]
  );

  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !commentText.trim()) {
      setErrorMessage("Lütfen hem adınızı hem de yorumunuzu doldurun.");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      author: name.trim(),
      content: commentText.trim(),
      date: "Az önce",
    };

    setComments([newComment, ...comments]);
    setName("");
    setCommentText("");
    setErrorMessage("");
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section className="space-y-8 pt-8 border-t border-stone-200">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
            Topluluk & Görüşler
          </span>
          <h3 className="text-2xl font-black tracking-tight text-stone-950">
            Yorumlar ({comments.length})
          </h3>
        </div>
      </div>

      {/* Yorum Yapma Formu */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 space-y-5 shadow-xs"
      >
        <h4 className="text-base font-bold text-stone-900">Bir Düşünce Paylaşın</h4>

        {errorMessage && (
          <div className="p-3.5 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
            {errorMessage}
          </div>
        )}

        {isSuccess && (
          <div className="p-3.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200">
            ✓ Yorumunuz başarıyla eklendi!
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="author-name"
              className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5"
            >
              Adınız
            </label>
            <input
              id="author-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Örn: Mehmet Yılmaz"
              className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-stone-950 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="comment-content"
              className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5"
            >
              Yorumunuz
            </label>
            <textarea
              id="comment-content"
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Bu yazı hakkındaki düşünceleriniz..."
              className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-stone-950 focus:bg-white transition-all resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-stone-950 hover:bg-stone-800 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm"
        >
          Yorumu Gönder
        </button>
      </form>

      {/* Yorumlar Listesi */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-stone-950 text-white font-bold flex items-center justify-center text-xs">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-stone-950">
                    {comment.author}
                  </h5>
                  <span className="text-[11px] text-stone-400">
                    {comment.date}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed pl-12">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
