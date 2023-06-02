import React from "react";
import { IClient } from "../types";
import { Title, Flex, ActionIcon } from "@mantine/core";
import SubstationList from "../components/SubstationsList";
import { ContactsList } from "../components/ContactsList";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
        <Flex gap='10px' align='end'>
          <Title fz='30px' size='h2'>
            {client.name}
          </Title>
          <ActionIcon variant='outline'>
            <NavLink to='/1/edit'>
              <AiOutlineEdit color='initial' size='30px' />
            </NavLink>
          </ActionIcon>
          <ActionIcon variant='outline'>
            <AiFillDelete color='#ed4c4c' size='30px' />
          </ActionIcon>
        </Flex>

        <SubstationList substations={client.substations} />
        <ContactsList contacts={client.contacts}>
          Контакты для связи
        </ContactsList>
        <ContactsList contacts={client.people}>Персонал</ContactsList>
      </Flex>
    </>
  );
}
