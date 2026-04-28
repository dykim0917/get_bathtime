import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import homeShot from './assets/home-with-history.png';
import careShot from './assets/care-default.png';
import recipeShot from './assets/recipe-care.png';
import timerShot from './assets/timer-running.png';
import productShot from './assets/product-default.png';

const appUrl = 'https://app.getbathtime.com';
const supportEmail = 'support@getbathtime.com';

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
    title: '수집하는 개인정보',
    body: [
      '바스타임은 서비스 제공에 필요한 최소한의 정보를 수집합니다. 계정 생성, 문의 응대, 서비스 개선 과정에서 이메일 주소, 닉네임, 기기 및 접속 정보, 서비스 이용 기록이 처리될 수 있습니다.',
      '목욕 루틴 추천을 위해 사용자가 직접 입력한 컨디션, 선호도, 목욕 가능 환경, 루틴 기록이 저장될 수 있습니다. 민감한 건강정보 입력은 필수가 아니며, 사용자가 입력한 범위에서만 활용됩니다.',
    ],
  },
  {
    title: '이용 목적',
    body: [
      '수집한 정보는 계정 관리, 맞춤형 목욕 루틴 제공, 타이머 및 기록 기능 제공, 문의 처리, 서비스 안정성 확보, 부정 이용 방지, 기능 개선을 위해 사용합니다.',
      '마케팅 알림이나 이벤트 안내가 필요한 경우에는 별도의 동의를 받은 뒤 발송합니다.',
    ],
  },
  {
    title: '보관 및 파기',
    body: [
      '개인정보는 서비스 이용 기간 동안 보관하며, 회원 탈퇴 또는 처리 목적 달성 시 지체 없이 파기합니다. 관계 법령상 보관 의무가 있는 정보는 해당 기간 동안 별도로 보관합니다.',
      '사용자는 앱 또는 고객지원 채널을 통해 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.',
    ],
  },
  {
    title: '제3자 제공 및 처리위탁',
    body: [
      '바스타임은 사용자의 동의 없이 개인정보를 외부에 판매하거나 제공하지 않습니다. 서비스 운영에 필요한 클라우드, 인증, 분석, 고객지원 도구를 사용할 수 있으며 이 경우 필요한 범위에서만 처리합니다.',
      '처리위탁 현황이 확정되면 본 페이지에 최신 정보를 공개합니다.',
    ],
  },
  {
    title: '문의',
    body: [`개인정보 관련 문의는 ${supportEmail} 로 보내주세요. 확인 후 합리적인 기간 내 답변하겠습니다.`],
  },
] as const;

const termsSections = [
  {
    title: '서비스의 성격',
    body: [
      '바스타임은 사용자의 입력을 바탕으로 목욕, 샤워, 족욕 루틴과 관련 콘텐츠를 제공하는 웰니스 서비스입니다.',
      '서비스에서 제공하는 안내는 의료 진단, 치료, 처방을 대체하지 않습니다. 질환, 임신, 고령, 심혈관계 질환, 피부 질환 등 건강상 우려가 있는 경우 전문가와 상담한 뒤 이용해 주세요.',
    ],
  },
  {
    title: '이용자의 책임',
    body: [
      '이용자는 본인의 상태와 환경에 맞게 서비스를 이용해야 하며, 어지러움, 두근거림, 호흡곤란, 피부 이상 등 불편함이 느껴지면 즉시 사용을 중단해야 합니다.',
      '타인의 계정을 무단으로 사용하거나 서비스 운영을 방해하는 행위, 허위 정보를 입력하여 부정하게 이용하는 행위는 금지됩니다.',
    ],
  },
  {
    title: '콘텐츠와 제품 정보',
    body: [
      '루틴, 제품 추천, 가격 및 판매처 정보는 참고용으로 제공됩니다. 실제 제품 정보와 가격은 판매처 정책에 따라 달라질 수 있습니다.',
      '서비스 내 콘텐츠의 저작권과 지식재산권은 바스타임 또는 정당한 권리자에게 있습니다.',
    ],
  },
  {
    title: '서비스 변경 및 중단',
    body: [
      '바스타임은 안정적인 운영을 위해 서비스의 일부 기능을 변경, 중단, 개선할 수 있습니다. 중요한 변경이 있는 경우 서비스 내 공지 또는 이 페이지를 통해 안내합니다.',
    ],
  },
  {
    title: '문의',
    body: [`서비스 이용약관과 관련한 문의는 ${supportEmail} 로 보내주세요.`],
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
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly { title: string; body: readonly string[] }[];
}) {
  return (
    <>
      <Header />
      <main className="documentPage">
        <section className="documentHero">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>시행일: 2026년 4월 28일</small>
        </section>
        <section className="documentBody">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
        description="바스타임이 어떤 정보를 어떤 목적으로 처리하는지 안내합니다."
        sections={privacySections}
      />
    );
  }

  if (path === '/terms') {
    return (
      <LegalPage
        eyebrow="TERMS"
        title="이용약관"
        description="바스타임 서비스를 이용할 때 필요한 기본 약속을 안내합니다."
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
