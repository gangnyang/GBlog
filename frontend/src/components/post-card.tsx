import Link from "next/link";

import { formatDate } from "@/lib/format";
import { PostListItem } from "@/lib/types";

type PostCardProps = {
  post: PostListItem;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-card transition hover:-translate-y-1">
      <p className="text-sm text-ink/55">
        {formatDate(post.createdAt)} · {post.authorName}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{post.title}</h3>
      <p className="mt-3 leading-7 text-ink/70">{post.summary}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-accent"
      >
        글 읽기
      </Link>
    </article>
  );
}

