import { Button, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import styled from "styled-components";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Link } from "react-router-dom";
import { Form } from "formik";

type CategoryProps = {
  $background?: string
}

export const Wrapper = styled(Grid)`
  height: calc(100% - 85px);
`;

export const Events = styled(Grid)`
  border-right: 1px solid #eceef5;
  height: 100%;
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

export const SelectCategory = styled(Grid)`
  gap: 40px;
  padding: 35px 30px 20px 35px;
`;

export const GeneralInformationGrid = styled(Grid)`
  flex-direction: column;
  height: auto;
  gap: 30px;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 90%;
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

export const StyledTimePicker = styled(TimePicker)`
  width: 90%;
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

export const Members = styled(Grid)`
  height: 200px;
  gap: 20px;
  border-bottom: 1px solid #8083a3;
`;

export const PlusImg = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
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

export const UserGrid = styled(Grid)`
  width: 24%;
  height: 55px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eceef5;
  border-radius: 8px;
`;

export const MembersImg = styled.img`
  width: 35px;
  height: 35px;
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

export const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  all: unset;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
