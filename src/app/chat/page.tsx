import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function ChatPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Chat"
      title="Customer-provider chat"
      description="Live messaging will likely become a retention and conversion lever, so the frontend route exists now as a deliberate placeholder."
    >
      <PlaceholderStateGrid title="Chat" />
    </AppShell>
  );
}
