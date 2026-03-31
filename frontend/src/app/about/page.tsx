import { AboutCharacterCard } from "@/components/about-character-card";

const introBullets = [
  "여기에 한 줄 자기소개를 넣으세요.",
  "관심 기술 스택이나 현재 집중하는 분야를 적으세요.",
  "이 블로그를 왜 운영하는지 짧게 정리하세요.",
];

const profileFacts = [
  { label: "Name", value: "홍길동" },
  { label: "Role", value: "Backend / Fullstack Developer" },
  { label: "Location", value: "Seoul, Korea" },
  { label: "Contact", value: "hello@example.com" },
];

const highlightCards = [
  {
    title: "About",
    body: "이 영역에는 본인을 설명하는 짧은 문단을 넣으면 됩니다. 예: 문제를 구조적으로 푸는 개발자, 운영을 고려해 설계하는 사람.",
  },
  {
    title: "Current Focus",
    body: "지금 공부 중인 기술이나 프로젝트 방향을 적으세요. 예: Spring Boot 구조 개선, Next.js UI 설계, 안정적인 배포 흐름.",
  },
  {
    title: "Writing",
    body: "블로그에 어떤 글을 쌓을지 적으세요. 예: 학습 메모, 설계 결정 이유, 구현 과정에서 부딪힌 문제와 해결 기록.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-none border-4 border-[#7a886c] bg-[linear-gradient(135deg,#f4f9ee_0%,#fbfdf8_52%,#eef6e5_100%)] p-5 shadow-card md:p-8">
        <div className="grid gap-8 xl:grid-cols-[420px_minmax(0,1fr)]">
          <AboutCharacterCard />

          <div className="rounded-none border-4 border-[#7a886c] bg-[#fbfdf8]/92 p-7 text-[#3f2a23] backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#7f9670]">
              About Page
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              소개 카드와 글의 톤을
              <br />
              함께 보여주는 개인 블로그
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5b453d]">
              내용은 나중에 당신이 직접 교체할 수 있도록 더미 데이터 중심으로
              구성했습니다. 지금은 구조와 분위기를 먼저 잡는 단계라고 보면 됩니다.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-none border-4 border-[#7a886c] bg-[#fcfef9] px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7f9670]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-[#2d1c17]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-none border-4 border-[#7a886c] bg-[#f6fbf1] px-6 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7f9670]">
                Replace With Your Own Copy
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[#5b453d]">
                {introBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {highlightCards.map((card) => (
          <article
            key={card.title}
            className="rounded-none border-4 border-[#7a886c] bg-[#fbfdf8]/94 p-7 shadow-card"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7f9670]">
              {card.title}
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5b453d]">{card.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}


