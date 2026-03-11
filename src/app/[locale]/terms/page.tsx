import { dictionary, type Locale } from "@/lib/i18n";

type TermsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = dictionary[locale];

  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">{t.terms}</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{t.legal.usageHeading}</h2>
        <p className="text-slate-700">{t.legal.usageText}</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{t.legal.limitsHeading}</h2>
        <p className="text-slate-700">{t.legal.limitsText}</p>
      </div>
    </section>
  );
}
