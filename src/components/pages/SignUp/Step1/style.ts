import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 85px);
`;

export const Title = styled(Grid)`
  width: 400px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 60px;
`;

export const OrGrid = styled(Grid)`
  align-items: center;
  padding: 48px 0px;
  gap: 16px;
  width: unset;
`;

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 420px;
  height: 50px;
  border: 1px solid #eceef5;
  border-radius: 10px;
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #8083a3;
`;

export const IconGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48px;
  border-right: 1px solid #eeeeee;
`;

export const HoverGrid = styled(Grid)`
  padding-top: 14px;
  padding-left: 16px;
  height: 100%;
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #8083a3;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.4s;
  &:hover {
    color: #ffffff;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #6b59cc;
  }
`;
