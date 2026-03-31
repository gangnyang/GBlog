import Link from "next/link";

import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/api";

export default async function HomePage() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-none border-4 border-[#7a886c] bg-[#fcfef9]/98 px-8 py-12 shadow-card md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Developer Blog
            </p>
            <h1
              className="mt-4 text-5xl leading-none text-ink md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              코드와 생각이
              <br />
              함께 남는 개인 블로그
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              과장된 포트폴리오보다, 내가 어떤 문제를 풀고 어떤 구조를 선택하는지
              담아내는 공간입니다. 소개와 글을 분리해서 보여주되, 흐름은 단순하게
              유지했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-none border-4 border-[#7a886c] bg-[#f2f8eb] px-6 py-3 text-sm font-semibold text-ink"
              >
                자기소개 보기
              </Link>
              <Link
                href="/posts"
                className="rounded-none border-4 border-[#7a886c] bg-[#f8fbf3] px-6 py-3 text-sm font-semibold text-ink"
              >
                게시글 보러가기
              </Link>
            </div>
          </div>
          <div className="rounded-none border-4 border-[#7a886c] bg-[#eef6e7] px-6 py-8 text-ink">
            <p className="text-sm uppercase tracking-[0.24em] text-ink/55">
              Current Focus
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7">
              <li>이해하기 쉬운 구조로 시작하기</li>
              <li>프론트와 백엔드를 명확히 분리하기</li>
              <li>작은 기능부터 운영 가능한 방향으로 쌓기</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Latest Posts
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink">최근 글</h2>
          </div>
          <Link href="/posts" className="text-sm font-semibold text-accent">
            전체 글 보기
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}



