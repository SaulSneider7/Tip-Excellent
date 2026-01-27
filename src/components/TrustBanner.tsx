
import React from 'react';

const TrustBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center space-x-3 text-slate-400">
          <i className="fa-solid fa-check-double text-amber-500"></i>
          <span className="text-sm font-semibold tracking-wide uppercase">Operadores 100% Calificados</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-400">
          <i className="fa-solid fa-shield-halved text-amber-500"></i>
          <span className="text-sm font-semibold tracking-wide uppercase">Certificación de Seguridad</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-400">
          <i className="fa-solid fa-clock text-amber-500"></i>
          <span className="text-sm font-semibold tracking-wide uppercase">+15 Años de Experiencia Directa</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
