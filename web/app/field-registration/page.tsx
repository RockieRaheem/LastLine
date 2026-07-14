"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3;

const MOBILE_NAV = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "register", label: "Register", icon: "person_add", href: "/field-registration" },
  { key: "deliveries", label: "Deliveries", icon: "task_alt", href: "/deliveries" },
  { key: "sync", label: "Sync", icon: "sync", href: "#" },
];
const ACTIVE_KEY = "register";

const REGISTRAR_LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4qvazOKqknrlOXokb53n1pm1zsefSITMbgdXDMbkt9dkgLyD6xnEm_Gzn6rMnv4WNVZTPluj_W4PtmH11fA-qlvoK_XzvDQUqO-bYZG_6jK10SU0gI7ubz5Q-hbleSiA2Ctlh8PuGdjw0vP48B0EH6quQuu3TF08QbI1VzUWbRQar2VPnD2PtjB2GgRWfpwWG59Vj7gJBaD_WDtPfJKjGBUh5gkqxvvfEN5K_5RCWLutFM3ZzLIEe";

const ID_PHOTO_PREVIEW =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2LeqSVTc3XZC8xc-cj53GWpKllHPKxLx_uAsaHmttgbskUD3lVV7b1IQoFgv4jMZrI4H7lx9Z_ZFje5PtMtw8wZyu3SzyF3jWoa5kujJ2wDdIdee28Q9xk_IcCVH3g9ebp299FKYzDrKVf9Y9rbzxVDG1T5H_hmYwv3t4QIFksPXYyxc8BrqeY-WIHJWpgRdsx3ZRxuWmmgDqIjPnJlQZAShKJl3XsXxeSwjWpI6EZqR418oTqEI-";

const REVIEW_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDiRUx8AyTM6px7WF8G_Q4zES7VMcIBXL-EyPwARjM1khrKeJhDmFp0V0JRIRN2a5vWWhMNugUCV_8GmkyO2x5iS4Kl2OCqZz6UgWZlrdkLyhXcjq42vA8ukAgFb4iFoW3J3yxQIhUfeVfzDADpDZ5TgEz_sm6ZpXOHmNQYGEtqlKgEOIgwRk9L4gvWyTxSWtxMPtLywuiOXmr02eP8YXDHyzVRV9KBqJwvxsYWMZu90GFrXn4GciJ";

