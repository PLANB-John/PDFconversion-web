import { dictionary, type Locale } from "@/lib/i18n";

type PricingPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  const t = dictionary[locale];

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">{t.pricing}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">{t.free}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.freePlanDescription}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {t.freeFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">{t.pro}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.proPlanDescription}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {t.proFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
