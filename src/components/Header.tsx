import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { dictionary, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const t = dictionary[locale];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link className="text-lg font-semibold text-slate-900" href={`/${locale}`}>
          {t.siteTitle}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700">
          <Link className="hover:text-slate-900" href={`/${locale}/about`}>
            {t.about}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/contact`}>
            {t.contact}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/faq`}>
            {t.faq}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/pricing`}>
            {t.pricing}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/privacy`}>
            {t.privacy}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/terms`}>
            {t.terms}
          </Link>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
