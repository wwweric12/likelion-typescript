import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/users">User List</Link>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Login</Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;
