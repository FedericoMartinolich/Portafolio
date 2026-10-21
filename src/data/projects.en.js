export default {
  checking: {
    title: "ChecKing",
    shortDesc: "Attendance management system for students and teachers.",
    meta: {
      type: "Academic project",
      role: "Full Stack Developer",
      duration: "4 months",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          ChecKing is an attendance management system developed as a capstone
          project at Sedes Sapientiae University. It lets teachers record and
          control student attendance digitally, replacing manual spreadsheets,
          with automatic reports and per-course rule configuration.
        `,
        media: [
          {
            index: 0,
            caption: "Teacher login screen using ID number and password."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I designed the database, built the full backend from scratch in PHP
          and created the frontend with HTML, CSS and vanilla JavaScript.
          I implemented teacher authentication, online attendance registration,
          student-limit validation per class, automatic percentage reports
          and attendance rule configuration.
        `,
        media: [
          {
            index: 1,
            caption: "Attendance registration with student-limit indicator."
          },
          {
            index: 2,
            caption: "Attendance report per course with percentage calculation."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          First complete full-stack project: the system enabled more efficient
          attendance tracking, reducing errors and saving administrative time.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "Teacher login screen.",
          "Attendance registration with limit indicator.",
          "Attendance report per course.",
          "Attendance percentage rules configuration."
        ]
      },
      {
        id: "enlaces",
        type: "links",
        title: "Links",
        links: [
          { label: "GitHub", url: "https://github.com/FedericoMartinolich/checKing" }
        ]
      }
    ]
  },

  foodservice: {
    title: "FoodService",
    shortDesc: "Internal system for meal order management, users, and OCR-based menu uploads.",
    meta: {
      type: "Work project",
      role: "Full Stack Web Developer",
      duration: "4 months",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          FoodService is an internal system for a software consulting company.
          It manages employee meal orders: registration, login, menu viewing
          and ordering. The weekly menu is uploaded automatically via OCR
          from a scanned image.
        `,
        media: [
          {
            index: 0,
            caption: "User login to the system."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I built the complete system using the company's proprietary framework.
          I implemented user administration, roles and permissions, the ordering
          flow, the admin panel, reports with PDF export and Tesseract OCR
          integration for automatic weekly menu upload.
        `,
        media: [
          {
            index: 6,
            caption: "Menu upload screen using OCR."
          },
          {
            index: 8,
            caption: "Meal selection interface."
          },
          {
            index: 2,
            caption: "User management."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          Automated menu uploads, reduced administrative workload and improved
          the experience for both users and administrators.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "User login screen.",
          "Profile edit view.",
          "User management interface.",
          "Roles and permissions configuration.",
          "Weekly menu form.",
          "Editable menu options.",
          "Menu upload via OCR.",
          "OCR text preview and correction.",
          "Meal selection interface.",
          "Order registry.",
          "Weekly summary with alerts.",
          "Monthly history with PDF export.",
          "System configuration panel."
        ]
      }
    ]
  },

  "tiro-libre": {
    title: "Tiro Libre",
    shortDesc: "Web platform for football field management, online reservations and automation.",
    meta: {
      type: "Academic project",
      role: "Full Stack Developer",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Tiro Libre digitalises football field reservations. Players book
          online and owners manage schedules, availability and communication
          through a unified system with an interactive map and calendar.
        `,
        media: [
          {
            index: 3,
            caption: "Player homepage with search tools."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I modelled the database for users, fields and reservations with
          real-time availability. I built the backend with Laravel 10,
          implemented roles and permissions with Spatie, the search and
          filtering system, FullCalendar integration and the owner dashboard
          for managing requests.
        `,
        media: [
          {
            index: 2,
            caption: "Owner dashboard with reservation management."
          },
          {
            index: 4,
            caption: "Interactive map with nearby fields."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          A scalable platform that improves organisation for field owners
          and delivers a smooth booking experience for players.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "Field detail view.",
          "Field detail in dark mode.",
          "Owner dashboard.",
          "Interactive map.",
          "Pending reservation management."
        ]
      },
      {
        id: "enlaces",
        type: "links",
        title: "Links",
        links: [
          { label: "GitHub", url: "https://github.com/Felipe-258/tiro-libre?tab=readme-ov-file" }
        ]
      }
    ]
  },

  mecha: {
    title: "Mecha",
    shortDesc: "Responsive frontend layout based on a provided design.",
    meta: {
      type: "Work project",
      role: "Frontend Developer",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Mecha focused on transforming a provided graphic design into a fully
          functional and responsive web interface using HTML, CSS and vanilla
          JavaScript without style frameworks.
        `,
        media: [
          {
            index: 2,
            caption: "Desktop view of the layout."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I built the interfaces with attention to typography and style details
          to achieve a faithful replica of the original design. I adapted the
          layout to multiple screen sizes and restructured the navigation into
          a collapsible menu for small screens.
        `,
        media: [
          {
            index: 0,
            caption: "Typography and style details."
          },
          {
            index: 1,
            caption: "Mobile responsive layout."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          A clean, responsive and production-ready frontend layout faithful
          to the original design.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "Typography and style details.",
          "Mobile responsive layout.",
          "Desktop view.",
          "Mobile view.",
          "Mobile navigation.",
          "Responsive menu."
        ]
      }
    ]
  },

  kredit: {
    title: "Kredit",
    shortDesc: "Responsive frontend for a financial platform using JWT-secured APIs.",
    meta: {
      type: "Work project",
      role: "Frontend Developer",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Kredit is a financial web platform for loan management. My role was
          frontend development and API integration using JWT authentication,
          working without complete backend documentation.
        `,
        media: [
          {
            index: 0,
            caption: "Main platform interface."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I built the complete responsive frontend. I implemented the loan
          request flow connected to the API, handling token-based authentication,
          response states and validations. I interpreted the API behaviour
          through testing and collaboration with the team.
        `,
        media: [
          {
            index: 1,
            caption: "Loan request form."
          },
          {
            index: 3,
            caption: "Mobile responsive view."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          A responsive frontend with stable API communication and a complete
          JWT authentication flow.
        `
      }
    ]
  },

  "ferreteria-el-moro": {
    title: "Ferretería El Moro",
    shortDesc: "Dynamic online catalog built without a backend, optimized for performance.",
    meta: {
      type: "Freelance project",
      role: "Full Stack Developer",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Web catalog for a local hardware store, built to display 800+
          products across 29 categories without backend infrastructure or
          maintenance costs. The client manages all content without
          technical knowledge.
        `,
        media: [
          {
            index: 0,
            caption: "Home with featured banners, payment methods and category shortcuts."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I designed a frontend-first architecture: Google Sheets as the
          data source and Cloudinary for images. I built the catalog in
          Vue 3 + Vite with search, category and brand filters, a
          wishlist page, special offers and a cart that assembles the
          order and sends it via WhatsApp with the customer's details.
          Deployed on Vercel: the store loads products, prices and banners
          without touching code.
        `,
        media: [
          {
            index: 1,
            caption: "Product detail with stock, discount and direct purchase or WhatsApp enquiry."
          },
          {
            index: 6,
            caption: "Booking modal collecting customer details before sending the order via WhatsApp."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          A catalog with 800+ products across 29 categories, fast and
          professional, fully managed by the client from a spreadsheet —
          no technical knowledge and no server costs.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "Home: featured banners, payment methods and category shortcuts.",
          "Product detail with stock, discount and direct purchase or WhatsApp enquiry.",
          "Catalog with search, category filter and sorting.",
          "Contact page with form, store details and interactive map.",
          "About us section with the store's story.",
          "Shopping cart with live order summary.",
          "Booking modal: the order is sent pre-filled via WhatsApp.",
          "Special offers with discounted prices and partner brands."
        ]
      },
      {
        id: "enlaces",
        type: "links",
        title: "Links",
        links: [
          { label: "Website", url: "https://ferreteriaelmoro-five.vercel.app/" }
        ]
      }
    ]
  },

  "estancias": {
    title: "Estancias — Tourism Management System",
    shortDesc: "Management platform for tourism and hospitality establishments.",
    meta: {
      type: "Personal project",
      role: "Full Stack Developer",
      state: "In development"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Estancias is an all-in-one management system for tourism
          establishments, boutique hotels and rural lodges. It centralises
          bookings, guests, payments, services, availability and internal
          operations with a scalable modular architecture towards a SaaS model.
        `
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          I designed the domain architecture and relational database modelling.
          I built the backend with Laravel, Livewire and Tailwind CSS, with
          RBAC granular permissions, decoupled availability management and
          operational dashboards.
        `
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `Under development.`
      }
    ]
  },

  "nexo": {
    title: "Nexo",
    shortDesc: "Multi-tenant system for wholesale distributors and hardware wholesalers.",
    meta: {
      type: "Collaborative project",
      role: "Full Stack Developer",
      state: "In development"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          Nexo is a multi-tenant system for wholesale distributors and
          hardware stores. It centralises products, stock, suppliers,
          customers, purchases, orders, credit accounts and commercial
          documents, responsive on desktop and mobile. Includes subscription
          plans, supplier price-list import and reports.
        `,
        media: [
          {
            index: 0,
            caption: "Dashboard with sales summary, critical stock and receivables."
          }
        ]
      },
      {
        id: "participacion",
        type: "text",
        title: "My role",
        content: `
          Built together with Felipe Franco. I contribute on the Laravel
          backend (multi-tenant with TieneTenant, roles, stock, pricing,
          PhpSpreadsheet import, dompdf PDFs) and Vue 3 + Inertia +
          TypeScript frontend. We implemented manual orders and a WhatsApp
          parser, credit accounts, quotes/delivery notes and chart + Excel/PDF
          reports.
        `,
        media: [
          {
            index: 1,
            caption: "Product list with filters, desktop sorting and catalog export."
          },
          {
            index: 2,
            caption: "Order management with states and fast WhatsApp loading."
          }
        ]
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          In development: phases 0–5 done, now in stabilisation with manual
          testing and bug fixing before deployment.
        `
      },
      {
        id: "galeria",
        type: "gallery",
        title: "Screenshots",
        captions: [
          "Dashboard with sales summary and alerts.",
          "Product list with filters and states.",
          "Order management with states.",
          "Sales reports with charts and export."
        ]
      }
    ]
  },
  "pascal": {
    title: "Pascal Exercises & Algorithms",
    shortDesc: "A collection of 128 Free Pascal programs: from language fundamentals to mini-apps with records and algorithms.",
    meta: {
      type: "Academic project",
      role: "Programming",
      state: "Finished"
    },
    blocks: [
      {
        id: "resumen",
        type: "text",
        title: "What it is",
        content: `
          The complete repository of my exercises and projects written in
          Free Pascal during my training: 128 programs ranging from language
          fundamentals to concrete problem solving such as a Roman numeral
          converter, date validation with leap years and record-based
          statistics systems.
        `
      },
      {
        id: "participacion",
        type: "text",
        title: "Highlights",
        content: `
          The featured programs solve complete problems: a decimal to Roman
          numeral converter with subtractive notation, chronological date
          validation and sorting, and a sports statistics app built with
          records, multiple procedures and key-based lookup. The repository
          keeps the remaining exercises as a record of the learning process.
        `
      },
      {
        id: "resultado",
        type: "text",
        title: "Result",
        content: `
          A solid foundation in low-level programming: data structures,
          sorting algorithms and multi-procedure program design applied to
          concrete problems.
        `
      },
      {
        id: "enlaces",
        type: "links",
        title: "Links",
        links: [
          { label: "GitHub", url: "https://github.com/FedericoMartinolich/pascal-portfolio" }
        ]
      }
    ]
  }
}
