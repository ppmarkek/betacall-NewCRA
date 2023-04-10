import Text from '../Text/Text';
import { useState, useEffect } from 'react';
import { ConfirmPassword, InputGrid, LightInput, StyledImg } from './style';
import { Grid } from '@mui/material';
import SPass from '../../../assets/Icon/SPass.svg';
import Pass from '../../../assets/Icon/Pass.svg';
import Email from '../../../assets/Icon/Email.svg';
import EmailS from '../../../assets/Icon/EmailS.svg';
import Men from '../../../assets/Icon/Men.svg';
import MenS from '../../../assets/Icon/MenS.svg';
import CheckS from '../../../assets/Icon/CheckS.svg';
import Check from '../../../assets/Icon/Check.svg';

type Value = {
  variant: string
  type: string
  text: string
  width: string
  color: string
  title: string
  IconType: string
}

const Input = ({ variant, type, text, width, color, title, IconType }: Value) => {
    const [Icon, setIcon] = useState(SPass);
    const [Confirm, setConfirm] = useState(CheckS);
    const [Value, setValue] = useState('');

    const changeIcon = () => {
        if (IconType === 'Email') {
            return setIcon(EmailS);
        } else if (IconType === 'Name') {
            return setIcon(MenS);
        }
    };

    const CheackIcon = (x: string) => {
        if (IconType === 'Email') {
            return x === '' ? setIcon(EmailS) : setIcon(Email);
        }
        if (IconType === 'Pass' && variant === 'ConfirmPassword') {
            setValue(x);
            return x === '' ? setIcon(SPass) : setIcon(Pass);
        }
        if (IconType === 'Pass') {
            return x === '' ? setIcon(SPass) : setIcon(Pass);
        }
        if (IconType === 'Name') {
            return x === '' ? setIcon(MenS) : setIcon(Men);
        }
    };

    const CheackConfirmPass = (x: string) => {
        return Value !== '' && Value === x ? setConfirm(Check) : setConfirm(CheckS);
    };

    useEffect(() => {
        changeIcon();
    }, []);

    switch (variant) {
    case 'LightInput':
        return (
            <InputGrid container>
                <Text variant={'LIGHT'} small={'small'} color={''}>
                    {title}
                </Text>
                <LightInput
                    type={type}
                    placeholder={text}
                    $width={width}
                    $color={color}
                    onChange={x => CheackIcon(x.target.value)}
                />
                {IconType !== '' ? <StyledImg src={Icon} alt='' /> : <Grid></Grid>}
            </InputGrid>
        );
    case 'ConfirmPassword':
        return (
            <ConfirmPassword container>
                <InputGrid container>
                    <Text variant={'LIGHT'} small={'small'} color={''}>
              Password
                    </Text>
                    <LightInput
                        type={'password'}
                        placeholder={'Enter your password'}
                        $width={width}
                        $color={color}
                        onChange={x => CheackIcon(x.target.value)}
                    />
                    <StyledImg src={Icon} alt='' />
                </InputGrid>
                <InputGrid container>
                    <Text variant={'LIGHT'} small={'small'} color={''}>
              Confirm password
                    </Text>
                    <LightInput
                        type={'password'}
                        placeholder={'Confirm your password'}
                        $width={width}
                        $color={color}
                        onChange={x => CheackConfirmPass(x.target.value)}
                    />
                    <StyledImg src={Confirm} alt='' />
                </InputGrid>
            </ConfirmPassword>
        );
    default:
        return <LightInput placeholder={text} $width={width} $color={color} />;
    }
};

export default Input;
