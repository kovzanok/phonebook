import { Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { clientsSelector } from "../store/clientsSlice";

export default function Main() {
  const clients = useSelector(clientsSelector);

  if (clients.length !== 0) {
    return (
      <Title mt='50px' order={2} ta='center'>
        Выберите контакт
      </Title>
    );
  }
  return (
    <Title mt='50px' order={2} ta='center'>
      Контакты не найдены
    </Title>
  );
}
