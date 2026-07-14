import { AdminShell } from "@/components/layout/admin-shell";
import type { MobileNavItem } from "@/components/layout/mobile-bottom-nav";

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "alerts", label: "Alerts", icon: "report_problem", href: "/fraud" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];

interface SuspiciousActivity {
  name: string;
  ref: string;
  linkLabel: string;
  alertType: string;
  alertTone: "warning" | "neutral";
  risk: number;
  riskTone: "error" | "secondary";
  location: string;
  action: string;
  actionTone: "primary" | "outline";
}

const SUSPICIOUS_ACTIVITY: SuspiciousActivity[] = [
  {
    name: "Mary J.",
    ref: "#BT-9902",
    linkLabel: "Proxy: Sam K.",
    alertType: "Geo-Anomaly",
    alertTone: "warning",
    risk: 82,
    riskTone: "error",
    location: "Turkana Central",
    action: "Investigate",
    actionTone: "primary",
  },
  {
    name: "John D.",
    ref: "#BT-8841",
    linkLabel: "Self-collection",
    alertType: "PIN Brute Force",
    alertTone: "warning",
    risk: 94,
    riskTone: "error",
    location: "Kakuma Area 2",
    action: "Freeze Acc.",
    actionTone: "primary",
  },
  {
    name: "Asha M.",
    ref: "#BT-7729",
    linkLabel: "Proxy: Yusuf L.",
    alertType: "Multiple Devices",
    alertTone: "neutral",
    risk: 45,
    riskTone: "secondary",
    location: "Lodwar Town",
    action: "Dismiss",
    actionTone: "outline",
  },
];

const HASH_BARS = [40, 60, 80, 70, 90, 65, 85, 50, 75, 95];

interface AuditEvent {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  titleColor: string;
  subtitle: string;
  detailLine1: string;
  detailLine2: string;
  badge: string;
  badgeStyle: string;
  time: string;
  fraud?: boolean;
}

const AUDIT_EVENTS: AuditEvent[] = [
  {
    icon: "login",
    iconBg: "bg-secondary-container/30",
    iconColor: "text-secondary",
    title: "Admin Portal Access",
    titleColor: "",
    subtitle: "User: supervisor_04",
    detailLine1: "IP: 192.168.1.105",
    detailLine2: "MFA Success",
    badge: "VERIFIED",
    badgeStyle: "bg-secondary-container text-on-secondary-container",
    time: "14:22:15",
  },
  {
    icon: "security_update_warning",
    iconBg: "bg-error-container",
    iconColor: "text-error",
    title: "Failed PIN Verification",
    titleColor: "text-error",
    subtitle: "Beneficiary: #BT-8841",
    detailLine1: "Attempt 4/3 (Blocked)",
    detailLine2: "USSD Protocol",
    badge: "FRAUD ALERT",
    badgeStyle: "bg-error text-on-error",
    time: "13:45:02",
    fraud: true,
  },
  {
    icon: "sync",
    iconBg: "bg-primary-container/30",
    iconColor: "text-primary",
    title: "Offline Database Sync",
    titleColor: "",
    subtitle: "Node: LWC-North-02",
    detailLine1: "412 Records Pulled",
    detailLine2: "AES-256 Tunnel",
    badge: "COMPLETED",
    badgeStyle: "bg-surface-container-highest text-on-surface-variant",
    time: "12:10:44",
  },
];

