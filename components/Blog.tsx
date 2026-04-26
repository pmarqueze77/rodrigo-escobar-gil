"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { type Lang, getT } from "@/lib/i18n";
import { blogPostsEs, blogPostsEn } from "@/lib/data";

interface Props {
  lang: Lang;
  limit?: number;
}

function formatDate(dateStr: string, lang: Lang): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(lang === "es" ? "es-CO" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog({ lang, limit = 4 }: Props) {
  const t = getT(lang);
  const posts = (lang === "es" ? blogPostsEs : blogPostsEn).slice(0, limit);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blogBasePath = lang === "es" ? "/blog" : "/en/blog";

  return (
    <section
      id="blog"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              {t.blog.label}
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8]">
              {t.blog.heading}
            </h2>
          </div>
          <Link
            href={blogBasePath}
            className="self-start md:self-auto text-xs tracking-[0.2em] uppercase font-sans font-medium text-[#c9a84c] border-b border-[rgba(201,168,76,0.4)] pb-1 hover:border-[#c9a84c] transition-colors shrink-0"
          >
            {t.blog.viewAll} →
          </Link>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.1)]">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#c9a84c]">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.3)]" />
                <span className="text-[10px] font-sans text-[#9a9488]">{post.readTime}</span>
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-[#f5f0e8] leading-snug mb-4 group-hover:text-[#dfc07a] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-[10px] font-sans text-[rgba(154,148,136,0.6)]">
                  {formatDate(post.date, lang)}
                </time>
                <Link
                  href={`${blogBasePath}/${post.slug}`}
                  className="text-[10px] tracking-[0.15em] uppercase font-sans text-[#c9a84c] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {t.blog.readMore}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
