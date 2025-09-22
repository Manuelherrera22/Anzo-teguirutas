export interface Ruta {
  id: string;
  nombre: string;
  tipo: 'trail-running' | 'trekking' | 'kilometro-vertical' | 'paisajismo' | 'aviturismo' | 'epifitas';
  dificultad: 'facil' | 'intermedio' | 'dificil' | 'extremo';
  duracion: string;
  distancia: string;
  elevacion: string;
  descripcion: string;
  caracteristicas: string[];
  puntosInteres: string[];
  recomendaciones: string[];
  imagen: string;
  galeria: string[];
  coordenadas?: {
    lat: number;
    lng: number;
  };
}

export interface Actividad {
  id: string;
  nombre: string;
  tipo: 'deportiva' | 'ecoturistica' | 'cultural' | 'gastronomica';
  descripcion: string;
  duracion: string;
  precio: string;
  incluye: string[];
  requisitos: string[];
  temporada: string[];
  imagen: string;
  galeria: string[];
}

export interface Atractivo {
  id: string;
  nombre: string;
  tipo: 'natural' | 'cultural' | 'deportivo' | 'gastronomico';
  descripcion: string;
  ubicacion: string;
  caracteristicas: string[];
  imagen: string;
  galeria: string[];
  coordenadas?: {
    lat: number;
    lng: number;
  };
}

export interface Vereda {
  id: string;
  nombre: string;
  descripcion: string;
  historia: string;
  ubicacion: string;
  clima: string;
  altitud: string;
  poblacion: string;
  principalesActividades: string[];
  atractivos: Atractivo[];
  rutas: Ruta[];
  actividades: Actividad[];
  imagen: string;
  galeria: string[];
}

export interface Contacto {
  telefono: string;
  email: string;
  direccion: string;
  redesSociales: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

export interface Testimonio {
  id: string;
  nombre: string;
  actividad: string;
  comentario: string;
  calificacion: number;
  fecha: string;
  imagen?: string;
}
