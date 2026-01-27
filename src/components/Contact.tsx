
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Contacto Directo</h2>
          <p className="text-slate-600 text-lg">
            Inicie su proyecto con el respaldo de expertos certificados. Estamos listos para atender sus requerimientos técnicos.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Teléfono */}
          <a href="tel:+51934262734" className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-xl hover:border-amber-500/50 transition-all">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <i className="fa-solid fa-phone text-3xl"></i>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Llamada técnica</p>
            <p className="text-xl font-bold text-slate-900">+51 934 262 734</p>
          </a>

          {/* Email */}
          <a href="mailto:servicios@tip-excellent.com" className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-xl hover:border-amber-500/50 transition-all">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <i className="fa-solid fa-envelope text-3xl"></i>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email corporativo</p>
            <p className="text-xl font-bold text-slate-900 break-words">servicios@tip-excellent.com</p>
          </a>

          {/* Ubicación */}
          <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-xl hover:border-amber-500/50 transition-all">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <i className="fa-solid fa-location-dot text-3xl"></i>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Sede Central</p>
            <p className="text-xl font-bold text-slate-900">Lima, Perú</p>
          </div>
        </div>

        <div className="mt-16 p-10 bg-slate-900 rounded-[2rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Atención a nivel nacional e internacional</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Brindamos servicios integrales para la minería e industria en cualquier ubicación geográfica, garantizando la misma calidad y eficiencia operativa.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
