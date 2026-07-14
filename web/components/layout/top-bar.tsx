import { TRUSTBRIDGE_LOGO } from "./sidebar";

const ADMIN_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDooJDl6W_qZx9m_HFJoF1u7cx3CrnCIDrEiRHTP9DqDvz4v-UVmfNGU1ETgYFoPp5XgvDUrVfmJ4BWza6-lEEo7_8FB8Mp-c8mjiHAYZdc7M-CphSnKCMkWAmws706DK53JeauRz8k14AM1BVKXPH3P7PDo11e-4ixWtmHQ0X6i1yqgUwNfgbHQ5-Z9dIbAGuKAEy9MxtDQ6GT-yws7Vq7pdIHyGS4YfPjX2errn4XK5vPVWA6MdM-";

export function TopBar({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <header className="bg-surface/95 backdrop-blur-md border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-gutter h-16 flex-shrink-0 z-10">
      <div className="flex items-center gap-3 min-w-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="TrustBridge Logo" className="h-8 w-auto object-contain md:hidden" src={TRUSTBRIDGE_LOGO} />
        {title ? (
          <div className="min-w-0 flex flex-col leading-tight">
            <h1 className="text-body-lg md:text-headline-md font-headline-md font-bold text-on-surface truncate">
              {title}
            </h1>
            {subtitle ? <p className="hidden sm:block text-[11px] text-on-surface-variant truncate">{subtitle}</p> : null}
          </div>
        ) : (
          <h1 className="text-headline-md font-headline-md font-bold text-on-surface md:hidden">TrustBridge</h1>
        )}
      </div>

      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full border border-outline-variant w-72 focus-within:border-primary/40 transition-colors">
        <span className="material-symbols-outlined text-[18px] text-outline">search</span>
        <input
          className="bg-transparent border-none focus:ring-0 text-sm w-full font-body-md placeholder:text-outline"
          placeholder="Search beneficiaries, batches, IDs…"
          type="text"
        />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-secondary-container/60 text-on-secondary-container rounded-full border border-secondary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-label-mono font-label-mono text-[11px] uppercase tracking-wide">Online</span>
        </div>

        <button className="focus-ring hidden sm:flex relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-error" />
        </button>

        <div className="flex items-center gap-3 border-l border-outline-variant pl-3 md:pl-5">
          <div className="text-right hidden sm:block leading-tight">
            <p className="text-[13px] font-bold text-on-surface">Admin User</p>
            <p className="text-[10px] text-on-surface-variant">Regional Director</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden ring-2 ring-primary/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Admin avatar" className="w-full h-full object-cover" src={ADMIN_AVATAR} />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary border-2 border-surface" />
          </div>
        </div>
      </div>
    </header>
  );
}
