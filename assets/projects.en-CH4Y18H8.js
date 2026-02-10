const e={checking:{title:"ChecKing",shortDesc:"Attendance management system for students and teachers.",detail:{longText:`
        Project developed as part of a programming course at Sedes Sapientiae University.
        This system aims to efficiently and easily record student attendance.
      `,problem:`
        Manual attendance tracking is prone to errors and is time-consuming.
        A digital solution was needed to streamline this process.
      `,objetive:`
        Develop a web system that allows teachers to quickly and accurately
        record and manage student attendance.
      `,process:["Requirements analysis and system design.","Backend development using PHP and MySQL for data management.","Creation of an intuitive user interface with HTML, CSS, and JavaScript.","System testing and validation with real users."],result:`
        The system enabled teachers to register attendance more efficiently,
        reducing errors and saving administrative time.
      `,difficulties:`
        The backend had to be fully built from scratch in PHP.
        Database handling posed a significant challenge due to my limited
        experience at that time.
      `,role:`
        Full-stack development including database design,
        frontend implementation, and backend programming.
      `,conclution:`
        The ChecKing project proved to be an effective solution for attendance
        management, significantly improving the experience for both teachers
        and students.
      `,galleryText:["Login screen for teachers using ID number and password.","Attendance registration interface with student limitations indicator.","Attendance report by class with percentage calculation and record management.","Configuration screen for attendance percentage rules."]}},foodservice:{title:"FoodService",shortDesc:"Internal system for meal order management, users, and OCR-based menu uploads.",detail:{longText:`
        FoodService is a system developed for a software consulting and development company.
        Its purpose is to manage employee meal requests, allowing users to register,
        log in, view menus, and place orders efficiently.
        A key feature is automatic menu uploading via OCR.
      `,problem:`
        The company needed an internal tool to organize meal orders and
        automate daily menu uploads. Development was constrained by a
        proprietary framework with no package managers or documentation.
      `,objetive:`
        Build a stable system that supports user authentication,
        meal ordering, and automatic menu uploads using OCR,
        all within a restricted technical environment.
      `,metodology:`
        Agile methodology with incremental development.
        Manual integration of Tesseract OCR and continuous testing
        to ensure system stability inside a proprietary framework.
      `,process:["Analysis of the proprietary framework structure.","User authentication system development.","Meal order management module implementation.","Manual integration of Tesseract OCR.","OCR text processing and cleanup.","Admin panel development.","Cross-environment testing."],result:`
        The system automated menu uploads, reduced administrative workload,
        and improved usability for both users and administrators.
      `,difficulties:`
        The main challenge was working without external libraries or documentation.
        Manual OCR integration required extensive testing and adaptation.
      `,role:`
        Full-stack development including authentication,
        meal management, OCR integration, and admin tools.
      `,conclution:`
        FoodService demonstrated that complex features can be implemented
        effectively even within heavily restricted environments.
      `,galleryText:["User login screen.","User profile edit view.","Admin user management interface.","Roles and permissions configuration.","Weekly menu form.","Editable menu options and user preferences.","Menu upload screen using OCR.","OCR text preview and correction interface.","Meal selection interface for users.","Order registry and attendance marking.","Weekly summary with alerts.","Monthly order history with PDF export.","System configuration panel."]}},"tiro-libre":{title:"Tiro Libre",shortDesc:"Web platform for football field management, online reservations and automation.",detail:{longText:`
        Tiro Libre is a web platform designed to digitalize football field reservations.
        It allows players to book online and owners to manage schedules,
        availability and communication through a unified system.
      `,problem:`
        Manual reservation handling causes double bookings,
        poor communication, lack of availability visibility
        and inefficient business organization.
      `,objetive:`
        Create a complete platform that enables owners to manage fields
        and players to search, filter and book fields instantly.
      `,metodology:`
        Agile Kanban methodology with an MVP-driven approach.
        Built with Laravel 10 and Spatie roles and permissions.
      `,process:["Database modeling for users, fields and reservations.","Role-based authentication and dashboards.","Field creation and schedule management.","Advanced search and filtering system.","FullCalendar integration.","UI/UX design and testing."],result:`
        A scalable platform that improves organization for field owners
        and delivers a smooth booking experience for players.
      `,difficulties:`
        Challenges included real-time reservation handling,
        advanced filtering performance and FullCalendar integration.
      `,role:`
        Implementation of search logic, roles and permissions,
        calendar integration, authentication and UX flow.
      `,conclution:`
        Tiro Libre showcases how digital solutions can modernize
        traditional businesses and improve operational efficiency.
      `,galleryText:["Field detail view for players with booking options.","Dark mode field detail view.","Owner dashboard with reservation management.","Player homepage with search tools.","Interactive map with nearby fields.","Pending reservation management panel."]}},mecha:{title:"Mecha",shortDesc:"Responsive frontend layout based on a provided design.",detail:{longText:`
        Mecha focused on transforming a provided graphic design
        into a fully functional and responsive web interface
        using HTML, CSS and vanilla JavaScript.
      `,problem:`
        Translating a static design into a responsive layout
        without backend support required precision and clean structure.
      `,objetive:`
        Build a responsive, faithful and navigable frontend layout
        that matches the original design specifications.
      `,metodology:`
        Semantic HTML structure, modular CSS styling
        and responsive adaptation using media queries.
      `,process:["Design review and layout planning.","HTML structure creation.","CSS styling and visual refinement.","Responsive behavior implementation."],result:`
        A clean, responsive and production-ready frontend layout.
      `,difficulties:`
        Achieving pixel-perfect accuracy without automated tools.
      `,role:`
        Frontend Developer responsible for layout, responsiveness
        and visual fidelity.
      `,conclution:`
        The project strengthened skills in responsive design
        and attention to visual detail.
      `,galleryText:["Typography and style details.","Mobile responsive layout.","Desktop layout.","Mobile view.","Mobile navigation.","Responsive menu implementation."]}},kredit:{title:"Kredit",shortDesc:"Responsive frontend for a financial platform using JWT-secured APIs.",detail:{longText:`
        Kredit is a financial web platform focused on loan management.
        My role was frontend development and API integration using JWT.
      `,problem:`
        The platform required a modern, responsive interface
        capable of securely consuming authenticated API endpoints.
      `,objetive:`
        Develop a functional frontend that integrates securely
        with the backend API and adapts to multiple devices.
      `,metodology:`
        Incremental frontend development with manual testing
        across browsers and screen sizes.
      `,process:["UI layout definition.","Responsive adaptation.","JWT-based API consumption.","Integration testing."],result:`
        A responsive frontend with stable API communication.
      `,difficulties:`
        Limited documentation required interpreting API behavior
        through testing and collaboration.
      `,role:`
        Frontend Developer responsible for UI,
        responsiveness and API integration.
      `,conclution:`
        Strengthened experience in JWT authentication
        and real-world API consumption.
      `,galleryText:["Main platform interface.","Loan request form.","Contact section.","Mobile responsive view."]}},"ferreteria-el-moro":{title:"Ferretería El Moro",shortDesc:"Dynamic online catalog built without a backend, optimized for performance.",detail:{longText:`
        Web catalog developed for a local hardware store,
        designed to display products efficiently without
        backend infrastructure or maintenance costs.
      `,problem:`
        The store needed an online catalog but did not justify
        a full backend due to product volume and cost constraints.
      `,objetive:`
        Create a fast, scalable and easy-to-maintain product catalog
        using external services.
      `,metodology:`
        Frontend-first architecture using Google Sheets
        as a data source and Cloudinary for images.
      `,process:["Google Sheets data integration.","Frontend data normalization.","Cloudinary image handling.","Vite build optimization.","Deployment on Vercel."],result:`
        A fast and professional online catalog easily managed
        by the client without technical intervention.
      `,difficulties:`
        Handling routes and assets correctly in production
        and optimizing external image loading.
      `,role:`
        Full project development including architecture,
        integrations, deployment and documentation.
      `,conclution:`
        Demonstrates how professional web solutions can be
        built with zero backend and minimal cost.
      `,galleryText:["General product catalog view.","Product detail view.","Placeholder handling for missing images.","Interactive map contact section.","About us section.","Shopping cart view.","Cart modal with WhatsApp integration.","New products section."]}}};export{e as default};
