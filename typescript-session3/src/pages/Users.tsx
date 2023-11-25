import useSWR from 'swr';
import { fetcher } from '../api/fetcher';
import styled from 'styled-components';
import { GetUsersPayload } from '../type/GetUsersPayload';
import Card from '../ds/components/Card';
import { ReactComponent as BigLion } from '../ds/icons/BigLion.svg';

const Users = () => {
  const { data, error } = useSWR<GetUsersPayload>('/api/users', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <UsersFrame>
      <UsersContainer>
        <BigLion />
        <CardContainer>
          {data.data.users.map((item, index) => (
            <Card key={index} subTitle={item.email} title={item.username} />
          ))}
        </CardContainer>
      </UsersContainer>
    </UsersFrame>
  );
};

export default Users;

const UsersFrame = styled.div`
  width: 100%;
  padding: 60px 0 10px 0;
  display: flex;
  justify-content: center;
`;

const UsersContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 26px;
`;
