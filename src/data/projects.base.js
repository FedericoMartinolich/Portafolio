/* ===========================
   BASE PROJECT DATA
=========================== */
export default {
  checking: {
    id: 'checking',
    company: 'Universidad Sedes Sapientiae',
    accent: '#38bdf8',
    status: 'done',
    thumbnail: '/Portafolio/imgs/projects/ChecKing/Logo.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Laragon'],
    gallery: [
      '/Portafolio/imgs/projects/ChecKing/1.png',
      '/Portafolio/imgs/projects/ChecKing/2.png',
      '/Portafolio/imgs/projects/ChecKing/3.png',
      '/Portafolio/imgs/projects/ChecKing/4.png'
    ],
    features: [
      { title: 'Panel de Control', description: 'Visión general de la asistencia de tus cursos con estadísticas en tiempo real.' },
      { title: 'Registro Digital', description: 'Reemplaza planillas manuales con registro de asistencia en línea y validación de límites.' },
      { title: 'Reportes Automáticos', description: 'Generación de reportes con porcentajes de asistencia por curso y configuración de reglas.' }
    ],
    repository: 'https://github.com/FedericoMartinolich/checKing'
  },

  foodservice: {
    id: 'foodservice',
    company: 'Rebrit SRL',
    accent: '#f97316',
    status: 'done',
    thumbnail: '/Portafolio/imgs/projects/FoodService/Logo.png',
    techStack: [
      'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL',
      'Bootstrap', 'AJAX', 'Tesseract OCR'
    ],
    gallery: [
      '/Portafolio/imgs/projects/FoodService/1.jpeg',
      '/Portafolio/imgs/projects/FoodService/2.png',
      '/Portafolio/imgs/projects/FoodService/3.png',
      '/Portafolio/imgs/projects/FoodService/4.png',
      '/Portafolio/imgs/projects/FoodService/5.png',
      '/Portafolio/imgs/projects/FoodService/6.png',
      '/Portafolio/imgs/projects/FoodService/7.png',
      '/Portafolio/imgs/projects/FoodService/8.png',
      '/Portafolio/imgs/projects/FoodService/9.png',
      '/Portafolio/imgs/projects/FoodService/10.png',
      '/Portafolio/imgs/projects/FoodService/11.png',
      '/Portafolio/imgs/projects/FoodService/12.png',
      '/Portafolio/imgs/projects/FoodService/13.png'
    ],
    features: [
      { title: 'Gestión de Pedidos', description: 'Flujo completo de pedidos de comida con registro, selección de menú y seguimiento en tiempo real.' },
      { title: 'Carga OCR de Menús', description: 'Automatización de carga de menú semanal mediante Tesseract OCR a partir de imágenes.' },
      { title: 'Panel Administrativo', description: 'Administración de usuarios, roles, permisos y reportes con exportación a PDF.' }
    ],
    repository: ''
  },

  'tiro-libre': {
    id: 'tiro-libre',
    accent: '#22c55e',
    status: 'done',
    thumbnail: '/Portafolio/imgs/projects/TiroLibre/Logo.png',
    techStack: [
      'Laravel 10', 'PHP', 'MySQL', 'Spatie Roles & Permissions',
      'Blade', 'JavaScript', 'FullCalendar',
      'CSS', 'Bootstrap', 'AJAX', 'Leaflet'
    ],
    gallery: [
      '/Portafolio/imgs/projects/TiroLibre/cancha.png',
      '/Portafolio/imgs/projects/TiroLibre/cancha-oscuro.png',
      '/Portafolio/imgs/projects/TiroLibre/home-canchero.png',
      '/Portafolio/imgs/projects/TiroLibre/home-jugador.png',
      '/Portafolio/imgs/projects/TiroLibre/mapa.png',
      '/Portafolio/imgs/projects/TiroLibre/solicitudes-pendientes.png'
    ],
    features: [
      { title: 'Reservas Online', description: 'Los jugadores reservan canchas en línea con disponibilidad en tiempo real y calendario interactivo.' },
      { title: 'Mapa Interactivo', description: 'Búsqueda de canchas cercanas con mapa integrado usando Leaflet y filtros de disponibilidad.' },
      { title: 'Gestión de Propietarios', description: 'Panel administrativo para gestionar horarios, solicitudes de reserva y comunicación con jugadores.' }
    ],
    repository: 'https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file'
  },

  mecha: {
    id: 'mecha',
    company: 'Rebrit SRL',
    accent: '#f59e0b',
    status: 'done',
    thumbnail: '/Portafolio/imgs/projects/Mecha/Logo.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gallery: [
      '/Portafolio/imgs/projects/Mecha/1.jpeg',
      '/Portafolio/imgs/projects/Mecha/2.jpeg',
      '/Portafolio/imgs/projects/Mecha/3.jpeg',
      '/Portafolio/imgs/projects/Mecha/4.jpeg',
      '/Portafolio/imgs/projects/Mecha/5.jpeg',
      '/Portafolio/imgs/projects/Mecha/6.jpeg'
    ],
    features: [
      { title: 'Maquetación Precisa', description: 'Réplica fiel del diseño original con atención a detalles tipográficos y de estilo.' },
      { title: 'Responsive Design', description: 'Adaptación completa a múltiples tamaños de pantalla con navegación optimizada.' },
      { title: 'Código Limpio', description: 'HTML, CSS y JavaScript puro sin frameworks, maximizando rendimiento y mantenibilidad.' }
    ],
    repository: ''
  },

  kredit: {
    id: 'kredit',
    company: 'Rebrit SRL',
    accent: '#34d399',
    status: 'done',
    thumbnail: '/Portafolio/imgs/projects/Kredit/Logo.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'JWT'],
    gallery: [
      '/Portafolio/imgs/projects/Kredit/1.jpeg',
      '/Portafolio/imgs/projects/Kredit/2.jpeg',
      '/Portafolio/imgs/projects/Kredit/3.jpeg',
      '/Portafolio/imgs/projects/Kredit/4.jpeg'
    ],
    features: [
      { title: 'Frontend Responsive', description: 'Interfaz completa y adaptable para plataforma financiera de gestión de préstamos.' },
      { title: 'Integración JWT', description: 'Consumo de APIs protegidas con autenticación por token y manejo de estados de respuesta.' },
      { title: 'Flujo de Préstamos', description: 'Formulario de solicitud conectado a API con validaciones y retroalimentación en tiempo real.' }
    ],
    repository: ''
  },

  'ferreteria-el-moro': {
    id: 'ferreteria-el-moro',
    company: 'Ferretería El Moro',
    accent: '#fb923c',
    status: 'done',
    demo: 'https://ferreteriaelmoro-five.vercel.app/',
    thumbnail: '/Portafolio/imgs/projects/FerreteriaElMoro/Logo.png',
    techStack: [
      'Vue 3', 'Vite', 'JavaScript', 'HTML', 'CSS',
      'Cloudinary', 'Google Sheets', 'Vercel'
    ],
    gallery: [
      '/Portafolio/imgs/projects/FerreteriaElMoro/1.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/2.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/3.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/4.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/5.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/6.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/7.png',
      '/Portafolio/imgs/projects/FerreteriaElMoro/8.png'
    ],
    features: [
      { title: 'Catálogo Dinámico', description: 'Visualización eficiente de productos con imágenes optimizadas desde Cloudinary.' },
      { title: 'Sin Backend', description: 'Arquitectura frontend-first usando Google Sheets como fuente de datos, sin costos de mantenimiento.' },
      { title: 'Carrito con WhatsApp', description: 'Integración de carrito de compras con envío directo por WhatsApp para pedidos.' }
    ],
    repository: ''
  },
  'estancias': 
  {
    id: 'estancias',
    accent: '#2dd4bf',
    status: 'progress',
    thumbnail: '/Portafolio/imgs/projects/Estancias/Logo.png',
    techStack: [
      "Laravel",
      "PHP",
      "Livewire",
      "Blade",
      "Tailwind CSS",
      "MySQL",
      "Spatie Permission",
    ],
    gallery: [
      '/Portafolio/imgs/projects/Estancias/1.png',
      '/Portafolio/imgs/projects/Estancias/2.png',
      '/Portafolio/imgs/projects/Estancias/3.png',
      '/Portafolio/imgs/projects/Estancias/4.png'
    ],
    features: [
      { title: 'Gestión de Reservas', description: 'Sistema integral para administrar reservas, huéspedes y disponibilidad en tiempo real.' },
      { title: 'RBAC Granular', description: 'Control de permisos por roles con Spatie Permission para operaciones internas.' },
      { title: 'Arquitectura SaaS', description: 'Diseño modular escalable hacia modelo SaaS con dashboards operativos.' }
    ],
    repository: ''
  }
}
