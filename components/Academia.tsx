"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";
import {
  publicationsEs, publicationsEn,
  sentenciasEs, sentenciasEn,
  distinciones,
  catedraEs, catedraEn,
} from "@/lib/data";

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
    "Consultor internacional, Banco Interamericano de Desarrollo — Reformas Institucionales para América Latina (1999).",
    "Consultor, ACNUR — Mecanismos de restitución de tierras y solución alternativa de conflictos (2009).",
    "Relator de país CIDH para México, Argentina, Costa Rica y República Dominicana (2010–2014).",
    "Director del Informe sobre el Uso de la Prisión Preventiva en las Américas, CIDH, Washington, diciembre de 2013.",
  ],
  en: [
    "Member, Academia Colombiana de la Abogacía (since 2006).",
    "International consultant, Inter-American Development Bank — Institutional Reforms for Latin America (1999).",
    "Consultant, UNHCR — Land restitution mechanisms and alternative dispute resolution (2009).",
    "IACHR Country Rapporteur for Mexico, Argentina, Costa Rica and the Dominican Republic (2010–2014).",
    "Director of the Report on the Use of Pretrial Detention in the Americas, IACHR, Washington, December 2013.",
  ],
};

export default function Academia({ lang }: Props) {
  const t = getT(lang);
  const publications = lang === "es" ? publicationsEs : publicationsEn;
  const sentencias = lang === "es" ? sentenciasEs : sentenciasEn;
  const catedra = lang === "es" ? catedraEs : catedraEn;
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

        {/* ── Header ── */}
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

        {/* ── Publications + Activity grid ── */}
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

          {/* Activity + Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Academic activity */}
            <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-8">
              {t.academia.academicTitle}
            </h3>
            <div className="flex flex-col gap-4 mb-12">
              {activity.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c] shrink-0" />
                  <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Teaching */}
            <h3 className="font-serif text-base font-medium text-[#f5f0e8] mb-5">
              {t.academia.catedraTitle}
            </h3>
            <div className="flex flex-col gap-0 mb-12">
              {catedra.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 py-3 border-b border-[rgba(201,168,76,0.08)]"
                >
                  <div>
                    <p className="font-sans text-sm text-[#f5f0e8]">{c.uni}</p>
                    <p className="text-[11px] text-[#9a9488] font-sans mt-0.5">{c.subject}</p>
                  </div>
                  <span className="text-[11px] font-sans text-[#c9a84c] shrink-0">{c.period}</span>
                </div>
              ))}
            </div>

            {/* Affiliations */}
            <div className="p-6 border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)]">
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

        {/* ── Landmark Decisions ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24"
        >
          <div className="mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              {t.academia.sentenciasTitle}
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)]">
            {sentencias.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                className="bg-[#0d0d0d] p-6 hover:bg-[#111] transition-colors duration-300 group"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#c9a84c] font-medium">
                  {s.id}
                </span>
                <h4 className="font-serif text-sm font-medium text-[#f5f0e8] mt-2 mb-3 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-[#9a9488] font-sans font-light text-xs leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Distinctions ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24"
        >
          <div className="mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              {t.academia.distincionesTitle}
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3" />
          </div>

          <div className="flex flex-col gap-0">
            {distinciones.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className="flex items-start gap-6 py-5 border-b border-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.2)] transition-colors group"
              >
                <span className="font-sans text-xs text-[#c9a84c] w-10 shrink-0 pt-0.5">
                  {d.year}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm text-[#f5f0e8] leading-snug">
                    {d.title}
                  </p>
                  <p className="mt-1 text-[11px] text-[#9a9488] font-sans">
                    {d.entity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
