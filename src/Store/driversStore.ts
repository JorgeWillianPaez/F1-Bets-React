import { create } from "zustand";

interface IDriver {
  name: string;
}

interface IDriversStore {
  drivers: IDriver[];
}

export const useDriversStore = create<IDriversStore>((set) => ({
  drivers: [],
}));
