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
  avatarTone: string;
  proxy: string;
  region: string;
  status: Status;
  hash: string;
  payoutChannel: string;
  alert?: boolean;
}

const BENEFICIARIES: BeneficiaryRow[] = [
  {
    referenceId: "TB-392819",
    name: "Amina Mohamed",
    contact: "+254 701 *** 882",
    initials: "AM",
    avatarTone: "bg-primary-container/20 text-primary",
    proxy: "None (Self)",
    region: "Lodwar West",
    status: "Verified",
    hash: "0x72a...f92b",
    payoutChannel: "ID + PIN · MoneyGram",
  },
  {
    referenceId: "TB-392824",
    name: "Ezekiel Kemboi",
    contact: "+254 712 *** 331",
    initials: "EK",
    avatarTone: "bg-secondary-container/40 text-secondary",
    proxy: "John Lopeyok",
    region: "Kakuma Sub-County",
    status: "Verified",
    hash: "0x31b...a881",
    payoutChannel: "ID + PIN · MoneyGram",
  },
  {
    referenceId: "TB-392830",
    name: "Sarah Teresia",
    contact: "No Phone (Legacy ID)",
    initials: "ST",
    avatarTone: "bg-error-container/30 text-error",
    proxy: "Unknown",
    region: "Kalobeyei Settlement",
    status: "Flagged",
    hash: "Pending Hash...",
    payoutChannel: "Setup Incomplete",
    alert: true,
  },
  {
    referenceId: "TB-392835",
    name: "James Nderitu",
    contact: "+254 722 *** 119",
    initials: "JN",
    avatarTone: "bg-tertiary-container/20 text-tertiary",
    proxy: "Alice Njoki (Spouse)",
    region: "Lodwar Central",
    status: "Pending SMS",
    hash: "0x99c...c340",
    payoutChannel: "Awaiting PIN Confirm",
  },
  {
    referenceId: "TB-392842",
    name: "Purity Kinya",
    contact: "+254 755 *** 002",
    initials: "PK",
    avatarTone: "bg-primary-container/20 text-primary",
    proxy: "None (Self)",
    region: "Kibish Frontier",
    status: "Verified",
    hash: "0x11e...d772",
    payoutChannel: "ID + PIN · MoneyGram",
  },
];

const STATS = [
  { label: "Total Registered", value: "12,482", icon: "groups", tag: "+4%", tagTone: "text-secondary bg-secondary-container/30" },
  { label: "Verified by Registrar", value: "98.2%", icon: "verified", tag: "Healthy", tagTone: "text-secondary bg-secondary-container/30" },
  { label: "Payout-Ready (ID+PIN)", value: "11,360", icon: "fingerprint", tag: "91%", tagTone: "text-primary bg-primary-container/10" },
  { label: "Pending Alerts", value: "14", icon: "report_problem", tag: "Review", tagTone: "text-error bg-error-container/30" },
];

function StatusChip({ status }: { status: Status }) {
  if (status === "Verified") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
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
      <AdminShell
        active="beneficiaries"
        title="Beneficiary Registry"
        subtitle="Oversight of verified last-mile aid recipients"
        mobileNavItems={MOBILE_NAV_ITEMS}
        mobileActive="registry"
      >
        <div className="max-w-container-max mx-auto space-y-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface hidden md:block">
                Beneficiary Registry
              </h2>
              <p className="text-body-md text-on-surface-variant mt-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                Records reference an opaque ID only — PII stays isolated in the identity store.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="focus-ring flex items-center gap-2 px-4 py-2.5 border border-outline-variant bg-white rounded-full hover:bg-surface-container transition-colors text-sm font-bold">
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                Export Audit
              </button>
              <button className="focus-ring flex items-center gap-2 px-4 py-2.5 bg-primary text-on-primary rounded-full hover:brightness-110 transition-colors text-sm font-bold shadow-sm shadow-primary/30">
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Manual Entry
              </button>
            </div>
          </div>

          {/* Stats Overview Bento */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="card-surface rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-xl bg-primary-container/10 text-primary">
                    <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.tagTone}`}>{stat.tag}</span>
                </div>
                <div className="mt-4">
                  <p className="text-on-surface-variant text-label-mono uppercase text-[10px] tracking-wide">
                    {stat.label}
                  </p>
                  <h3 className="text-headline-md font-headline-md text-on-surface mt-0.5">{stat.value}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Main Table Section */}
          <div className="card-surface rounded-2xl overflow-hidden">
            {/* Table Toolbar */}
            <div className="p-4 border-b border-outline-variant flex flex-wrap gap-4 items-center justify-between">
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  search
                </span>
                <input
                  className="focus-ring w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-full text-body-md"
                  placeholder="Search by ID, name, or proxy…"
                  type="text"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-full text-on-surface-variant text-sm font-bold cursor-pointer hover:bg-surface-variant transition-all">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Regions: Turkana
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-full text-on-surface-variant text-sm font-bold cursor-pointer hover:bg-surface-variant transition-all">
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
                      PAYOUT METHOD
                    </th>
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
                        row.alert ? "hover:bg-error-container/10" : "hover:brightness-110/10"
                      }`}
                    >
                      <td className="px-6 py-4 font-label-mono text-primary font-bold">{row.referenceId}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${row.avatarTone}`}
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
                      <td className="px-6 py-4 text-xs text-on-surface-variant">{row.payoutChannel}</td>
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
              <span className="text-on-surface-variant text-sm">Showing 1 to 10 of 12,482 beneficiaries</span>
              <div className="flex gap-1">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container disabled:opacity-30"
                  disabled
                >
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold text-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container text-sm">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container text-sm">
                  3
                </button>
                <span className="px-2 self-center text-on-surface-variant">…</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container text-sm">
                  1249
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container">
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminShell>
      <Fab icon="add" label="Register New" href="/field-registration" />
    </>
  );
}
