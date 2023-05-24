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
  SecurityGrid,
  ChangePasswordGrid,
  SecurityQuestions,
  PaymentDetailsGrid,
  PaymentDetailsPoints,
  PaymentDetailsLink,
  RecentPaymentsGrid,
  RecentPaymentsPoints,
  NotificationsPoints,
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
import Switch from "../../atoms/Switch/Switch";

const ProfileSettings = () => {
  const [category, setCategory] = useState("None");
  const [addEmail, setAddEmail] = useState(false);
  const [addPhoneNumber, setAddPhoneNumber] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [switchOne, setSwitchOne] = useState(true);
  const [switchTwo, setSwitchTwo] = useState(false);
  const [switchThree, setSwitchThree] = useState(false);
  const [switchFour, setSwitchFour] = useState(false);

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
                  {addEmail === false ? (
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
                  {addPhoneNumber === false ? (
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
        {category === "Security" ? (
          <SecurityGrid container>
            <ChangePasswordGrid container>
              <Text variant={"H4"}>Change password</Text>
              <Input variant={"ChangePassword"} width={"440px"} />
            </ChangePasswordGrid>
            <SecurityQuestions container>
              <Text variant={"H4"}>Security questions</Text>
              <Grid container justifyContent={"space-between"} height={"140px"}>
                <Grid container gap={"20px"} flexDirection={"column"} width={"auto"}>
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Questions #1"}
                    IconType={"Questions"}
                    text={"Start typing …"}
                  />
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Questions #2"}
                    IconType={"Questions"}
                    text={"Start typing …"}
                  />
                </Grid>
                <Grid container gap={"20px"} flexDirection={"column"} width={"auto"}>
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Answer"}
                    IconType={"Answer"}
                    text={"Start typing …"}
                  />
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Answer"}
                    IconType={"Answer"}
                    text={"Start typing …"}
                  />
                </Grid>
              </Grid>
              {questions === false ? (
                <Grid container alignItems={"center"} height={"67px"} gap={"10px"}>
                  <PlusImg src={Plus} alt='Add More' onClick={() => setQuestions(true)} />
                  <Text variant={"BOLD"} color='#8083A3'>
                    Add More
                  </Text>
                </Grid>
              ) : (
                <Grid container justifyContent={"space-between"}>
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Questions #3"}
                    IconType={"Questions"}
                    text={"Start typing …"}
                  />
                  <Input
                    variant={"LightInput"}
                    width={"440px"}
                    title={"Answer"}
                    IconType={"Answer"}
                    text={"Start typing …"}
                  />
                </Grid>
              )}
            </SecurityQuestions>
          </SecurityGrid>
        ) : (
          <></>
        )}
        {category === "Billing" ? (
          <Grid container flexDirection={"column"} gap={"30px"}>
            <Grid container flexDirection={"column"} gap={"30px"}>
              <Text variant={"H4"}>Payment details</Text>
              <PaymentDetailsGrid>
                <PaymentDetailsPoints container>
                  <Text variant={"LIGHT"}>Payment method</Text>
                  <Grid container gap={"20px"} width={"auto"}>
                    <Text variant={"REGULAR"}>MasterCard ending in 4078, exp: 08/2020</Text>
                    <PaymentDetailsLink to={"/"}>Update</PaymentDetailsLink>
                  </Grid>
                </PaymentDetailsPoints>
                <PaymentDetailsPoints
                  container
                  borderBottom={"1px solid #EEEEEE"}
                  borderTop={"1px solid #EEEEEE"}
                >
                  <Text variant={"LIGHT"}>Billing period</Text>
                  <Grid container gap={"20px"} width={"auto"}>
                    <Text variant={"REGULAR"}>Plan billed monthly</Text>
                    <PaymentDetailsLink to={"/"}>Update</PaymentDetailsLink>
                  </Grid>
                </PaymentDetailsPoints>
                <PaymentDetailsPoints container>
                  <Text variant={"LIGHT"}>License keys</Text>
                  <Grid container gap={"20px"} width={"auto"}>
                    <PaymentDetailsLink to={"/"}>Redeem a license key</PaymentDetailsLink>
                  </Grid>
                </PaymentDetailsPoints>
              </PaymentDetailsGrid>
            </Grid>
            <Grid container flexDirection={"column"} gap={"30px"}>
              <Text variant={"H4"}>Recent payments</Text>
              <RecentPaymentsGrid>
                <RecentPaymentsPoints container>
                  <Grid container gap={"45px"} width={"auto"}>
                    <Text variant={"LIGHT"}>21 Oct 2018</Text>
                    <Text variant={"REGULAR"}>CRM Pro (9/21/2018 to 10/21/2019)</Text>
                  </Grid>
                  <Grid container gap={"20px"} width={"auto"}>
                    <Text variant={"BOLD"}>$34.00</Text>
                    <PaymentDetailsLink to={"/"}>Invoice</PaymentDetailsLink>
                  </Grid>
                </RecentPaymentsPoints>
                <RecentPaymentsPoints
                  container
                  borderBottom={"1px solid #EEEEEE"}
                  borderTop={"1px solid #EEEEEE"}
                >
                  <Grid container gap={"45px"} width={"auto"}>
                    <Text variant={"LIGHT"}>21 Oct 2018</Text>
                    <Text variant={"REGULAR"}>CRM Pro (9/21/2018 to 10/21/2019)</Text>
                  </Grid>
                  <Grid container gap={"20px"} width={"auto"}>
                    <Text variant={"BOLD"}>$34.00</Text>
                    <PaymentDetailsLink to={"/"}>Invoice</PaymentDetailsLink>
                  </Grid>
                </RecentPaymentsPoints>
                <RecentPaymentsPoints container>
                  <Grid container gap={"45px"} width={"auto"}>
                    <Text variant={"LIGHT"}>21 Oct 2018</Text>
                    <Text variant={"REGULAR"}>CRM Pro (9/21/2018 to 10/21/2019)</Text>
                  </Grid>
                  <Grid container gap={"20px"} width={"auto"}>
                    <Text variant={"BOLD"}>$34.00</Text>
                    <PaymentDetailsLink to={"/"}>Invoice</PaymentDetailsLink>
                  </Grid>
                </RecentPaymentsPoints>
              </RecentPaymentsGrid>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
        {category === "Notifications" ? (
          <Grid container flexDirection={"column"} gap={"30px"}>
            <Text variant={"H4"}>Notifications</Text>
            <Grid container flexDirection={"column"} gap={"25px"}>
              <NotificationsPoints container>
                <Grid container flexDirection={"column"} width={"auto"}>
                  <Text variant={"BOLD"} color={switchOne === true ? "#1A1C1D" : "#8083a3"}>
                    Product updates
                  </Text>
                  <Text variant={"LIGHT"}>Stair Lifts Feel The Freedom Of Your Home</Text>
                </Grid>
                <Switch variant={"defaultChecked"} onChange={value => setSwitchOne(value)} />
              </NotificationsPoints>
              <NotificationsPoints container>
                <Grid container flexDirection={"column"} width={"auto"}>
                  <Text variant={"BOLD"} color={switchTwo === true ? "#1A1C1D" : "#8083a3"}>
                    Product updates
                  </Text>
                  <Text variant={"LIGHT"}>A Right Media Mix Can Make The Difference</Text>
                </Grid>
                <Switch onChange={value => setSwitchTwo(value)} />
              </NotificationsPoints>
              <NotificationsPoints container>
                <Grid container flexDirection={"column"} width={"auto"}>
                  <Text variant={"BOLD"} color={switchThree === true ? "#1A1C1D" : "#8083a3"}>
                    Comments
                  </Text>
                  <Text variant={"LIGHT"}>Advertising Relationships Vs Business Decisions</Text>
                </Grid>
                <Switch onChange={value => setSwitchThree(value)} />
              </NotificationsPoints>
              <NotificationsPoints container>
                <Grid container flexDirection={"column"} width={"auto"}>
                  <Text variant={"BOLD"} color={switchFour === true ? "#1A1C1D" : "#8083a3"}>
                    Notifications
                  </Text>
                  <Text variant={"LIGHT"}>Creating Remarkable Poster Prints Through</Text>
                </Grid>
                <Switch onChange={value => setSwitchFour(value)} />
              </NotificationsPoints>
            </Grid>
          </Grid>
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
