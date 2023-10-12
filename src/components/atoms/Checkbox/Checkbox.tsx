import Text from "../Text/Text";
import { CheckboxGrid, StyledCheckbox } from "./style";
import { ChangeEvent } from "react";

type Value = {
  children: string
  name?: string
  onChange?: (value: boolean) => void
}

const Checkbox = ({ children, name, onChange }: Value) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };
  return (
    <CheckboxGrid container>
      <StyledCheckbox>
        <input type="checkbox" id="checkbox" name={name} onChange={event => handleChange(event)} />
        <label htmlFor="checkbox" />
      </StyledCheckbox>
      <Text variant="LIGHT">{children}</Text>
    </CheckboxGrid>
  );
};

export default Checkbox;
