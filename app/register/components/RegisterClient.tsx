"use client";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { SubTitle, Title, WalletLogo } from "../../login/styled";
import InputField from "./InputField";
import UseRegisterFormik from "../Formik";
import { useErrorStore } from "@/app/store/useErrorStore";

const fieldTypes: Array<"username" | "email" | "password" | "confirmPassword"> =
  ["username", "email", "password", "confirmPassword"];

export const RegisterClient: React.FC = () => {
  const formik = UseRegisterFormik();
  const { error } = useErrorStore();

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          px: { xs: 1, sm: 3 },
          py: { xs: 0.5, sm: 3 },
          borderRadius: 2,
          backgroundColor: "background.default",
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
          Create your account
        </SubTitle>

        {error.register && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {error.register}
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
            Register
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
          Already have an account?
          <Button
            variant="text"
            color="primary"
            sx={{ textTransform: "none", fontWeight: "bold", ml: 0.5 }}
            component={Link}
            href="/login"
          >
            Login
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterClient;
