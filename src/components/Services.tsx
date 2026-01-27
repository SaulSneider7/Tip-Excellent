
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Portafolio de Ingeniería</span>
          <h2 className="text-4xl font-bold text-slate-900">Servicios Especializados</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-slate-500 mt-4">
            Soluciones técnicas avanzadas diseñadas para maximizar la productividad y garantizar la seguridad en entornos críticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="h-48 overflow-hidden relative shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-all"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
