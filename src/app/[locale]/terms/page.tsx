import { type Locale } from "@/lib/i18n";

type TermsPageProps = {
  params: Promise<{ locale: Locale }>;
};

const effectiveDate = "2026-04-04";
const updateDate = "2026-04-04";

export default async function TermsPage({ params }: TermsPageProps) {
  await params;

  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">이용약관</h1>
        <p className="text-sm text-slate-600">
          시행일: {effectiveDate} | 최종 업데이트: {updateDate}
        </p>
        <p className="text-slate-700">
          본 이용약관은 AlloraTools(이하 ‘서비스’)의 이용 조건, 운영 정책, 이용자와 운영자 간 권리·의무를
          규정합니다.
        </p>
      </header>

      <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">1. 운영자 정보</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>서비스명: AlloraTools</li>
          <li>운영자명: PLANB-John</li>
          <li>운영 형태: 개인 운영</li>
          <li>문의 이메일: planb.init@gmail.com</li>
          <li>도메인: https://www.alloratools.com</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">2. 약관의 목적 및 적용</h2>
        <p className="text-slate-700">
          본 약관은 이용자가 서비스에서 제공하는 기능(PDF to JPG 변환, 계정 가입/로그인 등)을 이용함에
          있어 필요한 기본 사항을 정합니다. 이용자는 서비스를 이용함으로써 본 약관에 동의한 것으로
          간주됩니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">3. 서비스 내용</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>PDF 파일을 JPG 이미지로 변환하는 웹 도구 기능</li>
          <li>회원가입/로그인 및 이메일 인증 기반 계정 기능(Supabase Auth)</li>
          <li>게스트/회원 상태에 따른 일일 사용량 관리 기능</li>
          <li>기타 운영자가 추가하거나 변경하는 부가 기능</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">4. 계정, 인증 및 이용자 의무</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>회원은 정확한 정보를 기반으로 계정을 생성해야 합니다.</li>
          <li>회원은 이메일 인증 절차를 완료해야 일부 기능을 정상적으로 이용할 수 있습니다.</li>
          <li>계정 정보 관리 책임은 이용자에게 있으며, 무단 사용이 의심되면 즉시 알려야 합니다.</li>
          <li>이용자는 법령 및 본 약관을 위반하는 방식으로 서비스를 사용해서는 안 됩니다.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">5. 무료 사용 한도 및 정책 변경</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>게스트 이용자는 1일 5회, 이메일 인증 회원은 1일 10회까지 사용할 수 있습니다.</li>
          <li>사용량 측정을 위해 쿠키 또는 유사 저장 기술 기반 식별자가 사용될 수 있습니다.</li>
          <li>
            운영자는 서비스 안정성, 비용, 정책 사유에 따라 사용 한도 및 기준을 사전 고지 후 변경할 수
            있습니다.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">6. 업로드 파일 및 콘텐츠 책임</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>이용자는 본인이 권리를 보유하거나 적법하게 이용 가능한 파일만 업로드해야 합니다.</li>
          <li>불법, 권리 침해, 악성코드 유포 목적의 파일 업로드를 금지합니다.</li>
          <li>업로드 파일과 관련한 법적 책임은 원칙적으로 해당 이용자에게 있습니다.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">7. 서비스 변경, 중단, 종료</h2>
        <p className="text-slate-700">
          운영자는 시스템 점검, 장애 대응, 외부 인프라 이슈(Vercel, Render, Supabase 등), 정책 변경 등의
          사유로 서비스 일부 또는 전부를 변경·중단할 수 있습니다. 가능한 경우 사전 또는 사후 공지를 통해
          안내합니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">8. 광고</h2>
        <p className="text-slate-700">
          서비스는 현재 또는 향후 Google AdSense 등 광고 서비스를 포함할 수 있습니다. 광고 노출 방식,
          관련 쿠키 정책은 서비스 정책 및 개인정보처리방침에 따라 안내됩니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">9. 면책 및 책임 제한</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>서비스는 ‘있는 그대로’ 제공되며, 특정 목적 적합성 등을 보장하지 않습니다.</li>
          <li>운영자는 천재지변, 통신 장애, 제3자 인프라 장애 등 불가항력적 사유에 대해 책임을 제한받습니다.</li>
          <li>
            운영자는 이용자의 귀책 사유로 발생한 손해에 대해 책임지지 않으며, 법령상 허용 범위에서 책임을
            제한합니다.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">10. 지식재산권</h2>
        <p className="text-slate-700">
          서비스의 상표, 로고, 화면 구성, 소프트웨어 등 운영자가 작성한 저작물에 대한 권리는 운영자 또는
          정당한 권리자에게 귀속됩니다. 이용자는 관련 법령 및 본 약관이 허용하는 범위를 넘어 무단 복제,
          배포, 변경, 역설계 등을 해서는 안 됩니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">11. 계정 제한 및 이용 제한 조치</h2>
        <p className="text-slate-700">
          운영자는 약관 위반, 비정상적 자동화 요청, 서비스 안정성 저해 행위, 타인 권리 침해가 확인되는 경우
          사전 통지 또는 사후 통지와 함께 계정 제한, 이용 중단, 관련 데이터 처리 제한 등의 조치를 취할 수
          있습니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">12. 준거법 및 분쟁</h2>
        <p className="text-slate-700">
          본 약관은 대한민국 법령을 준거법으로 하며, 서비스 이용과 관련하여 분쟁이 발생할 경우 관련 법령에
          따른 절차를 따릅니다.
        </p>
      </div>

      <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">13. 문의처</h2>
        <p className="text-slate-700">약관 관련 문의: planb.init@gmail.com</p>
      </div>
    </section>
  );
}
