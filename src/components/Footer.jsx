import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} ender — built for movement</p>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/ender"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/ender"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href="mailto:hello@ender.co"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
