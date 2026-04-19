import { AppShell } from "@/components/app-shell";
import { PlaceholderStateGrid } from "@/components/placeholder-state-grid";

export default function WalletPage() {
  return (
    <AppShell
      eyebrow="Phase 2 / Wallet"
      title="Payments and wallet"
      description="Wallet, payouts, and transaction history are held as a frontend placeholder now, so the design and future payment architecture can anchor to a real route."
    >
      <PlaceholderStateGrid title="Payments / Wallet" />
    </AppShell>
  );
}
