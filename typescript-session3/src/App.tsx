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
import { Tab } from './ds/components/TabBar';
import { useSessionStore } from './stores/session';

function App() {
  const navigate = useNavigate();
  const [tabStatus, setTabStatus] = useState<'login' | 'register' | null>();

  const location = useLocation();
  const username = useSessionStore((state) => state.username);
  const logout = useSessionStore((state) => state.logout);
  const handleLogout = () => {
    alert('로그아웃 하셨습니다!');
    logout();
    navigate('/login');
  };

  useEffect(() => {
    if (location.pathname == '/login') {
      setTabStatus('login');
    } else if (location.pathname == '/register') {
      setTabStatus('register');
    } else {
      setTabStatus(null);
    }
  }, [location.pathname]);

  const tabs: Tab[] = [
    {
      id: 0,
      title: '로그인',
      onClick: () => {
        navigate('/login');
        setTabStatus('login');
      },
      path: 'login',
    },
    {
      id: 1,
      title: '회원가입',
      onClick: () => {
        navigate('/register');
        setTabStatus('register');
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
        username={username}
        tabs={tabs}
        tabStatus={tabStatus}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
