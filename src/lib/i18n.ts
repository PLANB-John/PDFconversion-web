export const locales = ["ko", "en", "ja", "es", "de"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  siteTitle: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  homeFeatureFast: string;
  homeFeatureSecure: string;
  homeFeatureSimple: string;
  pdfToJpgCtaTitle: string;
  pdfToJpgCtaDescription: string;
  pdfToJpgCtaButton: string;
  pricing: string;
  privacy: string;
  terms: string;
  free: string;
  pro: string;
  freePlanDescription: string;
  proPlanDescription: string;
  freeFeatures: string[];
  proFeatures: string[];
  pdfToJpg: {
    title: string;
    description: string;
    uploadTitle: string;
    dragAndDrop: string;
    chooseFile: string;
    supportedFormat: string;
    limits: string;
    freePlanNote: string;
    comingSoon: string;
    selectedFile: string;
    fileSize: string;
    invalidFileType: string;
    fileTooLarge: string;
    maxSizeIs15Mb: string;
    removeFile: string;
    conversionNotConnectedYet: string;
    chooseAnotherFile: string;
    uploaded: string;
    uploadSuccess: string;
    uploadFailed: string;
    serverValidationError: string;
    uploadConnectedNotReady: string;
  };
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
    homeFeatureFast: "빠른 변환 워크플로",
    homeFeatureSecure: "안전한 파일 처리",
    homeFeatureSimple: "가입 없이 간편 사용",
    pdfToJpgCtaTitle: "PDF to JPG 변환",
    pdfToJpgCtaDescription: "PDF 페이지를 고품질 JPG 이미지로 변환하는 도구를 준비 중입니다.",
    pdfToJpgCtaButton: "PDF to JPG 열기",
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
    pdfToJpg: {
      title: "PDF to JPG",
      description: "PDF 문서를 JPG 이미지로 변환할 수 있는 업로드 페이지입니다.",
      uploadTitle: "PDF 파일 업로드",
      dragAndDrop: "여기에 PDF 파일을 드래그 앤 드롭하세요",
      chooseFile: "PDF 파일 선택",
      supportedFormat: "지원 형식: PDF",
      limits: "무료 플랜 제한: 최대 15MB / 20페이지 / 하루 5회 변환",
      freePlanNote: "무료 플랜 기준으로 제한이 적용됩니다.",
      comingSoon: "변환 기능은 곧 제공됩니다. 현재는 UI만 준비되어 있습니다.",
      selectedFile: "선택된 파일",
      fileSize: "파일 크기",
      invalidFileType: "PDF 파일만 선택할 수 있습니다.",
      fileTooLarge: "파일이 너무 큽니다.",
      maxSizeIs15Mb: "최대 크기는 15MB입니다.",
      removeFile: "파일 제거",
      conversionNotConnectedYet: "업로드/변환 백엔드는 아직 연결되지 않았습니다.",
      chooseAnotherFile: "다른 파일 선택",
      uploaded: "업로드 완료",
      uploadSuccess: "업로드에 성공했습니다.",
      uploadFailed: "업로드 실패:",
      serverValidationError: "서버 검증 오류가 발생했습니다.",
      uploadConnectedNotReady: "업로드는 성공했지만 변환 백엔드는 아직 연결되지 않았습니다.",
    },
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
    homeFeatureFast: "Fast conversion workflow",
    homeFeatureSecure: "Secure file handling",
    homeFeatureSimple: "Simple experience without sign-up",
    pdfToJpgCtaTitle: "PDF to JPG Conversion",
    pdfToJpgCtaDescription: "A dedicated tool for turning PDF pages into high-quality JPG images.",
    pdfToJpgCtaButton: "Open PDF to JPG",
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
    pdfToJpg: {
      title: "PDF to JPG",
      description: "Upload your PDF and prepare to export each page as JPG images.",
      uploadTitle: "Upload your PDF",
      dragAndDrop: "Drag and drop your PDF file here",
      chooseFile: "Choose PDF File",
      supportedFormat: "Supported format: PDF",
      limits: "Free plan limits: up to 15MB / 20 pages / 5 conversions per day",
      freePlanNote: "These limits apply to the current free plan.",
      comingSoon: "Conversion is coming soon. Backend processing is not connected yet.",
      selectedFile: "Selected file",
      fileSize: "File size",
      invalidFileType: "Only PDF files are allowed.",
      fileTooLarge: "File is too large.",
      maxSizeIs15Mb: "Max size is 15MB.",
      removeFile: "Remove file",
      conversionNotConnectedYet: "Upload/conversion backend is not connected yet.",
      chooseAnotherFile: "Choose another file",
      uploaded: "Uploaded",
      uploadSuccess: "Upload succeeded.",
      uploadFailed: "Upload failed:",
      serverValidationError: "Server validation error.",
      uploadConnectedNotReady: "Upload succeeded, but the conversion backend is not connected yet.",
    },
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
    homeFeatureFast: "高速な変換ワークフロー",
    homeFeatureSecure: "安全なファイル処理",
    homeFeatureSimple: "登録不要でシンプルに利用",
    pdfToJpgCtaTitle: "PDF to JPG 変換",
    pdfToJpgCtaDescription: "PDFページを高品質なJPG画像に変換するツールを準備中です。",
    pdfToJpgCtaButton: "PDF to JPG を開く",
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
    pdfToJpg: {
      title: "PDF to JPG",
      description: "PDFドキュメントをJPG画像に変換するためのアップロードページです。",
      uploadTitle: "PDFファイルをアップロード",
      dragAndDrop: "ここにPDFファイルをドラッグ＆ドロップ",
      chooseFile: "PDFファイルを選択",
      supportedFormat: "対応形式: PDF",
      limits: "無料プランの上限: 15MBまで / 20ページまで / 1日5回まで",
      freePlanNote: "現在は無料プランの制限が適用されます。",
      comingSoon: "変換機能は近日公開です。現在バックエンドは未接続です。",
      selectedFile: "選択したファイル",
      fileSize: "ファイルサイズ",
      invalidFileType: "PDFファイルのみ選択できます。",
      fileTooLarge: "ファイルサイズが大きすぎます。",
      maxSizeIs15Mb: "最大サイズは15MBです。",
      removeFile: "ファイルを削除",
      conversionNotConnectedYet: "アップロード/変換バックエンドはまだ未接続です。",
      chooseAnotherFile: "別のファイルを選択",
      uploaded: "アップロード済み",
      uploadSuccess: "アップロードに成功しました。",
      uploadFailed: "アップロードに失敗しました:",
      serverValidationError: "サーバー検証エラーが発生しました。",
      uploadConnectedNotReady: "アップロードは成功しましたが、変換バックエンドはまだ未接続です。",
    },
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
    homeFeatureFast: "Flujo de conversión rápido",
    homeFeatureSecure: "Gestión segura de archivos",
    homeFeatureSimple: "Experiencia simple sin registro",
    pdfToJpgCtaTitle: "Conversión de PDF a JPG",
    pdfToJpgCtaDescription: "Una herramienta para convertir páginas PDF en imágenes JPG de alta calidad.",
    pdfToJpgCtaButton: "Abrir PDF a JPG",
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
    pdfToJpg: {
      title: "PDF a JPG",
      description: "Sube tu PDF y prepárate para exportar cada página como imagen JPG.",
      uploadTitle: "Sube tu PDF",
      dragAndDrop: "Arrastra y suelta tu archivo PDF aquí",
      chooseFile: "Elegir archivo PDF",
      supportedFormat: "Formato compatible: PDF",
      limits: "Límites del plan gratis: hasta 15MB / 20 páginas / 5 conversiones por día",
      freePlanNote: "Estos límites se aplican al plan gratuito actual.",
      comingSoon: "La conversión llegará pronto. El backend aún no está conectado.",
      selectedFile: "Archivo seleccionado",
      fileSize: "Tamaño del archivo",
      invalidFileType: "Solo se permiten archivos PDF.",
      fileTooLarge: "El archivo es demasiado grande.",
      maxSizeIs15Mb: "El tamaño máximo es 15MB.",
      removeFile: "Eliminar archivo",
      conversionNotConnectedYet: "El backend de carga/conversión aún no está conectado.",
      chooseAnotherFile: "Elegir otro archivo",
      uploaded: "Subido",
      uploadSuccess: "La carga se completó correctamente.",
      uploadFailed: "Error de carga:",
      serverValidationError: "Error de validación del servidor.",
      uploadConnectedNotReady: "La carga se completó, pero el backend de conversión aún no está conectado.",
    },
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
    homeFeatureFast: "Schneller Konvertierungs-Workflow",
    homeFeatureSecure: "Sichere Dateiverarbeitung",
    homeFeatureSimple: "Einfache Nutzung ohne Registrierung",
    pdfToJpgCtaTitle: "PDF-zu-JPG-Konvertierung",
    pdfToJpgCtaDescription: "Ein Tool, um PDF-Seiten in hochwertige JPG-Bilder umzuwandeln.",
    pdfToJpgCtaButton: "PDF zu JPG öffnen",
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
    pdfToJpg: {
      title: "PDF zu JPG",
      description: "Lade dein PDF hoch und bereite den Export jeder Seite als JPG-Bild vor.",
      uploadTitle: "PDF hochladen",
      dragAndDrop: "Ziehe deine PDF-Datei hierher oder lege sie ab",
      chooseFile: "PDF-Datei auswählen",
      supportedFormat: "Unterstütztes Format: PDF",
      limits: "Free-Plan-Limits: bis zu 15MB / 20 Seiten / 5 Konvertierungen pro Tag",
      freePlanNote: "Diese Limits gelten im aktuellen Free-Plan.",
      comingSoon: "Die Konvertierung kommt bald. Das Backend ist noch nicht verbunden.",
      selectedFile: "Ausgewählte Datei",
      fileSize: "Dateigröße",
      invalidFileType: "Nur PDF-Dateien sind erlaubt.",
      fileTooLarge: "Die Datei ist zu groß.",
      maxSizeIs15Mb: "Die maximale Größe beträgt 15MB.",
      removeFile: "Datei entfernen",
      conversionNotConnectedYet: "Upload-/Konvertierungs-Backend ist noch nicht verbunden.",
      chooseAnotherFile: "Andere Datei wählen",
      uploaded: "Hochgeladen",
      uploadSuccess: "Upload erfolgreich.",
      uploadFailed: "Upload fehlgeschlagen:",
      serverValidationError: "Server-Validierungsfehler.",
      uploadConnectedNotReady: "Der Upload war erfolgreich, aber das Konvertierungs-Backend ist noch nicht verbunden.",
    },
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
