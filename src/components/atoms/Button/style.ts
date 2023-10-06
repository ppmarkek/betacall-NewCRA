import styled from "styled-components";
import { Button } from "@mui/material";

type ButtonStyleProps = {
  $width?: string
  $height: string
}

export const FilledRestingLight = styled(Button)<ButtonStyleProps>`
  all: unset;
  text-decoration: none;
  color: #8083a3;
  background: #ffffff;
  border: 1px solid #eceef5;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  width: ${props => props.$width || "98px"};
  height: ${props => props.$height || "50px"};
  transition: all 0.4s;
  span {
    display: none;
  }
  &:hover {
    border: 1px solid #6b59cc;
    color: #ffffff;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #6b59cc;
    border-radius: 8px;
  }
`;

export const FilledActive = styled(Button)<ButtonStyleProps>`
  all: unset;
  cursor: pointer;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: #6b59cc;
  border-radius: 10px;
  border: 1px solid #6b59cc;
  height: ${props => props.$height || "50px"};
  transition: all 0.4s;
  text-align: center;
  width: ${props => props.$width || "98px"};
  &:hover {
    color: #8083a3;
    background: #fff;
    border: 1px solid #eceef5;
  }
  span {
    display: none;
  }
`;
