import { Button, Grid } from "@mui/material";
import styled from "styled-components";

type CategoryProps = {
  $display?: string
  $background?: string
  $color?: string
  $borderColor?: string
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

export const CompanyInformationGrid = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
`;

export const InputGrid = styled(Grid)`
  justify-content: space-between;
  height: 450px;
`;

export const TeamsAndUsers = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
`;

export const SelectStatus = styled(Grid)`
  gap: 20px;
  justify-content: flex-end;
`;

export const Status = styled(Grid)<CategoryProps>`
  width: auto;
  padding: 0px 30px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #8083a3;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid #fff;
  cursor: pointer;
  color: ${props => props.$color || "#8083a3"};
  border-color: ${props => props.$borderColor || "#fff"};
  transition: all 0.5s;
  &:hover {
    color: #1a1c1d;
  }
`;

export const AddIconGrid = styled(Grid)`
  border: 1px solid #eceef5;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UsersGrid = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0px 20px;
`;

export const ProfileStatus = styled(Grid)<CategoryProps>`
  position: absolute;
  bottom: -4px;
  right: -4px;
  background: ${props => (props.$background ? props.$background : "#28c345")};
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  border-radius: 20px;
`;

export const UserStatus = styled(Grid)<CategoryProps>`
  justify-content: center;
  align-items: center;
  background: ${props => (props.$background ? props.$background : "rgba(107, 89, 204, 0.1)")};
  width: 95px;
  height: 45px;
  border-radius: 8px;
`;
