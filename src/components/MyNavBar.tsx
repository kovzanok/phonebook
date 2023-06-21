import { Navbar, Button, Flex, TextInput } from "@mantine/core";
import ClientsList from "./ClientsList";
import NewClientLink from "./NewClientLink";
import { IClient } from "../types";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "@mantine/form";
import { useSearchParams } from "react-router-dom";

interface IMyNavBarProps {
  opened: boolean;
}

export default function MyNavBar({ opened }: IMyNavBarProps) {
  const [clients, setClients] = useState<IClient[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm({
    initialValues: Object.fromEntries(searchParams.entries()),
  });

  useEffect(() => {
    axios
      .get("/clients/all", { params: form.values })
      .then((res: AxiosResponse) => {
        setClients(res.data);
      });
  }, [location]);

  const handleSubmit = () => {
    setSearchParams(form.values);
  };

  return (
    <Navbar
      hidden={!opened}
      p='md'
      hiddenBreakpoint={880}
      width={{ sm: 250, md: 300, lg: 400 }}
    >
      <Flex direction='column' align='center' gap='15px'>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          style={{
            borderBottom: "1px solid rgb(218 221 224",
            paddingBottom: "20px",
          }}
        >
          <Flex justify='center' align='center' gap='15px'>
            <TextInput
              width='30em'
              {...form.getInputProps("search")}
              placeholder='Поиск'
            />
            <Button type='submit'>Поиск</Button>
          </Flex>
        </form>
        <NewClientLink />
        <ClientsList clients={clients} />
      </Flex>
    </Navbar>
  );
}
