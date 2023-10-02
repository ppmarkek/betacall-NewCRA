import { Grid } from "@mui/material";
import {
  Avatar,
  Border,
  Box,
  CategoryImg,
  DeleteImg,
  Events,
  GeneralInformationGrid,
  Members,
  MembersAvatarButton,
  MembersImg,
  PlusImg,
  SelectCategory,
  SelectCategoryButton,
  StyledAvatarImg,
  StyledDatePicker,
  StyledForm,
  StyledLink,
  StyledTimePicker,
  TimePickerGrid,
  UserGrid,
  Wrapper,
} from "./style";
import Text from "../../atoms/Text/Text";
import AllEvents from "../../../assets/ScheduleIcon/AllEvents.svg";
import AllEventsActive from "../../../assets/ScheduleIcon/AllEventsActive.svg";
import AddNewEventImg from "../../../assets/AddNewEventIcon/AddNewEventImg.svg";
import NotificationsIcon from "../../../assets/AddNewEventIcon/NotificationsIcon.svg";
import NotificationsActiveIcon from "../../../assets/AddNewEventIcon/NotificationsActiveIcon.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "@mui/material/Modal";
import MembersAvatar from "../../../assets/AddNewEventIcon/MembersAvatar.svg";
import Delete from "../../../assets/AddNewEventIcon/Del.svg";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { Formik } from "formik";
import { addEvent } from "../../../requests";
import { InputWithFormik } from "../../atoms/InputWithFormik/InputWithFormik";
import { Email } from "@mui/icons-material";
import { defaultDate } from "../Schedule/Schedule";
import dayjs from "dayjs";
import { CreateEventSchema } from "../../../validationSchema";

