import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterData>();
  const navigate = useNavigate();
  const { trigger } = useSWRMutation('/api/auth/register', postFetcher, {
    onSuccess: async (data) => {
      const resJson = await data.json();
      alert(resJson.data);
      if (data.status == 200) {
        navigate('/login');
      }
    },
  });
  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    trigger(data);
  };

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <div>회원가입</div>
      <Input type="email" placeholder="이메일" {...register('email')} />
      <Input type="password" placeholder="비밀번호" {...register('password')} />
      <Input type="username" placeholder="닉네임" {...register('username')} />
      <button type="submit">클릭</button>
    </InputContainer>
  );
};

export default Register;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  padding: 10px;
`;
const Input = styled.input``;
