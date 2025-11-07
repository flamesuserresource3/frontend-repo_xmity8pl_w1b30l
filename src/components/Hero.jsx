import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] overflow-hidden">
      {/* 3D Spline scene as the hero background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability - doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-widest text-white/60 mb-3">Tech • Interactive • Modern</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Crafting playful, high-performing digital experiences
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            I’m a product-focused engineer who blends 3D, motion, and robust engineering to ship delightful web apps.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">View Projects</a>
            <a href="#articles" className="px-4 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition">Read Articles</a>
          </div>
        </div>
      </div>
    </section>
  );
}
