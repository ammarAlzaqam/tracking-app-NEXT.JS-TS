"use client";
import { InputAdornment, TextField } from "@mui/material";
import {
  AccountCircle,
  Error,
  Lock,
  Email,
  CheckCircle,
} from "@mui/icons-material";
import { FormikProps, FormikValues } from "formik";
import React from "react";

interface Icons {
  [key: string]: React.ReactElement;
}

const icons: Icons = {
  username: <AccountCircle color="primary" />,
  email: <Email color="primary" />,
  password: <Lock color="primary" />,
  confirmPassword: <CheckCircle color="primary" />,
};

interface InputFieldProps {
  type: "username" | "password" | "email" | "confirmPassword";
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
      type={
        type === "password" || type === "confirmPassword" ? "password" : "text"
      }
      variant="outlined"
      value={formik.values[type]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[type] && Boolean(formik.errors[type])}
      helperText={formik.touched[type] && (formik.errors[type] as string)}
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
