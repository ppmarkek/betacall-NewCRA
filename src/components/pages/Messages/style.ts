import { Button, Grid, Input } from "@mui/material";
import {
  Send,
  Add,
  SentimentSatisfiedAlt,
  MoreHoriz,
  Mode,
  Alarm,
  Star,
  Folder,
} from "@mui/icons-material";
import styled from "styled-components";

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

export const StyledFolderIcon = styled(Folder)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledStarIcon = styled(Star)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledAlarmIcon = styled(Alarm)<CategoryProps>`
  color: ${props => (props.$color ? props.$color : "rgba(128, 131, 163, 1)")};
  width: 22px;
  height: 22px;
`;

export const StyledModeIcon = styled(Mode)<CategoryProps>`
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

export const StyledMoreHorizIcon = styled(MoreHoriz)`
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

export const InputGrid = styled(Grid)`
  height: 70px;
  background: #f3f4f9;
  border-radius: 12px;
  padding: 10px;
`;

export const StyledSentimentSatisfiedAltIcon = styled(SentimentSatisfiedAlt)`
  color: rgba(128, 131, 163, 1);
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: rgba(107, 89, 204, 1);
  }
`;

export const StyledAddIcon = styled(Add)`
  color: rgba(128, 131, 163, 1);
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: rgba(107, 89, 204, 1);
  }
`;

export const StyledSendIcon = styled(Send)`
  color: rgba(255, 255, 255, 1);
  width: 25px;
  height: 25px;
`;

export const StyledInput = styled(Input)`
  all: unset;
  width: 100%;
  height: 40px;
  font-family: "Lato";
  font-style: normal;
  display: flex;
  align-items: center;
  &::before {
    all: unset;
  }
  &::after {
    all: unset;
  }
`;
