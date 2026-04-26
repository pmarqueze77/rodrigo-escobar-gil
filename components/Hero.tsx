"use client";

import { useEffect, useRef, useState } from "react";
import { type Lang, getT } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export default function Hero({ lang }: Props) {
  const t = getT(lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const stopTimer = setTimeout(() => {
      video.pause();
      video.currentTime = 0;
      setVideoEnded(true);
    }, 15000);
    return () => clearTimeout(stopTimer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
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

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* CTA — bottom center */}
      <div
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <a
          href="#contacto"
          className="inline-block text-xs tracking-[0.25em] uppercase font-sans font-medium border border-[#c9a84c] text-[#c9a84c] px-8 py-3.5 hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1100ms] ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans text-[#9a9488]">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
