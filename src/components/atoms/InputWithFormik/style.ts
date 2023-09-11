import styled from "styled-components";
import { TextField } from "formik-mui";

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
