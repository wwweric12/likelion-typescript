import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  id: string;
  password: string;
}

function MyForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input {...register('id')} type="text" placeholder="ID" />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        <input className="btn" type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default MyForm;
