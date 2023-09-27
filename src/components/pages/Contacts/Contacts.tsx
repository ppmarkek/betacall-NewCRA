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
import { Border, CategoryImg, Events, NewGroup, SelectCategoryButton, Wrapper } from "./style";
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

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Contacts;
