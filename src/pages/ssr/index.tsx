import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type User = {
  id: number;
  name: string;
  email: string;
};

type UsersPageProps = {
  users: User[];
};

export const getServerSideProps: GetServerSideProps<
  UsersPageProps
> = async () => {
  try {
    // Fetch data from an external API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log('err', err);
    // Handle errors gracefully
    return {
      props: {
        users: [],
      },
    };
  }
};

const UsersPage = ({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className='container'>
      <h1 className='title'>User List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} className='user'>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UsersPage;
