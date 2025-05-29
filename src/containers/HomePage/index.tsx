import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import type { PostData } from '../../domain/posts.ts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => {
            const coverUrl =
              post.cover?.formats?.small?.url ??
              post.cover?.url ??
              '/images/default-cover.jpg';

            return (
              <PostCard
                key={post.id}
                cover={coverUrl}
                slug={post.slug}
                title={post.title}
              />
            );
          })}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
