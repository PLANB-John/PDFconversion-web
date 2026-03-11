import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { isLocale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header locale={locale} />
      <main className="mx-auto w-full max-w-4xl px-6 py-12">{children}</main>
    </div>
  );
}
