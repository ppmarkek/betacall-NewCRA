import { Grid, Menu, MenuItem } from "@mui/material";
import {
  AvatarButton,
  BorderGrid,
  ButtonsGrid,
  ChangeButton,
  LeftNavigation,
  NovigButton,
  StyledImg,
  ImageGrid,
  TopNavigation,
  Wrapper,
  StyledLink,
  LogoLink,
  MenuLink,
  IconButtons,
  ScheduleButtonsGrid,
  ButtonsBorder,
  StyledTuneIcon,
  StyledMoreVertIcon,
  ContactsButtonsGrid,
  StyledPersonAddIcon,
} from "./style";
import Logo from "../../../assets/Icon/Logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Home from "../../../assets/NavigationIcon/Home.svg";
import Messenger from "../../../assets/NavigationIcon/Messenger.svg";
import Calls from "../../../assets/NavigationIcon/Calls.svg";
import Conference from "../../../assets/NavigationIcon/Conference.svg";
import Contacts from "../../../assets/NavigationIcon/Contacts.svg";
import Screenshare from "../../../assets/NavigationIcon/Screenshare.svg";
import Schedule from "../../../assets/NavigationIcon/Schedule.svg";
import Settings from "../../../assets/NavigationIcon/Settings.svg";
import HomeActive from "../../../assets/NavigationIcon/HomeActive.svg";
import MessengerActive from "../../../assets/NavigationIcon/MessengerActive.svg";
import CallsActive from "../../../assets/NavigationIcon/CallsActive.svg";
import ConferenceActive from "../../../assets/NavigationIcon/ConferenceActive.svg";
import ContactsActive from "../../../assets/NavigationIcon/ContactsActive.svg";
import ScreenshareActive from "../../../assets/NavigationIcon/ScreenshareActive.svg";
import ScheduleActive from "../../../assets/NavigationIcon/ScheduleActive.svg";
import SettingsActive from "../../../assets/NavigationIcon/SettingsActive.svg";
import Avatar from "../../../assets/Image/Avatar.svg";
import Text from "../../atoms/Text/Text";
import { MouseEvent, useState } from "react";
import Input from "../../atoms/Input/Input";
import Betacall from "../../../assets/Icon/betacall.svg";
import ArrowDown from "../../../assets/ScheduleIcon/ArrowDown.svg";
import ArrowTop from "../../../assets/ScheduleIcon/ArrowTop.svg";
import CalendarIcon from "../../../assets/ScheduleIcon/CalendarIcon.svg";
import { userLogout } from "../../../requests";
import { setEmail } from "../../../redux/regReducer";
import { setLoggedIn, setStep } from "../../../redux/loginReducer";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkClass, setCheckClass] = useState("NotActive");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [checked, setChecked] = useState(false);
  const getDateFunction = () => {
    const month = [
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
    const date = new Date();
    return month[date.getMonth()] + " " + date.getFullYear();
  };

  const SubmitLogOut = () => {
    dispatch(setStep(1));
    dispatch(setEmail(""));
    dispatch(setLoggedIn(false));
    navigate("/Login");
    userLogout();
    return ((document.getElementById("root") as HTMLInputElement).style.marginLeft = "0px");
  };

  const ChangeClass = () => {
    return checkClass === "Active" ? setCheckClass("NotActive") : setCheckClass("Active");
  };

  const ButtonLink = [
    {
      Icon: location.pathname === "/Dashboard" ? HomeActive : Home,
      Link: "/Dashboard",
      Text: "Dashboard",
    },
    {
      Icon: location.pathname === "/Messenger" ? MessengerActive : Messenger,
      Link: "/Messenger",
      Text: "Messenger",
    },
    {
      Icon: location.pathname === "/Calls" ? CallsActive : Calls,
      Link: "/Calls",
      Text: "Calls",
    },
    {
      Icon: location.pathname === "/Conference" ? ConferenceActive : Conference,
      Link: "/Conference",
      Text: "Conference",
    },
    {
      Icon: location.pathname === "/Contacts" ? ContactsActive : Contacts,
      Link: "/Contacts",
      Text: "Contacts",
    },
    {
      Icon: location.pathname === "/Screenshare" ? ScreenshareActive : Screenshare,
      Link: "/Screenshare",
      Text: "Screenshare",
    },
    {
      Icon:
        location.pathname === "/Schedule" || location.pathname === "/AddNewEvent"
          ? ScheduleActive
          : Schedule,
      Link: "/Schedule",
      Text: "Schedule",
    },
    {
      Icon: location.pathname === "/Settings" ? SettingsActive : Settings,
      Link: "/Settings",
      Text: "Settings",
    },
  ];

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSlider = () => {
    if (checked === false) {
      setChecked(true)
      ;(document.getElementById("LeftNavigation") as HTMLInputElement).style.width = "200px"
      ;(document.getElementById("root") as HTMLInputElement).style.marginLeft = "200px"
      ;(document.getElementById("StyledLink") as HTMLInputElement).style.width = "100%";
    } else {
      setChecked(false)
      ;(document.getElementById("LeftNavigation") as HTMLInputElement).style.width = "80px"
      ;(document.getElementById("root") as HTMLInputElement).style.marginLeft = "80px"
      ;(document.getElementById("StyledLink") as HTMLInputElement).style.width = "200px";
    }
  };

  return (
    <Wrapper container>
      <TopNavigation container item xs={12}>
        <Grid container item xs={6}>
          <Grid container item xs={6} gap="15px" alignItems="center">
            <ChangeButton onClick={() => handleSlider()}>
              <NovigButton className={checkClass} onClick={() => ChangeClass()}>
                <BorderGrid container>
                  <label id="Top"></label>
                  <label id="Middle"></label>
                  <label id="Bottom"></label>
                </BorderGrid>
              </NovigButton>
            </ChangeButton>
            <Text variant="H3">
              {location.pathname.replace("/", "").replace(/([a-zA-Z])([A-Z])([a-z])/g, "$1 $2$3")}
            </Text>
          </Grid>
          {location.pathname === "/Schedule" && (
            <Grid container item xs={6} gap="15px" alignItems="center">
              <IconButtons>
                <img src={CalendarIcon} alt="Arrow Down" />
              </IconButtons>
              <Text variant="H3">{getDateFunction()}</Text>
            </Grid>
          )}
          {location.pathname === "/Contacts" && (
            <Grid container item xs={6} gap="15px" alignItems="center">
              <IconButtons>
                <StyledTuneIcon />
              </IconButtons>
              <IconButtons>
                <StyledMoreVertIcon />
              </IconButtons>
            </Grid>
          )}
        </Grid>
        <Grid container item xs={6} gap="10px" justifyContent="flex-end" position="relative">
          {location.pathname === "/Schedule" && (
            <ScheduleButtonsGrid container>
              <Grid container gap="10px">
                <IconButtons
                  onClick={() =>
                    ((document.getElementById("AllEventsGrid") as HTMLInputElement).scrollTop -= 20)
                  }
                >
                  <img src={ArrowTop} alt="Arrow Up" />
                </IconButtons>
                <IconButtons
                  onClick={() =>
                    ((document.getElementById("AllEventsGrid") as HTMLInputElement).scrollTop += 20)
                  }
                >
                  <img src={ArrowDown} alt="Arrow Down" />
                </IconButtons>
              </Grid>
              <ButtonsBorder />
            </ScheduleButtonsGrid>
          )}
          {location.pathname === "/Contacts" && (
            <ContactsButtonsGrid container>
              <Grid width={"54px"}>
                <Link to={"/AddNewContact"}>
                  <IconButtons>
                    <StyledPersonAddIcon />
                  </IconButtons>
                </Link>
              </Grid>
              <ButtonsBorder />
            </ContactsButtonsGrid>
          )}
          <Grid position="relative" width="40px" height="40px">
            <Input variant="Search" text="Search" />
          </Grid>
          <AvatarButton onClick={handleClick}>
            <img src={Avatar} alt="avatar" />
          </AvatarButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
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
            <MenuLink to="/ProfileSettings">
              <MenuItem onClick={handleClose}>Profile Settings</MenuItem>
            </MenuLink>
            <MenuItem
              onClick={() => {
                handleClose;
                SubmitLogOut();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </TopNavigation>
      <LeftNavigation id="LeftNavigation" container>
        <Grid height="5%">
          <LogoLink to="/Dashboard">
            <img src={Logo} alt="Logo" />
            <img src={Betacall} alt="Logo" />
          </LogoLink>
        </Grid>
        <ButtonsGrid container>
          {ButtonLink.map((x: any) => (
            <StyledLink
              key={x.Icon}
              to={x.Link}
              $backgroundColor={
                location.pathname === `${x.Link}` && checked === true ? "#F8F9FC" : "#fff"
              }
              id="StyledLink"
            >
              <ImageGrid>
                <StyledImg src={x.Icon} alt="Icon" />
              </ImageGrid>
              <Grid width="100px">
                <Text variant={location.pathname === `${x.Link}` ? "BOLD" : "LIGHT"}>{x.Text}</Text>
              </Grid>
            </StyledLink>
          ))}
        </ButtonsGrid>
      </LeftNavigation>
    </Wrapper>
  );
};

export default Navigation;
