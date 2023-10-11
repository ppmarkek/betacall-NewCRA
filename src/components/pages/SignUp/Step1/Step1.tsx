import { HoverGrid, IconGrid, OrGrid, SocialLink, Title, Wrapper } from "./style";
import Text from "../../../atoms/Text/Text";
import { Grid } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import Button from "../../../atoms/Button/Button";
import Google from "../../../../assets/Icon/google.svg";
import Facebook from "../../../../assets/Icon/facebook.svg";
import Twitter from "../../../../assets/Icon/twitter.svg";
import { InputWithFormik } from "../../../atoms/InputWithFormik/InputWithFormik";
import { Email } from "@mui/icons-material";
import { Step1Schema } from "../../../../validationSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setStep } from "../../../../redux/regReducer";

const Step1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SubmitEmail = (values: any) => {
    return dispatch(setEmail(values.email));
  };

  const SubmitStep = () => {
    return dispatch(setStep(2));
  };

  return (
    <Wrapper container>
      <Title container>
        <Grid>
          <Text variant={"H1"}>Welcome to BetaCall</Text>
          <Text variant={"H1"}>Sign Up to getting started.</Text>
        </Grid>

        <Text variant="LIGHT">Enter your details to proceed further</Text>
      </Title>
      <Formik
        initialValues={{
          email: "",
          checkBox: false,
        }}
        validationSchema={Step1Schema}
        onSubmit={(values: any) => {
          SubmitEmail(values);
          navigate("/step2");
          SubmitStep();
        }}
        validateOnChange
        validateOnBlu
      >
        {props => (
          <Form>
            <Grid container gap={"20px"} flexDirection={"column"} width={"unset"}>
              <InputWithFormik
                placeholder={"Start typing..."}
                name="email"
                type="email"
                label="Email"
                endIcon={<Email />}
              />
              <Grid>
                <Checkbox onChange={value => props.setFieldValue("checkBox", value, true)}>
                  I agree with terms & conditions
                </Checkbox>
                <Grid height={"20px"} marginTop={"5px"}>
                  <ErrorMessage
                    name="checkBox"
                    render={msg => <Text variant={"ERROR"}>{msg}</Text>}
                  />
                </Grid>
              </Grid>

              <Button type={"submit"} variant={"FilledActive"} width={"420px"}>
                Sign Up
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>

      <OrGrid container>
        <Grid borderBottom={"1px solid #EEEEEE"} width={"72px"} height={"1px"}></Grid>
        <Text variant="LIGHT" small>
          Or
        </Text>
        <Grid borderBottom={"1px solid #EEEEEE"} width={"72px"} height={"1px"}></Grid>
      </OrGrid>
      <Grid container gap={"8px"} flexDirection={"column"} width={"unset"}>
        <SocialLink to={"/"}>
          <IconGrid borderRight={"1px solid #EEEEEE"} width={"48px"}>
            <img src={Google} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Google</HoverGrid>
        </SocialLink>
        <SocialLink to={"/"}>
          <IconGrid borderRight={"1px solid #EEEEEE"} width={"48px"}>
            <img src={Facebook} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Facebook</HoverGrid>
        </SocialLink>
        <SocialLink to={"/"}>
          <IconGrid borderRight={"1px solid #EEEEEE"} width={"48px"}>
            <img src={Twitter} alt="" />
          </IconGrid>
          <HoverGrid container>Sign Up with Twitter</HoverGrid>
        </SocialLink>
      </Grid>
    </Wrapper>
  );
};

export default Step1;
