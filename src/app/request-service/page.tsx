import { AppShell } from "@/components/app-shell";

const fields = [
  "Service category",
  "Vehicle make / model",
  "Issue details",
  "Location",
  "Preferred date & time",
  "Need mobile service?",
  "Budget range",
];

export default function RequestServicePage() {
  return (
    <AppShell
      eyebrow="MVP / Request flow"
      title="Request a service"
      description="This page scaffolds the structured request flow that replaces messy calls and quote hunting. It is one of the highest leverage screens in the whole product."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Request form</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                {field}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-emerald-400/30 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-100">
            Next build step: wire this page to service options and provider-matching rules from the admin-managed feature system.
          </div>
        </div>

        <div className="space-y-6">
          <SummaryCard title="Why this screen matters" body="This form is the conversion engine of Zinder. If we make it clear, fast, and confidence-building, the business gets real demand." />
          <SummaryCard title="Immediate implementation target" body="Connect category options, feature toggles, and structured submission payloads so providers receive high-intent leads only." />
        </div>
      </section>
    </AppShell>
  );
}

function SummaryCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}
