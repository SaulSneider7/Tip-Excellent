
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Consultoría', href: '#consulting' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className={`fa-solid fa-bore-hole text-3xl ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`}></i>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                TIP EXCELLENT
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                Path S.A.
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-slate-100 hover:text-amber-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
