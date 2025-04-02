import { create } from "zustand";

export const useStore = create((set) => ({
  cardZIndex: 0,
  setCardZIndex: (zIndex: number) => set({ cardZIndex: zIndex })
}));
