"use client";

import { useState } from "react";
import { AdminShell } from "@/components/layout/admin-shell";
import { AidFlowStrip } from "@/components/aid-flow-strip";
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
    tagTone: "text-secondary bg-secondary-container/30",
    spark: [30, 45, 38, 55, 48, 62, 70],
    sparkColor: "#006b5c",
  },
  {
    label: "Active Deliveries",
    value: "12,842",
    icon: "local_shipping",
    iconTone: "text-secondary bg-secondary-container/30",
    tag: "Live",
    tagTone: "text-secondary bg-secondary-container/30",
    spark: [50, 48, 60, 55, 65, 58, 72],
    sparkColor: "#006b5c",
  },
  {
    label: "Verified Beneficiaries",
    value: "45,920",
    icon: "verified",
    iconTone: "text-primary bg-primary-container/10",
    tag: "98% Goal",
    tagTone: "text-on-surface-variant bg-surface-container-high",
    spark: [40, 42, 44, 47, 50, 54, 58],
    sparkColor: "#003874",
  },
  {
    label: "Stellar Anchor Proofs",
    value: "100.0%",
    icon: "hub",
    iconTone: "text-primary bg-primary-container/10",
    tag: "Synced",
    tagTone: "text-secondary bg-secondary-container/30",
    spark: [90, 92, 95, 93, 97, 99, 100],
    sparkColor: "#003874",
  },
];

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100;
  const h = 28;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-7" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

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
  channel: string;
  status: TxStatus;
}

