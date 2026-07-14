import { AdminShell } from "@/components/layout/admin-shell";
import type { MobileNavItem } from "@/components/layout/mobile-bottom-nav";

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "deliveries", label: "Deliveries", icon: "task_alt", href: "/deliveries" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];

const METRICS = [
  {
    label: "Total Disbursed",
    value: "$4,280,450",
    icon: "payments",
    iconTone: "text-primary bg-primary-container/10",
    tag: "+12.5%",
    tagTone: "text-secondary",
  },
  {
    label: "Active Deliveries",
    value: "12,842",
    icon: "local_shipping",
    iconTone: "text-secondary bg-secondary-container/10",
    tag: "Active",
    tagTone: "text-secondary",
  },
  {
    label: "Verified Beneficiaries",
    value: "45,920",
    icon: "verified",
    iconTone: "text-primary bg-primary-container/10",
    tag: "98% Goal",
    tagTone: "text-on-surface-variant",
  },
  {
    label: "Stellar Anchor Proofs",
    value: "100.0%",
    icon: "hub",
    iconTone: "text-tertiary bg-tertiary-container/10",
    tag: "Synced",
    tagTone: "text-secondary",
  },
];

const PULSE_BARS = [60, 45, 70, 15, 85, 40, 65, 10, 90, 75, 55, 45];

const ALERTS = [
  {
    tone: "error" as const,
    icon: "warning",
    title: "High-Risk Fraud Event",
    detail: "Duplicate PIN attempt detected in Sector 4G. Verification halted.",
    actions: ["Block ID", "Investigate"],
  },
  {
    tone: "primary" as const,
    icon: "inventory_2",
    title: "Batch Approval Required",
    detail: "Batch #902 (Deliveries: 450) ready for cryptographic sign-off.",
    actions: ["Sign & Release"],
  },
  {
    tone: "neutral" as const,
    icon: "cloud_sync",
    title: "Node Sync Delayed",
    detail: "Kakuma Sub-Node reporting 12m latency. Retrying local sync.",
    actions: [],
  },
];

type TxStatus = "Verified" | "Pending" | "Flagged";

interface Transaction {
  hash: string;
  beneficiary: string;
  location: string;
  amount: string;
  status: TxStatus;
}

const TRANSACTIONS: Transaction[] = [
  { hash: "0x4a2c...e901", beneficiary: "M. Adan", location: "Turkana West", amount: "$120.00", status: "Verified" },
  { hash: "0x88f1...33d2", beneficiary: "J. Ekiru", location: "Lodwar South", amount: "$85.00", status: "Pending" },
  { hash: "0xde33...a009", beneficiary: "A. Ngasike", location: "Kalobeyei", amount: "$150.00", status: "Flagged" },
  { hash: "0xc442...441b", beneficiary: "E. Lowane", location: "Kakuma 1", amount: "$95.00", status: "Verified" },
];

const TX_STATUS_STYLES: Record<TxStatus, string> = {
  Verified: "bg-secondary-container text-on-secondary-container",
  Pending: "bg-surface-container text-on-surface-variant",
  Flagged: "bg-error-container text-on-error-container",
};

const TX_STATUS_ICON: Record<TxStatus, string> = {
  Verified: "check_circle",
  Pending: "schedule",
  Flagged: "error",
};

export default function ProgramDashboardPage() {
  return (
    <AdminShell active="dashboard" mobileNavItems={MOBILE_NAV_ITEMS} mobileActive="home">
      <div className="max-w-container-max mx-auto space-y-gutter">
        {/* Top Row: Metrics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between group hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${metric.iconTone}`}>
                  <span className="material-symbols-outlined">{metric.icon}</span>
                </div>
                <span className={`text-label-mono font-bold ${metric.tagTone}`}>{metric.tag}</span>
              </div>
              <div className="mt-4">
                <p className="text-on-surface-variant text-label-mono uppercase text-xs">{metric.label}</p>
                <h3 className="text-headline-md font-headline-md text-primary">{metric.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Row: Charts and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Real-time Delivery Pulse */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-body-lg font-headline-md text-on-surface">Delivery Pulse</h4>
                <p className="text-on-surface-variant text-label-mono text-xs">
                  Success vs. Exceptions (Last 24 Hours)
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs text-on-surface-variant font-label-mono">Verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="text-xs text-on-surface-variant font-label-mono">Alerts</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-64 bg-surface-container flex items-end justify-around p-4 gap-1 rounded-lg">
              <div className="w-full flex items-end justify-around h-full">
                {PULSE_BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`w-6 rounded-t-sm ${h <= 20 ? "bg-error/80" : "bg-secondary/80"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Actionable Alerts Column */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col h-[400px]">
            <h4 className="text-body-lg font-headline-md text-on-surface mb-4">Actionable Alerts</h4>
            <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
              {ALERTS.map((alert) => (
                <div
                  key={alert.title}
                  className={`p-3 rounded-lg flex gap-3 items-start border ${
                    alert.tone === "error"
                      ? "bg-error-container/20 border-error/20"
                      : alert.tone === "primary"
                        ? "bg-primary-container/10 border-primary/20"
                        : "bg-surface-container border-outline-variant"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      alert.tone === "error" ? "text-error" : alert.tone === "primary" ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {alert.icon}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-bold ${
                        alert.tone === "error" ? "text-error" : alert.tone === "primary" ? "text-primary" : "text-on-surface"
                      }`}
                    >
                      {alert.title}
                    </p>
                    <p className="text-xs text-on-surface-variant">{alert.detail}</p>
                    {alert.actions.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {alert.actions.map((action, i) => (
                          <button
                            key={action}
                            className={
                              i === 0
                                ? alert.tone === "error"
                                  ? "px-3 py-1 bg-error text-white text-[10px] font-bold rounded uppercase"
                                  : "px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase"
                                : "px-3 py-1 bg-surface border border-outline-variant text-[10px] font-bold rounded uppercase"
                            }
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Recent Transaction Table */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h4 className="text-body-lg font-headline-md text-on-surface">Live Delivery Ledger</h4>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-label-mono text-xs border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-label-mono text-xs border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-sm">download</span> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container text-on-surface-variant text-[11px] font-label-mono uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Transaction Hash</th>
                  <th className="px-6 py-4">Beneficiary</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-outline-variant/30">
                {TRANSACTIONS.map((tx) => (
                  <tr key={tx.hash} className="hover:bg-surface-container-low transition-colors cursor-pointer">
                    <td className="px-6 py-4 font-label-mono text-xs text-primary">{tx.hash}</td>
                    <td className="px-6 py-4 font-bold">{tx.beneficiary}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{tx.location}</td>
                    <td className="px-6 py-4">{tx.amount}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${TX_STATUS_STYLES[tx.status]}`}
                      >
                        <span
                          className="material-symbols-outlined text-[12px]"
                          style={tx.status === "Verified" ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                          {TX_STATUS_ICON[tx.status]}
                        </span>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="material-symbols-outlined text-primary cursor-pointer">visibility</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
