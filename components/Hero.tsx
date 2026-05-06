"use client";

import { useEffect, useRef, useState } from "react";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function Hero({ lang }: Props) {
  const t = getT(lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      video.pause();
      setVideoEnded(true);
      return;
    }

    const stopTimer = window.setTimeout(() => {
      video.pause();
      video.currentTime = 0;
      setVideoEnded(true);
    }, 15000);

    return () => window.clearTimeout(stopTimer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background — MP4 first (smaller); WebM as enhancement */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Poster freeze — fades in after video stops */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/videos/hero-poster.jpg')",
          opacity: videoEnded ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay — darker at bottom for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      {/* CTA — bottom center; pure CSS entry */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hero-fade-in hero-delay-1">
        <a
          href="#contacto"
          className="inline-block text-xs tracking-[0.25em] uppercase font-sans font-medium border border-[#c9a84c] text-[#c9a84c] px-8 py-3.5 hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator — pure CSS entry */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-in hero-delay-2">
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans text-[#9a9488]">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
