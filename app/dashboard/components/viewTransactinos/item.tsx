import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTransactionsApiRequest, Transaction } from "@/app/libs/request";
import dayjs from "dayjs";
import { useTransactionsStore } from "@/app/store/useTransactionsStore";

interface Props {
  transaction: Transaction;
}

const handelDeleteTransaction = async (
  id: string,
  removeTransaction: (id: string) => void
) => {};

export default function ViewTransaction({ transaction }: Props) {
  const { removeTransaction } = useTransactionsStore();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography width={100}>{transaction.name}</Typography>
        <Typography>
          {dayjs(transaction.startDate).format("YYYY/MM/DD")}
        </Typography>
      </Box>
      <Typography>{transaction.amount}</Typography>

      <IconButton>
        <DeleteIcon
          color="error"
          onClick={async () => {
            removeTransaction(transaction._id);
            await deleteTransactionsApiRequest(transaction._id);
          }}
        />
      </IconButton>
    </Box>
  );
}