export default function FraudDetectionAuditCenterPage() {
  return (
    <AdminShell
      active="fraud"
      title="Fraud Detection"
      subtitle="System Core Online"
      mobileNavItems={MOBILE_NAV_ITEMS}
      mobileActive="alerts"
    >
      <div className="max-w-container-max mx-auto w-full space-y-8">
        {/* Core Services Integrity Header */}
        <section className="relative overflow-hidden hero-gradient p-8 rounded-3xl">
          <div className="absolute -right-6 -bottom-10 opacity-[0.03]">
            <span className="material-symbols-outlined text-[200px]">shield</span>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] bg-primary-container text-on-primary-container px-2.5 py-1 rounded-full mb-3">
                <span className="material-symbols-outlined text-[14px]">hub</span>
                SDP Transparency Engine
              </span>
              <h3 className="text-headline-lg font-headline-lg mb-2 text-on-surface">
                Every disbursement, publicly verifiable
              </h3>
              <p className="text-on-surface-variant text-body-lg max-w-xl">
                The Stellar Disbursement Platform screens identity verification, proxy behaviour, and off-ramp
                payouts in real time — then anchors the proof so nothing is settled without a trace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant">
                <p className="text-label-mono text-xs text-on-surface-variant uppercase mb-1">Total Deliveries</p>
                <p className="text-headline-md font-headline-md text-on-surface">142,803</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant">
                <p className="text-label-mono text-xs text-on-surface-variant uppercase mb-1">Active Monitors</p>
                <p className="text-headline-md font-headline-md text-on-surface">12 Nodes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fraud and Verification Grid */}
        <div className="bento-grid">
          {/* Suspicious Activity Section */}
          <div className="col-span-12 lg:col-span-8 glass-card rounded-3xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                  report
                </span>
                <h4 className="font-headline-md text-headline-md">Suspicious Activity Detected</h4>
              </div>
              <button className="text-sm font-bold text-primary hover:underline">Review All</button>
            </div>
            <div className="flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface-variant text-[12px] uppercase font-label-mono">
                    <th className="px-6 py-4 font-medium">Beneficiary / Proxy</th>
                    <th className="px-6 py-4 font-medium">Alert Type</th>
                    <th className="px-6 py-4 font-medium">Risk Score</th>
                    <th className="px-6 py-4 font-medium">Location</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {SUSPICIOUS_ACTIVITY.map((row) => (
                    <tr
                      key={row.ref}
                      className={
                        row.alertTone === "warning"
                          ? "hover:bg-error-container/20 transition-colors"
                          : "hover:bg-surface-container-high/30 transition-colors"
                      }
                    >
                      <td className="px-6 py-5">
                        <div className="font-bold">
                          {row.name} ({row.ref})
                        </div>
                        <div className="text-xs text-on-surface-variant">{row.linkLabel}</div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                            row.alertTone === "warning"
                              ? "bg-tertiary-container text-on-tertiary-container"
                              : "bg-surface-container-highest text-on-surface-variant"
                          }`}
                        >
                          {row.alertType}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className={`h-full ${row.riskTone === "error" ? "bg-error" : "bg-secondary"}`}
                              style={{ width: `${row.risk}%` }}
                            />
                          </div>
                          <span
                            className={`text-sm font-bold ${row.riskTone === "error" ? "text-error" : "text-on-surface-variant"}`}
                          >
                            {row.risk}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm">{row.location}</td>
                      <td className="px-6 py-5 text-right">
                        <button
                          className={
                            row.actionTone === "primary"
                              ? "bg-primary text-on-primary px-3 py-1.5 rounded-lg text-xs font-bold"
                              : "border border-outline text-on-surface px-3 py-1.5 rounded-lg text-xs font-bold"
                          }
                        >
                          {row.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Blockchain Verification Widget */}
          <div className="col-span-12 lg:col-span-4 glass-card rounded-3xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-headline-md text-headline-md">Stellar Anchoring</h4>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <div className="space-y-6 flex-1">
              <div className="p-4 bg-surface-container rounded-2xl border border-outline-variant relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <span className="material-symbols-outlined text-6xl">link</span>
                </div>
                <p className="text-label-mono text-[10px] text-on-surface-variant mb-2">LAST ANCHORED BATCH</p>
                <p className="text-xs font-label-mono text-primary font-bold break-all mb-3">0x8f2e...d9c1b4e2a</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Verified on Mainnet
                  </span>
                  <span className="text-[10px] text-on-surface-variant">2 mins ago</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Consensus Status</p>
                    <p className="text-xs text-on-surface-variant">Stellar Disbursement Platform v2.1</p>
                  </div>
                  <div className="ml-auto text-secondary text-sm font-bold">100% Sync</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">data_object</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Immutable Ledger</p>
                    <p className="text-xs text-on-surface-variant">4.2M Proofs Anchored</p>
                  </div>
                  <div className="ml-auto text-primary text-sm font-bold">Healthy</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined">currency_exchange</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Off-Ramp Settlement</p>
                    <p className="text-xs text-on-surface-variant">MoneyGram payout reconciliation</p>
                  </div>
                  <div className="ml-auto text-secondary text-sm font-bold">99.4%</div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold">Audit Hash Frequency</span>
                  <span className="text-xs text-on-surface-variant">Daily Avg</span>
                </div>
                <div className="h-16 w-full flex items-end gap-1 px-1">
                  {HASH_BARS.map((h, i) => (
                    <div key={i} className="bg-primary flex-1 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Audit Logs (Bottom Full Width) */}
          <div className="col-span-12 glass-card rounded-3xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h4 className="font-headline-md text-headline-md mb-1">Security Audit Events</h4>
                <p className="text-sm text-on-surface-variant">
                  Comprehensive tracking of system access and verification attempts.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="focus-ring flex items-center gap-2 px-4 py-2 bg-white hover:bg-surface-container-high rounded-full text-sm font-bold border border-outline-variant transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                </button>
                <button className="focus-ring flex items-center gap-2 px-4 py-2 bg-white hover:bg-surface-container-high rounded-full text-sm font-bold border border-outline-variant transition-colors">
                  <span className="material-symbols-outlined text-sm">download</span> Export CSV
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {AUDIT_EVENTS.map((event) => (
                <div
                  key={event.title}
                  className={`flex items-center p-4 rounded-2xl border border-transparent transition-all cursor-default group ${
                    event.fraud
                      ? "hover:bg-error-container/10 hover:border-error/20 bg-error-container/5 fraud-pulse"
                      : "hover:bg-surface-container-low hover:border-outline-variant"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${event.iconBg} ${event.iconColor}`}>
                    <span className="material-symbols-outlined">{event.icon}</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 items-center gap-4">
                    <div>
                      <p className={`text-sm font-bold ${event.titleColor}`}>{event.title}</p>
                      <p className="text-xs text-on-surface-variant">{event.subtitle}</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-xs font-label-mono">{event.detailLine1}</p>
                      <p className="text-xs text-on-surface-variant">{event.detailLine2}</p>
                    </div>
                    <div className="hidden md:block">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${event.badgeStyle}`}>
                        {event.badge}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{event.time}</p>
                      <p className="text-xs text-on-surface-variant">Today</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Connectivity Strip */}
        <footer className="bg-surface-container px-gutter py-3 flex flex-wrap items-center justify-between gap-2 border-t border-outline-variant rounded-xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs font-bold text-secondary">Service Connection: Encrypted</span>
            </div>
            <div className="h-4 w-px bg-outline-variant" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">cloud_done</span>
              <span className="text-[10px] font-label-mono text-on-surface-variant">
                Mainnet Height: 52,901,442
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">lock</span>
            <span className="text-[10px] text-on-surface-variant italic">Built with Privacy. Designed for Impact.</span>
          </div>
        </footer>
      </div>
    </AdminShell>
  );
}
