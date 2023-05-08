import {
  Avatar,
  Category,
  CategoryImg,
  Profile,
  SelectCategory,
  SelectCategoryBorder,
  SelectCategoryButton,
  SelectCategoryText,
  StyledAvatarImg,
  Wrapper,
} from "./style";
import AvatarImg from "../../../assets/Image/FullSizeAvatar.svg";
import { Grid } from "@mui/material";
import Text from "../../atoms/Text/Text";
import GeneralInformationSilver from "../../../assets/Icon/GeneralInformationSilver.svg";
import SecuritySilver from "../../../assets/Icon/SecuritySilver.svg";
import BillingSilver from "../../../assets/Icon/BillingSilver.svg";
import NotificationsSilver from "../../../assets/Icon/NotificationsSilver.svg";
import GeneralInformation from "../../../assets/Icon/GeneralInformation.svg";
import Security from "../../../assets/Icon/Security.svg";
import Billing from "../../../assets/Icon/Billing.svg";
import Notifications from "../../../assets/Icon/Notifications.svg";
import SelectCategoryImg from "../../../assets/Image/SelectCategory.svg";
import { useState } from "react";

const ProfileSettings = () => {
  const [category, setCategory] = useState("None");

  const allCategory = [
    {
      Icon: GeneralInformationSilver,
      ActiveIcon: GeneralInformation,
      Title: "General information",
      Text: "Profile foto, name & language",
      Border: "Block",
    },
    {
      Icon: SecuritySilver,
      ActiveIcon: Security,
      Title: "Security",
      Text: "Password & security questions",
      Border: "Block",
    },
    {
      Icon: BillingSilver,
      ActiveIcon: Billing,
      Title: "Billing",
      Text: "Setup payment methods",
      Border: "Block",
    },
    {
      Icon: NotificationsSilver,
      ActiveIcon: Notifications,
      Title: "Notifications",
      Text: "Set your email notifications",
      Border: "none",
    },
  ];

  return (
    <Wrapper container xs={12}>
      <Profile xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AvatarImg} alt='Avatar' />
          <Grid textAlign={"center"}>
            <Text variant={"H3"}>Johanna Stevens</Text>
            <Text variant={"LIGHT"}>UI/UX Designer</Text>
          </Grid>
        </Avatar>
        <Grid container>
          {allCategory.map((x: any) => (
            <Category container key={x.Icon}>
              <SelectCategoryButton
                $background={category === x.Title ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory(x.Title)}
              >
                {category === x.Title ? (
                  <CategoryImg src={x.ActiveIcon} alt='Icon' />
                ) : (
                  <CategoryImg src={x.Icon} alt='Icon' />
                )}
                <Grid>
                  <Text variant={"BOLD"} color={category === x.Title ? "#6B59CC" : "#1A1C1D"}>
                    {x.Title}
                  </Text>
                  <Text variant={"LIGHT"}>{x.Text}</Text>
                </Grid>
              </SelectCategoryButton>
              <SelectCategoryBorder $display={x.Border} />
            </Category>
          ))}
        </Grid>
      </Profile>
      <SelectCategory container xs={9}>
        <img src={SelectCategoryImg} alt='Image' />
        <SelectCategoryText container>
          <Text variant={"H1"}>Select category</Text>
          <Text variant={"LIGHT"}>
            You can select required category to setup details about your account
          </Text>
        </SelectCategoryText>
      </SelectCategory>
    </Wrapper>
  );
};

export default ProfileSettings;
