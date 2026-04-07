import Link from "next/link";

import { PdfToJpgUploadPanel } from "./PdfToJpgUploadPanel";
import { dictionary, type Locale } from "@/lib/i18n";

type PdfToJpgPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PdfToJpgPage({ params }: PdfToJpgPageProps) {
  const { locale } = await params;
  const pageCopy = dictionary[locale];
  const t = pageCopy.pdfToJpg;

  const benefitItems = [
    {
      title: t.benefitFastTitle,
      description: t.benefitFastDescription,
    },
    {
      title: t.benefitSecureTitle,
      description: t.benefitSecureDescription,
    },
    {
      title: t.benefitFreeTitle,
      description: t.benefitFreeDescription,
    },
    {
      title: t.benefitDeviceTitle,
      description: t.benefitDeviceDescription,
    },
  ];

  const steps = [t.stepUpload, t.stepConvert, t.stepDownload];
  const faqPreview = [t.faqPreviewOne, t.faqPreviewTwo, t.faqPreviewThree];
  const upcomingTools = ["PDF to PNG", "JPG to PDF", "Merge PDF", "Compress PDF"];

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-10 lg:gap-10">
      <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-rose-100/70 via-violet-100/70 to-sky-100/70 p-4 shadow-xl shadow-violet-100/40 sm:p-6 lg:p-10">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-5 backdrop-blur sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">AlloraTools Platform</p>
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{t.title}</h1>
            <p className="max-w-2xl text-base text-slate-700 sm:text-lg">{t.description}</p>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              {t.howItWorksDescription}
            </p>
          </div>

          <aside className="rounded-3xl border border-violet-200/80 bg-white/80 p-5 shadow-md shadow-violet-100/70 sm:p-6">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">{t.usageInfoTitle}</h2>
            <p className="mt-2 text-sm text-slate-600">{t.usageInfoDescription}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="rounded-xl bg-violet-50 px-3 py-2">{t.guestUsageLine}</li>
              <li className="rounded-xl bg-sky-50 px-3 py-2">{t.memberUsageLine}</li>
              <li className="rounded-xl bg-rose-50 px-3 py-2">{t.verificationUsageLine}</li>
            </ul>
          </aside>
        </div>

        <div className="mt-6">
          <PdfToJpgUploadPanel t={t} />
        </div>
      </div>

      <div className="rounded-3xl border border-violet-100 bg-white/80 p-5 shadow-lg shadow-violet-100/40 sm:p-7">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Tool ecosystem (expanding)</h2>
            <p className="text-sm leading-6 text-slate-600 sm:text-base">
              PDF to JPG is the featured workflow today, and the same workspace is prepared for additional practical converters.
            </p>
          </div>
          <Link
            href={`/${locale}/pdf-to-jpg`}
            className="inline-flex rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
          >
            {pageCopy.pdfToJpgCtaButton}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {upcomingTools.map((toolName, index) => (
            <article
              key={toolName}
              className="rounded-2xl border border-violet-100 bg-gradient-to-b from-white to-violet-50/60 p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">Coming soon</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{toolName}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {index % 2 === 0 ? t.benefitFastDescription : t.benefitDeviceDescription}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefitItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-sky-100 bg-gradient-to-b from-white to-sky-50/60 p-5 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">{t.howItWorksTitle}</h2>
        <p className="mt-2 text-sm text-slate-600">{t.howItWorksDescription}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">{t.stepLabel} {index + 1}</p>
              <p className="mt-2 text-sm font-medium text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">{t.usageInfoTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.usageInfoDescription}</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="rounded-lg bg-rose-50 px-4 py-3">{t.guestUsageLine}</li>
            <li className="rounded-lg bg-violet-50 px-4 py-3">{t.memberUsageLine}</li>
            <li className="rounded-lg bg-sky-50 px-4 py-3">{t.verificationUsageLine}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">{t.reliabilityTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t.reliabilityDescription}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• {t.reliabilityPointOne}</li>
            <li>• {t.reliabilityPointTwo}</li>
            <li>• {t.reliabilityPointThree}</li>
          </ul>
        </article>
      </div>

      <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">{t.faqTeaserTitle}</h2>
        <p className="mt-2 text-sm text-slate-600">{t.faqTeaserDescription}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {faqPreview.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <Link
          href={`/${locale}/faq`}
          className="mt-6 inline-flex rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          {t.faqTeaserButton}
        </Link>
      </div>
    </section>
  );
}
