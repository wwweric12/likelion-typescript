import useSWR from 'swr';
import { fetcher } from '../api/fetcher';
import styled from 'styled-components';

interface UsersData {
  data: Data;
}

interface Data {
  users: RegisterData[];
}

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

const Users = () => {
  const { data, error } = useSWR<UsersData>('/api/users', fetcher); 
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      {data.data.users.map((item, index) => (
        <UsersContainer key={index}>
          <span>{item.email}</span>
          <span>{item.password}</span>
          <span>{item.username}</span>
        </UsersContainer>
      ))}
    </>
  );
};

export default Users;

const UsersContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
`;
