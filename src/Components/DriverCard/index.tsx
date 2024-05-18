import { IDriver } from "../../Store/driversStore";
import { MainContainer } from "./styles";
import Button from "../Button";
import { useDriversStore } from "../../Store/driversStore";
import { useNavigate } from "react-router-dom";

export default function DriverCard(driver: IDriver) {
  const { setCurrentDriver } = useDriversStore();
  const navigate = useNavigate();

  const chooseDriver = (id: number) => {
    setCurrentDriver(id);
    navigate("/race");
  };

  return (
    <MainContainer>
      <h3 style={{ textAlign: "center" }}>{driver.name}</h3>
      <img
        src={driver.driverPhoto}
        style={{
          width: "100%",
          alignSelf: "center",
          background: "lightgray",
        }}
        alt={"Foto de" + driver.name}
      />
      <p style={{ textAlign: "center" }}>Equipe: {driver.team}</p>
      <Button onClick={() => chooseDriver(driver.id)}>Selecionar</Button>
    </MainContainer>
  );
}
