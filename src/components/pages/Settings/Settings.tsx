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
  CompanyInformationGrid,
  InputGrid,
  TeamsAndUsers,
  SelectStatus,
  Status,
  AddIconGrid,
  UsersGrid,
  ProfileStatus,
  UserStatus,
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
import Input from "../../atoms/Input/Input";
import AvatarIcon from "../../../assets/Image/Avatar.svg";
import AddIcon from "../../../assets/SettingsIcon/AddIcon.svg";
import ThreeArrow from "../../../assets/SettingsIcon/ThreeArrow.svg";

const Settings = () => {
  const [category, setCategory] = useState("None");
  const [status, setStatus] = useState("All");

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

  const LocationCategoty = [
    {
      Text: "Unites States of America",
      value: 10,
    },
    {
      Text: "Latvia",
      value: 20,
    },
    {
      Text: "Germany",
      value: 30,
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

  const TeamsUsersCategoty = [
    {
      Text: "Can manage",
      value: 10,
    },
    {
      Text: "Assign role",
      value: 20,
    },
  ];

  const Users = [
    {
      Name: "Nicholas Gordon",
      Icon: AvatarIcon,
      Value: 10,
      Categoty: "Business",
      ProfileStatus: "#28C345",
    },
    {
      Name: "Marvin Lambert",
      Icon: AvatarIcon,
      Value: 20,
      Categoty: "Private",
      ProfileStatus: "#F6933E",
    },
  ];

  return (
    <Wrapper container xs={12}>
      <Profile xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AvatarImg} alt='Avatar' />
          <Grid textAlign={"center"}>
            <Text variant={"H3"}>WhiteUI.Store</Text>
            <Text variant={"LIGHT"}>25 Employees</Text>
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
        {category === "Company information" && (
          <CompanyInformationGrid container>
            <Text variant={"H4"}>Company information</Text>
            <InputGrid container>
              <Grid container gap={"20px"} width={"440px"} flexDirection={"column"}>
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Company name"}
                  inputValue={"WhiteUI.Store"}
                  IconType={"Company"}
                  text={"Enter your company name"}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Billing address"}
                  IconType={"Address"}
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
                  title={"Number of employees"}
                  IconType={"Name"}
                  text={"Start typing …"}
                />
              </Grid>
              <Grid container gap={"20px"} width={"440px"} flexDirection={"column"}>
                <Input
                  variant={"Select"}
                  width={"440px"}
                  title={"Location"}
                  text={"Select location"}
                  SelectDefaultValue={"10"}
                  SelectArray={LocationCategoty}
                />
                <Input
                  variant={"LightInput"}
                  width={"440px"}
                  title={"Zip code"}
                  IconType={"Email"}
                  text={"Start typing …"}
                />
                <Input
                  variant={"Select"}
                  width={"440px"}
                  title={"Location"}
                  text={"Select language"}
                  SelectArray={LanguageCategoty}
                />
              </Grid>
            </InputGrid>
          </CompanyInformationGrid>
        )}
        {category === "Teams & Users" && (
          <TeamsAndUsers container>
            <Grid container justifyContent={"space-between"}>
              <Grid xs={6}>
                <Text variant={"H4"}>Teams & Users</Text>
              </Grid>
              <SelectStatus container xs={6}>
                <Status
                  container
                  onClick={() => setStatus("All")}
                  $color={status === "All" ? "#1A1C1D" : "#8083A3"}
                  $borderColor={status === "All" ? "#ECEEF5" : "#fff"}
                >
                  All
                </Status>
                <Status
                  container
                  onClick={() => setStatus("Business")}
                  $color={status === "Business" ? "#1A1C1D" : "#8083A3"}
                  $borderColor={status === "Business" ? "#ECEEF5" : "#fff"}
                >
                  Business
                </Status>
                <Status
                  container
                  onClick={() => setStatus("Private")}
                  $color={status === "Private" ? "#1A1C1D" : "#8083A3"}
                  $borderColor={status === "Private" ? "#ECEEF5" : "#fff"}
                >
                  Private
                </Status>
                <AddIconGrid container>
                  <img src={AddIcon} alt='Add' />
                </AddIconGrid>
              </SelectStatus>
            </Grid>
            <Grid container gap={"10px"}>
              {status === "All"
                ? Users.map((x: any) => (
                    <UsersGrid container key={x.Categoty}>
                      <Grid container alignItems={"center"} gap={"20px"} xs={6}>
                        <Grid position={"relative"} height={"40px"} width={"40px"}>
                          <img src={x.Icon} alt='Avatar' />
                          <ProfileStatus />
                        </Grid>
                        <Text variant={"BOLD"}>{x.Name}</Text>
                      </Grid>
                      <Grid
                        container
                        xs={6}
                        gap={"40px"}
                        justifyContent={"flex-end"}
                        alignContent={"center"}
                      >
                        <Grid>
                          <Input
                            variant={"Select"}
                            width={"180px"}
                            text={"Select location"}
                            SelectDefaultValue={x.Value}
                            SelectArray={TeamsUsersCategoty}
                          />
                        </Grid>
                        <Grid container gap={"5px"} width={"auto"} alignItems={"center"}>
                          <UserStatus
                            container
                            $background={
                              x.Categoty === "Business"
                                ? "rgba(107, 89, 204, 0.1)"
                                : "rgba(246, 147, 62, 0.15)"
                            }
                          >
                            <Text
                              variant={"BOLD"}
                              color={x.Categoty === "Business" ? "#6B59CC" : "#F6933E"}
                            >
                              {x.Categoty}
                            </Text>
                          </UserStatus>
                          <AddIconGrid container>
                            <img src={ThreeArrow} alt='Three Arrow Icon' />
                          </AddIconGrid>
                        </Grid>
                      </Grid>
                    </UsersGrid>
                  ))
                : Users.map(
                    (x: any) =>
                      x.Categoty === status && (
                        <UsersGrid container key={x.Categoty}>
                          <Grid container alignItems={"center"} gap={"20px"} xs={6}>
                            <Grid position={"relative"} height={"40px"} width={"40px"}>
                              <img src={x.Icon} alt='Avatar' />
                              <ProfileStatus />
                            </Grid>
                            <Text variant={"BOLD"}>{x.Name}</Text>
                          </Grid>
                          <Grid
                            container
                            xs={6}
                            gap={"40px"}
                            justifyContent={"flex-end"}
                            alignContent={"center"}
                          >
                            <Grid>
                              <Input
                                variant={"Select"}
                                width={"180px"}
                                text={"Select location"}
                                SelectDefaultValue={x.Value}
                                SelectArray={TeamsUsersCategoty}
                              />
                            </Grid>
                            <Grid container gap={"5px"} width={"auto"} alignItems={"center"}>
                              <UserStatus
                                container
                                $background={
                                  x.Categoty === "Business"
                                    ? "rgba(107, 89, 204, 0.1)"
                                    : "rgba(246, 147, 62, 0.15)"
                                }
                              >
                                <Text
                                  variant={"BOLD"}
                                  color={x.Categoty === "Business" ? "#6B59CC" : "#F6933E"}
                                >
                                  {x.Categoty}
                                </Text>
                              </UserStatus>
                              <AddIconGrid container>
                                <img src={ThreeArrow} alt='Three Arrow Icon' />
                              </AddIconGrid>
                            </Grid>
                          </Grid>
                        </UsersGrid>
                      ),
                  )}
            </Grid>
          </TeamsAndUsers>
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default Settings;
