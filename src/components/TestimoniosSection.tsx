import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonios } from '../data/anzoateguiData';

const TestimoniosSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Lo que dicen nuestros visitantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las experiencias reales de quienes han explorado la Vereda Palomar 
            y se han enamorado de sus paisajes y aventuras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={testimonio.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonio.calificacion
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-center mb-6 italic leading-relaxed">
                "{testimonio.comentario}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonio.nombre.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{testimonio.nombre}</h4>
                <p className="text-sm text-primary-600 font-medium">{testimonio.actividad}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonio.fecha}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para tu próxima aventura?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Únete a cientos de visitantes que han descubierto la magia de la Vereda Palomar. 
              Reserva tu experiencia hoy y crea recuerdos inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Ver Todas las Rutas
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30">
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
