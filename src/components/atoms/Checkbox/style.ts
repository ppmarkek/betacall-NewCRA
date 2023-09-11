import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledCheckbox = styled(Grid)`
  width: 20px;
  height: 20px;
  label {
    background-color: #f0f0f3;
    border: 6px solid #f0f0f3;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    position: absolute;
    width: 20px;
  }

  input[type="checkbox"] {
    visibility: hidden;
    position: absolute;
  }

  input[type="checkbox"]:checked + label {
    border-color: #6b59cc;
    background-color: #fff;
  }
`;

export const CheckboxGrid = styled(Grid)`
  gap: 10px;
  width: unset;
  align-items: center;
`;
