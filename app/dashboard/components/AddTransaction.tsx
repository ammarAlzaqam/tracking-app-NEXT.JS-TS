import { Box, Button, Typography } from "@mui/material";
import InputField from "./InputField";
import useTransactionFormik from "../useTransactionFormik";
import { SubTitle } from "@/app/login/styled";

export default function AddTransaction() {
  const formik = useTransactionFormik();
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ width: "100%", display: "grid", gap: "20px" }}
    >
      <Typography variant="h5">Add new transaction</Typography>
      <InputField type="name" formik={formik} />
      <InputField type="amount" formik={formik} />
      <InputField type="startDate" formik={formik} />
      <Button type="submit" variant="contained">
        add
      </Button>
    </Box>
  );
}
