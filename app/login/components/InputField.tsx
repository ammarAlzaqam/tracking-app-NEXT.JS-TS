"use client";
import { InputAdornment, TextField } from "@mui/material";

import {
  AccountCircle,
  Error,
  Lock,
} from "@mui/icons-material";
import { FormikProps, FormikValues } from "formik";

interface Icons {
  [key: string]: React.ReactElement;
}
const icons: Icons = {
  username: <AccountCircle color="primary" />,
  password: <Lock color="primary" />,
};

interface InputFieldProps {
  type: "username" | "password";
  formik: FormikProps<FormikValues>;
}

export default function InputField({
  type,
  formik,
}: InputFieldProps): React.ReactElement {
  return (
    <TextField
      fullWidth
      id={type}
      name={type}
      label={type.charAt(0).toUpperCase() + type.slice(1)}
      type={type === "password" ? "password" : "text"}
      variant="outlined"
      value={formik.values[type]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[type] && Boolean(formik.errors[type])}
      helperText={formik.touched[type] && formik.errors[type] as string}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {formik.touched[type] && Boolean(formik.errors[type]) ? (
                <Error color="error" />
              ) : (
                icons[type]
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
