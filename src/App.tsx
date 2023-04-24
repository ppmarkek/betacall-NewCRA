import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import LoginHeader from './components/templates/LoginHeader/LoginHeader';
import Recover from './components/pages/Recover/Recover';
import Step1 from './components/pages/SignUp/Step1/Step1';
import Step2 from './components/pages/SignUp/Step2/Step2';
import Step3 from './components/pages/SignUp/Step3/Step3';
import Novigation from './components/templates/Novigation/Novigation';

function App() {
    const LoginReg = ['/Login', '/Recover', '/Step1', '/Step2', '/Step3'];
    const location = useLocation();

    return (
        <div className='App'>
            {LoginReg.some(x => x === location.pathname) === true ? (
                <LoginHeader key='' />
            ) : (
                <Novigation key='' />
            )}
            <Routes>
                <Route path='/Step1' element={<Step1 />} />
                <Route path='/Step2' element={<Step2 />} />
                <Route path='/Step3' element={<Step3 />} />
                <Route path='/Recover' element={<Recover />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
