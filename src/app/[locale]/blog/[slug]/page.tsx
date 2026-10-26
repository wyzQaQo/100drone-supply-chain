import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { BLOG_POSTS } from "@/data/blog";

function ArrowLeft({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

// Static blog posts data (SSG)

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata {
  // Note: generateMetadata doesn't support async in this version
  // We'll handle this with default metadata
  return constructMetadata({
    title: "Blog Article",
    description: "UAV supply chain insights from 100Drone.",
    path: "/blog",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-[#00D4FF] transition-colors mb-8"
        >
          <ArrowLeft size={12} />
          Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-1 border border-white/[0.08] text-[#00D4FF]/50">
              {post.tags[0]}
            </span>
            <span className="font-mono text-[10px] text-white/25">
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-white/80">
            {post.title}
          </h1>
          <p className="mt-4 text-white/40 text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-headings:text-white/80 prose-headings:font-bold prose-p:text-white/40 prose-p:leading-relaxed prose-li:text-white/40 prose-strong:text-white/60 prose-a:text-[#00D4FF] prose-a:no-underline hover:prose-a:underline max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-bold text-xl text-white/70 mt-10 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="font-bold text-lg text-white/60 mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="space-y-2 my-4">
                  {paragraph.split("\n").map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-white/40 text-sm"
                    >
                      <span className="text-[#00D4FF]/40 mt-1">+</span>
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-white/40 leading-relaxed my-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 border border-[#00D4FF]/10 bg-[#00D4FF]/[0.02]">
          <h3 className="font-bold text-lg text-white/70 mb-2">
            Need UAV Components from China?
          </h3>
          <p className="text-white/30 text-sm leading-relaxed mb-4">
            Submit an RFQ and we&apos;ll match you with qualified suppliers within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#00D4FF]/90 transition-all"
          >
            Submit RFQ
          </Link>
        </div>
      </div>
    </article>
  );
}
