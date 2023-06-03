import {
  Header,
  MediaQuery,
  Burger,
  Title,
  Text,
  MantineTheme,
  Group,
  Button,
} from "@mantine/core";
import { authContextValueType } from "../types";
import { useContext } from "react";
import { AuthContext } from "../context";
interface IMyHeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MantineTheme;
}

export default function MyHeader({ opened, setOpened, theme }: IMyHeaderProps) {
  const [isAuth, setIsAuth] = useContext(AuthContext) as authContextValueType;

  const logout = () => {
    window.localStorage.removeItem("phonebook-token");
    setIsAuth(false);
  };

  return (
    <Header height={{ base: 80, md: 70 }} p='md'>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan='sm' styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            mr='auto'
            color={theme.colors.gray[6]}
          />
        </MediaQuery>
        <MediaQuery query='(max-width:430px)' styles={{ display: "none" }}>
          <Title m='auto' ta='center' size='h4'>
            Телефонный справочник потребителей
          </Title>
        </MediaQuery>

        <Group noWrap align='center' position='right'>
          <Text underline>ods</Text>
          <Button onClick={logout}>Выйти</Button>
        </Group>
      </div>
    </Header>
  );
}
