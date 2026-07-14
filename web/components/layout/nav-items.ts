export type NavKey =
  | "dashboard"
  | "programmes"
  | "beneficiaries"
  | "deliveries"
  | "fraud"
  | "audit";

export interface NavItem {
  key: NavKey;
  label: string;
  icon: string;
  href: string;
  badge?: number;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard", href: "/" },
  { key: "programmes", label: "Programmes", icon: "inventory_2", href: "#" },
  { key: "beneficiaries", label: "Beneficiaries", icon: "groups", href: "/beneficiaries" },
  { key: "deliveries", label: "Deliveries", icon: "local_shipping", href: "/deliveries" },
  { key: "fraud", label: "Fraud Alerts", icon: "report_problem", href: "/fraud", badge: 3 },
  { key: "audit", label: "Audit Logs", icon: "verified_user", href: "/fraud" },
];
