import React from 'react';
import { MapPin, Thermometer, Users, Mountain, Leaf, Camera } from 'lucide-react';
import { infoAnzoategui } from '../data/anzoateguiData';

const VeredaSection: React.FC = () => {
  return (
    <section id="vereda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Conoce Anzoátegui, Tolima
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un paraíso natural donde la aventura, la biodiversidad y la tradición campesina 
            se encuentran para crear experiencias únicas de turismo rural comunitario.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {infoAnzoategui.veredas[0].historia}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {infoAnzoategui.veredas[0].descripcion}
            </p>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Mountain className="w-24 h-24 text-white/50" />
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-primary-600 mr-3" />
              <h4 className="text-lg font-semibold text-gray-900">Ubicación</h4>
            </div>
            <p className="text-gray-600">{infoAnzoategui.veredas[0].ubicacion}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Thermometer className="w-8 h-8 text-secondary-600 mr-3" />
              <h4 className="text-lg font-semibold text-gray-900">Clima</h4>
            </div>
            <p className="text-gray-600">{infoAnzoategui.veredas[0].clima}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Mountain className="w-8 h-8 text-accent-600 mr-3" />
              <h4 className="text-lg font-semibold text-gray-900">Altitud</h4>
            </div>
            <p className="text-gray-600">{infoAnzoategui.veredas[0].altitud}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-primary-600 mr-3" />
              <h4 className="text-lg font-semibold text-gray-900">Población</h4>
            </div>
            <p className="text-gray-600">{infoAnzoategui.veredas[0].poblacion}</p>
          </div>
        </div>

        {/* Main Activities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Actividades Principales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoAnzoategui.veredas[0].principalesActividades.map((actividad, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  {actividad.includes('Trail') && <Mountain className="w-6 h-6 text-primary-600" />}
                  {actividad.includes('Trekking') && <Mountain className="w-6 h-6 text-primary-600" />}
                  {actividad.includes('Vertical') && <Mountain className="w-6 h-6 text-primary-600" />}
                  {actividad.includes('Aviturismo') && <Leaf className="w-6 h-6 text-secondary-600" />}
                  {actividad.includes('Epífitas') && <Leaf className="w-6 h-6 text-secondary-600" />}
                  {actividad.includes('Fotografía') && <Camera className="w-6 h-6 text-accent-600" />}
                  {actividad.includes('Camping') && <Mountain className="w-6 h-6 text-accent-600" />}
                  {actividad.includes('Gastronomía') && <Leaf className="w-6 h-6 text-accent-600" />}
                </div>
                <span className="font-medium text-gray-900">{actividad}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeredaSection;
