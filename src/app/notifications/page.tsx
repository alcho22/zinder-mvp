import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function NotificationsPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Notifications"
      title="Notifications center"
      description="Notifications are scaffolded here for later integration with request updates, quote responses, and provider/customer actions."
    >
      <PlaceholderStateGrid title="Notifications" />
    </AppShell>
  );
}
