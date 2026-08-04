const e={checking:{title:"ChecKing",shortDesc:"Attendance management system for students and teachers.",meta:{type:"Academic project",role:"Full Stack Developer",duration:"4 months",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          ChecKing is an attendance management system developed
          as a programming course project at Sedes Sapientiae University.
          It lets teachers record and control student attendance digitally,
          replacing manual spreadsheets.
        `,media:[{index:0,caption:"Teacher login screen using ID number and password."}]},{id:"problema",type:"bullets",title:"The problem",items:["Manual attendance tracking is prone to errors and time-consuming.","There was no automatic control of the student limit per class.","There were no clear reports to evaluate attendance per course."]},{id:"solucion",type:"text",title:"The solution",content:`
          I built a full-stack system with teacher authentication,
          online attendance registration and automatic validation
          of the student limit per class.
        `,media:[{index:1,caption:"Attendance registration with the student limit indicator."}]},{id:"reportes",type:"text",title:"Per-course reports",content:`
          The system automatically calculates attendance percentages
          for each course and lets teachers manage records from a single panel.
        `,media:[{index:2,caption:"Attendance report per course with percentage calculation."}]},{id:"reglas",type:"text",title:"Attendance rules",content:`
          Teachers configure the attendance percentage rules,
          adapting the system to each course's criteria.
        `,media:[{index:3,caption:"Configuration screen for attendance percentage rules."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["The backend had to be fully built from scratch in PHP.","Database handling posed a significant challenge due to my limited experience at that time."]},{id:"resultado",type:"text",title:"Result",content:`
          The system enabled teachers to register attendance more efficiently,
          reducing errors and saving administrative time.
        `},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          It was my first complete full-stack project: I designed the database,
          built the backend from scratch in PHP and wired up the frontend without frameworks.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would structure the code in layers, centralize the configuration
          and add more robust data validation.
        `},{id:"enlaces",type:"links",title:"Links",links:[{label:"GitHub",url:"https://github.com/FedericoMartinolich/checKing"}]}]},foodservice:{title:"FoodService",shortDesc:"Internal system for meal order management, users, and OCR-based menu uploads.",meta:{type:"Work project",role:"Full Stack Web Developer",duration:"4 months",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          FoodService is an internal system developed for a software consulting
          and development company. Its purpose is to manage employee meal orders:
          register, log in, view menus and place orders efficiently.
        `,media:[{index:0,caption:"User login to the system."}]},{id:"problema",type:"text",title:"The problem",content:`
          The company received the weekly menu as an image and meal orders
          were recorded entirely by hand. Development was also constrained
          by a proprietary framework with no official documentation
          or package manager.
        `},{id:"carga",type:"text",title:"Automating the menu upload",content:`
          I centralized the weekly menu upload in an editable form,
          eliminating manual data entry and reducing errors.
        `,media:[{index:4,caption:"Editable weekly menu form."}]},{id:"ocr",type:"text",title:"OCR",content:`
          I integrated Tesseract OCR to automatically recognize every dish
          from the image menu. The administrator reviews and corrects
          the extracted text before publishing it.
        `,media:[{index:6,caption:"Menu upload screen using OCR."},{index:7,caption:"OCR text preview and correction interface."}]},{id:"pedido",type:"text",title:"Employee ordering",content:`
          Employees view the generated menu and select their meals
          with a couple of clicks.
        `,media:[{index:8,caption:"Meal selection interface."}]},{id:"seguimiento",type:"bullets",title:"Tracking and statistics",items:["Order registry and daily attendance marking.","Weekly summary with automatic alerts.","Monthly order history with PDF export."],media:[{index:10,caption:"Weekly summary with alerts."},{index:11,caption:"Monthly order history with PDF export."}]},{id:"panel",type:"text",title:"Admin panel",content:`
          From the panel, the administrator manages users, roles and permissions
          and oversees the whole ordering flow.
        `,media:[{index:2,caption:"User management."},{index:3,caption:"Roles and permissions configuration."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["Working without external libraries or framework documentation.","Stabilizing the OCR: it required extensive testing and adjustments."]},{id:"resultado",type:"text",title:"Result",content:`
          The system automated menu uploads, reduced administrative workload
          and improved the experience for both users and administrators.
        `},{id:"galeria",type:"gallery",title:"All screenshots",captions:["User login screen.","User profile edit view.","Admin user management interface.","Roles and permissions configuration.","Weekly menu form.","Editable menu options and user preferences.","Menu upload screen using OCR.","OCR text preview and correction interface.","Meal selection interface for users.","Order registry and attendance marking.","Weekly summary with alerts.","Monthly order history with PDF export.","System configuration panel."]},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          It was my first project with OCR: I learned to integrate Tesseract manually
          and to process and clean the extracted text before loading it into the system.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would invest more time documenting the proprietary framework
          and defining the database schema before starting to code.
        `}]},"tiro-libre":{title:"Tiro Libre",shortDesc:"Web platform for football field management, online reservations and automation.",meta:{type:"Personal project",role:"Full Stack Developer",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          Tiro Libre is a web platform that digitalizes football field
          reservations. It allows players to book online and owners
          to manage schedules, availability and communication
          through a unified system.
        `,media:[{index:3,caption:"Player homepage with search tools."}]},{id:"problema",type:"text",title:"The problem",content:`
          Manual reservation handling causes double bookings,
          poor communication and a lack of availability visibility.
        `},{id:"datos",type:"text",title:"Data model",content:`
          I modeled the database for users, fields and reservations,
          accounting for real-time availability.
        `,media:[{src:"/Portafolio/imgs/projects/TiroLibre/diagrama-bd.png",caption:"Database diagram."}]},{id:"canchero",type:"text",title:"Owner dashboard",content:`
          Owners manage fields, schedules and reservations from a dedicated
          dashboard, approving or rejecting pending requests.
        `,media:[{index:2,caption:"Owner dashboard with reservation management."},{index:5,caption:"Pending reservation management panel."}]},{id:"busqueda",type:"text",title:"Search and map",content:`
          Players search, filter and book fields, with an interactive map
          showing nearby venues.
        `,media:[{index:4,caption:"Interactive map with nearby fields."}]},{id:"cancha",type:"text",title:"Field detail",content:`
          Each field has a detailed page with availability and booking
          options, including a dark mode.
        `,media:[{index:0,caption:"Field detail view for players."},{index:1,caption:"Field detail view in dark mode."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["Handling reservations in real time.","Search and filtering system performance.","FullCalendar integration."]},{id:"resultado",type:"text",title:"Result",content:`
          A scalable platform that improves organization for field owners
          and delivers a smooth booking experience for players.
        `},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          I learned to model bookings with real-time availability
          and to build a search engine with combined filters over the database.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would extract the business logic from controllers into services
          and add automated tests from the start.
        `},{id:"enlaces",type:"links",title:"Links",links:[{label:"GitHub",url:"https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file"}]}]},mecha:{title:"Mecha",shortDesc:"Responsive frontend layout based on a provided design.",meta:{type:"Work project",role:"Frontend Developer",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          Mecha focused on transforming a provided graphic design
          into a fully functional and responsive web interface
          using HTML, CSS and vanilla JavaScript.
        `,media:[{index:2,caption:"Desktop view of the layout."}]},{id:"problema",type:"text",title:"The problem",content:`
          Translating a static design into a responsive layout
          without backend support required precision and clean structure.
        `},{id:"detalles",type:"text",title:"Design fidelity",content:`
          I took care of the typography and style details to achieve
          a faithful replica of the original design.
        `,media:[{index:0,caption:"Typography and style details."}]},{id:"responsive",type:"text",title:"Responsive design",content:`
          I adapted the layout to multiple screen sizes,
          keeping visual consistency at every breakpoint.
        `,media:[{index:1,caption:"Mobile responsive layout."},{index:3,caption:"Mobile view."}]},{id:"navegacion",type:"text",title:"Mobile navigation",content:`
          On small screens, the navigation was restructured
          into a collapsible menu.
        `,media:[{index:4,caption:"Mobile navigation."},{index:5,caption:"Responsive menu implementation."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["Achieving pixel-perfect accuracy without automated tools.","Adapting the design to multiple screen sizes."]},{id:"resultado",type:"text",title:"Result",content:`
          A clean, responsive and production-ready frontend layout.
        `},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          I strengthened my visual precision and responsive design skills
          working directly with HTML, CSS and JavaScript, without style frameworks.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would use a design system with CSS variables and reusable components
          from day one to keep visual consistency.
        `}]},kredit:{title:"Kredit",shortDesc:"Responsive frontend for a financial platform using JWT-secured APIs.",meta:{type:"Work project",role:"Frontend Developer",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          Kredit is a financial web platform focused on loan management.
          My role was frontend development and API integration
          using JWT authentication.
        `,media:[{index:0,caption:"Main platform interface."}]},{id:"problema",type:"text",title:"The problem",content:`
          The platform required a modern, responsive interface capable
          of securely consuming protected endpoints, with little backend
          documentation.
        `},{id:"solicitud",type:"text",title:"Loan request",content:`
          I designed the loan request flow connected to the API,
          handling token-based authentication and response states.
        `,media:[{index:1,caption:"Loan request form."}]},{id:"contacto",type:"text",title:"Contact",content:`
          The contact section was integrated with the platform services.
        `,media:[{index:2,caption:"Contact section."}]},{id:"responsive",type:"text",title:"Responsive design",content:`
          I adapted the whole interface to multiple devices for a consistent
          experience on desktop and mobile.
        `,media:[{index:3,caption:"Mobile responsive view."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["Limited backend documentation: I interpreted the API behavior through testing and collaboration."]},{id:"resultado",type:"text",title:"Result",content:`
          A responsive frontend with stable API communication.
        `},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          I learned to consume JWT-authenticated APIs and to integrate
          with a backend without full documentation, validating flows with real tests.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would handle error states and session expiration in more detail,
          and propose minimal endpoint documentation.
        `}]},"ferreteria-el-moro":{title:"Ferretería El Moro",shortDesc:"Dynamic online catalog built without a backend, optimized for performance.",meta:{type:"Freelance project",role:"Full Stack Developer",state:"Finished"},blocks:[{id:"resumen",type:"text",title:"Summary",content:`
          Web catalog for a local hardware store, designed to display
          products efficiently without backend infrastructure
          or maintenance costs.
        `,media:[{index:0,caption:"General product catalog view."}]},{id:"problema",type:"text",title:"The problem",content:`
          The store needed an online catalog, but a full backend was not
          justified by the product volume and the associated costs.
        `},{id:"solucion",type:"text",title:"The solution",content:`
          Frontend-first architecture: Google Sheets as the data source
          and Cloudinary for images. The catalog updates without touching code.
        `,media:[{index:1,caption:"Product detail view."}]},{id:"compra",type:"text",title:"Shopping and WhatsApp",content:`
          Customers browse the catalog, build their cart and complete the order
          through WhatsApp directly from the modal.
        `,media:[{index:5,caption:"Shopping cart view."},{index:6,caption:"Cart modal with WhatsApp integration."}]},{id:"empresa",type:"text",title:"Contact and the business",content:`
          Contact sections with an interactive map and a business
          introduction to build trust.
        `,media:[{index:3,caption:"Contact section with interactive map."},{index:4,caption:"About us section."}]},{id:"nuevos",type:"text",title:"New products",content:`
          The catalog includes a new products section and careful handling
          of placeholders when an image is missing.
        `,media:[{index:7,caption:"New products section."}]},{id:"desafios",type:"bullets",title:"Challenges",items:["Handling routes and assets correctly in production.","Optimizing external image loading."]},{id:"resultado",type:"text",title:"Result",content:`
          A fast and professional online catalog easily managed
          by the client without technical intervention.
        `},{id:"galeria",type:"gallery",title:"All screenshots",captions:["General product catalog view.","Product detail view.","Placeholder handling for missing images.","Interactive map contact section.","About us section.","Shopping cart view.","Cart modal with WhatsApp integration.","New products section."]},{id:"aprendizajes",type:"text",title:"What I learned",content:`
          I learned frontend-first architecture: orchestrating Google Sheets
          as a data source and Cloudinary for images with zero backend.
        `},{id:"distinto",type:"text",title:"What would I do differently today?",content:`
          I would add local caching and content versioning, plus a maintenance
          view for when the data source changes.
        `},{id:"enlaces",type:"links",title:"Links",links:[{label:"Website",url:"https://ferreteriaelmoro-five.vercel.app/"}]}]},estancias:{title:"Estancias - Integral Tourism Management System (Under Development)",shortDesc:"Management platform for tourism and hospitality establishments that centralises bookings, guests, payments, services, availability, stock and internal operations through a scalable modular architecture.",meta:{type:"Personal project",role:"Full Stack Developer",state:"In development"},blocks:[{id:"resumen",type:"text",title:"Summary",content:"Estancias is an all-in-one management system tailored for tourism establishments, boutique hotels, rural lodges and holiday complexes. The project was designed to resolve real-world operational challenges related to complex bookings, multiple guests, split payments, additional services, dynamic availability, financial control, stock and user management. The architecture was conceived with a vision for growth towards a multi-establishment SaaS model."},{id:"problema",type:"text",title:"The problem",content:"Many tourism establishments manage bookings, guests, payments and services through manual processes or fragmented systems, leading to errors, a lack of traceability and operational difficulties. Furthermore, most basic systems fail to account for real-world scenarios such as group bookings, multiple guests, associated services or partial payments."},{id:"objetivo",type:"text",title:"Objective",content:"To develop a centralised platform capable of managing the entire operation of a tourism establishment, accurately modelling business complexity and enabling scaling towards future enterprise functionalities and SaaS models."},{id:"arquitectura",type:"text",title:"Architecture",content:"A domain-driven design approach was applied, identifying key entities, complex relationships and real operational rules. Priority was given to modularity, separation of concerns and the use of derived logic to minimise redundancy and facilitate system maintainability."},{id:"implementacion",type:"bullets",title:"Implementation",items:["Analysis of operational processes within hospitality and tourism.","Relational modelling of bookings, guests, rooms, services and payments.","Design of a modular architecture based on independent domains.","Implementation of authentication, authorisation and granular permissions via RBAC.","Development of administrative interfaces using Livewire, Blade and Tailwind.","Implementation of decoupled availability management to optimise queries and scalability.","Construction of operational dashboards and administrative tools.","Preparation of the architecture for future multi-tenant capabilities."]},{id:"desafios",type:"bullets",title:"Challenges",items:["Modelling real scenarios where the person paying is not necessarily the person staying.","Linking multiple guests, rooms, services and payments to a single booking without creating unnecessary coupling.","Managing temporal availability through decoupled structures to scale."]},{id:"resultado",type:"text",title:"Result",content:"Under development..."},{id:"aprendizajes",type:"text",title:"What I learned",content:"It was the project where I went deepest into domain design and relational modelling: complex bookings, split payments and decoupled availability."},{id:"distinto",type:"text",title:"What would I do differently today?",content:"I would deliver smaller functional verticals from the start to validate the product with real users early on."}]}};export{e as default};
