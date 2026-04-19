import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function ReviewsPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Reviews"
      title="Reviews and trust signals"
      description="Ratings, written reviews, and trust layers will matter heavily in Zinder. This route keeps the future UI in the project now so design and planning do not slip."
    >
      <PlaceholderStateGrid title="Reviews" />
    </AppShell>
  );
}
