import { InputLabel } from "@mui/material";
import { Field } from "formik";
import { DatePicker } from "formik-mui-lab";

type DatePickerWithFormikProps = {
  name: string
  label?: string
  onChange?: React.ChangeEvent<HTMLInputElement>
}

export const DatePickerWithFormik = ({ name, label, onChange }: DatePickerWithFormikProps) => {
  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Field
        component={DatePicker}
        label="label"
        name={name}
        textField={{ helperText: "Helper text" }}
        inputFormat="dd/MM/yyyy"
        onChange={onChange}
      />
    </>
  );
};
