
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['Todos', ...new Set(GALLERY_ITEMS.map(item => item.category))];

  const filteredItems = filter === 'Todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Evidencia Operativa</span>
          <h2 className="text-4xl font-bold text-slate-900">Nuestra Galería</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-slate-500">
            Visualice la precisión técnica y el alcance de nuestros proyectos realizados en diversos entornos industriales y mineros. Haga clic en cualquier elemento para ampliarlo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-square cursor-zoom-in"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                
                {item.type === 'video' ? (
                  <div className="mt-4 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors">
                    <i className="fa-solid fa-play ml-1"></i>
                  </div>
                ) : (
                  <div className="mt-4 w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-colors">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                )}
              </div>

              {item.type === 'video' && (
                <div className="absolute top-4 right-4 text-white/50 group-hover:text-amber-500 transition-colors">
                  <i className="fa-solid fa-video text-xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Media Modal (Images & Videos) */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
            className="absolute top-6 right-6 text-white/70 text-4xl hover:text-white transition-colors z-[110]"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div 
            className="relative w-full max-w-6xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <video 
                  src={selectedItem.videoUrl} 
                  className="w-full h-full object-contain" 
                  controls 
                  autoPlay
                ></video>
              </div>
            ) : (
              <div className="relative group">
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/5"
                />
              </div>
            )}
            
            <div className="mt-6 text-center space-y-2">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">
                {selectedItem.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
