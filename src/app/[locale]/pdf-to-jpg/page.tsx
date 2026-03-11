import { dictionary, type Locale } from "@/lib/i18n";

type PdfToJpgPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PdfToJpgPage({ params }: PdfToJpgPageProps) {
  const { locale } = await params;
  const t = dictionary[locale].pdfToJpg;

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{t.title}</h1>
        <p className="text-base text-slate-600">{t.description}</p>
      </div>

      <div className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">{t.uploadTitle}</h2>

        <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="mb-4 text-base text-slate-700">{t.dragAndDrop}</p>
          <button
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            type="button"
          >
            {t.chooseFile}
          </button>
        </div>

        <div className="mt-5 space-y-1.5 text-sm text-slate-600">
          <p>{t.supportedFormat}</p>
          <p>{t.limits}</p>
          <p>{t.freePlanNote}</p>
          <p className="font-medium text-amber-700">{t.comingSoon}</p>
        </div>
      </div>
    </section>
  );
}
