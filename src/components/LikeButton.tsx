"use client";

import { useState } from "react";

export default function LikeButton() {
  // 1. useState: Sayacın hafızası (Başlangıç değeri: 0)
  const [likes, setLikes] = useState(0);
  
  // 2. Beğenilip beğenilmediğini tutan durum (true/false)
  const [isLiked, setIsLiked] = useState(false);

  // Butona tıklandığında çalışacak fonksiyon
  function handleLike() {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLike}
        className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-xs active:scale-90 cursor-pointer ${
          isLiked
            ? "bg-rose-50 text-rose-600 border border-rose-300 shadow-rose-100"
            : "bg-white text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50"
        }`}
      >
        <span
          className={`text-base transition-transform duration-200 ${
            isLiked ? "scale-125" : ""
          }`}
        >
          {isLiked ? "❤️" : "🤍"}
        </span>
        <span>{likes === 0 ? "Beğen" : `${likes} Beğeni`}</span>
      </button>

      <span className="text-xs text-stone-400">
        {isLiked ? "Yazıyı beğendiniz!" : "Bu yazıyı beğendiniz mi?"}
      </span>
    </div>
  );
}
