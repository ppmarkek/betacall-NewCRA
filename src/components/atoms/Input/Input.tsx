import Text from "../Text/Text";
import { useState, useEffect } from "react";
import {
  ConfirmPassword,
  InputGrid,
  LightInput,
  Result,
  ResultImg,
  ResultLink,
  ResultLinkGrid,
  ResultsGird,
  SearchButton,
  SearchGrid,
  SearchImg,
  SearchInput,
  SearchLink,
  Status,
  StyledFormControl,
  StyledImg,
} from "./style";
import { Fade, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SilverPass from "../../../assets/Icon/SilverPass.svg";
import Pass from "../../../assets/Icon/Pass.svg";
import Email from "../../../assets/Icon/Email.svg";
import EmailSilver from "../../../assets/Icon/EmailSilver.svg";
import Men from "../../../assets/Icon/Men.svg";
import MenSilver from "../../../assets/Icon/MenSilver.svg";
import CheckSilver from "../../../assets/Icon/CheckSilver.svg";
import Check from "../../../assets/Icon/Check.svg";
import SearchSilver from "../../../assets/Icon/SearchSilver.svg";
import Search from "../../../assets/Icon/Search.svg";
import Avatar from "../../../assets/Image/Avatar.svg";
import Messenger from "../../../assets/NavigationIcon/Messenger.svg";
import MoreSilver from "../../../assets/NavigationIcon/MoreSilver.svg";
import Calls from "../../../assets/Icon/Calls.svg";
import CallsSilver from "../../../assets/Icon/CallsSilver.svg";
import Address from "../../../assets/Icon/Address.svg";
import AddressSilver from "../../../assets/Icon/AddressSilver.svg";
import RoleSilver from "../../../assets/Icon/RoleSilver.svg";
import Role from "../../../assets/Icon/Role.svg";
import LinkSilver from "../../../assets/Icon/LinkSilver.svg";
import Link from "../../../assets/Icon/Link.svg";
import CheckGreen from "../../../assets/Icon/CheckGreen.svg";
import QuestionsSilver from "../../../assets/Icon/QuestionsSilver.svg";
import Questions from "../../../assets/Icon/Questions.svg";
import AnswerSilver from "../../../assets/Icon/AnswerSilver.svg";
import Answer from "../../../assets/Icon/Answer.svg";

type Value = {
  variant: string
  type?: string
  text?: string
  width?: string
  color?: string
  title?: string
  IconType?: string
  inputValue?: string
  SelectArray?: Array<any>
}

const Input = ({
  variant,
  type,
  text,
  width,
  color,
  title,
  IconType,
  inputValue,
  SelectArray,
}: Value) => {
  const [Icon, setIcon] = useState(SilverPass);
  const [Confirm, setConfirm] = useState(CheckSilver);
  const [Value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState("");
  const [changePassword, setChangePassword] = useState(CheckSilver);

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const ChangeSearch = () => {
    return checked === false ? setChecked(true) : setChecked(false);
  };

  const CheckInputValue = () => {
    if (IconType === "Email" && typeof inputValue !== "undefined") {
      return setIcon(Email);
    }
    if (IconType === "Pass" && typeof inputValue !== "undefined") {
      return setIcon(Pass);
    }
    if (IconType === "Name" && typeof inputValue !== "undefined") {
      return setIcon(Men);
    }
    if (IconType === "Calls" && typeof inputValue !== "undefined") {
      return setIcon(Calls);
    }
    if (IconType === "Address" && typeof inputValue !== "undefined") {
      return setIcon(Address);
    }
    if (IconType === "Role" && typeof inputValue !== "undefined") {
      return setIcon(Role);
    }
    if (IconType === "Link" && typeof inputValue !== "undefined") {
      return setIcon(Link);
    }
  };

  const changeIcon = () => {
    if (IconType === "Email") {
      return setIcon(EmailSilver);
    } else if (IconType === "Name") {
      return setIcon(MenSilver);
    } else if (IconType === "Calls") {
      return setIcon(CallsSilver);
    } else if (IconType === "Address") {
      return setIcon(AddressSilver);
    } else if (IconType === "Role") {
      return setIcon(RoleSilver);
    } else if (IconType === "Link") {
      return setIcon(LinkSilver);
    } else if (IconType === "Questions") {
      return setIcon(QuestionsSilver);
    } else if (IconType === "Answer") {
      return setIcon(AnswerSilver);
    }
  };

  const CheackIcon = (x: string) => {
    if (IconType === "Email") {
      return x === "" ? setIcon(EmailSilver) : setIcon(Email);
    }
    if (IconType === "Pass" && variant !== "ConfirmPassword") {
      return x === "" ? setIcon(SilverPass) : setIcon(Pass);
    }
    if (IconType === "Pass") {
      return x === "" ? setIcon(SilverPass) : setIcon(Pass);
    }
    if (IconType === "Name") {
      return x === "" ? setIcon(MenSilver) : setIcon(Men);
    }
    if (IconType === "Calls") {
      return x === "" ? setIcon(CallsSilver) : setIcon(Calls);
    }
    if (IconType === "Address") {
      return x === "" ? setIcon(AddressSilver) : setIcon(Address);
    }
    if (IconType === "Role") {
      return x === "" ? setIcon(RoleSilver) : setIcon(Role);
    }
    if (IconType === "Link") {
      return x === "" ? setIcon(LinkSilver) : setIcon(Link);
    }
    if (IconType === "Questions") {
      return x === "" ? setIcon(QuestionsSilver) : setIcon(Questions);
    }
    if (IconType === "Answer") {
      return x === "" ? setIcon(AnswerSilver) : setIcon(Answer);
    }
  };

  const CheackChangePassword = (x: string) => {
    return x.length > 8 &&
      /[A-Z]/.test(x) &&
      /[a-z]/.test(x) &&
      /[0-9]/.test(x) &&
      /[?$#^%$@]/.test(x)
      ? setChangePassword(CheckGreen)
      : setChangePassword(CheckSilver);
  };

  const CheackConfirmPass = (x: string) => {
    return Value !== "" && Value === x ? setConfirm(Check) : setConfirm(CheckSilver);
  };

  useEffect(() => {
    changeIcon();
    CheckInputValue();
  }, []);

  switch (variant) {
    case "LightInput":
      return (
        <InputGrid container $width={width}>
          <Text variant={"LIGHT"} small={true}>
            {title}
          </Text>
          <LightInput
            type={type}
            placeholder={text}
            $width={width}
            $color={color}
            defaultValue={inputValue}
            onChange={x => CheackIcon(x.target.value)}
          />
          {IconType !== "" ? <StyledImg src={Icon} alt='' /> : <></>}
        </InputGrid>
      );
    case "ConfirmPassword":
      return (
        <ConfirmPassword container>
          <InputGrid container $width={width}>
            <Text variant={"LIGHT"} small={true}>
              Password
            </Text>
            <LightInput
              type={"password"}
              placeholder={"Enter your password"}
              $color={color}
              onChange={x => setValue(x.target.value)}
            />
            <StyledImg src={Icon} alt='' />
          </InputGrid>
          <InputGrid container $width={width}>
            <Text variant={"LIGHT"} small={true}>
              Confirm password
            </Text>
            <LightInput
              type={"password"}
              placeholder={"Confirm your password"}
              $color={color}
              onChange={x => CheackConfirmPass(x.target.value)}
            />
            <StyledImg src={Confirm} alt='' />
          </InputGrid>
        </ConfirmPassword>
      );
    case "Search":
      return (
        <SearchGrid>
          <Grid>
            <SearchButton onClick={() => ChangeSearch()}>
              <Fade in={checked}>
                <SearchImg src={Search} alt='SearchSilver' />
              </Fade>
              <Fade in={!checked}>
                <SearchImg src={SearchSilver} alt='SearchSilver' />
              </Fade>
            </SearchButton>
            <Fade in={checked}>
              <SearchInput />
            </Fade>
          </Grid>
          <Fade in={checked}>
            <ResultsGird container>
              <Result container>
                <SearchLink to='/'>
                  <Grid container gap={"20px"}>
                    <Grid position={"relative"}>
                      <img src={Avatar} alt='' />
                      <Status />
                    </Grid>
                    <Grid>
                      <Text variant={"BOLD"}>John Doe</Text>
                      <Text variant={"LIGHT"} small={true}>
                        Developer
                      </Text>
                    </Grid>
                  </Grid>
                </SearchLink>
                <ResultLinkGrid container>
                  <ResultLink to='/'>
                    <ResultImg src={Messenger} alt='icon' />
                  </ResultLink>
                  <ResultLink to='/'>
                    <ResultImg src={CallsSilver} alt='icon' />
                  </ResultLink>
                  <ResultLink to='/'>
                    <ResultImg src={MoreSilver} alt='icon' />
                  </ResultLink>
                </ResultLinkGrid>
              </Result>
            </ResultsGird>
          </Fade>
        </SearchGrid>
      );
    case "Select":
      return (
        <Grid container gap={"10px"} flexDirection={"column"}>
          <Text variant={"LIGHT"} small={true}>
            {title}
          </Text>
          <StyledFormControl variant='standard' sx={{ width: width }}>
            <InputLabel id='demo-simple-select-filled-label'>{text}</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={select}
              onChange={handleChange}
              label='select'
            >
              {SelectArray?.map((x: any) => (
                <MenuItem key={x.Text} value={x.value}>
                  {x.Text}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
      );
    case "ChangePassword":
      return (
        <Grid container justifyContent={"space-between"} width={"auto"}>
          <InputGrid container $width={width}>
            <Text variant={"LIGHT"} small={true}>
              Current password
            </Text>
            <LightInput
              type={"password"}
              placeholder={"Enter your password"}
              $color={color}
              onChange={x => setValue(x.target.value)}
            />
            <StyledImg src={Icon} alt='' />
          </InputGrid>
          <InputGrid container $width={width}>
            <Text variant={"LIGHT"} small={true}>
              New password
            </Text>
            <LightInput
              type={"password"}
              placeholder={"Confirm your password"}
              $color={color}
              onChange={x => CheackChangePassword(x.target.value)}
            />
            <StyledImg src={changePassword} alt='' />
          </InputGrid>
        </Grid>
      );
    default:
      return <LightInput placeholder={text} $width={width} $color={color} />;
  }
};

export default Input;
