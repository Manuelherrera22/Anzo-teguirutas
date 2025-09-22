import { Vereda, Ruta, Actividad, Atractivo, Contacto, Testimonio } from '../types';

export const contacto: Contacto = {
  telefono: '+57 300 123 4567',
  email: 'info@anzoateguirutas.com',
  direccion: 'Vereda Palomar, Anzoátegui, Colombia',
  redesSociales: {
    facebook: 'https://facebook.com/anzoateguirutas',
    instagram: 'https://instagram.com/anzoateguirutas',
    whatsapp: 'https://wa.me/573001234567'
  }
};

export const rutas: Ruta[] = [
  {
    id: 'kilometro-vertical-palomar',
    nombre: 'Kilómetro Vertical Palomar',
    tipo: 'kilometro-vertical',
    dificultad: 'extremo',
    duracion: '2-3 horas',
    distancia: '1 km vertical',
    elevacion: '1000m',
    descripcion: 'El desafío más extremo de la Vereda Palomar. Una subida vertical de 1000 metros en solo 1 kilómetro de distancia, perfecta para atletas experimentados que buscan el máximo reto físico y mental.',
    caracteristicas: [
      'Pendiente promedio del 100%',
      'Terreno rocoso y técnico',
      'Vistas panorámicas espectaculares',
      'Zona de bosque nublado',
      'Diversidad de ecosistemas'
    ],
    puntosInteres: [
      'Mirador de los Andes',
      'Cascada Escondida',
      'Bosque de Robles Centenarios',
      'Pico Palomar (2,800 msnm)'
    ],
    recomendaciones: [
      'Experiencia previa en montaña requerida',
      'Equipo técnico obligatorio',
      'Guía certificado recomendado',
      'Condiciones físicas excelentes'
    ],
    imagen: '/images/kilometro-vertical.jpg',
    galeria: [
      '/images/kilometro-vertical-1.jpg',
      '/images/kilometro-vertical-2.jpg',
      '/images/kilometro-vertical-3.jpg'
    ],
    coordenadas: {
      lat: 4.6097,
      lng: -75.0817
    }
  },
  {
    id: 'trail-running-palomar',
    nombre: 'Trail Running Circuito Palomar',
    tipo: 'trail-running',
    dificultad: 'intermedio',
    duracion: '1-2 horas',
    distancia: '8 km',
    elevacion: '400m',
    descripcion: 'Circuito perfecto para trail running con senderos técnicos, subidas moderadas y descensos emocionantes. Ideal para corredores de montaña de nivel intermedio.',
    caracteristicas: [
      'Sendero técnico y variado',
      'Subidas y bajadas balanceadas',
      'Tramo de bosque nublado',
      'Zonas de pastizales',
      'Vistas panorámicas'
    ],
    puntosInteres: [
      'Mirador del Valle',
      'Quebrada Cristalina',
      'Bosque de Arrayanes',
      'Piedra del Águila'
    ],
    recomendaciones: [
      'Zapatos de trail running',
      'Hidratación adecuada',
      'Ropa técnica',
      'Conocimiento básico de orientación'
    ],
    imagen: '/images/trail-running.jpg',
    galeria: [
      '/images/trail-running-1.jpg',
      '/images/trail-running-2.jpg',
      '/images/trail-running-3.jpg'
    ]
  },
  {
    id: 'trekking-palomar',
    nombre: 'Trekking Exploración Palomar',
    tipo: 'trekking',
    dificultad: 'facil',
    duracion: '3-4 horas',
    distancia: '6 km',
    elevacion: '200m',
    descripcion: 'Caminata relajada perfecta para conocer la biodiversidad de la Vereda Palomar. Ideal para familias y principiantes en el senderismo.',
    caracteristicas: [
      'Sendero bien marcado',
      'Pendientes suaves',
      'Diversidad de flora y fauna',
      'Zonas de descanso',
      'Acceso fácil'
    ],
    puntosInteres: [
      'Jardín de Orquídeas',
      'Mirador de Aves',
      'Cascada Pequeña',
      'Árbol Centenario'
    ],
    recomendaciones: [
      'Zapatos cómodos',
      'Agua y snacks',
      'Cámara fotográfica',
      'Binoculares para aves'
    ],
    imagen: '/images/trekking.jpg',
    galeria: [
      '/images/trekking-1.jpg',
      '/images/trekking-2.jpg',
      '/images/trekking-3.jpg'
    ]
  },
  {
    id: 'ruta-epifitas',
    nombre: 'Ruta de las Plantas Epífitas',
    tipo: 'epifitas',
    dificultad: 'facil',
    duracion: '2-3 horas',
    distancia: '4 km',
    elevacion: '150m',
    descripcion: 'Ruta especializada en la observación de plantas epífitas, orquídeas, bromelias y musgos. Una experiencia única para amantes de la botánica.',
    caracteristicas: [
      'Bosque nublado denso',
      'Alta humedad',
      'Diversidad de epífitas',
      'Guía especializado',
      'Material educativo'
    ],
    puntosInteres: [
      'Jardín de Orquídeas Silvestres',
      'Árbol de las Bromelias',
      'Muro de Musgos',
      'Colonia de Helechos'
    ],
    recomendaciones: [
      'Lupa de campo',
      'Guía de plantas',
      'Cámara macro',
      'Ropa impermeable'
    ],
    imagen: '/images/epifitas.jpg',
    galeria: [
      '/images/epifitas-1.jpg',
      '/images/epifitas-2.jpg',
      '/images/epifitas-3.jpg'
    ]
  },
  {
    id: 'ruta-aviturismo',
    nombre: 'Ruta de Aviturismo Palomar',
    tipo: 'aviturismo',
    dificultad: 'facil',
    duracion: '2-4 horas',
    distancia: '5 km',
    elevacion: '100m',
    descripcion: 'Ruta especializada en observación de aves. La Vereda Palomar alberga más de 150 especies de aves, incluyendo varias endémicas de la región.',
    caracteristicas: [
      'Horarios de madrugada',
      'Silencio absoluto',
      'Puntos de observación estratégicos',
      'Guía ornitólogo',
      'Equipo de observación'
    ],
    puntosInteres: [
      'Mirador de Colibríes',
      'Zona de Aves Rapaces',
      'Bosque de Tangaras',
      'Quebrada de Pájaros'
    ],
    recomendaciones: [
      'Binoculares de calidad',
      'Guía de aves',
      'Ropa de colores neutros',
      'Silencio absoluto'
    ],
    imagen: '/images/aviturismo.jpg',
    galeria: [
      '/images/aviturismo-1.jpg',
      '/images/aviturismo-2.jpg',
      '/images/aviturismo-3.jpg'
    ]
  }
];

