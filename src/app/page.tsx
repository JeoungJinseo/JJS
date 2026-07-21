import Image from "next/image";

const favoriteCards = [
  {
    title: "자는게 참 좋아요",
    description: "잠을 자면 기분이 좋아지고 모든게 나아집니다. 일찍 자는게 좋은 것 같아요.",
    image: "/images/sleeping.jpg",
    position: "center 48%",
  },
  {
    title: "먹는것도 참 좋아요",
    description: "먹고 싶은 것을 먹으면 행복해집니다. 행복해지기 위한 먹음이 참 좋습니다.",
    image: "/images/eating.jpg",
    position: "center 34%",
  },
  {
    title: "뛰는게 좋아요",
    description: "모든 것을 잊고 뛰어보아요. 건강에도 좋고 생각이 정리되는 기분이에요.",
    image: "/images/running.jpg",
    position: "center center",
  },
];

const values = [
  {
    number: "01",
    title: "마음을 비웁시다",
    description: "우리의 마음을 깨끗이\n비우면 평화가 오지않을까요?",
  },
  {
    number: "02",
    title: "평정심을 가져요",
    description: "모든 상황에서\n평정심을 가지는 습관을 들어요",
  },
  {
    number: "03",
    title: "받아들여요",
    description: "나에게 오는 상황을\n받아들이고 이후를 준비하는 마음",
  },
];

const features = [
  ["▣", "열심히 살고 싶어요"],
  ["✓", "신뢰있는 사람이 되고싶어요"],
  ["☺", "피그마를 좋아해요"],
  ["T", "성장하고 싶어요"],
  ["✦", "새로운 것을 좋아해요"],
];

export default function Home() {
  return (
    <main id="home" className="site-shell">
      <section className="intro-section" aria-labelledby="hero-title">
        <header className="site-header page-container">
          <a className="wordmark" href="#home" aria-label="홈으로 이동">
            Jinseo Jeoung
          </a>
          <nav className="main-nav" aria-label="주요 메뉴">
            <a href="#home">Home</a>
            <a href="#space">Features</a>
            <a href="#favorites">Devices</a>
            <a href="#meadow">Support</a>
          </nav>
          <a className="login-button" href="#footer">
            Login
          </a>
        </header>

        <div className="chrome-hello" aria-hidden="true">hello</div>

        <div className="hero-copy page-container">
          <h1 id="hero-title">
            안녕하세요,
            <br />저는 정진서입니다
          </h1>
          <p>
            모두 안녕하세요 저는 25학번 정진서라고 합니다.
            <br />바이브 코딩으로 어디까지 되나 궁금해서 이것저것 다 넣어보려하니
            <br />좀 산만하네요. 반갑습니다.
          </p>
          <a className="outline-button" href="#space">
            지금 더 알아보기 <span aria-hidden="true">→</span>
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
          {features.map(([icon, label]) => (
            <div className="feature-item" key={label}>
              <span aria-hidden="true">{icon}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="space" className="space-section">
        <div className="space-inner page-container">
          <div className="space-heading">
            <h2>
              우주를 바라보는걸
              <br />참 좋아해요
            </h2>
            <p>
              가끔 스트레스를 받을 때 유튜브에서 우주 영상을 많이
              <br />시청하는데요, 우연히 우주 배경 블랙그라운드에 떠서
              <br />우주를 컨셉으로 페이지를 제작해보았어요.
            </p>
          </div>

          <article className="cosmic-banner">
            <div className="banner-copy">
              <h3>마음이 비워집니다</h3>
              <p>
                어두워진 하늘 공간을 바라본다면
                <br />제가 가지고 있는 스트레스의 압박감이 날아가는 기분이에요.
                <br />저를 수용해 주는 마음으로 살아갑시다.
              </p>
              <a href="#favorites">다음 파트</a>
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
            <h2>좋아하는게 참 많아요</h2>
            <p>
              여러가지 참 좋아하는게 많은데요,
              <br />제가 제일 좋아하는게 뭘까 고민해보았는데 이 세가지인 것 같네요.
            </p>
            <a href="#favorite-cards">MY Favorites</a>
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
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="meadow" className="meadow-section">
        <div className="meadow-overlay" aria-hidden="true" />
        <div className="meadow-inner page-container">
          <div className="meadow-heading">
            <h2>
              저는 초원도
              <br />참 좋아합니다
            </h2>
            <p>
              초원을 보면 마음이 비워지고 참으로 마음이 깨끗해집니다.
              <br />그래서 초원같은 사람이 되고 싶습니다. 어떻게 초원같은 사람이 될까요?
            </p>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>

          <div className="aspiration">
            <h2>똑똑한 사람이 되고싶습니다</h2>
            <p>
              똑똑한 사람이 된다면 기회가 참 많아질 것 같아요.
              <br />지금 보이는 초원같이 한없이 푸르른 마음을 가지면 될 것 같아요.
            </p>
          </div>
        </div>
      </section>

      <footer id="footer" className="site-footer">
        <p>
          지피티로 아무말이나 하다보니 많이 이상한 사람으로
          <br />보일 수 있네요..
          <br />바이브코딩 재미있었습니다
        </p>
      </footer>
    </main>
  );
}
