# 🚀 Mehmet'in Next.js & Web Geliştirme Eğitim Notları

Bu doküman, sıfırdan başlayarak geliştirdiğimiz **Nova BLOG** projesinin tüm teorik ve pratik aşamalarını, mantığını ve günlük kullanım komutlarını içerir.

---

## 🏗️ 1. BÖLÜM: Bir Web Sitesi Nelerden Oluşur? (Ev İnşaatı Mantığı)

Web geliştirmeyi sıfırdan bir **ev inşa etmek** gibi düşünebilirsiniz:

| Teknoloji | Görevi (Benzetme) | Açıklama |
| :--- | :--- | :--- |
| **HTML** | 🧱 **Tuğlalar & İskelet** | Ekranda neyin nerede duracağını belirler (Başlık, fotoğraf, buton). |
| **CSS (Tailwind)** | 🎨 **Boya & Dekorasyon** | Renkleri, boyutları, yuvarlak köşeleri ve boşlukları yönetir. |
| **JavaScript** | 💡 **Elektrik & Akıl** | Tıklamalara, butonlara hareket ve etkileşim kazandırır. |
| **React** | 🛋️ **Modüler Mobilyalar (Bileşen)** | Tekrar eden parçaları (kartlar, butonlar) tek bir şablon yapıp her yerde kullanmamızı sağlar. |
| **Next.js** | 👷‍♂️ **Şantiye Şefi / Başmühendis** | Hızı, sayfalar arası geçişi (Routing) ve arama motoru uyumunu (SEO) yöneten çatı sistemdir. |

---

## 📂 2. BÖLÜM: Next.js Klasör Mimarisi (Dosya Tabanlı Yönlendirme)

Next.js'te Windows'ta açtığınız her yeni klasör, sitenizde yeni bir web adresine dönüşür.

* **`src/app/layout.tsx` (Ortak Çatı):**
  * Sitenin tüm sayfalarında sabit duran çatıdır.
  * Üst menü (**Navbar: Nova BLOG**) ve alt bilgi (**Footer**) buradadır. Sayfa değişse bile bu menü asla kaybolmaz.
* **`src/app/page.tsx` (Ana Sayfa):**
  * `http://localhost:3000/` adresinin vitrinidir. Şehir fotoğrafı, büyük başlık ve 3 blog kartı buradadır.
* **`src/app/about/page.tsx` (Hakkımda Sayfası):**
  * `about` klasörü açıp içine `page.tsx` koyduğumuz anda otomatik olarak `http://localhost:3000/about` adresi oluştu.

---

## ⚡ 3. BÖLÜM: Dinamik Rotalar ve `[id]` Sırrı

Binlerce yazı için tek tek yüzlerce dosya açılmaz. Bunun yerine tek bir **joker şablon** açılır:

* **Klasör Adı:** `src/app/blog/[id]/page.tsx`
* Köşeli parantez `[id]`, Next.js'e buranın sabit bir kelime değil bir **değişken** olduğunu söyler:
  * `/blog/1` $\rightarrow$ `id = 1`
  * `/blog/2` $\rightarrow$ `id = 2`
* **Çalışma Prensibi:**
  1. URL'deki numarayı yakala (`id`).
  2. `src/data/posts.ts` veri dosyasından o numaralı yazıyı bul.
  3. Başlığı ve fotoğrafı şablona yerleştirip ekrana bas!

---

## 🎨 4. BÖLÜM: Tasarım ve Pozisyonlama (Tailwind CSS)

* **Etiketlere Sıfat Takma:**
  * `bg-[#FAF9F5]`: Açık krem arka plan.
  * `text-stone-950`: Güçlü siyah tipografi.
  * `rounded-2xl`: Yumuşak kavisli modern köşeler.
  * `grid grid-cols-1 md:grid-cols-3`: Mobilde 1'erli, masaüstünde 3'lü kart dizilimi.

* **"Mehmet" İmzasını Fotoğrafın Üstüne Sabitleme Formülü:**
  * Dış Kutu (Çerçeve): **`relative`**
  * İç Kutu (Etiket): **`absolute bottom-8 right-8`**
  * Buzlu Cam Efekti: **`backdrop-blur-md bg-black/45`** (Glassmorphism)

---

## ⚡ 5. BÖLÜM: Sayfaya Canlılık Katmak (React'ın Hafızası: useState & Client Component)

* **useState (React Hafızası):**
  * Normal sayfalar unutkandır. Bir buton tıklandığında değişen sayıları (beğeni sayısı, sepet tutarı vb.) aklında tutması için ona bir not defteri veririz:
  * `const [likes, setLikes] = useState(0);`
  * `likes`: Defterdeki güncel değer (0).
  * `setLikes`: Değeri değiştiren kalem fonksiyon.
