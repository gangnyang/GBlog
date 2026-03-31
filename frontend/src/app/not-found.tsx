import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/5 bg-white/80 p-10 text-center shadow-card">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
        Not Found
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-ink">
        요청한 게시글을 찾을 수 없습니다.
      </h1>
      <p className="mt-4 leading-8 text-ink/70">
        현재 저장된 글 목록으로 돌아가서 다른 글을 확인해 주세요.
      </p>
      <Link
        href="/posts"
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
      >
        게시글 목록으로 이동
      </Link>
    </div>
  );
}

