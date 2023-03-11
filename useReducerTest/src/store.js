import { create } from "zustand";

export const useBearStore = create((set) => ({
  value: 0,
  setValue: (val) => set({ value: val }),
}));
