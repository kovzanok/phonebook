import React from "react";
import { IClient } from "../types";
import { Title, Flex } from "@mantine/core";
import SubstationList from "../components/SubstationsList";
import { ContactsList } from "../components/ContactsList";

export default function ClientPage() {
  const client: IClient = {
    id: 1,
    name: "Дорорс",
    substations: [
      { name: "Заямное", info: "ф.1" },
      { name: "qwe", info: "ф.1" },
    ],
    people: [
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: ["80291654195"],
        email: ["asdsa@asdas.asd"],
        info: "не звонить",
      },
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: ["80291654195"],
        email: ["asdsa@asdas.asd"],
        info: "",
      },
    ],
    contacts: [
      {
        name: "Для согласований",
        phones: ["375-29-1654195", "672-02-12"],
        email: ["123-40-23", "123-40-23"],
      },
      {
        name: "Для согласований",
        phones: ["672-02-12", "672-02-12"],
        email: ["123-40-23", "123-40-23"],
      },
    ],
  };

  return (
    <>
      <Flex gap='20px' direction='column' align='center'>
        <Title fz='30px' size='h2'>
          {client.name}
        </Title>
        <SubstationList substations={client.substations} />
        <ContactsList contacts={client.contacts}>
          Контакты для связи
        </ContactsList>
        <ContactsList contacts={client.people}>Персонал</ContactsList>
      </Flex>
    </>
  );
}
