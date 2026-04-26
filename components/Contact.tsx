"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function Contact({ lang }: Props) {
  const t = getT(lang);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border border-[rgba(201,168,76,0.18)] text-[#f5f0e8] font-sans text-sm px-4 py-3 placeholder:text-[rgba(154,148,136,0.5)] focus:outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors";

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-28 md:py-36 bg-[#0d0d0d]"
      style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              {t.contact.label}
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8] mb-6">
              {t.contact.heading}
            </h2>
            <p className="text-[#9a9488] font-sans font-light text-base leading-relaxed mb-10">
              {t.contact.body}
            </p>

            {/* Office */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm font-sans text-[#9a9488]">{t.contact.office}</span>
              </div>
            </div>

            {/* Decorative quote */}
            <blockquote className="mt-14 border-l-2 border-[#c9a84c] pl-6">
              <p className="font-serif text-base italic text-[rgba(245,240,232,0.5)] leading-relaxed">
                {lang === "es"
                  ? '"La función del jurista es dar certeza y justicia ahí donde el conflicto amenaza el orden democrático."'
                  : '"The jurist\'s function is to give certainty and justice where conflict threatens the democratic order."'}
              </p>
              <footer className="mt-3 text-[10px] tracking-[0.15em] uppercase font-sans text-[rgba(201,168,76,0.5)]">
                — Rodrigo Escobar Gil
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-start justify-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#c9a84c] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-serif text-lg text-[#f5f0e8]">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <input
                  type="text"
                  placeholder={t.contact.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={t.contact.email}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder={t.contact.subject}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className={inputClass}
                />
                <textarea
                  placeholder={t.contact.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {status === "error" && (
                  <p className="text-xs font-sans text-red-400">{t.contact.error}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 self-start text-xs tracking-[0.25em] uppercase font-sans font-medium border border-[#c9a84c] text-[#c9a84c] px-8 py-3.5 hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
