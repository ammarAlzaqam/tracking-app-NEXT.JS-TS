import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = {
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

interface AuthState {
  user: User | null;
  signin: (user: User | null) => void;
  signout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    immer((set) => ({
      user: null,
      signin: (user) =>
        set((state) => {
          state.user = user;
        }),
      signout: () =>
        set((state) => {
          state.user = null;
        }),
    })),
    {
      name: "auth-storage",
    }
  )
);
