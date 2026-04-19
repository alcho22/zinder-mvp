import { AppShell } from "@/components/app-shell";
import { FilterChipSection, ManagementTable } from "@/components/admin/management-sections";

const filters = [
  "serviceId",
  "providerId",
  "categoryId",
  "features",
  "status",
];

const columns = [
  { key: "provider", label: "Provider" },
  { key: "service", label: "Service" },
  { key: "category", label: "Category" },
  { key: "features", label: "Features" },
  { key: "availability", label: "Availability" },
];

const rows = [
  {
    provider: "Austin Mobile Battery Co.",
    service: "Battery Replacement",
    category: "Emergency roadside",
    features: "AGM, Lithium, Mobile only",
    availability: "Today • 2pm-7pm",
  },
  {
    provider: "Rapid Tire Pros",
    service: "Tire Swap",
    category: "Tire services",
    features: "SUV, sedan, premium wheels",
    availability: "Tomorrow • 9am-4pm",
  },
];

export default function AdminProviderServicesPage() {
  return (
    <AppShell
      eyebrow="Admin / Explorer"
      title="Provider-service explorer"
      description="This admin page is designed for deeper filtering and exploration across providers, services, categories, and feature combinations."
    >
      <FilterChipSection title="Manager filters" filters={filters} />
      <ManagementTable
        title="Filtered provider-service results"
        description="Use this scaffold to attach the manager API that returns provider-service rows based on selected filters."
        columns={columns}
        rows={rows}
      />
    </AppShell>
  );
}
