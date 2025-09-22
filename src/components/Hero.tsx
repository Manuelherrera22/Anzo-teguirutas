import React from 'react';
import { ArrowDown, Mountain, MapPin, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-700/60 to-secondary-800/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Anzoátegui Rutas
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Descubre la magia del turismo rural comunitario en Anzoátegui, Tolima. 
            Aventura, naturaleza y tradición se unen en un destino único.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Desde la Vereda Palomar hasta las cascadas de El Progreso, 
            explora nuestras veredas a través de trail running, biciturismo y ecoturismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('rutas')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorar Rutas
            </button>
            <button
              onClick={() => scrollToSection('actividades')}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              Ver Actividades
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Mountain className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-3xl font-bold text-accent-400">8</div>
              <div className="text-sm opacity-90">Rutas Únicas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-3xl font-bold text-accent-400">4</div>
              <div className="text-sm opacity-90">Veredas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-3xl font-bold text-accent-400">150+</div>
              <div className="text-sm opacity-90">Especies de Aves</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-3xl font-bold text-accent-400">5.0</div>
              <div className="text-sm opacity-90">Calificación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('vereda')}
          className="text-white/70 hover:text-white transition-colors animate-bounce-slow"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
