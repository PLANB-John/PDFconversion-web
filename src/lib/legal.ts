import { type Locale } from "@/lib/i18n";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  boxed?: boolean;
};

export type LegalDocument = {
  title: string;
  effectiveLabel: string;
  updatedLabel: string;
  effectiveDate: string;
  updatedDate: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocuments: Record<Locale, { privacy: LegalDocument; terms: LegalDocument }> = {
  ko: {
    privacy: {
      title: "개인정보처리방침",
      effectiveLabel: "시행일",
      updatedLabel: "최종 업데이트",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "AlloraTools(이하 ‘서비스’)는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하기 위해 노력합니다. 본 개인정보처리방침은 서비스 이용 과정에서 어떤 정보를 왜 수집·이용하는지, 어떻게 보관·파기하는지, 이용자가 어떤 권리를 가지는지 설명합니다.",
      sections: [
        {
          title: "1. 서비스 및 운영자 정보",
          boxed: true,
          bullets: [
            "서비스명: AlloraTools",
            "운영자명: PLANB-John",
            "운영 형태: 개인 운영",
            "문의 이메일: planb.init@gmail.com",
            "도메인: https://www.alloratools.com",
          ],
        },
        {
          title: "2. 수집하는 정보",
          paragraphs: ["서비스는 기능 제공을 위해 필요한 최소한의 정보를 수집합니다."],
          bullets: [
            "계정 정보(회원가입/로그인 시): 이메일 주소, 인증 상태(이메일 인증 여부), 계정 식별자",
            "이용 정보: 일일 사용량(예: 게스트 5회/일, 인증 회원 10회/일), 요청 시각, 서비스 이용 기록",
            "기기/브라우저 식별 정보: 쿠키 또는 유사 저장 기술을 통해 생성되는 게스트 식별자(guest id)",
            "업로드 파일 관련 정보: PDF to JPG 변환 처리를 위한 파일 및 처리 메타데이터",
          ],
        },
        {
          title: "3. 수집·이용 목적",
          bullets: [
            "회원가입, 로그인, 이메일 인증(Supabase Auth) 및 계정 보안 관리",
            "PDF to JPG 변환 기능 제공 및 안정적인 서비스 운영",
            "일일 무료 사용 한도 적용 및 남용 방지(게스트/인증 회원 구분 포함)",
            "오류 대응, 성능 개선, 보안 모니터링 등 운영 품질 개선",
            "향후 광고 서비스(예: Google AdSense) 도입 시 관련 고지 및 운영",
          ],
        },
        {
          title: "4. 보관 및 파기 원칙",
          bullets: [
            "개인정보는 수집·이용 목적 달성에 필요한 범위 내에서만 보관합니다.",
            "계정 정보는 회원 탈퇴 또는 목적 달성 시 지체 없이 삭제 또는 비식별화합니다.",
            "일일 사용량 추적 데이터는 서비스 운영 및 부정 사용 방지 목적 범위에서 보관합니다.",
            "업로드 파일은 변환 처리 목적 범위에서만 사용하며, 정책에 따라 삭제될 수 있습니다.",
            "법령상 보관 의무가 있는 경우 해당 기간 동안 보관 후 파기합니다.",
          ],
        },
        {
          title: "5. 쿠키 및 유사 기술 사용",
          paragraphs: [
            "서비스는 게스트 식별 및 일일 사용량 추적을 위해 쿠키 또는 브라우저 저장소(localStorage 등)와 유사 기술을 사용할 수 있습니다. 이를 통해 로그인하지 않은 이용자에게도 사용 제한 정책을 적용할 수 있습니다.",
            "이용자는 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있으나, 이 경우 일부 기능(예: 게스트 사용량 인식)이 제한될 수 있습니다.",
          ],
        },
        {
          title: "6. 외부 서비스 제공자(처리 위탁/인프라)",
          paragraphs: [
            "서비스는 안정적 제공을 위해 아래 외부 서비스를 사용합니다. 각 제공자는 해당 서비스 범위 내에서 데이터를 처리할 수 있습니다.",
          ],
          bullets: ["Vercel: 프론트엔드 호스팅", "Render: 워커/백엔드 호스팅", "Supabase: 인증, 사용자 데이터, 일일 사용량 추적"],
        },
        {
          title: "7. 광고 및 제3자 쿠키 관련 안내",
          paragraphs: [
            "현재 또는 향후 서비스는 Google AdSense 등 광고 서비스를 도입할 수 있습니다. 광고 서비스가 도입되는 경우, 제3자 쿠키 또는 유사 기술이 사용될 수 있으며 관련 사항은 본 방침 또는 별도 공지를 통해 안내합니다.",
          ],
        },
        {
          title: "8. 이용자 권리 및 행사 방법",
          bullets: [
            "이용자는 본인 정보에 대한 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.",
            "계정 탈퇴를 요청할 수 있으며, 관련 법령에 따른 예외를 제외하고 처리합니다.",
            "권리 행사는 문의 이메일(planb.init@gmail.com)로 요청할 수 있습니다.",
          ],
        },
        {
          title: "9. 개인정보처리방침의 변경",
          paragraphs: [
            "본 방침은 서비스 기능 변경, 법령 개정, 운영 정책 변경 등에 따라 수정될 수 있습니다. 중요한 변경이 있는 경우 서비스 내 페이지를 통해 시행일과 함께 안내합니다.",
          ],
        },
        {
          title: "10. 문의처",
          boxed: true,
          paragraphs: ["개인정보 관련 문의: planb.init@gmail.com"],
        },
      ],
    },
    terms: {
      title: "이용약관",
      effectiveLabel: "시행일",
      updatedLabel: "최종 업데이트",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "본 이용약관은 AlloraTools(이하 ‘서비스’)의 이용 조건, 운영 정책, 이용자와 운영자 간 권리·의무를 규정합니다.",
      sections: [
        {
          title: "1. 운영자 정보",
          boxed: true,
          bullets: [
            "서비스명: AlloraTools",
            "운영자명: PLANB-John",
            "운영 형태: 개인 운영",
            "문의 이메일: planb.init@gmail.com",
            "도메인: https://www.alloratools.com",
          ],
        },
        {
          title: "2. 약관의 목적 및 적용",
          paragraphs: [
            "본 약관은 이용자가 서비스에서 제공하는 기능(PDF to JPG 변환, 계정 가입/로그인 등)을 이용함에 있어 필요한 기본 사항을 정합니다. 이용자는 서비스를 이용함으로써 본 약관에 동의한 것으로 간주됩니다.",
          ],
        },
        {
          title: "3. 서비스 내용",
          bullets: [
            "PDF 파일을 JPG 이미지로 변환하는 웹 도구 기능",
            "회원가입/로그인 및 이메일 인증 기반 계정 기능(Supabase Auth)",
            "게스트/회원 상태에 따른 일일 사용량 관리 기능",
            "기타 운영자가 추가하거나 변경하는 부가 기능",
          ],
        },
        {
          title: "4. 계정, 인증 및 이용자 의무",
          bullets: [
            "회원은 정확한 정보를 기반으로 계정을 생성해야 합니다.",
            "회원은 이메일 인증 절차를 완료해야 일부 기능을 정상적으로 이용할 수 있습니다.",
            "계정 정보 관리 책임은 이용자에게 있으며, 무단 사용이 의심되면 즉시 알려야 합니다.",
            "이용자는 법령 및 본 약관을 위반하는 방식으로 서비스를 사용해서는 안 됩니다.",
          ],
        },
        {
          title: "5. 무료 사용 한도 및 정책 변경",
          bullets: [
            "게스트 이용자는 1일 5회, 이메일 인증 회원은 1일 10회까지 사용할 수 있습니다.",
            "사용량 측정을 위해 쿠키 또는 유사 저장 기술 기반 식별자가 사용될 수 있습니다.",
            "운영자는 서비스 안정성, 비용, 정책 사유에 따라 사용 한도 및 기준을 사전 고지 후 변경할 수 있습니다.",
          ],
        },
        {
          title: "6. 업로드 파일 및 콘텐츠 책임",
          bullets: [
            "이용자는 본인이 권리를 보유하거나 적법하게 이용 가능한 파일만 업로드해야 합니다.",
            "불법, 권리 침해, 악성코드 유포 목적의 파일 업로드를 금지합니다.",
            "업로드 파일과 관련한 법적 책임은 원칙적으로 해당 이용자에게 있습니다.",
          ],
        },
        {
          title: "7. 서비스 변경, 중단, 종료",
          paragraphs: [
            "운영자는 시스템 점검, 장애 대응, 외부 인프라 이슈(Vercel, Render, Supabase 등), 정책 변경 등의 사유로 서비스 일부 또는 전부를 변경·중단할 수 있습니다. 가능한 경우 사전 또는 사후 공지를 통해 안내합니다.",
          ],
        },
        {
          title: "8. 광고",
          paragraphs: [
            "서비스는 현재 또는 향후 Google AdSense 등 광고 서비스를 포함할 수 있습니다. 광고 노출 방식, 관련 쿠키 정책은 서비스 정책 및 개인정보처리방침에 따라 안내됩니다.",
          ],
        },
        {
          title: "9. 면책 및 책임 제한",
          bullets: [
            "서비스는 ‘있는 그대로’ 제공되며, 특정 목적 적합성 등을 보장하지 않습니다.",
            "운영자는 천재지변, 통신 장애, 제3자 인프라 장애 등 불가항력적 사유에 대해 책임을 제한받습니다.",
            "운영자는 이용자의 귀책 사유로 발생한 손해에 대해 책임지지 않으며, 법령상 허용 범위에서 책임을 제한합니다.",
          ],
        },
        {
          title: "10. 지식재산권",
          paragraphs: [
            "서비스의 상표, 로고, 화면 구성, 소프트웨어 등 운영자가 작성한 저작물에 대한 권리는 운영자 또는 정당한 권리자에게 귀속됩니다. 이용자는 관련 법령 및 본 약관이 허용하는 범위를 넘어 무단 복제, 배포, 변경, 역설계 등을 해서는 안 됩니다.",
          ],
        },
        {
          title: "11. 계정 제한 및 이용 제한 조치",
          paragraphs: [
            "운영자는 약관 위반, 비정상적 자동화 요청, 서비스 안정성 저해 행위, 타인 권리 침해가 확인되는 경우 사전 통지 또는 사후 통지와 함께 계정 제한, 이용 중단, 관련 데이터 처리 제한 등의 조치를 취할 수 있습니다.",
          ],
        },
        {
          title: "12. 준거법 및 분쟁",
          paragraphs: [
            "본 약관은 대한민국 법령을 준거법으로 하며, 서비스 이용과 관련하여 분쟁이 발생할 경우 관련 법령에 따른 절차를 따릅니다.",
          ],
        },
        {
          title: "13. 문의처",
          boxed: true,
          paragraphs: ["약관 관련 문의: planb.init@gmail.com"],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      effectiveLabel: "Effective date",
      updatedLabel: "Last updated",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "AlloraTools (the \"Service\") values your privacy and strives to comply with applicable laws. This Privacy Policy explains what information we collect, why we collect and use it, how long we keep it, and what rights you have.",
      sections: [
        {
          title: "1. Service and operator information",
          boxed: true,
          bullets: [
            "Service name: AlloraTools",
            "Operator name: PLANB-John",
            "Operation type: individual operator",
            "Contact email: planb.init@gmail.com",
            "Domain: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Information we collect",
          paragraphs: ["The Service collects the minimum information necessary to provide core features."],
          bullets: [
            "Account information (for sign-up/sign-in): email address, verification status, account identifier",
            "Usage information: daily usage count (for example, 5 uses/day for guests and 10 uses/day for verified members), request times, and service logs",
            "Device/browser identifiers: guest identifiers created through cookies or similar storage technologies",
            "Uploaded file information: files and processing metadata required for PDF to JPG conversion",
          ],
        },
        {
          title: "3. Purposes of collection and use",
          bullets: [
            "Sign-up, sign-in, email verification (Supabase Auth), and account security management",
            "Provision of PDF to JPG conversion and stable service operations",
            "Application of free daily limits and abuse prevention (including guest/member distinction)",
            "Operational quality improvements such as incident response, performance optimization, and security monitoring",
            "Notice and operation related to potential advertising services (such as Google AdSense)",
          ],
        },
        {
          title: "4. Retention and deletion",
          bullets: [
            "Personal information is retained only as long as necessary to fulfill collection and usage purposes.",
            "Account information is deleted or de-identified without undue delay upon account deletion or purpose completion.",
            "Daily usage tracking data may be retained within the scope needed for operations and abuse prevention.",
            "Uploaded files are used only for conversion processing and may be deleted according to policy.",
            "If retention is required by law, data is kept for the legally required period and then deleted.",
          ],
        },
        {
          title: "5. Cookies and similar technologies",
          paragraphs: [
            "The Service may use cookies and similar technologies (including localStorage) to identify guests and track daily usage limits. This allows usage policies to be applied to users who do not sign in.",
            "You can refuse or delete cookies in your browser settings, but some features (such as guest usage recognition) may be limited.",
          ],
        },
        {
          title: "6. External service providers (processors/infrastructure)",
          paragraphs: [
            "To provide the Service reliably, we use the providers below. Each provider may process data within the scope of its role.",
          ],
          bullets: [
            "Vercel: frontend hosting",
            "Render: worker/backend hosting",
            "Supabase: authentication, user data, and daily usage tracking",
          ],
        },
        {
          title: "7. Advertising and third-party cookies",
          paragraphs: [
            "The Service may currently or in the future introduce advertising services such as Google AdSense. If advertising is enabled, third-party cookies or similar technologies may be used, and related details will be announced in this policy or a separate notice.",
          ],
        },
        {
          title: "8. Your rights and how to exercise them",
          bullets: [
            "You may request access, correction, deletion, or restriction of processing for your personal information.",
            "You may request account deletion, subject to exceptions required by law.",
            "Rights requests can be submitted to planb.init@gmail.com.",
          ],
        },
        {
          title: "9. Changes to this Privacy Policy",
          paragraphs: [
            "This policy may be revised due to feature updates, legal changes, or operational policy updates. Material changes will be announced on the Service with the effective date.",
          ],
        },
        {
          title: "10. Contact",
          boxed: true,
          paragraphs: ["Privacy inquiries: planb.init@gmail.com"],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      effectiveLabel: "Effective date",
      updatedLabel: "Last updated",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "These Terms of Service govern the conditions of use for AlloraTools (the \"Service\"), including operating policies and the rights and obligations between users and the operator.",
      sections: [
        {
          title: "1. Operator information",
          boxed: true,
          bullets: [
            "Service name: AlloraTools",
            "Operator name: PLANB-John",
            "Operation type: individual operator",
            "Contact email: planb.init@gmail.com",
            "Domain: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Purpose and scope",
          paragraphs: [
            "These Terms set out the basic rules required to use features provided by the Service, including PDF to JPG conversion and account sign-up/sign-in. By using the Service, you are deemed to agree to these Terms.",
          ],
        },
        {
          title: "3. Service features",
          bullets: [
            "A web tool to convert PDF files into JPG images",
            "Account features based on sign-up/sign-in and email verification (Supabase Auth)",
            "Daily usage management for guest and member states",
            "Additional features that may be added or changed by the operator",
          ],
        },
        {
          title: "4. Accounts, verification, and user obligations",
          bullets: [
            "Members must create accounts using accurate information.",
            "Members may need to complete email verification to use certain features normally.",
            "Users are responsible for managing their account credentials and must report suspected unauthorized use promptly.",
            "Users must not use the Service in violation of laws or these Terms.",
          ],
        },
        {
          title: "5. Free usage limits and policy changes",
          bullets: [
            "Guest users may use the Service up to 5 times per day, and email-verified members up to 10 times per day.",
            "Cookie- or storage-based identifiers may be used to measure usage.",
            "The operator may change usage limits and criteria with prior notice for reasons including stability, cost, and policy changes.",
          ],
        },
        {
          title: "6. Uploaded files and content responsibility",
          bullets: [
            "You must upload only files for which you hold rights or are otherwise legally authorized to use.",
            "Uploading files for illegal purposes, rights infringement, or malware distribution is prohibited.",
            "Legal responsibility for uploaded files generally rests with the uploading user.",
          ],
        },
        {
          title: "7. Service changes, suspension, and termination",
          paragraphs: [
            "The operator may change or suspend part or all of the Service for reasons including maintenance, incident response, external infrastructure issues (such as Vercel, Render, and Supabase), or policy updates. Where possible, notice will be provided in advance or afterward.",
          ],
        },
        {
          title: "8. Advertising",
          paragraphs: [
            "The Service may currently or in the future include advertising services such as Google AdSense. Ad display methods and related cookie policies are governed by applicable Service policies and the Privacy Policy.",
          ],
        },
        {
          title: "9. Disclaimers and limitation of liability",
          bullets: [
            "The Service is provided \"as is\" without warranties, including fitness for a particular purpose.",
            "The operator is not liable to the extent permitted by law for force majeure events, network failures, or third-party infrastructure outages.",
            "The operator is not responsible for damages caused by a user's fault and limits liability to the extent allowed by law.",
          ],
        },
        {
          title: "10. Intellectual property",
          paragraphs: [
            "Rights to the Service's trademarks, logos, UI composition, software, and other operator-created works belong to the operator or legitimate rightsholders. Users must not reproduce, distribute, modify, or reverse engineer such materials beyond what is permitted by law and these Terms.",
          ],
        },
        {
          title: "11. Account restrictions and enforcement",
          paragraphs: [
            "If violations are identified, including breaches of these Terms, abnormal automated requests, threats to service stability, or infringement of others' rights, the operator may take actions such as account restriction, service suspension, or related data-processing limits with prior or subsequent notice.",
          ],
        },
        {
          title: "12. Governing law and disputes",
          paragraphs: [
            "These Terms are governed by the laws of the Republic of Korea. Any disputes related to Service use will be handled according to applicable laws and procedures.",
          ],
        },
        {
          title: "13. Contact",
          boxed: true,
          paragraphs: ["Terms inquiries: planb.init@gmail.com"],
        },
      ],
    },
  },
  ja: {
    privacy: {
      title: "プライバシーポリシー",
      effectiveLabel: "施行日",
      updatedLabel: "最終更新日",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "AlloraTools（以下「本サービス」）は、利用者の個人情報を重視し、関連法令の遵守に努めます。本ポリシーでは、どの情報を、なぜ収集・利用するのか、どのように保管・削除するのか、利用者の権利は何かを説明します。",
      sections: [
        {
          title: "1. サービスおよび運営者情報",
          boxed: true,
          bullets: [
            "サービス名: AlloraTools",
            "運営者名: PLANB-John",
            "運営形態: 個人事業者",
            "お問い合わせメール: planb.init@gmail.com",
            "ドメイン: https://www.alloratools.com",
          ],
        },
        {
          title: "2. 収集する情報",
          paragraphs: ["本サービスは、機能提供に必要な最小限の情報を収集します。"],
          bullets: [
            "アカウント情報（登録/ログイン時）: メールアドレス、認証状態、アカウント識別子",
            "利用情報: 1日の利用回数（例: ゲストは1日5回、認証会員は1日10回）、リクエスト時刻、利用記録",
            "端末/ブラウザ識別情報: Cookieや類似技術で生成されるゲスト識別子（guest id）",
            "アップロードファイル情報: PDF to JPG 変換処理に必要なファイルおよびメタデータ",
          ],
        },
        {
          title: "3. 収集・利用目的",
          bullets: [
            "登録、ログイン、メール認証（Supabase Auth）およびアカウントセキュリティ管理",
            "PDF to JPG 変換機能の提供と安定運用",
            "無料利用上限の適用と不正利用防止（ゲスト/会員区分を含む）",
            "障害対応、性能改善、セキュリティ監視など運用品質の向上",
            "広告サービス（Google AdSense等）導入時の告知および運用",
          ],
        },
        {
          title: "4. 保管および削除",
          bullets: [
            "個人情報は、収集・利用目的達成に必要な範囲でのみ保管します。",
            "アカウント情報は、退会または目的達成後、遅滞なく削除または匿名化します。",
            "日次利用量データは、運用および不正利用防止に必要な範囲で保管される場合があります。",
            "アップロードファイルは変換目的の範囲でのみ利用し、ポリシーに基づき削除されることがあります。",
            "法令上の保存義務がある場合、当該期間保管後に削除します。",
          ],
        },
        {
          title: "5. Cookieおよび類似技術",
          paragraphs: [
            "本サービスは、ゲスト識別と日次利用量の追跡のため、Cookieや類似技術（localStorage等）を利用する場合があります。これにより未ログイン利用者にも利用制限ポリシーを適用できます。",
            "利用者はブラウザ設定でCookie保存を拒否または削除できますが、その場合一部機能（例: ゲスト利用量の認識）が制限される可能性があります。",
          ],
        },
        {
          title: "6. 外部サービス提供者（委託先/インフラ）",
          paragraphs: [
            "本サービスは安定提供のため、以下の外部サービスを利用します。各提供者は担当範囲内でデータを処理する場合があります。",
          ],
          bullets: ["Vercel: フロントエンドホスティング", "Render: ワーカー/バックエンドホスティング", "Supabase: 認証、ユーザーデータ、日次利用量追跡"],
        },
        {
          title: "7. 広告および第三者Cookie",
          paragraphs: [
            "本サービスは現在または将来、Google AdSense等の広告サービスを導入する場合があります。導入時には第三者Cookieまたは類似技術が使用される可能性があり、関連事項は本ポリシーまたは別途通知で案内します。",
          ],
        },
        {
          title: "8. 利用者の権利と行使方法",
          bullets: [
            "利用者は自己情報の開示、訂正、削除、処理停止を請求できます。",
            "法令上の例外を除き、アカウント削除を請求できます。",
            "権利行使の請求は planb.init@gmail.com までご連絡ください。",
          ],
        },
        {
          title: "9. 本ポリシーの変更",
          paragraphs: [
            "本ポリシーは、機能変更、法令改正、運営方針変更等により改定されることがあります。重要な変更がある場合は、施行日とともに本サービス内で告知します。",
          ],
        },
        {
          title: "10. お問い合わせ",
          boxed: true,
          paragraphs: ["個人情報に関するお問い合わせ: planb.init@gmail.com"],
        },
      ],
    },
    terms: {
      title: "利用規約",
      effectiveLabel: "施行日",
      updatedLabel: "最終更新日",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "本利用規約は、AlloraTools（以下「本サービス」）の利用条件、運営方針、利用者と運営者の権利・義務を定めるものです。",
      sections: [
        {
          title: "1. 運営者情報",
          boxed: true,
          bullets: [
            "サービス名: AlloraTools",
            "運営者名: PLANB-John",
            "運営形態: 個人事業者",
            "お問い合わせメール: planb.init@gmail.com",
            "ドメイン: https://www.alloratools.com",
          ],
        },
        {
          title: "2. 規約の目的と適用",
          paragraphs: [
            "本規約は、PDF to JPG 変換、アカウント登録/ログインなど本サービスの機能利用に必要な基本事項を定めます。利用者は本サービスを利用することで本規約に同意したものとみなされます。",
          ],
        },
        {
          title: "3. サービス内容",
          bullets: [
            "PDFファイルをJPG画像に変換するWebツール機能",
            "登録/ログインおよびメール認証に基づくアカウント機能（Supabase Auth）",
            "ゲスト/会員状態に応じた日次利用量管理機能",
            "運営者が追加または変更するその他機能",
          ],
        },
        {
          title: "4. アカウント、認証および利用者の義務",
          bullets: [
            "会員は正確な情報に基づいてアカウントを作成しなければなりません。",
            "一部機能の利用にはメール認証の完了が必要となる場合があります。",
            "アカウント情報の管理責任は利用者にあり、不正利用が疑われる場合は速やかに通知する必要があります。",
            "利用者は法令および本規約に違反する方法で本サービスを利用してはなりません。",
          ],
        },
        {
          title: "5. 無料利用上限とポリシー変更",
          bullets: [
            "ゲスト利用者は1日5回まで、メール認証済み会員は1日10回まで利用できます。",
            "利用量計測のため、Cookieまたは類似保存技術ベースの識別子が使用される場合があります。",
            "運営者は、安定性、コスト、運営方針等の理由により、事前告知のうえ利用上限や基準を変更できるものとします。",
          ],
        },
        {
          title: "6. アップロードファイルとコンテンツ責任",
          bullets: [
            "利用者は、権利を有する、または適法に利用可能なファイルのみをアップロードしてください。",
            "違法行為、権利侵害、マルウェア配布目的のファイルアップロードは禁止します。",
            "アップロードファイルに関する法的責任は原則として当該利用者に帰属します。",
          ],
        },
        {
          title: "7. サービスの変更・中断・終了",
          paragraphs: [
            "運営者は、メンテナンス、障害対応、外部インフラ問題（Vercel、Render、Supabase等）、運営方針変更等の理由により、本サービスの一部または全部を変更・中断できるものとします。可能な場合は事前または事後に通知します。",
          ],
        },
        {
          title: "8. 広告",
          paragraphs: [
            "本サービスは現在または将来、Google AdSense等の広告サービスを含む場合があります。広告表示方法や関連Cookie方針は、本サービスの各種ポリシーおよびプライバシーポリシーに従って案内します。",
          ],
        },
        {
          title: "9. 免責および責任制限",
          bullets: [
            "本サービスは「現状有姿」で提供され、特定目的適合性等の保証は行いません。",
            "天災、通信障害、第三者インフラ障害など不可抗力による損害について、法令で許容される範囲で責任を負いません。",
            "利用者の帰責事由により生じた損害について、運営者は法令で許容される範囲で責任を制限します。",
          ],
        },
        {
          title: "10. 知的財産権",
          paragraphs: [
            "本サービスの商標、ロゴ、画面構成、ソフトウェア等、運営者が作成した著作物に関する権利は、運営者または正当な権利者に帰属します。利用者は法令および本規約で許容される範囲を超えて、無断複製、配布、改変、リバースエンジニアリング等を行ってはなりません。",
          ],
        },
        {
          title: "11. アカウント制限および利用制限措置",
          paragraphs: [
            "規約違反、異常な自動化リクエスト、サービス安定性を損なう行為、他者権利侵害等が確認された場合、運営者は事前または事後通知のうえ、アカウント制限、利用停止、関連データ処理制限等の措置を取ることができます。",
          ],
        },
        {
          title: "12. 準拠法と紛争",
          paragraphs: [
            "本規約は大韓民国法を準拠法とし、本サービス利用に関する紛争は関連法令および手続に従って解決されます。",
          ],
        },
        {
          title: "13. お問い合わせ",
          boxed: true,
          paragraphs: ["規約に関するお問い合わせ: planb.init@gmail.com"],
        },
      ],
    },
  },
  es: {
    privacy: {
      title: "Política de Privacidad",
      effectiveLabel: "Fecha de entrada en vigor",
      updatedLabel: "Última actualización",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "AlloraTools (el \"Servicio\") valora su privacidad y procura cumplir la normativa aplicable. Esta Política de Privacidad explica qué datos recopilamos, por qué los usamos, cómo los conservamos o eliminamos y qué derechos tiene usted.",
      sections: [
        {
          title: "1. Información del servicio y del operador",
          boxed: true,
          bullets: [
            "Nombre del servicio: AlloraTools",
            "Nombre del operador: PLANB-John",
            "Tipo de operación: operador individual",
            "Correo de contacto: planb.init@gmail.com",
            "Dominio: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Información que recopilamos",
          paragraphs: ["El Servicio recopila la información mínima necesaria para ofrecer sus funciones principales."],
          bullets: [
            "Información de cuenta (registro/inicio de sesión): dirección de correo, estado de verificación e identificador de cuenta",
            "Información de uso: número de usos diarios (por ejemplo, 5 usos/día para invitados y 10 usos/día para miembros verificados), hora de las solicitudes y registros de uso",
            "Identificadores de dispositivo/navegador: identificadores de invitado creados mediante cookies o tecnologías de almacenamiento similares",
            "Información de archivos subidos: archivos y metadatos necesarios para el procesamiento de PDF a JPG",
          ],
        },
        {
          title: "3. Finalidades del tratamiento",
          bullets: [
            "Registro, inicio de sesión, verificación por correo (Supabase Auth) y gestión de seguridad de cuentas",
            "Prestación de la conversión de PDF a JPG y operación estable del Servicio",
            "Aplicación de límites gratuitos diarios y prevención de uso abusivo (incluida la distinción invitado/miembro)",
            "Mejora operativa: gestión de incidentes, rendimiento y monitoreo de seguridad",
            "Avisos y operación de posibles servicios publicitarios (como Google AdSense)",
          ],
        },
        {
          title: "4. Conservación y eliminación",
          bullets: [
            "La información personal se conserva solo durante el tiempo necesario para cumplir las finalidades indicadas.",
            "La información de cuenta se elimina o anonimiza sin demora indebida cuando se elimina la cuenta o se cumple la finalidad.",
            "Los datos de seguimiento de uso diario pueden conservarse dentro del alcance necesario para operación y prevención de abusos.",
            "Los archivos subidos se usan solo para la conversión y pueden eliminarse según la política aplicable.",
            "Cuando exista obligación legal de conservación, los datos se guardarán durante el plazo exigido y luego se eliminarán.",
          ],
        },
        {
          title: "5. Cookies y tecnologías similares",
          paragraphs: [
            "El Servicio puede usar cookies y tecnologías similares (incluido localStorage) para identificar invitados y aplicar límites diarios de uso. Esto permite aplicar políticas de uso también a usuarios que no inician sesión.",
            "Puede rechazar o eliminar cookies en la configuración del navegador, aunque algunas funciones (por ejemplo, el reconocimiento de uso como invitado) podrían verse limitadas.",
          ],
        },
        {
          title: "6. Proveedores externos (encargados/infraestructura)",
          paragraphs: [
            "Para prestar el Servicio de forma estable, utilizamos los proveedores siguientes. Cada proveedor puede tratar datos dentro del alcance de su función.",
          ],
          bullets: [
            "Vercel: alojamiento de frontend",
            "Render: alojamiento de worker/backend",
            "Supabase: autenticación, datos de usuario y seguimiento de uso diario",
          ],
        },
        {
          title: "7. Publicidad y cookies de terceros",
          paragraphs: [
            "El Servicio puede incorporar ahora o en el futuro servicios publicitarios como Google AdSense. Si se habilita publicidad, podrían utilizarse cookies de terceros o tecnologías similares, y los detalles se informarán en esta política o en un aviso independiente.",
          ],
        },
        {
          title: "8. Sus derechos y cómo ejercerlos",
          bullets: [
            "Puede solicitar acceso, rectificación, eliminación o limitación del tratamiento de sus datos personales.",
            "Puede solicitar la eliminación de su cuenta, salvo las excepciones exigidas por ley.",
            "Puede ejercer sus derechos escribiendo a planb.init@gmail.com.",
          ],
        },
        {
          title: "9. Cambios de esta Política de Privacidad",
          paragraphs: [
            "Esta política puede modificarse por cambios funcionales, normativos u operativos. Los cambios relevantes se anunciarán en el Servicio junto con su fecha de entrada en vigor.",
          ],
        },
        {
          title: "10. Contacto",
          boxed: true,
          paragraphs: ["Consultas de privacidad: planb.init@gmail.com"],
        },
      ],
    },
    terms: {
      title: "Términos de Servicio",
      effectiveLabel: "Fecha de entrada en vigor",
      updatedLabel: "Última actualización",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "Estos Términos de Servicio regulan las condiciones de uso de AlloraTools (el \"Servicio\"), incluidas las políticas operativas y los derechos y obligaciones entre usuarios y operador.",
      sections: [
        {
          title: "1. Información del operador",
          boxed: true,
          bullets: [
            "Nombre del servicio: AlloraTools",
            "Nombre del operador: PLANB-John",
            "Tipo de operación: operador individual",
            "Correo de contacto: planb.init@gmail.com",
            "Dominio: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Finalidad y alcance",
          paragraphs: [
            "Estos Términos establecen las reglas básicas para usar las funciones del Servicio, incluidas la conversión de PDF a JPG y el registro/inicio de sesión. Al usar el Servicio, se considera que usted acepta estos Términos.",
          ],
        },
        {
          title: "3. Funcionalidades del servicio",
          bullets: [
            "Herramienta web para convertir archivos PDF en imágenes JPG",
            "Funciones de cuenta basadas en registro/inicio de sesión y verificación por correo (Supabase Auth)",
            "Gestión de uso diario según estado de invitado o miembro",
            "Funciones adicionales que el operador pueda añadir o modificar",
          ],
        },
        {
          title: "4. Cuentas, verificación y obligaciones del usuario",
          bullets: [
            "Los miembros deben crear cuentas con información precisa.",
            "Puede requerirse verificación por correo para usar con normalidad determinadas funciones.",
            "El usuario es responsable de sus credenciales y debe informar de inmediato cualquier uso no autorizado sospechoso.",
            "El usuario no debe utilizar el Servicio en violación de la ley o de estos Términos.",
          ],
        },
        {
          title: "5. Límites de uso gratuito y cambios de política",
          bullets: [
            "Los usuarios invitados pueden usar el Servicio hasta 5 veces al día y los miembros verificados por correo hasta 10 veces al día.",
            "Pueden usarse identificadores basados en cookies o almacenamiento para medir el uso.",
            "El operador puede modificar límites y criterios de uso, con aviso previo, por motivos de estabilidad, costos o política.",
          ],
        },
        {
          title: "6. Archivos subidos y responsabilidad sobre contenidos",
          bullets: [
            "Solo debe subir archivos sobre los que tenga derechos o autorización legal de uso.",
            "Se prohíbe subir archivos con fines ilegales, de infracción de derechos o de distribución de malware.",
            "La responsabilidad legal sobre los archivos subidos recae, por regla general, en el usuario que los sube.",
          ],
        },
        {
          title: "7. Cambios, suspensión y finalización del servicio",
          paragraphs: [
            "El operador puede modificar o suspender total o parcialmente el Servicio por mantenimiento, respuesta a incidentes, problemas de infraestructura externa (como Vercel, Render o Supabase) o cambios de política. Cuando sea posible, se notificará antes o después.",
          ],
        },
        {
          title: "8. Publicidad",
          paragraphs: [
            "El Servicio puede incluir ahora o en el futuro servicios publicitarios como Google AdSense. El modo de visualización de anuncios y las políticas de cookies relacionadas se regirán por las políticas aplicables del Servicio y la Política de Privacidad.",
          ],
        },
        {
          title: "9. Exenciones y limitación de responsabilidad",
          bullets: [
            "El Servicio se proporciona \"tal cual\" y sin garantías, incluida la idoneidad para un propósito particular.",
            "El operador no será responsable, en la medida permitida por la ley, por fuerza mayor, fallas de red o interrupciones de infraestructura de terceros.",
            "El operador no responde por daños causados por culpa del usuario y limita su responsabilidad en la medida permitida por la ley.",
          ],
        },
        {
          title: "10. Propiedad intelectual",
          paragraphs: [
            "Los derechos sobre marcas, logotipos, composición de interfaz, software y demás obras creadas por el operador pertenecen al operador o a sus titulares legítimos. El usuario no debe reproducir, distribuir, modificar ni realizar ingeniería inversa más allá de lo permitido por la ley y estos Términos.",
          ],
        },
        {
          title: "11. Restricciones de cuenta y medidas de uso",
          paragraphs: [
            "Si se detectan incumplimientos de estos Términos, solicitudes automatizadas anómalas, riesgos para la estabilidad del Servicio o infracciones de derechos de terceros, el operador podrá aplicar restricciones de cuenta, suspensión del servicio o limitaciones de tratamiento de datos, con aviso previo o posterior.",
          ],
        },
        {
          title: "12. Ley aplicable y disputas",
          paragraphs: [
            "Estos Términos se rigen por las leyes de la República de Corea. Las disputas relacionadas con el uso del Servicio se resolverán conforme a la legislación y procedimientos aplicables.",
          ],
        },
        {
          title: "13. Contacto",
          boxed: true,
          paragraphs: ["Consultas sobre los términos: planb.init@gmail.com"],
        },
      ],
    },
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      effectiveLabel: "Inkrafttreten",
      updatedLabel: "Zuletzt aktualisiert",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "AlloraTools (der \"Dienst\") nimmt den Schutz Ihrer personenbezogenen Daten ernst und bemüht sich um die Einhaltung geltender Gesetze. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, warum wir sie nutzen, wie wir sie speichern oder löschen und welche Rechte Sie haben.",
      sections: [
        {
          title: "1. Angaben zum Dienst und Betreiber",
          boxed: true,
          bullets: [
            "Dienstname: AlloraTools",
            "Betreibername: PLANB-John",
            "Betriebsform: Einzelbetreiber",
            "Kontakt-E-Mail: planb.init@gmail.com",
            "Domain: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Welche Informationen wir erheben",
          paragraphs: ["Der Dienst erhebt nur die Mindestdaten, die für die Bereitstellung der Kernfunktionen erforderlich sind."],
          bullets: [
            "Kontoinformationen (bei Registrierung/Anmeldung): E-Mail-Adresse, Verifizierungsstatus, Konto-ID",
            "Nutzungsinformationen: tägliche Nutzung (z. B. 5 Nutzungen/Tag für Gäste, 10 Nutzungen/Tag für verifizierte Mitglieder), Zeitpunkte von Anfragen und Nutzungsprotokolle",
            "Geräte-/Browserkennungen: Gastkennungen, die über Cookies oder ähnliche Speichertechnologien erstellt werden",
            "Informationen zu hochgeladenen Dateien: Dateien und Metadaten, die für die PDF-zu-JPG-Verarbeitung erforderlich sind",
          ],
        },
        {
          title: "3. Zwecke der Erhebung und Nutzung",
          bullets: [
            "Registrierung, Anmeldung, E-Mail-Verifizierung (Supabase Auth) und Kontosicherheit",
            "Bereitstellung der PDF-zu-JPG-Konvertierung und stabiler Betrieb des Dienstes",
            "Anwendung täglicher Freikontingente und Missbrauchsprävention (einschließlich Gast-/Mitgliedsunterscheidung)",
            "Betriebliche Qualitätsverbesserung wie Störungsbehebung, Performance-Optimierung und Sicherheitsüberwachung",
            "Hinweise und Betrieb im Zusammenhang mit möglichen Werbediensten (z. B. Google AdSense)",
          ],
        },
        {
          title: "4. Speicherung und Löschung",
          bullets: [
            "Personenbezogene Daten werden nur so lange gespeichert, wie es zur Zweckerfüllung erforderlich ist.",
            "Kontodaten werden nach Kontolöschung oder Zweckerfüllung unverzüglich gelöscht oder anonymisiert.",
            "Daten zur täglichen Nutzung können im erforderlichen Umfang für Betrieb und Missbrauchsprävention gespeichert werden.",
            "Hochgeladene Dateien werden ausschließlich zur Konvertierung verwendet und können gemäß Richtlinie gelöscht werden.",
            "Bestehen gesetzliche Aufbewahrungspflichten, werden Daten für die vorgeschriebene Dauer gespeichert und danach gelöscht.",
          ],
        },
        {
          title: "5. Cookies und ähnliche Technologien",
          paragraphs: [
            "Der Dienst kann Cookies und ähnliche Technologien (einschließlich localStorage) zur Gastidentifizierung und Erfassung täglicher Nutzungsgrenzen verwenden. So können Nutzungsrichtlinien auch für nicht angemeldete Nutzer angewendet werden.",
            "Sie können Cookies in den Browsereinstellungen ablehnen oder löschen. In diesem Fall können einzelne Funktionen (z. B. Erkennung der Gastnutzung) eingeschränkt sein.",
          ],
        },
        {
          title: "6. Externe Dienstleister (Auftragsverarbeitung/Infrastruktur)",
          paragraphs: [
            "Für einen zuverlässigen Betrieb nutzen wir die folgenden Anbieter. Jeder Anbieter kann Daten innerhalb seines Aufgabenbereichs verarbeiten.",
          ],
          bullets: [
            "Vercel: Frontend-Hosting",
            "Render: Worker-/Backend-Hosting",
            "Supabase: Authentifizierung, Nutzerdaten und tägliche Nutzungsverfolgung",
          ],
        },
        {
          title: "7. Werbung und Drittanbieter-Cookies",
          paragraphs: [
            "Der Dienst kann aktuell oder künftig Werbedienste wie Google AdSense einführen. Bei aktivierter Werbung können Drittanbieter-Cookies oder ähnliche Technologien eingesetzt werden. Entsprechende Informationen werden in dieser Richtlinie oder in einem separaten Hinweis veröffentlicht.",
          ],
        },
        {
          title: "8. Ihre Rechte und Ausübung",
          bullets: [
            "Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
            "Sie können die Löschung Ihres Kontos verlangen, vorbehaltlich gesetzlicher Ausnahmen.",
            "Anfragen zur Rechteausübung können an planb.init@gmail.com gesendet werden.",
          ],
        },
        {
          title: "9. Änderungen dieser Datenschutzerklärung",
          paragraphs: [
            "Diese Richtlinie kann aufgrund von Funktionsupdates, Gesetzesänderungen oder Änderungen der Betriebsrichtlinien angepasst werden. Wesentliche Änderungen werden im Dienst zusammen mit dem Inkrafttretensdatum bekannt gegeben.",
          ],
        },
        {
          title: "10. Kontakt",
          boxed: true,
          paragraphs: ["Datenschutzanfragen: planb.init@gmail.com"],
        },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      effectiveLabel: "Inkrafttreten",
      updatedLabel: "Zuletzt aktualisiert",
      effectiveDate: "2026-04-04",
      updatedDate: "2026-04-04",
      intro:
        "Diese Nutzungsbedingungen regeln die Nutzung von AlloraTools (dem \"Dienst\"), einschließlich Betriebsrichtlinien sowie Rechte und Pflichten zwischen Nutzern und Betreiber.",
      sections: [
        {
          title: "1. Betreiberangaben",
          boxed: true,
          bullets: [
            "Dienstname: AlloraTools",
            "Betreibername: PLANB-John",
            "Betriebsform: Einzelbetreiber",
            "Kontakt-E-Mail: planb.init@gmail.com",
            "Domain: https://www.alloratools.com",
          ],
        },
        {
          title: "2. Zweck und Geltungsbereich",
          paragraphs: [
            "Diese Bedingungen legen die grundlegenden Regeln für die Nutzung der bereitgestellten Funktionen fest, einschließlich PDF-zu-JPG-Konvertierung sowie Registrierung/Anmeldung. Durch die Nutzung des Dienstes erklären Sie sich mit diesen Bedingungen einverstanden.",
          ],
        },
        {
          title: "3. Leistungsumfang",
          bullets: [
            "Web-Tool zur Konvertierung von PDF-Dateien in JPG-Bilder",
            "Kontofunktionen auf Basis von Registrierung/Anmeldung und E-Mail-Verifizierung (Supabase Auth)",
            "Tägliche Nutzungsverwaltung für Gast- und Mitgliedsstatus",
            "Weitere Funktionen, die vom Betreiber hinzugefügt oder geändert werden können",
          ],
        },
        {
          title: "4. Konten, Verifizierung und Pflichten der Nutzer",
          bullets: [
            "Mitglieder müssen Konten mit korrekten Angaben erstellen.",
            "Für bestimmte Funktionen kann eine abgeschlossene E-Mail-Verifizierung erforderlich sein.",
            "Nutzer sind für die Verwaltung ihrer Zugangsdaten verantwortlich und müssen vermutete unbefugte Nutzung unverzüglich melden.",
            "Nutzer dürfen den Dienst nicht unter Verstoß gegen Gesetze oder diese Bedingungen nutzen.",
          ],
        },
        {
          title: "5. Freie Nutzungslimits und Richtlinienänderungen",
          bullets: [
            "Gäste können den Dienst bis zu 5-mal pro Tag nutzen, E-Mail-verifizierte Mitglieder bis zu 10-mal pro Tag.",
            "Zur Nutzungsmessung können Cookie- oder speicherbasierte Kennungen verwendet werden.",
            "Der Betreiber kann Nutzungslimits und Kriterien aus Gründen wie Stabilität, Kosten oder Richtlinienänderungen mit vorheriger Ankündigung anpassen.",
          ],
        },
        {
          title: "6. Hochgeladene Dateien und Inhaltsverantwortung",
          bullets: [
            "Sie dürfen nur Dateien hochladen, an denen Sie Rechte besitzen oder die Sie rechtmäßig nutzen dürfen.",
            "Das Hochladen von Dateien zu illegalen Zwecken, zur Rechtsverletzung oder zur Verbreitung von Malware ist untersagt.",
            "Die rechtliche Verantwortung für hochgeladene Dateien liegt grundsätzlich beim hochladenden Nutzer.",
          ],
        },
        {
          title: "7. Änderungen, Unterbrechung und Beendigung des Dienstes",
          paragraphs: [
            "Der Betreiber kann den Dienst ganz oder teilweise ändern oder unterbrechen, z. B. wegen Wartung, Störungsbehebung, externer Infrastrukturprobleme (wie Vercel, Render, Supabase) oder Richtlinienänderungen. Soweit möglich erfolgt eine vorherige oder nachträgliche Mitteilung.",
          ],
        },
        {
          title: "8. Werbung",
          paragraphs: [
            "Der Dienst kann aktuell oder künftig Werbedienste wie Google AdSense enthalten. Anzeigeformen und zugehörige Cookie-Richtlinien richten sich nach den geltenden Dienstrichtlinien und der Datenschutzerklärung.",
          ],
        },
        {
          title: "9. Haftungsausschluss und Haftungsbeschränkung",
          bullets: [
            "Der Dienst wird \"wie besehen\" bereitgestellt, ohne Gewährleistungen, einschließlich Eignung für einen bestimmten Zweck.",
            "Der Betreiber haftet im gesetzlich zulässigen Umfang nicht für höhere Gewalt, Netzwerkausfälle oder Ausfälle externer Infrastruktur.",
            "Für Schäden, die durch Verschulden des Nutzers entstehen, haftet der Betreiber nicht und beschränkt die Haftung im gesetzlich zulässigen Umfang.",
          ],
        },
        {
          title: "10. Geistiges Eigentum",
          paragraphs: [
            "Rechte an Marken, Logos, UI-Gestaltung, Software und sonstigen vom Betreiber erstellten Werken des Dienstes liegen beim Betreiber oder berechtigten Rechteinhabern. Nutzer dürfen solche Inhalte nicht über den gesetzlich und vertraglich zulässigen Rahmen hinaus vervielfältigen, verbreiten, verändern oder rückentwickeln.",
          ],
        },
        {
          title: "11. Kontobeschränkungen und Durchsetzungsmaßnahmen",
          paragraphs: [
            "Bei Verstößen gegen diese Bedingungen, auffälligen automatisierten Anfragen, Gefährdung der Dienststabilität oder Verletzung fremder Rechte kann der Betreiber mit vorheriger oder nachträglicher Mitteilung Maßnahmen wie Kontobeschränkung, Dienstsperre oder Einschränkung der Datenverarbeitung ergreifen.",
          ],
        },
        {
          title: "12. Anwendbares Recht und Streitigkeiten",
          paragraphs: [
            "Diese Bedingungen unterliegen dem Recht der Republik Korea. Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes werden gemäß den anwendbaren Gesetzen und Verfahren behandelt.",
          ],
        },
        {
          title: "13. Kontakt",
          boxed: true,
          paragraphs: ["Anfragen zu den Bedingungen: planb.init@gmail.com"],
        },
      ],
    },
  },
};
