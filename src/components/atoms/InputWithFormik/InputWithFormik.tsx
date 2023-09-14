import { Grid, IconButton, InputLabel } from "@mui/material";
import { Field } from "formik";
import { MouseEventHandler, ReactNode, useState } from "react";
import { InputAdornmentWithStyle, InputField } from "./style";

type InputWithFormikProps = {
  name: string
  label: string
  type?: string
  endIcon?: ReactNode
  hideInput?: boolean
  onIconClick?: MouseEventHandler<HTMLButtonElement>
  inputIconColor?: string
}

export const InputWithFormik = ({
  name,
  type = "text",
  label,
  endIcon,
  hideInput = true,
  onIconClick,
  inputIconColor = "black",
}: InputWithFormikProps) => {
  const [inputInFocus, setInputInFocus] = useState(false);
  return (
    <Grid display={"flex"} flexDirection={"column"} height={"75px"} width={"100%"}>
      <InputLabel>{label}</InputLabel>
      <Field
        component={InputField}
        name={name}
        type={hideInput ? type : "password"}
        onBlur={() => setInputInFocus(false)}
        onFocus={() => setInputInFocus(true)}
        InputProps={{
          endAdornment: endIcon && (
            <InputAdornmentWithStyle
              position="end"
              $focused={inputInFocus}
              $inputIconColor={inputIconColor}
            >
              {onIconClick ? (
                <IconButton aria-label={`${name} input icon`} edge="end" onClick={onIconClick}>
                  {endIcon}
                </IconButton>
              ) : (
                endIcon
              )}
            </InputAdornmentWithStyle>
          ),
        }}
      />
    </Grid>
  );
};
