import Button from "@/app/components/atoms/Button";
import StatusBadge from "@/app/components/atoms/StatusBadge"; // <--- ¡Nuevo Import!

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-ivory-50 p-12 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-sage-200 pb-6">
        <h1 className="text-4xl font-bold text-forest-900 mb-2">Sistema de Diseño</h1>
        <p className="text-sage-600">
          Galería de componentes (Átomos)
        </p>
      </div>

      {/* 1. VARIANTES DE COLOR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-sage-500 pl-4">
          1. Botones: Variantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-white p-8 rounded-xl shadow-sm border border-ivory-200">
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">Primary</Button>
            <span className="text-xs text-sage-500 font-mono">variant="primary"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">Secondary</Button>
            <span className="text-xs text-sage-500 font-mono">variant="secondary"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">Outline</Button>
            <span className="text-xs text-sage-500 font-mono">variant="outline"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost">Ghost Button</Button>
            <span className="text-xs text-sage-500 font-mono">variant="ghost"</span>
          </div>
        </div>
      </section>

      {/* 2. TAMAÑOS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-coffee-400 pl-4">
          2. Botones: Tamaños
        </h2>
        <div className="flex flex-wrap items-end gap-8 bg-white p-8 rounded-xl shadow-sm border border-ivory-200">
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="primary">Small</Button>
            <span className="text-xs text-sage-500 font-mono">size="sm"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <Button size="md" variant="primary">Medium</Button>
             <span className="text-xs text-sage-500 font-mono">size="md"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" variant="primary">Large</Button>
            <span className="text-xs text-sage-500 font-mono">size="lg"</span>
          </div>
        </div>
      </section>

      {/* 3. ESTADOS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-blush-400 pl-4">
          3. Botones: Contexto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-forest-900 p-8 rounded-xl shadow-md text-center space-y-4">
            <h3 className="text-ivory-100 font-bold">Sobre fondo oscuro</h3>
            <div className="flex justify-center gap-4">
               <Button variant="primary">Acción</Button>
               <Button variant="outline" className="border-ivory-200 text-ivory-100 hover:bg-forest-800">
                 Borde Claro
               </Button>
            </div>
          </div>
          <div className="bg-ivory-200 p-8 rounded-xl text-center space-y-4 border border-ivory-300">
            <h3 className="text-forest-800 font-bold">Estado Disabled</h3>
            <div className="flex justify-center gap-4">
               <Button variant="primary" disabled>Procesando...</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}
      {/* 4. SECCIÓN NUEVA: STATUS BADGE                          */}
      {/* ----------------------------------------------------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-blush-600 pl-4">
          4. Indicadores (Badges)
        </h2>
        <p className="text-forest-600 mb-4">
          Componente <code>&lt;StatusBadge /&gt;</code>. Pasa el mouse por encima para ver la animación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Caso A: Fondo Claro */}
          <div className="bg-white p-12 rounded-xl shadow-sm border border-ivory-200 flex flex-col items-center justify-center gap-4">
             <span className="text-xs uppercase tracking-widest text-sage-500">Sobre fondo claro</span>
             <StatusBadge />
          </div>

          {/* Caso B: Fondo Oscuro (Donde mejor se ve) */}
          <div className="bg-forest-900 p-12 rounded-xl shadow-xl relative overflow-hidden flex flex-col items-center justify-center gap-4">
             {/* Un manchón de color de fondo para probar el efecto vidrio/blur */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-sage-500 rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"></div>
             
             <span className="text-xs uppercase tracking-widest text-sage-300 relative z-10">Sobre fondo oscuro (Hero)</span>
             
             {/* Aquí probamos cambiando el texto */}
             <StatusBadge text="OPEN TO WORK" className="relative z-10" />
          </div>

        </div>
      </section>

    </main>
  );
}