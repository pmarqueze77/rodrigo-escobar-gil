import Link from "next/link";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function Footer({ lang }: Props) {
  const t = getT(lang);
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 bg-[#0a0a0a]"
      style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-sm text-[rgba(245,240,232,0.6)]">Rodrigo Escobar Gil</span>
          <span className="text-[10px] tracking-[0.15em] uppercase font-sans text-[rgba(154,148,136,0.5)]">
            Rodrigo Escobar Gil Consultores
          </span>
        </div>
        <p className="text-[10px] font-sans text-[rgba(154,148,136,0.4)] tracking-wide">
          © {year} Rodrigo Escobar Gil. {t.footer.rights}
        </p>
        <Link
          href={lang === "es" ? "/en" : "/"}
          className="text-[10px] tracking-[0.2em] uppercase font-sans text-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] transition-colors"
        >
          {lang === "es" ? "English version" : "Versión en español"}
        </Link>
      </div>
    </footer>
  );
}
