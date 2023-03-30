import Text from '../Text/Text';
import { InputGrid, LightInput } from './style';
import EmailIcon from '../../../assets/Icon/Email.svg';

type Value = {
    variant: string;
    text: string;
    width: string;
    color: string;
    title: string;
    icon: string;
};

const Input = ({variant, text, width, color, title, icon}: Value) => { 
    switch(variant){
    case 'LightInput':
        return (
            <InputGrid container>
                <Text variant={'Light'} small={'small'} text={title} />
                <LightInput placeholder={text} $width={width} $color={color}/>
                {/* // <img src={EmailIcon} alt='icon'/> */}
                <EmailIcon />
            </InputGrid>
        );
    default:
        return (
            <LightInput placeholder={text} $width={width} $color={color} />
        );
    }
};

export default Input;