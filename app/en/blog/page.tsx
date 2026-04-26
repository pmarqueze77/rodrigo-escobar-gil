import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPostsEn } from "@/lib/data";

export const metadata: Metadata = {
  title: "Opinion Columns | Rodrigo Escobar Gil",
  description:
    "Legal analysis and academic reflection on constitutional law, administrative law, and human rights, by Rodrigo Escobar Gil.",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexEn() {
  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-14">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-[#c9a84c]">
              Opinion Columns
            </span>
            <div className="w-10 h-px bg-[#c9a84c] mt-3 mb-8" />
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-[#f5f0e8]">
              Legal analysis and academic reflection
            </h1>
          </div>

          <div className="flex flex-col gap-0">
            {blogPostsEn.map((post) => (
              <article
                key={post.slug}
                className="group py-8 border-b border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.25)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#c9a84c]">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.3)]" />
                  <time className="text-[10px] font-sans text-[#9a9488]">
                    {formatDate(post.date)}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.3)]" />
                  <span className="text-[10px] font-sans text-[#9a9488]">{post.readTime}</span>
                </div>
                <Link href={`/en/blog/${post.slug}`}>
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-[#f5f0e8] mb-3 group-hover:text-[#dfc07a] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-[#9a9488] font-sans font-light text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/en/blog/${post.slug}`}
                  className="text-[10px] tracking-[0.15em] uppercase font-sans text-[#c9a84c] flex items-center gap-1.5 w-fit border-b border-[rgba(201,168,76,0.3)] pb-px hover:border-[#c9a84c] transition-colors"
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
