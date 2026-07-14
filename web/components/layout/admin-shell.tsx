import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";
import { MobileBottomNav, type MobileNavItem } from "./mobile-bottom-nav";
import type { NavKey } from "./nav-items";

export function AdminShell({
  active,
  mobileNavItems,
  mobileActive,
  children,
}: {
  active: NavKey;
  mobileNavItems: MobileNavItem[];
  mobileActive: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active={active} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-y-auto p-4 md:p-stack-lg custom-scrollbar pb-24 md:pb-4">
          {children}
        </div>
        <MobileBottomNav items={mobileNavItems} active={mobileActive} />
      </main>
    </div>
  );
}
