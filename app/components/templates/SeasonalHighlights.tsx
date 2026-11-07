import { Award, GitBranch, Mic, ArrowUpRight, Sparkles } from "lucide-react";

const highlights = [
  { icon: Award, label: "Certificación · Junio 2026", title: "GitHub Actions GH-200", text: "Certificación oficial de Microsoft en GitHub Actions. Compartí una guía con rutas de aprendizaje, documentación y simuladores para acompañar a otros desarrolladores.", href: "https://lnkd.in/eRjqZs-W", action: "Explorar la guía" },
  { icon: GitBranch, label: "IA aplicada · Mibanco", title: "De una idea a TestifyQA", text: "Un agente que conecta historias de usuario, criterios de aceptación y documentación con una matriz de pruebas en Excel, revisión humana y carga controlada a Xray.", href: "https://www.linkedin.com/in/miguel-solis-cunza/", action: "Conocer mi recorrido" },
  { icon: Mic, label: "Comunidad · ENEISOFT XVI", title: "Del código a la nube", text: "Ponencia sobre pipelines CI/CD con GitHub Actions y Docker: cómo convertir una actualización de código en un despliegue automatizado.", href: "https://luma.com/jk1y1vnv", action: "Ver el evento" },
];

export default function SeasonalHighlights() {
  return (
    <section id="novedades" className="holiday-highlights px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-200"><Sparkles size={18} /> Ideas que vale la pena compartir</p>
        <div className="mt-5 mb-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Un año de aprendizaje.<br /><span className="text-amber-200">Más motivos para construir.</span></h2>
          <p className="mt-5 text-emerald-100 leading-relaxed">Certificaciones, automatización y comunidad. Estos son algunos de los pasos más recientes de mi camino en ingeniería de software.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, ...item }) => (
            <article key={item.title} className="flex flex-col rounded-3xl border border-white/20 bg-white/5 p-7">
              <Icon className="text-amber-200 mb-6" size={30} aria-hidden="true" />
              <p className="text-xs uppercase tracking-wider text-emerald-100">{item.label}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 mb-8 text-sm leading-relaxed text-emerald-50">{item.text}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-amber-200 underline-offset-4 hover:underline">{item.action}<ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-emerald-100">Felices fiestas. Que las próximas ideas nos encuentren aprendiendo y construyendo juntos.</p>
      </div>
    </section>
  );
}
