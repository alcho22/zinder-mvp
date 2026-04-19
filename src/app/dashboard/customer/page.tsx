import { AppShell } from "@/components/app-shell";
import { customerRequests } from "@/data/marketplace";

export default function CustomerDashboardPage() {
  return (
    <AppShell
      eyebrow="MVP / Customer"
      title="Customer dashboard"
      description="A customer needs one clean place to track request status, compare provider responses, and move quickly from uncertainty to booking."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <Metric title="Active requests" value="2" />
        <Metric title="Quotes received" value="3" />
        <Metric title="Preferred provider match" value="4.9⭐" />
      </section>

      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Current requests</h2>
        <div className="mt-5 space-y-4">
          {customerRequests.map((request) => (
            <div key={request.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-white">{request.title}</div>
                  <div className="mt-2 text-sm text-slate-400">Provider: {request.provider}</div>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  {request.status}
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-300">Scheduled: {request.scheduled}</div>
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
