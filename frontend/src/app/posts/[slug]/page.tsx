import { notFound } from "next/navigation";

import { formatDate } from "@/lib/format";
import { getPost } from "@/lib/api";

type PostDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split(/\n{2,}/);

  return (
    <article className="mx-auto max-w-3xl rounded-[2.5rem] border border-black/5 bg-white/85 px-8 py-12 shadow-card md:px-12">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
        {formatDate(post.createdAt)}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-ink/70">{post.summary}</p>
      <div className="mt-10 border-t border-black/8 pt-8 text-lg leading-9 text-ink/82">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

