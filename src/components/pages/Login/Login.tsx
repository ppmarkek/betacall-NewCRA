import { Grid } from '@mui/material';
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import Google from '../../../assets/Icon/google.svg';
import Facebook from '../../../assets/Icon/facebook.svg';
import Twitter from '../../../assets/Icon/twitter.svg';
import { HoverGrid, IconGrid, OrGrid, SignIn, SocialLink, StyledLink, Title } from './style';

const Login = () => {
    return (
        <SignIn container xs={12}>
            <Title container>
                <Text variant={'H1'} small={''} text={'Welcome to BetaCall Sign In to getting started.'} light={''} />
                <Text variant={'Light'} small={''} text={'Enter your details to proceed further'} light={''} />
            </Title>
            <Grid container gap={'34px'} flexDirection={'column'} width={'unset'}>
                <Grid container gap={'19px'} width={'420px'}>
                    <Input variant='LightInput' text={'catherine.shaw@gmail.com'} width={'420px'} color={''} title={'Email'} IconType={'Email'} type={''} />
                    <Input variant='LightInput' text={'Start typing …'} width={'420px'} color={''} title={'Password'} IconType={'Pass'} type={'password'} />
                </Grid>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Checkbox color={'#6B59CC'} bg={'#F0F0F3'} text={'Remember me'} />
                    <StyledLink to={'/'}>Recover password</StyledLink>
                </Grid>
                <Button variant={'FilledActive'} text={'Sign In'} width={'420px'}/>
            </Grid>
            <OrGrid container>
                <Grid borderBottom={'1px solid #EEEEEE'} width={'72px'} height={'1px'}></Grid>
                <Text variant={'Light'} small={'small'} text={'Or'} light={''} />
                <Grid borderBottom={'1px solid #EEEEEE'} width={'72px'} height={'1px'}></Grid>
            </OrGrid>
            <Grid container gap={'8px'} flexDirection={'column'} width={'unset'}>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Google} alt="" />
                    </IconGrid>
                    <HoverGrid container>
                        Sign Up with Google
                    </HoverGrid>
                </SocialLink>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Facebook} alt="" />
                    </IconGrid>
                    <HoverGrid container>
                        Sign Up with Facebook  
                    </HoverGrid>
                </SocialLink>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Twitter} alt="" />
                    </IconGrid>
                    <HoverGrid container>
                        Sign Up with Twitter   
                    </HoverGrid>
                </SocialLink>
            </Grid>
        </SignIn>
    );
};

export default Login;