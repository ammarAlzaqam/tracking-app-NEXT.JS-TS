import { Transaction } from "@/app/libs/request";
import { useTransactionsStore } from "@/app/store/useTransactionsStore";
import { Box, Divider, Paper, Typography } from "@mui/material";

interface Props {
  transactions: Transaction;
}

export default function IncomeExpense() {
  const { transactions } = useTransactionsStore();
  const income = transactions.filter((t) => t.amount > 0);
  const expense = transactions.filter((t) => t.amount < 0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: ["20px", "50px"],
      }}
    >
      <Paper
        elevation={15}
        sx={{
          width: ["130px", "180px"],
          height: ["130px", "180px"],
          p: [1, 5],
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="h6">Income </Typography>
        <Divider sx={{ width: "80%", m: 1 }} />
        <Typography variant="h4" color="success">
          ${income.reduce((total, t) => total + t.amount, 0)}
        </Typography>
      </Paper>

      <Paper
        elevation={15}
        sx={{
          width: ["130px", "180px"],
          height: ["130px", "180px"],
          p: [1, 5],
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="h6">Expense </Typography>
        <Divider sx={{ width: "80%", m: 1 }} />
        <Typography variant="h4" color="error">
          ${expense.reduce((total, t) => total + t.amount, 0) * -1}
        </Typography>
      </Paper>
    </Box>
  );
}
