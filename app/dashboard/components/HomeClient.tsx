"use client";
import React, { useEffect } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { Box, Container, Typography } from "@mui/material";
import { Title } from "@/app/login/styled";
import { getTransactionsApiRequest } from "@/app/libs/request";
import { useTransactionsStore } from "@/app/store/useTransactionsStore";
import IncomeExpense from "./IncomeExpense";
import AddTransaction from "./AddTransaction";
import TransactionsHistory from "./viewTransactinos/History";

export default function HomeClient(): React.JSX.Element {
  const { user } = useAuthStore();
  const { setTransactions, transactions } = useTransactionsStore();
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactionsData = await getTransactionsApiRequest();
      setTransactions(transactionsData);
    };
    fetchTransactions();
  }, [setTransactions]);
  return (
    <Container>
      <Title>Expense Tracker - {user?.username}</Title>
      <Typography
        sx={{ color: "text.secondary", textAlign: "center", my: 2 }}
        variant="h6"
      >
        Your Balance
      </Typography>
      <Typography
        sx={{ color: "text.secondary", textAlign: "center", my: 2 }}
        variant="h6"
      >
        ${transactions.reduce((total, t) => total + t.amount, 0) || 0}
      </Typography>

      <IncomeExpense />

      <Box
        sx={{
          mt: 5,
          display: ["block", "flex"],
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <AddTransaction />
        <TransactionsHistory />
      </Box>
    </Container>
  );
}
