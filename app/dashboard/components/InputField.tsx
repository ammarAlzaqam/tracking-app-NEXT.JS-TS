"use client";
import { InputAdornment, TextField } from "@mui/material";
import { Paid, Error, ReceiptLong, DateRange } from "@mui/icons-material";
import { FormikProps, FormikValues } from "formik";

interface Icons {
  [key: string]: React.ReactElement;
}
const icons: Icons = {
  name: <ReceiptLong color="primary" />,
  amount: <Paid color="primary" />,
  startDate: <DateRange color="primary" />,
};

interface InputFieldProps {
  type: "name" | "amount" | "startDate";
  formik: FormikProps<FormikValues>;
}

export default function InputField({
  type,
  formik,
}: InputFieldProps): React.ReactElement {
  return (
    <TextField
      sx={{
        input: {
          color:
            type === "amount"
              ? formik.values.amount.startsWith("-")
                ? "error.main"
                : "success.main"
              : "",
        },
      }}
      fullWidth
      id={type}
      name={type}
      label={type.charAt(0).toUpperCase() + type.slice(1)}
      type="text"
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
