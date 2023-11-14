import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Users from './assets/pages/Users';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
