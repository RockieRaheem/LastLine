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
  group: "Operations" | "Oversight";
}

export const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard", href: "/", group: "Operations" },
  { key: "programmes", label: "Programmes", icon: "inventory_2", href: "#", group: "Operations" },
  { key: "beneficiaries", label: "Beneficiaries", icon: "groups", href: "/beneficiaries", group: "Operations" },
  { key: "deliveries", label: "Deliveries", icon: "local_shipping", href: "/deliveries", group: "Operations" },
  { key: "fraud", label: "Fraud Alerts", icon: "report_problem", href: "/fraud", badge: 3, group: "Oversight" },
  { key: "audit", label: "Audit Logs", icon: "verified_user", href: "/fraud", group: "Oversight" },
];
