import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWRMutation from 'swr/mutation';

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
  const navigate = useNavigate();
  async function loginUser(url: string, { arg }: { arg: RegisterData }) {
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
        navigate('/login');
      } else {
        res.json().then((result) => {
          alert(result.error);
        });
      }
    });
  }
  const { register, handleSubmit } = useForm<RegisterData>();
  const { trigger } = useSWRMutation(
    `${process.env.REACT_APP_BASE_URL}/api/auth/register`,
    loginUser,
  );
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
