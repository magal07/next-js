import { POSTS_URL } from '../../config/app-config';
import type { PostData } from '../../domain/posts.ts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
