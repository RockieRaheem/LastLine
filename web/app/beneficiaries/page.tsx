"use client";

import { AdminShell } from "@/components/layout/admin-shell";
import { Fab } from "@/components/layout/fab";
import type { MobileNavItem } from "@/components/layout/mobile-bottom-nav";

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "registry", label: "Registry", icon: "groups", href: "/beneficiaries" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];

type Status = "Verified" | "Flagged" | "Pending SMS";

interface BeneficiaryRow {
  referenceId: string;
  name: string;
  contact: string;
  initials: string;
  proxy: string;
  region: string;
  status: Status;
  hash: string;
  alert?: boolean;
}

const BENEFICIARIES: BeneficiaryRow[] = [
  {
    referenceId: "TB-392819",
    name: "Amina Mohamed",
    contact: "+254 701 *** 882",
    initials: "AM",
    proxy: "None (Self)",
    region: "Lodwar West",
    status: "Verified",
    hash: "0x72a...f92b",
  },
  {
    referenceId: "TB-392824",
    name: "Ezekiel Kemboi",
    contact: "+254 712 *** 331",
    initials: "EK",
    proxy: "John Lopeyok",
    region: "Kakuma Sub-County",
    status: "Verified",
    hash: "0x31b...a881",
  },
  {
    referenceId: "TB-392830",
    name: "Sarah Teresia",
    contact: "No Phone (Legacy ID)",
    initials: "ST",
    proxy: "Unknown",
    region: "Kalobeyei Settlement",
    status: "Flagged",
    hash: "Pending Hash...",
    alert: true,
  },
  {
    referenceId: "TB-392835",
    name: "James Nderitu",
    contact: "+254 722 *** 119",
    initials: "JN",
    proxy: "Alice Njoki (Spouse)",
    region: "Lodwar Central",
    status: "Pending SMS",
    hash: "0x99c...c340",
  },
  {
    referenceId: "TB-392842",
    name: "Purity Kinya",
    contact: "+254 755 *** 002",
    initials: "PK",
    proxy: "None (Self)",
    region: "Kibish Frontier",
    status: "Verified",
    hash: "0x11e...d772",
  },
];

function StatusChip({ status }: { status: Status }) {
  if (status === "Verified") {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
        Verified
      </span>
    );
  }
  if (status === "Flagged") {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary border border-tertiary-container/20 flex items-center gap-1 w-fit">
        <span className="material-symbols-outlined text-[14px]">priority_high</span>
        Flagged
      </span>
    );
  }
  return (
    <span className="px-3 py-1 rounded-full text-xs font-bold bg-outline-variant/30 text-on-surface-variant border border-outline-variant">
      Pending SMS
    </span>
  );
}

export default function BeneficiaryRegistryPage() {
  return (
    <>
      <AdminShell active="beneficiaries" mobileNavItems={MOBILE_NAV_ITEMS} mobileActive="registry">
        {/* Dashboard Header */}
        <div className="max-w-container-max mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Beneficiary Registry</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Oversight and management of verified last-mile aid recipients.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">file_download</span>
                <span className="font-bold text-body-md">Export Audit</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined">person_add</span>
                <span className="font-bold text-body-md">Manual Entry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview Bento */}
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-mono text-label-mono">TOTAL REGISTERED</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-headline-lg font-headline-lg">12,482</span>
              <span className="text-secondary text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-sm">trending_up</span> 4%
              </span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-secondary">
            <span className="text-on-surface-variant font-label-mono text-label-mono">VERIFIED BY REGISTRAR</span>
            <div className="mt-2 text-headline-lg font-headline-lg text-secondary">98.2%</div>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <span className="text-on-surface-variant font-label-mono text-label-mono">ACTIVE PROXIES</span>
            <div className="mt-2 text-headline-lg font-headline-lg text-on-surface">3,120</div>
          </div>
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-error">
            <span className="text-on-surface-variant font-label-mono text-label-mono">PENDING ALERTS</span>
            <div className="mt-2 text-headline-lg font-headline-lg text-error">14</div>
          </div>
        </div>

        {/* Main Table Section */}
        <div className="max-w-container-max mx-auto glass-panel rounded-xl overflow-hidden shadow-sm">
          {/* Table Toolbar */}
          <div className="p-4 border-b border-outline-variant flex flex-wrap gap-4 items-center justify-between">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-body-md"
                placeholder="Search by ID, Name, or Proxy..."
                type="text"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl text-on-surface-variant text-sm font-bold cursor-pointer hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Regions: Turkana
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl text-on-surface-variant text-sm font-bold cursor-pointer hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined text-lg">verified</span>
                Status: All
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant">
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">
                    REFERENCE ID
                  </th>
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">
                    BENEFICIARY
                  </th>
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">
                    LINKED PROXY
                  </th>
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">REGION</th>
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">STATUS</th>
                  <th className="px-6 py-4 text-label-mono font-label-mono text-on-surface-variant">
                    STELLAR HASH
                  </th>
                  <th className="px-6 py-4 text-right" />
                </tr>
              </thead>
              <tbody>
                {BENEFICIARIES.map((row) => (
                  <tr
                    key={row.referenceId}
                    onClick={() => console.log(`Opening record: ${row.referenceId}`)}
                    className={`zebra-stripe transition-colors cursor-pointer group ${
                      row.alert ? "hover:bg-error-container/10" : "hover:bg-primary-container/10"
                    }`}
                  >
                    <td className="px-6 py-4 font-label-mono text-primary font-bold">{row.referenceId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                            row.alert ? "bg-error-container/20 text-error" : "bg-surface-variant"
                          }`}
                        >
                          {row.initials}
                        </div>
                        <div>
                          <div className="font-bold text-on-surface">{row.name}</div>
                          <div className="text-xs text-on-surface-variant">{row.contact}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{row.proxy}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{row.region}</td>
                    <td className="px-6 py-4">
                      <StatusChip status={row.status} />
                    </td>
                    <td
                      className={`px-6 py-4 font-label-mono text-[10px] text-outline truncate max-w-[120px] ${
                        row.hash === "Pending Hash..." ? "italic" : ""
                      }`}
                    >
                      {row.hash}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-surface-container rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-outline-variant flex items-center justify-between text-body-md">
            <span className="text-on-surface-variant">Showing 1 to 10 of 12,482 beneficiaries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded border border-outline-variant hover:bg-surface-container disabled:opacity-30" disabled>
                <span className="material-symbols-outlined">keyboard_arrow_left</span>
              </button>
              <button className="px-3 py-1 rounded bg-primary text-on-primary font-bold">1</button>
              <button className="px-3 py-1 rounded border border-outline-variant hover:bg-surface-container">2</button>
              <button className="px-3 py-1 rounded border border-outline-variant hover:bg-surface-container">3</button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 rounded border border-outline-variant hover:bg-surface-container">1249</button>
              <button className="px-3 py-1 rounded border border-outline-variant hover:bg-surface-container">
                <span className="material-symbols-outlined">keyboard_arrow_right</span>
              </button>
            </div>
          </div>
        </div>
      </AdminShell>
      <Fab icon="add" label="Register New" href="/field-registration" />
    </>
  );
}
