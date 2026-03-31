export type PostListItem = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  authorName: string;
  createdAt: string;
};

export type PostDetail = PostListItem & {
  content: string;
  updatedAt: string;
};

