import { legalDocuments } from "@/lib/legal";
import { type Locale } from "@/lib/i18n";

type TermsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const doc = legalDocuments[locale].terms;

  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-sm text-slate-600">
          {doc.effectiveLabel}: {doc.effectiveDate} | {doc.updatedLabel}: {doc.updatedDate}
        </p>
        <p className="text-slate-700">{doc.intro}</p>
      </header>

      {doc.sections.map((section) => (
        <div
          key={section.title}
          className={section.boxed ? "space-y-2 rounded-lg border border-slate-200 bg-white p-5" : "space-y-3"}
        >
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-slate-700">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}
