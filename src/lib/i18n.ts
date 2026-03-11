export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export const dictionary: Record<
  Locale,
  {
    siteTitle: string;
    heroTitle: string;
    heroDescription: string;
    buttonText: string;
  }
> = {
  ko: {
    siteTitle: "PDF 변환 웹",
    heroTitle: "간단한 다국어 시작 페이지",
    heroDescription: "App Router에서 한국어와 영어 라우트를 지원합니다.",
    buttonText: "시작하기",
  },
  en: {
    siteTitle: "PDF Conversion Web",
    heroTitle: "Simple Localized Starter Page",
    heroDescription: "Supports Korean and English routes in the App Router.",
    buttonText: "Get Started",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
