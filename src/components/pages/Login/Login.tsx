import { Grid } from "@mui/material";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import Google from "../../../assets/Icon/google.svg";
import Facebook from "../../../assets/Icon/facebook.svg";
import Twitter from "../../../assets/Icon/twitter.svg";
import { HoverGrid, IconGrid, OrGrid, SignIn, SocialLink, StyledLink, Title } from "./style";

const Login = () => {
  return (
    <SignIn container>
      <Title container>
        <Text variant='H1'>Welcome to BetaCall Sign In to getting started.</Text>
        <Text variant='LIGHT'>Enter your details to proceed further</Text>
      </Title>
      <Grid container gap='34px' flexDirection='column' width='unset'>
        <Grid container gap='20px' width='420px'>
          <Input
            variant='LightInput'
            text='catherine.shaw@gmail.com'
            width='420px'
            title='Email'
            IconType='Email'
          />
          <Input
            variant='LightInput'
            text='Start typing …'
            width='420px'
            title='Password'
            IconType='Pass'
            type='password'
          />
        </Grid>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Checkbox>Remember me</Checkbox>
          <StyledLink to='/Recover'>Recover password</StyledLink>
        </Grid>
        <Button variant='FilledActive' width='420px'>
          Sign In
        </Button>
      </Grid>
      <OrGrid container>
        <Grid borderBottom='1px solid #EEEEEE' width='72px' height='1px'></Grid>
        <Text variant='LIGHT' small={true}>
          Or
        </Text>
        <Grid borderBottom='1px solid #EEEEEE' width='72px' height='1px'></Grid>
      </OrGrid>
      <Grid container gap='8px' flexDirection='column' width='unset'>
        <SocialLink to='/'>
          <IconGrid borderRight='1px solid #EEEEEE' width='48px'>
            <img src={Google} alt='' />
          </IconGrid>
          <HoverGrid container>Sign Up with Google</HoverGrid>
        </SocialLink>
        <SocialLink to='/'>
          <IconGrid borderRight='1px solid #EEEEEE' width='48px'>
            <img src={Facebook} alt='' />
          </IconGrid>
          <HoverGrid container>Sign Up with Facebook</HoverGrid>
        </SocialLink>
        <SocialLink to='/'>
          <IconGrid borderRight='1px solid #EEEEEE' width='48px'>
            <img src={Twitter} alt='' />
          </IconGrid>
          <HoverGrid container>Sign Up with Twitter</HoverGrid>
        </SocialLink>
      </Grid>
    </SignIn>
  );
};

export default Login;
