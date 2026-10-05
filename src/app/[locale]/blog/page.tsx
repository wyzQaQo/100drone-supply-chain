import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

function ArrowRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export const metadata: Metadata = constructMetadata({
  title: "Blog — UAV Supply Chain Insights",
  description:
    "Expert insights on China's UAV manufacturing ecosystem, drone component sourcing strategies, quality control, and supply chain management.",
  path: "/blog",
});

const POSTS = [
  {
    slug: "china-uav-supply-chain-guide",
    title: "The Complete Guide to China's UAV Supply Chain",
    excerpt:
      "Understanding the manufacturing ecosystem that produces the majority of the world's commercial drone components — from Shenzhen's electronics to Dongguan's precision machining.",
    date: "2025-11-15",
    tags: ["Supply Chain", "Manufacturing"],
  },
  {
    slug: "drone-component-sourcing-strategy",
    title: "5 Strategies for Sourcing Drone Components from China",
    excerpt:
      "How to navigate China's component market, qualify suppliers, and build a reliable supply chain for your UAV program.",
    date: "2025-10-28",
    tags: ["Sourcing", "Strategy"],
  },
  {
    slug: "quality-control-uav-manufacturing",
    title: "Quality Control in Chinese UAV Manufacturing: A Practical Framework",
    excerpt:
      "What to inspect, when to inspect, and how to ensure your Chinese-manufactured drone components meet international standards.",
    date: "2025-10-10",
    tags: ["Quality Control", "Manufacturing"],
  },
  {
    slug: "shenzhen-drone-ecosystem",
    title: "Why Shenzhen Dominates the Global Drone Industry",
    excerpt:
      "The unique combination of electronics expertise, manufacturing density, and supply chain speed that makes Shenzhen the world's drone capital.",
    date: "2025-09-22",
    tags: ["Shenzhen", "Industry"],
  },
  {
    slug: "carbon-fiber-drone-parts-china",
    title: "Carbon Fiber UAV Components: Sourcing from China",
    excerpt:
      "A procurement guide for carbon fiber airframe parts, including supplier qualification, quality standards, and cost considerations.",
    date: "2025-09-05",
    tags: ["Materials", "Components"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
            Insights
          </span>
          <h1 className="mt-4 font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl">
            UAV Supply Chain
            <br />
            <span className="text-[#00D4FF]">Intelligence</span>
          </h1>
          <p className="mt-6 text-white/40 max-w-xl text-lg leading-relaxed">
            Expert analysis on China&apos;s drone manufacturing ecosystem, sourcing
            strategies, and supply chain management.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured post (spans 2) */}
          <Link
            href={`/blog/${POSTS[0].slug}`}
            className="group md:col-span-2 lg:col-span-2 row-span-2 p-8 md:p-10 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/15 transition-all duration-500 flex flex-col justify-end"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/40">
                {POSTS[0].tags[0]}
              </span>
              <span className="text-white/15">/</span>
              <span className="font-mono text-[10px] text-white/25">
                {formatDate(POSTS[0].date)}
              </span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl text-white/70 group-hover:text-white transition-colors leading-tight">
              {POSTS[0].title}
            </h2>
            <p className="mt-4 text-white/30 text-base leading-relaxed max-w-2xl">
              {POSTS[0].excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/40 group-hover:text-[#00D4FF]/70 transition-colors">
              Read Article <ArrowRight size={12} />
            </div>
          </Link>

          {/* Remaining posts */}
          {POSTS.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 md:p-8 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/15 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/40">
                  {post.tags[0]}
                </span>
                <span className="text-white/15">/</span>
                <span className="font-mono text-[10px] text-white/25">
                  {formatDate(post.date)}
                </span>
              </div>
              <h2 className="font-bold text-lg text-white/60 group-hover:text-white transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="mt-2 text-white/25 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/30 group-hover:text-[#00D4FF]/60 transition-colors">
                Read <ArrowRight size={10} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