export const actividades: Actividad[] = [
  {
    id: 'camping-palomar',
    nombre: 'Camping Nocturno Palomar',
    tipo: 'ecoturistica',
    descripcion: 'Experiencia de camping en la montaña con todas las comodidades necesarias. Incluye cena típica, fogata y observación de estrellas.',
    duracion: '12 horas',
    precio: '$150.000 COP',
    incluye: [
      'Equipo de camping completo',
      'Cena típica regional',
      'Desayuno campestre',
      'Guía especializado',
      'Seguro de viaje'
    ],
    requisitos: [
      'Ropa abrigada',
      'Linterna',
      'Documento de identidad',
      'Vacuna contra tétanos'
    ],
    temporada: ['Todo el año'],
    imagen: '/images/camping.jpg',
    galeria: [
      '/images/camping-1.jpg',
      '/images/camping-2.jpg',
      '/images/camping-3.jpg'
    ]
  },
  {
    id: 'fotografia-naturaleza',
    nombre: 'Taller de Fotografía de Naturaleza',
    tipo: 'cultural',
    descripcion: 'Aprende técnicas profesionales de fotografía de naturaleza con un fotógrafo especializado. Incluye equipo profesional y edición básica.',
    duracion: '6 horas',
    precio: '$200.000 COP',
    incluye: [
      'Equipo fotográfico profesional',
      'Instructor especializado',
      'Material didáctico',
      'Sesión de edición',
      'Certificado de participación'
    ],
    requisitos: [
      'Cámara básica (opcional)',
      'Conocimientos básicos de fotografía',
      'Memoria SD',
      'Laptop (opcional)'
    ],
    temporada: ['Marzo - Noviembre'],
    imagen: '/images/fotografia.jpg',
    galeria: [
      '/images/fotografia-1.jpg',
      '/images/fotografia-2.jpg',
      '/images/fotografia-3.jpg'
    ]
  },
  {
    id: 'gastronomia-local',
    nombre: 'Experiencia Gastronómica Local',
    tipo: 'gastronomica',
    descripcion: 'Degusta la auténtica cocina campesina de la región con ingredientes locales y recetas tradicionales transmitidas por generaciones.',
    duracion: '3 horas',
    precio: '$80.000 COP',
    incluye: [
      'Menú completo tradicional',
      'Bebidas típicas',
      'Demostración culinaria',
      'Recetario local',
      'Ingredientes frescos'
    ],
    requisitos: [
      'Reserva previa',
      'Informar alergias',
      'Apetito aventurero'
    ],
    temporada: ['Todo el año'],
    imagen: '/images/gastronomia.jpg',
    galeria: [
      '/images/gastronomia-1.jpg',
      '/images/gastronomia-2.jpg',
      '/images/gastronomia-3.jpg'
    ]
  }
];

