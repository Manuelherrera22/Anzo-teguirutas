import React, { useState } from 'react';
import { Clock, DollarSign, Calendar, ArrowRight, Filter } from 'lucide-react';
import { actividades } from '../data/anzoateguiData';

const ActividadesSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('todas');

  const getTypeIcon = (tipo: string) => {
    switch (tipo) {
      case 'deportiva': return '🏃‍♂️';
      case 'ecoturistica': return '🌿';
      case 'cultural': return '🎨';
      case 'gastronomica': return '🍽️';
      default: return '🎯';
    }
  };

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case 'deportiva': return 'bg-blue-100 text-blue-800';
      case 'ecoturistica': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'gastronomica': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredActividades = actividades.filter(actividad => 
    selectedType === 'todas' || actividad.tipo === selectedType
  );

  const typeOptions = [
    { value: 'todas', label: 'Todas las Actividades' },
    { value: 'deportiva', label: 'Deportiva' },
    { value: 'ecoturistica', label: 'Ecoturística' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'gastronomica', label: 'Gastronómica' }
  ];

  return (
    <section id="actividades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Actividades en Palomar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sumérgete en experiencias únicas que combinan aventura, cultura y naturaleza 
            en la Vereda Palomar, incluyendo tours guiados en bicicleta y actividades especializadas.
          </p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-2xl p-6 mb-12 shadow-lg">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filtrar Actividades</h3>
          </div>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Actividad</label>
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
        </div>

        {/* Activities Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredActividades.map((actividad, index) => (
            <div
              key={actividad.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Activity Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{getTypeIcon(actividad.tipo)}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(actividad.tipo)}`}>
                    {actividad.tipo.charAt(0).toUpperCase() + actividad.tipo.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{actividad.nombre}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{actividad.descripcion}</p>
                </div>
              </div>

              {/* Activity Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{actividad.duracion}</div>
                    <div className="text-xs text-gray-500">Duración</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{actividad.precio}</div>
                    <div className="text-xs text-gray-500">Precio</div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Incluye</h4>
                  <div className="space-y-1">
                    {actividad.incluye.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                    {actividad.incluye.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{actividad.incluye.length - 3} elementos más
                      </div>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Requisitos</h4>
                  <div className="flex flex-wrap gap-1">
                    {actividad.requisitos.slice(0, 2).map((requisito, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {requisito}
                      </span>
                    ))}
                    {actividad.requisitos.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{actividad.requisitos.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Season */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Temporada: {actividad.temporada.join(', ')}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group">
                  Reservar Ahora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredActividades.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron actividades</h3>
            <p className="text-gray-600">Intenta ajustar el filtro para ver más opciones.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Interesado en una experiencia personalizada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos para crear una experiencia única adaptada a tus intereses y necesidades. 
              Nuestros guías locales están listos para diseñar la aventura perfecta para ti.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contactar Guía Local
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActividadesSection;
