import { Grid, Menu } from "@mui/material";
import BusinessIcon from "../../../assets/ContactsIcon/Business.svg";
import PersonalIcon from "../../../assets/ContactsIcon/Personal.svg";
import CloudIcon from "../../../assets/ContactsIcon/Cloud.svg";
import CustomersIcon from "../../../assets/ContactsIcon/Customers.svg";
import ActiveBusinessIcon from "../../../assets/ContactsIcon/ActiveBusiness.svg";
import ActivePersonalIcon from "../../../assets/ContactsIcon/ActivePersonal.svg";
import ActiveCloudIcon from "../../../assets/ContactsIcon/ActiveCloud.svg";
import ActiveCustomersIcon from "../../../assets/ContactsIcon/ActiveCustomers.svg";
import AllEvents from "../../../assets/ContactsIcon/AllEvents.svg";
import AllEventsActive from "../../../assets/ContactsIcon/AllEventsActive.svg";
import MembersAvatar from "../../../assets/Image/Avatar.svg";
import ForumIcon from "@mui/icons-material/Forum";
import {
  AllContacts,
  AvatarImg,
  Border,
  CategoryImg,
  ContactGrid,
  ButtonsAbout,
  Events,
  GroupEventGrid,
  NewGroup,
  SelectCategoryButton,
  StryledMoreHorizIcon,
  StyledForumIcon,
  StyledPhoneIcon,
  Wrapper,
  StyledDrawer,
  StyledCloseIcon,
  CloseGrid,
  MenuAvatar,
  AvatarGrid,
  StyledScreenShareIcon,
  InfoGrid,
  StyledFacebookIcon,
  StyledInstagramIcon,
  ContactsLength,
  EditInfoGrid,
  StyledDeleteSweepIcon,
  StyledEditIcon,
} from "./style";
import { MouseEvent, useState, useEffect } from "react";
import Text from "../../atoms/Text/Text";
import { findAllContacts, removeContact, updateContact } from "../../../requests";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { InputWithFormik } from "../../atoms/InputWithFormik/InputWithFormik";
import {
  Person,
  Email,
  Phone,
  LocationOn,
  RecordVoiceOver,
  Link as LinkIcon,
} from "@mui/icons-material";
import Input from "../../atoms/Input/Input";

