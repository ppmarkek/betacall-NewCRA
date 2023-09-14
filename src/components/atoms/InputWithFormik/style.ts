import styled from "styled-components";
import { TextField } from "formik-mui";
import { InputAdornment } from "@mui/material";

type InputStyleProps = {
  fullWidth?: boolean
  width?: number
}

export const InputField = styled(TextField)<InputStyleProps>`
  width: 100%;
  padding-right: 0px;
  .MuiOutlinedInput-root {
    border-bottom: 1px solid #eceef5;
    padding-right: 0px;
    border-radius: 0px;
    padding-bottom: 3px;
  }
  input {
    padding: 0;
  }
  fieldset {
    border: 0;
  }
  .Mui-error {
    margin: 0;
    margin-top: 5px;
  }
`;

export const InputAdornmentWithStyle = styled(InputAdornment)<{
  $focused: boolean
  $inputIconColor: string
}>`
  svg {
    fill: ${({ $focused, $inputIconColor }) => ($focused ? $inputIconColor : undefined)};
  }
`;
