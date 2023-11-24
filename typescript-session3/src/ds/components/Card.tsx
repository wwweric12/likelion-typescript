import styled from 'styled-components';

interface CardProps {
  subTitle: string;
  title: string;
}

const Card = ({ subTitle, title }: CardProps) => {
  return (
    <CardContainer>
      <CardSubTitle>{subTitle}</CardSubTitle>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: c;
  padding: 14px 16px;
  gap: 12px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px #e5e8f0;
`;

const CardSubTitle = styled.div`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray2};
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;
