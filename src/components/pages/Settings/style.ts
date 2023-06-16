import { Button, Grid } from "@mui/material";
import styled from "styled-components";

type CategoryProps = {
  $display?: string
  $background?: string
}

export const Wrapper = styled(Grid)`
  height: calc(100% - 85px);
`;

export const Profile = styled(Grid)`
  justify-content: center;
  border-right: 1px solid #eceef5;
  height: 100%;
`;

export const Avatar = styled(Grid)`
  padding-top: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  gap: 10px;
`;

export const StyledAvatarImg = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 25px;
`;

export const Category = styled(Grid)`
  height: 100px;
  align-items: center;
`;

export const CategoryImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const SelectCategory = styled(Grid)`
  gap: 40px;
  padding: 35px 30px 20px 35px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const SelectCategoryText = styled(Grid)`
  width: 390px;
  gap: 10px;
  text-align: center;
  justify-content: center;
`;

export const SelectCategoryButton = styled(Button)<CategoryProps>`
  all: unset;
  span {
    display: none;
  }
  cursor: pointer;
  width: 100%;
  height: 72px;
  border-radius: 6px;
  transition: all 0.5s;
  display: flex;
  gap: 22px;
  align-items: center;
  margin: 0 15px;
  padding: 0 20px;
  background: ${props => (props.$background ? props.$background : "#fff")};
  &:hover {
    background: #f8f9fc;
  }
`;

export const SelectCategoryBorder = styled(Grid)<CategoryProps>`
  border-bottom: 1px solid #eceef5;
  width: 100%;
  margin: 0 30px;
  display: ${props => (props.$display ? props.$display : "block")};
`;
