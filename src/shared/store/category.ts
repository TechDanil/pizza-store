import { create } from "zustand";

type CategoryState = {
  activeId: number;
  setActiveId: (activeId: number) => void;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  activeId: 1,
  setActiveId: (activeId) => set({ activeId }),
}));
