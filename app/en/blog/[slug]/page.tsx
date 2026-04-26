import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPostsEn } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPostsEn.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsEn.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Rodrigo Escobar Gil`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: ["Rodrigo Escobar Gil"],
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPostEn({ params }: Props) {
  const post = blogPostsEn.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-28">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <Link
            href="/en/blog"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-[#9a9488] hover:text-[#c9a84c] transition-colors mb-10"
          >
            ← Columns
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#c9a84c]">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.3)]" />
              <time className="text-[10px] font-sans text-[#9a9488]">
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="font-serif text-2xl md:text-4xl font-medium text-[#f5f0e8] leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-[#9a9488] font-sans font-light text-base leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-[11px] font-sans text-[rgba(201,168,76,0.7)]">
                Rodrigo Escobar Gil
              </span>
            </div>
          </header>

          <div className="w-full h-px bg-[rgba(201,168,76,0.12)] mb-12" />

          <div>
            <p className="text-[#9a9488] font-sans font-light text-base leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <p className="text-[rgba(154,148,136,0.6)] font-sans text-sm italic">
              The full text of this article will be available shortly. For further information, please contact Rodrigo Escobar Gil directly.
            </p>
          </div>

          <div className="mt-16 p-6 border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] flex gap-5 items-start">
            <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-sm border border-[rgba(201,168,76,0.2)]">
              <Image
                src="/photos/rodrigo-author.jpg"
                alt="Rodrigo Escobar Gil"
                fill
                className="object-cover object-top"
                sizes="64px"
              />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#c9a84c] mb-2">
                About the author
              </p>
              <p className="font-serif text-sm font-medium text-[#f5f0e8] mb-1">
                Rodrigo Escobar Gil
              </p>
              <p className="font-sans text-xs text-[rgba(154,148,136,0.8)] leading-relaxed">
                PhD in Administrative Law (Universidad Complutense de Madrid). Former Justice and President of the Constitutional Court of Colombia (2001–2009). Former Commissioner and Special Rapporteur of the IACHR–OAS (2010–2014). Founder of Rodrigo Escobar Gil Consultores.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
