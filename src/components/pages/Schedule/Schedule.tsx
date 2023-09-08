import { Grid, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
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
  EditButtons,
  EventsLength,
  AllEventsGrid,
  AddNewEventLink,
  EditInfoGrid,
  StyledDatePicker,
  TimePickerGrid,
  StyledTimePicker,
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
import EditInfoIcon from "../../../assets/ScheduleIcon/Edit.svg";
import CloudIcon from "../../../assets/ScheduleIcon/Cloud.svg";
import CustomersIcon from "../../../assets/ScheduleIcon/Customers.svg";
import ActiveBusinessIcon from "../../../assets/ScheduleIcon/ActiveBusiness.svg";
import ActivePersonalIcon from "../../../assets/ScheduleIcon/ActivePersonal.svg";
import ActiveCloudIcon from "../../../assets/ScheduleIcon/ActiveCloud.svg";
import ActiveCustomersIcon from "../../../assets/ScheduleIcon/ActiveCustomers.svg";
import DeleteEventIcon from "../../../assets/ScheduleIcon/DeleteEvent.svg";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Input from "../../atoms/Input/Input";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

const Schedule = () => {
  interface UsersInterface {
    AllDate: any
    Events: any
  }

  interface UsersInterface {
    Date?: any
    TimeFrom?: any
    TimeTo?: any
    Members?: any
    Note?: any
    Group?: any
    Title?: any
    Id?: any
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [category, setCategory] = useState("All Events");
  const startDate = new Date();
  const endDate = new Date(`${new Date().getFullYear() + 1}-01-01`);
  const datesArray: UsersInterface[] = [];
  const [group, setGroup] = useState("Business");
  const [timeTo, setTimeTo] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [editClick, setEditClick] = useState(-1);
  const [menuInfo, setMenuInfo] = useState<UsersInterface>();
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
  for (let dt = startDate; dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    datesArray.push({ AllDate: new Date(dt), Events: [] });
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

  const setDateOnClick = (id: number, array: any) => {
    setEditClick(id);
    setMenuInfo(array);
  };

  const searchGroup = (value: number) => {
    return GroupCategoty.some(x => x.value === value && setGroup(x.Text));
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setEditClick(-1);
    setAnchorEl(null);
  };

  const DeleteEvent = (id: number) => {
    return console.log(Event.filter(x => x.Id !== id));
  };

  const EditMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
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
              content: '""',
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
      >
        <EditInfoGrid container>
          <Grid container justifyContent={"space-between"}>
            <EditButtons>
              <img src={EditInfoIcon} alt='Edit Info' />
            </EditButtons>
            <EditButtons onClick={() => DeleteEvent(menuInfo?.Id)}>
              <img src={DeleteEventIcon} alt='Delete Event' />
            </EditButtons>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={5.5} container>
              <Text variant={"LIGHT"}>Date</Text>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledDatePicker
                  defaultValue={dayjs(
                    `${menuInfo?.Date.getFullYear()}-${
                      menuInfo?.Date.getMonth() + 1
                    }-${menuInfo?.Date.getDate()}`,
                  )}
                  onChange={(value: any) => setDate(value)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={5.5}>
              <Input
                variant={"Select"}
                width={"100%"}
                title={"Group"}
                text={"Select group"}
                SelectDefaultValue={"10"}
                SelectArray={GroupCategoty}
                onChange={(value: number) => searchGroup(value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <TimePickerGrid container item xs={5.5}>
              <Text variant={"LIGHT"}>Time from</Text>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <StyledTimePicker
                    defaultValue={dayjs(
                      `${menuInfo?.Date.getFullYear()}-${
                        menuInfo?.Date.getMonth() + 1
                      }-${menuInfo?.Date.getDate()}T${menuInfo?.TimeFrom.getHours()}:${menuInfo?.TimeFrom.getMinutes()}`,
                    )}
                    onChange={(value: any) => setTimeFrom(value.$d)}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </TimePickerGrid>
            <TimePickerGrid container item xs={5.5}>
              <Text variant={"LIGHT"}>Time to</Text>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <StyledTimePicker
                    defaultValue={dayjs(
                      `${menuInfo?.Date.getFullYear()}-${
                        menuInfo?.Date.getMonth() + 1
                      }-${menuInfo?.Date.getDate()}T${menuInfo?.TimeTo.getHours()}:${menuInfo?.TimeTo.getMinutes()}`,
                    )}
                    onChange={(value: any) => setTimeTo(value.$d)}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </TimePickerGrid>
          </Grid>
          <Grid container flexDirection={"column"} gap={"10px"}>
            <Text variant={"LIGHT"}>Shared with</Text>
            <Grid container gap={"5px"}>
              {menuInfo?.Members.map((users: any) => (
                <Grid key={users.Name}>
                  <Avatar src={users.Icon} alt='Avatar' />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Input
            variant={"LightInput"}
            width={"100%"}
            IconType={"Email"}
            title={"Title"}
            text={"Start typing …"}
            inputValue={menuInfo?.Title}
            onChange={(value: string) => setTitle(value)}
          />
          <Input
            variant={"LightInput"}
            width={"100%"}
            IconType={"Email"}
            title={"Note"}
            text={"Start typing …"}
            inputValue={menuInfo?.Note}
            onChange={(value: string) => setTitle(value)}
          />
        </EditInfoGrid>
      </Menu>
    );
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
                          <Grid borderRadius={"10px"} onClick={() => setDateOnClick(y.Id, y)}>
                            <EditButtons
                              onClick={handleClick}
                              $background={editClick !== y.Id ? "#fff" : "#eceef5"}
                            >
                              <img src={EditIcon} alt='Edit Button' />
                            </EditButtons>
                          </Grid>
                          {editClick === y.Id && EditMenu()}
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
                              <Grid borderRadius={"10px"} onClick={() => setDateOnClick(y.Id, y)}>
                                <EditButtons
                                  onClick={handleClick}
                                  $background={editClick !== y.Id ? "#fff" : "#eceef5"}
                                >
                                  <img src={EditIcon} alt='Edit Button' />
                                </EditButtons>
                              </Grid>
                              {EditMenu()}
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
