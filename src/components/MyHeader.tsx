import { Header, MediaQuery, Burger, Title, MantineTheme } from "@mantine/core";

interface IMyHeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MantineTheme;
}

export default function MyHeader({ opened, setOpened, theme }: IMyHeaderProps) {
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

        <Title m='auto' ta='center' size='h4'>
          Телефонный справочник потребителей
        </Title>
      </div>
    </Header>
  );
}
