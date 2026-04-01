import { Mail } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">Yujia Zhang</p>
            <p className="text-sm text-muted mt-1">
              Industrial mathematician &middot; CFA Level I
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yujia-zhang-94417a295/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-2.5 text-muted hover:text-foreground hover:border-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:yujia.zhang.uom@gmail.com"
              className="rounded-full border border-border p-2.5 text-muted hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Yujia Zhang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
