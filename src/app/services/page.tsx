import { AppShell } from "@/components/app-shell";
import { ProviderCard, ServiceCard } from "@/components/marketplace/cards";
import { providers, services } from "@/data/marketplace";

export default function ServicesPage() {
  return (
    <AppShell
      eyebrow="MVP / Discovery"
      title="Search services and compare providers"
      description="This is the first real marketplace slice for Zinder. It gives us a usable services discovery view plus nearby providers, which is the right center of gravity for the product."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-white">Filters panel</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <FilterChip label="Category: Emergency roadside" />
            <FilterChip label="Availability: Open now" />
            <FilterChip label="Mobile service only" />
            <FilterChip label="Sort: Rating / ETA / Price" />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Recommended providers</h2>
          <p className="mt-2 text-sm text-slate-400">Provider cards are ready for design refinement and later API wiring.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.slug} {...provider} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function FilterChip({ label }: { label: string }) {
  return <div className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-3">{label}</div>;
}
