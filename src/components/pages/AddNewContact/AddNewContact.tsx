import { Grid } from "@mui/material";
import { useState } from "react";
import Text from "../../atoms/Text/Text";
import AllContact from "../../../assets/AddNewContactIcon/AllContact.svg";
import AllContactActive from "../../../assets/AddNewContactIcon/AllContactActive.svg";
import AddNewContactImg from "../../../assets/AddNewContactIcon/AddNewContactImg.svg";
import NotificationsIcon from "../../../assets/AddNewContactIcon/NotificationsIcon.svg";
import NotificationsActiveIcon from "../../../assets/AddNewContactIcon/NotificationsActiveIcon.svg";
import { Person, Email, Phone, LocationOn, RecordVoiceOver } from "@mui/icons-material";
import {
  Avatar,
  Border,
  CategoryImg,
  Contacts,
  GeneralInformationGrid,
  InputGrid,
  PlusImg,
  SelectCategoryButton,
  StyledAvatarImg,
  StyledForm,
  StyledLink,
  Wrapper,
} from "./style";
import Input from "../../atoms/Input/Input";
import Plus from "../../../assets/Icon/Plus.svg";
import { InputWithFormik } from "../../atoms/InputWithFormik/InputWithFormik";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../../atoms/Button/Button";

const AddNewContact = () => {
  const [addPhoneNumber, setAddPhoneNumber] = useState(false);
  const [addEmail, setAddEmail] = useState(false);
  const [category, setCategory] = useState("General information");

  const SocialCategoty = [
    {
      Text: "Instagram",
      value: 10,
    },
    {
      Text: "Facebook",
      value: 20,
    },
  ];

  const CreateContactSchema = yup.object().shape({
    fullName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    secondEmail: yup.string().email("Invalid email"),
    phone: yup.string().min(7, "Too Short!").max(10, "Too Long!").required("Required"),
    secondPhone: yup.string().min(7, "Too Short!").max(10, "Too Long!"),
    address: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    social: yup.object().required("Required"),
    role: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  return (
    <Wrapper container item xs={12}>
      <Contacts item xs={3}>
        <Avatar container>
          <StyledAvatarImg src={AddNewContactImg} alt="Avatar" />
        </Avatar>
        <Grid container height="110px">
          <Grid container padding="20px 0">
            <SelectCategoryButton
              $background={category === "General information" ? "#F8F9FC" : "#fff"}
              onClick={() => setCategory("General information")}
            >
              {category === "General information" ? (
                <CategoryImg src={AllContactActive} alt="Icon" />
              ) : (
                <CategoryImg src={AllContact} alt="Icon" />
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
      </Contacts>
      {category === "General information" && (
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            secondEmail: "",
            phone: "",
            secondPhone: "",
            address: "",
            social: "",
            role: "",
          }}
          validationSchema={CreateContactSchema}
          onSubmit={(values: any) => console.log(values)}
          validateOnChange
          validateOnBlur
        >
          {props => (
            <GeneralInformationGrid container item xs={9}>
              <StyledForm>
                <Text variant="H4">General information</Text>
                <InputGrid container>
                  <Grid container gap="20px" width="440px" flexDirection="column">
                    <InputWithFormik
                      placeholder={"Start typing..."}
                      name="fullName"
                      label="Full Name"
                      endIcon={<Person />}
                    />
                    <InputWithFormik
                      placeholder={"Start typing..."}
                      name="email"
                      type="email"
                      label="Email"
                      endIcon={<Email />}
                    />
                    <InputWithFormik
                      placeholder={"Start typing..."}
                      name="phone"
                      label="Phone"
                      endIcon={<Phone />}
                    />
                    <InputWithFormik
                      placeholder={"Start typing..."}
                      name="address"
                      label="Address line"
                      endIcon={<LocationOn />}
                    />
                    <Input
                      variant="Select"
                      width="440px"
                      title="Social"
                      text="Select social profile"
                      SelectArray={SocialCategoty}
                      onChange={(value: number) =>
                        SocialCategoty.some(
                          x => x.value === value && props.setFieldValue("social", x.Text, true),
                        )
                      }
                    />
                  </Grid>
                  <Grid container gap="20px" width="440px" flexDirection="column">
                    <InputWithFormik
                      placeholder={"Start typing..."}
                      name="role"
                      label="Role"
                      endIcon={<RecordVoiceOver />}
                    />
                    <Grid container alignItems="center" height="67px">
                      {addEmail === false ? (
                        <Grid container gap="10px">
                          <PlusImg src={Plus} alt="Add Email" onClick={() => setAddEmail(true)} />
                          <Text variant="BOLD" color="#8083A3">
                            Add Email
                          </Text>
                        </Grid>
                      ) : (
                        <Grid container height="67px">
                          <InputWithFormik
                            placeholder={"Start typing..."}
                            name="secondEmail"
                            type="email"
                            label="Second Email"
                            endIcon={<Email />}
                          />
                        </Grid>
                      )}
                    </Grid>
                    <Grid container alignItems="center" height="67px">
                      {addPhoneNumber === false ? (
                        <Grid container gap="10px">
                          <PlusImg
                            src={Plus}
                            alt="Add Email"
                            onClick={() => setAddPhoneNumber(true)}
                          />
                          <Text variant="BOLD" color="#8083A3">
                            Add Phone Number
                          </Text>
                        </Grid>
                      ) : (
                        <Grid container height="67px">
                          <InputWithFormik
                            placeholder={"Start typing..."}
                            name="secondPhone"
                            label="Second Phone"
                            endIcon={<Phone />}
                          />
                        </Grid>
                      )}
                    </Grid>
                    <Grid container paddingTop={"124px"}>
                      <InputWithFormik
                        placeholder={"Enter link to your profile"}
                        name="link"
                        label="Link"
                        endIcon={<LocationOn />}
                      />
                    </Grid>
                  </Grid>
                </InputGrid>
                <Grid container justifyContent="space-between">
                  <Grid container gap="10px" width="auto">
                    <Button type="submit" variant="FilledActive" width="220px">
                      Create New Account
                    </Button>
                  </Grid>
                  <StyledLink to="/Contacts">
                    <Button variant="FilledRestingLight" width="125px">
                      Cancel
                    </Button>
                  </StyledLink>
                </Grid>
              </StyledForm>
            </GeneralInformationGrid>
          )}
        </Formik>
      )}
    </Wrapper>
  );
};

export default AddNewContact;
