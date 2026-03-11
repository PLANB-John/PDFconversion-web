import Link from "next/link";
import { dictionary, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const t = dictionary[locale];

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{t.siteTitle}</h1>
        <h2 className="text-2xl font-semibold text-slate-800">{t.heroTitle}</h2>
        <p className="mx-auto max-w-2xl text-base text-slate-600">{t.heroDescription}</p>
        <Link
          className="inline-flex rounded-md bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:bg-slate-800"
          href={`/${locale}/pdf-to-jpg`}
        >
          {t.buttonText}
        </Link>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-3">
        <div className="rounded-lg bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
          {t.homeFeatureFast}
        </div>
        <div className="rounded-lg bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
          {t.homeFeatureSecure}
        </div>
        <div className="rounded-lg bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
          {t.homeFeatureSimple}
        </div>
      </div>

      <article className="rounded-2xl border border-slate-300 bg-white p-7 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900">{t.pdfToJpgCtaTitle}</h3>
        <p className="mt-2 text-slate-600">{t.pdfToJpgCtaDescription}</p>
        <Link
          className="mt-5 inline-flex rounded-md border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          href={`/${locale}/pdf-to-jpg`}
        >
          {t.pdfToJpgCtaButton}
        </Link>
      </article>
    </section>
  );
}
