import { AppShell } from "@/components/app-shell";
import { providerLeads } from "@/data/marketplace";

export default function ProviderDashboardPage() {
  return (
    <AppShell
      eyebrow="MVP / Provider"
      title="Provider dashboard"
      description="Providers need a fast-operating console for qualified leads, quote handling, and response speed. This page sets up that operating surface."
    >
      <section className="grid gap-6 lg:grid-cols-4">
        <Metric title="New leads" value="5" />
        <Metric title="Awaiting quotes" value="2" />
        <Metric title="Acceptance rate" value="61%" />
        <Metric title="Average response" value="14 min" />
      </section>

      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Lead inbox</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {providerLeads.map((lead) => (
            <div key={`${lead.customer}-${lead.service}`} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold text-white">{lead.customer}</div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                  {lead.status}
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <div>Service: {lead.service}</div>
                <div>Urgency: {lead.urgency}</div>
                <div>Location: {lead.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-3 text-3xl font-bold text-white">{value}</div>
    </div>
  );
}
