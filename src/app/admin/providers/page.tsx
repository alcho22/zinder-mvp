import { AppShell } from "@/components/app-shell";
import { ManagementTable } from "@/components/admin/management-sections";

const columns = [
  { key: "companyName", label: "Company name" },
  { key: "status", label: "Status" },
  { key: "profile", label: "Profile" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    companyName: "Austin Mobile Battery Co.",
    status: "Active",
    profile: "View provider profile",
    actions: "Toggle active / inactive",
  },
  {
    companyName: "Rapid Tire Pros",
    status: "Inactive",
    profile: "View provider profile",
    actions: "Toggle active / inactive",
  },
  {
    companyName: "Downtown Detail House",
    status: "Active",
    profile: "View provider profile",
    actions: "Toggle active / inactive",
  },
];

export default function AdminProvidersPage() {
  return (
    <AppShell
      eyebrow="Admin / Providers"
      title="Provider management"
      description="Admin can list providers, inspect their profile, and activate or deactivate them. This page is scaffolded to match the API direction you already described."
    >
      <ManagementTable
        title="Provider list"
        description="The frontend keeps company name, status, profile preview action, and active/inactive control visible in one place."
        columns={columns}
        rows={rows}
      />
    </AppShell>
  );
}
