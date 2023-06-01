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
      { id: 1, name: "Заямное", info: "ф.1" },
      { id: 2, name: "qwe", info: "ф.1" },
    ],
    people: [
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: [{ value: "80291654195", id: 1 }],
        destination: [{ value: "asdsa@asdas.asd", id: 1 }],
        info: "не звонить",
        id: 1,
      },
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: [{ value: "80291654195", id: 1 }],
        destination: [{ value: "asdsa@asdas.asd", id: 1 }],
        info: "",
        id: 1,
      },
    ],
    contacts: [
      {
        name: "Для согласований",
        phones: [
          { value: "375-29-1654195", id: 1 },
          { value: "672-02-12", id: 1 },
        ],
        destination: [
          { value: "123-40-23", id: 1 },
          { value: "123-40-23", id: 1 },
        ],
        id: 1,
      },
      {
        name: "Для согласований",
        phones: [
          { value: "672-02-12", id: 1 },
          { value: "672-02-12", id: 1 },
        ],
        destination: [
          { value: "123-40-23", id: 1 },
          { value: "123-40-23", id: 1 },
        ],
        id: 1,
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
