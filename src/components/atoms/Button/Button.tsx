import { FilledActive, FilledRestingLight } from './style';

type Value = {
  variant: string
  text: string
  width: string
  to: string
}

const Button = ({ variant, text, width, to }: Value) => {
    switch (variant) {
    case 'FilledRestingLight':
        return (
            <FilledRestingLight to={to} $width={width}>
                {text}
            </FilledRestingLight>
        );
    case 'FilledActive':
        return <FilledActive $width={width}>{text}</FilledActive>;
    default:
        return (
            <FilledRestingLight to='/' $width={width}>
                {text}
            </FilledRestingLight>
        );
    }
};

export default Button;
