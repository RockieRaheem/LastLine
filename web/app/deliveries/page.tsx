import { AdminShell } from "@/components/layout/admin-shell";
import type { MobileNavItem } from "@/components/layout/mobile-bottom-nav";

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "deliveries", label: "Deliveries", icon: "task_alt", href: "/deliveries" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];

type BatchStatus = "Pending Approval" | "Active" | "Completed" | "Draft";

interface Batch {
  id: string;
  programme: string;
  recipients: string;
  amount: string;
  status: BatchStatus;
  action: string;
}

const BATCHES: Batch[] = [
  { id: "#BCH-8821", programme: "Emergency Cash - Kalobeyei", recipients: "2,450", amount: "$122,500", status: "Pending Approval", action: "Approve" },
  { id: "#BCH-8799", programme: "Maternal Nutrition Support", recipients: "820", amount: "$41,000", status: "Active", action: "Monitor" },
  { id: "#BCH-8744", programme: "Livestock Drought Relief", recipients: "1,100", amount: "$55,000", status: "Completed", action: "View Audit" },
  { id: "#BCH-8902", programme: "General Food Dist. - Zone 1", recipients: "4,200", amount: "$210,000", status: "Draft", action: "Edit" },
];

const STATUS_STYLES: Record<BatchStatus, string> = {
  "Pending Approval": "bg-tertiary-fixed-dim/20 text-tertiary-container border-tertiary-fixed-dim/40",
  Active: "bg-secondary-container/30 text-secondary border-secondary/20",
  Completed: "bg-outline-variant/20 text-outline border-outline-variant/40",
  Draft: "bg-surface-container-high text-on-surface-variant border-outline-variant/20",
};

const STATUS_DOT: Record<BatchStatus, string> = {
  "Pending Approval": "bg-tertiary",
  Active: "bg-secondary",
  Completed: "bg-outline",
  Draft: "bg-outline-variant",
};

const ACTION_STYLES: Record<BatchStatus, string> = {
  "Pending Approval": "bg-primary text-white hover:opacity-90",
  Active: "bg-surface-container-high text-primary hover:bg-surface-variant",
  Completed: "bg-surface-container-high text-primary hover:bg-surface-variant",
  Draft: "bg-surface-container-high text-primary hover:bg-surface-variant",
};

const LIVE_FEED = [
  {
    id: "***921A",
    title: "Beneficiary ID: ***921A Approved",
    detail: "PIN Verified | Location: 3.51° N, 34.86° E",
    time: "2m ago",
    tone: "ok" as const,
  },
  {
    id: "***044B",
    title: "Beneficiary ID: ***044B Approved",
    detail: "Representative Pickup | QR Scanned",
    time: "5m ago",
    tone: "ok" as const,
  },
  {
    id: "***112C",
    title: "Security Event: ***112C PIN Failed",
    detail: "3/3 Attempts Exhausted | Flagged for Review",
    time: "8m ago",
    tone: "error" as const,
  },
  {
    id: "***773K",
    title: "Beneficiary ID: ***773K Approved",
    detail: "Offline Sync Completed | Signature Captured",
    time: "12m ago",
    tone: "ok" as const,
  },
];

const OPS_MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkiH3L_A9pgamvN64hIiKUozLWTvRcjeuqaVbk6DjbbvcEJGCix4bLloXgVDvQTU2kNOtdzRqXm9JQtoYR-ngtAX5ADzE2Isj4F29IVvRi9YaDFn1LEh6PN_nLGOmG_ylNC1KbCc0MGmRP15-99O1ADdmo5JaCiATSoozjqhQ4NYNud3z2jUUqQmy1BfKhEmvKoXB6GpKRREYTsC_hREc-ZHRi_4KDuHP1gdw0f9rlY-iKnLMg7W20";

const WORKFLOW_STEPS = [
  { icon: "person_add", title: "Biometric Registration", detail: "Offline capture with PIN generation" },
  { icon: "sync", title: "Cloud Reconciliation", detail: "Deduplication and fraud analysis" },
  { icon: "key", title: "PIN-Verified Release", detail: "Tamper-evident Stellar anchoring" },
];

