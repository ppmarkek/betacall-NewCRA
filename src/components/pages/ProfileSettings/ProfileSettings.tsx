import {
  Avatar,
  Category,
  CategoryImg,
  Profile,
  SelectCategory,
  SelectCategoryText,
  StyledAvatarImg,
  Wrapper,
} from "./style";
import AvatarImg from "../../../assets/Image/FullSizeAvatar.svg";
import { Grid } from "@mui/material";
import Text from "../../atoms/Text/Text";
import GeneralInformation from "../../../assets/Icon/GeneralInformation.svg";
import Security from "../../../assets/Icon/Security.svg";
import Billing from "../../../assets/Icon/Billing.svg";
import Notifications from "../../../assets/Icon/Notifications.svg";
import SelectCategoryImg from "../../../assets/Image/SelectCategory.svg";

const ProfileSettings = () => {
  const allCategory = [
    {
      Icon: GeneralInformation,
      Title: "General information",
      Text: "Profile foto, name & language",
      Border: "1px solid #eceef5",
    },
    {
      Icon: Security,
      Title: "Security",
      Text: "Password & security questions",
      Border: "1px solid #eceef5",
    },
    {
      Icon: Billing,
      Title: "Billing",
      Text: "Setup payment methods",
      Border: "1px solid #eceef5",
    },
    {
      Icon: Notifications,
      Title: "Notifications",
      Text: "Set your email notifications",
      Border: "unset",
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
        <Grid container padding={"0 32px"}>
          {allCategory.map((x: any) => (
            <Category $borderBottom={x.Border} container key={x.Icon}>
              <CategoryImg src={x.Icon} alt='Icon' />
              <Grid>
                <Text variant={"BOLD"}>{x.Title}</Text>
                <Text variant={"LIGHT"}>{x.Text}</Text>
              </Grid>
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
