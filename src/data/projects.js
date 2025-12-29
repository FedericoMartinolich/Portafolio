import checKingThumb from '../assets/imgs/ChecKing/Logo.png';
import foodServiceThumb from '../assets/imgs/FoodService/Logo.png';
import tiroLibreThumb from '../assets/imgs/TiroLibre/Logo.png';
import kreditThumb from '../assets/imgs/Kredit/Logo.png';
import mechaThumb from '../assets/imgs/Mecha/Logo.png'

import checking1 from '../assets/imgs/ChecKing/1.png';
import checking2 from '../assets/imgs/ChecKing/2.png';
import checking3 from '../assets/imgs/ChecKing/3.png';
import checking4 from '../assets/imgs/ChecKing/4.png';

import FoodService1 from '../assets/imgs/FoodService/1.jpeg';
import FoodService2 from '../assets/imgs/FoodService/2.jpeg';
import FoodService3 from '../assets/imgs/FoodService/3.jpeg';  
import FoodService4 from '../assets/imgs/FoodService/4.jpeg';
import FoodService5 from '../assets/imgs/FoodService/5.jpeg';
import FoodService6 from '../assets/imgs/FoodService/6.jpeg';
import FoodService7 from '../assets/imgs/FoodService/7.jpeg';
import FoodService8 from '../assets/imgs/FoodService/8.jpeg';
import FoodService9 from '../assets/imgs/FoodService/9.jpeg';
import FoodService10 from '../assets/imgs/FoodService/10.jpeg';
import FoodService11 from '../assets/imgs/FoodService/11.jpeg';
import FoodService12 from '../assets/imgs/FoodService/12.jpeg';

import TiroLibre1 from '../assets/imgs/TiroLibre/cancha.png';
import TiroLibre2 from '../assets/imgs/TiroLibre/cancha-oscuro.png';
import TiroLibre3 from '../assets/imgs/TiroLibre/home-canchero.png';
import TiroLibre4 from '../assets/imgs/TiroLibre/home-jugador.png';
import TiroLibre5 from '../assets/imgs/TiroLibre/mapa.png';
import TiroLibre6 from '../assets/imgs/TiroLibre/solicitudes-pendientes.png';

import kredit1 from '../assets/imgs/Kredit/1.jpeg';
import kredit2 from '../assets/imgs/Kredit/2.jpeg';
import kredit3 from '../assets/imgs/Kredit/3.jpeg';
import kredit4 from '../assets/imgs/Kredit/4.jpeg';

import mecha1 from '../assets/imgs/Mecha/1.jpeg';
import mecha2 from '../assets/imgs/Mecha/2.jpeg';
import mecha3 from '../assets/imgs/Mecha/3.jpeg';
import mecha4 from '../assets/imgs/Mecha/4.jpeg';
import mecha5 from '../assets/imgs/Mecha/5.jpeg';
import mecha6 from '../assets/imgs/Mecha/6.jpeg';

import ClashRoyaleAppThumb from '../assets/imgs/Clash/Logo.jpg';
import Clash1 from '../assets/imgs/Clash/contact.png';
import Clash3 from '../assets/imgs/Clash/loading.png';

import moroThumb from '../assets/imgs/FerreteriaElMoro/Logo.png';
import elmoro1 from '../assets/imgs/FerreteriaElMoro/1.png';
import elmoro2 from '../assets/imgs/FerreteriaElMoro/2.png';
import elmoro3 from '../assets/imgs/FerreteriaElMoro/3.png';
import elmoro4 from '../assets/imgs/FerreteriaElMoro/4.png';  
import elmoro5 from '../assets/imgs/FerreteriaElMoro/5.png';
import elmoro6 from '../assets/imgs/FerreteriaElMoro/6.png';
import elmoro7 from '../assets/imgs/FerreteriaElMoro/7.png';
import elmoro8 from '../assets/imgs/FerreteriaElMoro/8.png';

