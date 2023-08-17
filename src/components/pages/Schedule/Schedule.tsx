import { Grid } from "@mui/material";
import { useState } from "react";
import {
  AboutEventGrid,
  AddNewEventByDate,
  AddNewEventByDateGrid,
  Border,
  CategoryImg,
  DateGrid,
  EventCalendar,
  EventGrid,
  Events,
  EventTime,
  GroupEventGrid,
  NewGroup,
  NoEventsFound,
  SelectCategoryButton,
  StyledLink,
  TimeImg,
  TimeImgGrid,
  Wrapper,
  EditEventGrid,
  Avatar,
  EditButton,
  EventsLength,
  AllEventsGrid,
  AddNewEventLink,
} from "./style";
import Text from "../../atoms/Text/Text";
import AllEvents from "../../../assets/ScheduleIcon/AllEvents.svg";
import AllEventsActive from "../../../assets/ScheduleIcon/AllEventsActive.svg";
import AddNewGroup from "../../../assets/ScheduleIcon/AddNewGroup.svg";
import NoEventsFoundImg from "../../../assets/ScheduleIcon/NoEventsFoundImg.svg";
import Button from "../../atoms/Button/Button";
import { Event } from "./Data";
import MembersAvatar from "../../../assets/Image/Avatar.svg";
import TimeIcon from "../../../assets/ScheduleIcon/TimeIcon.svg";
import EditIcon from "../../../assets/ScheduleIcon/EditIcon.svg";
import BusinessIcon from "../../../assets/ScheduleIcon/Business.svg";
import PersonalIcon from "../../../assets/ScheduleIcon/Personal.svg";
import CloudIcon from "../../../assets/ScheduleIcon/Cloud.svg";
import CustomersIcon from "../../../assets/ScheduleIcon/Customers.svg";
import ActiveBusinessIcon from "../../../assets/ScheduleIcon/ActiveBusiness.svg";
import ActivePersonalIcon from "../../../assets/ScheduleIcon/ActivePersonal.svg";
import ActiveCloudIcon from "../../../assets/ScheduleIcon/ActiveCloud.svg";
import ActiveCustomersIcon from "../../../assets/ScheduleIcon/ActiveCustomers.svg";

