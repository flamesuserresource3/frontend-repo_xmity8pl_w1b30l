import { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Articles from './components/Articles.jsx';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Simple hash-based navigation to open an article via #article-slug
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('article-')) {
        const slug = hash.replace('article-', '');
        setSelectedArticle(slug);
      } else if (hash === '') {
        setSelectedArticle(null);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white/20 selection:text-white">
      {/* Simple sticky top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-white/90 hover:text-white transition">My Portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#articles" className="hover:text-white transition">Articles</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Articles selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
      </main>

      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="mailto:hello@example.com" className="hover:text-white transition">Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