export default [
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 CHECKING                                              ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "checking",
    title: "ChecKing",
    shortDesc: "Attendance management system for students and teachers.",
    thumbnail: checKingThumb,
    
    detail: {
      longText: `
        Project developed as part of a programming course at Sedes Sapientiae University. 
        This system aims to efficiently and easily record student attendance.
      `,
      problem: `
        Manual attendance tracking is prone to errors and time-consuming. 
        A digital solution was needed to streamline this process.
      `,
      objetive: `
        Develop a web system that allows teachers to quickly and accurately record and manage student attendance.
      `,
      /* metodology: `
        Agile methodology was used for project development, enabling fast iterations and adjustments based on user needs.
      `, */
      process: [
        `1. Requirements analysis and system design.`,
        `2. Backend development using PHP and MySQL for data management.`,
        `3. Creation of an intuitive user interface with HTML, CSS, and JavaScript.`,
        `4. System testing and validation with real users.`,
      ],
      result: `
        The system enabled teachers to register attendance more efficiently, reducing errors and saving administrative time.
      `,
      difficulties: `
        The backend had to be fully built from scratch in PHP. 
        Database handling posed a significant challenge due to my limited experience at that time.
      `,
      role: `
        I carried out full-stack development including database design, frontend implementation, and backend programming.      
      `,
      conclution: `
        The "ChecKing" project proved to be an effective solution for attendance management, significantly improving the experience for both teachers and students.
      `,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laragon"],
      gallery: [
        checking1,
        checking2,
        checking3,
        checking4,
      ],
      galleryText: [
        "Login screen for teachers. Access is performed using ID number and password.",
        "Interface for recording student attendance. The 'Limitations' column indicates if the student has any condition affecting punctuality or attendance.",
        "Attendance report view by class. It displays total attendance and percentage based on conducted lessons. The number of lessons increases daily when the teacher confirms having taught the class. The view also includes a 'Record' button to display full student details, and extra buttons for editing or deleting records.",
        "Configuration screen where parameters are set to determine the student's final status based on attendance percentage requirements.",
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
    shortDesc: "Internal system for meal order management, users, and menu uploading with OCR.",
    thumbnail: foodServiceThumb,
    detail: {
      longText: `
        FoodService is a system developed for a software consulting and development company.
        Its purpose is to ease the full management of employee meal requests, allowing users 
        to register, log in, view food options and place orders efficiently. A key feature
        is the automatic menu upload through OCR, simplifying administrative work and reducing
        manual entry errors.
      `,
      
      problem: `
        The company needed an internal tool that addressed two critical needs: organizing 
        meal order management and speeding up daily menu uploading without manual entry. 
        However, the development environment had limitations — the company-owned framework 
        restricted external package installation and lacked documentation, making advanced 
        features such as OCR difficult to implement.
      `,
      
      objetive: `
        Develop a functional and stable system that enables:
        - User registration and authentication.
        - Clear and simple meal order management.
        - Administrators to automatically upload menus using OCR.
        - Integration of Tesseract OCR without modern package managers (npm/composer),
          ensuring proper functionality inside a limited proprietary framework.
      `,
      
      metodology: `
        Agile methodology was used, allowing quick iterations and adjustments based on needs.
        Development followed an incremental approach, constantly adapting to framework limitations.
        Continuous testing was performed to integrate Tesseract OCR manually and maintain a clear
        architecture separating views, logic, and database operations. Bootstrap and AJAX were used 
        for UI and asynchronous interaction.
      `,
      
      process: [
        "1. Analysis of the proprietary framework and structure mapping.",
        "2. Development of registration and login system.",
        "3. Meal order management module built with PHP and MySQL.",
        "4. Manual integration of Tesseract OCR without package managers.",
        "5. OCR text processing and cleanup to generate usable menus.",
        "6. Admin panel development for managing menus and orders.",
        "7. Testing and adjustments across different company environments."
      ],
      
      result: `
        The system automated menu uploading, reduced daily management effort 
        and improved the experience for both users and administrators.
        Manual OCR integration worked stably, proving that advanced features
        can be implemented even in restrictive environments.
      `,
      
      difficulties: `
        The biggest challenge was working within a proprietary framework without
        documentation or support for external libraries. Understanding legacy
        code was complex. Another major difficulty was manually integrating OCR
        and ensuring it worked correctly without modern tooling.
      `,
      
      role: `
        Full-stack development inside the proprietary framework. I implemented the 
        authentication system, meal order module, manual OCR integration, text processing,
        and admin panel.
      `,
      
      conclution: `
        FoodService was a challenging and formative project, proving that effective, robust, 
        and improvement-focused solutions can be built even under strong technical limitations.
        The experience strengthened my skills in adaptation, legacy code analysis,
        and creative problem solving.
      `,
      
      techStack: [
        "HTML", "CSS", "JavaScript", "PHP", "MySQL", 
        "Bootstrap", "AJAX", "Tesseract OCR"
      ],
      
      gallery: [
        FoodService1,
        FoodService2,
        FoodService3,
        FoodService4,
        FoodService5,
        FoodService6,
        FoodService7,
        FoodService8,
        FoodService9,
        FoodService10,
        FoodService11,
        FoodService12,
      ],
      
      galleryText: [
        "User login screen.",
        "User profile edit screen.",
        "Admin view for user management.",
        "Roles listing and permission configuration.",
        "Weekly menu form loaded into the system.",
        "Administrators can edit menu options or add new ones. Users may also confirm that they prefer not to order a meal.",
        "Admin view to upload the weekly menu image. Tesseract OCR processes it to extract text automatically.",
        "After processing, the system shows a preview of extracted text for review and correction.",
        "User interface to select daily meal options. Includes buttons for 'Home Office', 'Absence' and WhatsApp notice.",
        "Order registry with details like date, user and selected options. Admin may mark absences or home office manually.",
        "Weekly summary showing ordered meal totals. Includes alerts for users who forgot to order.",
        "History of monthly orders with PDF export option.",
        "Parameter configuration for WhatsApp group link and catering provider contact.",
      ],
      
      repository: ""
    }
  },

  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 Tiro Libre                                            ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "tiro-libre",
    title: "Tiro Libre",
    shortDesc: "Web platform for football field management, online reservations and automated operations.",
    thumbnail: tiroLibreThumb,

    detail: {
      longText: `
        Tiro Libre is a web platform created to digitalize and optimize reservation management 
        for amateur football fields. It is designed for both players and field owners, allowing 
        them to view availability, book online, manage schedules and improve communication 
        through a unified automated platform.
        
        The platform replaces traditional manual methods such as notebooks, WhatsApp messages,
        phone calls or informal coordination, providing a modern, reliable, and organized 
        solution, accessible from any device.
      `,

      problem: `
        Field reservations are traditionally handled manually, generating recurring problems: 
        double bookings, poor time control, information loss, communication delays, confusion, 
        lack of real-time availability and poor business organization.

        Players also struggle to find nearby fields, compare options or book quickly, 
        especially when looking for price, surface type, capacity, or team completion needs.
      `,

      objetive: `
        Create a complete and easy-to-use platform that:
        - Allows owners to manage their fields, schedules, availability, and business data.
        - Allows players to search using advanced filters and book instantly.
        - Avoids operational errors and improves overall experience.
        - Centralizes and automates communication between owners and players.
        - Provides reservation visualization using an interactive calendar (FullCalendar).
      `,

      metodology: `
        Agile Kanban methodology was used.
        The development followed an iterative, MVP-focused approach. 
        Built using Laravel 10 with Spatie roles and permissions. Architecture was modular, separating 
        authentication, reservations, field management, reviews, and UI calendar visualization.
      `,

      process: [
        "Database modeling for fields, bookings, users and roles.",
        "Registration with role selection (Breeze + Spatie).",
        "Owner dashboard with exclusive views and field creation forms.",
        "Advanced search and filtering by location, price, type and capacity.",
        "FullCalendar integration for dynamic reservation visualization.",
        "Notification system via WhatsApp or external services (in progress).",
        "Login UI designed with Facebook-style aesthetic.",
        "Ratings and reviews system for trust and transparency."
      ],

      result: `
        A functional and scalable platform was built, offering business owners a clear digital 
        management tool and giving players an intuitive, organized and accessible experience. 
        The platform effectively solved manual management and communication issues.
      `,

      difficulties: `
        Main technical and design challenges included:
        - Real-time reservation synchronization and conflict handling.
        - Dynamic filtering while maintaining performance.
        - FullCalendar integration within Blade.
        - Correct role/permission assignment and route protection.
        - Automated notifications towards field owners.
      `,

      role: ` 
        Developed advanced search and filters,
        Implemented roles, views and SQL queries, FullCalendar integration, 
        filtering logic, authentication, UX flow design and testing.
      `,

      conclution: `
        Tiro Libre demonstrates how a well-designed digital solution can directly improve 
        the management of a traditional business. The platform enhances visibility, 
        organization and professionalism in the amateur football ecosystem.
      `,

      techStack: [
        "Laravel 10", "PHP", "MySQL", "Spatie Roles & Permissions",
        "Blade", "JavaScript", "FullCalendar", "CSS", "Bootstrap", "AJAX", "Leaflet"
      ],

      gallery: [
        TiroLibre1,
        TiroLibre2,
        TiroLibre3,
        TiroLibre4,
        TiroLibre5,
        TiroLibre6,
      ],

      galleryText: [
        `Field preview from player perspective, with detailed information, images, 
        location map button, available schedule selector and star rating option.`,
        `Detailed field view (dark mode).`,
        `Owner dashboard with field and booking management.`,
        "Player homepage with search and filtering tools.",
        "Interactive map to locate nearby fields.",
        "Pending reservation requests management panel for owners.",
      ],
      
      repository: "https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file"
    }
  },
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀  Mecha                                                ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "mecha",
    title: "Mecha",
    shortDesc: "Responsive frontend layout and development based on delivered design.",
    thumbnail: mechaThumb,

    detail: {
      longText: `
        Mecha was a project focused on frontend development based on a design provided by a graphic designer.
        The goal was to transform the design into a fully functional web interface, faithful to the visual requirements and responsive across different devices. We worked using HTML, CSS, and vanilla JavaScript, respecting the dimensions, colors, fonts, and structure established in the original prototype.
      `,
      problem: `
        The main challenge was to accurately translate the provided design, respecting proportions, alignments, and hierarchies,
        without a functional backend or base repository to start from, which meant building the structure
        from scratch with clean and maintainable code.
      `,
      objetive: `
        Build a static website mockup, faithful to the delivered design, complete, navigable, and responsive with good visual performance
        and correct semantics in the code.
      `,
      metodology: `
        - Structuring the layout with semantic HTML5.
        - Modularization and reuse of styles with CSS.
        - Responsive adaptation using relative units and media queries.
        - Constant visual validation by comparing it to the original design.
      `,
      process: [
        "Receiving the final design with measurements and visual references.",
        "Creating the initial HTML structure and basic configuration.",
        "Step-by-step layout prioritizing visual accuracy.",
        "Implementing responsive behavior on mobile, tablet, and desktop.",
      ],
      result: `
        A functional, navigable, and responsive mockup was delivered that respected the original design, with clean code
        and was ready for future backend integration.
      `,
      difficulties: `
        The main challenge was ensuring visual accuracy and scalability without automated external tools,
        achieving a result faithful to the original design using only HTML, CSS, and vanilla JavaScript.
      `,
      role: `
        Frontend Developer — responsible for the complete assembly of the interface, faithful layout and responsive design.
      `,
      conclution: `
        The project strengthened skills in professional layout, responsive design, and attention to detail in interfaces,
        providing a solid foundation ready for future backend functionalities.
      `,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      gallery: [
        mecha1,
        mecha2,
        mecha3,
        mecha4,
        mecha5,
        mecha6,
      ],
      galleryText: [
        "Style and typography details.",
        "Responsive mobile version.",
        "Desktop version.",
        "Responsive mobile version.",
        "Responsive mobile version.",
        "Responsive menu."
      ],
      repository: "",
    }
  },
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 Kredit                                                ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "kredit",
    title: "Kredit",
    shortDesc: "Responsive web interface development for a financial platform using API consumption with JWT.",
    thumbnail: kreditThumb,
    
    detail: {
      longText: `
        Kredit is a web platform focused on managing loans and financial services.
        My contribution to the project centered on frontend development, ensuring a
        responsive, clear, and user-friendly interface capable of consuming data from
        an API secured through JWT-based authentication.
      `,
      problem: `
        The platform required a modern web interface, adaptable to multiple devices,
        and capable of correctly interacting with the backend through authenticated
        requests using JWT tokens.
      `,
      objetive: `
        Build a functional, efficient, and responsive web interface that allows users
        to access, visualize, and manipulate the data provided by the API, ensuring
        proper integration with the authentication system.
      `,
      metodology: `
        An incremental methodology was applied, starting with visual design and general
        structure, then integrating components, and finally consuming the API through
        requests secured with JWT. Manual testing was conducted across different screen
        sizes and browsers.
      `,
      process: [
        "Definition and initial UI layout based on the provided requirements.",
        "Responsive adaptation using CSS techniques and UI best practices.",
        "Implementation of API consumption logic using JWT authentication.",
        "Functionality and integration tests with the backend."
      ],
      result: `
        The outcome was a functional and adaptable frontend with proper communication
        with the API through JWT, delivering a suitable user experience on both desktop
        and mobile devices.
      `,
      difficulties: `
        Business information and certain internal functionalities were not fully documented,
        making it necessary to interpret flows through API testing and communication with
        the backend team.
      `,
      role: `
        Frontend Developer — responsible for visual development, responsiveness,
        API interaction, and browser testing.
      `,
      conclution: `
        The project strengthened my knowledge in consuming APIs with JWT authentication
        and applying responsive frontend development best practices in a real environment.
      `,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "JWT"],
      gallery: [
        kredit1,
        kredit2,
        kredit3,
        kredit4,
      ],
      galleryText: [
        "Main interface of the platform where loan options and their information obtained via API are displayed.",
        "Form to request a loan",
        "Contact",
        "Responsive mobile version",
      ],
      repository: "",
    }
  },
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀  Ferretería El Moro – Catálogo Web Dinámico           ║
     ╚══════════════════════════════════════════════════════════╝ */
  {
    id: "ferreteria-el-moro",
    title: "Ferretería El Moro",
    shortDesc: "Online product catalog for a hardware store, built without a backend, optimized for performance and easy content management.",
    thumbnail: moroThumb,

    detail: {
      longText: `
      Web catalog project developed for a local hardware store, aimed at
      showcasing its product stock in a clear, fast, and professional way,
      without requiring a traditional backend system or infrastructure costs.

      The solution relies on free external services for data and image management,
      allowing the client to retain full control over their content.
      `,

      problem: `
      The hardware store had an internal stock management system but lacked a
      simple and cost-effective way to display its products online. The large
      volume of products did not justify the development or maintenance of a
      dedicated backend.
      `,

      objetive: `
      To create an accessible, fast, and scalable online catalog that displays
      products, prices, and descriptions, with the ability to add images without
      impacting performance or generating additional costs.
      `,

      metodology: `
      A frontend-first architecture was designed, fully decoupled from any backend,
      using external data sources and CDN services to optimize load times and user
      experience.
      `,

      process: [
        "Data consumption from Google Sheets published as CSV to simulate an API.",
        "Normalization and mapping of products on the frontend.",
        "Cloudinary integration for efficient image management using Public IDs.",
        "Implementation of placeholder images for products without photos.",
        "Project deployment on Vercel with optimized configuration for Vite."
      ],

      result: `
      A fully functional, fast, and professional web catalog was delivered,
      accessible from any device, with optimized images and product data that can
      be easily updated by the client without constant technical intervention.
      `,

      difficulties: `
      The main challenges were related to asset and route management in production,
      as well as proper Vite build configuration and handling external images
      without a backend.
      `,

      role: `
      Full project development: frontend architecture, integration of external
      services, performance optimization, deployment, and client documentation.
      `,

      conclution: `
      This project demonstrates that it is possible to build professional and
      scalable web solutions on a zero-budget by properly leveraging modern tools
      and a decoupled architecture. The separation between data, images, and
      frontend allows the model to be reused for multiple clients.
      `,

      techStack: [
        "Vue 3",
        "Vite",
        "JavaScript",
        "HTML",
        "CSS",
        "Cloudinary",
        "Google Sheets",
        "Vercel"
      ],

      gallery: [
        elmoro1,
        elmoro2,
        elmoro3,
        elmoro4,
        elmoro5,
        elmoro6,
        elmoro7,
        elmoro8
      ],

      galleryText: [
        "General view of the product catalog with a responsive grid and optimized navigation.",
        "Product detail view with dynamic data and image loading from external services.",
        "Placeholder image handling for products without available photos.",
        "Contact section featuring an interactive map implemented with Leaflet.",
        "‘About Us’ section with institutional information about the hardware store.",
        "Shopping cart view with selected product management.",
        "Cart modal to finalize the order and contact directly via WhatsApp.",
        "New products section highlighting recently added or promoted items."
      ],

      repository: ""
    }
  },


