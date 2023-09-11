import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 900px;
  height: 100%;
  gap: 44px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b59cc;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
