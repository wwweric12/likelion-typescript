import styled from 'styled-components';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: string;
  onClick?: () => void;
}

const ButtonComponent = ({ children, onClick, type }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;

const Button = styled.button`
  width: 100%;
  padding: 14px 16px;
  ${({ theme }) => theme.typography.title1}
  background: linear-gradient(93.04deg, #CCFF00 -3.88%, #40FFAF 103.41%);
  border-radius: 12px;
  &:hover {
    background: linear-gradient(93.04deg, #beed04 -3.88%, #2ff19f 103.41%);
  }
  &:active {
    background: linear-gradient(93.04deg, #b1de00 -3.88%, #1de08e 103.41%);
  }
`;
