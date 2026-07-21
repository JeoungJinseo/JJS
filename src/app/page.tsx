import Image from "next/image";
import type { CSSProperties } from "react";
import MotionEffects from "./MotionEffects";

const favoriteCards = [
  {
    title: "푹 쉬는 시간을 좋아합니다",
    description: "충분히 쉬고 나면 기분도 생각도 한결 가벼워집니다. 잘 쉬는 것 역시 하루를 잘 보내는 방법이라고 생각합니다.",
    image: "/images/sleeping.jpg",
    position: "center 48%",
  },
  {
    title: "맛있는 음식을 좋아합니다",
    description: "먹고 싶었던 음식을 천천히 즐기는 순간이 좋습니다. 작은 행복이 하루를 더 풍성하게 만들어 줍니다.",
    image: "/images/eating.jpg",
    position: "center 34%",
  },
  {
    title: "새로운 것을 배우는 걸 좋아합니다",
    description: "무언가를 만들고 배우는 동안 복잡한 생각이 정리됩니다. 어제보다 조금 더 성장하는 과정이 즐겁습니다.",
    image: "/images/running.jpg",
    position: "center center",
  },
];

const discoveryCards = [
  {
    category: "밤하늘",
    title: "별자리를 천천히 찾는 밤",
    description:
      "별 하나를 오래 바라보다 보면 시간도 조금 느리게 흐르는 것 같습니다. 이름 모를 별을 찾아보는 조용한 밤을 좋아합니다.",
    image: "/images/starfield-v2.png",
    position: "center center",
  },
  {
    category: "산책",
    title: "낯선 풍경 속을 천천히 걷기",
    description:
      "정해진 목적지 없이 걷다 만나는 빛과 바람을 기억합니다. 익숙하지 않은 풍경은 새로운 생각을 열어 줍니다.",
    image: "/images/mountain-meadow.jpg",
    position: "center 42%",
  },
  {
    category: "자연",
    title: "동물과 자연을 가까이 관찰하기",
    description:
      "말없이 곁을 지키는 생명들을 보고 있으면 마음이 부드러워집니다. 자연의 작은 표정까지 천천히 바라보고 싶습니다.",
    image: "/images/goat-meadow.jpg",
    position: "center 48%",
  },
];

const quietThoughts = [
  ["천천히", "급하지 않아도 괜찮다는 마음"],
  ["호기심", "처음 보는 것을 오래 바라보는 태도"],
  ["기록", "금방 지나갈 장면을 기억하는 방법"],
  ["여유", "잠시 멈춰 주변을 살피는 시간"],
  ["다정함", "사람과 자연을 부드럽게 대하는 마음"],
];

const values = [
  {
    number: "01",
    title: "마음을 비우기",
    description: "복잡한 생각을 내려놓고\n지금 이 순간에 집중합니다.",
  },
  {
    number: "02",
    title: "평정심을 지키기",
    description: "어떤 상황에서도 차분하게\n그다음을 생각합니다.",
  },
  {
    number: "03",
    title: "있는 그대로 받아들이기",
    description: "주어진 상황을 받아들이고\n차분하게 다음을 준비합니다.",
  },
];

const features = [
  ["▣", "꾸준히 살아가고 싶어요"],
  ["✓", "신뢰받는 사람이 되고 싶어요"],
  ["☺", "피그마를 좋아해요"],
  ["가", "계속 성장하고 싶어요"],
  ["✦", "새로운 것을 좋아해요"],
];

