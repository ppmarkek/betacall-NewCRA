import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import LoginHeader from './components/templates/LoginHeader/LoginHeader';
import Recover from './components/pages/Recover/Recover';
import Step1 from './components/pages/SignUp/Step1/Step1';

function App() {
    const LoginReg = ['/Login', '/Recover'];
    const location = useLocation();

    return (
        <div className='App'>
            {LoginReg.some(x => x === location.pathname) === true ? (
                <LoginHeader key='' />
            ) : (
                <LoginHeader key='' />
            )}
            <Routes>
                <Route path='/Step1' element={<Step1 />} />
                <Route path='/Recover' element={<Recover />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
