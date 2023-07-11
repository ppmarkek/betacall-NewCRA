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
  Note,
  PlusImg,
  SelectCategory,
  SelectCategoryButton,
  StyledAvatarImg,
  StyledDatePicker,
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

const AddNewEvent = () => {
  const [category, setCategory] = useState("General information");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allMembersUsers, setAllMembersUsers] = useState([
    {
      Name: "Blake Burton",
      Icon: MembersAvatar,
    },
  ]);
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
              <Grid container item xs={5} flexDirection={"column"}>
                <Text variant={"LIGHT"}>Date</Text>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StyledDatePicker />
                </LocalizationProvider>
              </Grid>
              <Grid container item xs={5} justifyContent={"space-between"}>
                <TimePickerGrid container item xs={5}>
                  <Text variant={"LIGHT"}>Time from</Text>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                          seconds: renderTimeViewClock,
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </TimePickerGrid>
                <TimePickerGrid container item xs={5}>
                  <Text variant={"LIGHT"}>Time to</Text>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
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
                {allMembersUsers.map(x => (
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
            <Note>
              <Input
                variant={"LightInput"}
                width={"100%"}
                IconType={"Email"}
                title={"Note"}
                text={"Start typing …"}
              />
            </Note>
          </GeneralInformationGrid>
        )}
        {category !== "Notifications" && (
          <Grid container justifyContent={"space-between"}>
            <Grid container gap={"10px"} width={"auto"}>
              <Button variant={"FilledActive"} width={"220px"}>
                Create New Event
              </Button>
            </Grid>
            <Button variant={"FilledRestingLight"} width={"125px"}>
              Cancel
            </Button>
          </Grid>
        )}
      </SelectCategory>
    </Wrapper>
  );
};

export default AddNewEvent;
