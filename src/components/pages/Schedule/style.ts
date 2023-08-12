import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CategoryProps = {
  $background?: string
  $color?: string
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

export const DateGrid = styled(Grid)`
  justify-content: space-between;
  align-items: center;
`;

export const AddNewEventByDate = styled.img`
  width: 17px;
  height: 17px;
`;

export const AddNewEventByDateGrid = styled(Grid)`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid #eceef5;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  background-color: #fff;
  &:hover {
    background-color: #eceef5;
  }
`;

export const EventGrid = styled(Grid)`
  justify-content: space-between;
  align-items: center;
`;

export const EventTime = styled(Grid)`
  gap: 10px;
  align-items: center;
`;

export const TimeImg = styled.img`
  width: 17px;
  height: 17px;
`;

export const TimeImgGrid = styled(Grid)`
  width: 35px;
  height: 35px;
  border: 1px solid #eceef5;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const AboutEventGrid = styled(Grid)`
  gap: 25px;
  align-items: center;
`;

export const GroupEventGrid = styled(Grid)<CategoryProps>`
  background: ${props => (props.$background ? props.$background : "rgba(107, 89, 204, 0.1)")};
  color: ${props => (props.$color ? props.$color : "#6B59CC")};
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  width: 85px;
  height: 35px;
  border-radius: 10px;
`;

export const EditEventGrid = styled(Grid)`
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;

export const EditButton = styled(Button)`
  all: unset;
  span {
    display: none;
  }
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid #eceef5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  background-color: #fff;
  &:hover {
    background-color: #eceef5;
  }
`;

export const EventsLength = styled(Grid)`
  width: 30px;
  height: 20px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  background: #28c345;
  border-radius: 12px;
`;
