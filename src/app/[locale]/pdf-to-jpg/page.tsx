import { PdfToJpgUploadPanel } from "./PdfToJpgUploadPanel";
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

      <PdfToJpgUploadPanel t={t} />
    </section>
  );
}
