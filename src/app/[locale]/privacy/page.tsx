import { dictionary, type Locale } from "@/lib/i18n";

type PrivacyPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const t = dictionary[locale];

  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">{t.privacy}</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{t.legal.introHeading}</h2>
        <p className="text-slate-700">{t.legal.introText}</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{t.legal.dataHeading}</h2>
        <p className="text-slate-700">{t.legal.dataText}</p>
      </div>
    </section>
  );
}
