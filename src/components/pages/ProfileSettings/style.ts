import { Grid } from "@mui/material";
import styled from "styled-components";

type CategoryProps = {
  $borderBottom: string
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

export const Category = styled(Grid)<CategoryProps>`
  height: 100px;
  border-bottom: 1px solid #eceef5;
  gap: 22px;
  align-items: center;
  border-bottom: ${props => (props.$borderBottom ? props.$borderBottom : "1px solid #eceef5")};
`;

export const CategoryImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const SelectCategory = styled(Grid)`
  gap: 37px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SelectCategoryText = styled(Grid)`
  width: 390px;
  gap: 10px;
  text-align: center;
  justify-content: center;
`;
