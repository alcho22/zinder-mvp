import Link from "next/link";
import type { ReactNode } from "react";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/requests", label: "Requests" },
  { href: "/quotes", label: "Quotes" },
  { href: "/reviews", label: "Reviews" },
  { href: "/notifications", label: "Notifications" },
  { href: "/chat", label: "Chat" },
  { href: "/wallet", label: "Wallet" },
];

const adminNav = [
  { href: "/admin/services", label: "Service Options" },
  { href: "/admin/providers", label: "Providers" },
  { href: "/admin/provider-services", label: "Provider-Service Explorer" },
];

type AppShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function AppShell({ eyebrow, title, description, children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 lg:px-10">
        <header className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              {eyebrow}
            </span>
            <span className="text-slate-500">Zinder MVP frontend scaffold</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="max-w-3xl text-base leading-7 text-slate-300">{description}</p>
          </div>

          <div className="space-y-4">
            <NavBlock title="Core pages" items={primaryNav} />
            <NavBlock title="Admin pages" items={adminNav} />
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}

type NavBlockProps = {
  title: string;
  items: { href: string; label: string }[];
};

function NavBlock({ title, items }: NavBlockProps) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-slate-400">{title}</div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/5"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
