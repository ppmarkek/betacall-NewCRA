import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import LoginHeader from "./components/templates/LoginHeader/LoginHeader";
import Recover from "./components/pages/Recover/Recover";
import Step1 from "./components/pages/SignUp/Step1/Step1";
import Step2 from "./components/pages/SignUp/Step2/Step2";
import Step3 from "./components/pages/SignUp/Step3/Step3";
import Navigation from "./components/templates/Navigation/Navigation";
import ProfileSettings from "./components/pages/ProfileSettings/ProfileSettings";
import Settings from "./components/pages/Settings/Settings";
import Schedule from "./components/pages/Schedule/Schedule";
import AddNewEvent from "./components/pages/AddNewEvent/AddNewEvent";
import Contacts from "./components/pages/Contacts/Contacts";
import AddNewContact from "./components/pages/AddNewContact/AddNewContact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStep } from "./redux/regReducer";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regUser = useSelector((state: any) => state.regUser.step);
  const loginUser = useSelector((state: any) => state.loginUser.isLoggedIn);
  const LoginReg = ["/Login", "/Recover", "/Step1", "/Step2", "/Step3"];
  const RegStep = ["/Login", "/Recover", "/Step1"];
  const location = useLocation();

  const rebootStep = () => {
    return (
      RegStep.some(value => value.toLowerCase() === location.pathname.toLowerCase()) === true &&
      dispatch(setStep(1))
    );
  };

  const setMargin = () => {
    return (
      LoginReg.some(value => value.toLowerCase() === location.pathname.toLowerCase()) === true &&
      ((document.getElementById("root") as HTMLInputElement).style.marginLeft = "0px")
    );
  };

  const regPages = () => {
    return (
      loginUser === false &&
      RegStep.some(value => value.toLowerCase() !== location.pathname.toLowerCase()) === true &&
      navigate("/Step1")
    );
  };

  useEffect(() => {
    setMargin();
    regPages();
    rebootStep();
  }, []);

  return (
    <div className="App">
      {LoginReg.some(value => value.toLowerCase() === location.pathname.toLowerCase()) === true ? (
        <LoginHeader />
      ) : (
        <Navigation />
      )}
      <Routes>
        {loginUser === true ? (
          <>
            <Route path="/ProfileSettings" element={<ProfileSettings />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/AddNewEvent" element={<AddNewEvent />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/AddNewContact" element={<AddNewContact />} />
          </>
        ) : (
          <>
            {regUser === 1 && <Route path="/Step1" element={<Step1 />} />}
            {regUser === 2 && <Route path="/Step2" element={<Step2 />} />}
            {regUser === 3 && <Route path="/Step3" element={<Step3 />} />}
            <Route path="/Recover" element={<Recover />} />
            <Route path="/Login" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
