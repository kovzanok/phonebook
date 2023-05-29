import { Outlet } from "react-router-dom";

import {
  AppShell,
  Navbar,
  Text,
  useMantineTheme,
  MantineTheme,
} from "@mantine/core";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import { useState } from "react";

export default function Layout() {
  const [opened, setOpened] = useState<boolean>(false);
  const theme: MantineTheme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      navbar={
        <Navbar
          hidden={!opened}
          p='md'
          hiddenBreakpoint='sm'
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      footer={<MyFooter></MyFooter>}
      header={<MyHeader theme={theme} setOpened={setOpened} opened={opened} />}
    >
      <Text>
        <Outlet></Outlet>
      </Text>
    </AppShell>
  );
}
