import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  async function loginUser(url: string, { arg }: { arg: LoginData }) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((result) => {
          alert(result.data);
        });
        navigate('/users');
      } else {
        res.json().then((result) => {
          alert(result.error);
        });
      }
    });
  }

  const { register, handleSubmit } = useForm<LoginData>();
  const { trigger } = useSWRMutation(
    `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
    loginUser,
  );
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    trigger(data);
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
