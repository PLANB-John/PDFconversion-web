import { type Locale } from "@/lib/i18n";

type PrivacyPageProps = {
  params: Promise<{ locale: Locale }>;
};

const effectiveDate = "2026-04-04";
const updateDate = "2026-04-04";

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  await params;

  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">개인정보처리방침</h1>
        <p className="text-sm text-slate-600">
          시행일: {effectiveDate} | 최종 업데이트: {updateDate}
        </p>
        <p className="text-slate-700">
          AlloraTools(이하 ‘서비스’)는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하기
          위해 노력합니다. 본 개인정보처리방침은 서비스 이용 과정에서 어떤 정보를 왜 수집·이용하는지,
          어떻게 보관·파기하는지, 이용자가 어떤 권리를 가지는지 설명합니다.
        </p>
      </header>

      <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">1. 서비스 및 운영자 정보</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>서비스명: AlloraTools</li>
          <li>운영자명: PLANB-John</li>
          <li>운영 형태: 개인 운영</li>
          <li>문의 이메일: planb.init@gmail.com</li>
          <li>도메인: https://www.alloratools.com</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">2. 수집하는 정보</h2>
        <div className="space-y-2 text-slate-700">
          <p>서비스는 기능 제공을 위해 필요한 최소한의 정보를 수집합니다.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium">계정 정보(회원가입/로그인 시):</span> 이메일 주소,
              인증 상태(이메일 인증 여부), 계정 식별자
            </li>
            <li>
              <span className="font-medium">이용 정보:</span> 일일 사용량(예: 게스트 5회/일, 인증 회원
              10회/일), 요청 시각, 서비스 이용 기록
            </li>
            <li>
              <span className="font-medium">기기/브라우저 식별 정보:</span> 쿠키 또는 유사 저장 기술을
              통해 생성되는 게스트 식별자(guest id)
            </li>
            <li>
              <span className="font-medium">업로드 파일 관련 정보:</span> PDF to JPG 변환 처리를 위한
              파일 및 처리 메타데이터
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">3. 수집·이용 목적</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>회원가입, 로그인, 이메일 인증(Supabase Auth) 및 계정 보안 관리</li>
          <li>PDF to JPG 변환 기능 제공 및 안정적인 서비스 운영</li>
          <li>일일 무료 사용 한도 적용 및 남용 방지(게스트/인증 회원 구분 포함)</li>
          <li>오류 대응, 성능 개선, 보안 모니터링 등 운영 품질 개선</li>
          <li>향후 광고 서비스(예: Google AdSense) 도입 시 관련 고지 및 운영</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">4. 보관 및 파기 원칙</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>개인정보는 수집·이용 목적 달성에 필요한 범위 내에서만 보관합니다.</li>
          <li>계정 정보는 회원 탈퇴 또는 목적 달성 시 지체 없이 삭제 또는 비식별화합니다.</li>
          <li>일일 사용량 추적 데이터는 서비스 운영 및 부정 사용 방지 목적 범위에서 보관합니다.</li>
          <li>업로드 파일은 변환 처리 목적 범위에서만 사용하며, 정책에 따라 삭제될 수 있습니다.</li>
          <li>법령상 보관 의무가 있는 경우 해당 기간 동안 보관 후 파기합니다.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">5. 쿠키 및 유사 기술 사용</h2>
        <p className="text-slate-700">
          서비스는 게스트 식별 및 일일 사용량 추적을 위해 쿠키 또는 브라우저 저장소(localStorage 등)와
          유사 기술을 사용할 수 있습니다. 이를 통해 로그인하지 않은 이용자에게도 사용 제한 정책을 적용할
          수 있습니다.
        </p>
        <p className="text-slate-700">
          이용자는 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있으나, 이 경우 일부 기능(예: 게스트
          사용량 인식)이 제한될 수 있습니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">6. 외부 서비스 제공자(처리 위탁/인프라)</h2>
        <p className="text-slate-700">
          서비스는 안정적 제공을 위해 아래 외부 서비스를 사용합니다. 각 제공자는 해당 서비스 범위 내에서
          데이터를 처리할 수 있습니다.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Vercel: 프론트엔드 호스팅</li>
          <li>Render: 워커/백엔드 호스팅</li>
          <li>Supabase: 인증, 사용자 데이터, 일일 사용량 추적</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">7. 광고 및 제3자 쿠키 관련 안내</h2>
        <p className="text-slate-700">
          현재 또는 향후 서비스는 Google AdSense 등 광고 서비스를 도입할 수 있습니다. 광고 서비스가
          도입되는 경우, 제3자 쿠키 또는 유사 기술이 사용될 수 있으며 관련 사항은 본 방침 또는 별도 공지를
          통해 안내합니다.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">8. 이용자 권리 및 행사 방법</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>이용자는 본인 정보에 대한 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</li>
          <li>계정 탈퇴를 요청할 수 있으며, 관련 법령에 따른 예외를 제외하고 처리합니다.</li>
          <li>권리 행사는 문의 이메일(planb.init@gmail.com)로 요청할 수 있습니다.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">9. 개인정보처리방침의 변경</h2>
        <p className="text-slate-700">
          본 방침은 서비스 기능 변경, 법령 개정, 운영 정책 변경 등에 따라 수정될 수 있습니다. 중요한 변경이
          있는 경우 서비스 내 페이지를 통해 시행일과 함께 안내합니다.
        </p>
      </div>

      <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">10. 문의처</h2>
        <p className="text-slate-700">개인정보 관련 문의: planb.init@gmail.com</p>
      </div>
    </section>
  );
}
