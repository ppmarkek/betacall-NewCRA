import { Button, Drawer, Grid } from "@mui/material";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhoneIcon from "@mui/icons-material/Phone";
import ForumIcon from "@mui/icons-material/Forum";
import CloseIcon from "@mui/icons-material/Close";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";

type CategoryProps = {
  $background?: any
  $color?: string
  $width?: string
  $height?: string
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

export const AllContacts = styled(Grid)`
  flex-direction: column;
  gap: 10px;
  padding: 35px 30px 20px 35px;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const ContactGrid = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-radius: 12px;
  cursor: pointer;
  padding: 0px 20px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 6px 8px 0px rgba(153, 155, 168, 0.1);
  }
`;

export const AvatarImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
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

export const ButtonsAbout = styled(Button)<CategoryProps>`
  all: unset;
  span {
    display: none;
  }
  cursor: pointer;
  width: ${props => (props.$width ? props.$width : "35px")};
  height: ${props => (props.$height ? props.$height : "35px")};
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

export const StryledMoreHorizIcon = styled(MoreHorizIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledForumIcon = styled(ForumIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledScreenShareIcon = styled(ScreenShareIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledDeleteSweepIcon = styled(DeleteSweepIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledEditIcon = styled(EditIcon)`
  color: rgba(128, 131, 163, 1);
  width: 20px;
  height: 20px;
`;

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    border: unset;
    box-shadow: 0px 6px 20px 0px rgba(153, 155, 168, 0.1);
    width: 40%;
    padding: 25px 40px;
  }
`;

export const CloseGrid = styled(Grid)`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const MenuAvatar = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 25px;
`;

export const AvatarGrid = styled(Grid)`
  padding-top: 60px;
  padding-left: 100px;
  flex-direction: column;
  gap: 5px;
`;

export const InfoGrid = styled(Grid)`
  padding-top: 25px;
  gap: 30px;
`;

export const ContactsLength = styled(Grid)`
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

export const EditInfoGrid = styled(Grid)`
  padding: 20px;
  width: 300px;
  height: 400px;
  overflow-x: auto;
  gap: 15px;
`;
