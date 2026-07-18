import Image from "next/image";

const lifestyleCards = [
  {
    title: "Sleeping",
    description: (
      <>
        잠을 좋아합니다.
        <br />잠 없이는 살 수 없다.
      </>
    ),
    image: "/images/sleeping.jpg",
    imagePosition: "center 62%",
  },
  {
    title: "Eating",
    description: (
      <>
        먹는걸 좋아합니다.
        <br />잘 먹어야 한다.
      </>
    ),
    image: "/images/eating.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Running",
    description: (
      <>
        뛰는걸 좋아합니다.
        <br />잘 뛰자.
      </>
    ),
    image: "/images/running.jpg",
    imagePosition: "center center",
  },
];

const valueCards = [
  {
    number: "01",
    title: "마음을 비웁시다",
    description: (
      <>
        우리의 마음을 깨끗이
        <br />비우면 평화가 오지않을까요?
      </>
    ),
  },
  {
    number: "02",
    title: "잠을 잡시다",
    description: (
      <>
        잠을 자면은 모든게
        <br />편해지고 평화로워져요
      </>
    ),
  },
  {
    number: "03",
    title: "뜁시다",
    description: (
      <>
        자연을 느낍시다
        <br />자연을 느끼면 좋아요
      </>
    ),
  },
];

export default function Home() {
  return (
    <main id="home" className="site-shell">
      <section className="hero-section" aria-labelledby="intro-title">
        <nav className="main-nav" aria-label="주요 메뉴">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#values">Devices</a>
          <a href="#support">Support</a>
        </nav>

        <div className="hero-content content-container">
          <div className="intro-copy">
            <h1 id="intro-title">안녕하세요, 여러분</h1>
            <p>
              만나서 반갑습니다. 저는 정진서라고합니다.
              <br />저를 소개하기 위해 웹사이트를 만들어보았습니다. 많이 봐주세요.
            </p>
          </div>

          <div id="features" className="lifestyle-grid">
            {lifestyleCards.map((card) => (
              <article className="lifestyle-card" key={card.title}>
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  style={{ objectPosition: card.imagePosition }}
                />
                <div className="card-shade" />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="mountain-section">
        <div className="mountain-shade" />

        <div className="values-content content-container">
          <div className="section-heading">
            <h2>저는 초원을 참 좋아합니다</h2>
            <p>
              초원을 보면 마음이 비워지고 참으로 마음이 깨끗해집니다.
              <br />그래서 초원같은 사람이 되고 싶습니다. 어떻게 초원같은 사람이 될까요?
            </p>
          </div>

          <div className="value-grid">
            {valueCards.map((card) => (
              <article className="value-card" key={card.number}>
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="support" className="aspiration content-container">
          <h2>똑똑한 사람이 되고싶습니다</h2>
          <p>
            똑똑한 사람이 된다면 기회가 참 많아질 것 같아요.
            <br />지금 보이는 초원같이 한없이 푸르른 마음을 가지면 될 것 같아요.
          </p>
        </div>

        <footer>감사합니다</footer>
      </section>
    </main>
  );
}
