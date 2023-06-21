import { Navbar, Button, Flex, TextInput } from "@mantine/core";
import ClientsList from "./ClientsList";
import NewClientLink from "./NewClientLink";
import { IClient } from "../types";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import { useLocation } from "react-router";

interface IMyNavBarProps {
  opened: boolean;
}

export default function MyNavBar({ opened }: IMyNavBarProps) {
  const [clients, setClients] = useState<IClient[]>([]);
  const location = useLocation();
  useEffect(() => {
    axios.get("/clients/all").then((res: AxiosResponse) => {
      setClients(res.data);
    });
  }, [location.pathname]);

  return (
    <Navbar
      hidden={!opened}
      p='md'
      hiddenBreakpoint={880}
      width={{ sm: 250, md: 300, lg: 400 }}
    >
      <Flex direction='column' align='center' gap='15px'>
        <form
          style={{
            borderBottom: "1px solid rgb(218 221 224",
            paddingBottom: "20px",
          }}
        >
          <Flex justify='center' align='center' gap='15px'>
            <TextInput width='30em' placeholder='Поиск'></TextInput>
            <Button type='submit'>Поиск</Button>
          </Flex>
        </form>
        <NewClientLink />
        <ClientsList clients={clients} />
      </Flex>
    </Navbar>
  );
}
