import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../api/fetcher';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const navigate = useNavigate();
  const { trigger } = useSWRMutation('/api/auth/login', postFetcher, {
    onSuccess: async (data) => {
      const resJson = await data.json();
      alert(resJson.data);
      if (data.status == 200) {
        navigate('/users');
      }
    },
  });
  const onSubmit: SubmitHandler<LoginData> = (item) => {
    trigger(item);
  };

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <div>로그인</div>
      <Input type="email" placeholder="이메일" {...register('email')} />
      <Input type="password" placeholder="비밀번호" {...register('password')} />
      <button type="submit">클릭</button>
    </InputContainer>
  );
};
export default Login;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  padding: 10px;
`;

const Input = styled.input``;
