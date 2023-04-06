import { FilledActive, FilledRestingLight } from './style';

type Value = {
  variant: string
  children: any
  width: string
}

const Button = ({ variant, children, width }: Value) => {
    switch (variant) {
    case 'FilledRestingLight':
        return (
            <FilledRestingLight $width={width}>
                {children}
            </FilledRestingLight>
        );
    case 'FilledActive':
        return <FilledActive $width={width}>{children}</FilledActive>;
    default:
        return (
            <FilledRestingLight $width={width}>
                {children}
            </FilledRestingLight>
        );
    }
};

export default Button;
