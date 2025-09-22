import React, { useState } from 'react';
import { Clock, MapPin, TrendingUp, ArrowRight, Filter } from 'lucide-react';
import { todasLasRutas } from '../data/anzoateguiData';

const RutasSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('todas');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todas');

  const getDifficultyColor = (dificultad: string) => {
    switch (dificultad) {
      case 'facil': return 'bg-green-100 text-green-800';
      case 'intermedio': return 'bg-yellow-100 text-yellow-800';
      case 'dificil': return 'bg-orange-100 text-orange-800';
      case 'extremo': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (tipo: string) => {
    switch (tipo) {
      case 'trail-running': return '🏃‍♂️';
      case 'trekking': return '🥾';
      case 'kilometro-vertical': return '⛰️';
      case 'paisajismo': return '📸';
      case 'aviturismo': return '🦅';
      case 'epifitas': return '🌿';
      case 'biciturismo': return '🚴‍♂️';
      case 'caminata': return '🚶‍♂️';
      case 'aventura': return '🧗‍♂️';
      default: return '🗺️';
    }
  };

  const filteredRutas = todasLasRutas.filter(ruta => {
    const typeMatch = selectedType === 'todas' || ruta.tipo === selectedType;
    const difficultyMatch = selectedDifficulty === 'todas' || ruta.dificultad === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const typeOptions = [
    { value: 'todas', label: 'Todas las Rutas' },
    { value: 'trail-running', label: 'Trail Running' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'kilometro-vertical', label: 'Kilómetro Vertical' },
    { value: 'biciturismo', label: 'Biciturismo' },
    { value: 'paisajismo', label: 'Paisajismo' },
    { value: 'aviturismo', label: 'Aviturismo' },
    { value: 'epifitas', label: 'Plantas Epífitas' },
    { value: 'caminata', label: 'Caminata' },
    { value: 'aventura', label: 'Aventura' }
  ];

  const difficultyOptions = [
    { value: 'todas', label: 'Todas las Dificultades' },
    { value: 'facil', label: 'Fácil' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'dificil', label: 'Difícil' },
    { value: 'extremo', label: 'Extremo' }
  ];

  return (
    <section id="rutas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Rutas de la Vereda Palomar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre la diversidad de la Vereda Palomar a través de nuestras rutas especializadas, 
            incluyendo el famoso kilómetro vertical y emocionantes rutas de biciturismo de montaña.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filtrar Rutas</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Ruta</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {typeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dificultad</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {difficultyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredRutas.map((ruta, index) => (
            <div
              key={ruta.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Route Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">{getTypeIcon(ruta.tipo)}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(ruta.dificultad)}`}>
                    {ruta.dificultad.charAt(0).toUpperCase() + ruta.dificultad.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{ruta.nombre}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{ruta.descripcion}</p>
                </div>
              </div>

              {/* Route Details */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{ruta.duracion}</div>
                    <div className="text-xs text-gray-500">Duración</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{ruta.distancia}</div>
                    <div className="text-xs text-gray-500">Distancia</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{ruta.elevacion}</div>
                    <div className="text-xs text-gray-500">Elevación</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Características Principales</h4>
                  <div className="flex flex-wrap gap-2">
                    {ruta.caracteristicas.slice(0, 3).map((caracteristica, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {caracteristica}
                      </span>
                    ))}
                    {ruta.caracteristicas.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{ruta.caracteristicas.length - 3} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group">
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRutas.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPin className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron rutas</h3>
            <p className="text-gray-600">Intenta ajustar los filtros para ver más opciones.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RutasSection;
