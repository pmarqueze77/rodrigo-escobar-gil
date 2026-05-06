import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

const BASE = "https://rodrigoescobargil.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: "Rodrigo Escobar Gil | Jurista, Exmagistrado y Consultor — Colombia",
  description:
    "Exmagistrado y Presidente de la Corte Constitucional de Colombia (2001–2009). Vicepresidente y Comisionado CIDH–OEA (2010–2014). Doctor en Derecho Administrativo. Consultor jurídico en derecho público, constitucional, derechos humanos y arbitraje.",
  keywords: [
    "Rodrigo Escobar Gil",
    "exmagistrado Corte Constitucional Colombia",
    "Presidente Corte Constitucional",
    "abogado Colombia",
    "consultor jurídico Bogotá",
    "derecho constitucional Colombia",
    "derecho administrativo Colombia",
    "derechos humanos Colombia",
    "CIDH comisionado",
    "OEA derechos humanos",
    "árbitro Colombia",
    "arbitraje derecho público",
    "contratación estatal Colombia",
    "Rodrigo Escobar Gil Consultores",
    "abogado derecho público Bogotá",
  ],
  authors: [{ name: "Rodrigo Escobar Gil", url: BASE }],
  creator: "Rodrigo Escobar Gil",
  publisher: "Rodrigo Escobar Gil Consultores",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: BASE,
    siteName: "Rodrigo Escobar Gil",
    title: "Rodrigo Escobar Gil | Jurista, Exmagistrado y Consultor",
    description:
      "Exmagistrado y Presidente de la Corte Constitucional de Colombia. Vicepresidente y Comisionado CIDH–OEA. Consultor en derecho público, constitucional y derechos humanos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigo Escobar Gil — Jurista y Consultor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Escobar Gil | Jurista y Consultor",
    description:
      "Exmagistrado y Presidente de la Corte Constitucional de Colombia. Vicepresidente y Comisionado CIDH–OEA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE,
    languages: {
      "es-CO": BASE,
      "en-US": `${BASE}/en`,
      "x-default": BASE,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Rodrigo Escobar Gil",
      honorificPrefix: "Dr.",
      jobTitle: "Jurista, Consultor Jurídico y Árbitro",
      description:
        "Exmagistrado y Presidente de la Corte Constitucional de Colombia (2001–2009). Vicepresidente y Comisionado de la CIDH–OEA (2010–2014). Doctor en Derecho Administrativo, Universidad Complutense de Madrid. Árbitro en tribunales nacionales e internacionales.",
      url: BASE,
      image: `${BASE}/og-image.jpg`,
      email: "info@rodrigoescobargil.co",
      telephone: "+5716206246",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 118 No. 5-33, Piso 3",
        addressLocality: "Bogotá",
        addressRegion: "D.C.",
        addressCountry: "CO",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Pontificia Universidad Javeriana",
          address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Universidad Complutense de Madrid",
          address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Doctor en Derecho Administrativo, Cum Laude",
          recognizedBy: { "@type": "CollegeOrUniversity", name: "Universidad Complutense de Madrid" },
        },
      ],
      award: [
        "Condecoración José Ignacio de Márquez, medalla de oro — Consejo Superior de la Judicatura (2007, 2009)",
        "Orden Rafael Núñez, Gran Oficial — Gobernación de Bolívar (2007)",
        "Medalla Cívica de Cartagena de Indias, Gran Oficial (2007)",
        "Beca José María Samper — Banco de la República (1984)",
      ],
      knowsAbout: [
        "Derecho Constitucional",
        "Derecho Administrativo",
        "Contratación Estatal",
        "Derechos Humanos",
        "Derecho Internacional de los Derechos Humanos",
        "Sistema Interamericano de Derechos Humanos",
        "Arbitraje Nacional e Internacional",
        "Derecho Público",
        "Responsabilidad del Estado",
        "Consulta Previa",
      ],
      worksFor: { "@id": `${BASE}/#firm` },
      memberOf: [
        {
          "@type": "Organization",
          name: "Comisión Interamericana de Derechos Humanos",
          url: "https://www.oas.org/es/cidh/",
        },
        {
          "@type": "Organization",
          name: "Academia Colombiana de la Abogacía",
        },
      ],
      sameAs: [
        "https://www.oas.org/es/cidh/ppl/docs/pdf/CVEscobarGilVEES.pdf",
        "https://dialnet.unirioja.es/servlet/autor?codigo=531354",
        "https://www.corteconstitucional.gov.co",
        "https://congresoppl.wordpress.com/250/252/rodrigo-escobar-gil-phd/",
      ],
    },
    {
      "@type": "LegalService",
      "@id": `${BASE}/#firm`,
      name: "Rodrigo Escobar Gil Consultores",
      url: BASE,
      telephone: "+5716206246",
      email: "info@rodrigoescobargil.co",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 118 No. 5-33, Piso 3",
        addressLocality: "Bogotá",
        addressRegion: "D.C.",
        addressCountry: "CO",
      },
      areaServed: ["Colombia", "América Latina"],
      knowsAbout: [
        "Derecho Público",
        "Derecho Constitucional",
        "Derecho Administrativo",
        "Derechos Humanos",
        "Arbitraje",
      ],
      founder: { "@id": `${BASE}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Rodrigo Escobar Gil",
      description: "Sitio oficial de Rodrigo Escobar Gil, jurista y consultor jurídico colombiano.",
      inLanguage: ["es-CO", "en-US"],
      author: { "@id": `${BASE}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/videos/hero-poster.jpg" fetchPriority="high" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
