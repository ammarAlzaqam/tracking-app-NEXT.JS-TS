"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export default function MuiThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
