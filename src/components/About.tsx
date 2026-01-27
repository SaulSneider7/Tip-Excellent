
import React from 'react';
import { MISSION, VISION, VALUES, CORE_VALUES_SHORT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Nuestra Trayectoria</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Liderando el camino con <br />
                <span className="text-amber-600">Experiencia y Pasión</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                TIP EXCELLENT PATH S.A es una empresa joven en el mercado que combina la agilidad operativa con un respaldo técnico de más de 15 años en el rubro. 
                Nuestros resultados han alcanzado y superado las expectativas de nuestros clientes en productividad y performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {CORE_VALUES_SHORT.map((val, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-500/50 transition-all group">
                  <div className="mb-4 group-hover:scale-110 transition-transform">{val.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 leading-tight">{val.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="./ing_tecnica.webp" 
                alt="Ingeniería técnica especializada" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            {/* Decoration Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 bg-slate-950 p-10 rounded-2xl shadow-2xl hidden md:block border-l-4 border-amber-500 z-20">
              <p className="text-4xl font-black text-amber-500 mb-1">100%</p>
              <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">Operadores <br /> Calificados</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-900 p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 mb-4">
                <i className="fa-solid fa-rocket text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold">Nuestra Misión</h3>
              <p className="text-slate-400 leading-relaxed text-lg italic">
                "{MISSION}"
              </p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <i className="fa-solid fa-bullseye text-9xl"></i>
            </div>
          </div>

          <div className="bg-amber-600 p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4">
                <i className="fa-solid fa-eye text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold">Nuestra Visión</h3>
              <p className="text-amber-50 leading-relaxed text-sm">
                {VISION}
              </p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="fa-solid fa-globe text-9xl"></i>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Principios Fundamentales</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Nuestros Valores</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VALUES.map((value, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-amber-600 text-xl mb-6">
                  {value.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-tighter leading-tight">
                  {value.title}
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
