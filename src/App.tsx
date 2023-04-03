import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import LoginHeader from './components/templates/LoginHeader/LoginHeader';

function App() {
  const LoginReg = ['/Login'];
  const location = useLocation();

  return (
    <div className="App">
      {LoginReg.map((x) => x === location.pathname ? <LoginHeader key='' /> : <LoginHeader key='' />)}
        <Routes>
          <Route path="/Login" element={<Login />} /> 
        </Routes>
    </div>
  )
}

export default App;
