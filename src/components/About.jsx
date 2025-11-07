export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-white/70">
            I’m a full‑stack developer with a love for 3D interfaces, animations, and clean architecture.
            I enjoy turning complex ideas into simple, elegant products and experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-white/60">Focus</p>
              <p className="font-medium">Frontend • WebGL • UX</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-white/60">Stack</p>
              <p className="font-medium">React • FastAPI • MongoDB</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-white/60">Interests</p>
              <p className="font-medium">Creative coding, tools, product</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-white/60">Location</p>
              <p className="font-medium">Remote • Worldwide</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <ul className="relative space-y-3 text-white/80">
              <li>• 6+ years building web products end‑to‑end</li>
              <li>• Shipped interactive 3D landing pages and dashboards</li>
              <li>• Passionate about developer experience and performance</li>
              <li>• Advocate for accessibility and inclusive design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
