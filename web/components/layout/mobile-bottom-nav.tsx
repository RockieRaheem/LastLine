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
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-2 bg-surface border-t border-outline-variant backdrop-blur-md shadow-lg md:hidden z-50 rounded-t-full">
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={
              isActive
                ? "flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-1 transition-transform active:scale-90 duration-200"
                : "flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:bg-surface-variant transition-transform active:scale-90 duration-200"
            }
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-body-md">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
