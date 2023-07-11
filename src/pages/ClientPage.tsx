import { IClient } from "../types";
import { Title, Flex, ActionIcon, Loader, Text } from "@mantine/core";
import SubstationList from "../components/SubstationsList";
import { ContactsList } from "../components/ContactsList";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import axios from "../axios/axios";
import { modals } from "@mantine/modals";
import { useAppDispatch } from "../store/store";
import { clientsSelector, removeClient } from "../store/clientsSlice";
import { useSelector } from "react-redux";

export default function ClientPage() {
  const { id } = useParams();
  const [client, setClient] = useState<IClient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const clients = useSelector(clientsSelector);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/clients/${id}`).then((res: AxiosResponse) => {
      setClient(res.data);
      setIsLoading(false);
    });
  }, [id]);

  const openModal = () =>
    modals.openConfirmModal({
      children: (
        <Text ta='center' fz={20} size='sm'>
          Вы действительно хотите удалить контакт потребителя{" "}
          <strong>{client?.name}</strong>
        </Text>
      ),
      centered: true,
      confirmProps: { color: "red" },
      labels: { confirm: "Да", cancel: "Нет" },
      onConfirm: deleteContact,
      closeOnConfirm: true,
      closeOnCancel: true,
      groupProps: { position: "center" },
      closeButtonProps: { display: "none" },
    });

  const deleteContact = async () => {
    console.log(clients);
    await axios.delete(`clients/${id}`);
    if (id) {
      dispatch(removeClient(id));
    }
    const nextClient = clients.find((client) => client._id !== id);
    if (clients.length !== 0 && nextClient) {
      navigate(`/${nextClient._id}/?${searchParams.toString()}`);
    } else {
      navigate(`/?${searchParams.toString()}`);
    }
  };

  if (isLoading || !client) {
    return (
      <Flex h='300px' align='center' justify='center'>
        <Loader size='100px' />
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
          <ActionIcon onClick={openModal} variant='outline'>
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
