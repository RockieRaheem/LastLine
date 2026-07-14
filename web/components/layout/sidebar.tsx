import Link from "next/link";
import { NAV_ITEMS, type NavKey } from "./nav-items";

const TRUSTBRIDGE_LOGO =
  "https://lh3.googleusercontent.com/aida/AP1WRLvGfSr7U9D8ihJYmKjExmaj5cdAJ1O05ICyu-xIML7gZN-j_Xde3LUJpKsfDTmCBJa1-Q7qQnYozN08maCwDTeaKfs6elRJ4_K90i6Toj02Zw515qInm7UULwa-P1I7j6lyph7vhUmuNQg0HUf2iLMZ28NcQqNv35rgv6SVVWsK5NUPgcieA8H47ServJC8a_r7TbuDN9oMKWprdYYNIcShePjShR6LYDQmwe_XikZPcNgAb6_Sc880N3A";

export function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="bg-surface-container border-r border-outline-variant h-screen w-64 hidden md:flex flex-col p-stack-md space-y-stack-sm flex-shrink-0">
      <div className="flex items-center gap-3 px-2 py-4 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="TrustBridge Logo" className="h-10 w-auto object-contain" src={TRUSTBRIDGE_LOGO} />
      </div>
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl active:opacity-80 duration-150"
                  : "flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-all"
              }
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-body-md text-body-md">{item.label}</span>
              {item.badge ? (
                <span className="ml-auto bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <button className="w-full bg-primary text-on-primary font-bold py-3 rounded-xl hover:opacity-90 transition-opacity mb-4">
        Approve Batch
      </button>
      <div className="border-t border-outline-variant pt-4 space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-all"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-body-md">Settings</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-all"
        >
          <span className="material-symbols-outlined">help_outline</span>
          <span className="text-body-md">Support</span>
        </Link>
      </div>
    </aside>
  );
}

export { TRUSTBRIDGE_LOGO };
