import { ButtonContainer } from "./styles";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: IButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}
