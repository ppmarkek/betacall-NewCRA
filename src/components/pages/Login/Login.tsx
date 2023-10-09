import { Grid } from "@mui/material";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Text from "../../atoms/Text/Text";
import Google from "../../../assets/Icon/google.svg";
import Facebook from "../../../assets/Icon/facebook.svg";
import Twitter from "../../../assets/Icon/twitter.svg";
import { HoverGrid, IconGrid, OrGrid, SignIn, SocialLink, StyledLink, Title } from "./style";
import { Lock, Email } from "@mui/icons-material";
import { InputWithFormik } from "../../atoms/InputWithFormik/InputWithFormik";
import { Form, Formik } from "formik";
import { validateLogin } from "../../../validationSchema";
import { userLogin } from "../../../requests";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../redux/loginReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginReg = ["/Login", "/Recover", "/Step1", "/Step2", "/Step3"];

  const SubmitLogin = () => {
    return dispatch(setLoggedIn(true));
  };

  const setMargin = () => {
    return (
      LoginReg.some(value => value.toLowerCase() === location.pathname.toLowerCase()) === false &&
      ((document.getElementById("root") as HTMLInputElement).style.marginLeft = "80px")
    );
  };

  return (
    <SignIn container>
      <Title container>
        <Text variant="H1">Welcome to BetaCall Sign In to getting started.</Text>
        <Text variant="LIGHT">Enter your details to proceed further</Text>
      </Title>
      <Grid container flexDirection="column" width="unset">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validateLogin}
          onSubmit={(values: any) => {
            userLogin(values);
            SubmitLogin();
            navigate("/dashboard");
            setMargin();
          }}
          validateOnChange
          validateOnBlu
        >
          {() => (
            <Form>
              <Grid container gap={"20px"} flexDirection="column">
                <Grid container gap="20px" width="420px">
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="email"
                    type="email"
                    label="Email"
                    endIcon={<Email />}
                  />
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="password"
                    type="password"
                    label="Password"
                    endIcon={<Lock />}
                  />
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Checkbox>Remember me</Checkbox>
                  <StyledLink to="/Recover">Recover password</StyledLink>
                </Grid>
                <Button variant="FilledActive" width="420px" type="submit">
                  Sign In
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
      <OrGrid container>
        <Grid borderBottom="1px solid #EEEEEE" width="72px" height="1px"></Grid>
        <Text variant="LIGHT" small={true}>
          Or
        </Text>
        <Grid borderBottom="1px solid #EEEEEE" width="72px" height="1px"></Grid>
      </OrGrid>
      <Grid container gap="8px" flexDirection="column" width="unset">
        <SocialLink to="/">
          <IconGrid borderRight="1px solid #EEEEEE" width="48px">
            <img src={Google} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Google</HoverGrid>
        </SocialLink>
        <SocialLink to="/">
          <IconGrid borderRight="1px solid #EEEEEE" width="48px">
            <img src={Facebook} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Facebook</HoverGrid>
        </SocialLink>
        <SocialLink to="/">
          <IconGrid borderRight="1px solid #EEEEEE" width="48px">
            <img src={Twitter} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Twitter</HoverGrid>
        </SocialLink>
      </Grid>
    </SignIn>
  );
};

export default Login;