export default function Home() {
  return (
    <main id="home" className="site-shell">
      <MotionEffects />
      <section className="intro-section" aria-labelledby="hero-title">
        <header className="site-header page-container">
          <a className="wordmark" href="#home" aria-label="홈으로 이동">
            정진서
          </a>
          <nav className="main-nav" aria-label="주요 메뉴">
            <a href="#home">홈</a>
            <a href="#space">우주</a>
            <a href="#favorites">취향</a>
            <a href="#meadow">초원</a>
          </nav>
          <a className="login-button" href="#footer">
            마무리
          </a>
        </header>

        <div className="chrome-hello" aria-hidden="true">
          <div className="chrome-hello-reveal">
            <Image
              src="/images/hello-chrome.png"
              alt=""
              fill
              priority
              sizes="(max-width: 600px) 96vw, 1380px"
            />
          </div>
        </div>

        <div className="hero-copy page-container">
          <h1 id="hero-title" data-reveal="pop">
            안녕하세요,
            <br />정진서입니다
          </h1>
          <p data-reveal="up" data-delay="1">
            안녕하세요. 2025학번 정진서입니다.
            <br />바이브 코딩으로 어디까지 만들 수 있을지 궁금해,
            <br />좋아하는 것과 생각을 한 페이지에 담았습니다.
          </p>
          <a className="outline-button" href="#space" data-reveal="up" data-delay="2">
            제 이야기 더 보기 <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="planet-wrap" aria-hidden="true">
          <Image
            src="/images/space-hero.png"
            alt=""
            width={1821}
            height={864}
            priority
            sizes="100vw"
          />
        </div>

        <div className="feature-strip page-container" aria-label="핵심 특징">
          {features.map(([icon, label], index) => (
            <div className="feature-item" key={label} data-reveal="up" data-delay={String(index)}>
              <span aria-hidden="true">{icon}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="space" className="space-section">
        <div className="space-inner page-container">
          <div className="space-heading">
            <h2 data-reveal="pop">
              우주를 바라보는
              <br />시간을 좋아합니다
            </h2>
            <p data-reveal="right" data-delay="1">
              스트레스가 쌓일 때면 우주 영상을 틀어두곤 합니다.
              <br />끝없이 펼쳐진 어둠과 별을 바라보고 있으면
              <br />복잡했던 마음이 천천히 가라앉습니다.
            </p>
          </div>

          <article className="cosmic-banner">
            <div className="banner-copy">
              <h3 data-reveal="pop">잠시 바라보면 마음이 가벼워집니다</h3>
              <p data-reveal="up" data-delay="1">
                어두운 하늘과 넓은 풍경을 바라보면
                <br />복잡했던 생각이 조금씩 멀어지는 기분이 듭니다.
                <br />잠시 숨을 고르고 다시 나아갈 힘을 얻습니다.
              </p>
              <a href="#favorites" data-reveal="up" data-delay="2">좋아하는 것 보기</a>
            </div>
            <div className="banner-screen" aria-label="산 풍경 영상 미리보기">
              <Image
                src="/images/mountain-meadow.jpg"
                alt="어두운 산 풍경"
                fill
                sizes="(max-width: 760px) 88vw, 46vw"
              />
              <span aria-hidden="true">Ⅱ</span>
            </div>
          </article>

          <div id="favorites" className="favorites-heading">
            <h2 data-reveal="pop">좋아하는 것들을 소개합니다</h2>
            <p data-reveal="up" data-delay="1">
              일상에서 저를 편안하게 만들고,
              <br />다시 움직일 힘을 주는 세 가지 순간을 골라보았습니다.
            </p>
            <a href="#favorite-cards" data-reveal="up" data-delay="2">좋아하는 순간 보기</a>
          </div>

          <div id="favorite-cards" className="favorites-grid">
            {favoriteCards.map((card) => (
              <article className="favorite-card" key={card.title}>
                <div className="favorite-image">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    style={{ objectPosition: card.position }}
                  />
                </div>
                <div className="favorite-copy">
                  <h3 data-reveal="pop">{card.title}</h3>
                  <p data-reveal="up" data-delay="1">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="discoveries" className="discoveries-section">
        <div className="discoveries-glow" aria-hidden="true" />
        <div className="discoveries-inner page-container">
          <div className="discoveries-heading">
            <p className="section-kicker" data-reveal="up">마음의 수집함</p>
            <h2 data-reveal="pop">마음을 움직이는 장면들</h2>
            <p data-reveal="up" data-delay="1">
              거창하지 않아도 오래 기억에 남는 순간이 있습니다.
              <br />저를 편안하게 만드는 감각과 생각을 한곳에 모았습니다.
            </p>
          </div>

          <div className="thought-stage" data-reveal="pop">
            <div className="chrome-orbit" aria-hidden="true">
              <span className="chrome-core" />
              <span className="chrome-ring chrome-ring-one" />
              <span className="chrome-ring chrome-ring-two" />
              <span className="chrome-ring chrome-ring-three" />
            </div>
            <div className="thought-rail" aria-label="좋아하는 마음의 단어">
              {quietThoughts.map(([title, description], index) => (
                <article
                  className="thought-card"
                  data-tilt
                  key={title}
                  style={{ "--thought-index": index } as CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="scene-heading">
            <p className="section-kicker" data-reveal="up">더 좋아할 것 같은 순간</p>
            <h2 data-reveal="pop">새로운 취향을 발견하는 중입니다</h2>
            <p data-reveal="up" data-delay="1">
              좋아하는 마음은 계속 넓어진다고 믿습니다.
              <br />앞으로 더 자주 만나고 싶은 세 가지 장면입니다.
            </p>
          </div>

          <div className="discovery-grid">
            {discoveryCards.map((card, index) => (
              <div
                className="discovery-card-wrap"
                data-reveal="up"
                data-delay={String(index)}
                key={card.title}
              >
                <article className="discovery-card" data-tilt>
                  <div className="discovery-image">
                    <Image
                      src={card.image}
                      alt={`${card.title} 풍경`}
                      fill
                      sizes="(max-width: 760px) 92vw, 33vw"
                      style={{ objectPosition: card.position }}
                    />
                    <span>{card.category}</span>
                  </div>
                  <div className="discovery-copy">
                    <p>좋아할 마음 {String(index + 1).padStart(2, "0")}</p>
                    <h3>{card.title}</h3>
                    <div>{card.description}</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="meadow" className="meadow-section">
        <div className="meadow-overlay" aria-hidden="true" />
        <div className="meadow-inner page-container">
          <div className="meadow-heading">
            <h2 data-reveal="pop">
              넓은 초원도
              <br />참 좋아합니다
            </h2>
            <p data-reveal="up" data-delay="1">
              초원을 바라보면 복잡했던 마음이 맑아지는 기분이 듭니다.
              <br />여유롭고 단단한 초원처럼, 주변에 편안함을 주는 사람이 되고 싶습니다.
            </p>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span data-reveal="pop">{value.number}</span>
                <h3 data-reveal="up" data-delay="1">{value.title}</h3>
                <p data-reveal="up" data-delay="2">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="aspiration">
            <h2 data-reveal="pop">꾸준히 배우는 사람이 되고 싶습니다</h2>
            <p data-reveal="up" data-delay="1">
              배움이 쌓일수록 더 많은 기회를 만들 수 있다고 믿습니다.
              <br />초원처럼 넓은 마음으로 꾸준히 성장하겠습니다.
            </p>
          </div>
        </div>
      </section>

      <footer id="footer" className="site-footer">
        <p data-reveal="pop">
          좋아하는 것들을 하나씩 담아 완성한 페이지입니다.
          <br />바이브 코딩으로 직접 만들며 많이 배우고 즐거웠습니다.
          <br />끝까지 봐주셔서 감사합니다.
        </p>
      </footer>
    </main>
  );
}
