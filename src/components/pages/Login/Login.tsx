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
import { LoginSchema } from "../../../validationSchema";
import { userLogin } from "../../../requests";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../redux/loginReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setStep } from "../../../redux/regReducer";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const setMargin = () => {
    return ((document.getElementById("root") as HTMLInputElement).style.marginLeft = "80px");
  };

  const handleSubmit = async (values: any) => {
    try {
      const status = await userLogin(values);
      if (status === 500 || status === 400 || status === 404) {
        setError(true);
        return error;
      } else {
        userLogin(values);
        navigate("/Dashboard");
        setMargin();
        return dispatch(setLoggedIn(true));
      }
    } catch (errorValue) {
      return error;
    }
  };

  useEffect(() => {
    dispatch(setStep(1));
  }, []);

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
          validationSchema={LoginSchema}
          onSubmit={(values: any) => handleSubmit(values)}
          validateOnChange
          validateOnBlu
        >
          {() => (
            <Form>
              <Grid container gap={"15px"} flexDirection="column">
                <Grid height={"20px"}>
                  {error && (
                    <Text variant="ERROR">
                      The email and/or password you specified are not correct.
                    </Text>
                  )}
                </Grid>
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
                <Button variant="FilledActive" width="420px" type={"submit"}>
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
