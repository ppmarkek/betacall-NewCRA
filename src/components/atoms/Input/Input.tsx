import Text from '../Text/Text';
import { useState } from 'react';
import { InputGrid, LightInput, StyledImg } from './style';
import { Grid } from '@mui/material';
import SPass from '../../../assets/Icon/SPass.svg';
import Pass from '../../../assets/Icon/Pass.svg';
import Email from '../../../assets/Icon/Email.svg';
import EmailS from '../../../assets/Icon/EmailS.svg';

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
    const [Icon, setIcon] = useState(IconType === 'Email' ? EmailS : SPass);
    const CheackEmail = (x: string) => {
        if (IconType === 'Email') {
            return x === '' ? setIcon(EmailS) : setIcon(Email);
        }
        if (IconType === 'Pass') {
            return x === '' ? setIcon(SPass) : setIcon(Pass);
        }
    };

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
                    onChange={x => CheackEmail(x.target.value)}
                />
                {IconType !== '' ? <StyledImg src={Icon} alt='' /> : <Grid></Grid>}
            </InputGrid>
        );
    default:
        return <LightInput placeholder={text} $width={width} $color={color} />;
    }
};

export default Input;
