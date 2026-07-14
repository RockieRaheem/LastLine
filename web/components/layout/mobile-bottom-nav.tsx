import Link from "next/link";

export interface MobileNavItem {
  key: string;
  label: string;
  icon: string;
  href: string;
  filled?: boolean;
}

export function MobileBottomNav({
  items,
  active,
}: {
  items: MobileNavItem[];
  active: string;
}) {
  return (
    <nav className="fixed bottom-3 left-3 right-3 flex justify-around items-center h-16 px-2 card-surface elevate-lg bg-surface/95 backdrop-blur-md md:hidden z-50 rounded-full">
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={
              isActive
                ? "flex flex-col items-center justify-center gap-0.5 bg-primary text-on-primary rounded-full px-5 py-2 transition-transform active:scale-90 duration-200 shadow-sm shadow-primary/30"
                : "focus-ring flex flex-col items-center justify-center gap-0.5 text-on-surface-variant px-4 py-2 active:scale-90 transition-transform duration-200"
            }
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="text-[9px] font-bold font-body-md">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
