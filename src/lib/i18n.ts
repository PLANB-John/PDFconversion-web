export const locales = ["ko", "en", "ja", "es", "de"] as const;

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
  freeFeatures: string[];
  proFeatures: string[];
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
    heroDescription: "App Router에서 한국어, 영어, 일본어, 스페인어, 독일어 라우트를 지원합니다.",
    buttonText: "시작하기",
    pricing: "요금",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    free: "무료",
    pro: "프로",
    freePlanDescription: "개인 사용자에게 적합한 기본 변환 플랜",
    proPlanDescription: "더 높은 처리량이 필요한 팀/업무용 플랜",
    freeFeatures: ["일일 5회 변환", "최대 15MB 파일", "최대 20페이지", "150dpi 내보내기"],
    proFeatures: [
      "더 높은 변환/파일 한도",
      "300dpi 내보내기",
      "우선 처리",
      "KRW / USD 결제 예정",
    ],
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
    heroDescription:
      "Supports Korean, English, Japanese, Spanish, and German routes in the App Router.",
    buttonText: "Get Started",
    pricing: "Pricing",
    privacy: "Privacy",
    terms: "Terms",
    free: "Free",
    pro: "Pro",
    freePlanDescription: "A basic conversion plan for individual use",
    proPlanDescription: "A higher-capacity plan for teams and business workflows",
    freeFeatures: ["5 conversions per day", "Max 15MB file size", "Max 20 pages", "150dpi export"],
    proFeatures: [
      "Higher conversion and file limits",
      "300dpi export",
      "Priority processing",
      "KRW / USD billing planned",
    ],
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
  ja: {
    siteTitle: "PDF変換ウェブ",
    heroTitle: "シンプルな多言語スターターページ",
    heroDescription:
      "App Router で韓国語・英語・日本語・スペイン語・ドイツ語のルートをサポートします。",
    buttonText: "はじめる",
    pricing: "料金",
    privacy: "プライバシー",
    terms: "利用規約",
    free: "無料",
    pro: "プロ",
    freePlanDescription: "個人利用向けの基本変換プラン",
    proPlanDescription: "チームや業務向けの高容量プラン",
    freeFeatures: ["1日5回まで変換", "最大15MBのファイル", "最大20ページ", "150dpiで出力"],
    proFeatures: [
      "より高い変換数・ファイル上限",
      "300dpiで出力",
      "優先処理",
      "KRW / USD 決済を予定",
    ],
    legal: {
      introHeading: "概要",
      introText: "本書は本サービスに適用される基本ポリシーを説明します。",
      dataHeading: "ファイルとデータの取り扱い",
      dataText:
        "アップロードされたファイルは変換処理の目的にのみ使用され、処理後に自動削除される場合があります。",
      usageHeading: "適正利用",
      usageText:
        "サービスの安定性を保つため、過度なリクエストや不正な自動化は制限されることがあります。",
      limitsHeading: "サービス制限",
      limitsText:
        "システム保護のため、ファイルサイズ・ページ数・処理量に制限が適用される場合があります。",
    },
  },
  es: {
    siteTitle: "Conversión PDF Web",
    heroTitle: "Página inicial multilingüe simple",
    heroDescription:
      "Admite rutas en coreano, inglés, japonés, español y alemán en App Router.",
    buttonText: "Comenzar",
    pricing: "Precios",
    privacy: "Privacidad",
    terms: "Términos",
    free: "Gratis",
    pro: "Pro",
    freePlanDescription: "Un plan básico de conversión para uso individual",
    proPlanDescription: "Un plan de mayor capacidad para equipos y flujos de trabajo",
    freeFeatures: [
      "5 conversiones por día",
      "Tamaño máximo de 15 MB",
      "Máximo 20 páginas",
      "Exportación a 150dpi",
    ],
    proFeatures: [
      "Límites más altos de conversión y archivo",
      "Exportación a 300dpi",
      "Procesamiento prioritario",
      "Facturación en KRW / USD próximamente",
    ],
    legal: {
      introHeading: "Resumen",
      introText: "Este documento describe las políticas principales aplicables a este servicio.",
      dataHeading: "Gestión de archivos y datos",
      dataText:
        "Los archivos subidos se usan solo para el procesamiento y pueden eliminarse automáticamente después.",
      usageHeading: "Uso justo",
      usageText:
        "Para mantener la estabilidad del servicio, las solicitudes excesivas o automatizaciones abusivas pueden limitarse.",
      limitsHeading: "Límites del servicio",
      limitsText:
        "Para proteger el sistema, pueden aplicarse límites de tamaño de archivo, número de páginas y volumen de procesamiento.",
    },
  },
  de: {
    siteTitle: "PDF-Konvertierung Web",
    heroTitle: "Einfache lokalisierte Startseite",
    heroDescription:
      "Unterstützt koreanische, englische, japanische, spanische und deutsche Routen im App Router.",
    buttonText: "Loslegen",
    pricing: "Preise",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    free: "Kostenlos",
    pro: "Pro",
    freePlanDescription: "Ein grundlegender Konvertierungsplan für Einzelpersonen",
    proPlanDescription: "Ein leistungsstärkerer Plan für Teams und Geschäftsabläufe",
    freeFeatures: [
      "5 Konvertierungen pro Tag",
      "Maximale Dateigröße 15 MB",
      "Maximal 20 Seiten",
      "150dpi-Export",
    ],
    proFeatures: [
      "Höhere Konvertierungs- und Dateigrenzen",
      "300dpi-Export",
      "Priorisierte Verarbeitung",
      "KRW-/USD-Abrechnung geplant",
    ],
    legal: {
      introHeading: "Überblick",
      introText: "Dieses Dokument beschreibt die zentralen Richtlinien für diesen Dienst.",
      dataHeading: "Datei- und Datenverarbeitung",
      dataText:
        "Hochgeladene Dateien werden nur zur Verarbeitung verwendet und können danach automatisch gelöscht werden.",
      usageHeading: "Faire Nutzung",
      usageText:
        "Um die Stabilität des Dienstes zu gewährleisten, können übermäßige Anfragen oder missbräuchliche Automatisierung eingeschränkt werden.",
      limitsHeading: "Dienstgrenzen",
      limitsText:
        "Zum Schutz des Systems können Begrenzungen für Dateigröße, Seitenanzahl und Verarbeitungsvolumen gelten.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
