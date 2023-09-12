import { FormGrid, Title, Wrapper } from "./style";
import Text from "../../../atoms/Text/Text";
import Button from "../../../atoms/Button/Button";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import { addUser } from "../../../../requests";
import { Formik, Form } from "formik";
import { InputWithFormik } from "../../../atoms/InputWithFormik/InputWithFormik";
import { Lock, CheckCircle, Person, Email } from "@mui/icons-material";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstname: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lastname: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

const validatePassword = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

const Step2 = () => {
  return (
    <Wrapper container>
      <Formik
        initialValues={{
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={values => addUser(values)}
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
              <InputWithFormik name="email" type="email" label="Email" endIcon={<Email />} />
              <InputWithFormik name="firstname" label="First Name" endIcon={<Person />} />
              <InputWithFormik name="lastname" label="Last Name" endIcon={<Person />} />
              <InputWithFormik name="password" label="Password" endIcon={<Lock />} />
              <InputWithFormik
                name="confirmPassword"
                label="Confirm Password"
                onInputColor={validatePassword.isValidSync(values) ? "success" : "black"}
                endIcon={
                  <CheckCircle
                    color={validatePassword.isValidSync(values) ? "success" : "inherit"}
                  />
                }
              />
            </FormGrid>
            <Checkbox>I agree with terms & conditions</Checkbox>
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
