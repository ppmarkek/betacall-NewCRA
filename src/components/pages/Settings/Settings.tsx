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
  ReportsGrid,
  CallsSstatisticsGrid,
  CallsSstatisticsBox,
  ProgressCalls,
  TopUsers,
  TinyColumnImg,
  TopUsersGrid,
  MostActiveUsers,
  MostActiveUsersGrid,
  MostActiveUsersImg,
  MostActiveUsersBox,
  UsageStatistics,
  IntegrationsGrid,
  IntegrationsSwich,
  IntegrationsImg,
  StyledPersonAddIcon,
  StyledLink,
  StyledDeleteSweepIcon,
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
import DateIcon from "../../../assets/SettingsIcon/DateIcon.svg";
import VideoCalls from "../../../assets/SettingsIcon/VideoCalls.svg";
import MessageIcon from "../../../assets/SettingsIcon/MessageIcon.svg";
import Dropbox from "../../../assets/SettingsIcon/dropbox.svg";
import Invision from "../../../assets/SettingsIcon/invision.svg";
import Jira from "../../../assets/SettingsIcon/jira.svg";
import Intercom from "../../../assets/SettingsIcon/intercom.svg";
import Trello from "../../../assets/SettingsIcon/trello.svg";
import ProductHunt from "../../../assets/SettingsIcon/producthunt.svg";
import Gdocs from "../../../assets/SettingsIcon/gdocs.svg";
import MultiLink from "./MultiLink.json";
import { Line, TinyColumn } from "@ant-design/charts";
import { Link } from "react-router-dom";
import Switch from "../../atoms/Switch/Switch";
import Button from "../../atoms/Button/Button";

