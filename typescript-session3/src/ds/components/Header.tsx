import styled from 'styled-components';
import { ReactComponent as Lion } from '../icons/lion.svg';
import TabBar, { Tab } from './TabBar';
import TabComp from './Tab';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tab[];
  tabStatus?: 'login' | 'register' | null;
  username: string | null;
  handleLogout: () => void;
}

const Header = ({
  onClickLogo,
  tabs,
  tabStatus,
  username,
  handleLogout,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <InnerContaiener>
        <Logo onClick={onClickLogo} />
        {username ? (
          <>
            <TabComp>{username}님 환영합니다!</TabComp>
            <TabComp onClick={() => handleLogout()}>로그아웃</TabComp>
          </>
        ) : (
          <TabBar tabs={tabs} tabStatus={tabStatus} />
        )}
      </InnerContaiener>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  position: sticky;
  top: 0;
  background-color: white;
`;

const InnerContaiener = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(Lion)`
  cursor: pointer;
`;
