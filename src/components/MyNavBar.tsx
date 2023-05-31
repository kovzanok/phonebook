import { Navbar, Button, Flex, TextInput } from "@mantine/core";
import ClientsList from "./ClientsList";
import NewClientLink from "./NewClientLink";
import { IClient } from "../types";

interface IMyNavBarProps {
  opened: boolean;
}

export default function MyNavBar({ opened }: IMyNavBarProps) {
  const clients: IClient[] = [
    {
      id: 1,
      name: "Дорорс",
      substations: [{ id: 1, name: "Заямное", info: "ф.1" }],
      people: [
        {
          position: "Энергетик",
          name: "Матушонок",
          phones: [{ number: "123", id: 1 }],
          info: "",
          id: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Дорорс",
      substations: [{ id: 1, name: "Заямное", info: "ф.1" }],
      people: [
        {
          position: "Энергетик",
          name: "Матушонок",
          phones: [{ number: "123", id: 1 }],
          info: "",
          id: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Дорорс",
      substations: [{ id: 1, name: "Заямное", info: "ф.1" }],
      people: [
        {
          position: "Энергетик",
          name: "Матушонок",
          phones: [{ number: "123", id: 1 }],
          info: "",
          id: 1,
        },
      ],
    },
    {
      id: 4,
      name: "Дорорс",
      substations: [{ id: 1, name: "Заямное", info: "ф.1" }],
      people: [
        {
          position: "Энергетик",
          name: "Матушонок",
          phones: [{ number: "123", id: 1 }],
          info: "",
          id: 1,
        },
      ],
    },
    {
      id: 5,
      name: "Дорорс",
      substations: [{ id: 1, name: "Заямное", info: "ф.1" }],
      people: [
        {
          position: "Энергетик",
          name: "Матушонок",
          phones: [{ number: "123", id: 1 }],
          info: "",
          id: 1,
        },
      ],
    },
  ];
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
