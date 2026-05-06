"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function Navbar({ lang }: Props) {
  const t = getT(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // rAF-throttled scroll listener
  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking = false;
      });
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const otherLang = lang === "es" ? "en" : "es";
  const otherHref = lang === "es" ? "/en" : "/";

  const navLinks = useMemo(
    () => [
      { href: "#sobre", label: t.nav.about },
      { href: "#trayectoria", label: t.nav.trajectory },
      { href: "#practica", label: t.nav.practice },
      { href: "#academia", label: t.nav.academia },
      { href: "#blog", label: t.nav.blog },
      { href: "#contacto", label: t.nav.contact },
    ],
    [t.nav]
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[rgba(201,168,76,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link href={lang === "es" ? "/" : "/en"} className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-wide text-[#f5f0e8]">
            Rodrigo Escobar Gil
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] font-sans font-medium mt-1">
            Jurista · Consultor
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.12em] uppercase font-sans font-medium text-[#9a9488] hover:text-[#c9a84c] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={otherHref}
            className="ml-4 text-[10px] tracking-[0.2em] uppercase font-sans font-medium border border-[rgba(201,168,76,0.3)] text-[#c9a84c] px-3 py-1.5 hover:bg-[rgba(201,168,76,0.08)] transition-colors"
            aria-label={otherLang === "en" ? "Switch to English" : "Cambiar a Español"}
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-[rgba(201,168,76,0.12)] px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm tracking-[0.15em] uppercase font-sans font-medium text-[#9a9488] hover:text-[#c9a84c] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={otherHref}
            onClick={closeMenu}
            className="self-start text-[10px] tracking-[0.2em] uppercase border border-[rgba(201,168,76,0.3)] text-[#c9a84c] px-3 py-1.5"
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>
      )}
    </nav>
  );
}
