const STEPS = [
  {
    icon: "person_add",
    title: "1. Register",
    desc: "Field registrar captures ID, photo & sets a private PIN — offline, then synced.",
    tone: "bg-primary text-on-primary",
  },
  {
    icon: "hub",
    title: "2. SDP Verifies",
    desc: "Stellar Disbursement Platform screens for fraud and anchors every step for public proof.",
    tone: "bg-secondary text-on-secondary",
  },
  {
    icon: "currency_exchange",
    title: "3. Off-Ramp Payout",
    desc: "Beneficiary confirms ID + PIN; an off-ramp partner converts funds to cash on their phone.",
    tone: "bg-tertiary text-on-tertiary",
  },
];

export function AidFlowStrip() {
  return (
    <div className="card-surface-flat rounded-2xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline">How Aid Moves</p>
          <h3 className="text-body-lg font-headline-md font-bold text-on-surface">
            From registration to cash in hand
          </h3>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/40 px-2.5 py-1 rounded-full border border-secondary/20">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          Fully Traceable
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 relative">
        <div className="hidden md:block absolute top-6 left-[16.6%] right-[16.6%] h-0.5 bg-outline-variant -z-0" />
        {STEPS.map((step) => (
          <div key={step.title} className="relative z-10 flex md:flex-col gap-3 md:gap-3 md:items-start md:text-left">
            <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm ${step.tone}`}>
              <span className="material-symbols-outlined text-[22px]">{step.icon}</span>
            </div>
            <div className="md:mt-1">
              <p className="text-sm font-bold text-on-surface">{step.title}</p>
              <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed max-w-[220px]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
