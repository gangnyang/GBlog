import { PostDetail, PostListItem } from "@/lib/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getPosts(): Promise<PostListItem[]> {
  return request<PostListItem[]>("/api/posts");
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  const response = await fetch(`${API_BASE_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<PostDetail>;
}
