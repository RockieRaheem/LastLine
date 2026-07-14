---
name: Humanitarian Integrity System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#424751'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#737782'
  outline-variant: '#c3c6d2'
  surface-tint: '#2e5ea5'
  primary: '#003874'
  on-primary: '#ffffff'
  primary-container: '#1a4f95'
  on-primary-container: '#a3c3ff'
  inverse-primary: '#aac7ff'
  secondary: '#006b5c'
  on-secondary: '#ffffff'
  secondary-container: '#79f4db'
  on-secondary-container: '#007060'
  tertiary: '#682200'
  on-tertiary: '#ffffff'
  tertiary-container: '#8e3100'
  on-tertiary-container: '#ffaf90'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#08458b'
  secondary-fixed: '#7cf7de'
  secondary-fixed-dim: '#5ddbc2'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005045'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system is anchored in the principles of **Institutional Trust, Operational Transparency, and Universal Accessibility**. It serves a dual-purpose environment: a high-density administrative portal for oversight and a high-contrast, low-latency mobile interface for field operations.

The aesthetic follows a **Corporate Modern** style with a focus on functional clarity. It avoids decorative flourishes in favor of structural integrity. The emotional goal is to provide a "calm in the storm"—a reliable, unwavering platform that remains legible and professional even in high-stress humanitarian crises. Key visual drivers include:
- **Clarity over Cleverness:** Icons and labels are literal and unambiguous.
- **Reliability:** Heavy use of "Secure Teal" and "TrustBridge Blue" to signify stability and successful verification.
- **Urgency Management:** "Alert Orange" is used surgically to highlight friction points and fraud without inducing panic.

## Colors

The palette is designed to communicate status at a glance. The default mode is **Light**, utilizing a cool-gray scale to maintain a clean, institutional background that maximizes contrast for critical status indicators.

- **TrustBridge Blue (#1A4F95):** Used for primary actions, navigation, and structural branding. It denotes authority and the established system.
- **Secure Teal (#00A38D):** Specifically reserved for "Success," "Verified," and "Authenticated" states. It provides a distinct visual reward for completed humanitarian milestones.
- **Alert Orange (#F26522):** Dedicated to "Exceptions," "Fraud Detection," and "Required Action." Its high visibility ensures operational risks are never overlooked in a data-heavy dashboard.
- **Neutral Scale:** A range of slate-tinted grays is used for typography and UI borders to maintain a professional, sophisticated tone.

## Typography

The typography system prioritizes legibility across varying device qualities and environmental conditions. 

- **Manrope** is used for headlines to provide a modern, balanced, and professional structure. Its geometric roots ensure high readability in headers.
- **Inter** is the workhorse for body text and data tables. It is chosen for its exceptional clarity in small sizes and neutral character.
- **JetBrains Mono** is utilized for "Label-Mono" styles, specifically for Reference IDs, PINs, and Blockchain hashes. The monospaced nature helps field workers distinguish between similar characters (e.g., 0 and O) when verifying aid delivery.

## Layout & Spacing

This design system utilizes a **Hybrid Grid** model to accommodate both deep analytical work and rapid field data entry.

- **Administrative Portal:** A 12-column fluid grid with a 1440px max-width. Gaps are tight (1.5rem) to allow for high-density data visualizations and side-by-side audit comparisons.
- **Mobile Field App:** A single-column vertical stack with generous tap targets (minimum 48px height). Margins are reduced to 1rem to maximize screen real estate on smaller devices.
- **Spacing Rhythm:** Based on an 8px base unit. Vertical spacing (Stack) is used to group related information (e.g., Beneficiary Name + ID), while larger gaps separate workflow stages.

## Elevation & Depth

To maintain a "Professional and Secure" feel, this design system avoids heavy shadows. Instead, it uses **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** The background uses a very light gray (#F8FAFC). Cards and containers are pure white (#FFFFFF) with a 1px border (#E2E8F0) to create separation.
- **State-Based Depth:** Active or selected items use a subtle 4px "Ambient Shadow" with a Blue tint to signify focus without appearing physically detached from the page.
- **Mobile Elevation:** For field apps, depth is conveyed through "Sheet" patterns where temporary actions (like PIN entry) slide over the main content, using a 20% opacity black backdrop to focus the user's attention.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough curvature to feel modern and accessible while maintaining the rigid, trustworthy structure of an institutional platform.

- **Primary Buttons:** Use 0.25rem (rounded-sm) for a crisp, professional look.
- **Status Badges (Chips):** Use 1rem (rounded-full/pill) to distinguish them from interactive buttons and indicate they are informational labels.
- **Input Fields:** Squared corners with minimal rounding to maximize internal space for text.

## Components

- **Status Chips:** Pill-shaped labels. "Verified" uses Secure Teal background with white text. "Pending" uses a soft Gray. "Fraud Alert" uses Alert Orange.
- **Primary Action Buttons:** TrustBridge Blue background, bold Inter text. These should be full-width on mobile to facilitate one-handed operation by field staff.
- **Data Cards:** White backgrounds with a subtle top-border color-coded to the status of the delivery task.
- **PIN Inputs:** Four distinct, high-contrast boxes with JetBrains Mono font to ensure the beneficiary can clearly see the numbers being entered during verification.
- **Audit Lists:** High-density rows with alternating "Zebra" striping for the portal, but high-contrast "Card" blocks for the mobile app to ensure legibility in sunlight.
- **Connectivity Indicator:** A persistent top-level component showing "Online" (Teal) or "Offline - Syncing Locally" (Blue) to manage user expectations in low-connectivity zones.