import { Grid } from "@mui/material";
import {
  Profile,
  StyledAvatarImg,
  Wrapper,
  Avatar,
  SelectCategoryButton,
  Category,
  CategoryImg,
  SelectCategoryBorder,
  SelectCategory,
  SelectCategoryText,
} from "./style";
import Text from "../../atoms/Text/Text";
import { useState } from "react";
import AvatarImg from "../../../assets/Image/FullSizeAvatar.svg";
import CompanyInformation from "../../../assets/SettingsIcon/CompanyInformation.svg";
import CompanyInformationActive from "../../../assets/SettingsIcon/CompanyInformationActive.svg";
import Integrations from "../../../assets/SettingsIcon/Integrations.svg";
import IntegrationsActive from "../../../assets/SettingsIcon/IntegrationsActive.svg";
import Reports from "../../../assets/SettingsIcon/Reports.svg";
import ReportsActive from "../../../assets/SettingsIcon/ReportsActive.svg";
import TeamsUsers from "../../../assets/SettingsIcon/TeamsUsers.svg";
import TeamsUsersActive from "../../../assets/SettingsIcon/TeamsUsersActive.svg";
import SelectCategoryImg from "../../../assets/Image/SelectCategory.svg";

const Settings = () => {
  const [category, setCategory] = useState("None");

  const allCategory = [
    {
      Icon: CompanyInformation,
      ActiveIcon: CompanyInformationActive,
      Title: "Company information",
      Text: "Company photo, name & details",
      Border: "Block",
    },
    {
      Icon: TeamsUsers,
      ActiveIcon: TeamsUsersActive,
      Title: "Teams & Users",
      Text: "Add new users and create teams",
      Border: "Block",
    },
    {
      Icon: Reports,
      ActiveIcon: ReportsActive,
      Title: "Reports",
      Text: "Usage and actions reports",
      Border: "Block",
    },
    {
      Icon: Integrations,
      ActiveIcon: IntegrationsActive,
      Title: "Integrations",
      Text: "Setup app integrations",
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
        {category === "None" && (
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
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default Settings;
