import { FormGrid, Title, Wrapper } from "./style";
import Text from "../../../atoms/Text/Text";
import Button from "../../../atoms/Button/Button";
import { addUser } from "../../../../requests";
import { Formik, Form } from "formik";
import { InputWithFormik } from "../../../atoms/InputWithFormik/InputWithFormik";
import { Lock, CheckCircle, Person, Email } from "@mui/icons-material";
import { SignupSchema, validatePassword } from "../../../../validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep } from "../../../../redux/regReducer";

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regUser = useSelector((state: any) => state.regUser.email);

  const SubmitStep = () => {
    return dispatch(setStep(3));
  };

  return (
    <Wrapper container>
      <Formik
        initialValues={{
          email: regUser,
          firstname: "",
          lastname: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any) => {
          addUser(values);
          navigate("/step3");
          SubmitStep();
        }}
        validateOnChange
        validateOnBlur
      >
        {({ values }) => (
          <Form>
            <Title container gap="5px">
              <Text variant="H1">Tell us more about yourself</Text>
              <Text variant="LIGHT">Enter your details to proceed further</Text>
            </Title>
            <FormGrid container>
              <InputWithFormik
                placeholder={"Start typing..."}
                name="email"
                type="email"
                label="Email"
                value={values.email}
                endIcon={<Email />}
              />
              <InputWithFormik
                placeholder={"Start typing..."}
                name="firstname"
                label="First Name"
                endIcon={<Person />}
              />
              <InputWithFormik
                placeholder={"Start typing..."}
                name="lastname"
                label="Last Name"
                endIcon={<Person />}
              />
              <InputWithFormik
                placeholder={"Start typing..."}
                name="password"
                type="password"
                label="Password"
                endIcon={<Lock />}
              />
              <InputWithFormik
                placeholder={"Start typing..."}
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                endIcon={
                  <CheckCircle
                    color={validatePassword.isValidSync(values) ? "success" : "inherit"}
                  />
                }
              />
            </FormGrid>
            <Button variant="FilledActive" width="420px" type="submit">
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Step2;
