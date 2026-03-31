export default function AboutPage() {
  return (
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          About Me
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">기술과 구조를 함께 보는 개발자</h1>
        <p className="mt-6 leading-8 text-ink/75">
          기능 하나를 만들더라도 유지보수성과 실행 흐름을 먼저 생각합니다. 이
          블로그는 화려한 소개 페이지보다, 어떤 기준으로 코드를 작성하고 확장해
          나가는지 보여주기 위한 기본 공간입니다.
        </p>
      </section>

      <section className="rounded-[2rem] bg-[#f3e7d3] p-8">
        <div className="space-y-6 leading-8 text-ink/78">
          <p>
            지금 단계에서는 복잡한 기능을 넣지 않고, 소개 페이지와 게시글 조회
            흐름만 구현했습니다. 프론트엔드와 백엔드를 분리해 두었기 때문에
            나중에 배포 구조나 운영 설정을 붙이더라도 영향 범위를 파악하기 쉽습니다.
          </p>
          <p>
            앞으로 이 공간에는 학습 메모, 설계 결정 이유, 실제 구현 과정에서
            고민했던 부분들을 차근차근 쌓아갈 예정입니다.
          </p>
        </div>
      </section>
    </div>
  );
}

