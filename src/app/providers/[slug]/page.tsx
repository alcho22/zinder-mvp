import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { providers } from "@/data/marketplace";

type ProviderProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProviderProfilePage({ params }: ProviderProfilePageProps) {
  const { slug } = await params;
  const provider = providers.find((item) => item.slug === slug);

  if (!provider) {
    notFound();
  }

  return (
    <AppShell
      eyebrow="MVP / Provider profile"
      title={provider.companyName}
      description={provider.description}
    >
      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Provider snapshot</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <InfoBlock label="City" value={provider.city} />
            <InfoBlock label="Rating" value={`${provider.rating} / 5`} />
            <InfoBlock label="Reviews" value={`${provider.reviews}`} />
            <InfoBlock label="Response time" value={provider.responseTime} />
            <InfoBlock label="Availability" value={provider.availability} />
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Offered services</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {provider.services.map((service) => (
              <span key={service} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
