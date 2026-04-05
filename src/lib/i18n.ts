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
  signIn: string;
  signUp: string;
  usagePolicyShort: string;
  authAccessTitle: string;
  authAccessSubtitle: string;
  pricing: string;
  about: string;
  contact: string;
  faq: string;
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
    uploadStoredSuccessfully: string;
    storedFile: string;
    storageUploadComplete: string;
    uploadJob: string;
    jobId: string;
    storedPathname: string;
    uploadedTime: string;
    convertingPages: string;
    pageCount: string;
    freePlanAllowsUpTo20Pages: string;
    conversionComplete: string;
    conversionFailed: string;
    resultZip: string;
    resultReady: string;
    convertJob: string;
    completedTime: string;
    loadingDailyUsage: string;
    usageRemainingLabel: string;
    usageLimitReachedGuest: string;
    usageLimitReachedVerified: string;
    inspectingPdf: string;
    checkingPageCount: string;
    inspectFailedPrefix: string;
    inspectFailedDefault: string;
    inspectMissingFields: string;
    inspectWithinLimit: string;
    inspectOverLimit: string;
    inspectReady: string;
    inspectBlocked: string;
    convertButton: string;
    benefitFastTitle: string;
    benefitFastDescription: string;
    benefitSecureTitle: string;
    benefitSecureDescription: string;
    benefitFreeTitle: string;
    benefitFreeDescription: string;
    benefitDeviceTitle: string;
    benefitDeviceDescription: string;
    howItWorksTitle: string;
    howItWorksDescription: string;
    stepLabel: string;
    stepUpload: string;
    stepConvert: string;
    stepDownload: string;
    usageInfoTitle: string;
    usageInfoDescription: string;
    guestUsageLine: string;
    memberUsageLine: string;
    verificationUsageLine: string;
    reliabilityTitle: string;
    reliabilityDescription: string;
    reliabilityPointOne: string;
    reliabilityPointTwo: string;
    reliabilityPointThree: string;
    faqTeaserTitle: string;
    faqTeaserDescription: string;
    faqPreviewOne: string;
    faqPreviewTwo: string;
    faqPreviewThree: string;
    faqTeaserButton: string;
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
    signIn: "로그인",
    signUp: "회원가입",
    usagePolicyShort: "게스트는 하루 5회 무료 이용, 인증 회원은 하루 10회 이용할 수 있습니다.",
    authAccessTitle: "가입하고 더 많은 사용량 받기",
    authAccessSubtitle: "로그인 또는 회원가입은 선택 사항이며, 한도에 도달하면 더 큰 안내를 표시할 예정입니다.",
    pricing: "요금",
    about: "소개",
    contact: "문의",
    faq: "자주 묻는 질문",
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
      uploadStoredSuccessfully: "업로드 파일이 저장되었습니다.",
      storedFile: "저장된 파일",
      storageUploadComplete: "스토리지 업로드가 완료되었습니다.",
      uploadJob: "업로드 작업",
      jobId: "작업 ID",
      storedPathname: "저장 경로",
      uploadedTime: "업로드 시간",
      convertingPages: "페이지를 JPG로 변환하는 중...",
      pageCount: "페이지 수",
      freePlanAllowsUpTo20Pages: "무료 플랜은 최대 20페이지까지 허용됩니다.",
      conversionComplete: "변환 완료",
      conversionFailed: "변환 실패",
      resultZip: "결과 ZIP",
      resultReady: "결과 ZIP 파일이 준비되었습니다.",
      convertJob: "변환 작업",
      completedTime: "완료 시간",
      loadingDailyUsage: "일일 사용량을 불러오는 중...",
      usageRemainingLabel: "오늘 남은 횟수",
      usageLimitReachedGuest: "일일 한도에 도달했습니다. 가입 후 이메일 인증을 완료하면 하루 10회까지 이용할 수 있습니다.",
      usageLimitReachedVerified: "오늘의 변환 한도에 도달했습니다. 내일 다시 시도해 주세요.",
      inspectingPdf: "PDF 분석 중...",
      checkingPageCount: "페이지 수와 무료 플랜 한도를 확인하고 있습니다...",
      inspectFailedPrefix: "분석 실패",
      inspectFailedDefault: "PDF를 분석하지 못했습니다. 다시 시도해 주세요.",
      inspectMissingFields: "분석 결과에 필요한 정보가 누락되었습니다.",
      inspectWithinLimit: "무료 플랜 한도 내의 PDF입니다.",
      inspectOverLimit: "PDF가 무료 플랜 20페이지 한도를 초과했습니다.",
      inspectReady: "변환 준비 완료",
      inspectBlocked: "변환이 제한되었습니다.",
      convertButton: "JPG ZIP으로 변환",
      benefitFastTitle: "빠른 변환 흐름",
      benefitFastDescription: "업로드부터 다운로드까지 필요한 단계만 남긴 간결한 변환 UX를 제공합니다.",
      benefitSecureTitle: "안정적인 파일 처리",
      benefitSecureDescription: "변환 목적의 파일 처리 흐름을 명확하게 제공해 안심하고 사용할 수 있습니다.",
      benefitFreeTitle: "매일 무료 사용",
      benefitFreeDescription: "게스트도 바로 시작할 수 있고, 계정 인증 시 사용량이 확장됩니다.",
      benefitDeviceTitle: "멀티 디바이스 지원",
      benefitDeviceDescription: "데스크톱과 모바일 브라우저에서 동일한 흐름으로 PDF를 JPG로 변환할 수 있습니다.",
      howItWorksTitle: "작동 방식",
      howItWorksDescription: "처음 사용하는 사용자도 빠르게 이해할 수 있도록 변환 단계를 단순화했습니다.",
      stepLabel: "단계",
      stepUpload: "PDF 파일을 업로드합니다.",
      stepConvert: "페이지 수를 확인한 뒤 JPG ZIP 변환을 실행합니다.",
      stepDownload: "완료된 JPG ZIP 파일을 즉시 다운로드합니다.",
      usageInfoTitle: "사용량 및 멤버십 안내",
      usageInfoDescription: "주요 기능은 가입 없이 사용할 수 있으며, 한도 확장이 필요할 때만 계정 등록을 고려하면 됩니다.",
      guestUsageLine: "게스트: 하루 5회 무료 변환",
      memberUsageLine: "인증 회원: 하루 10회 변환",
      verificationUsageLine: "가입 후 이메일 인증을 완료하면 더 넉넉한 사용량이 적용됩니다.",
      reliabilityTitle: "신뢰할 수 있는 변환 경험",
      reliabilityDescription: "AlloraTools는 복잡한 기능보다 실제 문서 업무에서 필요한 변환 흐름과 안정성에 집중합니다.",
      reliabilityPointOne: "브라우저 중심 UX로 설치 없이 바로 사용",
      reliabilityPointTwo: "업로드, 검사, 변환, 다운로드 단계가 명확한 구조",
      reliabilityPointThree: "반복 사용 시에도 빠르게 처리할 수 있는 경량 인터페이스",
      faqTeaserTitle: "자주 묻는 질문",
      faqTeaserDescription: "사용 전 가장 많이 묻는 항목을 먼저 확인해 보세요.",
      faqPreviewOne: "PDF를 JPG로 변환하면 원본 품질은 어떻게 유지되나요?",
      faqPreviewTwo: "무료 한도에 도달하면 어떻게 되나요?",
      faqPreviewThree: "모바일 브라우저에서도 동일하게 사용할 수 있나요?",
      faqTeaserButton: "FAQ 전체 보기",
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
    signIn: "Sign in",
    signUp: "Sign up",
    usagePolicyShort: "Guests get 5 free uses per day. Verified members get 10 uses per day.",
    authAccessTitle: "Get more usage with an account",
    authAccessSubtitle:
      "Signing in is optional for now, and a larger upgrade prompt can be shown later when free usage is exhausted.",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
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
      uploadStoredSuccessfully: "Upload stored successfully.",
      storedFile: "Stored file",
      storageUploadComplete: "Storage upload complete.",
      uploadJob: "Upload job",
      jobId: "Job ID",
      storedPathname: "Stored pathname",
      uploadedTime: "Uploaded time",
      convertingPages: "Converting pages to JPG...",
      pageCount: "Page count",
      freePlanAllowsUpTo20Pages: "Free plan allows up to 20 pages.",
      conversionComplete: "Conversion complete",
      conversionFailed: "Conversion failed",
      resultZip: "Result ZIP",
      resultReady: "Result ZIP is ready.",
      convertJob: "Convert job",
      completedTime: "Completed time",
      loadingDailyUsage: "Loading daily usage...",
      usageRemainingLabel: "Remaining today",
      usageLimitReachedGuest:
        "Daily limit reached. Sign up and confirm your email to unlock 10 conversions per day.",
      usageLimitReachedVerified: "You have reached your daily conversion limit. Please try again tomorrow.",
      inspectingPdf: "Inspecting PDF...",
      checkingPageCount: "Checking page count and free plan limit...",
      inspectFailedPrefix: "Inspection failed",
      inspectFailedDefault: "Failed to inspect this PDF. Please try again.",
      inspectMissingFields: "Inspection response is missing required fields.",
      inspectWithinLimit: "PDF is within the free plan limit.",
      inspectOverLimit: "PDF exceeds the free plan limit of 20 pages.",
      inspectReady: "Ready for conversion.",
      inspectBlocked: "Conversion blocked.",
      convertButton: "Convert to JPG ZIP",
      benefitFastTitle: "Fast conversion flow",
      benefitFastDescription: "A focused workflow helps you go from upload to download with fewer steps.",
      benefitSecureTitle: "Secure handling",
      benefitSecureDescription: "The page clearly communicates practical file-handling steps for everyday use.",
      benefitFreeTitle: "Free daily usage",
      benefitFreeDescription: "Start as a guest, then unlock more conversions after account verification.",
      benefitDeviceTitle: "Works across devices",
      benefitDeviceDescription: "Convert PDF pages to JPG from desktop and mobile browsers with the same flow.",
      howItWorksTitle: "How it works",
      howItWorksDescription: "The process is designed to be easy to scan and complete in minutes.",
      stepLabel: "Step",
      stepUpload: "Upload your PDF file.",
      stepConvert: "Confirm page limits, then run the JPG ZIP conversion.",
      stepDownload: "Download the generated JPG ZIP file.",
      usageInfoTitle: "Usage and membership",
      usageInfoDescription:
        "The tool stays primary. Account signup only becomes important when you need additional daily usage.",
      guestUsageLine: "Guest users: 5 free conversions per day",
      memberUsageLine: "Verified members: 10 conversions per day",
      verificationUsageLine: "Create an account and verify your email to unlock the higher daily limit.",
      reliabilityTitle: "Built for reliable day-to-day use",
      reliabilityDescription:
        "AlloraTools focuses on practical PDF conversion workflows with a clean browser-first experience.",
      reliabilityPointOne: "Browser-friendly flow with no software installation required",
      reliabilityPointTwo: "Clear upload, inspection, conversion, and download stages",
      reliabilityPointThree: "Lightweight interface that stays fast across repeated conversions",
      faqTeaserTitle: "Quick FAQ",
      faqTeaserDescription: "Review common questions before starting your next conversion.",
      faqPreviewOne: "How does PDF to JPG quality compare to the original PDF?",
      faqPreviewTwo: "What happens when I hit the free daily limit?",
      faqPreviewThree: "Can I use this tool on mobile browsers?",
      faqTeaserButton: "View full FAQ",
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
    signIn: "サインイン",
    signUp: "サインアップ",
    usagePolicyShort: "ゲストは1日5回まで無料、認証済みメンバーは1日10回まで利用できます。",
    authAccessTitle: "アカウントで利用枠を増やす",
    authAccessSubtitle:
      "サインイン/登録は任意です。無料枠に達したときに、より大きな案内を後から表示できる構成です。",
    pricing: "料金",
    about: "サービス概要",
    contact: "お問い合わせ",
    faq: "よくある質問",
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
      uploadStoredSuccessfully: "アップロードがストレージに保存されました。",
      storedFile: "保存されたファイル",
      storageUploadComplete: "ストレージへのアップロードが完了しました。",
      uploadJob: "アップロードジョブ",
      jobId: "ジョブID",
      storedPathname: "保存パス",
      uploadedTime: "アップロード時刻",
      convertingPages: "ページをJPGに変換中...",
      pageCount: "ページ数",
      freePlanAllowsUpTo20Pages: "無料プランでは最大20ページまで変換できます。",
      conversionComplete: "変換完了",
      conversionFailed: "変換に失敗しました",
      resultZip: "結果ZIP",
      resultReady: "結果のZIPファイルが準備できました。",
      convertJob: "変換ジョブ",
      completedTime: "完了時刻",
      loadingDailyUsage: "1日の利用状況を読み込み中...",
      usageRemainingLabel: "本日の残り回数",
      usageLimitReachedGuest:
        "1日の上限に達しました。サインアップしてメール認証を完了すると、1日10回まで利用できます。",
      usageLimitReachedVerified: "本日の変換上限に達しました。明日もう一度お試しください。",
      inspectingPdf: "PDFを確認中...",
      checkingPageCount: "ページ数と無料プラン上限を確認しています...",
      inspectFailedPrefix: "確認に失敗しました",
      inspectFailedDefault: "このPDFを確認できませんでした。もう一度お試しください。",
      inspectMissingFields: "確認結果に必要な情報が不足しています。",
      inspectWithinLimit: "このPDFは無料プランの上限内です。",
      inspectOverLimit: "このPDFは無料プランの20ページ上限を超えています。",
      inspectReady: "変換準備ができました。",
      inspectBlocked: "変換は制限されています。",
      convertButton: "JPG ZIPに変換",
      benefitFastTitle: "高速な変換フロー",
      benefitFastDescription: "アップロードからダウンロードまで、必要な操作だけに絞った構成です。",
      benefitSecureTitle: "安心できる処理導線",
      benefitSecureDescription: "日常業務で使いやすい、わかりやすいファイル処理ステップを提供します。",
      benefitFreeTitle: "毎日無料で利用可能",
      benefitFreeDescription: "ゲストでもすぐ開始でき、認証済みアカウントで利用枠を拡張できます。",
      benefitDeviceTitle: "マルチデバイス対応",
      benefitDeviceDescription: "PC・スマートフォンのブラウザで同じ操作感のまま利用できます。",
      howItWorksTitle: "使い方",
      howItWorksDescription: "初めてでもすぐ理解できるように、変換の流れを3ステップで整理しました。",
      stepLabel: "ステップ",
      stepUpload: "PDFファイルをアップロードします。",
      stepConvert: "ページ上限を確認して、JPG ZIP変換を実行します。",
      stepDownload: "生成されたJPG ZIPファイルをダウンロードします。",
      usageInfoTitle: "利用枠とメンバーシップ",
      usageInfoDescription: "ツール利用を最優先にし、追加利用が必要なときだけ登録を案内する設計です。",
      guestUsageLine: "ゲスト: 1日5回まで無料変換",
      memberUsageLine: "認証済みメンバー: 1日10回まで変換",
      verificationUsageLine: "サインアップ後にメール認証を完了すると、より多く利用できます。",
      reliabilityTitle: "実務向けの信頼できる体験",
      reliabilityDescription:
        "AlloraTools は、複雑さよりも実用性を重視したPDF変換ワークフローを提供します。",
      reliabilityPointOne: "インストール不要でブラウザからすぐ利用可能",
      reliabilityPointTwo: "アップロード・確認・変換・ダウンロードを明確に分離",
      reliabilityPointThree: "繰り返し作業でも使いやすい軽量インターフェース",
      faqTeaserTitle: "よくある質問",
      faqTeaserDescription: "利用前によく確認されるポイントを先にチェックできます。",
      faqPreviewOne: "PDFをJPGに変換すると画質はどのように変わりますか？",
      faqPreviewTwo: "無料上限に達した場合はどうなりますか？",
      faqPreviewThree: "スマートフォンのブラウザでも利用できますか？",
      faqTeaserButton: "FAQをすべて見る",
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
    signIn: "Iniciar sesión",
    signUp: "Registrarse",
    usagePolicyShort: "Los invitados tienen 5 usos gratis al día. Los miembros verificados tienen 10 usos al día.",
    authAccessTitle: "Obtén más uso con una cuenta",
    authAccessSubtitle:
      "Iniciar sesión es opcional por ahora, y más adelante se puede mostrar un aviso mayor al llegar al límite gratuito.",
    pricing: "Precios",
    about: "Acerca de",
    contact: "Contacto",
    faq: "Preguntas frecuentes",
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
      uploadStoredSuccessfully: "La carga se almacenó correctamente.",
      storedFile: "Archivo almacenado",
      storageUploadComplete: "La carga al almacenamiento se completó.",
      uploadJob: "Trabajo de carga",
      jobId: "ID del trabajo",
      storedPathname: "Ruta almacenada",
      uploadedTime: "Hora de carga",
      convertingPages: "Convirtiendo páginas a JPG...",
      pageCount: "Cantidad de páginas",
      freePlanAllowsUpTo20Pages: "El plan gratuito permite hasta 20 páginas.",
      conversionComplete: "Conversión completa",
      conversionFailed: "La conversión falló",
      resultZip: "ZIP resultante",
      resultReady: "El ZIP de resultados está listo.",
      convertJob: "Trabajo de conversión",
      completedTime: "Hora de finalización",
      loadingDailyUsage: "Cargando uso diario...",
      usageRemainingLabel: "Disponible hoy",
      usageLimitReachedGuest:
        "Se alcanzó el límite diario. Regístrate y confirma tu correo para desbloquear 10 conversiones por día.",
      usageLimitReachedVerified: "Ya alcanzaste tu límite diario de conversiones. Inténtalo de nuevo mañana.",
      inspectingPdf: "Analizando PDF...",
      checkingPageCount: "Revisando cantidad de páginas y límite del plan gratuito...",
      inspectFailedPrefix: "Error de análisis",
      inspectFailedDefault: "No se pudo analizar este PDF. Inténtalo de nuevo.",
      inspectMissingFields: "La respuesta del análisis no incluye todos los datos necesarios.",
      inspectWithinLimit: "El PDF está dentro del límite del plan gratuito.",
      inspectOverLimit: "El PDF supera el límite de 20 páginas del plan gratuito.",
      inspectReady: "Listo para convertir.",
      inspectBlocked: "Conversión bloqueada.",
      convertButton: "Convertir a ZIP JPG",
      benefitFastTitle: "Conversión rápida",
      benefitFastDescription: "Un flujo directo te lleva de la carga a la descarga con menos clics.",
      benefitSecureTitle: "Gestión segura",
      benefitSecureDescription: "La interfaz explica claramente cada etapa para un uso confiable.",
      benefitFreeTitle: "Uso gratuito diario",
      benefitFreeDescription: "Empieza como invitado y amplía tus conversiones con una cuenta verificada.",
      benefitDeviceTitle: "Compatible con varios dispositivos",
      benefitDeviceDescription: "Funciona en navegadores de escritorio y móviles con la misma experiencia.",
      howItWorksTitle: "Cómo funciona",
      howItWorksDescription: "El proceso está organizado para que puedas escanearlo y completarlo rápidamente.",
      stepLabel: "Paso",
      stepUpload: "Sube tu archivo PDF.",
      stepConvert: "Confirma el límite de páginas y ejecuta la conversión a ZIP JPG.",
      stepDownload: "Descarga el archivo ZIP JPG generado.",
      usageInfoTitle: "Uso y membresía",
      usageInfoDescription:
        "La herramienta sigue siendo lo principal. El registro solo se vuelve importante cuando necesitas más uso diario.",
      guestUsageLine: "Invitados: 5 conversiones gratis por día",
      memberUsageLine: "Miembros verificados: 10 conversiones por día",
      verificationUsageLine: "Regístrate y verifica tu correo para desbloquear el límite diario superior.",
      reliabilityTitle: "Experiencia confiable para trabajo real",
      reliabilityDescription:
        "AlloraTools prioriza flujos prácticos de conversión PDF con una experiencia clara en el navegador.",
      reliabilityPointOne: "Uso directo en navegador, sin instalar software",
      reliabilityPointTwo: "Etapas claras de carga, revisión, conversión y descarga",
      reliabilityPointThree: "Interfaz ligera que se mantiene rápida en usos repetidos",
      faqTeaserTitle: "FAQ rápida",
      faqTeaserDescription: "Consulta las preguntas más comunes antes de convertir.",
      faqPreviewOne: "¿Cómo se mantiene la calidad al convertir PDF a JPG?",
      faqPreviewTwo: "¿Qué pasa cuando llego al límite diario gratuito?",
      faqPreviewThree: "¿Puedo usar la herramienta desde el móvil?",
      faqTeaserButton: "Ver FAQ completa",
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
    signIn: "Anmelden",
    signUp: "Registrieren",
    usagePolicyShort: "Gäste erhalten 5 kostenlose Nutzungen pro Tag. Verifizierte Mitglieder erhalten 10 pro Tag.",
    authAccessTitle: "Mit Konto mehr Nutzung erhalten",
    authAccessSubtitle:
      "Anmeldung ist derzeit optional. Später kann bei Erreichen des Gratislimits ein größerer Hinweis angezeigt werden.",
    pricing: "Preise",
    about: "Über uns",
    contact: "Kontakt",
    faq: "FAQ",
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
      uploadStoredSuccessfully: "Upload wurde erfolgreich gespeichert.",
      storedFile: "Gespeicherte Datei",
      storageUploadComplete: "Storage-Upload abgeschlossen.",
      uploadJob: "Upload-Job",
      jobId: "Job-ID",
      storedPathname: "Gespeicherter Pfad",
      uploadedTime: "Upload-Zeit",
      convertingPages: "Seiten werden in JPG konvertiert...",
      pageCount: "Seitenanzahl",
      freePlanAllowsUpTo20Pages: "Im Free-Plan sind bis zu 20 Seiten erlaubt.",
      conversionComplete: "Konvertierung abgeschlossen",
      conversionFailed: "Konvertierung fehlgeschlagen",
      resultZip: "Ergebnis-ZIP",
      resultReady: "Die Ergebnis-ZIP ist bereit.",
      convertJob: "Konvertierungsjob",
      completedTime: "Abschlusszeit",
      loadingDailyUsage: "Tägliche Nutzung wird geladen...",
      usageRemainingLabel: "Heute verbleibend",
      usageLimitReachedGuest:
        "Tageslimit erreicht. Registriere dich und bestätige deine E-Mail, um 10 Konvertierungen pro Tag freizuschalten.",
      usageLimitReachedVerified:
        "Du hast dein tägliches Konvertierungslimit erreicht. Bitte versuche es morgen erneut.",
      inspectingPdf: "PDF wird geprüft...",
      checkingPageCount: "Seitenanzahl und Free-Plan-Limit werden geprüft...",
      inspectFailedPrefix: "Prüfung fehlgeschlagen",
      inspectFailedDefault: "Dieses PDF konnte nicht geprüft werden. Bitte versuche es erneut.",
      inspectMissingFields: "In der Prüfantwort fehlen erforderliche Felder.",
      inspectWithinLimit: "Das PDF liegt innerhalb des Free-Plan-Limits.",
      inspectOverLimit: "Das PDF überschreitet das Free-Plan-Limit von 20 Seiten.",
      inspectReady: "Bereit zur Konvertierung.",
      inspectBlocked: "Konvertierung blockiert.",
      convertButton: "In JPG-ZIP konvertieren",
      benefitFastTitle: "Schneller Konvertierungsablauf",
      benefitFastDescription: "Ein fokussierter Ablauf bringt dich mit wenigen Schritten von Upload zu Download.",
      benefitSecureTitle: "Verlässliche Verarbeitung",
      benefitSecureDescription: "Die Oberfläche zeigt klare Dateischritte für einen sicheren täglichen Einsatz.",
      benefitFreeTitle: "Täglich kostenlos nutzbar",
      benefitFreeDescription: "Starte als Gast und erweitere dein Kontingent nach E-Mail-Verifizierung.",
      benefitDeviceTitle: "Auf allen Geräten nutzbar",
      benefitDeviceDescription: "Desktop- und Mobile-Browser bieten denselben PDF-zu-JPG-Workflow.",
      howItWorksTitle: "So funktioniert es",
      howItWorksDescription: "Der Ablauf ist leicht erfassbar und in wenigen Minuten abgeschlossen.",
      stepLabel: "Schritt",
      stepUpload: "PDF-Datei hochladen.",
      stepConvert: "Seitenlimit prüfen und die JPG-ZIP-Konvertierung starten.",
      stepDownload: "Erzeugte JPG-ZIP-Datei herunterladen.",
      usageInfoTitle: "Nutzung und Mitgliedschaft",
      usageInfoDescription:
        "Das Tool bleibt im Mittelpunkt. Registrierung wird erst wichtig, wenn du mehr tägliche Nutzung brauchst.",
      guestUsageLine: "Gäste: 5 kostenlose Konvertierungen pro Tag",
      memberUsageLine: "Verifizierte Mitglieder: 10 Konvertierungen pro Tag",
      verificationUsageLine: "Konto erstellen und E-Mail bestätigen, um das höhere Tageslimit freizuschalten.",
      reliabilityTitle: "Zuverlässig für den Alltag",
      reliabilityDescription:
        "AlloraTools konzentriert sich auf praktische PDF-Konvertierung mit einer klaren Browser-First-Erfahrung.",
      reliabilityPointOne: "Browserfreundlicher Ablauf ohne Softwareinstallation",
      reliabilityPointTwo: "Klare Phasen für Upload, Prüfung, Konvertierung und Download",
      reliabilityPointThree: "Leichte Oberfläche mit schneller Bedienung bei wiederholter Nutzung",
      faqTeaserTitle: "Kurze FAQ",
      faqTeaserDescription: "Sieh dir häufige Fragen an, bevor du konvertierst.",
      faqPreviewOne: "Wie bleibt die Qualität bei PDF-zu-JPG erhalten?",
      faqPreviewTwo: "Was passiert, wenn ich das tägliche Free-Limit erreiche?",
      faqPreviewThree: "Kann ich das Tool auch mobil nutzen?",
      faqTeaserButton: "Komplette FAQ anzeigen",
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