export const atractivos: Atractivo[] = [
  {
    id: 'mirador-andes',
    nombre: 'Mirador de los Andes',
    tipo: 'natural',
    descripcion: 'Punto panorámico con vista de 360° de la cordillera de los Andes. En días despejados se pueden ver hasta 5 departamentos.',
    ubicacion: 'Pico Palomar, 2,800 msnm',
    caracteristicas: [
      'Vista panorámica de 360°',
      'Altitud de 2,800 msnm',
      'Zona de vientos fuertes',
      'Formaciones rocosas únicas'
    ],
    imagen: '/images/mirador-andes.jpg',
    galeria: [
      '/images/mirador-andes-1.jpg',
      '/images/mirador-andes-2.jpg',
      '/images/mirador-andes-3.jpg'
    ],
    coordenadas: {
      lat: 4.6097,
      lng: -75.0817
    }
  },
  {
    id: 'cascada-escondida',
    nombre: 'Cascada Escondida',
    tipo: 'natural',
    descripcion: 'Hermosa cascada de 25 metros de altura escondida en el bosque nublado. El acceso requiere una caminata de 30 minutos.',
    ubicacion: 'Quebrada Cristalina, Bosque Nublado',
    caracteristicas: [
      '25 metros de altura',
      'Agua cristalina',
      'Zona de baño natural',
      'Bosque nublado circundante'
    ],
    imagen: '/images/cascada.jpg',
    galeria: [
      '/images/cascada-1.jpg',
      '/images/cascada-2.jpg',
      '/images/cascada-3.jpg'
    ]
  },
  {
    id: 'jardin-orquideas',
    nombre: 'Jardín de Orquídeas Silvestres',
    tipo: 'natural',
    descripcion: 'Zona con más de 50 especies de orquídeas silvestres, incluyendo varias endémicas de la región. Un paraíso para los amantes de la botánica.',
    ubicacion: 'Bosque Nublado, Zona de Alta Humedad',
    caracteristicas: [
      '50+ especies de orquídeas',
      'Especies endémicas',
      'Alta humedad',
      'Acceso controlado'
    ],
    imagen: '/images/orquideas.jpg',
    galeria: [
      '/images/orquideas-1.jpg',
      '/images/orquideas-2.jpg',
      '/images/orquideas-3.jpg'
    ]
  }
];

export const testimonios: Testimonio[] = [
  {
    id: 'testimonio-1',
    nombre: 'María González',
    actividad: 'Kilómetro Vertical',
    comentario: 'Una experiencia increíble. El kilómetro vertical de Palomar es el desafío más intenso que he vivido. Las vistas desde la cima son espectaculares.',
    calificacion: 5,
    fecha: '2024-08-15',
    imagen: '/images/testimonio-1.jpg'
  },
  {
    id: 'testimonio-2',
    nombre: 'Carlos Rodríguez',
    actividad: 'Aviturismo',
    comentario: 'Como ornitólogo aficionado, quedé impresionado con la diversidad de aves. Pudimos observar 23 especies diferentes en una sola mañana.',
    calificacion: 5,
    fecha: '2024-09-02',
    imagen: '/images/testimonio-2.jpg'
  },
  {
    id: 'testimonio-3',
    nombre: 'Ana Martínez',
    actividad: 'Ruta de Epífitas',
    comentario: 'La ruta de plantas epífitas es fascinante. El guía nos enseñó sobre la importancia ecológica de estas plantas. Muy educativo.',
    calificacion: 5,
    fecha: '2024-09-10',
    imagen: '/images/testimonio-3.jpg'
  }
];

export const veredaPalomar: Vereda = {
  id: 'palomar',
  nombre: 'Vereda Palomar',
  descripcion: 'La Vereda Palomar es un paraíso natural ubicado en el corazón de Anzoátegui, Colombia. Con una altitud que varía entre 1,800 y 2,800 metros sobre el nivel del mar, esta vereda ofrece una diversidad ecosistémica única que combina bosque nublado, páramo y zonas de transición. Su ubicación estratégica la convierte en un destino ideal para el turismo rural comunitario, ecoturismo y deportes de aventura.',
  historia: 'La Vereda Palomar fue fundada en 1923 por familias campesinas que llegaron en busca de tierras fértiles para la agricultura. Durante décadas, la comunidad se dedicó principalmente a la producción de café, papa y ganadería. En los últimos años, la comunidad ha diversificado su economía hacia el turismo sostenible, aprovechando sus recursos naturales únicos y su rica biodiversidad.',
  ubicacion: 'Anzoátegui, Colombia',
  clima: 'Templado de montaña, con temperaturas entre 12°C y 22°C',
  altitud: '1,800 - 2,800 msnm',
  poblacion: '350 habitantes',
  principalesActividades: [
    'Trail Running',
    'Trekking',
    'Kilómetro Vertical',
    'Aviturismo',
    'Observación de Plantas Epífitas',
    'Fotografía de Naturaleza',
    'Camping',
    'Gastronomía Local'
  ],
  atractivos: atractivos,
  rutas: rutas,
  actividades: actividades,
  imagen: '/images/vereda-palomar.jpg',
  galeria: [
    '/images/vereda-palomar-1.jpg',
    '/images/vereda-palomar-2.jpg',
    '/images/vereda-palomar-3.jpg',
    '/images/vereda-palomar-4.jpg'
  ]
};
