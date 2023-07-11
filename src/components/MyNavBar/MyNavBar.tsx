import { Navbar, Button, Flex, TextInput } from "@mantine/core";
import ClientsList from "../ClientsList";
import NewClientLink from "../NewClientLink";
import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { clientsSelector, fetchClients } from "../../store/clientsSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import "./MyNavBar.css";

interface IMyNavBarProps {
  opened: boolean;
}

export default function MyNavBar({ opened }: IMyNavBarProps) {
  const dispatch = useAppDispatch();
  const clients = useSelector(clientsSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: Object.fromEntries(searchParams.entries()),
  });

  useEffect(() => {
    dispatch(fetchClients(searchParams));
  }, [dispatch, searchParams]);

  const handleSubmit = async () => {
    setSearchParams(form.values);
    const newSearchParams = new URLSearchParams(form.values);
    const data = await dispatch(fetchClients(newSearchParams)).unwrap();
    if (data.length === 0) {
      navigate(`/?${newSearchParams.toString()}`);
    } else {
      const firstId = data[0]._id;
      navigate(`${firstId}/?${newSearchParams.toString()}`);
    }
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
              type='search'
              size='lg'
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
