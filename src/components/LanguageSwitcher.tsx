"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { locales, type Locale } from "@/lib/i18n";

const languageItems: Record<Locale, string> = {
  ko: "🇰🇷 한국어",
  en: "🇺🇸 ENGLISH",
  ja: "🇯🇵 日本語",
  es: "🇪🇸 ESPAÑOL",
  de: "🇩🇪 DEUTSCH",
};

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const localePattern = useMemo(() => new RegExp(`^/(${locales.join("|")})(?=/|$)`), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-800 hover:bg-slate-100"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        LANGUAGE
      </button>

      {open ? (
        <ul className="absolute right-0 z-10 mt-2 w-40 rounded-md border border-slate-200 bg-white p-1 shadow-sm" role="menu">
          {locales.map((nextLocale) => {
            const switchedPath = pathname
              ? pathname.replace(localePattern, `/${nextLocale}`)
              : `/${nextLocale}`;

            return (
              <li key={nextLocale}>
                <Link
                  className={`block rounded px-2 py-1.5 text-sm ${
                    nextLocale === locale
                      ? "bg-slate-100 font-medium text-slate-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  href={switchedPath}
                  onClick={() => setOpen(false)}
                  role="menuitem"
                >
                  {languageItems[nextLocale]}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
