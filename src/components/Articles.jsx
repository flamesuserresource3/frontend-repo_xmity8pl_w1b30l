import { useMemo } from 'react';

const ARTICLES = [
  {
    slug: 'building-3d-hero-sections',
    title: 'Building Modern 3D Hero Sections with Spline',
    date: '2025-01-15',
    excerpt: 'A step-by-step approach to craft interactive hero sections using Spline and React.',
    content: `\nDesigning an engaging hero section starts with a strong visual. With Spline, you can embed interactive 3D scenes directly into your React app.\n\nKey steps:\n1. Import the Spline component from @splinetool/react-spline.\n2. Place it inside a relative container and let it fill the viewport.\n3. Add a subtle gradient overlay to ensure text remains readable.\n\nPerformance tips:\n- Prefer vector-like geometry and avoid excessive polygons.\n- Keep materials simple, and profile on mid-range devices.\n- Lazy-load secondary scenes if needed.\n`,
  },
  {
    slug: 'engineering-for-delight',
    title: 'Engineering for Delight: Small Details, Big Impact',
    date: '2024-11-20',
    excerpt: 'From micro-interactions to thoughtful empty states — how to make products feel special.',
    content: `\nDelight often hides in the details: clear affordances, responsive feedback, and meaningful motion.\n\nIdeas to try:\n- Use motion to guide attention, not just decorate.\n- Reward successful actions with subtle animations.\n- Design empty states that educate and motivate.\n`,
  },
  {
    slug: 'product-minded-engineering',
    title: 'Product‑Minded Engineering: Bridging Design and Code',
    date: '2024-08-02',
    excerpt: 'A mindset that connects problem discovery to implementation decisions.',
    content: `\nBeing product‑minded means understanding user problems, constraints, and trade‑offs.\n\nPractice:\n- Start from outcomes, not features.\n- Define success metrics up front.\n- Ship small, learn fast, iterate.\n`,
  },
];

function ArticleCard({ article, onOpen }) {
  return (
    <button
      onClick={() => onOpen(article.slug)}
      className="text-left group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/10 transition"
    >
      <p className="text-xs text-white/50">{new Date(article.date).toLocaleDateString()}</p>
      <h3 className="mt-1 text-lg font-semibold group-hover:text-white">{article.title}</h3>
      <p className="text-sm text-white/70 mt-1">{article.excerpt}</p>
      <span className="inline-block mt-3 text-sm text-white/70 group-hover:text-white">Read article →</span>
    </button>
  );
}

function ArticlePage({ slug, onClose }) {
  const article = useMemo(() => ARTICLES.find((a) => a.slug === slug), [slug]);
  if (!article) return null;
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <button onClick={onClose} className="text-sm text-white/70 hover:text-white">← Back to articles</button>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">{article.title}</h1>
        <p className="text-white/50 mt-2">{new Date(article.date).toLocaleDateString()}</p>
        <article className="prose prose-invert max-w-none mt-6">
          {article.content.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default function Articles({ selectedArticle, setSelectedArticle }) {
  if (selectedArticle) {
    return (
      <ArticlePage
        slug={selectedArticle}
        onClose={() => {
          setSelectedArticle(null);
          window.location.hash = 'articles';
        }}
      />
    );
  }

  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Articles</h2>
            <p className="text-white/70 mt-3">Notes on engineering, design, and building joyful products.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <ArticleCard key={a.slug} article={a} onOpen={(slug) => {
              setSelectedArticle(slug);
              window.location.hash = `article-${slug}`;
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
