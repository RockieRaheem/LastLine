import Link from "next/link";

export function Fab({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <Link
      href={href}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-20 group"
    >
      <span className="material-symbols-outlined text-[32px]">{icon}</span>
      <span className="absolute right-16 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </Link>
  );
}
