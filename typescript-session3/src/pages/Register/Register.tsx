import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import { useNavigate } from 'react-router-dom';
import Input from '../../ds/components/Input';
import { validation } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterError } from '../../type/PostRegisterPayload';
import { useState } from 'react';
import ButtonComponent from '../../ds/components/ButtonComponent';

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    trigger: hookTrigger,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(validation),
    mode: 'onSubmit',
  });

  const [error, setError] = useState<RegisterError>();

  const navigate = useNavigate();
  const { trigger } = useSWRMutation('/api/auth/register', postFetcher, {
    onSuccess: async (data) => {
      const resJson = await data.json();
      if (data.status == 200) {
        alert(resJson.data.message);
        navigate('/login');
      } else {
        setError(resJson);
        alert(resJson.error.message);
      }
    },
  });

  const onSubmit: SubmitHandler<RegisterData> = (item, event) => {
    event?.preventDefault();
    trigger(item);
  };

  return (
    <RegisterFrame>
      <RegisterContainer>
        <RegisterTitle>회원가입</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input<RegisterData>
              title="이름"
              type="username"
              register={register}
              required
              errorsType={errors.username}
              onBlur={() => hookTrigger('username')}
              onFocus={() => clearErrors('username')}
            />
            <Input<RegisterData>
              title="이메일"
              type="email"
              register={register}
              required
              errorsType={errors.email}
              error={error?.error.code === 'conflict_email' ? true : false}
              errorMessage={error?.error.message}
              onBlur={() => hookTrigger('email')}
              onFocus={() => clearErrors('email')}
            />
            <Input<RegisterData>
              title="비밀번호"
              type="password"
              register={register}
              required
              errorsType={errors.password}
              onBlur={() => hookTrigger('password')}
              onFocus={() => clearErrors('password')}
            />
          </InputContainer>
          <ButtonComponent type="submit">회원가입</ButtonComponent>
        </RegisterForm>
      </RegisterContainer>
    </RegisterFrame>
  );
};
export default Register;

const RegisterFrame = styled.div`
  width: 100%;
  height: 1080px;
  gap: 100px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const RegisterContainer = styled.div`
  width: 500px;
  gap: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterTitle = styled.div`
  ${({ theme }) => theme.typography.title1};
  color: ${({ theme }) => theme.color.gray1};
`;

const RegisterForm = styled.form`
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
