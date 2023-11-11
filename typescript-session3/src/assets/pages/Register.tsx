import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

const Register = () => {
  interface RegisterData {
    email: string;
    password: string;
    username: string;
  }
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    console.log(data);
  };

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <div>회원가입</div>
      <Input type="email" placeholder="이메일" {...register('email')} />
      <Input type="password" placeholder="비밀번호" {...register('password')} />
      <Input type="username" placeholder="비밀번호" {...register('username')} />
      <button type="submit">클릭</button>
    </InputContainer>
  );
};

export default Register;

const InputContainer = styled.form``;
const Input = styled.input``;
