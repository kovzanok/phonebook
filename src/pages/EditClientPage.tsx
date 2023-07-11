import { useEffect, useState } from "react";
import { IClient } from "../types";
import NewClientPage from "./NewClientPage";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import { Flex, Loader } from "@mantine/core";

export default function EditClientPage() {
  const [clientToEdit, setClientToEdit] = useState<IClient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true );
    axios.get(`/clients/${id}`).then((res: AxiosResponse) => {
      setClientToEdit(res.data);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading || !clientToEdit) {
    return (
      <Flex h='300px' align='center' justify='center'>
        <Loader size='100px' />
      </Flex>
    );
  }
  return <NewClientPage client={clientToEdit} />;
}
