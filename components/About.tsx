"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function About({ lang }: Props) {
  const t = getT(lang);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [t.about.stat1, t.about.stat2, t.about.stat3];

  return (
    <section id="sobre" ref={ref} className="py-28 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              {t.about.label}
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8] leading-tight mb-8">
              {t.about.heading}
            </h2>
            <p className="text-[#9a9488] font-sans font-light leading-relaxed text-base">
              {t.about.body}
            </p>
            <a
              href="/cv-rodrigo-escobar-gil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans font-medium text-[#c9a84c] border-b border-[rgba(201,168,76,0.4)] pb-1 hover:border-[#c9a84c] transition-colors"
            >
              {t.about.downloadCv}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right: Stats + portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Portrait — retrato oficial OEA/CIDH */}
            <div className="relative w-full aspect-[4/5] bg-[#161616] border border-[rgba(201,168,76,0.12)] overflow-hidden">
              {/* Decorative corner marks */}
              <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#c9a84c] opacity-60 z-10" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#c9a84c] opacity-60 z-10" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#c9a84c] opacity-60 z-10" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#c9a84c] opacity-60 z-10" />
              <Image
                src="/photos/rodrigo-portrait.jpg"
                alt="Rodrigo Escobar Gil — Comisionado CIDH, OEA"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle bottom gradient */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 z-10"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), transparent)" }}
              />
              {/* Institutional caption */}
              <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                <span className="text-[9px] tracking-[0.25em] uppercase font-sans text-[rgba(201,168,76,0.7)]">
                  CIDH · OEA
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#0a0a0a] px-4 py-5 flex flex-col items-center text-center"
                >
                  <span className="font-serif text-xl md:text-2xl font-semibold text-[#c9a84c]">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-[10px] tracking-[0.1em] uppercase font-sans text-[#9a9488] leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
