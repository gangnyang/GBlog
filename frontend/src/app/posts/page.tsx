import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/api";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <section className="rounded-none border-4 border-[#7a886c] bg-[#fcfef9]/98 p-8 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          Posts
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">게시글 목록</h1>
        <p className="mt-4 max-w-2xl leading-8 text-ink/72">
          개발하면서 정리한 생각과 기록을 모아두는 공간입니다. 현재는 최소한의
          조회 구조만 두었고, 이후 작성 방식과 운영 기능을 점진적으로 확장할 수
          있게 분리해 두었습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}



