"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

const icons = [
  /* Constitutional */
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 22h18M6 18V10M10 18V10M14 18V10M18 18V10M2 10l10-7 10 7"/>
  </svg>,
  /* Administrative */
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
  </svg>,
  /* Human Rights */
  <svg key="h" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  /* Litigation */
  <svg key="l" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>,
  /* Consulting */
  <svg key="co" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
  </svg>,
];

export default function Practice({ lang }: Props) {
  const t = getT(lang);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="practica"
      ref={ref}
      className="py-28 md:py-36 bg-[#0a0a0a]"
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
            {t.practice.label}
          </span>
          <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8]">
            {t.practice.heading}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
          {t.practice.areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-[#0a0a0a] p-8 hover:bg-[#111111] transition-colors duration-300 cursor-default"
            >
              <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {icons[i]}
              </div>
              <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-3 leading-snug">
                {area.title}
              </h3>
              <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed">
                {area.desc}
              </p>
              <div className="mt-6 w-6 h-px bg-[rgba(201,168,76,0)] group-hover:bg-[#c9a84c] group-hover:w-10 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Filler card for 5-item grid on lg screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hidden lg:flex bg-[#0a0a0a] items-end p-8"
          >
            <a
              href="#contacto"
              className="text-xs tracking-[0.2em] uppercase font-sans font-medium text-[#c9a84c] border-b border-[rgba(201,168,76,0.4)] pb-1 hover:border-[#c9a84c] transition-colors"
            >
              {lang === "es" ? "Consultar →" : "Inquire →"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
