import { GetStaticProps, InferGetStaticPropsType } from 'next';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsPageProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  // Fetch data from a mock API
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

const PostsPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='container'>
      <h1 className='title'>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
