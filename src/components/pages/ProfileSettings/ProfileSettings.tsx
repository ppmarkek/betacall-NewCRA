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
  GeneralInformationGrid,
  InputGrid,
  PlusImg,
  UpdateSettings,
  ButtonImg,
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
import Plus from "../../../assets/Icon/Plus.svg";
import Billing from "../../../assets/Icon/Billing.svg";
import Notifications from "../../../assets/Icon/Notifications.svg";
import SelectCategoryImg from "../../../assets/Image/SelectCategory.svg";
import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import DeactivateAccount from "../../../assets/Icon/DeactivateAccount.svg";

const ProfileSettings = () => {
  const [category, setCategory] = useState("None");
  const [AddEmail, setAddEmail] = useState(false);
  const [AddPhoneNumber, setAddPhoneNumber] = useState(false);

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

  const SocialCategoty = [
    {
      Text: "Instagram",
      value: 10,
    },
    {
      Text: "Facebook",
      value: 20,
    },
  ];
  const LanguageCategoty = [
    {
      Text: "Latvian",
      value: 10,
    },
    {
      Text: "Russian",
      value: 20,
    },
    {
      Text: "English",
      value: 30,
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
        {category === "None" ? (
          <Grid
            container
            height={"100%"}
            alignContent={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <img src={SelectCategoryImg} alt='Image' />
            <SelectCategoryText container>
              <Text variant={"H1"}>Select category</Text>
              <Text variant={"LIGHT"}>
                You can select required category to setup details about your account
              </Text>
            </SelectCategoryText>
          </Grid>
        ) : (
          <></>
        )}
        {category === "General information" ? (
          <GeneralInformationGrid container>
            <Text variant={"H4"}>General information</Text>
            <InputGrid container>
              <Grid container gap={"20px"} width={"440px"} flexDirection={"column"}>
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Full name"}
                  inputValue={"Johanna Stevens"}
                  IconType={"Name"}
                  text={"Enter your name"}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Email"}
                  IconType={"Email"}
                  text={"Start typing …"}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Phone"}
                  IconType={"Calls"}
                  text={"Start typing …"}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Address line"}
                  IconType={"Address"}
                  text={"Start typing …"}
                />
                <Input
                  variant={"Select"}
                  width={"440px"}
                  title={"Social"}
                  text={"Select social profile"}
                  SelectArray={SocialCategoty}
                />
              </Grid>
              <Grid container gap={"20px"} width={"440px"} flexDirection={"column"}>
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Role"}
                  IconType={"Role"}
                  inputValue={"Developer"}
                  text={"Start typing …"}
                />
                <Grid container alignItems={"center"} height={"67px"}>
                  {AddEmail === false ? (
                    <Grid container gap={"10px"}>
                      <PlusImg src={Plus} alt='Add Email' onClick={() => setAddEmail(true)} />
                      <Text variant={"BOLD"} color='#8083A3'>
                        Add Email
                      </Text>
                    </Grid>
                  ) : (
                    <Grid height={"67px"}>
                      <Input
                        variant={"LightInput"}
                        width={"440px"}
                        title={"Email"}
                        IconType={"Email"}
                        text={"Start typing …"}
                      />
                    </Grid>
                  )}
                </Grid>
                <Grid container alignItems={"center"} height={"67px"}>
                  {AddPhoneNumber === false ? (
                    <Grid container gap={"10px"}>
                      <PlusImg src={Plus} alt='Add Email' onClick={() => setAddPhoneNumber(true)} />
                      <Text variant={"BOLD"} color='#8083A3'>
                        Add Phone Number
                      </Text>
                    </Grid>
                  ) : (
                    <Grid height={"67px"}>
                      <Input
                        variant={"LightInput"}
                        width={"440px"}
                        title={"Phone"}
                        IconType={"Calls"}
                        text={"Start typing …"}
                      />
                    </Grid>
                  )}
                </Grid>
                <Input
                  variant={"Select"}
                  width={"440px"}
                  title={"Language"}
                  text={"Select language"}
                  SelectArray={LanguageCategoty}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Link"}
                  IconType={"Link"}
                  text={"Enter link to your profile"}
                />
              </Grid>
            </InputGrid>
          </GeneralInformationGrid>
        ) : (
          <></>
        )}
        {category !== "None" ? (
          <UpdateSettings container justifyContent={"space-between"}>
            <Grid container gap={"10px"} width={"auto"}>
              <Button variant={"FilledActive"} width={"170px"}>
                Update Settings
              </Button>
              <Button variant={"FilledRestingLight"} width={"130px"}>
                Cancel
              </Button>
            </Grid>
            <Button variant={"FilledRestingLight"} width={"200px"}>
              <ButtonImg src={DeactivateAccount} alt='icon' />
              Deactivate Account
            </Button>
          </UpdateSettings>
        ) : (
          <></>
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default ProfileSettings;
