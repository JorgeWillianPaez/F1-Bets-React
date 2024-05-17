import Input from "./Components/Input";
import Button from "./Components/Button";
import { MainContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "./Store/userStore";

export default function App() {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const { setUsername } = useUserStore();

  const confirm = () => {
    if (name.length < 3) {
      setError("Nome deve possuir no mínimo 3 caracteres");
    } else {
      setError("");
      navigate("/drivers");
      setUsername(name);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainContainer>
        <h2 style={{ textAlign: "center" }}>Insira seu nome</h2>
        <Input
          type="text"
          label=""
          placeholder=""
          value={name}
          name={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
        />
        <Button onClick={confirm}>Confirm</Button>
      </MainContainer>
    </div>
  );
}