/*   ╔══════════════════════════════════════════════════════════╗
     ║ 🚀 Clash Royale App – Dashboard de Clan                 ║
     ╚══════════════════════════════════════════════════════════╝ */
/*   {
    id: "clash-royale-app",
    title: "Clash Royale - Dashboard",
    shortDesc: "Plataforma creada para consultar en tiempo real la información de un clan de Clash Royale usando la API oficial y un backend propio.",
    thumbnail: ClashRoyaleAppThumb,
    
    detail: {
      longText: `
        Clash Royale App es una plataforma completamente personalizada 
        que permite visualizar la información más importante de un clan 
        en específico utilizando la API oficial 
        de Supercell. La aplicación reúne datos sobre el clan, ranking, 
        donaciones, guerras de clanes, River Races y estadísticas 
        destacadas, todo presentado con una estética inspirada en el 
        universo visual del juego.
      `,

      problem: `
        Supercell no ofrece una interfaz web oficial para administrar 
        o visualizar métricas avanzadas del clan. Los líderes o jugadores 
        deben revisar la información manualmente desde la app del juego, 
        lo cual limita el acceso, no permite comparar datos fácilmente 
        ni funciona bien como "dashboard".
      `,

      objetive: `
        Crear un panel centralizado, moderno y accesible desde cualquier 
        dispositivo para visualizar toda la información del clan en tiempo 
        real, con métricas útiles, rankings automáticos y un diseño 
        inspirado directamente en Clash Royale.
      `,

      metodology: `
        Se desarrolló un backend en Node.js alojado en Render para 
        conectarse de forma segura a la API oficial de Supercell utilizando 
        JWT con validación por IP. El frontend se construyó con Vue 3 y Vite, 
        consumiendo los endpoints del backend y transformando los datos 
        crudos en componentes visuales y rankings dinámicos.
      `,

      process: [
        `Diseño y creación del backend Node.js con Express y node-fetch.`,
        `Configuración del JWT y whitelist de IP para la API de Clash Royale.`,
        `Implementación de CORS para permitir entorno local y producción.`,
        `Construcción del frontend con Vue 3, componentes y estilos personalizados.`,
        `Cálculo automático de métricas como POTW (Jugador de la semana), POTS (Jugador de la temporada) y Top 5 del River Race.`,
        `Despliegue del backend en Render y del frontend en Render Static Hosting.`
      ],

      result: `
        La plataforma permite consultar todo un dashboard de clan en segundos:
        miembros con filtros, roles, donaciones, guerra actual, River Race, 
        historial de temporadas, Hall of Fame, ranking semanal y ranking 
        total de fama. La interfaz utiliza un estilo visual inspirado en 
        Clash Royale con banners de madera, tarjetas personalizadas, 
        bordes legendarios y tipografía Supercell.
      `,

      difficulties: `
        El mayor desafío fue el uso del sistema de autenticación con JWT de 
        Supercell, que exige registrar una IP fija. Render usa IP dinámica 
        en su plan gratuito, por lo que hubo que actualizar manualmente la IP 
        al regenerar el token. También fue complejo resolver los problemas 
        de CORS entre Render y Vite en entorno local.
      `,

      role: `
        Desarrollo full stack: creación de la API en Node.js, manejo de JWT, 
        integración con API oficial de Supercell, diseño de componentes Vue, 
        estilos basados en Clash Royale, deploy en Render y optimización de 
        consumo de datos.
      `,

      conclution: `
        El proyecto permitió crear un dashboard profesional, claro y útil 
        para cualquier clan de Clash Royale, resolviendo un problema real: 
        la falta de una plataforma web oficial para monitorear la actividad 
        del clan. Fue un aprendizaje completo en APIs externas, Node.js, 
        Render y Vue 3.
      `,

      techStack: ["HTML", "CSS", "JavaScript", "Vue 3", "Vite", "Node.js", "Express", "Render"],

      gallery: [
        Clash1,
        Clash3,
      ],

      galleryText: [
        "Vista general del dashboard del clan.",
        "Componente ClanBanner con estética Clash Royale.",
        "Ranking automático de River Race y Hall of Fame.",
        "Estadísticas y tabla de miembros con roles y donaciones."
      ],

      repository: "https://github.com/FedericoMartinolich/clash-royale-app"
    }
  }, */

  
  
  /* ╔══════════════════════════════════════════════════════════╗
     ║ 🚀                                                       ║
     ╚══════════════════════════════════════════════════════════╝ */
  /* {
    id: "",
    title: "",
    shortDesc: "",
    thumbnail: Thumb,
    
    detail: {
      longText: `

      `,
      problem: `
        
      `,
      objetive: `
        
      `,
      metodology: `
        
      `,
      process: [
        ``,
        ``,
        ``,
        ``,
      ],
      result: `
        
      `,
      difficulties: `
        
      `,
      role: `
        
      `,
      conclution: `
        
      `,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laragon"],
      gallery: [
        "/src/assets/imgs/folder/1.png",
        "/src/assets/imgs/folder/2.png",
        "/src/assets/imgs/folder/3.png",
        "/src/assets/imgs/folder/4.png",
      ],
      galleryText: [
        "",
        "",
        "",
        "",
      ],
      repository: "",
    }
  }, */
];
