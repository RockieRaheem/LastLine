import Link from "next/link";

export function Fab({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <Link
      href={href}
      className="focus-ring fixed bottom-28 right-5 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-on-primary rounded-full elevate-lg flex items-center justify-center hover:scale-105 hover:brightness-110 active:scale-95 transition-all z-20 group"
    >
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
      <span className="absolute right-16 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        {label}
      </span>
    </Link>
  );
}
