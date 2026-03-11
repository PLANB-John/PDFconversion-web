export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  siteTitle: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  pricing: string;
  privacy: string;
  terms: string;
  free: string;
  pro: string;
  freePlanDescription: string;
  proPlanDescription: string;
  legal: {
    introHeading: string;
    introText: string;
    dataHeading: string;
    dataText: string;
    usageHeading: string;
    usageText: string;
    limitsHeading: string;
    limitsText: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  ko: {
    siteTitle: "PDF 변환 웹",
    heroTitle: "간단한 다국어 시작 페이지",
    heroDescription: "App Router에서 한국어와 영어 라우트를 지원합니다.",
    buttonText: "시작하기",
    pricing: "요금",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    free: "무료",
    pro: "프로",
    freePlanDescription: "개인 사용자에게 적합한 기본 변환 플랜",
    proPlanDescription: "더 높은 처리량이 필요한 팀/업무용 플랜",
    legal: {
      introHeading: "개요",
      introText: "본 문서는 서비스 이용 시 적용되는 기본 정책을 설명합니다.",
      dataHeading: "파일 및 데이터 처리",
      dataText:
        "업로드된 파일은 변환 처리 목적으로만 사용되며, 처리 완료 후 자동 삭제될 수 있습니다.",
      usageHeading: "공정 사용",
      usageText: "서비스 안정성을 위해 과도한 요청 또는 자동화 남용이 제한될 수 있습니다.",
      limitsHeading: "서비스 제한",
      limitsText: "시스템 보호를 위해 파일 크기, 페이지 수, 처리량 등의 제한이 적용됩니다.",
    },
  },
  en: {
    siteTitle: "PDF Conversion Web",
    heroTitle: "Simple Localized Starter Page",
    heroDescription: "Supports Korean and English routes in the App Router.",
    buttonText: "Get Started",
    pricing: "Pricing",
    privacy: "Privacy",
    terms: "Terms",
    free: "Free",
    pro: "Pro",
    freePlanDescription: "A basic conversion plan for individual use",
    proPlanDescription: "A higher-capacity plan for teams and business workflows",
    legal: {
      introHeading: "Overview",
      introText: "This document outlines the core policies that apply to this service.",
      dataHeading: "File and Data Handling",
      dataText:
        "Uploaded files are used only for processing and may be automatically deleted after processing.",
      usageHeading: "Fair Usage",
      usageText:
        "To keep the service stable, excessive requests or abusive automation may be limited.",
      limitsHeading: "Service Limits",
      limitsText:
        "To protect the system, limits may apply to file size, page count, and processing volume.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
