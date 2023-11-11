import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
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

const InputContainer = styled.form``;

const Input = styled.input``;
