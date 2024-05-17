import { useUserStore } from "../../Store/userStore";

export default function Drivers() {
  const { username } = useUserStore();

  return <h1>{username}</h1>;
}
