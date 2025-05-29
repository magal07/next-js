import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts.ts/post';
import type { GetStaticProps } from 'next';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=10',
  );
  return {
    props: { posts },
    // revalidate: 5, caso quisse que a página atualizasse a cada 5 segundos
  };
};
