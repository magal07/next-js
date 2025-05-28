import { POSTS_URL } from '../../config/app-config';
import type { PostData } from '../../domain/posts.ts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
};
