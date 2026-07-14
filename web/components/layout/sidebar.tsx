import Link from "next/link";
import { NAV_ITEMS, type NavKey } from "./nav-items";

const TRUSTBRIDGE_LOGO =
  "https://lh3.googleusercontent.com/aida/AP1WRLvGfSr7U9D8ihJYmKjExmaj5cdAJ1O05ICyu-xIML7gZN-j_Xde3LUJpKsfDTmCBJa1-Q7qQnYozN08maCwDTeaKfs6elRJ4_K90i6Toj02Zw515qInm7UULwa-P1I7j6lyph7vhUmuNQg0HUf2iLMZ28NcQqNv35rgv6SVVWsK5NUPgcieA8H47ServJC8a_r7TbuDN9oMKWprdYYNIcShePjShR6LYDQmwe_XikZPcNgAb6_Sc880N3A";

const GROUPS: Array<"Operations" | "Oversight"> = ["Operations", "Oversight"];

export function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="bg-surface-container border-r border-outline-variant h-screen w-72 hidden md:flex flex-col p-stack-md flex-shrink-0">
      <div className="flex items-center gap-2.5 px-2 py-4 mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="TrustBridge Logo" className="h-9 w-auto object-contain" src={TRUSTBRIDGE_LOGO} />
        <div className="flex flex-col leading-none">
          <span className="text-body-lg font-headline-md font-extrabold text-primary tracking-tight">
            TrustBridge
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline">Portal</span>
        </div>
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto custom-scrollbar pr-1">
        {GROUPS.map((group) => (
          <div key={group} className="space-y-1">
            <p className="px-4 text-[10px] font-bold uppercase tracking-[0.15em] text-outline mb-1.5">{group}</p>
            {NAV_ITEMS.filter((item) => item.group === group).map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={
                    isActive
                      ? "nav-active-bar flex items-center gap-3 px-4 py-2.5 bg-primary text-on-primary font-bold rounded-xl shadow-sm shadow-primary/30 active:opacity-90 duration-150"
                      : "focus-ring flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all"
                  }
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span className="font-body-md text-[14px]">{item.label}</span>
                  {item.badge ? (
                    <span
                      className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/25 text-white" : "bg-error text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="pt-4 mt-2 border-t border-outline-variant space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-all text-[14px]"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
          <span>Settings</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-all text-[14px]"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
          <span>Support</span>
        </Link>
      </div>

      <button className="focus-ring w-full mt-3 bg-primary text-on-primary font-bold py-3 rounded-xl hover:brightness-110 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-primary/30">
        <span className="material-symbols-outlined text-[18px]">check_circle</span>
        Approve Batch
      </button>

      <div className="mt-4 flex items-center gap-2 px-2 text-outline">
        <span className="material-symbols-outlined text-[14px]">hub</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Powered by Stellar SDP</span>
      </div>
    </aside>
  );
}

export { TRUSTBRIDGE_LOGO };
