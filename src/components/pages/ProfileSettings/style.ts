import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
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

export const GeneralInformationGrid = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
`;

export const InputGrid = styled(Grid)`
  justify-content: space-between;
  height: 450px;
`;

export const PlusImg = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export const UpdateSettings = styled(Grid)`
  justify-content: space-between;
`;

export const ButtonImg = styled.img`
  margin-right: 10px;
`;

export const SecurityGrid = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
`;

export const ChangePasswordGrid = styled(Grid)`
  flex-direction: column;
  gap: 30px;
`;

export const SecurityQuestions = styled(Grid)`
  flex-direction: column;
  gap: 30px;
`;

export const PaymentDetailsGrid = styled(Grid)`
  height: 270px;
  border: 1px solid #eceef5;
  border-radius: 8px;
`;

export const PaymentDetailsPoints = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 0 20px;
`;

export const PaymentDetailsLink = styled(Link)`
  text-decoration: none;
  color: #6b59cc;
  font-weight: 700;
  font-size: 14px;
  font-family: "Lato";
`;

export const RecentPaymentsGrid = styled(Grid)`
  height: 270px;
  border: 1px solid #eceef5;
  border-radius: 8px;
`;

export const RecentPaymentsPoints = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 0 20px;
`;
