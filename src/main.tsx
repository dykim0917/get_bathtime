import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import homeShot from './assets/home-with-history.png';
import careShot from './assets/care-default.png';
import recipeShot from './assets/recipe-care.png';
import timerShot from './assets/timer-running.png';
import productShot from './assets/product-default.png';

const appUrl = 'https://app.getbathtime.com';
const supportEmail = 'getbathtime@gmail.com';
const legalMeta = {
  serviceName: '바스타임',
  operatorName: '김대영',
  operatorRole: '운영자',
  domain: 'getbathtime.com',
  effectiveDate: '2026-04-23',
  cpoName: '김대영',
  cpoRole: '운영자',
  cpoPhone: '010-2288-2897',
  cpoEmail: 'getbathtime@gmail.com',
} as const;

const proof = [
  ['컨디션 기준 추천', '오늘 몸 상태와 가능한 환경을 먼저 확인합니다.'],
  ['샤워, 욕조, 족욕 대응', '지금 가능한 방식에 맞춰 온도와 시간을 조정합니다.'],
  ['타이머까지 연결', '추천에서 끝나지 않고 실제 루틴 진행으로 이어집니다.'],
] as const;

const steps = [
  {
    label: '01',
    title: '오늘 가능한 환경을 고릅니다',
    body: '욕조, 샤워, 족욕 중 지금 할 수 있는 방식을 기준으로 시작합니다.',
    image: careShot,
  },
  {
    label: '02',
    title: '무리 없는 루틴을 확인합니다',
    body: '온도, 시간, 준비물, 안전 안내를 한 화면에서 확인합니다.',
    image: recipeShot,
  },
  {
    label: '03',
    title: '타이머로 그대로 따라갑니다',
    body: '음악과 배경 소리를 켜고, 화면을 덜 보면서 쉬는 시간에 집중합니다.',
    image: timerShot,
  },
] as const;

