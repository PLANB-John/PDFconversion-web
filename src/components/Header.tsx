"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionary, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const t = dictionary[locale];
  const pathname = usePathname();
  const otherLocale: Locale = locale === "ko" ? "en" : "ko";

  const switchedPath = pathname
    ? pathname.replace(new RegExp(`^/${locale}`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
        <Link className="text-lg font-semibold text-slate-900" href={`/${locale}`}>
          {t.siteTitle}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link className="hover:text-slate-900" href={`/${locale}/pricing`}>
            {t.pricing}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/privacy`}>
            {t.privacy}
          </Link>
          <Link className="hover:text-slate-900" href={`/${locale}/terms`}>
            {t.terms}
          </Link>
          <Link className="font-medium text-slate-900 underline" href={switchedPath}>
            {otherLocale}
          </Link>
        </nav>
      </div>
    </header>
  );
}
