import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldError,
} from 'react-hook-form';
import styled from 'styled-components';

interface InputProps<T extends FieldValues> {
  title: string;
  type: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  errorsType?: FieldError;
  error?: boolean;
  errorMessage?: string;
  onBlur: () => void;
}

const Input = <T extends FieldValues>({
  title,
  type,
  register,
  required,
  errorsType,
  error,
  errorMessage,
  onBlur,
}: InputProps<T>) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputContent
        $isError={errorsType || error ? true : false}
        type={type}
        {...register(type, { required })}
        onBlur={onBlur}
      />
      {errorsType && <ErrorMessage>{errorsType?.message}</ErrorMessage>}
      {error && !errorsType && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputTitle = styled.div`
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1};
`;

const InputContent = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? theme.color.red : theme.color.gray3)};
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray2};
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.color.gray1};
  }
`;

const ErrorMessage = styled.div`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.color.red}
`;
