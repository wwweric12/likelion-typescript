import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import { useNavigate } from 'react-router-dom';
import Input from '../../ds/components/Input';
import { validation } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { LoginError } from '../../type/PostLoginPayload';
import Button from '../../ds/components/ButtonComponent';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    trigger: hookTrigger,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(validation),
    mode: 'onSubmit',
  });

  const [error, setError] = useState<LoginError>();

  const navigate = useNavigate();
  const { trigger } = useSWRMutation('/api/auth/login', postFetcher, {
    onSuccess: async (data) => {
      const resJson = await data.json();
      if (data.status == 200) {
        alert(resJson.data.message);
        navigate('/users');
      } else {
        setError(resJson);
        alert(resJson.error.message);
      }
    },
  });

  const onSubmit: SubmitHandler<LoginData> = (item, event) => {
    event?.preventDefault();
    trigger(item);
  };

  return (
    <LoginFrame>
      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input<LoginData>
              title="이메일"
              type="email"
              register={register}
              required
              errorsType={errors.email}
              error={
                error?.error.code === 'not_registered_email' ? true : false
              }
              errorMessage={error?.error.message}
              onBlur={() => hookTrigger('email')}
              onFocus={() => clearErrors('email')}
            />
            <Input<LoginData>
              title="비밀번호"
              type="password"
              register={register}
              required
              errorsType={errors.password}
              error={error?.error.code === 'wrong_password' ? true : false}
              errorMessage={error?.error.message}
              onBlur={() => hookTrigger('password')}
              onFocus={() => clearErrors('password')}
            />
          </InputContainer>
          <Button type="submit">로그인</Button>
        </LoginForm>
      </LoginContainer>
    </LoginFrame>
  );
};
export default Login;

const LoginFrame = styled.div`
  width: 100%;
  height: 1080px;
  gap: 100px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const LoginContainer = styled.div`
  width: 500px;
  gap: 70px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const LoginTitle = styled.div`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 70px;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
