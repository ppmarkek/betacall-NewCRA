import styled from "styled-components";
import { TextField } from "formik-mui";
import { InputAdornment } from "@mui/material";

type InputStyleProps = {
  fullWidth?: boolean
  width?: number
}

export const InputField = styled(TextField)<InputStyleProps>`
  width: 100%;
  input {
    padding: 0;
  }
  input:focus {
  }
  fieldset {
    border: 0;
  }
`;

export const InputAdornmentWithStyle = styled(InputAdornment)<{
  focused: boolean
  onInputColor: string
}>`
  svg {
    ${({ focused, onInputColor }) =>
      focused &&
      `
    fill: ${onInputColor};
  `}
  }
`;
