import { Grid } from '@mui/material';
import { FormGrid, StyledLink, Title, Wrapper } from './style';
import Text from '../../../atoms/Text/Text';
import Input from '../../../atoms/Input/Input';
import Button from '../../../atoms/Button/Button';
import Checkbox from '../../../atoms/Checkbox/Checkbox';

const Step2 = () => {
    return (
        <Wrapper container>
            <Title container gap={'5px'}>
                <Text variant={'H1'} small={''} color={''}>
          Tell us more about yourself
                </Text>
                <Text variant={'LIGHT'} small={''} color={''}>
          Enter your details to proceed further
                </Text>
            </Title>
            <FormGrid container>
                <Input
                    variant={'LightInput'}
                    type={'text'}
                    text={'catherine.shaw@gmail.com'}
                    width={'100%'}
                    color={''}
                    title={'Email'}
                    IconType={'Email'}
                />
                <Grid container gap={'28px'}>
                    <Input
                        variant={'LightInput'}
                        type={'text'}
                        text={'Enter your name'}
                        width={'100%'}
                        color={''}
                        title={'First name'}
                        IconType={'Name'}
                    />
                    <Input
                        variant={'LightInput'}
                        type={'text'}
                        text={'Enter your last name'}
                        width={'100%'}
                        color={''}
                        title={'Last name'}
                        IconType={'Name'}
                    />
                </Grid>
                <Input
                    variant={'ConfirmPassword'}
                    type={''}
                    text={''}
                    width={'100%'}
                    color={''}
                    title={''}
                    IconType={'Pass'}
                />
            </FormGrid>
            <Grid container gap={'36px'} flexDirection={'column'} width={'auto'}>
                <Checkbox color={'#6B59CC'} bg={'#F0F0F3'} text={'I agree with terms & conditions'} />
                <StyledLink to={'/Step3'}>
                    <Button variant={'FilledActive'} width={'420px'}>
            Continue
                    </Button>
                </StyledLink>
            </Grid>
        </Wrapper>
    );
};

export default Step2;
