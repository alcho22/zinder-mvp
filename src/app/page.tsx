import { ArrowRight, BadgeCheck, CarFront, Clock3, MapPin, ShieldCheck, Wrench } from "lucide-react";

const stats = [
  { label: "وقت کمتر برای پیدا کردن سرویس", value: "دقیقه ها به جای ساعت ها" },
  { label: "شفافیت بیشتر", value: "قیمت، امتیاز، زمان" },
  { label: "مدل درآمد اولیه", value: "qualified leads" },
];

const customerBenefits = [
  "مقایسه سریع سرویس دهنده های نزدیک بر اساس قیمت، امتیاز و availability",
  "ارسال درخواست ساختاریافته به جای تماس و پیام های پراکنده",
  "یافتن سرویس های حضوری و mobile بدون اتلاف وقت",
];

const providerBenefits = [
  "دریافت لیدهای آماده خرید به جای ترافیک بی کیفیت",
  "پر کردن ظرفیت خالی روزانه با درخواست های محلی",
  "نمایش کیفیت و اعتبار به جای رقابت صرف روی کاهش قیمت",
];

const mvpModules = [
  "Landing page و معرفی ارزش محصول",
  "جستجوی سرویس و انتخاب دسته بندی",
  "فرم ثبت درخواست سرویس",
  "پنل کاربر برای پیگیری درخواست ها",
  "پنل provider برای مشاهده لید و ارسال quote",
  "مدل داده برای خدمات، درخواست ها، quote و review",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <div className="text-xl font-bold tracking-tight text-white">Zinder</div>
            <div className="text-xs text-white/60">Marketplace for local car services</div>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            MVP in progress
          </div>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <CarFront className="h-4 w-4" />
              Faster car-service decisions, less guesswork
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Find trusted car services near you, compare fast, book with confidence.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Zinder helps car owners compare nearby providers by price range, rating, and availability, then send one structured request directly to the right shop or mobile mechanic.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
                Start a request
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                Become a provider
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="mt-2 text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[28px] border border-white/10 bg-[#11182d] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Live MVP focus</div>
                  <div className="text-2xl font-semibold">Service request flow</div>
                </div>
                <Wrench className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  Location-aware provider matching
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 className="h-5 w-5 text-cyan-300" />
                  Availability and response-time visibility
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                  Trust signals through ratings and reviews
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                  <BadgeCheck className="h-5 w-5" />
                  Initial monetization: pay per qualified lead
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0f172a]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-10">
          <FeatureCard title="For customers" items={customerBenefits} />
          <FeatureCard title="For providers" items={providerBenefits} />
          <FeatureCard title="MVP modules" items={mvpModules} />
        </div>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  items: string[];
};

function FeatureCard({ title, items }: FeatureCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
