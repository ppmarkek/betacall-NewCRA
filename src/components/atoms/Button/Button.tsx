import { FilledActive, FilledRestingLight } from './style';

enum Variant {
  'FilledRestingLight',
  'FilledActive',
}

type ButtonProps = {
  variant: 'FilledActive' | 'FilledRestingLight' | Variant
  children: string | number
  width: string
}

const Button = ({ variant, children, width }: ButtonProps) => {
  switch (variant) {
    case Variant.FilledRestingLight:
      return <FilledRestingLight $width={width}>{children}</FilledRestingLight>;
    case Variant.FilledActive:
      return <FilledActive $width={width}>{children}</FilledActive>;
    default:
      return <FilledRestingLight $width={width}>{children}</FilledRestingLight>;
  }
};

export default Button;
