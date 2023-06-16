import { StyledSwitch } from "./style";
import { ChangeEvent, useState } from "react";

enum Variant {
  "defaultChecked",
  "disabledDefaultChecked",
  "disabled",
}

type TextProps = {
  variant?: "defaultChecked" | "disabledDefaultChecked" | "disabled" | Variant
  onChange?: (value: boolean) => void
}

const Switch = ({ variant, onChange }: TextProps) => {
  const [color, setColor] = useState(
    variant === "defaultChecked" || variant === "disabledDefaultChecked" ? "#fff" : "#8083A3",
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (onChange) {
      onChange(checked);
    }
    setColor(checked ? "#fff" : "#8083A3");
  };

  switch (variant) {
    case "defaultChecked":
      return <StyledSwitch onChange={handleChange} defaultChecked $backgroundColor={color} />;
    case "disabledDefaultChecked":
      return (
        <StyledSwitch onChange={handleChange} disabled defaultChecked $backgroundColor={color} />
      );
    case "disabled":
      return <StyledSwitch onChange={handleChange} disabled $backgroundColor={color} />;
    default:
      return <StyledSwitch onChange={handleChange} $backgroundColor={color} />;
  }
};

export default Switch;
