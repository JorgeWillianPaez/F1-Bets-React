import { IDriver } from "./driversStore";
import Alonso from "../Assets/Drivers/alonso.png";
import Verstappen from "../Assets/Drivers/verstappen.png";
import Sainz from "../Assets/Drivers/sainz.png";
import Hamilton from "../Assets/Drivers/hamilton.png";
import Norris from "../Assets/Drivers/norris.png";
import Gasly from "../Assets/Drivers/gasly.png";
import Bottas from "../Assets/Drivers/bottas.png";
import Magnussen from "../Assets/Drivers/magnussen.png";
import Tsunoda from "../Assets/Drivers/tsunoda.png";
import Sargeant from "../Assets/Drivers/sargeant.png";

const drivers: IDriver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    birthdate: "30/09/1997",
    height: 1.81,
    team: "Red Bull Racing",
    carNumber: 1,
    driverPhoto: Verstappen,
    carImage: "",
  },
  {
    id: 2,
    name: "Carlos Sainz",
    birthdate: "01/09/1994",
    height: 1.78,
    team: "Ferrari",
    carNumber: 55,
    driverPhoto: Sainz,
    carImage: "",
  },
  {
    id: 3,
    name: "Lewis Hamilton",
    birthdate: "07/01/1985",
    height: 1.74,
    team: "Mercedes",
    carNumber: 44,
    driverPhoto: Hamilton,
    carImage: "",
  },
  {
    id: 4,
    name: "Lando Norris",
    birthdate: "13/11/1999",
    height: 1.7,
    team: "McLaren",
    carNumber: 4,
    driverPhoto: Norris,
    carImage: "",
  },
  {
    id: 5,
    name: "Fernando Alonso",
    birthdate: "29/07/1981",
    height: 1.71,
    team: "Aston Martin",
    carNumber: 14,
    driverPhoto: Alonso,
    carImage: "",
  },
  {
    id: 6,
    name: "Pierre Gasly",
    birthdate: "07/02/1996",
    height: 1.77,
    team: "Alpine",
    carNumber: 10,
    driverPhoto: Gasly,
    carImage: "",
  },
  {
    id: 7,
    name: "Valtteri Bottas",
    birthdate: "28/08/1989",
    height: 1.73,
    team: "Alfa Romeo",
    carNumber: 77,
    driverPhoto: Bottas,
    carImage: "",
  },
  {
    id: 8,
    name: "Kevin Magnussen",
    birthdate: "05/10/1992",
    height: 1.74,
    team: "Haas",
    carNumber: 20,
    driverPhoto: Magnussen,
    carImage: "",
  },
  {
    id: 9,
    name: "Yuki Tsunoda",
    birthdate: "11/05/2000",
    height: 1.59,
    team: "AlphaTauri",
    carNumber: 22,
    driverPhoto: Tsunoda,
    carImage: "",
  },
  {
    id: 10,
    name: "Logan Sargeant",
    birthdate: "31/12/2000",
    height: 1.85,
    team: "Williams",
    carNumber: 2,
    driverPhoto: Sargeant,
    carImage: "",
  },
];

export default drivers;
