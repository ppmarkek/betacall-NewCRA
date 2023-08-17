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
import { Event } from "../Schedule/Data";

const AddNewEvent = () => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("General information");
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState("Business");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  interface UsersInterface {
    Name: string
    Icon: string
  }
  const [allMembersUsers, setAllMembersUsers] = useState<UsersInterface[]>([]);
  const [addUsersArray, setAddUsersArray] = useState([
    {
      Name: "Beatrice Hill",
      Icon: MembersAvatar,
    },
    {
      Name: "Mildred Patrick",
      Icon: MembersAvatar,
    },
    {
      Name: "Cordelia Stone",
      Icon: MembersAvatar,
    },
    {
      Name: "Victoria Garner",
      Icon: MembersAvatar,
    },
    {
      Name: "Etta Brady",
      Icon: MembersAvatar,
    },
    {
      Name: "Olivia Massey",
      Icon: MembersAvatar,
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

  const CutUsersArray = (x: { Name: string; Icon: string }) => {
    addUsersArray.length === 1 && handleClose();
    setAddUsersArray([...addUsersArray.filter(y => isEqual(x, y) === false)]);
    return setAllMembersUsers([...allMembersUsers, x]);
  };

  const DeleteUsersArray = (x: { Name: string; Icon: string }) => {
    setAllMembersUsers([...allMembersUsers.filter(y => isEqual(x, y) === false)]);
    return setAddUsersArray([...addUsersArray, x]);
  };

  const searchGroup = (value: number) => {
    return GroupCategoty.some(x => x.value === value && setGroup(x.Text));
  };

  return (
    <Wrapper container item xs={12}>
      <Events item xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AddNewEventImg} alt='Avatar' />
        </Avatar>
        <Grid container height={"110px"}>
          <Grid container padding={"20px 0"}>
            <SelectCategoryButton
              $background={category === "General information" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("General information")}
            >
              {category === "General information" ? (
                <CategoryImg src={AllEventsActive} alt='Icon' />
              ) : (
                <CategoryImg src={AllEvents} alt='Icon' />
              )}
              <Grid>
                <Text
                  variant={"BOLD"}
                  color={category === "General information" ? "#6B59CC" : "#1A1C1D"}
                >
                  General information
                </Text>
                <Text variant={"LIGHT"}>Profile foto, name & language</Text>
              </Grid>
            </SelectCategoryButton>
          </Grid>
          <Border />
        </Grid>
        <Grid container padding={"20px 0"}>
          <SelectCategoryButton
            $background={category === "Notifications" ? "#F8F9FC" : "#fff"}
            onClick={() => setCategory("Notifications")}
          >
            {category === "Notifications" ? (
              <CategoryImg src={NotificationsActiveIcon} alt='Icon' />
            ) : (
              <CategoryImg src={NotificationsIcon} alt='Icon' />
            )}
            <Grid>
              <Text variant={"BOLD"} color={category === "Notifications" ? "#6B59CC" : "#1A1C1D"}>
                Notifications
              </Text>
              <Text variant={"LIGHT"}>Set your email notifications</Text>
            </Grid>
          </SelectCategoryButton>
        </Grid>
      </Events>
      <SelectCategory container item xs={9}>
        {category === "General information" && (
          <GeneralInformationGrid container>
            <Text variant={"H4"}>General information</Text>
            <Grid container justifyContent={"space-between"}>
              <Grid container item xs={5} justifyContent={"space-between"}>
                <Grid item xs={6} container>
                  <Text variant={"LIGHT"}>Date</Text>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker onChange={(x: any) => setDate(x.$d)} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    variant={"Select"}
                    width={"90%"}
                    title={"Group"}
                    text={"Select group"}
                    SelectDefaultValue={"10"}
                    SelectArray={GroupCategoty}
                    onChange={(value: number) => searchGroup(value)}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={5} justifyContent={"space-between"}>
                <TimePickerGrid container item xs={6}>
                  <Text variant={"LIGHT"}>Time from</Text>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
                        onChange={(x: any) => setTimeFrom(x.$d)}
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
                  <Text variant={"LIGHT"}>Time to</Text>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
                        onChange={(x: any) => setTimeTo(x.$d)}
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
                <Text variant={"LIGHT"}>Members</Text>
              </Grid>
              <Grid container gap={"10px"} height={"150px"}>
                {allMembersUsers.map((x: any) => (
                  <UserGrid container key={x.Name}>
                    <MembersImg src={x.Icon} alt={"Avatar"} />
                    <Text variant={"BOLD"}>{x.Name}</Text>
                    <DeleteImg src={Delete} alt='Delete' onClick={() => DeleteUsersArray(x)} />
                  </UserGrid>
                ))}
                {allMembersUsers.length <= 6 && (
                  <>
                    <Grid
                      container
                      gap={"10px"}
                      width={"auto"}
                      height={"55px"}
                      alignItems={"center"}
                    >
                      <PlusImg src={Plus} alt='Add Email' onClick={handleOpen} />
                      <Text variant={"BOLD"} color='#8083A3'>
                        Add User
                      </Text>
                    </Grid>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby='modal-modal-title'
                      aria-describedby='modal-modal-description'
                    >
                      <Box container>
                        {addUsersArray.map(x => (
                          <MembersAvatarButton key={x.Name} onClick={() => CutUsersArray(x)}>
                            <MembersImg src={x.Icon} alt={"Avatar"} />
                            <Text variant={"BOLD"}>{x.Name}</Text>
                          </MembersAvatarButton>
                        ))}
                      </Box>
                    </Modal>
                  </>
                )}
              </Grid>
            </Members>
            <Grid container height={"90px"} justifyContent={"space-between"}>
              <Grid item xs={6}>
                <Input
                  variant={"LightInput"}
                  width={"90%"}
                  IconType={"Email"}
                  title={"Title"}
                  text={"Start typing …"}
                  onChange={(value: string) => setTitle(value)}
                />
              </Grid>
              <Grid container item xs={6} flexDirection={"column"} alignItems={"flex-end"}>
                <Input
                  variant={"LightInput"}
                  width={"90%"}
                  IconType={"Email"}
                  title={"Note"}
                  text={"Start typing …"}
                  onChange={(value: string) => setNote(value)}
                />
              </Grid>
            </Grid>
          </GeneralInformationGrid>
        )}
        {category !== "Notifications" && (
          <Grid container justifyContent={"space-between"}>
            <Grid container gap={"10px"} width={"auto"}>
              <Button
                onClick={x =>
                  x === true &&
                  Event.push({
                    Date: date,
                    TimeFrom: timeFrom,
                    TimeTo: timeTo,
                    Members: allMembersUsers,
                    Note: note,
                    Group: group,
                    Title: title,
                    Id: Event.length + 1,
                  })
                }
                variant={"FilledActive"}
                width={"220px"}
              >
                Create New Event
              </Button>
            </Grid>
            <StyledLink to={"/Schedule"}>
              <Button variant={"FilledRestingLight"} width={"125px"}>
                Cancel
              </Button>
            </StyledLink>
          </Grid>
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default AddNewEvent;
