import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Box,
  Center,
  Text,
  Flex,
  MediaQuery,
  Title,
} from "@mantine/core";
import { useContext } from "react";
import { authContextValueType } from "../types";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import { Navigate } from "react-router-dom";
import axios from "../axios/axios";
import Axios from "axios";
import { useForm } from "@mantine/form";

export default function LoginPage() {
  const [isAuth, setIsAuth] = useContext(AuthContext) as authContextValueType;
  if (isAuth) {
    return <Navigate to='/' />;
  }

  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    },

    validate: {
      login: (value) => (value.length === 0 ? "Введите логин" : null),
      password: (value) =>
        value.length >= 5 ? null : "Минимальная длина пароля 5 символов",
    },
  });

  const submitLoginForm = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    try {
      const { token } = (await axios.post("/auth/login", { login, password }))
        .data;
      window.localStorage.setItem("phonebook-token", token);
      setIsAuth(true);
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        form.setFieldError("auth", error.response?.data.message);
      }
    }
  };

  return (
    <Center h={"100vh"}>
      <Flex gap='lg' align='center' justify='center' direction='column'>
        <Title size='h1'>Авторизация</Title>
        <MediaQuery styles={{ width: "300px" }} query='(min-width: 768px)'>
          <Box
            sx={{
              boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3);",
              borderRadius: "10px",
            }}
            p='20px'
            mx='auto'
          >
            <form
              onSubmit={form.onSubmit(submitLoginForm)}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <TextInput
                withAsterisk
                label='Логин'
                {...form.getInputProps("login")}
              />

              <PasswordInput
                withAsterisk
                label='Пароль'
                {...form.getInputProps("password")}
              />
              <Text ta='center' color='red'>
                {form.errors.auth}
              </Text>
              <Group position='center' mt='md'>
                <Button type='submit'>Войти</Button>
              </Group>
            </form>
          </Box>
        </MediaQuery>

        <Text>
          Нет аккаунта? <Link to='/register'>Перейти к регистрации</Link>
        </Text>
      </Flex>
    </Center>
  );
}
