import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  $backgroundColor?: string
}

export const Wrapper = styled(Grid)`
  flex-direction: column;
  flex-direction: row-reverse;
`;

export const LeftNavigation = styled(Grid)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transition: width 0.3s;
  overflow-x: hidden;
  min-height: 900px;
  height: 100%;
  flex-direction: column;
  padding: 22px 0px;
  border-right: 1px solid #eceef5;
  width: 80px;
`;

export const ButtonsGrid = styled(Grid)`
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: auto;
`;

export const ImageGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #fff;
  &:hover {
    border-color: #eceef5;
  }
`;

export const StyledLink = styled(Link)<LinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 65px;
  gap: 20px;
  background-color: ${props => (props.$backgroundColor ? props.$backgroundColor : "#fff")};
`;

export const StyledImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const TopNavigation = styled(Grid)`
  height: 85px;
  align-items: space-between;
  flex-direction: column;
  justify-content: center;
  padding: 0px 35px;
  border-bottom: 1px solid #eceef5;
`;

export const BorderGrid = styled(Grid)`
  gap: 2px;
  width: 26px;
  height: 26px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NovigButton = styled(Button)`
  all: unset;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid #eceef5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeButton = styled(Grid)`
  border-radius: 8px;
  transition: all 0.5s;
  label {
    transition: all 0.15s;
    border-top: 2px solid #8083a3;
    width: 14px;
    cursor: pointer;
  }
  span {
    display: none;
  }
  &:hover {
    background-color: #eceef5;
  }
  .Active {
    background-color: #eceef5;
  }
  .Active #Top {
    transition: all 0.15s;
    border-color: #6b59cc;
    margin-left: 6px;
  }
  .Active #Bottom {
    transition: all 0.15s;
    border-color: #6b59cc;
    margin-right: 6px;
  }
  .Active #Middle {
    transition: all 0.15s;
    border-color: #6b59cc;
  }
`;

export const AvatarButton = styled(Button)`
  all: unset;
  border-radius: 8px;
  span {
    display: none;
  }
  &:hover {
    all: unset;
    cursor: pointer;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 175px;
  justify-content: center;
  gap: 20px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #222526;
`;
