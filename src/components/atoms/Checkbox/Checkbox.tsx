import Text from "../Text/Text";
import { CheckboxGrid, StyledCheckbox } from "./style";
import { ChangeEvent, useState } from "react";

type Value = {
  children: string
}

const Checkbox = ({ children }: Value) => {
  const [textColor, setTextColor] = useState("#8083A3");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked === false ? setTextColor("#8083A3") : setTextColor("");
  };

  return (
    <CheckboxGrid container>
      <StyledCheckbox>
        <input type='checkbox' id='checkbox' onChange={event => handleChange(event)} />
        <label htmlFor='checkbox' />
      </StyledCheckbox>
      <Text variant='LIGHT' color={textColor}>
        {children}
      </Text>
    </CheckboxGrid>
  );
};

export default Checkbox;