const Settings = () => {
  const [category, setCategory] = useState("None");
  const [status, setStatus] = useState("All");
  const [switchOne, setSwitchOne] = useState(true);
  const [switchTwo, setSwitchTwo] = useState(true);
  const [switchThree, setSwitchThree] = useState(true);
  const [switchFour, setSwitchFour] = useState(true);
  const [switchFive, setSwitchFive] = useState(false);
  const [switchSix, setSwitchSix] = useState(false);
  const [switchSeven, setSwitchSeven] = useState(false);

  const getDateFunction = () => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    return date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
  };

  const configCallsMinutes = {
    height: 12,
    width: 73,
    autoFit: false,
    percent: 0.25,
    color: ["#ECEEF5", "#28C345"],
  };

  const configConferenceCalls = {
    height: 12,
    width: 73,
    autoFit: false,
    percent: 0.45,
    color: ["#ECEEF5", "#F6933E"],
  };

  const configCallMembers = {
    height: 12,
    width: 73,
    autoFit: false,
    percent: 0.8,
    color: ["#ECEEF5", "#FF808B"],
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
  };

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

  const TopUsersConfig = {
    height: 90,
    width: 20,
    autoFit: false,
    color: "#6B59CC",
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
  };

  const MostActiveUsersConfig = {
    height: 340,
    width: 20,
    autoFit: false,
    color: "#6B59CC",
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
  };

  const UsageStatisticsConfig = {
    height: 500,
    xField: "date",
    yField: "value",
    seriesField: "category",
    yAxis: {
      label: {
        formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
      },
    },
  };

  const MostActiveUsersBD = [
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
  ];

  const TopUsersBD = [
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
    {
      Avatar: AvatarIcon,
      Value: [274, 337],
    },
  ];

  return (
    <Wrapper container item xs={12}>
      <Profile item xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AvatarImg} alt="Avatar" />
          <Grid textAlign="center">
            <Text variant="H3">WhiteUI.Store</Text>
            <Text variant="LIGHT">25 Employees</Text>
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
                  <CategoryImg src={x.ActiveIcon} alt="Icon" />
                ) : (
                  <CategoryImg src={x.Icon} alt="Icon" />
                )}
                <Grid>
                  <Text variant="BOLD" color={category === x.Title ? "#6B59CC" : "#1A1C1D"}>
                    {x.Title}
                  </Text>
                  <Text variant="LIGHT">{x.Text}</Text>
                </Grid>
              </SelectCategoryButton>
              <SelectCategoryBorder $display={x.Border} />
            </Category>
          ))}
        </Grid>
      </Profile>
      <SelectCategory container item xs={9}>
        {category === "None" && (
          <Grid
            container
            height="100%"
            alignContent="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img src={SelectCategoryImg} alt="Image" />
            <SelectCategoryText container>
              <Text variant="H1">Select category</Text>
              <Text variant="LIGHT">
                You can select required category to setup details about your account
              </Text>
            </SelectCategoryText>
          </Grid>
        )}
        {category === "Company information" && (
          <CompanyInformationGrid container>
            <Text variant="H4">Company information</Text>
            <InputGrid container>
              <Grid container gap="20px" width="440px" flexDirection="column">
                <Input
                  variant="LightInput"
                  width="440px"
                  title="Company name"
                  inputValue="WhiteUI.Store"
                  IconType="Company"
                  text="Enter your company name"
                />
                <Input
                  variant="LightInput"
                  width="440px"
                  title="Billing address"
                  IconType="Address"
                  text="Start typing …"
                />
                <Input
                  variant="LightInput"
                  width="440px"
                  title="Phone"
                  IconType="Calls"
                  text="Start typing …"
                />
                <Input
                  variant="LightInput"
                  width="440px"
                  title="Number of employees"
                  IconType="Name"
                  text="Start typing …"
                />
              </Grid>
              <Grid container gap="20px" width="440px" flexDirection="column">
                <Input
                  variant="Select"
                  width="440px"
                  title="Location"
                  text="Select location"
                  SelectDefaultValue="10"
                  SelectArray={LocationCategoty}
                />
                <Input
                  variant="LightInput"
                  width="440px"
                  title="Zip code"
                  IconType="Email"
                  text="Start typing …"
                />
                <Input
                  variant="Select"
                  width="440px"
                  title="Location"
                  text="Select language"
                  SelectArray={LanguageCategoty}
                />
              </Grid>
            </InputGrid>
          </CompanyInformationGrid>
        )}
        {category === "Teams & Users" && (
          <TeamsAndUsers container>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <Text variant="H4">Teams & Users</Text>
              </Grid>
              <SelectStatus container item xs={6}>
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
                  <img src={AddIcon} alt="Add" />
                </AddIconGrid>
                <AddIconGrid container>
                  <StyledPersonAddIcon />
                </AddIconGrid>
              </SelectStatus>
            </Grid>
            <Grid container gap="10px">
              {status === "All"
                ? Users.map((x: any) => (
                    <UsersGrid container key={x.Categoty}>
                      <Grid container alignItems="center" gap="20px" xs={6}>
                        <Grid position="relative" height="40px" width="40px">
                          <img src={x.Icon} alt="Avatar" />
                          <ProfileStatus />
                        </Grid>
                        <Text variant="BOLD">{x.Name}</Text>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={6}
                        gap="40px"
                        justifyContent="flex-end"
                        alignContent="center"
                      >
                        <Grid>
                          <Input
                            variant="Select"
                            width="180px"
                            text="Select location"
                            SelectDefaultValue={x.Value}
                            SelectArray={TeamsUsersCategoty}
                          />
                        </Grid>
                        <Grid container gap="5px" width="auto" alignItems="center">
                          <UserStatus
                            container
                            $background={
                              x.Categoty === "Business"
                                ? "rgba(107, 89, 204, 0.1)"
                                : "rgba(246, 147, 62, 0.15)"
                            }
                          >
                            <Text
                              variant="BOLD"
                              color={x.Categoty === "Business" ? "#6B59CC" : "#F6933E"}
                            >
                              {x.Categoty}
                            </Text>
                          </UserStatus>
                          <AddIconGrid container>
                            <img src={ThreeArrow} alt="Three Arrow Icon" />
                          </AddIconGrid>
                        </Grid>
                      </Grid>
                    </UsersGrid>
                  ))
                : Users.map(
                    (x: any) =>
                      x.Categoty === status && (
                        <UsersGrid container key={x.Categoty}>
                          <Grid container alignItems="center" gap="20px" item xs={6}>
                            <Grid position="relative" height="40px" width="40px">
                              <img src={x.Icon} alt="Avatar" />
                              <ProfileStatus />
                            </Grid>
                            <Text variant="BOLD">{x.Name}</Text>
                          </Grid>
                          <Grid
                            container
                            xs={6}
                            gap="40px"
                            justifyContent="flex-end"
                            alignContent="center"
                          >
                            <Grid>
                              <Input
                                variant="Select"
                                width="180px"
                                text="Select location"
                                SelectDefaultValue={x.Value}
                                SelectArray={TeamsUsersCategoty}
                              />
                            </Grid>
                            <Grid container gap="5px" width="auto" alignItems="center">
                              <UserStatus
                                container
                                $background={
                                  x.Categoty === "Business"
                                    ? "rgba(107, 89, 204, 0.1)"
                                    : "rgba(246, 147, 62, 0.15)"
                                }
                              >
                                <Text
                                  variant="BOLD"
                                  color={x.Categoty === "Business" ? "#6B59CC" : "#F6933E"}
                                >
                                  {x.Categoty}
                                </Text>
                              </UserStatus>
                              <AddIconGrid container>
                                <img src={ThreeArrow} alt="Three Arrow Icon" />
                              </AddIconGrid>
                            </Grid>
                          </Grid>
                        </UsersGrid>
                      ),
                  )}
            </Grid>
          </TeamsAndUsers>
        )}
        {category === "Reports" && (
          <ReportsGrid container>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <Text variant="H4">Reports</Text>
              </Grid>
              <Grid xs={6} container justifyContent="flex-end" gap="10px" alignContent="center">
                <img src={DateIcon} alt="Date Icon" />
                <Grid>
                  <Text variant="BOLD" color="#8083A3" small>
                    17 Feb 2020 - {getDateFunction()}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <CallsSstatisticsGrid container>
              <CallsSstatisticsBox container item xs={4}>
                <Grid container item xs={8} gap="5px" flexDirection="column">
                  <Text variant="H5">Call minutes</Text>
                  <Text variant="REGULAR" small>
                    Total time spent
                  </Text>
                </Grid>
                <Grid container item xs={4} gap="5px" flexDirection="column" alignItems="flex-end">
                  <Text variant="H4">10.345</Text>
                  <ProgressCalls {...configCallsMinutes} />
                </Grid>
              </CallsSstatisticsBox>
              <CallsSstatisticsBox
                container
                item
                xs={4}
                borderLeft="1px solid #ECEEF5"
                borderRight="1px solid #ECEEF5"
              >
                <Grid container item xs={8} gap="5px" flexDirection="column">
                  <Text variant="H5">Conference calls</Text>
                  <Text variant="REGULAR" small>
                    Total time spent
                  </Text>
                </Grid>
                <Grid container item xs={4} gap="5px" flexDirection="column" alignItems="flex-end">
                  <Text variant="H4">31.500</Text>
                  <ProgressCalls {...configConferenceCalls} />
                </Grid>
              </CallsSstatisticsBox>
              <CallsSstatisticsBox container item xs={4}>
                <Grid container item xs={8} gap="5px" flexDirection="column">
                  <Text variant="H5">Call members</Text>
                  <Text variant="REGULAR" small>
                    Total call participants
                  </Text>
                </Grid>
                <Grid container item xs={4} gap="5px" flexDirection="column" alignItems="flex-end">
                  <Text variant="H4">248</Text>
                  <ProgressCalls {...configCallMembers} />
                </Grid>
              </CallsSstatisticsBox>
            </CallsSstatisticsGrid>

            <Grid container gap="2.5%">
              <Grid container gap="35px" item xs={5.8}>
                <TopUsers container item xs={12}>
                  <Grid container justifyContent="space-between" height="50px">
                    <Grid item xs={6}>
                      <Text variant="H5">Top users</Text>
                      <Text variant="LIGHT">Week to week performance</Text>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      alignItems="center"
                      gap="10px"
                      justifyContent="flex-end"
                    >
                      <img src={VideoCalls} alt="Icon Video Calls" />
                      <Text variant="BOLD" color="#8083A3">
                        Video calls
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    {TopUsersBD.map(x => (
                      <TopUsersGrid container key={x.Avatar}>
                        <TinyColumn data={x.Value} {...TopUsersConfig} />
                        <Link to="/">
                          <TinyColumnImg src={x.Avatar} alt="Avatar" />
                        </Link>
                      </TopUsersGrid>
                    ))}
                  </Grid>
                </TopUsers>
                <MostActiveUsers container item xs={12}>
                  <Grid container justifyContent="space-between" height="50px">
                    <Grid item xs={6}>
                      <Text variant="H5">Most active users</Text>
                      <Text variant="LIGHT">Week to week performance</Text>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      alignItems="center"
                      gap="10px"
                      justifyContent="flex-end"
                    >
                      <img src={MessageIcon} alt="Icon Video Calls" />
                      <Text variant="BOLD" color="#8083A3">
                        Video calls
                      </Text>
                    </Grid>
                  </Grid>
                  <MostActiveUsersBox container>
                    {MostActiveUsersBD.map(x => (
                      <MostActiveUsersGrid container key={x.Avatar}>
                        <TinyColumn data={x.Value} {...MostActiveUsersConfig} />
                        <Link to="/">
                          <MostActiveUsersImg src={x.Avatar} alt="Avatar" />
                        </Link>
                      </MostActiveUsersGrid>
                    ))}
                  </MostActiveUsersBox>
                </MostActiveUsers>
              </Grid>
              <UsageStatistics container item xs={5.9}>
                <Text variant="H5">Usage statistics</Text>
                <Grid>
                  <Line data={MultiLink} {...UsageStatisticsConfig} />
                </Grid>
              </UsageStatistics>
            </Grid>
          </ReportsGrid>
        )}
        {category === "Integrations" && (
          <IntegrationsGrid container>
            <Text variant={"H4"}>Integrations</Text>
            <Grid container flexDirection={"column"} gap={"25px"}>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Dropbox} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchOne === true ? "#1A1C1D" : "#8083a3"}>
                      Dropbox
                    </Text>
                    <Text variant={"LIGHT"}>
                      Bring a faster teamwork and faster file synchronization
                    </Text>
                  </Grid>
                </Grid>
                <Switch variant={"defaultChecked"} onChange={value => setSwitchOne(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Invision} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchTwo === true ? "#1A1C1D" : "#8083a3"}>
                      Invision
                    </Text>
                    <Text variant={"LIGHT"}>Design better and faster</Text>
                  </Grid>
                </Grid>
                <Switch variant={"defaultChecked"} onChange={value => setSwitchTwo(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Jira} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchThree === true ? "#1A1C1D" : "#8083a3"}>
                      Jira
                    </Text>
                    <Text variant={"LIGHT"}>Stay agile and increase productivity</Text>
                  </Grid>
                </Grid>
                <Switch variant={"defaultChecked"} onChange={value => setSwitchThree(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Intercom} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchFour === true ? "#1A1C1D" : "#8083a3"}>
                      Intercom
                    </Text>
                    <Text variant={"LIGHT"}>Communicate faster with clients</Text>
                  </Grid>
                </Grid>
                <Switch variant={"defaultChecked"} onChange={value => setSwitchFour(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Trello} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchFive === true ? "#1A1C1D" : "#8083a3"}>
                      Trello
                    </Text>
                    <Text variant={"LIGHT"}>Collaborate with your teammates faster</Text>
                  </Grid>
                </Grid>
                <Switch onChange={value => setSwitchFive(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={ProductHunt} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchSix === true ? "#1A1C1D" : "#8083a3"}>
                      Product Hunt
                    </Text>
                    <Text variant={"LIGHT"}>
                      Get new products notifications right on your dashboard
                    </Text>
                  </Grid>
                </Grid>
                <Switch onChange={value => setSwitchSix(value)} />
              </IntegrationsSwich>
              <IntegrationsSwich container>
                <Grid container width={"auto"} alignItems={"center"} gap={"25px"}>
                  <IntegrationsImg src={Gdocs} alt="Intercom" />
                  <Grid>
                    <Text variant={"BOLD"} color={switchSeven === true ? "#1A1C1D" : "#8083a3"}>
                      Google Docs
                    </Text>
                    <Text variant={"LIGHT"}>Connect all your documents in one place</Text>
                  </Grid>
                </Grid>
                <Switch onChange={value => setSwitchSeven(value)} />
              </IntegrationsSwich>
            </Grid>
          </IntegrationsGrid>
        )}
        {category !== "Reports" && (
          <Grid container justifyContent="space-between">
            <Grid container gap="10px" width="auto">
              <Button type="submit" variant="FilledActive" width="220px">
                Update Settings
              </Button>
              <Button variant="FilledRestingLight" width="125px">
                Cancel
              </Button>
            </Grid>
            <StyledLink to="/Schedule">
              <Button variant="FilledRestingLight" width="200px">
                <Grid container justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                  <StyledDeleteSweepIcon />
                  Deactivate Account
                </Grid>
              </Button>
            </StyledLink>
          </Grid>
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default Settings;