export default function DeliveryDisbursementMonitorPage() {
  return (
    <AdminShell active="deliveries" mobileNavItems={MOBILE_NAV_ITEMS} mobileActive="deliveries">
      <div className="max-w-container-max mx-auto w-full space-y-stack-lg">
        {/* Page Header & Key Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-4 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
            <div>
              <h1 className="text-headline-lg font-headline-lg text-primary">Disbursement Oversight</h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Monitoring last-mile delivery across Turkana West programmes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 border border-primary text-primary font-bold rounded-full hover:bg-surface-container-high transition-colors text-sm">
                Export Audit Reports
              </button>
              <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-all text-sm shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">add</span> New Programme
              </button>
            </div>
          </div>

          <div className="bg-white border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-primary opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                payments
              </span>
            </div>
            <span className="text-label-mono font-label-mono text-outline text-xs uppercase font-bold">
              Total Disbursed
            </span>
            <div className="mt-2">
              <span className="text-headline-md font-headline-md text-primary">$1.42M</span>
              <span className="text-[10px] font-bold text-secondary ml-2">↑ 12% MoM</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-primary opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                groups
              </span>
            </div>
            <span className="text-label-mono font-label-mono text-outline text-xs uppercase font-bold">
              Active Recipients
            </span>
            <div className="mt-2">
              <span className="text-headline-md font-headline-md text-primary">12,840</span>
              <span className="text-[10px] font-bold text-outline ml-2">Across 4 zones</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-secondary opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <span className="text-label-mono font-label-mono text-outline text-xs uppercase font-bold">
              Success Rate
            </span>
            <div className="mt-2">
              <span className="text-headline-md font-headline-md text-secondary">99.2%</span>
              <span className="text-[10px] font-bold text-secondary ml-2">Secure Link</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-tertiary opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                warning
              </span>
            </div>
            <span className="text-label-mono font-label-mono text-outline text-xs uppercase font-bold">
              Flagged Events
            </span>
            <div className="mt-2">
              <span className="text-headline-md font-headline-md text-tertiary">03</span>
              <span className="text-[10px] font-bold text-tertiary ml-2 italic">Requires Review</span>
            </div>
          </div>
        </section>

        {/* Main Layout Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
          {/* Left: Disbursement Batches Monitor */}
          <div className="lg:col-span-2 space-y-stack-md">
            <div className="flex items-center justify-between">
              <h3 className="text-headline-md font-headline-md text-primary">Disbursement Batches</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container-high rounded-lg hover:bg-surface-variant">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                </button>
                <button className="p-2 bg-surface-container-high rounded-lg hover:bg-surface-variant">
                  <span className="material-symbols-outlined text-lg">refresh</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left zebra-stripes">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Batch ID
                    </th>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Programme
                    </th>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Recipients
                    </th>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-label-mono font-label-mono text-xs text-outline uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-body-md">
                  {BATCHES.map((batch) => (
                    <tr key={batch.id} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-5 font-bold text-primary">{batch.id}</td>
                      <td className="px-6 py-5">{batch.programme}</td>
                      <td className="px-6 py-5">{batch.recipients}</td>
                      <td className="px-6 py-5 font-bold">{batch.amount}</td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-tighter ${STATUS_STYLES[batch.status]}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[batch.status]}`} />
                          {batch.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <button
                          className={`text-[10px] font-bold px-4 py-1.5 rounded-full active:scale-95 transition-all uppercase ${ACTION_STYLES[batch.status]}`}
                        >
                          {batch.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Live Feed Card */}
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 bg-primary text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Live Delivery Evidence Feed</h4>
                </div>
                <span className="text-[10px] font-label-mono opacity-80">Synced with Stellar Anchor</span>
              </div>
              <div className="divide-y divide-outline-variant max-h-64 overflow-y-auto">
                {LIVE_FEED.map((event) => (
                  <div
                    key={event.id}
                    className={`p-4 flex items-center justify-between ${event.tone === "error" ? "bg-error-container/10" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${event.tone === "error" ? "bg-error" : "bg-secondary"}`} />
                      <div>
                        <p className={`text-sm font-bold ${event.tone === "error" ? "text-error" : "text-primary"}`}>
                          {event.title}
                        </p>
                        <p className={`text-xs ${event.tone === "error" ? "text-error/80" : "text-outline"}`}>
                          {event.detail}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs font-label-mono ${event.tone === "error" ? "text-error" : "text-outline"}`}>
                      {event.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map & Workflow Insights */}
          <div className="space-y-stack-md">
            <div className="flex items-center justify-between">
              <h3 className="text-headline-md font-headline-md text-primary">Operations Map</h3>
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Real-Time</span>
            </div>

            <div className="bg-surface-container-highest border border-outline-variant rounded-xl aspect-[4/5] relative overflow-hidden shadow-inner group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Operations map of Turkana West aid distribution points" className="w-full h-full object-cover" src={OPS_MAP_IMAGE} />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant shadow-lg max-w-[160px]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Distribution Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Queueing Offline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-error" />
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Incident Area</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase">Active Field Staff</p>
                  <p className="text-sm font-bold text-primary">42 Registered</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-outline uppercase">Sync Rate</p>
                  <p className="text-sm font-bold text-secondary">94% Stable</p>
                </div>
              </div>
            </div>

            {/* Quick Process View */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 space-y-4">
              <h4 className="text-label-mono font-label-mono text-primary text-xs uppercase font-bold tracking-widest">
                Workflow Integrity
              </h4>
              <div className="space-y-3">
                {WORKFLOW_STEPS.map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="bg-primary-container p-1 rounded">
                      <span className="material-symbols-outlined text-white text-base">{step.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface leading-tight">{step.title}</p>
                      <p className="text-[10px] text-outline">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 py-3 bg-white border border-primary text-primary text-[10px] font-bold rounded-lg uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
                View Full Protocol
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
