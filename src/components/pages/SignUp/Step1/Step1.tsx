import { HoverGrid, IconGrid, OrGrid, SocialLink, StyledLink, Title, Wrapper } from './style';
import Text from '../../../atoms/Text/Text';
import { Grid } from '@mui/material';
import Input from '../../../atoms/Input/Input';
import Checkbox from '../../../atoms/Checkbox/Checkbox';
import Button from '../../../atoms/Button/Button';
import Google from '../../../../assets/Icon/google.svg';
import Facebook from '../../../../assets/Icon/facebook.svg';
import Twitter from '../../../../assets/Icon/twitter.svg';

const Step1 = () => {
    return (
        <Wrapper container>
            <Title container>
                <Grid>
                    <Text variant={'H1'} small={''} light={''}>
            Welcome to BetaCall
                    </Text>
                    <Text variant={'H1'} small={''} light={''}>
            Sign Up to getting started.
                    </Text>
                </Grid>

                <Text variant={'Light'} small={''} light={''}>
          Enter your details to proceed further
                </Text>
            </Title>
            <Grid container gap={'36px'} flexDirection={'column'} width={'unset'}>
                <Input
                    variant={'LightInput'}
                    type={'text'}
                    text={'catherine.shaw@gmail.com'}
                    width={'420px'}
                    color={''}
                    title={'Email'}
                    IconType={'Email'}
                />
                <Checkbox color={'#6B59CC'} bg={'#F0F0F3'} text={'I agree with terms & conditions'} />
                <StyledLink to={'/Step2'}>
                    <Button variant={'FilledActive'} width={'420px'}>
            Sign Up
                    </Button>
                </StyledLink>
            </Grid>
            <OrGrid container>
                <Grid borderBottom={'1px solid #EEEEEE'} width={'72px'} height={'1px'}></Grid>
                <Text variant={'Light'} small={'small'} light={''}>
          Or
                </Text>
                <Grid borderBottom={'1px solid #EEEEEE'} width={'72px'} height={'1px'}></Grid>
            </OrGrid>
            <Grid container gap={'8px'} flexDirection={'column'} width={'unset'}>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Google} alt='' />
                    </IconGrid>
                    <HoverGrid container>Sign Up with Google</HoverGrid>
                </SocialLink>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Facebook} alt='' />
                    </IconGrid>
                    <HoverGrid container>Sign Up with Facebook</HoverGrid>
                </SocialLink>
                <SocialLink to={'/'}>
                    <IconGrid borderRight={'1px solid #EEEEEE'} width={'48px'}>
                        <img src={Twitter} alt='' />
                    </IconGrid>
                    <HoverGrid container>Sign Up with Twitter</HoverGrid>
                </SocialLink>
            </Grid>
        </Wrapper>
    );
};

export default Step1;
