import { Button, Grid } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CategoryProps = {
  $background?: any
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
  height: calc(100% - 140px);
  align-content: flex-start;
`;

export const EventCalendar = styled(Grid)`
  gap: 40px;
  padding: 35px 30px 20px 35px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
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

export const AddNew = styled.img`
  width: 17px;
  height: 17px;
`;

export const AddNewGrid = styled(Grid)`
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

export const EditButtons = styled(Button)<CategoryProps>`
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
  background-color: ${props => (props.$background ? props.$background : "#fff")};
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

export const AllEventsGrid = styled(Grid)`
  overflow-y: auto;
  gap: 20px;
`;

export const AddNewEventLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
`;

export const EditInfoGrid = styled(Grid)`
  padding: 20px;
  width: 300px;
  height: 400px;
  overflow-x: auto;
  gap: 15px;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  .MuiInputBase-root {
    border-radius: unset;
  }
  fieldset {
    border: unset;
    border-bottom: 1px solid #eceef5;
  }
  input {
    padding: unset;
    padding: 16px 0px 3px;
  }
  button {
    margin-bottom: -10px;
    padding: 3px;
  }
`;

export const TimePickerGrid = styled(Grid)`
  flex-direction: column;
  .MuiStack-root {
    padding-top: unset;
    overflow: unset;
  }
  .MuiTextField-root {
    min-width: unset;
  }
`;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  .MuiInputBase-root {
    border-radius: unset;
  }
  fieldset {
    border: unset;
    border-bottom: 1px solid #eceef5;
  }
  input {
    padding: unset;
    padding: 16px 0px 3px;
  }
  button {
    margin-bottom: -10px;
    padding: 3px;
  }
`;

export const DeleteUser = styled(Grid)`
  transition: all 0.3s;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 3;
  &:hover .DeleteUserImg {
    opacity: 1;
  }
`;

export const DeleteUserImgGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 238, 245);
  opacity: 0;
  transition: all 0.5s;
`;

export const DeleteUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const MembersIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
`;

export const Box = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  height: 35%;
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  align-content: flex-start;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  &:focus-visible {
    outline: unset;
  }
`;

export const MembersAvatarButton = styled(Button)`
  all: unset;
  border: 1px solid #eceef5;
  border-radius: 8px;
  align-items: center;
  gap: 20px;
  height: 55px;
  width: calc(100% - 25px);
  padding: 0px 10px;
  display: flex;
  cursor: pointer;
  span {
    display: none;
  }
  &:hover {
    background: #eceef5;
  }
`;

export const MembersImg = styled.img`
  width: 35px;
  height: 35px;
`;
