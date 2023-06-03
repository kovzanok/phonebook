import React from "react";
import { IClient } from "../types";
import { Title, Flex, ActionIcon, Loader } from "@mantine/core";
import SubstationList from "../components/SubstationsList";
import { ContactsList } from "../components/ContactsList";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import axios from "../axios/axios";

export default function ClientPage() {
  const { id } = useParams();
  const [client, setClient] = useState<IClient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/clients/${id}`).then((res: AxiosResponse) => {
      setClient(res.data);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading || !client) {
    return (
      <Flex h='300px' align='center' justify='center'>
        <Loader size='100px'/>
      </Flex>
    );
  }
  return (
    <>
      <Flex gap='20px' direction='column' align='center'>
        <Flex gap='10px' align='center'>
          <Title fz='30px' size='h2'>
            {client.name}
          </Title>
          <ActionIcon variant='outline'>
            <NavLink to={`/${id}/edit`}>
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
