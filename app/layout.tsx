import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rodrigoescobargil.com"),
  title: "Rodrigo Escobar Gil | Jurista, Exmagistrado y Consultor — Colombia",
  description:
    "Exmagistrado y Presidente de la Corte Constitucional de Colombia. Comisionado CIDH–OEA. Doctor en Derecho Administrativo. Consultor jurídico especializado en derecho público, constitucional y derechos humanos.",
  keywords: [
    "Rodrigo Escobar Gil",
    "exmagistrado Corte Constitucional",
    "abogado Colombia",
    "derecho constitucional",
    "derecho administrativo",
    "derechos humanos",
    "CIDH",
    "consultor jurídico Bogotá",
  ],
  authors: [{ name: "Rodrigo Escobar Gil" }],
  creator: "Rodrigo Escobar Gil",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: "https://rodrigoescobargil.com",
    siteName: "Rodrigo Escobar Gil",
    title: "Rodrigo Escobar Gil | Jurista, Exmagistrado y Consultor",
    description:
      "Exmagistrado y Presidente de la Corte Constitucional de Colombia. Comisionado CIDH–OEA. Consultor jurídico en derecho público y derechos humanos.",
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
      "Exmagistrado y Presidente de la Corte Constitucional de Colombia. Comisionado CIDH–OEA.",
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
    canonical: "https://rodrigoescobargil.com",
    languages: {
      "es-CO": "https://rodrigoescobargil.com",
      "en-US": "https://rodrigoescobargil.com/en",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rodrigo Escobar Gil",
  jobTitle: "Jurista, Consultor Jurídico y Exmagistrado",
  description:
    "Exmagistrado y Presidente de la Corte Constitucional de Colombia (2001–2009). Comisionado y Relator de la CIDH–OEA (2010–2014). Doctor en Derecho Administrativo, Universidad Complutense de Madrid.",
  url: "https://rodrigoescobargil.com",
  image: "https://rodrigoescobargil.com/og-image.jpg",
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
  worksFor: {
    "@type": "LegalService",
    name: "Rodrigo Escobar Gil Consultores",
    address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
  },
  nationality: "Colombian",
  knowsAbout: [
    "Derecho Constitucional",
    "Derecho Administrativo",
    "Derechos Humanos",
    "Derecho Internacional",
    "Contratación Pública",
  ],
  sameAs: [
    "https://www.oas.org/es/cidh/ppl/docs/pdf/CVEscobarGilVEES.pdf",
    "https://dialnet.unirioja.es/servlet/autor?codigo=531354",
    "https://www.corteconstitucional.gov.co",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
