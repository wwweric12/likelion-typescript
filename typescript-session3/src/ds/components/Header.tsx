import styled from 'styled-components';
import { ReactComponent as Lion } from '../icons/lion.svg';
import TabBar, { Tabs } from './TabBar';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tabs[];
  tabStatus: TabStatus;
}

export interface TabStatus {
  login: boolean;
  register: boolean;
}

const Header = ({ onClickLogo, tabs, tabStatus }: HeaderProps) => {
  return (
    <HeaderContainer>
      <InnerContaiener>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} tabStatus={tabStatus} />
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
  border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
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
