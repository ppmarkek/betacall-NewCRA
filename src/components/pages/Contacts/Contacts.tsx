import { Grid } from "@mui/material";
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
} from "./style";
import { useState } from "react";
import Text from "../../atoms/Text/Text";

const Contacts = () => {
  const [category, setCategory] = useState("All Contacts");
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
                  {/* {allEventsRequests.length >= 1 && (
                    <EventsLength container>{allEventsRequests.length}</EventsLength>
                  )} */}
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
        <ContactGrid container>
          <Grid container item xs={3} gap={"20px"} alignItems={"center"}>
            <AvatarImg src={MembersAvatar} alt="Avatar" />
            <Text variant={"BOLD"}>Nicholas Gordon</Text>
          </Grid>
          <Grid container item xs={6} justifyContent={"space-between"} alignItems={"center"}>
            <Text variant="BOLD" color={"#8083A3"}>
              Developer
            </Text>
            <Text variant="BOLD" color={"#8083A3"}>
              490-645-3877
            </Text>
            <GroupEventGrid
              container
              $color={GroupColor("Business")}
              $background={GroupBackground("Business")}
            >
              Business
            </GroupEventGrid>
          </Grid>
          <Grid container item xs={3} gap={"5px"} alignItems={"center"} justifyContent={"flex-end"}>
            <ButtonsAbout>
              <StyledForumIcon />
            </ButtonsAbout>
            <ButtonsAbout>
              <StyledPhoneIcon />
            </ButtonsAbout>
            <ButtonsAbout>
              <StryledMoreHorizIcon />
            </ButtonsAbout>
          </Grid>
        </ContactGrid>
        <ContactGrid container>
          <Grid container item xs={3} gap={"20px"} alignItems={"center"}>
            <AvatarImg src={MembersAvatar} alt="Avatar" />
            <Text variant={"BOLD"}>Nicholas Gordon</Text>
          </Grid>
          <Grid container item xs={6} justifyContent={"space-between"} alignItems={"center"}>
            <Text variant="BOLD" color={"#8083A3"}>
              Developer
            </Text>
            <Text variant="BOLD" color={"#8083A3"}>
              490-645-3877
            </Text>
            <GroupEventGrid
              container
              $color={GroupColor("Business")}
              $background={GroupBackground("Business")}
            >
              Business
            </GroupEventGrid>
          </Grid>
          <Grid container item xs={3} gap={"5px"} alignItems={"center"} justifyContent={"flex-end"}>
            <ButtonsAbout>
              <StyledForumIcon />
            </ButtonsAbout>
            <ButtonsAbout>
              <StyledPhoneIcon />
            </ButtonsAbout>
            <ButtonsAbout>
              <StryledMoreHorizIcon />
            </ButtonsAbout>
          </Grid>
        </ContactGrid>
      </AllContacts>
    </Wrapper>
  );
};

export default Contacts;
