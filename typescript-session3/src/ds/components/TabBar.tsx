import styled from 'styled-components';
import TabComp from './Tab';

export interface Tab {
  id: number;
  title: string;
  onClick: () => void;
  path: 'login' | 'register';
}

interface TabBarProps {
  tabs: Tab[];
  tabStatus?: 'login' | 'register' | null;
}

const TabBar = ({ tabs, tabStatus }: TabBarProps) => {
  return (
    <TabContainer>
      {tabs.map((item) => (
        <TabComp
          isActive={item.path === tabStatus ? true : false}
          key={item.id}
          onClick={item.onClick}
        >
          {item.title}
        </TabComp>
      ))}
    </TabContainer>
  );
};

export default TabBar;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
