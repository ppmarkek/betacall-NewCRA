import { FilledActive, FilledRestingLight } from "./style";

enum Variant {
  "FilledRestingLight",
  "FilledActive",
}

type ButtonProps = {
  variant: "FilledActive" | "FilledRestingLight" | Variant
  children?: any
  width?: string
  height?: any
  onClick?: (value: boolean) => void
  type?: "submit" | "reset" | "button" | undefined
}

const Button = ({ variant, children, width, height, onClick, type }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(true);
    }
  };
  switch (variant) {
    case "FilledRestingLight":
      return (
        <FilledRestingLight
          onClick={() => handleClick()}
          $height={height}
          $width={width}
          type={type}
        >
          {children}
        </FilledRestingLight>
      );
    case "FilledActive":
      return (
        <FilledActive onClick={() => handleClick()} $height={height} $width={width} type={type}>
          {children}
        </FilledActive>
      );
    default:
      return (
        <FilledRestingLight
          onClick={() => handleClick()}
          $height={height}
          $width={width}
          type={type}
        >
          {children}
        </FilledRestingLight>
      );
  }
};

export default Button;
