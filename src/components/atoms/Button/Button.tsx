import { FilledActive, FilledRestingLight } from "./style";

enum Variant {
  "FilledRestingLight",
  "FilledActive",
}

type ButtonProps = {
  variant: "FilledActive" | "FilledRestingLight" | Variant
  children: any
  width: string
}

const Button = ({ variant, children, width }: ButtonProps) => {
  switch (variant) {
    case "FilledRestingLight":
      return <FilledRestingLight $width={width}>{children}</FilledRestingLight>;
    case "FilledActive":
      return <FilledActive $width={width}>{children}</FilledActive>;
    default:
      return <FilledRestingLight $width={width}>{children}</FilledRestingLight>;
  }
};

export default Button;
