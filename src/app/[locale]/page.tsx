import Link from "next/link";
import { dictionary, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const t = dictionary[locale];
  const otherLocale = locale === "ko" ? "en" : "ko";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-5 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.siteTitle}</h1>
        <h2 className="text-2xl font-semibold">{t.heroTitle}</h2>
        <p className="text-base text-slate-300 sm:text-lg">{t.heroDescription}</p>
        <button className="rounded-md bg-slate-100 px-4 py-2 font-medium text-slate-900">
          {t.buttonText}
        </button>
        <Link className="text-sm text-slate-300 underline" href={`/${otherLocale}`}>
          {locale === "ko" ? "English" : "한국어"}
        </Link>
      </section>
    </main>
  );
}
