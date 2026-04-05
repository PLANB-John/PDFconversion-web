import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { dictionary, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const t = dictionary[locale];

  return (
    <header className="border-b border-violet-100/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-slate-900" href={`/${locale}`}>
          {t.siteTitle}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700">
          <Link className="transition hover:text-violet-700" href={`/${locale}/about`}>
            {t.about}
          </Link>
          <Link className="transition hover:text-violet-700" href={`/${locale}/contact`}>
            {t.contact}
          </Link>
          <Link className="transition hover:text-violet-700" href={`/${locale}/faq`}>
            {t.faq}
          </Link>
          <Link className="transition hover:text-violet-700" href={`/${locale}/pricing`}>
            {t.pricing}
          </Link>
          <Link className="transition hover:text-violet-700" href={`/${locale}/privacy`}>
            {t.privacy}
          </Link>
          <Link className="transition hover:text-violet-700" href={`/${locale}/terms`}>
            {t.terms}
          </Link>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
