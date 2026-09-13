export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: "Kültür" | "Yaşam" | "Teknoloji" | "Seyahat";
  readTime: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Sessiz Şehirler: Metropolde Yavaş Yaşam Sanatı",
    excerpt: "Günün koşuşturmacası içinde kendi dingin vahanızı yaratmak mümkün mü? Modern mimari ve minimalist mekanların zihnimize etkisi.",
    content: `Büyük şehirlerin dinamizmi bizi her gün içine çekerken, kendi sessiz alanlarımızı korumak bir lüks değil, bir ihtiyaç haline geldi.

Modern mimarlar ve şehir plancıları artık sadece binalar değil, nefes alabileceğimiz kentsel sığınaklar tasarlıyor. Minimalist çizgiler, doğal ışığın cömertçe kullanıldığı mekanlar ve akustik huzur; modern yaşamın stresine karşı en zarif kalkanlarımız.

### Şehirde Yavaşlamanın 3 Yolu
1. **Sabah Sessizliği:** Güne telefon bildirimleri yerine 15 dakikalık dinginlikle başlayın.
2. **Mimariyi Fark Edin:** Her gün geçtiğiniz sokaklardaki detaylara ve ışık oyunlarına dikkat edin.
3. **Kendi Köşenizi Yaratın:** Evinizde veya çalışma alanınızda karmaşadan arındırılmış, yalnızca bir kitap ve bir fincan kahveye yer olan bir köşe oluşturun.`,
    date: "12 Eylül 2026",
    author: "Selin Yılmaz",
    category: "Yaşam",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Yapay Zeka Çağında Yaratıcılığın Yeni Tanımı",
    excerpt: "Algoritmaların sanatı ve edebiyatı dönüştürdüğü bir dönemde insan dokunuşu neden her zamankinden daha değerli hale geliyor?",
    content: `Teknoloji hiç olmadığı kadar hızlı ilerliyor. Üretken yapay zeka modelleri metinler yazıyor, müzikler besteliyor ve saniyeler içinde büyüleyici görseller üretiyor.

Ancak tam da bu noktada asıl soru ortaya çıkıyor: Bir eseri gerçekten değerli kılan nedir? 

Hata yapabilme cesareti, yaşanan kırılganlıklar ve insani deneyimlerin tortusu... Algoritmalar bize kusursuz kopyalar sunabilir, fakat kusurların ardındaki samimiyeti yalnızca bir insan aktarabilir. Teknoloji yaratıcılığı öldürmüyor; aksine insan özünü yeniden keşfetmeye zorluyor.`,
    date: "10 Eylül 2026",
    author: "Can Demir",
    category: "Teknoloji",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Kuzey Işıklarının Peşinde: İskandinavya Günlükleri",
    excerpt: "Fiyortların sessizliği, gökyüzünün dansı ve soğuk coğrafyalarda sıcak sohbetlerle geçen unutulmaz bir yolculuk.",
    content: `Kuzey kutup dairesine doğru çıktıkça doğanın dili değişir. Rüzgarın uğultusu, karın hışırtısı ve gecenin karanlığında aniden beliren yeşil ışık dansı...

Tromsø'dan Lofoten adalarına uzanan bu rota, sadece bir seyahat değil; doğanın azameti karşısında insanın kendi küçüklüğünü idrak ettiği meditatif bir yolculuk.

Yerel halkın 'Friluftsliv' (açık hava yaşamı) felsefesiyle soğuk havayı bir engel değil, hayatı kutlama vesilesi olarak görmesi yolculuğun en ilham verici yanıydı.`,
    date: "8 Eylül 2026",
    author: "Elif Kaya",
    category: "Seyahat",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Minimalizm ve Sanat: Boşluğun Estetiği",
    excerpt: "Gereksiz detaylardan arınarak zihinsel ferahlığa ulaşmak mümkün mü? Japon estetiğinden modern mimariye yalınlığın felsefesi.",
    content: `Tarih boyunca sanat ve tasarım, neyin ekleneceği kadar neyin çıkarılacağıyla da tanımlandı.

Japon estetiğindeki 'Ma' kavramı, nesneler arasındaki boşluğun sadece bir yokluk değil, aksine anlama hayat veren bir varlık olduğunu savunur. Bir tablodaki boş tuval parçası ya da bir odadaki yalın beyaz duvar, dikkatin asıl öze odaklanmasını sağlar.

Fazlalıklardan kurtulmak bir eksilme değil; zihne, yaratıcılığa ve dinginliğe alan açmaktır.`,
    date: "6 Eylül 2026",
    author: "Mehmet",
    category: "Kültür",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
  }
];

export interface CategoryInfo {
  slug: string;
  name: Post["category"];
  title: string;
  description: string;
}

export const categories: Record<string, CategoryInfo> = {
  kultur: {
    slug: "kultur",
    name: "Kültür",
    title: "Kültür & Sanat",
    description: "Geleneklerden modern sanata, düşünce dünyamızı zenginleştiren editoryal yazılar.",
  },
  yasam: {
    slug: "yasam",
    name: "Yaşam",
    title: "Yaşam & Tasarım",
    description: "Şehir hayatı, minimalist yaşam pratikleri ve dinginlik arayışları.",
  },
  teknoloji: {
    slug: "teknoloji",
    name: "Teknoloji",
    title: "Teknoloji & Gelecek",
    description: "Yapay zeka, dijital dönüşüm ve insanın teknolojiyle kurduğu yeni bağlar.",
  },
  seyahat: {
    slug: "seyahat",
    name: "Seyahat",
    title: "Seyahat & Rotalar",
    description: "Uzak coğrafyalar, sessiz kaçış noktaları ve ilham veren seyahat notları.",
  },
};

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category);
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories[slug.toLowerCase()];
}

export function getPostsByCategorySlug(slug: string): Post[] {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return getPostsByCategory(cat.name);
}
