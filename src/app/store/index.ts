import { create } from "zustand";

export const useStore = create((set) => ({
  childContentHeight: 0,
  setChildContentHeight: (height: number) => set({ childContentHeight: height })
}));
