import { create } from "zustand";

interface IUserStore {
  username: string;
  setUsername: (newUsername: string) => void;
  balance: number;
  setBalance: (newBalance: number) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  username: "",
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  balance: 100,
  setBalance: (newBalance) => set(() => ({ balance: newBalance })),
}));
