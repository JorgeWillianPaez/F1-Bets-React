import { create } from "zustand";
import drivers from "./drivers";

export interface IDriver {
  id: number;
  name: string;
  birthdate: string;
  height: number;
  team: string;
  carNumber: number;
  driverPhoto: string;
  carImage: string;
}

interface IDriversStore {
  drivers: IDriver[];
  currentDriver: IDriver | {};
  setCurrentDriver: (id: number) => void;
}

export const useDriversStore = create<IDriversStore>((set) => ({
  drivers: drivers,
  currentDriver: {},
  setCurrentDriver: (id) =>
    set(() => ({
      currentDriver: drivers.filter((driver) => driver.id === id)[0],
    })),
}));
