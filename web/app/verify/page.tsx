"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { TRUSTBRIDGE_LOGO } from "@/components/layout/sidebar";

type FlowState = "pin" | "processing" | "success";

const MOBILE_NAV = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "deliveries", label: "Deliveries", icon: "task_alt", href: "/deliveries" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];

const ACTIVE_KEY = "deliveries";

const PROCESSING_STAGES = [
  { icon: "fingerprint", label: "Confirming ID + PIN…" },
  { icon: "hub", label: "SDP screening for fraud…" },
  { icon: "currency_exchange", label: "Routing to off-ramp partner…" },
];

export default function BeneficiaryVerificationPage() {
  const [flowState, setFlowState] = useState<FlowState>("pin");
  const [stageIndex, setStageIndex] = useState(0);
  const [pins, setPins] = useState(["", "", "", ""]);
  const [errorShake, setErrorShake] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function handlePinChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...pins];
    next[index] = digit;
    setPins(next);
    if (digit && index < pins.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !pins[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handleVerify() {
    const allFilled = pins.every((p) => p.length > 0);
    if (!allFilled) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      return;
    }
    setFlowState("processing");
    setStageIndex(0);
    PROCESSING_STAGES.forEach((_, i) => {
      setTimeout(() => setStageIndex(i), i * 900);
    });
    setTimeout(() => setFlowState("success"), PROCESSING_STAGES.length * 900);
  }

  function handleReturnHome() {
    setPins(["", "", "", ""]);
    setFlowState("pin");
    setStageIndex(0);
  }

  return (
    <div className="mesh-bg text-on-surface min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* Top App Bar (Mobile Context) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant flex justify-between items-center h-16 px-margin-mobile">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="TrustBridge" className="h-8 w-auto object-contain" src={TRUSTBRIDGE_LOGO} />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-label-mono font-label-mono text-[12px]">ONLINE</span>
        </div>
      </header>

      <main className="flex-1 mt-16 pb-28 px-margin-mobile flex flex-col items-center justify-start max-w-lg mx-auto w-full">
        {/* Context Header */}
        <div className="w-full pt-8 pb-6 space-y-2">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">currency_exchange</span>
            <p className="text-label-mono font-label-mono uppercase tracking-wider">Off-Ramp Collection</p>
          </div>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary">Final Delivery Auth</h1>
          <p className="text-sm text-on-surface-variant">
            Confirm the beneficiary&apos;s ID + PIN — SDP verifies it, then MoneyGram releases the cash.
          </p>
        </div>

        {/* Task Info Card */}
        <div className="w-full card-surface-flat rounded-2xl p-stack-md mb-stack-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-label-mono font-label-mono mb-1">REFERENCE ID</p>
              <p className="text-headline-md font-headline-md text-primary">TB-392819</p>
            </div>
            <div className="text-right">
              <p className="text-on-surface-variant text-label-mono font-label-mono mb-1">AMOUNT</p>
              <p className="text-headline-md font-headline-md text-secondary">KES 5,000</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 border-t border-dashed border-outline-variant">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <p className="text-body-md font-semibold">Samuel Okoth</p>
              <p className="text-on-surface-variant text-[14px]">Primary Beneficiary</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-secondary bg-secondary-container/30 px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[12px]">check_circle</span>
              ID Matched
            </span>
          </div>
        </div>

        {/* Verification Canvas */}
        <div className="w-full space-y-stack-lg">
          <div className="relative">
            {flowState === "pin" && (
              <div className="space-y-stack-md">
                <div className="text-center py-4">
                  <p className="text-body-md text-on-surface-variant mb-6">
                    Ask the beneficiary to enter their{" "}
                    <span className="font-bold text-on-surface">Confidential PIN</span> to release the assistance.
                  </p>
                  <div className="flex justify-center gap-4 mb-8">
                    {pins.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        autoFocus={index === 0}
                        value={digit}
                        onChange={(e) => handlePinChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className={`pin-box w-14 h-16 text-center text-headline-lg font-label-mono bg-surface-container-low border-2 rounded-2xl shadow-sm focus:outline-none focus:ring-0 transition-all ${
                          errorShake ? "border-error" : "border-outline-variant"
                        }`}
                        maxLength={1}
                        type="password"
                        inputMode="numeric"
                      />
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleVerify}
                  className="focus-ring w-full h-14 bg-primary text-on-primary font-bold text-body-lg rounded-full active:scale-95 transition-all shadow-md shadow-primary/30 hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">verified_user</span>
                  Verify &amp; Release Payout
                </button>
                <p className="text-center text-label-mono font-label-mono text-on-surface-variant px-4">
                  By clicking verify, you confirm the physical presence of the beneficiary and secure identity match.
                </p>
              </div>
            )}

            {flowState === "processing" && (
              <div className="flex flex-col items-center justify-center py-12 space-y-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      {PROCESSING_STAGES[stageIndex].icon}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-headline-md font-headline-md text-primary">Processing…</h2>
                  <p className="text-on-surface-variant mt-1">{PROCESSING_STAGES[stageIndex].label}</p>
                </div>
                <div className="flex items-center gap-2">
                  {PROCESSING_STAGES.map((stage, i) => (
                    <span
                      key={stage.label}
                      className={`h-1.5 rounded-full transition-all ${
                        i <= stageIndex ? "w-8 bg-primary" : "w-4 bg-outline-variant"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {flowState === "success" && (
              <div className="flex flex-col items-center py-8 space-y-6">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-on-secondary success-anim">
                  <span
                    className="material-symbols-outlined text-[48px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <div className="text-center space-y-1">
                  <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-secondary">Cash Released</h2>
                  <p className="text-body-lg font-medium">KES 5,000 is ready for Samuel to collect</p>
                </div>

                <div className="w-full card-surface-flat rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">storefront</span>
                      Payout Channel
                    </span>
                    <span className="text-sm font-bold text-on-surface">MoneyGram · Mobile Money</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">confirmation_number</span>
                      Collection Code
                    </span>
                    <span className="text-sm font-bold font-label-mono text-primary">MG-7734-KE</span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">hub</span>
                      Stellar Proof
                    </span>
                    <span className="text-[11px] font-label-mono text-on-surface-variant">TX: b5a7...89e2</span>
                  </div>
                </div>

                <button
                  onClick={handleReturnHome}
                  className="focus-ring w-full h-14 bg-surface-container-high border border-outline-variant text-on-surface font-bold text-body-lg rounded-full hover:bg-surface-variant transition-colors"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-auto pt-12 flex items-center justify-center gap-2 text-on-surface-variant/60">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span className="text-label-mono font-label-mono text-[10px] uppercase tracking-widest">
            End-to-End Encrypted Verification
          </span>
        </div>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-2 bg-surface/90 backdrop-blur-md border-t border-outline-variant md:hidden z-50">
        {MOBILE_NAV.map((item) => {
          const isActive = item.key === ACTIVE_KEY;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={
                isActive
                  ? "flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-1 active:scale-90 transition-transform"
                  : "flex flex-col items-center justify-center text-on-surface-variant px-4 py-1"
              }
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-label-sm font-body-md text-[12px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
