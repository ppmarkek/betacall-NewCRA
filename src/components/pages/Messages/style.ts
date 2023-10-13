import { Button, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import AlarmIcon from "@mui/icons-material/Alarm";
import ModeIcon from "@mui/icons-material/Mode";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type CategoryProps = {
  $background?: any
  $color?: string
}

export const Wrapper = styled(Grid)`
  height: calc(100% - 85px);
`;

export const Category = styled(Grid)`
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

export const Border = styled(Grid)`
  margin: 0px 30px;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const NewCategory = styled(Grid)`
  height: calc(100% - 140px);
  align-content: flex-start;
`;

export const StyledFolderIcon = styled(FolderIcon)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledStarIcon = styled(StarIcon)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledAlarmIcon = styled(AlarmIcon)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledModeIcon = styled(ModeIcon)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const MessagesList = styled(Grid)`
  height: 100%;
`;

export const AllMessages = styled(Grid)`
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  gap: 10px;
`;

export const SelectChatButton = styled(Button)<CategoryProps>`
  all: unset;
  span {
    display: none;
  }
  cursor: pointer;
  width: 100%;
  height: 90px;
  border-radius: 12px;
  transition: all 0.5s;
  background: ${props => (props.$background ? props.$background : "#fff")};
  &:hover {
    background: #f8f9fc;
  }
`;

export const AvaratImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;

export const SelectChatGrid = styled(Grid)`
  padding: 15px;
  height: 100%;
  justify-content: space-between;
`;

export const StyledMoreHorizIcon = styled(MoreHorizIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
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

export const SelectMessage = styled(Grid)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const SelectMessageImg = styled.img`
  width: 250px;
  height: 200px;
`;

export const Chat = styled(Grid)`
  height: 100%;
  flex-direction: column;
`;

export const MessagesGrid = styled(Grid)`
  height: 80%;
  overflow: auto;
  flex-direction: column;
  gap: 10px;
`;

export const MyMessageGrid = styled(Grid)`
  justify-content: flex-end;
  gap: 10px;
  max-width: 80%;
`;

export const MyMessageText = styled(Grid)`
  border-radius: 17px 0px 17px 17px;
  background: #6b59cc;
  padding: 5px 15px 5px 20px;
`;

export const FrendsMessageGrid = styled(Grid)`
  gap: 10px;
  max-width: 80%;
`;

export const FrendsMessageText = styled(Grid)`
  border-radius: 0px 17px 17px 17px;
  background: #f3f4f9;
  padding: 5px 15px 5px 20px;
`;
