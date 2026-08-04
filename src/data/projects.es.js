export default {
  checking: {
    title: "ChecKing",
    shortDesc: "Sistema de gestión de asistencia para estudiantes y docentes.",
    meta: {
      type: "Proyecto académico",
      role: "Desarrollador Full Stack",
      duration: "4 meses",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          ChecKing es un sistema de gestión de asistencia desarrollado
          como proyecto de un curso de programación en la Universidad
          Sedes Sapientiae. Permite a los docentes registrar y controlar
          la asistencia de los alumnos de forma digital, reemplazando
          las planillas manuales.
        `,
        media: [
          {
            index: 0,
            caption: "Pantalla de acceso para docentes mediante DNI y contraseña."
          }
        ]
      },
      {
        id: "problema",
        type: "bullets",
        title: "El problema",
        items: [
          "El registro manual de asistencia es propenso a errores y consume mucho tiempo.",
          "No existía un control automático del límite de alumnos por clase.",
          "Faltaban reportes claros para evaluar la asistencia de cada curso."
        ]
      },
      {
        id: "solucion",
        type: "text",
        title: "La solución",
        content: `
          Desarrollé un sistema full stack con autenticación de docentes,
          registro de asistencia en línea y validación automática del límite
          de alumnos por clase.
        `,
        media: [
          {
            index: 1,
            caption: "Registro de asistencia con indicador del límite de alumnos."
          }
        ]
      },
      {
        id: "reportes",
        type: "text",
        title: "Reportes por curso",
        content: `
          El sistema calcula automáticamente los porcentajes de asistencia
          de cada curso y permite gestionar los registros desde un único panel.
        `,
        media: [
          {
            index: 2,
            caption: "Reporte de asistencia por curso con cálculo de porcentajes."
          }
        ]
      },
      {
        id: "reglas",
        type: "text",
        title: "Reglas de asistencia",
        content: `
          El docente configura las reglas de porcentaje de asistencia,
          adaptando el sistema a los criterios de cada curso.
        `,
        media: [
          {
            index: 3,
            caption: "Pantalla de configuración de reglas de porcentaje de asistencia."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "El backend debió desarrollarse completamente desde cero en PHP.",
          "La gestión de la base de datos representó un desafío por la poca experiencia previa."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          El sistema permitió registrar la asistencia de forma más eficiente,
          reduciendo errores y ahorrando tiempo administrativo.
        `
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Fue mi primer proyecto full stack completo: diseñé la base de datos,
          construí el backend desde cero en PHP y conecté el frontend sin frameworks.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Estructuraría el código en capas, centralizaría la configuración
          y agregaría validaciones de datos más robustas.
        `
      },
      {
        id: "enlaces",
        type: "links",
        title: "Enlaces",
        links: [
          { label: "GitHub", url: "https://github.com/FedericoMartinolich/checKing" }
        ]
      }
    ]
  },

  foodservice: {
    title: "FoodService",
    shortDesc: "Sistema interno para gestión de pedidos de comida, usuarios y carga de menús mediante OCR.",
    meta: {
      type: "Proyecto laboral",
      role: "Desarrollador Web Full Stack",
      duration: "4 meses",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          FoodService es un sistema interno desarrollado para una empresa
          de consultoría y desarrollo de software. Su objetivo es gestionar
          los pedidos de comida de los empleados: registrarse, iniciar sesión,
          visualizar los menús y realizar pedidos de forma eficiente.
        `,
        media: [
          {
            index: 0,
            caption: "Acceso de usuarios al sistema."
          }
        ]
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: `
          La empresa recibía semanalmente el menú en formato imagen y la carga
          de los pedidos era completamente manual. El desarrollo, además,
          estaba limitado por un framework propietario sin documentación oficial
          ni gestor de paquetes.
        `
      },
      {
        id: "carga",
        type: "text",
        title: "Automatizar la carga del menú",
        content: `
          Centralicé la carga del menú semanal en un formulario editable,
          eliminando el registro manual y reduciendo errores.
        `,
        media: [
          {
            index: 4,
            caption: "Formulario de menú semanal editable."
          }
        ]
      },
      {
        id: "ocr",
        type: "text",
        title: "OCR",
        content: `
          Integré Tesseract OCR para reconocer automáticamente cada plato
          a partir del menú en imagen. El administrador revisa y corrige
          el texto extraído antes de publicarlo.
        `,
        media: [
          {
            index: 6,
            caption: "Pantalla de carga del menú mediante OCR."
          },
          {
            index: 7,
            caption: "Vista previa y corrección del texto OCR."
          }
        ]
      },
      {
        id: "pedido",
        type: "text",
        title: "Pedido del empleado",
        content: `
          Los empleados visualizan el menú generado y seleccionan sus comidas
          con un par de clics.
        `,
        media: [
          {
            index: 8,
            caption: "Interfaz de selección de comidas."
          }
        ]
      },
      {
        id: "seguimiento",
        type: "bullets",
        title: "Seguimiento y estadísticas",
        items: [
          "Registro de pedidos y control de asistencia diaria.",
          "Resumen semanal con alertas automáticas.",
          "Historial mensual de pedidos con exportación a PDF."
        ],
        media: [
          {
            index: 10,
            caption: "Resumen semanal con alertas."
          },
          {
            index: 11,
            caption: "Historial mensual de pedidos con exportación a PDF."
          }
        ]
      },
      {
        id: "panel",
        type: "text",
        title: "Panel de administración",
        content: `
          Desde el panel, el administrador gestiona usuarios, roles y permisos
          y supervisa todo el flujo de pedidos.
        `,
        media: [
          {
            index: 2,
            caption: "Administración de usuarios."
          },
          {
            index: 3,
            caption: "Configuración de roles y permisos."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Trabajar sin librerías externas ni documentación del framework.",
          "Estabilizar el OCR: requirió extensas pruebas y ajustes."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          El sistema automatizó la carga de los menús, redujo la carga
          administrativa y mejoró la experiencia tanto de usuarios
          como de administradores.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Todas las capturas",
        captions: [
          "Pantalla de inicio de sesión de usuario.",
          "Vista de edición de perfil.",
          "Interfaz de administración de usuarios.",
          "Configuración de roles y permisos.",
          "Formulario de menú semanal.",
          "Opciones de menú editables y preferencias de usuario.",
          "Pantalla de carga de menú mediante OCR.",
          "Vista previa y corrección del texto OCR.",
          "Interfaz de selección de comidas.",
          "Registro de pedidos y control de asistencia.",
          "Resumen semanal con alertas.",
          "Historial mensual de pedidos con exportación a PDF.",
          "Panel de configuración del sistema."
        ]
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Fue mi primer proyecto con OCR: aprendí a integrar Tesseract de forma manual
          y a procesar y limpiar el texto extraído antes de cargarlo en el sistema.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Invertiría más tiempo en documentar el framework propietario
          y en definir el esquema de la base de datos antes de comenzar a programar.
        `
      }
    ]
  },

  "tiro-libre": {
    title: "Tiro Libre",
    shortDesc: "Plataforma web para gestión de canchas de fútbol, reservas online y automatización.",
    meta: {
      type: "Proyecto personal",
      role: "Desarrollador Full Stack",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          Tiro Libre es una plataforma web que digitaliza la gestión de reservas
          de canchas de fútbol. Permite a los jugadores reservar online
          y a los propietarios administrar horarios, disponibilidad
          y comunicación desde un sistema unificado.
        `,
        media: [
          {
            index: 3,
            caption: "Página principal para jugadores con herramientas de búsqueda."
          }
        ]
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: `
          La gestión manual de reservas genera superposiciones de horarios,
          mala comunicación y falta de visibilidad de la disponibilidad.
        `
      },
      {
        id: "datos",
        type: "text",
        title: "Modelo de datos",
        content: `
          Modelé la base de datos para usuarios, canchas y reservas,
          contemplando la disponibilidad en tiempo real.
        `,
        media: [
          {
            src: "/Portafolio/imgs/projects/TiroLibre/diagrama-bd.png",
            caption: "Diagrama de la base de datos."
          }
        ]
      },
      {
        id: "canchero",
        type: "text",
        title: "Panel del propietario",
        content: `
          El propietario gestiona canchas, horarios y reservas desde un panel
          dedicado, aprobando o rechazando las solicitudes pendientes.
        `,
        media: [
          {
            index: 2,
            caption: "Panel del propietario con gestión de reservas."
          },
          {
            index: 5,
            caption: "Gestión de reservas pendientes."
          }
        ]
      },
      {
        id: "busqueda",
        type: "text",
        title: "Búsqueda y mapa",
        content: `
          Los jugadores buscan, filtran y reservan canchas, con un mapa
          interactivo que muestra las canchas cercanas.
        `,
        media: [
          {
            index: 4,
            caption: "Mapa interactivo con canchas cercanas."
          }
        ]
      },
      {
        id: "cancha",
        type: "text",
        title: "Vista de cancha",
        content: `
          Cada cancha tiene una ficha detallada con disponibilidad
          y opciones de reserva, incluido un modo oscuro.
        `,
        media: [
          {
            index: 0,
            caption: "Vista de detalle de cancha para jugadores."
          },
          {
            index: 1,
            caption: "Vista de detalle de cancha en modo oscuro."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Manejo de reservas en tiempo real.",
          "Rendimiento del sistema de búsqueda y filtrado.",
          "Integración con FullCalendar."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          Una plataforma escalable que mejora la organización de los propietarios
          y ofrece una experiencia de reserva fluida para los jugadores.
        `
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Aprendí a modelar reservas con disponibilidad en tiempo real
          y a construir un buscador con filtros combinados sobre la base de datos.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Separaría la lógica de negocio de los controladores en servicios
          y agregaría tests automáticos desde el inicio.
        `
      },
      {
        id: "enlaces",
        type: "links",
        title: "Enlaces",
        links: [
          { label: "GitHub", url: "https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file" }
        ]
      }
    ]
  },

  mecha: {
    title: "Mecha",
    shortDesc: "Maquetado frontend responsive basado en un diseño provisto.",
    meta: {
      type: "Proyecto laboral",
      role: "Desarrollador Frontend",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          Mecha consistió en transformar un diseño gráfico provisto
          en una interfaz web completamente funcional y responsive
          usando HTML, CSS y JavaScript puro.
        `,
        media: [
          {
            index: 2,
            caption: "Vista desktop de la maquetación."
          }
        ]
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: `
          Convertir un diseño estático en una maquetación responsive
          sin soporte backend requería precisión y una estructura limpia.
        `
      },
      {
        id: "detalles",
        type: "text",
        title: "Fidelidad al diseño",
        content: `
          Cuidé los detalles tipográficos y de estilo para lograr
          una réplica fiel del diseño original.
        `,
        media: [
          {
            index: 0,
            caption: "Detalles tipográficos y de estilo."
          }
        ]
      },
      {
        id: "responsive",
        type: "text",
        title: "Diseño responsive",
        content: `
          Adapté el diseño a múltiples tamaños de pantalla,
          manteniendo la coherencia visual en cada breakpoint.
        `,
        media: [
          {
            index: 1,
            caption: "Maquetación responsive en mobile."
          },
          {
            index: 3,
            caption: "Vista mobile."
          }
        ]
      },
      {
        id: "navegacion",
        type: "text",
        title: "Navegación móvil",
        content: `
          En pantallas pequeñas, la navegación se reestructuró
          en un menú desplegable.
        `,
        media: [
          {
            index: 4,
            caption: "Navegación mobile."
          },
          {
            index: 5,
            caption: "Implementación del menú responsive."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Lograr precisión visual sin herramientas automáticas.",
          "Adaptar el diseño a múltiples tamaños de pantalla."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          Una maquetación frontend limpia, responsive y lista para producción.
        `
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Reforcé la precisión visual y el diseño responsive trabajando
          directamente con HTML, CSS y JavaScript, sin frameworks de estilos.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Usaría un sistema de diseño con variables CSS y componentes
          reutilizables desde el primer día para mantener la coherencia visual.
        `
      }
    ]
  },

  kredit: {
    title: "Kredit",
    shortDesc: "Frontend responsive para plataforma financiera con consumo de APIs protegidas por JWT.",
    meta: {
      type: "Proyecto laboral",
      role: "Desarrollador Frontend",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          Kredit es una plataforma web financiera enfocada en la gestión
          de préstamos. Mi rol fue el desarrollo frontend y la integración
          con APIs protegidas mediante autenticación JWT.
        `,
        media: [
          {
            index: 0,
            caption: "Interfaz principal de la plataforma."
          }
        ]
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: `
          La plataforma requería una interfaz moderna y responsive
          capaz de consumir endpoints protegidos de forma segura,
          con poca documentación del backend.
        `
      },
      {
        id: "solicitud",
        type: "text",
        title: "Solicitud de préstamo",
        content: `
          Diseñé el flujo de solicitud de préstamos conectado a la API,
          gestionando la autenticación por token y los estados de respuesta.
        `,
        media: [
          {
            index: 1,
            caption: "Formulario de solicitud de préstamo."
          }
        ]
      },
      {
        id: "contacto",
        type: "text",
        title: "Contacto",
        content: `
          La sección de contacto quedó integrada con los servicios
          de la plataforma.
        `,
        media: [
          {
            index: 2,
            caption: "Sección de contacto."
          }
        ]
      },
      {
        id: "responsive",
        type: "text",
        title: "Diseño responsive",
        content: `
          Adapté toda la interfaz a múltiples dispositivos para una experiencia
          consistente en desktop y mobile.
        `,
        media: [
          {
            index: 3,
            caption: "Vista responsive en mobile."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Escasa documentación del backend: interpreté el comportamiento de la API mediante pruebas y colaboración."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          Un frontend responsive con comunicación estable con la API.
        `
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Aprendí a consumir APIs autenticadas con JWT e integrarme
          con un backend sin documentación completa, validando los flujos
          con pruebas reales.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Manejaría con más detalle los estados de error y la expiración
          de sesión, y propondría documentar mínimamente los endpoints.
        `
      }
    ]
  },

  "ferreteria-el-moro": {
    title: "Ferretería El Moro",
    shortDesc: "Catálogo online dinámico sin backend, optimizado para rendimiento.",
    meta: {
      type: "Proyecto freelance",
      role: "Desarrollador Full Stack",
      state: "Finalizado"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: `
          Catálogo web para una ferretería local, diseñado para mostrar
          productos de forma eficiente sin infraestructura backend
          ni costos de mantenimiento.
        `,
        media: [
          {
            index: 0,
            caption: "Vista general del catálogo de productos."
          }
        ]
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: `
          El negocio necesitaba un catálogo online, pero un backend completo
          no se justificaba por el volumen de productos y los costos asociados.
        `
      },
      {
        id: "solucion",
        type: "text",
        title: "La solución",
        content: `
          Arquitectura frontend-first: Google Sheets como fuente de datos
          y Cloudinary para las imágenes. El catálogo se actualiza sin tocar código.
        `,
        media: [
          {
            index: 1,
            caption: "Vista de detalle de producto."
          }
        ]
      },
      {
        id: "compra",
        type: "text",
        title: "Compra y WhatsApp",
        content: `
          El cliente explora el catálogo, arma su carrito y finaliza el pedido
          por WhatsApp directamente desde el modal.
        `,
        media: [
          {
            index: 5,
            caption: "Vista del carrito de compras."
          },
          {
            index: 6,
            caption: "Modal del carrito con integración a WhatsApp."
          }
        ]
      },
      {
        id: "empresa",
        type: "text",
        title: "Contacto y la empresa",
        content: `
          Secciones de contacto con mapa interactivo y presentación del negocio
          para generar confianza.
        `,
        media: [
          {
            index: 3,
            caption: "Sección de contacto con mapa interactivo."
          },
          {
            index: 4,
            caption: "Sección sobre nosotros."
          }
        ]
      },
      {
        id: "nuevos",
        type: "text",
        title: "Nuevos productos",
        content: `
          El catálogo incluye una sección de nuevos productos y un manejo
          cuidado de los placeholders cuando falta una imagen.
        `,
        media: [
          {
            index: 7,
            caption: "Sección de nuevos productos."
          }
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Manejo correcto de rutas y assets en producción.",
          "Optimización de la carga de imágenes externas."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: `
          Un catálogo online rápido y profesional que el cliente puede
          administrar sin conocimientos técnicos.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Todas las capturas",
        captions: [
          "Vista general del catálogo de productos.",
          "Vista de detalle de producto.",
          "Manejo de placeholders para imágenes faltantes.",
          "Sección de contacto con mapa interactivo.",
          "Sección sobre nosotros.",
          "Vista del carrito de compras.",
          "Modal del carrito con integración a WhatsApp.",
          "Sección de nuevos productos."
        ]
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: `
          Aprendí arquitectura frontend-first: orquestar Google Sheets
          como fuente de datos y Cloudinary para imágenes sin ningún backend.
        `
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: `
          Agregaría caché local y versionado del contenido, además de una vista
          de mantenimiento para cuando cambie la fuente de datos.
        `
      },
      {
        id: "enlaces",
        type: "links",
        title: "Enlaces",
        links: [
          { label: "Sitio web", url: "https://ferreteriaelmoro-five.vercel.app/" }
        ]
      }
    ]
  },

  "estancias": {
    title: "Estancias - Sistema Integral de Gestión Turística (En Desarrollo)",
    shortDesc: "Plataforma de gestión para establecimientos turísticos y hoteleros que centraliza reservas, huéspedes, pagos, servicios, disponibilidad, stock y operaciones internas mediante una arquitectura modular escalable.",
    meta: {
      type: "Proyecto personal",
      role: "Desarrollador Full Stack",
      state: "En desarrollo"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "Resumen",
        content: "Estancias es un sistema de gestión integral orientado a establecimientos turísticos, hoteles boutique, estancias rurales y complejos de hospedaje. El proyecto fue diseñado para resolver problemáticas operativas reales relacionadas con reservas complejas, múltiples huéspedes, pagos parciales, servicios adicionales, disponibilidad dinámica, control financiero, stock y gestión de usuarios. La arquitectura fue concebida con una visión de crecimiento hacia un modelo SaaS multiestablecimiento."
      },
      {
        id: "problema",
        type: "text",
        title: "El problema",
        content: "Muchos establecimientos turísticos administran reservas, huéspedes, pagos y servicios mediante procesos manuales o sistemas fragmentados que generan errores, pérdida de trazabilidad y dificultades operativas. Además, la mayoría de los sistemas simples no contemplan escenarios reales como reservas grupales, múltiples huéspedes, servicios asociados o pagos parciales."
      },
      {
        id: "objetivo",
        type: "text",
        title: "Objetivo",
        content: "Desarrollar una plataforma centralizada capaz de gestionar la operación completa de un establecimiento turístico, modelando correctamente la complejidad del negocio y permitiendo escalar hacia futuras funcionalidades empresariales y modelos SaaS."
      },
      {
        id: "arquitectura",
        type: "text",
        title: "Arquitectura",
        content: "Se aplicó un enfoque de diseño orientado al dominio, identificando entidades clave, relaciones complejas y reglas operativas reales. Se priorizó la modularidad, la separación de responsabilidades y la utilización de lógica derivada para minimizar redundancia y facilitar la mantenibilidad del sistema."
      },
      {
        id: "implementacion",
        type: "bullets",
        title: "Implementación",
        items: [
          "Análisis de procesos operativos de hospedaje y turismo.",
          "Modelado relacional de reservas, huéspedes, habitaciones, servicios y pagos.",
          "Diseño de una arquitectura modular basada en dominios independientes.",
          "Implementación de autenticación, autorización y permisos granulares mediante RBAC.",
          "Desarrollo de interfaces administrativas utilizando Livewire, Blade y Tailwind.",
          "Implementación de gestión de disponibilidad desacoplada para optimizar consultas y escalabilidad.",
          "Construcción de dashboards operativos y herramientas de administración.",
          "Preparación de la arquitectura para futuras capacidades multi-tenant."
        ]
      },
      {
        id: "desafios",
        type: "bullets",
        title: "Desafíos",
        items: [
          "Modelar escenarios reales donde quien realiza el pago no coincide con quien se hospeda.",
          "Asociar múltiples huéspedes, habitaciones, servicios y pagos a una misma reserva sin generar acoplamientos.",
          "Gestionar la disponibilidad temporal mediante estructuras desacopladas para escalar."
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Resultado",
        content: "En desarrollo..."
      },
      {
        id: "aprendizajes",
        type: "text",
        title: "Lo que aprendí",
        content: "Fue el proyecto donde más profundicé en diseño de dominio y modelado relacional: reservas complejas, pagos parciales y disponibilidad desacoplada."
      },
      {
        id: "distinto",
        type: "text",
        title: "¿Qué haría distinto hoy?",
        content: "Entregaría verticales funcionales más pequeñas desde el inicio para validar el producto con usuarios reales tempranamente."
      }
    ]
  }
}
