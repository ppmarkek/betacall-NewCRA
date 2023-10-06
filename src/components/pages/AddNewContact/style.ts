import { Button, Grid } from "@mui/material";
import { Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CategoryProps = {
  $background?: string
}

export const Wrapper = styled(Grid)`
  height: calc(100% - 85px);
`;

export const GeneralInformationGrid = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
  padding: 35px 30px 20px 35px;
`;

export const InputGrid = styled(Grid)`
  padding-top: 25px;
  height: calc(100% - 85px);
`;

export const PlusImg = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export const Contacts = styled(Grid)`
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

export const CategoryImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const Border = styled(Grid)`
  margin: 0px 30px;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  all: unset;
`;

export const StyledForm = styled(Form)`
  height: 100%;
`;
