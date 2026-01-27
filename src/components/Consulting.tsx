
import React from 'react';

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white leading-tight">Consultoría y Asesoría <br /><span className="text-amber-500">Técnica Especializada</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Contamos con experiencia sólida en la prestación de servicios de consultoría y asesoría en estudios ambientales, seguridad, diseño en ingeniería civil y minera.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { t: 'Know-How Propio', d: 'Asesoría en implementación y desarrollo de proyectos Raise Boring.' },
                { t: 'Ingeniería Interventoría', d: 'Supervisión técnica en perforaciones y abastecimiento de herramientas.' },
                { t: 'Responsabilidad Social', d: 'Operaciones éticas que propenden generar eficacia bajo la consigna ambiental.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
                  <i className="fa-solid fa-circle-check text-amber-500 mt-1"></i>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 text-center space-y-8">
            <i className="fa-solid fa-industry text-6xl text-amber-500 opacity-50"></i>
            <h3 className="text-2xl font-bold text-white">Garantía de Rentabilidad</h3>
            <p className="text-slate-400 italic">"Nuestros servicios han alcanzado y superado las expectativas de los clientes en cuanto a productividad y performance."</p>
            <div className="pt-4 border-t border-white/10 flex justify-center gap-12">
              <div>
                <p className="text-2xl font-bold text-amber-500">+15</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Años Expertos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-500">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Ética Profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 blur-[120px]"></div>
    </section>
  );
};

export default Consulting;
