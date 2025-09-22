import React from 'react';
import { MapPin, Users, Mountain, Coffee, Droplets, TreePine } from 'lucide-react';
import { infoAnzoategui } from '../data/anzoateguiData';

const VeredasSection: React.FC = () => {
  const getIcon = (especialidad: string[]) => {
    if (especialidad.includes('Kilómetro Vertical')) return <Mountain className="w-6 h-6" />;
    if (especialidad.includes('Biciturismo')) return <Mountain className="w-6 h-6" />;
    if (especialidad.includes('Café Turismo')) return <Coffee className="w-6 h-6" />;
    if (especialidad.includes('Cascadas')) return <Droplets className="w-6 h-6" />;
    if (especialidad.includes('Montañismo')) return <TreePine className="w-6 h-6" />;
    return <MapPin className="w-6 h-6" />;
  };

  const getColor = (especialidad: string[]) => {
    if (especialidad.includes('Kilómetro Vertical')) return 'text-red-600 bg-red-100';
    if (especialidad.includes('Biciturismo')) return 'text-blue-600 bg-blue-100';
    if (especialidad.includes('Café Turismo')) return 'text-amber-600 bg-amber-100';
    if (especialidad.includes('Cascadas')) return 'text-cyan-600 bg-cyan-100';
    if (especialidad.includes('Montañismo')) return 'text-green-600 bg-green-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Veredas de Anzoátegui
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las hermosas veredas de Anzoátegui, Tolima. Cada una con su propia 
            personalidad, atractivos únicos y experiencias inolvidables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vereda Palomar - Destacada */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vereda Palomar</h3>
                  <p className="text-primary-600 font-medium">⭐ Vereda Destacada</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {infoAnzoategui.veredas[0].descripcion}
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{infoAnzoategui.veredas[0].altitud}</div>
                  <div className="text-xs text-gray-500">Altitud</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{infoAnzoategui.veredas[0].poblacion}</div>
                  <div className="text-xs text-gray-500">Población</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Mountain className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">5</div>
                  <div className="text-xs text-gray-500">Rutas</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Coffee className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">4</div>
                  <div className="text-xs text-gray-500">Actividades</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {infoAnzoategui.veredas[0].especialidad.map((especialidad, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-medium"
                  >
                    {especialidad}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Otras Veredas */}
          {infoAnzoategui.veredas.slice(1).map((vereda, index) => (
            <div
              key={vereda.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  {getIcon(vereda.especialidad)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{vereda.nombre}</h4>
                  <p className="text-gray-600 text-sm">{vereda.ubicacion}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {vereda.descripcion}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{vereda.altitud}</div>
                  <div className="text-xs text-gray-500">Altitud</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{vereda.poblacion}</div>
                  <div className="text-xs text-gray-500">Población</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {vereda.especialidad.map((especialidad, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs rounded-full font-medium ${getColor([especialidad])}`}
                  >
                    {especialidad}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para explorar Anzoátegui?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Cada vereda tiene su propia magia. Desde el kilómetro vertical de Palomar 
              hasta las cascadas de El Progreso, descubre la diversidad de Anzoátegui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Ver Todas las Rutas
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30">
                Planificar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeredasSection;
