import Link from "next/link";
import { dictionary, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const t = dictionary[locale];

  return (
    <footer className="border-t border-violet-100/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p>© AlloraTools</p>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href={`/${locale}/about`}>{t.about}</Link>
          <Link href={`/${locale}/contact`}>{t.contact}</Link>
          <Link href={`/${locale}/faq`}>{t.faq}</Link>
          <Link href={`/${locale}/privacy`}>{t.privacy}</Link>
          <Link href={`/${locale}/terms`}>{t.terms}</Link>
        </nav>
      </div>
    </footer>
  );
}
