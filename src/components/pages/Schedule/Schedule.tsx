import { Grid, Menu } from "@mui/material";
import { MouseEvent, useState, useEffect } from "react";
import {
  AboutEventGrid,
  AddNew,
  AddNewGrid,
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
  DeleteUser,
  DeleteUserImg,
  MembersIcon,
  DeleteUserImgGrid,
} from "./style";
import Text from "../../atoms/Text/Text";
import AllEvents from "../../../assets/ScheduleIcon/AllEvents.svg";
import AllEventsActive from "../../../assets/ScheduleIcon/AllEventsActive.svg";
import AddNewGroup from "../../../assets/ScheduleIcon/AddNewGroup.svg";
import NoEventsFoundImg from "../../../assets/ScheduleIcon/NoEventsFoundImg.svg";
import Button from "../../atoms/Button/Button";
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
import DeleteMembersIcon from "../../../assets/ScheduleIcon/DeleteMembersIcon.svg";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Input from "../../atoms/Input/Input";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { findAll, removeEvent, updateEvent } from "../../../requests";
import { Email } from "@mui/icons-material";
import { InputWithFormik } from "../../atoms/InputWithFormik/InputWithFormik";
import { Form, Formik } from "formik";

let defaultDate: any = 0;

const Schedule = () => {
  interface AllDateInterface {
    AllDate: any
    Events: any
  }

  interface UsersInterface {
    date?: any
    timeFrom?: any
    timeTo?: any
    members?: any
    note?: any
    group?: any
    title?: any
    _id?: any
  }

  const [allEventsRequests, setAllEventsRequests] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [category, setCategory] = useState("All Events");
  const startDate = new Date();
  const endDate = new Date(`${new Date().getFullYear() + 1}-01-01`);
  const datesArray: AllDateInterface[] = [];
  const [editClick, setEditClick] = useState(-1);
  const [menuInfo, setMenuInfo] = useState<UsersInterface>();
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

  for (let dt = startDate; dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    datesArray.push({ AllDate: new Date(dt), Events: [] });
  }

  const getAllEvents = async () => {
    const response = await findAll();
    setAllEventsRequests(response);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (allEventsRequests.length !== 0) {
    allEventsRequests.map((x: any) =>
      datesArray.some(
        y =>
          new Date(x.date).getFullYear() +
            "/" +
            (new Date(x.date).getMonth() + 1) +
            "/" +
            new Date(x.date).getDate() ===
            y.AllDate.getFullYear() +
              "/" +
              (y.AllDate.getMonth() + 1) +
              "/" +
              y.AllDate.getDate() && y.Events.push(x),
      ),
    );
    EventsGroup.map((x, len) =>
      allEventsRequests.map((y: any) => {
        if (y.group === x.group) {
          return (EventsGroup[len].value = true);
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

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setEditClick(-1);
    setAnchorEl(null);
  };

  const FilterEvents = (arr: any) => {
    return arr.some((value: any) => value.group === category);
  };

  const selectGroup = () => {
    const answ = GroupCategoty.filter(value => value.Text === menuInfo?.group);
    return answ.map(value => value.value).toString();
  };

  const updateMapWithDatabaseData = async (values: any) => {
    updateEvent(menuInfo?._id, values).then(async () => {
      const response = await findAll();
      setAllEventsRequests(response);
    });
  };

  const updateMembers = (users: number) => {
    const newArrMembers = menuInfo?.members.filter((value: number) => value !== users);
    const newArr: UsersInterface = {
      date: menuInfo?.date,
      timeFrom: menuInfo?.timeFrom,
      timeTo: menuInfo?.timeTo,
      members: newArrMembers,
      note: menuInfo?.note,
      group: menuInfo?.group,
      title: menuInfo?.title,
      _id: menuInfo?._id,
    };
    return setMenuInfo(newArr);
  };
  const EditMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
      >
        <Formik
          initialValues={{
            title: menuInfo?.title,
            note: menuInfo?.note,
            date: menuInfo?.date,
            timeFrom: menuInfo?.timeFrom,
            timeTo: menuInfo?.timeTo,
            group: menuInfo?.group,
            members: menuInfo?.members,
          }}
          onSubmit={(values: any) => updateMapWithDatabaseData(values)}
          validateOnChange
          validateOnBlur
        >
          {props => (
            <Form>
              <EditInfoGrid container>
                <Grid container justifyContent="space-between">
                  <EditButtons
                    onClick={() => props.setFieldValue("members", menuInfo?.members, true)}
                    type="submit"
                  >
                    <img src={EditInfoIcon} alt="Edit Info" />
                  </EditButtons>
                  <EditButtons onClick={() => removeEvent(menuInfo?._id)}>
                    <img src={DeleteEventIcon} alt="Delete Event" />
                  </EditButtons>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item xs={5.5} container>
                    <Text variant="LIGHT">Date</Text>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StyledDatePicker
                        onChange={value => props.setFieldValue("date", value, true)}
                        defaultValue={dayjs(
                          `${new Date(menuInfo?.date).getFullYear()}-${
                            new Date(menuInfo?.date).getMonth() + 1
                          }-${new Date(menuInfo?.date).getDate()}`,
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={5.5}>
                    <Input
                      variant="Select"
                      width="100%"
                      title="Group"
                      text="Select group"
                      SelectDefaultValue={selectGroup()}
                      SelectArray={GroupCategoty}
                      onChange={(value: number) =>
                        GroupCategoty.some(
                          GroupCategotyValue =>
                            GroupCategotyValue.value === value &&
                            props.setFieldValue("group", GroupCategotyValue.Text, true),
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <TimePickerGrid container item xs={5.5}>
                    <Text variant="LIGHT">Time from</Text>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <StyledTimePicker
                          onChange={value => props.setFieldValue("timeFrom", value, true)}
                          defaultValue={dayjs(
                            `${new Date(menuInfo?.date).getFullYear()}-${
                              new Date(menuInfo?.date).getMonth() + 1
                            }-${new Date(menuInfo?.date).getDate()}T${new Date(
                              menuInfo?.timeFrom,
                            ).getHours()}:${new Date(menuInfo?.timeFrom).getMinutes()}`,
                          )}
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
                    <Text variant="LIGHT">Time to</Text>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <StyledTimePicker
                          onChange={value => props.setFieldValue("timeTo", value, true)}
                          defaultValue={dayjs(
                            `${new Date(menuInfo?.date).getFullYear()}-${
                              new Date(menuInfo?.date).getMonth() + 1
                            }-${new Date(menuInfo?.date).getDate()}T${new Date(
                              menuInfo?.timeTo,
                            ).getHours()}:${new Date(menuInfo?.timeTo).getMinutes()}`,
                          )}
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
                <Grid container flexDirection="column" gap="10px">
                  <Text variant="LIGHT">Shared with</Text>
                  <Grid container gap="5px">
                    {menuInfo?.members.map((users: number) => (
                      <DeleteUser key={users} container>
                        <DeleteUserImgGrid
                          container
                          className={"DeleteUserImg"}
                          onClick={() => updateMembers(users)}
                        >
                          <DeleteUserImg src={DeleteMembersIcon} alt="Delete Avatar" />
                        </DeleteUserImgGrid>
                        <MembersIcon src={MembersAvatar} alt="Avatar" />
                      </DeleteUser>
                    ))}
                    {menuInfo?.members.length < 6 && (
                      <AddNewGrid container>
                        <AddNew src={AddNewGroup} alt="Add New Event By Date" />
                      </AddNewGrid>
                    )}
                  </Grid>
                </Grid>
                <InputWithFormik
                  name="title"
                  value={props.values.title}
                  type="text"
                  label="Title"
                  endIcon={<Email />}
                />
                <InputWithFormik
                  name="note"
                  value={props.values.note}
                  type="text"
                  label="Note"
                  endIcon={<Email />}
                />
              </EditInfoGrid>
            </Form>
          )}
        </Formik>
      </Menu>
    );
  };

  return (
    <Wrapper container item xs={12}>
      <Events item xs={3} container>
        <Grid container height="110px">
          <Grid container padding="20px 0">
            <SelectCategoryButton
              $background={category === "All Events" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("All Events")}
            >
              {category === "All Events" ? (
                <CategoryImg src={AllEventsActive} alt="Icon" />
              ) : (
                <CategoryImg src={AllEvents} alt="Icon" />
              )}
              <Grid container>
                <Grid container justifyContent="space-between">
                  <Text variant="BOLD" color={category === "All Events" ? "#6B59CC" : "#1A1C1D"}>
                    All Events
                  </Text>
                  {allEventsRequests.length >= 1 && (
                    <EventsLength container>{allEventsRequests.length}</EventsLength>
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
          <SelectCategoryButton>
            <AddNewEventLink to="/AddNewEvent">
              <Grid container alignItems="center" gap="22px">
                <CategoryImg src={AddNewGroup} alt="Icon" />
                <Grid>
                  <Text variant="BOLD" color="#8083A3">
                    Add New Event
                  </Text>
                </Grid>
              </Grid>
            </AddNewEventLink>
          </SelectCategoryButton>
        </NewGroup>
      </Events>
      <EventCalendar container item xs={9}>
        {category === "All Events" && allEventsRequests.length === 0 && (
          <NoEventsFound container>
            <img src={NoEventsFoundImg} alt="No Events Found Image" />
            <Grid container gap="10px" flexDirection="column" alignItems="center">
              <Text variant="H1">No events found?</Text>
              <Text variant="LIGHT" small>
                Try to create new calendar events or sync your calendar service
              </Text>
            </Grid>
            <StyledLink to="/AddNewEvent">
              <Button variant="FilledActive" width="200px">
                Add New Event
              </Button>
            </StyledLink>
          </NoEventsFound>
        )}
        {category === "All Events" && allEventsRequests.length !== 0 && (
          <AllEventsGrid container id="AllEventsGrid">
            {datesArray.map(
              (datesValues: any) =>
                datesValues.Events.length >= 1 && (
                  <>
                    <DateGrid container>
                      <Text variant="BOLD">
                        {Days[new Date(datesValues.AllDate).getDay()]},{" "}
                        {Month[new Date(datesValues.AllDate).getMonth()]}{" "}
                        {datesValues.AllDate.getDate()},{" "}
                        {new Date(datesValues.AllDate).getFullYear()}
                      </Text>
                      <StyledLink to={"/AddNewEvent"}>
                        <AddNewGrid
                          container
                          onClick={() => {
                            defaultDate = datesValues.AllDate;
                          }}
                        >
                          <AddNew src={AddNewGroup} alt="Add New Event By Date" />
                        </AddNewGrid>
                      </StyledLink>
                    </DateGrid>
                    {datesValues.Events.map((eventsValues: any) => (
                      <EventGrid container key={eventsValues._id}>
                        <EventTime container item xs={3}>
                          <TimeImgGrid container>
                            <TimeImg src={TimeIcon} alt="Time Icon" />
                          </TimeImgGrid>
                          <Text variant="BOLD">
                            {new Date(eventsValues.timeFrom).getHours()}:
                            {new Date(eventsValues.timeFrom).getMinutes() < 10
                              ? `0${new Date(eventsValues.timeFrom).getMinutes()}`
                              : new Date(eventsValues.timeFrom).getMinutes()}
                          </Text>
                          <Text variant="LIGHT">
                            {new Date(eventsValues.timeTo).getHours()}:
                            {new Date(eventsValues.timeTo).getMinutes() < 10
                              ? `0${new Date(eventsValues.timeTo).getMinutes()}`
                              : new Date(eventsValues.timeTo).getMinutes()}
                          </Text>
                        </EventTime>
                        <AboutEventGrid container item xs={6}>
                          <GroupEventGrid
                            container
                            $color={EventColor(eventsValues.group)}
                            $background={EventBackground(eventsValues.group)}
                          >
                            {eventsValues.group}
                          </GroupEventGrid>
                          <Text variant="BOLD" color="#8083A3" small>
                            {eventsValues.title}
                          </Text>
                        </AboutEventGrid>
                        <EditEventGrid container item xs={3}>
                          <Avatar src={MembersAvatar} alt="Avatar" />
                          <Grid
                            borderRadius="10px"
                            onClick={() => setDateOnClick(eventsValues._id, eventsValues)}
                          >
                            <EditButtons
                              onClick={handleClick}
                              $background={editClick !== eventsValues._id ? "#fff" : "#eceef5"}
                            >
                              <img src={EditIcon} alt="Edit Button" />
                            </EditButtons>
                          </Grid>
                          {editClick === eventsValues._id && EditMenu()}
                        </EditEventGrid>
                      </EventGrid>
                    ))}
                  </>
                ),
            )}
          </AllEventsGrid>
        )}
        {category !== "All Events" && allEventsRequests.length !== 0 && (
          <AllEventsGrid container id="AllEventsGrid">
            {datesArray.map(
              (datesValues: any) =>
                datesValues.Events.length >= 1 &&
                FilterEvents(datesValues.Events) === true && (
                  <>
                    <DateGrid container key={datesValues.AllDate}>
                      <Text variant="BOLD">
                        {Days[new Date(datesValues.AllDate).getDay()]},{" "}
                        {Month[new Date(datesValues.AllDate).getMonth()]}{" "}
                        {new Date(datesValues.AllDate).getDate()},{" "}
                        {new Date(datesValues.AllDate).getFullYear()}
                      </Text>
                      <AddNewGrid container>
                        <AddNew src={AddNewGroup} alt="Add New Event By Date" />
                      </AddNewGrid>
                    </DateGrid>
                    {datesValues.Events.map(
                      (eventsValues: any) =>
                        eventsValues.group === category && (
                          <EventGrid container key={eventsValues._id}>
                            <EventTime container item xs={3}>
                              <TimeImgGrid container>
                                <TimeImg src={TimeIcon} alt="Time Icon" />
                              </TimeImgGrid>
                              <Text variant="BOLD">
                                {new Date(eventsValues.timeFrom).getHours()}:
                                {new Date(eventsValues.timeFrom).getMinutes() < 10
                                  ? `0${new Date(eventsValues.timeFrom).getMinutes()}`
                                  : new Date(eventsValues.timeFrom).getMinutes()}
                              </Text>
                              <Text variant="LIGHT">
                                {new Date(eventsValues.timeTo).getHours()}:
                                {new Date(eventsValues.timeTo).getMinutes() < 10
                                  ? `0${new Date(eventsValues.timeTo).getMinutes()}`
                                  : new Date(eventsValues.timeTo).getMinutes()}
                              </Text>
                            </EventTime>
                            <AboutEventGrid container item xs={6}>
                              <GroupEventGrid
                                container
                                $color={EventColor(eventsValues.group)}
                                $background={EventBackground(eventsValues.group)}
                              >
                                {eventsValues.group}
                              </GroupEventGrid>
                              <Text variant="BOLD" color="#8083A3" small>
                                {eventsValues.title}
                              </Text>
                            </AboutEventGrid>
                            <EditEventGrid container item xs={3}>
                              <Avatar src={MembersAvatar} alt="Avatar" />
                              <Grid
                                borderRadius="10px"
                                onClick={() => setDateOnClick(eventsValues._id, eventsValues)}
                              >
                                <EditButtons
                                  onClick={handleClick}
                                  $background={editClick !== eventsValues._id ? "#fff" : "#eceef5"}
                                >
                                  <img src={EditIcon} alt="Edit Button" />
                                </EditButtons>
                              </Grid>
                              {editClick === eventsValues._id && EditMenu()}
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

export { defaultDate };
