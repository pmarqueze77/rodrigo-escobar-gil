"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";
import { publicationsEs, publicationsEn } from "@/lib/data";

interface Props {
  lang: Lang;
}

const typeIcons: Record<string, string> = {
  book: "↗",
  chapter: "§",
  article: "◉",
  speech: "◈",
};

const academicActivity = {
  es: [
    "Miembro de la Academia Colombiana de la Abogacía (desde 2006).",
    "Profesor universitario de Derecho Administrativo.",
    "Director académico de diplomados en contratación administrativa, Universidad de La Sabana (1999–2000).",
    "Conferencista en programas de administración pública y contratación administrativa (1998–2000).",
    "Consultor internacional, Banco Interamericano de Desarrollo — Reformas Institucionales para América Latina.",
    "Consultor, ACNUR — Mecanismos de restitución de tierras y solución alternativa de conflictos.",
  ],
  en: [
    "Member, Academia Colombiana de la Abogacía (since 2006).",
    "University professor of Administrative Law.",
    "Academic director of public procurement programmes, Universidad de La Sabana (1999–2000).",
    "Lecturer in public administration and state contracting (1998–2000).",
    "International consultant, Inter-American Development Bank — Institutional Reforms for Latin America.",
    "Consultant, UNHCR — Land restitution mechanisms and alternative dispute resolution.",
  ],
};

export default function Academia({ lang }: Props) {
  const t = getT(lang);
  const publications = lang === "es" ? publicationsEs : publicationsEn;
  const activity = academicActivity[lang];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="academia"
      ref={ref}
      className="py-28 md:py-36 bg-[#0d0d0d]"
      style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
            {t.academia.label}
          </span>
          <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8]">
            {t.academia.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-8">
              {t.academia.booksTitle}
            </h3>
            <div className="flex flex-col gap-0">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="group flex gap-4 py-5 border-b border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.25)] transition-colors"
                >
                  <span className="text-[#c9a84c] text-xs font-sans w-10 shrink-0 pt-0.5">
                    {pub.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a84c] text-xs mt-0.5 shrink-0">
                        {typeIcons[pub.type]}
                      </span>
                      <p className="font-serif text-sm text-[#f5f0e8] leading-snug italic">
                        {pub.title}
                      </p>
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#9a9488] font-sans pl-4">
                      {pub.publisher}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/cv-rodrigo-escobar-gil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans font-medium text-[#c9a84c] border-b border-[rgba(201,168,76,0.4)] pb-1 hover:border-[#c9a84c] transition-colors"
            >
              {t.academia.downloadCv}
            </a>
          </motion.div>

          {/* Academic activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-8">
              {t.academia.academicTitle}
            </h3>
            <div className="flex flex-col gap-4">
              {activity.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c] shrink-0" />
                  <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Notable affiliations */}
            <div className="mt-12 p-6 border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)]">
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#c9a84c] block mb-4">
                {lang === "es" ? "Afiliaciones" : "Affiliations"}
              </span>
              <div className="flex flex-wrap gap-3">
                {["CIDH — OEA", "BID", "ACNUR", "Academia Colombiana de la Abogacía", "Corte Constitucional"].map(
                  (aff) => (
                    <span
                      key={aff}
                      className="text-[10px] tracking-[0.1em] uppercase font-sans text-[#9a9488] border border-[rgba(201,168,76,0.15)] px-2.5 py-1"
                    >
                      {aff}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
