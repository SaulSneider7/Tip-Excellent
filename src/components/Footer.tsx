
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Consultoría', href: '#consulting' },
    { name: 'Contacto', href: '#contact' },
  ];

  const coreServices = [
    'Raise Boring Drilling',
    'Slot Raise',
    'HDD – Perforación Horizontal',
    'Consultoría Técnica',
    'Alquiler de Maquinaria'
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-bore-hole text-3xl text-amber-500"></i>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">TIP EXCELLENT</span>
                <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Path S.A.</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed text-justify">
              Empresa líder en perforación mecanizada y servicios especializados para minería e industria. 
              Combinamos tecnología de vanguardia con más de 15 años de experiencia operativa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a href="mailto:servicios@tip-excellent.com" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300">
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-8">Navegación</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-8">Servicios Core</h4>
            <ul className="space-y-4">
              {coreServices.map((service) => (
                <li key={service} className="text-slate-400 text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500/50 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-8">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <i className="fa-solid fa-location-dot text-amber-500 mt-1"></i>
                <p className="text-slate-400 text-sm leading-snug">
                  Lima, Perú<br />
                  <span className="text-[10px] text-slate-600">Sede Principal Operativa</span>
                </p>
              </div>
              <a href="tel:+51934262734" className="flex items-center space-x-3 group">
                <i className="fa-solid fa-phone text-amber-500"></i>
                <span className="text-slate-400 group-hover:text-white transition-colors text-sm">+51 934 262 734</span>
              </a>
              <a href="mailto:servicios@tip-excellent.com" className="flex items-center space-x-3 group">
                <i className="fa-solid fa-envelope text-amber-500"></i>
                <span className="text-slate-400 group-hover:text-white transition-colors text-sm break-all">servicios@tip-excellent.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[11px] font-medium text-slate-500 tracking-wider">
          <div className="flex flex-col space-y-2">
            <div className="uppercase">
              © {currentYear} TIP EXCELLENT PATH S.A. | RUC: 20606700000
            </div>
            <div className="text-slate-600">
              Desarrollado por <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-amber-500/80 hover:text-amber-500 transition-colors font-bold">tu-sitioweb.com</a>
            </div>
          </div>
          
          <div className="flex space-x-8 uppercase">
            <a href="#" className="hover:text-amber-500 transition-colors">Términos</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Sostenibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
