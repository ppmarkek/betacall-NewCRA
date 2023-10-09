import { Typography } from "@mui/material";
import styled from "styled-components";

type TextStyleProps = {
  $small?: boolean
  $color?: string
}

export const H1 = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const H2 = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const H3 = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const H4 = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const H5 = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const Bold = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: ${props => (props.$small ? "16px" : "18px")};
  color: ${props => props.$color || "#1A1C1D"};
  line-height: 21px;
`;

export const Regular = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: ${props => (props.$small ? "16px" : "18px")};
  line-height: 21px;
  color: ${props => props.$color || "#1A1C1D"};
`;

export const Light = styled(Typography)<TextStyleProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: ${props => (props.$small ? "16px" : "18px")};
  line-height: 21px;
  color: #8083a3;
`;

export const Error = styled(Typography)<TextStyleProps>`
  color: rgb(211, 47, 47);
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
`;
