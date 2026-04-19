import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function QuotesPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Quotes"
      title="Quote and accept flow"
      description="This placeholder page reserves the future quote review and accept/reject experience for both customer and provider roles."
    >
      <PlaceholderStateGrid title="Quote / Accept flow" />
    </AppShell>
  );
}
