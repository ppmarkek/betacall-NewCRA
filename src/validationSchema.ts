import * as yup from "yup";

export const CreateContactSchema = yup.object().shape({
  fullName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  secondEmail: yup.string().email("Invalid email"),
  phone: yup.string().min(7, "Too Short!").max(15, "Too Long!").required("Required"),
  secondPhone: yup.string().min(7, "Too Short!").max(15, "Too Long!"),
  addressLine: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  social: yup.string().required("Required"),
  bio: yup.string().required("Required"),
  role: yup.string().min(2, "Too Short!").required("Required"),
});

export const CreateEventSchema = yup.object().shape({
  title: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  note: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  date: yup.object().required("Required"),
  timeFrom: yup.object().required("Required"),
  timeTo: yup.object().required("Required"),
});

export const SignupSchema = yup.object().shape({
  firstname: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lastname: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

export const validatePassword = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords must match"),
});