const privacySections = [
  {
    title: '1. 개인정보의 처리 목적',
    body: '바스타임은 이용자의 컨디션과 취향에 맞는 입욕 루틴과 제품 추천을 제공하기 위해 최소한의 개인정보를 처리합니다.',
    bullets: [
      '맞춤 입욕 루틴 추천 및 안전 주의사항 반영',
      '이용자 상태에 맞는 목욕 환경 설정 저장',
      '서비스 안정성 확인, 오류 분석, 부정 이용 방지',
      '14세 미만 이용자의 경우 법정대리인 동의 확인을 위한 절차 운영',
    ],
  },
  {
    title: '2. 처리하는 개인정보 항목',
    body: '바스타임은 다음 정보를 처리합니다.',
    bullets: [
      '이용자가 직접 선택하는 정보: 목욕 환경(욕조, 족욕, 샤워)',
      '민감정보: 건강 상태(고혈압/심장병 여부, 임신 여부, 당뇨 여부, 민감성 피부 여부)',
      '자동 수집 정보: IP 주소, 기기정보, 접속기록, 쿠키',
      '고유식별정보(주민등록번호, 여권번호, 운전면허번호, 외국인등록번호)는 수집하지 않습니다.',
    ],
  },
  {
    title: '3. 개인정보의 처리 및 보유 기간',
    bullets: [
      '목욕 환경 및 건강 상태 정보: 이용자가 앱에서 직접 수정하거나 삭제하기 전까지',
      '접속기록, 기기정보 등 자동 수집 정보: 수집일로부터 최대 12개월',
      '법령상 보존 의무가 있는 경우에는 해당 법령이 정한 기간 동안 별도 보관합니다.',
    ],
  },
  {
    title: '4. 개인정보의 파기 절차 및 방법',
    bullets: [
      '처리 목적이 달성되거나 보유기간이 지난 개인정보는 지체 없이 파기합니다.',
      '전자적 파일은 복구가 어렵도록 삭제하고, 출력물은 분쇄 또는 소각합니다.',
      '법령상 보관이 필요한 정보는 별도 분리하여 보관 후 기간 만료 시 파기합니다.',
    ],
  },
  {
    title: '5. 정보주체와 법정대리인의 권리·의무 및 행사 방법',
    bullets: [
      '이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.',
      '14세 미만 아동의 경우 법정대리인이 그 권리를 대신 행사할 수 있습니다.',
      '권리 행사는 이메일(getbathtime@gmail.com)로 요청할 수 있으며, 본인 확인 후 처리합니다.',
    ],
  },
  {
    title: '6. 개인정보 보호책임자 및 열람청구 접수·처리 부서',
    bullets: [
      `개인정보 보호책임자: ${legalMeta.cpoName} (${legalMeta.cpoRole})`,
      `연락처: ${legalMeta.cpoPhone}`,
      `이메일: ${legalMeta.cpoEmail}`,
      '열람청구 및 고충처리 접수 부서는 개인정보 보호책임자와 동일합니다.',
    ],
  },
  {
    title: '7. 개인정보의 안전성 확보 조치',
    bullets: [
      '개인정보 접근 권한을 필요한 범위로 제한합니다.',
      '서비스 이용기록을 점검하고 비정상 접근을 모니터링합니다.',
      '민감정보는 서비스 제공에 필요한 범위에서만 처리하고 화면 안내를 통해 주의를 고지합니다.',
    ],
  },
  {
    title: '8. 개인정보 제3자 제공',
    body: '바스타임은 이용자의 개인정보를 외부 제3자에게 제공하지 않습니다.',
  },
  {
    title: '9. 개인정보 처리위탁',
    body: '현재 바스타임은 개인정보 처리 업무를 외부 업체에 위탁하고 있지 않습니다. 향후 위탁이 발생하면 수탁자, 위탁 업무, 보유·이용 기간을 처리방침에 반영합니다.',
  },
  {
    title: '10. 자동 수집 장치의 설치·운영 및 거부',
    bullets: [
      '바스타임은 서비스 접속 상태 유지와 기본 동작을 위해 쿠키 또는 이에 준하는 저장수단을 사용할 수 있습니다.',
      '현재 맞춤형 광고 또는 제3자 광고 추적 쿠키는 사용하지 않습니다.',
      '이용자는 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있으나, 일부 기능 이용이 제한될 수 있습니다.',
      '웹 브라우저에서 쿠키 삭제, 시크릿 모드 사용, 모바일 기기에서 광고 식별자 재설정으로 자동 수집을 일부 제한할 수 있습니다.',
    ],
  },
  {
    title: '11. 14세 미만 아동의 개인정보 처리',
    bullets: [
      '바스타임은 14세 미만 이용자도 사용할 수 있으므로 법정대리인의 동의가 필요한 경우 별도 절차를 거쳐야 합니다.',
      '현재 법정대리인 동의 확인 방식은 서비스 출시 전 확정 후 반영할 예정입니다.',
      '법정대리인은 아동의 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.',
    ],
  },
  {
    title: '12. 처리방침 변경',
    bullets: [
      `이 처리방침 시행일은 ${legalMeta.effectiveDate}입니다.`,
      '처리방침이 변경되는 경우 앱 공지 또는 서비스 화면을 통해 사전 안내합니다.',
      '본 문서는 최초 제정본입니다.',
    ],
  },
  {
    title: '13. 권익침해 구제 방법',
    bullets: [
      '개인정보 분쟁조정위원회: 1833-6972 / www.kopico.go.kr',
      '개인정보 침해신고센터: 국번없이 118 / privacy.kisa.or.kr',
      '대검찰청: 국번없이 1301',
      '경찰청: 국번없이 182',
    ],
  },
] as const;

const privacyLabels = [
  { title: '수집 항목', value: '목욕 환경, 건강 상태, 접속기록 등' },
  { title: '이용 목적', value: '맞춤 입욕 루틴 제공, 안정성 확인' },
  { title: '제3자 제공', value: '제공하지 않음' },
  { title: '처리위탁', value: '현재 외부 수탁사 없음' },
  { title: '권리 행사', value: '열람, 정정, 삭제, 처리정지 요청 가능' },
  { title: '문의 창구', value: '김대영 / getbathtime@gmail.com' },
] as const;

