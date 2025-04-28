import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useAuthStore } from "./useAuthStore";

type Transaction = {
  _id: string;
  name: string;
  amount: number;
  startDate?: Date;
};

interface transactionStates {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: string) => void;
  signout: () => void;
}

export const useTransactionsStore = create<transactionStates>()(
  persist(
    immer((set) => ({
      transactions: [],
      setTransactions: (transactions) =>
        set((state) => {
          state.transactions = transactions;
        }),
      addTransaction: (transaction) =>
        set((state) => {
          state.transactions.push(transaction);
        }),
      removeTransaction: (id) =>
        set((state) => {
          state.transactions = state.transactions.filter((t) => t._id !== id);
        }),

      signout: () =>
        set((state) => {
          useAuthStore.getState().signout();
          state.transactions = [];
        }),
    })),
    {
      name: "transactions-storage",
    }
  )
);