const Schedule = () => {
  interface UsersInterface {
    AllDate: any
    Events: any
  }

  const [category, setCategory] = useState("All Events");
  const startDate = new Date();
  const endDate = new Date(`${new Date().getFullYear() + 1}-01-01`);
  const datesArray: UsersInterface[] = [];
  const EventsGroup = [
    {
      Group: "Business",
      Value: false,
      Icon: BusinessIcon,
      ActiveIcon: ActiveBusinessIcon,
    },
    {
      Group: "Personal",
      Value: false,
      Icon: PersonalIcon,
      ActiveIcon: ActivePersonalIcon,
    },
    {
      Group: "Cloud",
      Value: false,
      Icon: CloudIcon,
      ActiveIcon: ActiveCloudIcon,
    },
    {
      Group: "Customers",
      Value: false,
      Icon: CustomersIcon,
      ActiveIcon: ActiveCustomersIcon,
    },
  ];
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    datesArray.push({ AllDate: new Date(date), Events: [] });
  }

  if (Event.length !== 0) {
    Event.map(x =>
      datesArray.some(
        y =>
          x.Date.getFullYear() + "/" + (x.Date.getMonth() + 1) + "/" + x.Date.getDate() ===
            y.AllDate.getFullYear() +
              "/" +
              (y.AllDate.getMonth() + 1) +
              "/" +
              y.AllDate.getDate() && y.Events.push(x),
      ),
    );
    EventsGroup.map((x, len) =>
      Event.map(y => {
        if (y.Group === x.Group) {
          return (EventsGroup[len].Value = true);
        }
      }),
    );
  }

  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const EventColor = (variant: string) => {
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

  const EventBackground = (variant: string) => {
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
    <Wrapper container item xs={12}>
      <Events item xs={3} container>
        <Grid container height={"110px"}>
          <Grid container padding={"20px 0"}>
            <SelectCategoryButton
              $background={category === "All Events" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("All Events")}
            >
              {category === "All Events" ? (
                <CategoryImg src={AllEventsActive} alt='Icon' />
              ) : (
                <CategoryImg src={AllEvents} alt='Icon' />
              )}
              <Grid container>
                <Grid container justifyContent={"space-between"}>
                  <Text variant={"BOLD"} color={category === "All Events" ? "#6B59CC" : "#1A1C1D"}>
                    All Events
                  </Text>
                  {Event.length >= 1 && <EventsLength container>{Event.length}</EventsLength>}
                </Grid>
                <Text variant={"LIGHT"}>All messages unified</Text>
              </Grid>
            </SelectCategoryButton>
          </Grid>
          <Border />
        </Grid>
        <NewGroup container>
          {EventsGroup.map(
            x =>
              x.Value === true && (
                <Grid key={x.Group} container height={"73px"}>
                  <SelectCategoryButton
                    $background={category === x.Group ? "#F8F9FC" : "#fff"}
                    onClick={() => setCategory(x.Group)}
                  >
                    <Grid container alignItems={"center"} gap={"22px"}>
                      {category === x.Group ? (
                        <CategoryImg src={x.ActiveIcon} alt='Icon' />
                      ) : (
                        <CategoryImg src={x.Icon} alt='Icon' />
                      )}
                      <Grid>
                        <Text variant={"BOLD"} color={category === x.Group ? "#6B59CC" : "#1A1C1D"}>
                          {x.Group}
                        </Text>
                      </Grid>
                    </Grid>
                  </SelectCategoryButton>
                  <Border />
                </Grid>
              ),
          )}
          <SelectCategoryButton>
            <AddNewEventLink to={"/AddNewEvent"}>
              <Grid container alignItems={"center"} gap={"22px"}>
                <CategoryImg src={AddNewGroup} alt='Icon' />
                <Grid>
                  <Text variant={"BOLD"} color={"#8083A3"}>
                    Add New Event
                  </Text>
                </Grid>
              </Grid>
            </AddNewEventLink>
          </SelectCategoryButton>
        </NewGroup>
      </Events>
      <EventCalendar container item xs={9}>
        {category === "All Events" && Event.length === 0 && (
          <NoEventsFound container>
            <img src={NoEventsFoundImg} alt='No Events Found Image' />
            <Grid container gap={"10px"} flexDirection={"column"} alignItems={"center"}>
              <Text variant={"H1"}>No events found?</Text>
              <Text variant={"LIGHT"} small>
                Try to create new calendar events or sync your calendar service
              </Text>
            </Grid>
            <StyledLink to={"/AddNewEvent"}>
              <Button variant={"FilledActive"} width={"200px"}>
                Add New Event
              </Button>
            </StyledLink>
          </NoEventsFound>
        )}
        {category === "All Events" && Event.length !== 0 && (
          <AllEventsGrid container id={"AllEventsGrid"}>
            {datesArray.map(
              (x: any) =>
                x.Events.length >= 1 && (
                  <>
                    <DateGrid container key={x.AllDate}>
                      <Text variant={"BOLD"}>
                        {Days[x.AllDate.getDay()]}, {Month[x.AllDate.getMonth()]}{" "}
                        {x.AllDate.getDate()}, {x.AllDate.getFullYear()}
                      </Text>
                      <AddNewEventByDateGrid container>
                        <AddNewEventByDate src={AddNewGroup} alt='Add New Event By Date' />
                      </AddNewEventByDateGrid>
                    </DateGrid>
                    {x.Events.map((y: any) => (
                      <EventGrid container key={y.Id}>
                        <EventTime container item xs={3}>
                          <TimeImgGrid container>
                            <TimeImg src={TimeIcon} alt='Time Icon' />
                          </TimeImgGrid>
                          <Text variant={"BOLD"}>
                            {y.TimeFrom.getHours()}:{y.TimeFrom.getMinutes()}
                          </Text>
                          <Text variant={"LIGHT"}>
                            {y.TimeTo.getHours()}:{y.TimeTo.getMinutes()}
                          </Text>
                        </EventTime>
                        <AboutEventGrid container item xs={6}>
                          <GroupEventGrid
                            container
                            $color={EventColor(y.Group)}
                            $background={EventBackground(y.Group)}
                          >
                            {y.Group}
                          </GroupEventGrid>
                          <Text variant={"BOLD"} color={"#8083A3"} small>
                            {y.Title}
                          </Text>
                        </AboutEventGrid>
                        <EditEventGrid container item xs={3}>
                          <Avatar src={MembersAvatar} alt='Avatar' />
                          <EditButton>
                            <img src={EditIcon} alt='Edit Button ' />
                          </EditButton>
                        </EditEventGrid>
                      </EventGrid>
                    ))}
                  </>
                ),
            )}
          </AllEventsGrid>
        )}
        {category !== "All Events" && Event.length !== 0 && (
          <AllEventsGrid container id={"AllEventsGrid"}>
            {datesArray.map(
              (x: any) =>
                x.Events.length >= 1 && (
                  <>
                    <DateGrid container key={x.AllDate}>
                      <Text variant={"BOLD"}>
                        {Days[x.AllDate.getDay()]}, {Month[x.AllDate.getMonth()]}{" "}
                        {x.AllDate.getDate()}, {x.AllDate.getFullYear()}
                      </Text>
                      <AddNewEventByDateGrid container>
                        <AddNewEventByDate src={AddNewGroup} alt='Add New Event By Date' />
                      </AddNewEventByDateGrid>
                    </DateGrid>
                    {x.Events.map(
                      (y: any) =>
                        y.Group === category && (
                          <EventGrid container key={y.Id}>
                            <EventTime container item xs={3}>
                              <TimeImgGrid container>
                                <TimeImg src={TimeIcon} alt='Time Icon' />
                              </TimeImgGrid>
                              <Text variant={"BOLD"}>
                                {y.TimeFrom.getHours()}:{y.TimeFrom.getMinutes()}
                              </Text>
                              <Text variant={"LIGHT"}>
                                {y.TimeTo.getHours()}:{y.TimeTo.getMinutes()}
                              </Text>
                            </EventTime>
                            <AboutEventGrid container item xs={6}>
                              <GroupEventGrid
                                container
                                $color={EventColor(y.Group)}
                                $background={EventBackground(y.Group)}
                              >
                                {y.Group}
                              </GroupEventGrid>
                              <Text variant={"BOLD"} color={"#8083A3"} small>
                                {y.Title}
                              </Text>
                            </AboutEventGrid>
                            <EditEventGrid container item xs={3}>
                              <Avatar src={MembersAvatar} alt='Avatar' />
                              <EditButton>
                                <img src={EditIcon} alt='Edit Button ' />
                              </EditButton>
                            </EditEventGrid>
                          </EventGrid>
                        ),
                    )}
                  </>
                ),
            )}
          </AllEventsGrid>
        )}
      </EventCalendar>
    </Wrapper>
  );
};

export default Schedule;