const termsSections = [
  {
    title: '제1조 목적',
    body: '이 약관은 김대영(이하 "운영자")이 제공하는 바스타임 서비스의 이용 조건과 절차, 운영자와 이용자의 권리·의무를 정하는 것을 목적으로 합니다.',
  },
  {
    title: '제2조 정의',
    bullets: [
      '"서비스"는 getbathtime.com 및 관련 앱에서 제공하는 맞춤 입욕 루틴 및 제품 추천 기능을 말합니다.',
      '"이용자"는 이 약관에 따라 서비스를 이용하는 모든 사람을 말합니다.',
      '"회원"은 운영자가 정한 절차에 따라 필요한 정보를 입력하거나 저장하여 계속적으로 서비스를 이용하는 사람을 말합니다.',
    ],
  },
  {
    title: '제3조 약관의 게시와 개정',
    bullets: [
      '운영자는 이 약관의 내용을 서비스 화면에서 이용자가 확인할 수 있도록 게시합니다.',
      '약관을 개정할 때에는 적용일자와 개정사유를 명시하여 적용일 7일 전부터 공지합니다.',
      '이용자에게 불리한 내용의 변경은 최소 30일 전에 공지합니다.',
    ],
  },
  {
    title: '제4조 서비스의 제공',
    bullets: [
      '목욕 환경과 건강 상태를 고려한 맞춤 입욕 루틴 추천',
      '목욕 관련 제품 추천과 이용 이력 기반 안내',
      '운영자가 추가로 정하는 부가 기능',
    ],
  },
  {
    title: '제5조 서비스의 변경 및 중단',
    bullets: [
      '운영자는 서비스 개선, 점검, 장애 대응이 필요한 경우 서비스의 일부 또는 전부를 변경하거나 중단할 수 있습니다.',
      '중대한 변경이나 장기 중단이 예상되는 경우 사전에 공지합니다.',
    ],
  },
  {
    title: '제6조 이용자의 주의사항',
    bullets: [
      '이용자는 자신의 건강 상태에 맞는 정보를 정확하게 선택해야 합니다.',
      '서비스가 제공하는 루틴과 제품 추천은 일반적인 웰니스 정보로서 의료행위나 진단을 대신하지 않습니다.',
      '이용자는 심각한 건강 이상이 있거나 임신, 심혈관 질환 등 특별한 사정이 있는 경우 전문가와 상담 후 서비스를 이용해야 합니다.',
    ],
  },
  {
    title: '제7조 14세 미만 이용자',
    bullets: [
      '14세 미만 이용자는 법정대리인의 동의가 필요한 경우 그 절차를 거쳐야 합니다.',
      '운영자는 관련 법령에 따라 필요한 경우 법정대리인 동의 여부를 확인할 수 있습니다.',
    ],
  },
  {
    title: '제8조 운영자의 의무',
    bullets: [
      '운영자는 관련 법령과 이 약관을 준수하며 서비스를 안정적으로 제공합니다.',
      '운영자는 이용자의 개인정보를 처리방침에 따라 보호합니다.',
      '운영자는 이용자의 의견이나 불만이 정당하다고 인정되면 합리적인 기간 내에 처리합니다.',
    ],
  },
  {
    title: '제9조 이용자의 의무',
    bullets: [
      '이용자는 법령, 이 약관, 서비스 안내 사항을 준수해야 합니다.',
      '이용자는 서비스를 부정한 방법으로 이용하거나 운영을 방해해서는 안 됩니다.',
      '이용자는 제3자의 권리나 안전을 침해하는 방식으로 서비스를 이용해서는 안 됩니다.',
    ],
  },
  {
    title: '제10조 지식재산권',
    bullets: [
      '서비스에 대한 저작권과 지식재산권은 운영자에게 귀속됩니다.',
      '이용자는 운영자의 사전 동의 없이 서비스를 복제, 배포, 전송, 2차적 저작물 작성 등으로 이용할 수 없습니다.',
    ],
  },
  {
    title: '제11조 책임제한',
    bullets: [
      '운영자는 천재지변, 불가항력, 이용자 귀책사유로 인한 손해에 대해 책임을 지지 않습니다.',
      '운영자는 서비스에서 제공하는 건강·웰니스 관련 일반 정보의 활용 결과에 대해 의료상 판단 책임을 부담하지 않습니다.',
      '운영자는 무료로 제공되는 서비스 이용과 관련하여 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.',
    ],
  },
  {
    title: '제12조 분쟁해결 및 준거법',
    bullets: [
      '운영자와 이용자 사이에 분쟁이 발생하면 상호 협의하여 해결하도록 노력합니다.',
      '이 약관은 대한민국 법령을 준거법으로 합니다.',
      '분쟁에 관한 소송은 관련 법령에 따른 관할 법원을 따릅니다.',
    ],
  },
  {
    title: '부칙',
    bullets: [`이 약관은 ${legalMeta.effectiveDate}부터 시행합니다.`],
  },
] as const;

