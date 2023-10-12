import { Button, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import AlarmIcon from "@mui/icons-material/Alarm";
import ModeIcon from "@mui/icons-material/Mode";
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
