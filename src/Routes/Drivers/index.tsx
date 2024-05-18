import { MainContainer, DriversHeader, DriversContainer } from "./styles";
import DriverCard from "../../Components/DriverCard";
import { useDriversStore } from "../../Store/driversStore";

export default function Drivers() {
  const { drivers } = useDriversStore();
  return (
    <MainContainer>
      <h1>Escolha seu piloto</h1>
      <DriversContainer>
        {drivers.length > 0 &&
          drivers.map((driver) => (
            <DriverCard
              key={driver.id}
              id={driver.id}
              name={driver.name}
              birthdate={driver.birthdate}
              height={driver.height}
              team={driver.team}
              carNumber={driver.carNumber}
              driverPhoto={driver.driverPhoto}
              carImage={driver.carImage}
            />
          ))}
      </DriversContainer>
    </MainContainer>
  );
}
