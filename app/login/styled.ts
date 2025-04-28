"use client";
import { Typography } from "@mui/material";
import { styled as muiStyled, useMediaQuery } from "@mui/system";
import Image from "next/image";

export const WalletLogo = muiStyled(Image)({
  borderRadius: "50%",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  margin: "0 auto",
  display: "block",
  width: "30%",
  height: "auto",
});

export const Title = muiStyled(Typography)(({ theme }) => {
  const smScreen = theme.breakpoints.down("sm");
  const isMobile = useMediaQuery(smScreen);
  return {
    color: theme.palette.primary.main,
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    marginTop: theme.spacing(2),
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 1.5,
    fontSize: isMobile ? "6vw" : "2.1rem",
    marginBottom: theme.spacing(4),
  };
});

export const SubTitle = muiStyled(Typography)(({ theme }) => {
  const smScreen = theme.breakpoints.down("sm");
  const isMobile = useMediaQuery(smScreen);
  return {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: isMobile ? "4vw" : "1.5rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    litterSpacing: 1.2,
    marginBottom: theme.spacing(2),
  };
});
