import styled from 'styled-components';
import { PropsWithChildren } from 'react';

interface TabProps {
  isActive?: boolean;
  onClick?: () => void;
}

const Tab = ({
  isActive = false,
  children,
  onClick,
}: PropsWithChildren<TabProps>) => {
  return (
    <TabButton $isActive={isActive} onClick={onClick}>
      {children}
    </TabButton>
  );
};

export default Tab;

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: ${({ $isActive }) => ($isActive ? '22px 0 18px 0' : '22px 0')};
  border-radius: ${({ $isActive, theme }) =>
    $isActive && `4px solid ${theme.color.green}`};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.green : theme.color.gray1};
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.typography.title1};
  &:hover {
    padding: 22px 0 18px 0;
    color: ${({ theme }) => theme.color.green};
    border-bottom: 4px solid ${({ theme }) => theme.color.green};
  }
`;
