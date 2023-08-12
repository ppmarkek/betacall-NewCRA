import { FilledActive, FilledRestingLight } from "./style";

enum Variant {
  "FilledRestingLight",
  "FilledActive",
}

type ButtonProps = {
  variant: "FilledActive" | "FilledRestingLight" | Variant
  children?: any
  width?: string
  onClick?: (value: boolean) => void
}

const Button = ({ variant, children, width, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(true);
    }
  };
  switch (variant) {
    case "FilledRestingLight":
      return (
        <FilledRestingLight onClick={() => handleClick()} $width={width}>
          {children}
        </FilledRestingLight>
      );
    case "FilledActive":
      return (
        <FilledActive onClick={() => handleClick()} $width={width}>
          {children}
        </FilledActive>
      );
    default:
      return (
        <FilledRestingLight onClick={() => handleClick()} $width={width}>
          {children}
        </FilledRestingLight>
      );
  }
};

export default Button;
