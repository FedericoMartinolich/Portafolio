import checKingThumb from '../assets/imgs/ChecKing/Logo.png';
import foodServiceThumb from '../assets/imgs/FoodService/Logo.png';
import tiroLibreThumb from '../assets/imgs/TiroLibre/Logo.png';

export default [
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 CHECKING                                              ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "checking",
    title: "ChecKing",
    shortDesc: "Sistema de gestión de asistencias para alumnos y profesores.",
    thumbnail: checKingThumb,
    
    detail: {
      longText: `
        Proyecto desarrollado como parte de la materia de programación en la facultad sedes sapientiae. Este sistema tiene como objetivo principal registrar las asistencias de los alumnos de manera eficiente y sencilla.
      `,
      problem: `
        La gestión manual de asistencias puede ser propensa a errores y consume mucho tiempo. Se necesitaba una solución digital para agilizar este proceso.
      `,
      objetive: `
        Desarrollar un sistema web que permita a los profesores registrar y gestionar las asistencias de los alumnos de forma rápida y precisa.
      `,
      /* metodology: `
        Se utilizó la metodología ágil para el desarrollo del proyecto, permitiendo iteraciones rápidas y adaptaciones según las necesidades del usuario.
      `, */
      process: [
        `1. Análisis de requisitos y diseño del sistema.`,
        `2. Desarrollo del backend utilizando PHP y MySQL para la gestión de datos.`,
        `3. Creación de una interfaz de usuario intuitiva con HTML, CSS y JavaScript.`,
        `4. Pruebas y validación del sistema con usuarios reales.`,
      ],
      result: `
        El sistema permitió a los profesores registrar asistencias de manera más eficiente, reduciendo errores y ahorrando tiempo en la gestión administrativa.
      `,
      difficulties: `
        El backend del proyecto debió ser completamente construido con PHP desde cero. Manipular la BD implicó un desafío significativo en términos de diseño para la poca experiencia que tenia en ese momento.
      `,
      role: `
        Lleve a cabo el desarrollo fullstack del proyecto, encargándome tanto del diseño de la base de datos como de la implementación del frontend y backend.      `,
      conclution: `
        El proyecto "checKing" demostró ser una solución efectiva para la gestión de asistencias, mejorando significativamente la experiencia tanto para profesores como para alumnos.
      `,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laragon"],
      gallery: [
        "/src/assets/imgs/ChecKing/1.png",
        "/src/assets/imgs/ChecKing/2.png",
        "/src/assets/imgs/ChecKing/3.png",
        "/src/assets/imgs/ChecKing/4.png",
      ],
      galleryText: [
        "Pantalla de inicio de sesión destinada a profesores. El acceso se realiza mediante DNI y contraseña.",
        "Interfaz para el registro de asistencias de alumnos. La columna 'Limitaciones' indica si el alumno presenta alguna dificultad que pueda afectar su puntualidad o asistencia.",
        "Vista de reporte de asistencias por curso. Se muestra la cantidad total y el porcentaje de asistencias calculado en base a las clases dictadas. El número de clases se incrementa diariamente cuando el profesor accede a la plataforma, confirma que se dictó clase y el sistema suma 1 al contador. En esta vista también se encuentra el botón 'Registro', que permite ver la información completa del alumno, y los botones adicionales para editar o eliminar el registro.",
        "Pantalla para la configuración de parámetros que determinarán la condición final del alumno según sus asistencias. Aquí se definen valores como el porcentaje mínimo necesario para regular o promocionar (en caso de existir promoción).",
      ],
        repository: "https://github.com/FedericoMartinolich/checKing",

    }
  },

  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 FOODSERVICE                                           ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "foodservice",
    title: "FoodService",
    shortDesc: "Sistema interno para gestión de pedidos de viandas, usuarios y carga de menús con OCR.",
    thumbnail: foodServiceThumb,
    detail: {
      longText: `
        FoodService es un sistema desarrollado para una empresa dedicada a la consultoría y 
        al desarrollo de software. Su propósito es facilitar la gestión completa del servicio 
        de viandas, permitiendo a los usuarios registrarse, iniciar sesión, visualizar opciones 
        y realizar pedidos de manera ágil. El sistema incluye una funcionalidad clave: la carga 
        automática de menús mediante OCR, lo que simplifica el trabajo administrativo y reduce 
        errores de carga manual.
      `,
      
      problem: `
        La empresa necesitaba una herramienta interna que resolviera dos necesidades críticas: 
        por un lado, ordenar la gestión de pedidos de viandas; por otro, agilizar la carga 
        diaria de menús para que el personal no tuviera que ingresarlos manualmente. Sin embargo, 
        el entorno de desarrollo presentaba limitaciones: el framework propio de la empresa 
        restringía la instalación de paquetes externos y carecía de documentación, dificultando 
        la implementación de funcionalidades avanzadas como OCR.
      `,
      
      objetive: `
        Desarrollar un sistema funcional y estable que permita:
        - Registrar y autenticar usuarios.
        - Gestionar pedidos de viandas de forma clara y simple.
        - Permitir a los administradores cargar menús de manera automática mediante OCR.
        - Integrar Tesseract OCR sin depender de gestores de paquetes modernos (npm/composer),
          garantizando su correcto funcionamiento dentro del ecosistema limitado del framework.
      `,
      
      metodology: `
        Se utilizó la metodología ágil para el desarrollo del proyecto, permitiendo iteraciones rápidas y adaptaciones según las necesidades del usuario.
        Se trabajó con un enfoque incremental, adaptándose constantemente a las restricciones 
        del framework interno. Se realizaron pruebas continuas sobre la integración manual 
        de Tesseract OCR y se diseñó una arquitectura clara dentro de lo posible, separando 
        vistas, lógica y consultas a base de datos. Para la interfaz se empleó Bootstrap 
        y AJAX para interacción asíncrona.
      `,
      
      process: [
        "1. Análisis del framework propietario y mapeo de su estructura interna.",
        "2. Implementación del sistema de registro e inicio de sesión.",
        "3. Desarrollo del módulo de pedidos de viandas con PHP y MySQL.",
        "4. Integración manual de Tesseract OCR sin gestores de paquetes.",
        "5. Procesamiento y limpieza de texto OCR para generar menús cargables.",
        "6. Construcción del panel administrador para gestionar menús y pedidos.",
        "7. Pruebas y ajustes en diferentes entornos brindados por la empresa."
      ],
      
      result: `
        El sistema permitió automatizar la carga de menús, reducir el tiempo de gestión diaria 
        y mejorar la experiencia tanto de usuarios como de administradores. La integración 
        manual de OCR funcionó de manera estable, demostrando que era posible implementar 
        soluciones avanzadas incluso en entornos restrictivos.
      `,
      
      difficulties: `
        La mayor dificultad fue trabajar dentro del framework propio de la empresa, que no 
        permitía instalar librerías ni poseía documentación ni un punto de partida limpio. 
        Esto hizo que la comprensión del código heredado fuera compleja. Otro desafío importante 
        fue integrar Tesseract OCR de forma manual y asegurar su correcto funcionamiento 
        sin npm ni composer, lo que implicó mucha experimentación, pruebas y ajustes 
        en el entorno.
      `,
      
      role: `
        Desarrollo fullstack dentro del entorno propietario de la empresa. Me encargué de 
        implementar el sistema de autenticación, la gestión de pedidos, la integración manual 
        de Tesseract OCR, el procesamiento de menús y el desarrollo del panel administrador.
      `,
      
      conclution: `
        FoodService fue un proyecto desafiante y formativo: demostró que incluso con fuertes 
        limitaciones técnicas es posible construir soluciones eficientes, robustas y orientadas 
        a mejorar procesos internos. La experiencia fortaleció mi capacidad de adaptación, 
        análisis de código heredado y resolución creativa de problemas.
      `,
      
      techStack: [
        "HTML", "CSS", "JavaScript", "PHP", "MySQL", 
        "Bootstrap", "AJAX", "Tesseract OCR"
      ],
      
      gallery: [
        "/src/assets/imgs/FoodService/1.jpeg",
        "/src/assets/imgs/FoodService/2.jpeg",
        "/src/assets/imgs/FoodService/3.jpeg",
        "/src/assets/imgs/FoodService/4.jpeg",
        "/src/assets/imgs/FoodService/5.jpeg",
        "/src/assets/imgs/FoodService/6.jpeg",
        "/src/assets/imgs/FoodService/7.jpeg",
        "/src/assets/imgs/FoodService/8.jpeg",
        "/src/assets/imgs/FoodService/9.jpeg",
        "/src/assets/imgs/FoodService/10.jpeg",
        "/src/assets/imgs/FoodService/11.jpeg",
        "/src/assets/imgs/FoodService/12.jpeg",
      ],
      
      galleryText: [
        "Pantalla de inicio de sesión para usuarios.",
        "Edición de perfil de usuario.",
        "Perspectiva del administrador para gestionar usuarios.",
        "Lista de roles disponibles con posibilidad de crear y editar sus permisos.",
        "Formulario con las opciones del menú semanal cargado en el sistema.",
        "El administrador puede editar estas opciones manualmente si lo desea o agregar nuevas. Además, se tuvo en consideración a los empleados que no desean pedir viandas, permitiendo marcar esta opción para confirmar que no se han olvidado o fue un error sino una elección de ellos.",
        "Vista del administrador para cargar la imagen del menú semanal. Se utiliza Tesseract OCR para procesar la imagen y extraer el texto automáticamente.",
        "Después de procesar la imagen, el sistema muestra una vista previa del texto extraído. El administrador puede revisar y corregir cualquier error antes de guardar el menú en el sistema.",
        "Interfaz para que los usuarios seleccionen sus viandas diarias según el menú cargado. Cuenta con 3 botones en la parte superior: 'Home Office' para indicar que trabajarán desde casa, 'Faltar' para registrar una ausencia y 'Avisar por WhatsApp' para comunicarse por el grupo.",
        "Registro de pedidos realizados por los usuarios, con detalles como fecha, usuario y opciones seleccionadas. Ademas, el administrador puede marcar que dichos usuarios se encuentran realizando home office o han faltado en caso de que el usuario se le haya olvidado marcar la opcion o no se encuentre disponible.",
        "Resumen semanal de pedidos, mostrando la cantidad total de viandas solicitadas por día. Cuenta con una alerta que notifica si algún usuario no ha realizado su pedido para el día actual. Si desea enviar el pedido a la empresa de catering, puede hacerlo haciendo clic en el botón 'Enviar pedido' si antes logro configurar los parametros con éxito.",
        "En el historial se muestran todos los pedidos realizados por el administrador para tener un seguimiento mensual de las cantidades pedidas. Cuenta con un boton para descargar por PDF.",
        "Se encuentran 2 entradas en el apartado de configuración de parámetros: 'Enlace del Grupo de la Empresa' para enviar notificaciones por el grupo de WhatsApp, y 'Contacto de la Vianda' para enviar el pedido directamente al proveedor.", 
      ],
      
      repository: "" // si no tiene repo, lo dejamos vacío
    }
  },

  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 Tiro Libre                                            ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "tiro-libre",
    title: "Tiro Libre",
    shortDesc: "Plataforma web para la administración de canchas de fútbol, reservas online y gestión operativa automatizada.",
    thumbnail: tiroLibreThumb,

    detail: {
      longText: `
        Tiro Libre es una plataforma web desarrollada con el objetivo de digitalizar y optimizar 
        la gestión de reservas de canchas de fútbol amateur. Está orientada tanto a jugadores 
        como a propietarios de canchas, permitiendo visualizar disponibilidad, realizar reservas, 
        administrar turnos, eliminar confusiones y mejorar la comunicación mediante un sistema 
        automatizado y centralizado.
        
        La plataforma busca reemplazar procesos manuales habituales como cuadernos, mensajes 
        de WhatsApp, llamadas telefónicas o coordinación informal, ofreciendo una solución 
        moderna, confiable, ordenada y accesible desde cualquier dispositivo.
      `,

      problem: `
        El proceso de reserva de canchas se gestiona de manera tradicional, lo que genera 
        problemas recurrentes: sobre reservas, falta de control de horarios, pérdidas de 
        información, demoras en la comunicación, confusión de turnos, falta de disponibilidad 
        visible y mala organización para los propietarios.
        
        Al mismo tiempo, los jugadores no cuentan con una manera práctica de encontrar canchas 
        cercanas, comparar opciones ni reservar de forma rápida, especialmente cuando necesitan 
        completar equipo o están buscando alternativas según precio, tipo, ubicación o horario.
      `,

      objetive: `
        Crear una plataforma completa y fácil de usar que:
        - Permita a los propietarios gestionar sus canchas, turnos, disponibilidad y datos comerciales.
        - Permita a los jugadores buscar canchas por filtros avanzados y reservar de manera inmediata.
        - Evite errores operativos y mejore la experiencia de organización.
        - Centralice y automatice la comunicación entre propietario y jugador.
        - Ofrezca un panorama visual de reservas utilizando calendario interactivo (FullCalendar).
      `,

      metodology: `
        Se utilizó la metodología ágil Kanban para el desarrollo del proyecto.
        Se trabajó bajo un enfoque iterativo, priorizando MVP y funcionalidades centrales. 
        Se utilizó Laravel 10 con roles basados en permisos usando Spatie. La arquitectura 
        se dividió en módulos claros: autenticación, reservas, gestión de canchas, calificaciones 
        y visualización mediante calendario. Las consultas y filtros fueron refinadas para 
        asegurar una experiencia fluida.
      `,

      process: [
        "Diseño de modelo de datos para gestionar campos, turnos, usuarios y roles.",
        "Implementación de registro con selección de roles mediante Breeze + Spatie.",
        "Creación del panel de propietarios con vistas exclusivas y formularios de carga de cancha.",
        "Desarrollo de filtros avanzados por ubicación, tipo, capacidad y precio.",
        "Integración de FullCalendar para visualizar reservas de forma dinámica.",
        "Implementación de notificaciones vía WhatsApp o servicios externos (en proceso).",
        "Diseño visual del login inspirado en Facebook para una mejor percepción del usuario.",
        "Implementación de calificaciones y reseñas para aumentar la confianza entre usuarios."
      ],

      result: `
        Se logró construir una plataforma funcional, escalable y con visión de producto. 
        Los propietarios pueden administrar su negocio de forma clara y digital, mientras 
        que los jugadores acceden a un sistema ordenado, accesible e intuitivo. 
        La plataforma resolvió los principales problemas de comunicación y organización 
        derivados de la gestión manual.
      `,

      difficulties: `
        El proyecto involucró diversos desafíos técnicos y de diseño: 
        - Manejo y sincronización de reservas en tiempo real.
        - Construcción de filtros dinámicos sin afectar el rendimiento.
        - Integración de FullCalendar dentro de Blade.
        - Gestión correcta de roles y permisos por tipo de usuario.
        - Automatización de notificaciones hacia el propietario.
      `,

      role: ` 
        Creación del buscador con filtros avanzados,
        Implementación de roles en el sistema, vistas, consultas SQL, integración con FullCalendar, 
        lógica de filtros, autenticación, diseño del flujo UX y pruebas.
      `,

      conclution: `
        Tiro Libre demuestra cómo una solución digital bien diseñada puede impactar 
        directamente sobre la organización de un negocio tradicional. La plataforma 
        no solo optimiza la gestión interna, sino que mejora la experiencia usuario-propietario, 
        potenciando la visibilidad y profesionalización del ecosistema amateur del fútbol.
      `,

      techStack: [
        "Laravel 10", "PHP", "MySQL", "Spatie Roles & Permissions",
        "Blade", "JavaScript", "FullCalendar", "CSS", "Bootstrap", "AJAX", "Leaflet"
      ],

      gallery: [
        "/src/assets/imgs/TiroLibre/cancha.png",
        "/src/assets/imgs/TiroLibre/cancha-oscuro.png",
        "/src/assets/imgs/TiroLibre/home-canchero.png",
        "/src/assets/imgs/TiroLibre/home-jugador.png",
        "/src/assets/imgs/TiroLibre/mapa.png",
        "/src/assets/imgs/TiroLibre/solicitudes-pendientes.png",
      ],

      galleryText: [
        `Perfil de la cancha desde la perspectiva del jugador. Se puede observar la 
        información detallada, imagenes, botón para ver la ubicación con un mapa, 
        horarios disponibles en forma de boton, la posibilidad de puntuar el servicio
        con estrellas`,
        `Vista detallada de una cancha (modo oscuro).`,
        `Panel de control del propietario con gestión de canchas y reservas.`,
        "Pantalla principal para jugadores con opciones de búsqueda y filtros.",
        "Mapa interactivo para localizar canchas cercanas.",
        "Gestión de solicitudes de reserva pendientes para el propietario.",
      ],

      repository: "https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file"
    }
  }

];
