import React, { useState } from 'react';
import { Menu, X, Mountain, MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Vereda Palomar, Anzoátegui</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+57 300 123 4567</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>info@anzoateguirutas.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="w-8 h-8 text-primary-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Anzoátegui Rutas</h1>
              <p className="text-sm text-gray-600">Turismo Rural Comunitario</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('vereda')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              La Vereda
            </button>
            <button
              onClick={() => scrollToSection('rutas')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Rutas
            </button>
            <button
              onClick={() => scrollToSection('actividades')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Actividades
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contacto
            </button>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Reservar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('vereda')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                La Vereda
              </button>
              <button
                onClick={() => scrollToSection('rutas')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Rutas
              </button>
              <button
                onClick={() => scrollToSection('actividades')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Actividades
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Contacto
              </button>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors w-full">
                Reservar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
