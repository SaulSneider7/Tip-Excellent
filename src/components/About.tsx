
import React from 'react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Trayectoria y Liderazgo</span>
              <h2 className="text-4xl font-bold text-slate-900">Misión: Excelencia en cada Perforación</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                TIP EXCELLENT PATH S.A es una empresa joven en el mercado que combina la agilidad operativa con un respaldo técnico de más de 15 años. 
                Nuestro personal directivo y técnico posee un **Know-How propio** que garantiza perforaciones óptimas, seguras y altamente rentables.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Buscamos superar las expectativas de productividad y performance, operando siempre bajo un marco de responsabilidad social y desarrollo sustentable.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-amber-500/50 transition-all group">
                  <div className="mb-4 group-hover:scale-110 transition-transform">{val.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-tight">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80" 
                alt="Ingeniería técnica" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-slate-950 p-10 rounded-2xl shadow-2xl hidden md:block border-l-4 border-amber-500">
              <p className="text-4xl font-black text-amber-500 mb-1">100%</p>
              <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">Compromiso con la <br /> Seguridad Integral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
