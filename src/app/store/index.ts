import { create } from "zustand";
import type { Metadata } from "next";

export const useStore = create((set) => ({
  blogMetaData: { title: "", description: "" },
  setBlogMetaData: (metadata: Metadata) => set({ blogMetaData: metadata })
}));
