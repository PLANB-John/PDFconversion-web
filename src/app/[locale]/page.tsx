import { dictionary, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const t = dictionary[locale];

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{t.siteTitle}</h1>
      <h2 className="text-2xl font-semibold text-slate-800">{t.heroTitle}</h2>
      <p className="text-base text-slate-600">{t.heroDescription}</p>
      <button className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white">
        {t.buttonText}
      </button>
    </section>
  );
}
