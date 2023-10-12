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
  disabled?: any
  onClick?: () => void
  type?: "submit" | "reset" | "button" | undefined
}

const Button = ({ variant, children, width, height, onClick, type, disabled }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  switch (variant) {
    case "FilledRestingLight":
      return (
        <FilledRestingLight
          onClick={handleClick}
          $height={height}
          $width={width}
          type={type}
          disabled={disabled}
        >
          {children}
        </FilledRestingLight>
      );
    case "FilledActive":
      return (
        <FilledActive
          onClick={handleClick}
          $height={height}
          $width={width}
          type={type}
          disabled={disabled}
        >
          {children}
        </FilledActive>
      );
    default:
      return (
        <FilledRestingLight
          onClick={handleClick}
          $height={height}
          $width={width}
          type={type}
          disabled={disabled}
        >
          {children}
        </FilledRestingLight>
      );
  }
};

export default Button;
