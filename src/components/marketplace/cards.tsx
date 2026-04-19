import Link from "next/link";

type ServiceCardProps = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  eta: string;
  mobile: boolean;
};

export function ServiceCard({ id, name, category, description, priceRange, eta, mobile }: ServiceCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-cyan-200">{category}</div>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
        </div>
        <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {mobile ? "Mobile available" : "In-shop only"}
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="rounded-full bg-slate-900/80 px-3 py-2">{priceRange}</span>
        <span className="rounded-full bg-slate-900/80 px-3 py-2">ETA: {eta}</span>
      </div>
      <div className="mt-6 flex gap-3">
        <Link href={`/request-service?service=${id}`} className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950">
          Request service
        </Link>
        <Link href="/dashboard/customer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
          View flow
        </Link>
      </div>
    </article>
  );
}

type ProviderCardProps = {
  slug: string;
  companyName: string;
  rating: number;
  reviews: number;
  city: string;
  responseTime: string;
  availability: string;
  services: string[];
  description: string;
};

export function ProviderCard({ slug, companyName, rating, reviews, city, responseTime, availability, services, description }: ProviderCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{companyName}</h3>
          <p className="mt-2 text-sm text-slate-400">{city}</p>
        </div>
        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
          {availability}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="rounded-full bg-slate-900/80 px-3 py-2">⭐ {rating} ({reviews} reviews)</span>
        <span className="rounded-full bg-slate-900/80 px-3 py-2">Responds in {responseTime}</span>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {services.map((service) => (
          <span key={service} className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300">
            {service}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <Link href={`/providers/${slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
          View profile
        </Link>
        <Link href="/request-service" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
          Send request
        </Link>
      </div>
    </article>
  );
}
