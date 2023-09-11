import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 900px;
  height: 100%;
`;

export const Title = styled(Grid)`
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-bottom: 65px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const FormGrid = styled(Grid)`
  width: 420px;
  flex-direction: column;
`;
