import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-16">
      <div className="text-center px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E61919]/50 mb-6">
          [ERROR 404]
        </div>
        <h1 className="font-black text-6xl md:text-8xl tracking-tighter text-white/10 mb-4">
          404
        </h1>
        <p className="text-white/40 text-lg mb-2">Page not found</p>
        <p className="text-white/20 text-sm mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.08] hover:border-[#00D4FF]/30 font-mono text-[11px] uppercase tracking-[0.15em] text-white/50 hover:text-[#00D4FF] transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
