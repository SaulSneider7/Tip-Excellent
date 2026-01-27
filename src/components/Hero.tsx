
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero.webp" 
          alt="Mining Core Operation" 
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-widest">
            Ingeniería en Perforación de Alta Performance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
            TIP EXCELLENT <br />
            <span className="text-amber-500 italic">PATH S.A.</span>
          </h1>
          
          <p className="text-xl text-slate-300 font-light max-w-xl leading-relaxed">
            Soluciones integrales en Raise Boring, HDD y Consultoría Técnica para los sectores de minería e industria pesada a nivel global.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#services" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-bold transition-all shadow-xl flex items-center gap-2 group">
              Explorar Servicios
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-md font-bold transition-all">
              Contacto Directo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
