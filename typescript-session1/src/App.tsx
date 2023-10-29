import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import Todos from './Todos';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo('');
    setTodos([...todos, todo]);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>todo list</div>
      <Todos props={todos} />
      <TodoInput onChange={handleInput} value={todo} />
      <button type="submit">등록하기</button>
    </FormContainer>
  );
}

export default App;

const FormContainer = styled.form`
  width: 400px;
`;

const TodoInput = styled.input`
  width: 100%;
`;
