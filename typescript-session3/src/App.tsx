import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Users from './pages/Users';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import { GlobalFotnts } from './styles/GlobalFonts';
import Header from './ds/components/Header';
import { useEffect, useState } from 'react';
import { Tabs } from './ds/components/TabBar';

function App() {
  const navigate = useNavigate();
  const [tabStatus, setTabStatus] = useState({
    login: true,
    register: false,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/login') {
      setTabStatus({ login: true, register: false });
    } else if (location.pathname == '/register') {
      setTabStatus({ login: false, register: true });
    } else {
      setTabStatus({ login: false, register: false });
    }
  }, [location.pathname]);

  const tabs: Tabs[] = [
    {
      id: 0,
      title: '로그인',
      onClick: () => {
        navigate('/login');
        setTabStatus({ login: true, register: false });
      },
      path: 'login',
    },
    {
      id: 1,
      title: '회원가입',
      onClick: () => {
        navigate('/register');
        setTabStatus({ login: false, register: true });
      },
      path: 'register',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFotnts />
      <Header
        onClickLogo={() => {
          navigate('/');
        }}
        tabs={tabs}
        tabStatus={tabStatus}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
