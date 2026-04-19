import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function RequestsPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Requests"
      title="Requests and orders"
      description="Customer and provider request flows are important marketplace pages, but for now this route intentionally ships as a UI placeholder until the order API is finalized."
    >
      <PlaceholderStateGrid title="Requests / Orders" />
    </AppShell>
  );
}
