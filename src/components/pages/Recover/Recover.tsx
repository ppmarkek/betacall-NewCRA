import { Grid } from '@mui/material';
import { Title, Wrapper } from './style';
import RecoverImg from '../../../assets/Image/RecoverImg.svg';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const Recover = () => {
    return (
        <Wrapper container>
            <Title container>
                <img src={RecoverImg} alt='' />
                <Grid container gap={'11px'} justifyContent={'center'}>
                    <Text variant={'H1'} small={''} light={''}>
                        Lost your password?
                    </Text>
                    <Text variant={'H1'} small={''} light={''}>
                        Enter your details to recover.
                    </Text>
                    <Text variant={'Light'} small={'small'} light={'light'}>
                        Enter your details to proceed further
                    </Text>
                </Grid>
                <Grid container gap={'49px'}>
                    <Input
                        variant='LightInput'
                        text={'Start typing ...'}
                        width={'420px'}
                        color={''}
                        title={'Email'}
                        IconType={'Email'}
                        type={''}
                    />
                    <Button variant={'FilledActive'} width={'420px'}>Recover</Button>
                </Grid>
            </Title>
        </Wrapper>
    );
};

export default Recover;
