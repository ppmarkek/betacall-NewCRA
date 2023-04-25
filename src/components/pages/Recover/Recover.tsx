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
                <Grid container gap={'10px'} justifyContent={'center'}>
                    <Text variant={'H1'}>Lost your password?</Text>
                    <Text variant={'H1'}>Enter your details to recover.</Text>
                    <Text variant={'LIGHT'} small={'small'} color={'#8083A3'}>
            Enter your details to proceed further
                    </Text>
                </Grid>
                <Grid container gap={'50px'}>
                    <Input
                        variant='LightInput'
                        text={'Start typing ...'}
                        width={'420px'}
                        title={'Email'}
                        IconType={'Email'}
                    />
                    <Button variant={'FilledActive'} width={'420px'}>
            Recover
                    </Button>
                </Grid>
            </Title>
        </Wrapper>
    );
};

export default Recover;
