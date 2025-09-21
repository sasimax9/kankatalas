export const languages = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  zh: "中文",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    nav: {
      services: "Services",
      expertise: "Expertise",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "AI & ML Development Specialists",
      title: "Build intelligent",
      titleAccent: "software.",
      description:
        "Transform your business with cutting-edge AI/ML solutions, modern UI/UX design, and scalable Python applications.",
      startProject: "Start Your Project",
      viewWork: "View Our Work",
    },
    services: {
      title: "Our Services",
      description: "Comprehensive software development services powered by the latest technologies.",
      aiMl: {
        title: "AI & Machine Learning",
        description:
          "Custom AI models, neural networks, and intelligent automation solutions that drive business growth",
      },
      uiUx: {
        title: "UI/UX Design & Development",
        description: "Modern, responsive interfaces that deliver exceptional user experiences across all platforms",
      },
      dataEng: {
        title: "Data Engineering",
        description: "Scalable data pipelines, ETL processes, and analytics infrastructure for data-driven decisions",
      },
      llm: {
        title: "Large Language Models",
        description: "Custom LLM integration, fine-tuning, and deployment for intelligent conversational applications",
      },
      python: {
        title: "Python Development",
        description: "Full-stack Python applications, APIs, and microservices built for performance and scalability",
      },
      consulting: {
        title: "Consulting & Strategy",
        description: "Technical consulting, architecture design, and strategic planning for digital transformation",
      },
    },
    expertise: {
      title: "Trusted by industry leaders.",
      description:
        "We partner with forward-thinking companies to build intelligent software solutions that drive innovation and growth.",
      process: [
        "Discovery & Strategy Planning",
        "Custom Solution Development",
        "Testing & Quality Assurance",
        "Deployment & Ongoing Support",
      ],
      stats: {
        projects: "Projects Delivered",
        satisfaction: "Client Satisfaction",
        experience: "Years Experience",
        support: "Support Available",
      },
    },
    about: {
      title: "About Kankatalas",
      description:
        "We are a team of passionate developers, designers, and AI specialists dedicated to building the next generation of intelligent software solutions.",
    },
    contact: {
      title: "Ready to transform your business?",
      description: "Let's discuss how our expertise can accelerate your digital transformation journey.",
      schedule: "Schedule a Consultation",
      viewCases: "View Case Studies",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      expertise: "Experiencia",
      about: "Acerca de",
      contact: "Contacto",
    },
    hero: {
      badge: "Especialistas en Desarrollo de IA y ML",
      title: "Construye software",
      titleAccent: "inteligente.",
      description:
        "Transforma tu negocio con soluciones de IA/ML de vanguardia, diseño UI/UX moderno y aplicaciones Python escalables.",
      startProject: "Iniciar Tu Proyecto",
      viewWork: "Ver Nuestro Trabajo",
    },
    services: {
      title: "Nuestros Servicios",
      description: "Servicios integrales de desarrollo de software impulsados por las últimas tecnologías.",
      aiMl: {
        title: "IA y Aprendizaje Automático",
        description:
          "Modelos de IA personalizados, redes neuronales y soluciones de automatización inteligente que impulsan el crecimiento empresarial",
      },
      uiUx: {
        title: "Diseño y Desarrollo UI/UX",
        description:
          "Interfaces modernas y responsivas que ofrecen experiencias de usuario excepcionales en todas las plataformas",
      },
      dataEng: {
        title: "Ingeniería de Datos",
        description:
          "Pipelines de datos escalables, procesos ETL e infraestructura de análisis para decisiones basadas en datos",
      },
      llm: {
        title: "Modelos de Lenguaje Grande",
        description:
          "Integración personalizada de LLM, ajuste fino y despliegue para aplicaciones conversacionales inteligentes",
      },
      python: {
        title: "Desarrollo Python",
        description:
          "Aplicaciones Python full-stack, APIs y microservicios construidos para rendimiento y escalabilidad",
      },
      consulting: {
        title: "Consultoría y Estrategia",
        description:
          "Consultoría técnica, diseño de arquitectura y planificación estratégica para transformación digital",
      },
    },
    expertise: {
      title: "Confiado por líderes de la industria.",
      description:
        "Nos asociamos con empresas visionarias para construir soluciones de software inteligentes que impulsan la innovación y el crecimiento.",
      process: [
        "Descubrimiento y Planificación Estratégica",
        "Desarrollo de Soluciones Personalizadas",
        "Pruebas y Aseguramiento de Calidad",
        "Despliegue y Soporte Continuo",
      ],
      stats: {
        projects: "Proyectos Entregados",
        satisfaction: "Satisfacción del Cliente",
        experience: "Años de Experiencia",
        support: "Soporte Disponible",
      },
    },
    about: {
      title: "Acerca de Kankatalas",
      description:
        "Somos un equipo de desarrolladores, diseñadores y especialistas en IA apasionados, dedicados a construir la próxima generación de soluciones de software inteligentes.",
    },
    contact: {
      title: "¿Listo para transformar tu negocio?",
      description: "Discutamos cómo nuestra experiencia puede acelerar tu viaje de transformación digital.",
      schedule: "Programar una Consulta",
      viewCases: "Ver Casos de Estudio",
    },
  },
} as const

export type Translations = typeof translations.en
