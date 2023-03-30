import { FilledRestingLight } from './style';

type Value = {
    variant: string;
    text: string;
    width: string;
};

const Button = ({variant, text, width}: Value) => {
    switch (variant) {
    case 'FilledRestingLight':
        return (
            <FilledRestingLight to='/' width={width}>{text}</FilledRestingLight>
        );
    default: 
        return <FilledRestingLight to='/' width={width}>{text}</FilledRestingLight>;
    }
};

export default Button;