* **"use client" Kuralı:**
  * Next.js sayfaları varsayılan olarak sunucuda (Server Component) hazırlanır.
  * Eğer bir bileşende tıklama (`onClick`), buton sayacı veya `useState` varsa, dosyanın en üst satırına `"use client"` yazılır.
* **Bileşen Mantığı (Component):**
  * Beğeni butonunu ayrı bir modül olarak `src/components/LikeButton.tsx` dosyasında yazdık.
  * Böylece yarın bir gün bu butonu ana sayfada veya başka bir sayfada da tek bir satırla (`<LikeButton />`) kullanabiliriz!

---

## 💻 6. BÖLÜM: Günlük Kullanım Kılavuzu (Yarın Nasıl Başlatacaksınız?)

Bilgisayarı kapatıp açtığınızda veya projeye yeniden devam etmek istediğinizde şu adımları izleyin:

1. **Terminali Açın:** VS Code veya PowerShell terminalini açın.
2. **Proje Klasörüne Gidin:**
   ```bash
   cd "C:\Users\mhmet\OneDrive\Masaüstü\Dersler\ders1"
   ```
3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```
4. **Tarayıcıyı Açın:**
   Adres çubuğuna **`http://localhost:3000`** yazın.

---

## 📝 7. BÖLÜM: Yeni Bir Blog Yazısı Nasıl Eklenir?

Yeni bir yazı eklemek için hiçbir kod dosyasına dokunmanıza gerek yok! Sadece [`src/data/posts.ts`](file:///c:/Users/mhmet/OneDrive/Masaüstü/Dersler/ders1/src/data/posts.ts) dosyasını açıp listenin içine yeni bir obje ekleyin:

```typescript
{
  id: "4",
  title: "Yeni Yazımın Başlığı",
  excerpt: "Yazının kısa özeti burada yer alır...",
  content: "Yazının uzun ve detaylı tüm paragrafları...",
  date: "14 Eylül 2026",
  author: "Mehmet",
  category: "Teknoloji",
  readTime: "3 dk okuma",
  image: "https://images.unsplash.com/photo-..."
}
```
Kaydettiğiniz anda hem ana sayfadaki ızgaraya hem de `/blog/4` sayfasına otomatik olarak eklenecektir!

---

## 🏷️ 8. BÖLÜM: Kategori Sayfaları ve Dinamik Slug Mimarisi

Üst menüdeki linklerin gerçek sayfalara dönüşmesi için Next.js'in dinamik rota gücünü kullandık:

* **Klasör Adı:** `src/app/category/[slug]/page.tsx`
* **Slug Nedir?**
  * URL'lerde Türkçe karakter ve boşluk kullanmak tarayıcılarda bozulmalara yol açabilir. Bu yüzden kategori isimlerini internet uyumlu temiz kelimelere (slug) çeviririz:
  * Kültür $\rightarrow$ `/category/kultur`
  * Yaşam $\rightarrow$ `/category/yasam`
  * Teknoloji $\rightarrow$ `/category/teknoloji`
  * Seyahat $\rightarrow$ `/category/seyahat`
* **Nasıl Çalışır?**
  1. Ziyaretçi menüden "Kültür" butonuna basar.
  2. Next.js `[slug]` joker şablonunu devreye sokar (`slug = 'kultur'`).
  3. `src/data/posts.ts` dosyasından yalnızca o kategoriye ait yazılar filtrelenir ve ekrana basılır!

---

## 💬 9. BÖLÜM: React ile Form Yönetimi & Canlı Arama Filtreleme

Kullanıcı etkileşimlerini (form gönderme ve anlık arama) yönetmek için iki temel React tekniği kullandık:

1. **Form Yönetimi (`CommentSection.tsx`):**
   * Kullanıcının input'a yazdığı her harfi `useState` ile anlık takip ettik (`e.target.value`).
   * Butona basıldığında sayfanın baştan yüklenmesini önlemek için `e.preventDefault()` kullandık.
   * Yeni yorumu mevcut listenin en başına ekledik: `setComments([newComment, ...comments])`.

2. **Canlı Liste Filtreleme (`BlogSearchSection.tsx`):**
   * Kullanıcı arama kutusuna yazdıkça, JavaScript'in `.filter()` ve `.includes()` fonksiyonlarıyla veriler anında süzüldü.
   * Sayfa hiç yenilenmeden eşleşen kartlar ekranda kaldı, kategori butonlarıyla çift yönlü filtreleme sağlandı.
