import { Grid } from "@mui/material";
import { FormGrid, StyledLink, Title, Wrapper } from "./style";
import Text from "../../../atoms/Text/Text";
import Input from "../../../atoms/Input/Input";
import Button from "../../../atoms/Button/Button";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import { addUser } from "../../../../requests";
import { useFormik } from "formik";

const Step2 = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      firstName: "name",
      lastName: "name",
      password: "foobar",
    },
    onSubmit: values => {
      addUser(values);
    },
  });

  return (
    <Wrapper container>
      <Title container gap={"5px"}>
        <Text variant={"H1"}>Tell us more about yourself</Text>
        <Text variant='LIGHT'>Enter your details to proceed further</Text>
      </Title>
      <FormGrid container>
        <Input
          variant={"LightInput"}
          type={"text"}
          text={"catherine.shaw@gmail.com"}
          width={"100%"}
          title={"Email"}
          IconType={"Email"}
          value={formik.values.email}
        />
        <Grid container gap={"28px"}>
          <Input
            variant={"LightInput"}
            type={"text"}
            text={"Enter your name"}
            width={"100%"}
            title={"First name"}
            IconType={"Name"}
            value={formik.values.firstName}
          />
          <Input
            variant={"LightInput"}
            type={"text"}
            text={"Enter your last name"}
            width={"100%"}
            title={"Last name"}
            IconType={"Name"}
            value={formik.values.lastName}
          />
        </Grid>
        <Input
          variant={"ConfirmPassword"}
          width={"100%"}
          IconType={"Pass"}
          value={formik.values.password}
        />
      </FormGrid>
      <Grid container gap={"36px"} flexDirection={"column"} width={"auto"}>
        <Checkbox>I agree with terms & conditions</Checkbox>
        <StyledLink to={"/Step3"}>
          <Button variant={"FilledActive"} width={"420px"} onClick={() => formik.submitForm()}>
            Continue
          </Button>
        </StyledLink>
      </Grid>
    </Wrapper>
  );
};

export default Step2;
