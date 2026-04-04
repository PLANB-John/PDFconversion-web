import { infoDocuments } from "@/lib/info";
import { type Locale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const doc = infoDocuments[locale].contact;

  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-slate-700">{doc.intro}</p>
      </header>

      <article className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <p className="text-sm font-medium text-slate-500">{doc.emailLabel}</p>
          <a className="text-base font-semibold text-slate-900 underline underline-offset-2" href={`mailto:${doc.email}`}>
            {doc.email}
          </a>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{doc.inquiryTitle}</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {doc.inquiryTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-slate-600">{doc.responseNote}</p>
      </article>
    </section>
  );
}
