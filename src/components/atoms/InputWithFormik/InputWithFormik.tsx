import {IconButton, InputAdornment, InputLabel} from "@mui/material";
import {Field} from "formik";
import {MouseEventHandler, ReactNode} from "react";
import {InputField} from "./style";

type InputWithFormikProps = {
  name: string
  label: string
  type?: string
  endIcon?: ReactNode
  hideInput?: boolean
  onIconClick?: MouseEventHandler<HTMLButtonElement>
}

export const InputWithFormik = ({
  name,
  type = "text",
  label,
  endIcon,
  hideInput = true,
  onIconClick,
}: InputWithFormikProps) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Field
        component={InputField}
        name={name}
        type={hideInput ? type : "password"}
        InputProps={{
          endAdornment: endIcon && (
            <InputAdornment position="end">
              {onIconClick ? (
                <IconButton aria-label={`${name} input icon`} edge="end" onClick={onIconClick}>
                  {endIcon}
                </IconButton>
              ) : (
                endIcon
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