function StepDot({ index, current }: { index: number; current: Step }) {
  if (index < current) {
    return (
      <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold shadow-md">
        <span className="material-symbols-outlined">check</span>
      </div>
    );
  }
  if (index === current) {
    return (
      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-lg">
        {index}
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold border-2 border-outline-variant">
      {index}
    </div>
  );
}

export default function FieldRegistrationPage() {
  const [step, setStep] = useState<Step>(1);
  const [success, setSuccess] = useState(false);

  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  const displayName = fullName.trim() || "Mary Wambui Kamau";
  const displayId = idNumber.trim() || "29883441";
  const firstAndLast = displayName.split(" ").filter(Boolean);
  const shortName =
    fullName.trim() && firstAndLast.length > 1
      ? `${firstAndLast[0]} ${firstAndLast[firstAndLast.length - 1]}`
      : "Mary Kamau";

  function pressDigit(digit: string) {
    if (pin.length < 4) setPin(pin + digit);
  }

  function pressBackspace() {
    setPin(pin.slice(0, -1));
  }

  function submitRegistration() {
    if (pin.length < 4) return;
    setSuccess(true);
  }

  function registerNext() {
    setStep(1);
    setSuccess(false);
    setPhotoCaptured(false);
    setFullName("");
    setIdNumber("");
    setPhone("");
    setPin("");
  }

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50 h-16 flex justify-between items-center px-margin-mobile md:px-gutter">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="TrustBridge Logo" className="h-8 w-8 object-contain" src={REGISTRAR_LOGO} />
          <span className="text-headline-md font-headline-md font-bold text-primary">TrustBridge</span>
        </div>
        <div className="flex items-center bg-secondary-container/30 px-3 py-1 rounded-full border border-secondary/20">
          <span
            className="material-symbols-outlined text-secondary text-[18px] mr-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            wifi
          </span>
          <span className="text-label-mono font-label-mono text-on-secondary-container">ONLINE</span>
        </div>
      </header>

      <main className="flex-grow pt-20 pb-24 px-4 max-w-md mx-auto w-full">
        {!success && (
          <div className="mb-8 px-2">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -z-10 -translate-y-1/2" />
              <div className="flex flex-col items-center gap-2">
                <StepDot index={1} current={step} />
                <span className="text-label-mono font-label-mono text-primary text-[10px]">IDENTITY</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <StepDot index={2} current={step} />
                <span className="text-label-mono font-label-mono text-on-surface-variant text-[10px]">VERIFY</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <StepDot index={3} current={step} />
                <span className="text-label-mono font-label-mono text-on-surface-variant text-[10px]">SECURE</span>
              </div>
            </div>
          </div>
        )}

        {!success && step === 1 && (
          <section>
            <div className="mb-stack-lg">
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-2">
                Register Beneficiary
              </h1>
              <p className="text-body-md text-on-surface-variant">
                Capture official details for humanitarian aid eligibility.
              </p>
            </div>
            <div className="space-y-6">
              {/* Photo Capture Component */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setPhotoCaptured(true)}
                  className="w-full aspect-[4/3] bg-surface-container rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center overflow-hidden relative cursor-pointer active:scale-[0.98] transition-transform"
                >
                  <span className="material-symbols-outlined text-outline text-[48px] mb-2">add_a_photo</span>
                  <p className="text-body-md font-semibold text-outline">Capture Identification Photo</p>
                  <p className="text-[12px] text-outline/70 mt-1">Ensure clear lighting and face visibility</p>
                  {photoCaptured && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${ID_PHOTO_PREVIEW}')` }}
                    >
                      <div className="absolute bottom-0 w-full bg-primary/80 backdrop-blur-sm p-2 text-center">
                        <span className="text-on-primary text-[12px] font-bold">PHOTO CAPTURED</span>
                      </div>
                    </div>
                  )}
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-label-mono font-label-mono text-on-surface-variant px-1 uppercase tracking-wider text-[11px]">
                    Full Name (As per ID)
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-14 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-body-lg font-body-lg"
                    placeholder="Enter beneficiary full name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-label-mono font-label-mono text-on-surface-variant px-1 uppercase tracking-wider text-[11px]">
                    National ID Number
                  </label>
                  <input
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full h-14 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-body-lg font-body-lg"
                    placeholder="E.g. 123456789"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-label-mono font-label-mono text-on-surface-variant px-1 uppercase tracking-wider text-[11px]">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">+254</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-14 pl-14 pr-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-body-lg font-body-lg"
                      placeholder="700 000 000"
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full h-14 bg-primary text-on-primary rounded-xl font-bold text-body-lg flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md hover:shadow-lg"
              >
                <span>Continue to Verification</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </section>
        )}

        {!success && step === 2 && (
          <section>
            <div className="mb-stack-lg">
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-2">
                Verify Information
              </h1>
              <p className="text-body-md text-on-surface-variant">
                Review captured data before anchoring to blockchain.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-xl border border-outline-variant p-4 space-y-4 mb-8">
              <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                <div
                  className="w-16 h-16 rounded-lg bg-cover bg-center border border-primary/20"
                  style={{ backgroundImage: `url('${REVIEW_PHOTO}')` }}
                />
                <div>
                  <p className="text-label-mono font-label-mono text-[10px] text-on-surface-variant">FULL NAME</p>
                  <p className="text-body-lg font-bold">{displayName}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-label-mono font-label-mono text-[10px] text-on-surface-variant uppercase">
                    ID Number
                  </p>
                  <p className="text-body-md font-semibold">{displayId}</p>
                </div>
                <div>
                  <p className="text-label-mono font-label-mono text-[10px] text-on-surface-variant uppercase">
                    Program
                  </p>
                  <span className="inline-flex bg-secondary/10 text-secondary text-[12px] font-bold px-2 py-0.5 rounded uppercase">
                    Cash Support
                  </span>
                </div>
              </div>
              <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  pin_drop
                </span>
                <div>
                  <p className="text-label-mono font-label-mono text-[10px] text-on-surface-variant uppercase">
                    Captured Location
                  </p>
                  <p className="text-body-md text-primary font-medium">Turkana Central, Sector 4</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-tertiary-fixed/10 border border-tertiary-fixed-dim rounded-xl">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  info
                </span>
                <p className="text-body-md text-tertiary font-medium">
                  By proceeding, you verify that the ID and person match. This action is logged for audit.
                </p>
              </div>
              <button
                onClick={() => setStep(3)}
                className="w-full h-14 bg-primary text-on-primary rounded-xl font-bold text-body-lg flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
              >
                <span className="material-symbols-outlined">verified</span>
                <span>Confirm &amp; Generate PIN</span>
              </button>
              <button
                onClick={() => setStep(1)}
                className="w-full h-14 bg-transparent text-on-surface-variant rounded-xl font-semibold text-body-md flex items-center justify-center gap-2 active:bg-surface-container transition-all"
              >
                <span>Back to Edit</span>
              </button>
            </div>
          </section>
        )}

        {!success && step === 3 && (
          <section>
            <div className="mb-stack-lg text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-secondary/20">
                <span
                  className="material-symbols-outlined text-secondary text-[40px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
              </div>
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-2">Secure PIN Setup</h1>
              <p className="text-body-md text-on-surface-variant">
                Ask the beneficiary to enter a secret 4-digit PIN for future collections.
              </p>
            </div>
            <div className="space-y-8">
              {/* PIN Input Grid */}
              <div className="flex justify-center gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    className="pin-box w-14 h-18 text-center text-headline-lg font-label-mono bg-surface-container-lowest border-2 border-outline-variant rounded-xl"
                    maxLength={1}
                    readOnly
                    placeholder="•"
                    type="password"
                    value={pin[i] ?? ""}
                  />
                ))}
              </div>
              {/* Custom Keyboard */}
              <div className="grid grid-cols-3 gap-3">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
                  <button
                    key={d}
                    onClick={() => pressDigit(d)}
                    className="h-14 bg-surface-container hover:bg-surface-container-high rounded-xl font-bold text-headline-md"
                  >
                    {d}
                  </button>
                ))}
                <button
                  onClick={pressBackspace}
                  className="h-14 bg-surface-container-high hover:bg-surface-container-highest rounded-xl flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">backspace</span>
                </button>
                <button
                  onClick={() => pressDigit("0")}
                  className="h-14 bg-surface-container hover:bg-surface-container-high rounded-xl font-bold text-headline-md"
                >
                  0
                </button>
                <button
                  onClick={submitRegistration}
                  className="h-14 bg-secondary text-on-secondary rounded-xl flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">check_circle</span>
                </button>
              </div>
              <div className="bg-surface-container-highest/50 p-4 rounded-xl border border-outline-variant flex gap-3">
                <span className="material-symbols-outlined text-primary">visibility_off</span>
                <p className="text-[12px] text-on-surface-variant italic">
                  Turn away from the screen and hand the device to the beneficiary for privacy.
                </p>
              </div>
              <button
                onClick={submitRegistration}
                disabled={pin.length < 4}
                className="w-full h-14 bg-primary text-on-primary rounded-xl font-bold text-body-lg flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md mt-4 disabled:opacity-40"
              >
                <span>Submit Registration</span>
              </button>
            </div>
          </section>
        )}

        {success && (
          <section className="text-center py-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative">
                <span
                  className="material-symbols-outlined text-on-secondary text-[64px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping opacity-25" />
              </div>
              <h1 className="text-headline-lg font-headline-lg text-primary mb-4">Registration Complete</h1>
              <p className="text-body-lg text-on-surface-variant max-w-xs mx-auto mb-8">
                Beneficiary <span className="font-bold text-primary">{shortName}</span> has been successfully
                registered and encrypted.
              </p>
              <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/30 mb-8 max-w-xs mx-auto">
                <p className="text-label-mono font-label-mono text-[10px] text-on-surface-variant mb-2">
                  STELLAR REFERENCE HASH
                </p>
                <code className="text-[12px] font-label-mono text-primary break-all">tb_0x4f2...3a92</code>
                <div className="mt-4 flex items-center justify-center gap-2 text-secondary font-bold text-label-mono">
                  <span className="material-symbols-outlined text-[18px]">cloud_done</span>
                  <span>SYNCED TO CLOUD</span>
                </div>
              </div>
            </div>
            <button
              onClick={registerNext}
              className="w-full h-14 bg-primary text-on-primary rounded-xl font-bold text-body-lg active:scale-95 transition-all shadow-md"
            >
              Register Next Beneficiary
            </button>
          </section>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-2 bg-surface/90 backdrop-blur-md border-t border-outline-variant shadow-lg z-50 md:hidden">
        {MOBILE_NAV.map((item) => {
          const isActive = item.key === ACTIVE_KEY;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={
                isActive
                  ? "flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-1"
                  : "flex flex-col items-center justify-center text-on-surface-variant px-4 py-1"
              }
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-label-sm font-body-md text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
