import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Error {
  [key: string]: string | null;
}

interface errorStates {
  error: Error;
  setError: (e: string | null, type: string) => void;
}

export const useErrorStore = create<errorStates>()(
  immer((set) => ({
    error: {},
    setError: (e, type) =>
      set((state) => {
        state.error[type] = e;
      }),
  }))
);
