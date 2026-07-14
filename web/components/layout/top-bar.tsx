import { TRUSTBRIDGE_LOGO } from "./sidebar";

const ADMIN_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDooJDl6W_qZx9m_HFJoF1u7cx3CrnCIDrEiRHTP9DqDvz4v-UVmfNGU1ETgYFoPp5XgvDUrVfmJ4BWza6-lEEo7_8FB8Mp-c8mjiHAYZdc7M-CphSnKCMkWAmws706DK53JeauRz8k14AM1BVKXPH3P7PDo11e-4ixWtmHQ0X6i1yqgUwNfgbHQ5-Z9dIbAGuKAEy9MxtDQ6GT-yws7Vq7pdIHyGS4YfPjX2errn4XK5vPVWA6MdM-";

export function TopBar() {
  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-gutter h-16 flex-shrink-0 z-10">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="TrustBridge Logo" className="h-8 w-auto object-contain" src={TRUSTBRIDGE_LOGO} />
        <h1 className="text-headline-md font-headline-md font-bold text-primary hidden sm:block">
          TrustBridge
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
          <span className="material-symbols-outlined text-[18px]">wifi</span>
          <span className="text-label-mono font-label-mono">Online</span>
        </div>
        <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-body-md font-bold text-on-surface">Admin User</p>
            <p className="text-[10px] text-on-surface-variant">Regional Director</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border-2 border-primary/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Admin avatar" className="w-full h-full object-cover" src={ADMIN_AVATAR} />
          </div>
        </div>
      </div>
    </header>
  );
}
