export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      trajectory: "Trayectoria",
      practice: "Práctica",
      academia: "Academia",
      blog: "Columnas",
      contact: "Contacto",
    },
    hero: {
      tagline: "Jurista. Académico. Consultor.",
      cta: "Contactar",
      scroll: "Desplazar",
    },
    about: {
      label: "Sobre mí",
      heading: "Una trayectoria construida sobre el rigor jurídico",
      body: "Rodrigo Escobar Gil es uno de los juristas más destacados de Colombia. Doctor Cum Laude en Derecho Administrativo por la Universidad Complutense de Madrid y abogado de la Pontificia Universidad Javeriana, ejerció como Magistrado y Presidente de la Corte Constitucional durante ocho años, y como Comisionado y Relator Especial de la Comisión Interamericana de Derechos Humanos ante la OEA. Hoy dirige Rodrigo Escobar Gil Consultores, firma especializada en derecho público, constitucional y derechos humanos.",
      stat1: { value: "8 años", label: "Magistrado Corte Constitucional" },
      stat2: { value: "4 años", label: "Comisionado CIDH — OEA" },
      stat3: { value: "+35 años", label: "Ejercicio profesional" },
      downloadCv: "Descargar CV completo",
    },
    trajectory: {
      label: "Trayectoria",
      heading: "Hitos de una vida dedicada al derecho",
    },
    practice: {
      label: "Práctica Jurídica",
      heading: "Áreas de especialización",
      areas: [
        {
          title: "Derecho Constitucional",
          desc: "Acciones constitucionales, tutela, nulidad y restablecimiento, litigios ante la Corte Constitucional.",
        },
        {
          title: "Derecho Administrativo",
          desc: "Contratación estatal, responsabilidad del Estado, conciliación en lo contencioso-administrativo.",
        },
        {
          title: "Derechos Humanos e Internacional",
          desc: "Litigio ante el SIDH, peticiones ante la CIDH, derecho internacional humanitario.",
        },
        {
          title: "Litigio ante la CIDH",
          desc: "Representación de víctimas y Estados ante la Comisión y la Corte Interamericana de Derechos Humanos.",
        },
        {
          title: "Consultoría Institucional",
          desc: "Asesoría a entidades públicas y privadas, reformas institucionales, arbitraje y MASC.",
        },
      ],
    },
    academia: {
      label: "Academia y Publicaciones",
      heading: "Contribuciones al pensamiento jurídico",
      booksTitle: "Obras y artículos",
      academicTitle: "Actividad académica",
      downloadCv: "Descargar CV completo",
    },
    blog: {
      label: "Columnas de Opinión",
      heading: "Análisis jurídico y reflexión académica",
      readMore: "Leer artículo",
      viewAll: "Ver todas las columnas",
    },
    contact: {
      label: "Contacto",
      heading: "Inicie una conversación",
      body: "Para consultas sobre representación legal, asesoría institucional o participación académica, comuníquese directamente.",
      name: "Nombre completo",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado. Nos pondremos en contacto a la brevedad.",
      error: "Error al enviar. Por favor intente de nuevo.",
      office: "Bogotá, Colombia",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      trajectory: "Career",
      practice: "Practice",
      academia: "Academia",
      blog: "Columns",
      contact: "Contact",
    },
    hero: {
      tagline: "Jurist. Academic. Counsel.",
      cta: "Contact",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      heading: "A career built on legal rigor",
      body: "Rodrigo Escobar Gil is one of Colombia's most distinguished jurists. Holding a Cum Laude Doctorate in Administrative Law from the Universidad Complutense de Madrid, he served as Justice and President of the Constitutional Court of Colombia for eight years, and as Commissioner and Special Rapporteur of the Inter-American Commission on Human Rights at the OAS. He now leads Rodrigo Escobar Gil Consultores, a firm specializing in public law, constitutional law, and human rights.",
      stat1: { value: "8 years", label: "Justice, Constitutional Court" },
      stat2: { value: "4 years", label: "IACHR Commissioner — OAS" },
      stat3: { value: "35+ years", label: "Professional practice" },
      downloadCv: "Download full CV",
    },
    trajectory: {
      label: "Career",
      heading: "Milestones of a life devoted to law",
    },
    practice: {
      label: "Legal Practice",
      heading: "Areas of specialization",
      areas: [
        {
          title: "Constitutional Law",
          desc: "Constitutional actions, tutela, nullity and reinstatement, litigation before the Constitutional Court.",
        },
        {
          title: "Administrative Law",
          desc: "State contracting, State liability, conciliation in contentious-administrative proceedings.",
        },
        {
          title: "Human Rights & International Law",
          desc: "Litigation before the IASHR, petitions to the IACHR, international humanitarian law.",
        },
        {
          title: "IACHR Litigation",
          desc: "Representation of victims and States before the Inter-American Commission and Court of Human Rights.",
        },
        {
          title: "Institutional Advisory",
          desc: "Advisory to public and private entities, institutional reforms, arbitration and ADR.",
        },
      ],
    },
    academia: {
      label: "Academia & Publications",
      heading: "Contributions to legal scholarship",
      booksTitle: "Works and articles",
      academicTitle: "Academic activity",
      downloadCv: "Download full CV",
    },
    blog: {
      label: "Opinion Columns",
      heading: "Legal analysis and academic reflection",
      readMore: "Read article",
      viewAll: "View all columns",
    },
    contact: {
      label: "Contact",
      heading: "Start a conversation",
      body: "For inquiries about legal representation, institutional advisory or academic participation, please reach out directly.",
      name: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent. We will be in touch shortly.",
      error: "Error sending. Please try again.",
      office: "Bogotá, Colombia",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations.es;

export function getT(lang: Lang): Translations {
  return translations[lang] as Translations;
}