function Header() {
  return (
    <header className="siteHeader">
      <a className="brandRow" href="/">
        <div className="brandMark" aria-hidden="true">⌁</div>
        <span>BATH TIME</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="/#flow">사용 흐름</a>
        <a href="/privacy">개인정보처리방침</a>
        <a href="/terms">이용약관</a>
        <a href={appUrl}>앱 열기</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>BATH TIME</strong>
        <span>오늘 상태에 맞는 목욕 루틴 가이드</span>
      </div>
      <nav aria-label="정책 메뉴">
        <a href="/privacy">개인정보처리방침</a>
        <a href="/terms">이용약관</a>
        <a href="/support">고객지원</a>
      </nav>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="heroCopy">
            <h1>오늘 상태에 맞는 목욕 루틴을, 무리 없는 순서로.</h1>
            <p>
              바스타임은 컨디션과 목욕 환경을 함께 보고, 오늘 가장 편안하게 쉬기 좋은
              목욕, 샤워, 족욕 루틴을 안내합니다.
            </p>
            <div className="actions">
              <a className="primary" href={appUrl}>앱 시작하기</a>
              <a className="secondary" href="#flow">어떻게 쓰는지 보기</a>
            </div>
            <div className="proofGrid">
              {proof.map(([title, body]) => (
                <div className="proofCard" key={title}>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="heroVisual">
            <img src={homeShot} alt="바스타임 앱 홈 화면" />
          </div>
        </section>

        <section className="section" id="flow">
          <div className="sectionHeader">
            <span>GUIDED FLOW</span>
            <h2>추천만 하지 않고, 바스타임이 끝날 때까지 함께 갑니다.</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="stepCard" key={step.title}>
                <img src={step.image} alt={`${step.title} 화면`} />
                <div>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <span className="eyebrow">PRODUCT PICKS</span>
            <h2>집에 있는 방식으로 시작하고, 필요하면 제품 추천까지 봅니다.</h2>
            <p>
              입욕제, 샤워 아이템, 바디워시를 루틴 맥락에 맞춰 보여줍니다.
              처음 쓰는 사람도 바로 이해할 수 있게 가격대와 판매처를 같이 둡니다.
            </p>
            <a className="secondary inline" href={appUrl}>앱 둘러보기</a>
          </div>
          <img src={productShot} alt="바스타임 제품 추천 화면" />
        </section>

        <section className="cta">
          <span>START TODAY</span>
          <h2>오늘 가능한 방식으로, 무리 없이 시작하는 바스타임.</h2>
          <a className="primary" href={appUrl}>앱으로 이동</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalPage({
  eyebrow,
  title,
  description,
  labels,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  labels?: readonly { title: string; value: string }[];
  sections: readonly { title: string; body?: string; bullets?: readonly string[] }[];
}) {
  return (
    <>
      <Header />
      <main className="documentPage">
        <section className="documentHero">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>시행일: {legalMeta.effectiveDate}</small>
        </section>
        {labels ? (
          <section className="legalSummary" aria-label={`${title} 요약`}>
            {labels.map((label) => (
              <div key={label.title}>
                <strong>{label.title}</strong>
                <span>{label.value}</span>
              </div>
            ))}
          </section>
        ) : null}
        <section className="documentBody">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? <p>{section.body}</p> : null}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

function SupportPage() {
  return (
    <>
      <Header />
      <main className="documentPage">
        <section className="documentHero">
          <span>SUPPORT</span>
          <h1>고객지원</h1>
          <p>앱 이용, 계정, 개인정보, 제휴 문의를 한 곳에서 받습니다.</p>
        </section>
        <section className="supportPanel">
          <h2>문의하기</h2>
          <p>
            도움이 필요하면 <a href={`mailto:${supportEmail}`}>{supportEmail}</a> 로 연락해 주세요.
            사용 중인 기기, 문제 상황, 화면 캡처를 함께 보내주시면 더 빠르게 확인할 수 있습니다.
          </p>
          <p>개인정보 관련 문의는 개인정보 보호책임자 김대영에게 접수됩니다. 연락처는 010-2288-2897입니다.</p>
          <a className="primary inline" href={`mailto:${supportEmail}`}>메일 보내기</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/privacy') {
    return (
      <LegalPage
        eyebrow="PRIVACY"
        title="개인정보처리방침"
        description="바스타임이 어떤 정보를 왜 처리하는지, 그리고 이용자가 어떤 권리를 가지는지 안내합니다."
        labels={privacyLabels}
        sections={privacySections}
      />
    );
  }

  if (path === '/terms') {
    return (
      <LegalPage
        eyebrow="TERMS"
        title="이용약관"
        description="바스타임 서비스 이용 조건, 책임 범위, 이용자와 운영자의 기본 의무를 정리한 문서입니다."
        sections={termsSections}
      />
    );
  }

  if (path === '/support') {
    return <SupportPage />;
  }

  return <HomePage />;
}

createRoot(document.getElementById('root')!).render(<App />);
