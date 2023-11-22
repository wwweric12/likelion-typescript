import styled from 'styled-components';
import Tab from './Tab';
import { TabStatus } from './Header';

export interface Tabs {
  id: number;
  title: string;
  onClick: () => void;
  path: 'login' | 'register';
}

interface TabBarProps {
  tabs: Tabs[];
  tabStatus: TabStatus;
}

const TabBar = ({ tabs, tabStatus }: TabBarProps) => {
  return (
    <TabContainer>
      {tabs.map((item) => (
        <Tab
          isActive={tabStatus[item.path]}
          key={item.id}
          onClick={item.onClick}
        >
          {item.title}
        </Tab>
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
