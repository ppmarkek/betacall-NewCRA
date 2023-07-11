import { Grid } from "@mui/material";
import { useState } from "react";
import {
  Border,
  CategoryImg,
  EventCalendar,
  Events,
  NewGroup,
  NoEventsFound,
  SelectCategoryButton,
  StyledLink,
  Wrapper,
} from "./style";
import Text from "../../atoms/Text/Text";
import AllEvents from "../../../assets/ScheduleIcon/AllEvents.svg";
import AllEventsActive from "../../../assets/ScheduleIcon/AllEventsActive.svg";
import AddNewGroup from "../../../assets/ScheduleIcon/AddNewGroup.svg";
import NoEventsFoundImg from "../../../assets/ScheduleIcon/NoEventsFoundImg.svg";
import Button from "../../atoms/Button/Button";

const Schedule = () => {
  const [category, setCategory] = useState("All Events");
  const EventsArray = [];

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
              <Grid>
                <Text variant={"BOLD"} color={category === "All Events" ? "#6B59CC" : "#1A1C1D"}>
                  All Events
                </Text>
                <Text variant={"LIGHT"}>All messages unified</Text>
              </Grid>
            </SelectCategoryButton>
          </Grid>
          <Border />
        </Grid>
        <NewGroup container>
          <SelectCategoryButton>
            <CategoryImg src={AddNewGroup} alt='Icon' />
            <Grid>
              <Text variant={"BOLD"} color={"#8083A3"}>
                Type to add new group
              </Text>
            </Grid>
          </SelectCategoryButton>
        </NewGroup>
      </Events>
      <EventCalendar container item xs={9}>
        {category === "All Events" && EventsArray.length === 0 && (
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
      </EventCalendar>
    </Wrapper>
  );
};

export default Schedule;
