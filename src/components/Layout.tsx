import { Navigate, Outlet } from "react-router-dom";
import { AppShell, Text, useMantineTheme, MantineTheme } from "@mantine/core";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import { useState } from "react";
import MyNavBar from "./MyNavBar";
import { useSelector } from "react-redux";
import { authSelector } from "../store/authSlice";

window.onunload = () => {
  const pathname = window.location.pathname;
  if (pathname !== "/login" && pathname !== "/register") {
    window.sessionStorage.setItem("prevUrl", window.location.pathname);
  }
};

export default function Layout() {
  const auth = useSelector(authSelector);
  const [opened, setOpened] = useState<boolean>(false);
  const theme: MantineTheme = useMantineTheme();
  if (!auth.isAuth) {
    return <Navigate to='/login' />;
  }
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
      navbarOffsetBreakpoint={880}
      navbar={<MyNavBar opened={opened} />}
      footer={<MyFooter></MyFooter>}
      header={<MyHeader theme={theme} setOpened={setOpened} opened={opened} />}
    >
      <Text>
        <Outlet></Outlet>
      </Text>
    </AppShell>
  );
}
