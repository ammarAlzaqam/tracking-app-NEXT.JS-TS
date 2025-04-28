"use client";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { SubTitle, Title, WalletLogo } from "../styled";
import InputField from "./InputField";
import useLoginFormik from "../formik";
import Link from "next/link";
import { useErrorStore } from "@/app/store/useErrorStore";

const fieldTypes: Array<"username" | "password"> = ["username", "password"];

export default function LoginClient() {
  const formik = useLoginFormik();
  const { error } = useErrorStore();
  return (
    <Container
      maxWidth="sm"
      sx={{ height: "100vh", display: "grid", placeItems: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3 },
          width: "100%",
          bgcolor: "background.default",
        }}
      >
        <WalletLogo
          src="/assets/tracker-logo.png"
          alt="Expense Tracker Logo"
          width={120}
          height={120}
        />
        <Title variant="h4" gutterBottom>
          Expense Tracker
        </Title>

        <SubTitle variant="h5" gutterBottom>
          Login to your account
        </SubTitle>

        {error?.login && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {error.login}
          </Alert>
        )}

        <form onSubmit={formik.handleSubmit}>
          {fieldTypes.map((type) => (
            <Box sx={{ mb: 2 }} key={type}>
              <InputField type={type} formik={formik} />
            </Box>
          ))}

          <Button
            color="primary"
            sx={{ color: "secondary.main" }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </form>
        <Typography
          sx={{
            mt: 2,
            textAlign: "center",
            fontSize: "0.9rem",
            color: "text.secondary",
          }}
        >
          Create a new account?
          <Button
            variant="text"
            color="primary"
            sx={{ textTransform: "none", fontWeight: "bold", ml: 0.5 }}
            component={Link}
            href="/register"
          >
            Register
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
}
