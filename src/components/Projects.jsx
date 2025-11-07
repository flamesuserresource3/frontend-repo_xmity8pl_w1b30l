export default function Projects() {
  const projects = [
    {
      title: 'Interactive Data Explorer',
      desc: 'A WebGL powered tool to explore complex datasets with silky smooth interactions.',
      tags: ['React', 'Three.js', 'D3'],
      link: '#',
    },
    {
      title: 'Realtime Collaboration Suite',
      desc: 'Document editing and presence indicators with OT and websockets.',
      tags: ['FastAPI', 'WebSockets', 'Redis'],
      link: '#',
    },
    {
      title: '3D Marketing Site',
      desc: 'A playful, tech-forward landing page with 3D scenes and motion.',
      tags: ['Spline', 'Framer Motion', 'Vite'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Projects</h2>
        <p className="text-white/70 mt-3">A selection of recent work and experiments.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/10 transition">
              <div className="h-32 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 mb-4" />
              <h3 className="text-lg font-semibold group-hover:text-white">{p.title}</h3>
              <p className="text-sm text-white/70 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