const TRANSACTIONS: Transaction[] = [
  { hash: "0x4a2c...e901", beneficiary: "M. Adan", location: "Turkana West", amount: "$120.00", channel: "MoneyGram · Mobile Money", status: "Verified" },
  { hash: "0x88f1...33d2", beneficiary: "J. Ekiru", location: "Lodwar South", amount: "$85.00", channel: "MoneyGram · Cash Pickup", status: "Pending" },
  { hash: "0xde33...a009", beneficiary: "A. Ngasike", location: "Kalobeyei", amount: "$150.00", channel: "MoneyGram · Mobile Money", status: "Flagged" },
  { hash: "0xc442...441b", beneficiary: "E. Lowane", location: "Kakuma 1", amount: "$95.00", channel: "MoneyGram · Cash Pickup", status: "Verified" },
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
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);
  const [exported, setExported] = useState(false);

  const visibleAlerts = ALERTS.filter((a) => !dismissed.includes(a.title));
  const visibleTransactions = showFlaggedOnly
    ? TRANSACTIONS.filter((t) => t.status !== "Verified")
    : TRANSACTIONS;

  function dismissAlert(title: string) {
    setDismissed((prev) => [...prev, title]);
  }

  function handleExport() {
    setExported(true);
    setTimeout(() => setExported(false), 1800);
  }

  return (
    <AdminShell
      active="dashboard"
      title="Program Dashboard"
      subtitle="Real-time oversight, powered by the Stellar Disbursement Platform"
      mobileNavItems={MOBILE_NAV_ITEMS}
      mobileActive="home"
    >
      <div className="max-w-container-max mx-auto space-y-gutter">
        {/* Hero */}
        <div className="hero-gradient rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-[0.04]">
            <span className="material-symbols-outlined text-[180px]">hub</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] bg-secondary-container/60 text-on-secondary-container px-2.5 py-1 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                System Operational
              </span>
              <h1 className="text-headline-lg font-headline-lg tracking-tight text-on-surface">Good morning, Admin.</h1>
              <p className="text-on-surface-variant text-body-md mt-1 max-w-lg">
                12,842 deliveries are in motion across Turkana. Every step is verified and anchored before a single
                dollar reaches an off-ramp partner.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="focus-ring px-5 py-2.5 bg-white border border-outline-variant hover:bg-surface-container rounded-full text-sm font-bold transition-colors text-on-surface">
                View Reports
              </button>
              <button className="focus-ring px-5 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-sm shadow-primary/25">
                New Programme
              </button>
            </div>
          </div>
        </div>

        <AidFlowStrip />

        {/* Top Row: Metrics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {METRICS.map((metric) => (
            <div key={metric.label} className="card-surface rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-xl ${metric.iconTone}`}>
                  <span className="material-symbols-outlined text-[20px]">{metric.icon}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${metric.tagTone}`}>{metric.tag}</span>
              </div>
              <div className="mt-4">
                <p className="text-on-surface-variant text-label-mono uppercase text-[10px] tracking-wide">
                  {metric.label}
                </p>
                <h3 className="text-headline-md font-headline-md text-on-surface mt-0.5">{metric.value}</h3>
              </div>
              <div className="mt-2 -mb-1">
                <Sparkline points={metric.spark} color={metric.sparkColor} />
              </div>
            </div>
          ))}
        </div>

        {/* Middle Row: Charts and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Real-time Delivery Pulse */}
          <div className="lg:col-span-2 card-surface rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-body-lg font-headline-md text-on-surface">Delivery Pulse</h4>
                <p className="text-on-surface-variant text-label-mono text-xs">
                  Success vs. exceptions (last 24 hours)
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="text-xs text-on-surface-variant font-label-mono">Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error" />
                  <span className="text-xs text-on-surface-variant font-label-mono">Alerts</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-64 bg-surface-container-low/60 flex items-end p-4 gap-2 rounded-xl">
              {PULSE_BARS.map((h, i) => (
                <div key={i} className="flex-1 flex items-end h-full">
                  <div
                    className={`w-full rounded-t-md transition-all hover:opacity-80 ${
                      h <= 20 ? "bg-gradient-to-t from-error to-error/60" : "bg-gradient-to-t from-primary to-secondary"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Alerts Column */}
          <div className="card-surface rounded-2xl p-6 flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-body-lg font-headline-md text-on-surface">Actionable Alerts</h4>
              {visibleAlerts.length > 0 && (
                <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full">
                  {visibleAlerts.length} open
                </span>
              )}
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
              {visibleAlerts.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[32px] text-secondary">task_alt</span>
                  <p className="text-sm font-bold text-on-surface">All clear</p>
                  <p className="text-xs">No alerts need attention right now.</p>
                </div>
              )}
              {visibleAlerts.map((alert) => (
                <div
                  key={alert.title}
                  className={`relative p-3.5 rounded-xl flex gap-3 items-start border ${
                    alert.tone === "error"
                      ? "bg-error-container/20 border-error/20"
                      : alert.tone === "primary"
                        ? "bg-primary-container/40 border-primary/20"
                        : "bg-surface-container border-outline-variant"
                  }`}
                >
                  <button
                    onClick={() => dismissAlert(alert.title)}
                    aria-label="Dismiss alert"
                    className="focus-ring absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-black/5"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                  <div
                    className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${
                      alert.tone === "error"
                        ? "bg-error text-white"
                        : alert.tone === "primary"
                          ? "bg-primary text-white"
                          : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{alert.icon}</span>
                  </div>
                  <div className="pr-4">
                    <p
                      className={`text-sm font-bold ${
                        alert.tone === "error" ? "text-error" : alert.tone === "primary" ? "text-primary" : "text-on-surface"
                      }`}
                    >
                      {alert.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{alert.detail}</p>
                    {alert.actions.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {alert.actions.map((action, i) => (
                          <button
                            key={action}
                            onClick={() => dismissAlert(alert.title)}
                            className={
                              i === 0
                                ? alert.tone === "error"
                                  ? "focus-ring px-3 py-1 bg-error text-white text-[10px] font-bold rounded-full uppercase hover:brightness-110"
                                  : "focus-ring px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase hover:brightness-110"
                                : "focus-ring px-3 py-1 bg-surface border border-outline-variant text-[10px] font-bold rounded-full uppercase hover:bg-surface-container"
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
        <div className="card-surface rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <div>
              <h4 className="text-body-lg font-headline-md text-on-surface">Live Delivery Ledger</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Anchored on Stellar, paid out via off-ramp partners</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFlaggedOnly((v) => !v)}
                className={`focus-ring flex items-center gap-1 px-3 py-1.5 text-label-mono text-xs border rounded-full transition-colors ${
                  showFlaggedOnly
                    ? "bg-primary text-white border-primary"
                    : "border-outline-variant hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-sm">filter_list</span>
                {showFlaggedOnly ? "Needs Attention" : "Filter"}
              </button>
              <button
                onClick={handleExport}
                className="focus-ring flex items-center gap-1 px-3 py-1.5 text-label-mono text-xs border border-outline-variant rounded-full hover:bg-surface-container transition-colors disabled:opacity-60"
                disabled={exported}
              >
                <span className="material-symbols-outlined text-sm">{exported ? "check" : "download"}</span>
                {exported ? "Exported" : "Export"}
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
                  <th className="px-6 py-4">Payout Channel</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-outline-variant/30">
                {visibleTransactions.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-on-surface-variant text-sm">
                      No transactions need attention right now.
                    </td>
                  </tr>
                )}
                {visibleTransactions.map((tx) => (
                  <tr key={tx.hash} className="hover:bg-surface-container-low transition-colors cursor-pointer">
                    <td className="px-6 py-4 font-label-mono text-xs text-primary">{tx.hash}</td>
                    <td className="px-6 py-4 font-bold">{tx.beneficiary}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{tx.location}</td>
                    <td className="px-6 py-4 font-bold">{tx.amount}</td>
                    <td className="px-6 py-4 text-on-surface-variant text-xs">{tx.channel}</td>
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