const Contacts = () => {
  type ContactType = {
    _id?: string
    fullName?: string
    role?: string
    phone?: string
    group?: string
    email?: string
    secondEmail?: string
    secondPhone?: string
    addressLine?: string
    social?: string
    link?: string
    bio?: string
    dial?: string
  }

  const [category, setCategory] = useState("All Contacts");
  const [contacts, getContacts] = useState<ContactType[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuData, setMenuData] = useState<ContactType[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedContactId, setSelectedContactId] = useState<string | undefined | number>(undefined);
  const EventsGroup = [
    {
      group: "Business",
      value: false,
      icon: BusinessIcon,
      activeIcon: ActiveBusinessIcon,
    },
    {
      group: "Personal",
      value: false,
      icon: PersonalIcon,
      activeIcon: ActivePersonalIcon,
    },
    {
      group: "Cloud",
      value: false,
      icon: CloudIcon,
      activeIcon: ActiveCloudIcon,
    },
    {
      group: "Customers",
      value: false,
      icon: CustomersIcon,
      activeIcon: ActiveCustomersIcon,
    },
  ];

  const GroupColor = (variant: string) => {
    switch (variant) {
      case "Business":
        return "#6B59CC";
      case "Personal":
        return "#28C345";
      case "Cloud":
        return "#F6933E";
      case "Customers":
        return "#FF808B";
      default:
        return "#6B59CC";
    }
  };

  const GroupBackground = (variant: string) => {
    switch (variant) {
      case "Business":
        return "rgba(107, 89, 204, 0.1)";
      case "Personal":
        return "rgba(40, 195, 69, 0.1)";
      case "Cloud":
        return "rgba(246, 147, 62, 0.1)";
      case "Customers":
        return "rgba(255, 128, 139, 0.1)";
      default:
        return "rgba(107, 89, 204, 0.1)";
    }
  };

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

  const GroupCategoty = [
    {
      Text: "Business",
      value: 10,
    },
    {
      Text: "Personal",
      value: 20,
    },
    {
      Text: "Cloud",
      value: 30,
    },
    {
      Text: "Customers",
      value: 40,
    },
  ];

  const getAllContacts = async () => {
    const response = await findAllContacts();
    getContacts(response);
  };

  const selectDataOnClick = (id: string) => {
    return setMenuData(contacts.filter(value => value._id === id));
  };

  const openMenuOnClick = (id: string) => {
    selectDataOnClick(id);
    setOpenMenu(true);
  };

  EventsGroup.map((x, len) =>
    contacts.map((y: any) => {
      if (y.group === x.group) {
        return (EventsGroup[len].value = true);
      }
    }),
  );

  const updateContactFunction = async (id: any, values: any) => {
    updateContact(id, values).then(async () => {
      const response = await findAllContacts();
      getContacts(response);
    });
  };

  const DeleteContact = async (id: any) => {
    removeContact(id).then(async () => {
      const response = await findAllContacts();
      getContacts(response);
    });
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setValueOnClick = (id: any, event: any) => {
    event.stopPropagation();
    setSelectedContactId(id);
    selectDataOnClick(id);
    handleClick(event);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setSelectedContactId(-1);
    setAnchorEl(null);
  };

  const openEdit = Boolean(anchorEl);

  useEffect(() => {
    getAllContacts();
  }, []);

  const selectGroup = (value: any, group: any) => {
    const answ = value.filter((value2: any) => value2.Text === group);
    return answ.map((value2: any) => value2.value).toString();
  };

  console.log(openMenu);

  const EditMenu = () => (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openEdit}
      onClose={event => handleClose(event)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: "",
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 3,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      onClick={event => event.stopPropagation()}
    >
      <Formik
        initialValues={{
          fullName: menuData[0]?.fullName,
          email: menuData[0]?.email,
          secondEmail: menuData[0]?.secondEmail,
          phone: menuData[0]?.phone,
          secondPhone: menuData[0]?.secondPhone,
          addressLine: menuData[0]?.addressLine,
          social: menuData[0]?.social,
          role: menuData[0]?.role,
          bio: menuData[0]?.bio,
          group: menuData[0]?.group,
          dial: menuData[0]?.dial,
          link: menuData[0]?.link,
        }}
        onSubmit={(values: any) => updateContactFunction(menuData[0]?._id, values)}
        validateOnChange
        validateOnBlur
      >
        {props => (
          <Form>
            <EditInfoGrid container>
              <Grid container justifyContent="space-between">
                <ButtonsAbout type="submit">
                  <StyledEditIcon />
                </ButtonsAbout>
                <ButtonsAbout onClick={() => DeleteContact(menuData[0]?._id)}>
                  <StyledDeleteSweepIcon />
                </ButtonsAbout>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="fullName"
                    label="Full Name"
                    value={props.values.fullName}
                    endIcon={<Person />}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="role"
                    label="Role"
                    value={props.values.role}
                    endIcon={<RecordVoiceOver />}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="email"
                    type="email"
                    label="Email"
                    value={props.values.email}
                    endIcon={<Email />}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="secondEmail"
                    type="email"
                    label="Second Email"
                    value={props.values.secondEmail}
                    endIcon={<Email />}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="phone"
                    label="Phone"
                    value={props.values.phone}
                    endIcon={<Phone />}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="secondPhone"
                    label="Second Phone"
                    value={props.values.secondPhone}
                    endIcon={<Phone />}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="addressLine"
                    label="Address line"
                    value={props.values.addressLine}
                    endIcon={<LocationOn />}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="bio"
                    label="Bio"
                    value={props.values.bio}
                    endIcon={<Person />}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <Grid container height="75px">
                    <Input
                      variant="Select"
                      title="Social"
                      text="Select social"
                      SelectArray={SocialCategoty}
                      SelectDefaultValue={selectGroup(SocialCategoty, menuData[0]?.social)}
                      onChange={(value: number) =>
                        SocialCategoty.some(
                          value2 =>
                            value2.value === value &&
                            props.setFieldValue("social", value2.Text, true),
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Enter link to your profile"}
                    name="link"
                    label="Link"
                    value={props.values.link}
                    endIcon={<LinkIcon />}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"space-between"}>
                <Grid item xs={5.5}>
                  <Grid container height="75px">
                    <Input
                      variant="Select"
                      title="Group"
                      text="Select group"
                      SelectArray={GroupCategoty}
                      SelectDefaultValue={selectGroup(GroupCategoty, menuData[0]?.group)}
                      onChange={(value: number) =>
                        GroupCategoty.some(
                          value2 =>
                            value2.value === value &&
                            props.setFieldValue("group", value2.Text, true),
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <Grid item xs={5.5}>
                  <InputWithFormik
                    placeholder={"Start typing..."}
                    name="dial"
                    label="Dial"
                    value={props.values.dial}
                    endIcon={<Email />}
                  />
                </Grid>
              </Grid>
            </EditInfoGrid>
          </Form>
        )}
      </Formik>
    </Menu>
  );

  return (
    <Wrapper container>
      <Events item xs={3} container>
        <Grid container height="110px">
          <Grid container padding="20px 0">
            <SelectCategoryButton
              $background={category === "All Contacts" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("All Contacts")}
            >
              {category === "All Contacts" ? (
                <CategoryImg src={AllEventsActive} alt="Icon" />
              ) : (
                <CategoryImg src={AllEvents} alt="Icon" />
              )}
              <Grid container>
                <Grid container justifyContent="space-between">
                  <Text variant="BOLD" color={category === "All Contacts" ? "#6B59CC" : "#1A1C1D"}>
                    All Contacts
                  </Text>
                  {contacts.length >= 1 && (
                    <ContactsLength container>{contacts.length}</ContactsLength>
                  )}
                </Grid>
                <Text variant="LIGHT">All messages unified</Text>
              </Grid>
            </SelectCategoryButton>
          </Grid>
          <Border />
        </Grid>
        <NewGroup container>
          {EventsGroup.map(
            EventsGroupValue =>
              EventsGroupValue.value === true && (
                <Grid key={EventsGroupValue.group} container height="73px">
                  <SelectCategoryButton
                    $background={category === EventsGroupValue.group ? "#F8F9FC" : "#fff"}
                    onClick={() => setCategory(EventsGroupValue.group)}
                  >
                    <Grid container alignItems="center" gap="22px">
                      {category === EventsGroupValue.group ? (
                        <CategoryImg src={EventsGroupValue.activeIcon} alt="Icon" />
                      ) : (
                        <CategoryImg src={EventsGroupValue.icon} alt="Icon" />
                      )}
                      <Grid>
                        <Text
                          variant="BOLD"
                          color={category === EventsGroupValue.group ? "#6B59CC" : "#1A1C1D"}
                        >
                          {EventsGroupValue.group}
                        </Text>
                      </Grid>
                    </Grid>
                  </SelectCategoryButton>
                  <Border />
                </Grid>
              ),
          )}
        </NewGroup>
      </Events>
      <AllContacts container item xs={9}>
        {contacts.map(
          (value: any) =>
            category === value.group &&
            contacts.length !== 0 && (
              <ContactGrid container key={value._id} onClick={() => openMenuOnClick(value._id)}>
                <Grid container item xs={3} gap={"20px"} alignItems={"center"}>
                  <AvatarImg src={MembersAvatar} alt="Avatar" />
                  <Text variant={"BOLD"}>{value.fullName}</Text>
                </Grid>
                <Grid container item xs={6} justifyContent={"space-between"} alignItems={"center"}>
                  <Grid item xs={5}>
                    <Text variant="BOLD" color={"#8083A3"}>
                      {value.role}
                    </Text>
                  </Grid>
                  <Grid item xs={3}>
                    <Text variant="BOLD" color={"#8083A3"}>
                      {value.phone}
                    </Text>
                  </Grid>
                  <GroupEventGrid
                    container
                    $color={GroupColor(value.group)}
                    $background={GroupBackground(value.group)}
                  >
                    {value.group}
                  </GroupEventGrid>
                </Grid>
                <Grid
                  container
                  item
                  xs={3}
                  gap={"5px"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <ButtonsAbout onClick={event => event.stopPropagation()}>
                    <StyledForumIcon />
                  </ButtonsAbout>
                  <ButtonsAbout onClick={event => event.stopPropagation()}>
                    <StyledPhoneIcon />
                  </ButtonsAbout>
                  <ButtonsAbout
                    $background={selectedContactId === value._id ? "#eceef5" : "#fff"}
                    onClick={event => setValueOnClick(value._id, event)}
                  >
                    <StryledMoreHorizIcon />
                  </ButtonsAbout>
                  {selectedContactId === value._id && EditMenu()}
                </Grid>
              </ContactGrid>
            ),
        )}
        {contacts.map(
          (value: any) =>
            category === "All Contacts" &&
            contacts.length !== 0 && (
              <ContactGrid container key={value._id} onClick={() => openMenuOnClick(value._id)}>
                <Grid container item xs={3} gap={"20px"} alignItems={"center"}>
                  <AvatarImg src={MembersAvatar} alt="Avatar" />
                  <Text variant={"BOLD"}>{value.fullName}</Text>
                </Grid>
                <Grid container item xs={6} justifyContent={"space-between"} alignItems={"center"}>
                  <Grid item xs={5}>
                    <Text variant="BOLD" color={"#8083A3"}>
                      {value.role}
                    </Text>
                  </Grid>
                  <Grid item xs={3}>
                    <Text variant="BOLD" color={"#8083A3"}>
                      {value.phone}
                    </Text>
                  </Grid>
                  <GroupEventGrid
                    container
                    $color={GroupColor(value.group)}
                    $background={GroupBackground(value.group)}
                  >
                    {value.group}
                  </GroupEventGrid>
                </Grid>
                <Grid
                  container
                  item
                  xs={3}
                  gap={"5px"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <ButtonsAbout onClick={event => event.stopPropagation()}>
                    <StyledForumIcon />
                  </ButtonsAbout>
                  <ButtonsAbout onClick={event => event.stopPropagation()}>
                    <StyledPhoneIcon />
                  </ButtonsAbout>
                  <ButtonsAbout
                    $background={selectedContactId === value._id ? "#eceef5" : "#fff"}
                    onClick={event => setValueOnClick(value._id, event)}
                  >
                    <StryledMoreHorizIcon />
                  </ButtonsAbout>
                  {selectedContactId === value._id && EditMenu()}
                </Grid>
              </ContactGrid>
            ),
        )}
        <CloseGrid
          display={openMenu === false ? "none" : "block"}
          onClick={() => setOpenMenu(false)}
        >
          <StyledDrawer
            variant="persistent"
            anchor="right"
            open={openMenu}
            onClick={event => event.stopPropagation()}
          >
            <Grid container justifyContent={"flex-end"}>
              <ButtonsAbout onClick={() => setOpenMenu(false)} $width={"40px"} $height={"40px"}>
                <StyledCloseIcon />
              </ButtonsAbout>
            </Grid>
            <Grid>
              <AvatarGrid container>
                <MenuAvatar src={MembersAvatar} alt="Avatar" />
                <Text variant={"H3"}>{menuData[0]?.fullName}</Text>
                <Text variant={"LIGHT"}>{menuData[0]?.role}</Text>
                <Grid container gap={"5px"} paddingTop={"20px"}>
                  <Button variant={"FilledActive"} width={"120px"} height={"40px"}>
                    <Grid container gap={"5px"} justifyContent={"center"} alignItems={"center"}>
                      <ForumIcon />
                      Message
                    </Grid>
                  </Button>
                  <ButtonsAbout $width={"40px"} $height={"40px"}>
                    <StyledPhoneIcon />
                  </ButtonsAbout>
                  <ButtonsAbout $width={"40px"} $height={"40px"}>
                    <StyledScreenShareIcon />
                  </ButtonsAbout>
                  <ButtonsAbout
                    $width={"40px"}
                    $height={"40px"}
                    $background={selectedContactId === menuData[0]?._id ? "#eceef5" : "#fff"}
                    onClick={event => setValueOnClick(menuData[0]?._id, event)}
                  >
                    <StryledMoreHorizIcon />
                  </ButtonsAbout>
                  {selectedContactId === menuData[0]?._id && EditMenu()}
                </Grid>
              </AvatarGrid>
              <InfoGrid container>
                <Grid container item xs={12} gap={"42px"}>
                  <Grid container item xs={1} justifyContent={"flex-end"}>
                    <Text variant={"LIGHT"}>Bio</Text>
                  </Grid>
                  <Grid item xs={9}>
                    <Text variant={"REGULAR"}>{menuData[0]?.bio}</Text>
                  </Grid>
                </Grid>
                <Grid container item xs={12} gap={"42px"}>
                  <Grid container item xs={1} justifyContent={"flex-end"}>
                    <Text variant={"LIGHT"}>Email</Text>
                  </Grid>
                  <Grid container item xs={9} gap={"10px"} flexDirection={"column"}>
                    <Text variant={"REGULAR"}>{menuData[0]?.email}</Text>
                    <Text variant={"REGULAR"}>{menuData[0]?.secondEmail}</Text>
                  </Grid>
                </Grid>
                <Grid container item xs={12} gap={"42px"}>
                  <Grid container item xs={1} justifyContent={"flex-end"}>
                    <Text variant={"LIGHT"}>Dial</Text>
                  </Grid>
                  <Grid item xs={9}>
                    <Text variant={"REGULAR"}>{menuData[0]?.dial}</Text>
                  </Grid>
                </Grid>
                <Grid container item xs={12} gap={"42px"}>
                  <Grid container item xs={1} justifyContent={"flex-end"}>
                    <Text variant={"LIGHT"}>Phone</Text>
                  </Grid>
                  <Grid container item xs={9} gap={"10px"} flexDirection={"column"}>
                    <Text variant={"REGULAR"}>{menuData[0]?.phone}</Text>
                    <Text variant={"REGULAR"}>{menuData[0]?.secondPhone}</Text>
                  </Grid>
                </Grid>
                <Grid container item xs={12} gap={"42px"}>
                  <Grid container item xs={1} justifyContent={"flex-end"} alignItems={"center"}>
                    <Text variant={"LIGHT"}>Social</Text>
                  </Grid>
                  <Grid container item xs={9} gap={"10px"}>
                    {menuData[0]?.social === "Facebook" && (
                      <Link to={menuData[0]?.link || "/"}>
                        <ButtonsAbout $width={"40px"} $height={"40px"}>
                          <StyledFacebookIcon />
                        </ButtonsAbout>
                      </Link>
                    )}
                    {menuData[0]?.social === "Instagram" && (
                      <Link to={menuData[0]?.link || "/"}>
                        <ButtonsAbout $width={"40px"} $height={"40px"}>
                          <StyledInstagramIcon />
                        </ButtonsAbout>
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </InfoGrid>
            </Grid>
          </StyledDrawer>
        </CloseGrid>
      </AllContacts>
    </Wrapper>
  );
};

export default Contacts;
