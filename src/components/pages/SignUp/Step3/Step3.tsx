import { StyledLink, Wrapper } from "./style";
import Undraw from "../../../../assets/Image/Undraw.svg";
import { Grid } from "@mui/material";
import Text from "../../../atoms/Text/Text";

const Step3 = () => {
  return (
    <Wrapper container>
      <img src={Undraw} alt='' />
      <Grid container gap={"4px"} width={"465px"} justifyContent={"center"}>
        <Text variant={"H1"} color={"#1A1C1D"}>
          Thank you
        </Text>
        <Grid textAlign={"center"}>
          <Text variant={"LIGHT"}>We sent an email to catherine.shaw@gmail.com</Text>
          <Text variant={"LIGHT"}>Click confirmation link in the email to verify your account</Text>
        </Grid>
      </Grid>
      <StyledLink to={""}>Resend Email</StyledLink>
    </Wrapper>
  );
};

export default Step3;
