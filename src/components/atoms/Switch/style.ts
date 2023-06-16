import styled from "styled-components";
import Switch from "@mui/material/Switch";

type CategoryProps = {
  $backgroundColor?: string
}

export const StyledSwitch = styled(Switch)<CategoryProps>`
  padding: 6px;
  .Mui-checked {
    color: #ffffff;
  }
  .MuiSwitch-thumb {
    background-color: ${props => (props.$backgroundColor ? props.$backgroundColor : "#8083A3")};
  }
  .MuiSwitch-track {
    background-color: #f3f4f9;
    border-radius: 12px;
  }
  .Mui-checked + .MuiSwitch-track {
    background-color: #6b59cc;
    opacity: unset;
  }
`;
