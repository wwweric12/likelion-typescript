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
  background: linear-gradient(93deg, #CF0 -3.88%, #40FFAF 103.41%);
  border-radius: 12px;
`;
