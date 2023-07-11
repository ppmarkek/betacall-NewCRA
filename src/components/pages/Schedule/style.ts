import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CategoryProps = {
  $background?: string
}

export const Wrapper = styled(Grid)`
  height: calc(100% - 85px);
`;

export const Events = styled(Grid)`
  border-right: 1px solid #eceef5;
  height: 100%;
  gap: 30px;
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

export const NewGroup = styled(Grid)`
  gap: 30px;
  height: calc(100% - 140px);
`;

export const EventCalendar = styled(Grid)`
  gap: 40px;
  padding: 35px 30px 20px 35px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NoEventsFound = styled(Grid)`
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
