import { useTransactionsStore } from "@/app/store/useTransactionsStore";
import { Box, Divider, Paper, Typography } from "@mui/material";
import ViewTransaction from "./item";

export default function TransactionsHistory() {
  const { transactions } = useTransactionsStore();
  return (
    <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
      <Box>
        <Typography variant="h5" sx={{ width: "fit-content", mb: 1 }}>
          History
        </Typography>
        <Paper
          elevation={5}
          sx={{ p: 2, height: 300, width: "300px", overflow: "auto" }}
        >
          {transactions.map((t) => (
            <Box sx={{ mb: 1, p: 1 }}>
              <ViewTransaction transaction={t} />
              <Divider />
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
