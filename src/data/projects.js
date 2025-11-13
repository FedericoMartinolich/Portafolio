import checKingThumb from '../assets/imgs/ChecKing/Logo.png';
import foodServiceThumb from '../assets/imgs/FoodService/Logo.png';


export default [
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 CHECKING                                              ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "checking",
    title: "ChecKing",
    shortDesc: "Check out some of the projects I've worked on.",
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
      metodology: `
        Se utilizó la metodología ágil para el desarrollo del proyecto, permitiendo iteraciones rápidas y adaptaciones según las necesidades del usuario.
      `,
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
        Durante el desarrollo, se enfrentaron desafíos relacionados con la integración de la base de datos y la optimización del rendimiento del sistema.
      `,
      role: `
        Participé como desarrollador principal, encargado del diseño del sistema, desarrollo del backend y creación de la interfaz de usuario.
      `,
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
        "Pantalla de inicio de sesión para profesores.",
        "Interfaz para registrar asistencias de alumnos.",
        "Vista de reporte de asistencias por curso.",
        "Panel de administración para gestionar usuarios y cursos.",
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
    shortDesc: "Insights and tips on the food service industry.",
    thumbnail: foodServiceThumb,

    detail: {
      longText: `
        Contenido largo exclusivo para la vista...
      `,
      techStack: ["Nuxt", "Firebase"],
      gallery: []
    }
  }
];