const AddNewEvent = () => {
  const [category, setCategory] = useState("General information");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface UsersInterface {
    name: string
    icon: string
    id: string
  }

  const [allMembersUsers, setAllMembersUsers] = useState<UsersInterface[]>([]);
  const [addUsersArray, setAddUsersArray] = useState([
    {
      name: "Beatrice Hill",
      icon: MembersAvatar,
      id: 233,
    },
    {
      name: "Mildred Patrick",
      icon: MembersAvatar,
      id: 232,
    },
    {
      name: "Cordelia Stone",
      icon: MembersAvatar,
      id: 231,
    },
    {
      name: "Victoria Garner",
      icon: MembersAvatar,
      id: 230,
    },
    {
      name: "Etta Brady",
      icon: MembersAvatar,
      id: 229,
    },
    {
      name: "Olivia Massey",
      icon: MembersAvatar,
      id: 228,
    },
  ]);

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

  const isObject = (object: any) => {
    return object != null && typeof object === "object";
  };

  const isEqual = (obj1: any, obj2: any) => {
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
      return false;
    }
    for (let i = 0; i < props1.length; i++) {
      const val1 = obj1[props1[i]];
      const val2 = obj2[props1[i]];
      const isObjects = isObject(val1) && isObject(val2);
      if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
        return false;
      }
    }
    return true;
  };

  const CutUsersArray = (value: UsersInterface) => {
    addUsersArray.length === 1 && handleClose();
    setAddUsersArray(prevAddUsersArray =>
      prevAddUsersArray.filter(value2 => !isEqual(value, value2)),
    );
    setAllMembersUsers(prevAllMembersUsers => [...prevAllMembersUsers, value]);
  };

  const DeleteUsersArray = (value: { name: string; icon: string; id: number }) => {
    setAllMembersUsers([...allMembersUsers.filter(value2 => !isEqual(value, value2))]);
    return setAddUsersArray([...addUsersArray, value]);
  };

  return (
    <Wrapper container item xs={12}>
      <Events item xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AddNewEventImg} alt="Avatar" />
        </Avatar>
        <Grid container height="110px">
          <Grid container padding="20px 0">
            <SelectCategoryButton
              $background={category === "General information" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("General information")}
            >
              {category === "General information" ? (
                <CategoryImg src={AllEventsActive} alt="Icon" />
              ) : (
                <CategoryImg src={AllEvents} alt="Icon" />
              )}
              <Grid>
                <Text
                  variant="BOLD"
                  color={category === "General information" ? "#6B59CC" : "#1A1C1D"}
                >
                  General information
                </Text>
                <Text variant="LIGHT">Profile foto, name & language</Text>
              </Grid>
            </SelectCategoryButton>
          </Grid>
          <Border />
        </Grid>
        <Grid container padding="20px 0">
          <SelectCategoryButton
            $background={category === "Notifications" ? "#F8F9FC" : "#fff"}
            onClick={() => setCategory("Notifications")}
          >
            {category === "Notifications" ? (
              <CategoryImg src={NotificationsActiveIcon} alt="Icon" />
            ) : (
              <CategoryImg src={NotificationsIcon} alt="Icon" />
            )}
            <Grid>
              <Text variant="BOLD" color={category === "Notifications" ? "#6B59CC" : "#1A1C1D"}>
                Notifications
              </Text>
              <Text variant="LIGHT">Set your email notifications</Text>
            </Grid>
          </SelectCategoryButton>
        </Grid>
      </Events>
      <Formik
        initialValues={{
          title: "",
          note: "",
          date: "",
          timeFrom: "",
          timeTo: "",
          group: "Business",
          members: [],
        }}
        validationSchema={CreateEventSchema}
        onSubmit={(values: any) => addEvent(values)}
        validateOnChange
        validateOnBlur
      >
        {props => (
          <SelectCategory container item xs={9}>
            <StyledForm>
              {category === "General information" && (
                <GeneralInformationGrid container>
                  <Text variant="H4">General information</Text>
                  <Grid container justifyContent="space-between">
                    <Grid container item xs={5} justifyContent="space-between">
                      <Grid item xs={6} container>
                        <Text variant="LIGHT">Date</Text>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <StyledDatePicker
                            defaultValue={
                              defaultDate !== 0
                                ? dayjs(
                                    `${new Date(defaultDate).getFullYear()}-${new Date(
                                      defaultDate,
                                    ).getMonth()}-${new Date(defaultDate).getDate()}`,
                                  )
                                : dayjs(`${new Date()}`)
                            }
                            onChange={value => props.setFieldValue("date", value, true)}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          variant="Select"
                          width="90%"
                          title="Group"
                          text="Select group"
                          SelectDefaultValue="10"
                          SelectArray={GroupCategoty}
                          onChange={(value: number) =>
                            GroupCategoty.some(
                              x => x.value === value && props.setFieldValue("group", x.Text, true),
                            )
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={5} justifyContent="space-between">
                      <TimePickerGrid container item xs={6}>
                        <Text variant="LIGHT">Time from</Text>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["TimePicker"]}>
                            <StyledTimePicker
                              onChange={value => props.setFieldValue("timeFrom", value, true)}
                              value={props.values.timeFrom}
                              viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                              }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </TimePickerGrid>
                      <TimePickerGrid container item xs={6}>
                        <Text variant="LIGHT">Time to</Text>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["TimePicker"]}>
                            <StyledTimePicker
                              onChange={value => props.setFieldValue("timeTo", value, true)}
                              value={props.values.timeTo}
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
                  </Grid>
                  <Members container>
                    <Grid container>
                      <Text variant="LIGHT">Members</Text>
                    </Grid>
                    <Grid container gap="10px" height="150px">
                      {allMembersUsers.map((x: any) => (
                        <UserGrid container key={x.name}>
                          <MembersImg src={x.icon} alt="Avatar" />
                          <Text variant="BOLD">{x.name}</Text>
                          <DeleteImg
                            src={Delete}
                            alt="Delete"
                            onClick={() => DeleteUsersArray(x)}
                          />
                        </UserGrid>
                      ))}
                      {allMembersUsers.length < 6 && (
                        <>
                          <Grid container gap="10px" width="auto" height="55px" alignItems="center">
                            <PlusImg src={Plus} alt="Add Email" onClick={handleOpen} />
                            <Text variant="BOLD" color="#8083A3">
                              Add User
                            </Text>
                          </Grid>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box container>
                              {addUsersArray.map((x: any) => (
                                <MembersAvatarButton key={x.name} onClick={() => CutUsersArray(x)}>
                                  <MembersImg src={x.icon} alt="Avatar" />
                                  <Text variant="BOLD">{x.name}</Text>
                                </MembersAvatarButton>
                              ))}
                            </Box>
                          </Modal>
                        </>
                      )}
                    </Grid>
                  </Members>
                  <Grid container height="90px" justifyContent="space-between">
                    <Grid item xs={5.5}>
                      <InputWithFormik
                        placeholder={"Start typing..."}
                        name="title"
                        type="text"
                        label="Title"
                        endIcon={<Email />}
                      />
                    </Grid>
                    <Grid container item xs={5.5} flexDirection="column" alignItems="flex-end">
                      <InputWithFormik
                        placeholder={"Start typing..."}
                        name="note"
                        type="text"
                        label="Note"
                        endIcon={<Email />}
                      />
                    </Grid>
                  </Grid>
                </GeneralInformationGrid>
              )}
              {category !== "Notifications" && (
                <Grid container justifyContent="space-between">
                  <Grid container gap="10px" width="auto">
                    <Button
                      type="submit"
                      variant="FilledActive"
                      width="220px"
                      onClick={() =>
                        props.setFieldValue(
                          "members",
                          allMembersUsers.map(value => value.id),
                          true,
                        )
                      }
                    >
                      Create New Event
                    </Button>
                  </Grid>
                  <StyledLink to="/Schedule">
                    <Button variant="FilledRestingLight" width="125px">
                      Cancel
                    </Button>
                  </StyledLink>
                </Grid>
              )}
            </StyledForm>
          </SelectCategory>
        )}
      </Formik>
    </Wrapper>
  );
};

export default AddNewEvent;
