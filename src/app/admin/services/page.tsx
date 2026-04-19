import { AppShell } from "@/components/app-shell";
import { DeliverableChecklist, ManagementTable } from "@/components/admin/management-sections";

const columns = [
  { key: "service", label: "Service" },
  { key: "feature", label: "Feature" },
  { key: "type", label: "Type" },
  { key: "required", label: "Required" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    service: "Battery Replacement",
    feature: "Battery size",
    type: "select",
    required: "Yes",
    status: "Active",
    actions: "Edit • Toggle • Delete confirm",
  },
  {
    service: "Mobile Mechanic",
    feature: "Urgency",
    type: "radio",
    required: "No",
    status: "Inactive",
    actions: "Edit • Toggle • Drag-sort",
  },
  {
    service: "Tire Service",
    feature: "Wheel size",
    type: "text / select",
    required: "Yes",
    status: "Active",
    actions: "Edit • Toggle • Drag-sort",
  },
];

const deliverables = [
  "Loading / Empty / Error states for every management screen",
  "Reusable admin table rows and feature edit modal",
  "Delete confirm dialog design",
  "Drag and drop sorting treatment for feature order",
];

export default function AdminServicesPage() {
  return (
    <AppShell
      eyebrow="Admin / Service Options"
      title="Manage service features and option toggles"
      description="This page scaffolds the admin flow for controlling the option set inside each service. The real API wiring can attach to these states once the manager endpoints are integrated."
    >
      <ManagementTable
        title="Feature option inventory"
        description="Per-service feature rows, active/inactive toggles, edit metadata, and drag-sort placeholders are represented here in the frontend scaffold."
        columns={columns}
        rows={rows}
      />

      <DeliverableChecklist items={deliverables} />
    </AppShell>
  );
}
