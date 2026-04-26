"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";
import { timelineEs, timelineEn } from "@/lib/data";

interface Props {
  lang: Lang;
}

export default function Timeline({ lang }: Props) {
  const t = getT(lang);
  const items = lang === "es" ? timelineEs : timelineEn;
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="py-28 md:py-36 bg-[#0d0d0d]"
      style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
            {t.trajectory.label}
          </span>
          <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8] max-w-xl">
            {t.trajectory.heading}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] md:left-28 top-0 bottom-0 w-px bg-[rgba(201,168,76,0.15)]" />

          <div className="flex flex-col gap-0">
            {items.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: { year: string; title: string; body: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: Math.min(index * 0.05, 0.3) }}
      className="relative flex gap-8 md:gap-12 pb-10 group"
    >
      {/* Year column */}
      <div className="w-[4.5rem] md:w-24 shrink-0 pt-0.5 text-right">
        <span className="font-serif text-xs md:text-sm font-medium text-[#c9a84c] leading-tight">
          {item.year}
        </span>
      </div>

      {/* Dot */}
      <div className="relative shrink-0 w-3 flex flex-col items-center pt-1.5">
        <div className="w-2 h-2 rounded-full border border-[#c9a84c] bg-[#0d0d0d] group-hover:bg-[#c9a84c] transition-colors duration-300 z-10" />
      </div>

      {/* Content */}
      <div className="pb-2 flex-1 min-w-0">
        <h3 className="font-serif text-base md:text-lg font-medium text-[#f5f0e8] mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  );
}
