import Link from "next/link";

import { PdfToJpgUploadPanel } from "./PdfToJpgUploadPanel";
import { dictionary, type Locale } from "@/lib/i18n";

type PdfToJpgPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PdfToJpgPage({ params }: PdfToJpgPageProps) {
  const { locale } = await params;
  const t = dictionary[locale].pdfToJpg;

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

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 pb-8">
      <div className="rounded-3xl bg-gradient-to-b from-sky-50 via-indigo-50 to-white p-5 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-4xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">AlloraTools</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">{t.description}</p>
        </div>

        <div className="mt-8">
          <PdfToJpgUploadPanel t={t} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefitItems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">{t.howItWorksTitle}</h2>
        <p className="mt-2 text-sm text-slate-600">{t.howItWorksDescription}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{t.stepLabel} {index + 1}</p>
              <p className="mt-2 text-sm font-medium text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">{t.usageInfoTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.usageInfoDescription}</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="rounded-lg bg-slate-50 px-4 py-3">{t.guestUsageLine}</li>
            <li className="rounded-lg bg-slate-50 px-4 py-3">{t.memberUsageLine}</li>
            <li className="rounded-lg bg-slate-50 px-4 py-3">{t.verificationUsageLine}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">{t.reliabilityTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t.reliabilityDescription}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• {t.reliabilityPointOne}</li>
            <li>• {t.reliabilityPointTwo}</li>
            <li>• {t.reliabilityPointThree}</li>
          </ul>
        </article>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">{t.faqTeaserTitle}</h2>
        <p className="mt-2 text-sm text-slate-600">{t.faqTeaserDescription}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {faqPreview.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <Link
          href={`/${locale}/faq`}
          className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          {t.faqTeaserButton}
        </Link>
      </div>
    </section>
  );
}
