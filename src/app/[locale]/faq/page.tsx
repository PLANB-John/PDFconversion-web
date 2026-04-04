import { infoDocuments } from "@/lib/info";
import { type Locale } from "@/lib/i18n";

type FaqPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale } = await params;
  const doc = infoDocuments[locale].faq;

  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-slate-700">{doc.intro}</p>
      </header>

      <div className="space-y-4">
        {doc.items.map((item) => (
          <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">{item.question}</h2>
            <p className="mt-2 text-slate-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
