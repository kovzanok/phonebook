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

import { Link, Navigate } from "react-router-dom";
import { authContextValueType, loginContextValueType } from "../types";  
import { AuthContext, LoginContext } from "../context";
import { useContext } from "react";
import { useForm } from "@mantine/form";
import axios from "../axios/axios";
import Axios from "axios";

export default function RegisterPage() {
  const [isAuth, setIsAuth] = useContext(AuthContext) as authContextValueType;
  const [,setLogin]=useContext(LoginContext) as loginContextValueType;
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      login: (value) => (value.length === 0 ? "Введите логин" : null),
      password: (value) =>
        value.length >= 5 ? null : "Минимальная длина пароля 5 символов",
      confirmPassword: (value, values) =>
        value !== values.password ? "Пароли не совпадают" : null,
    },
  });
  if (isAuth) {
    return <Navigate to='/' />;
  }

  const submitRegisterForm = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    try {
      const { token,userLogin } = (
        await axios.post("/auth/registration", { login, password })
      ).data;
      window.localStorage.setItem("phonebook-token", token);
      setIsAuth(true);
      setLogin(userLogin);
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        form.setFieldError("login", error.response?.data.message);
      }
    }
  };

  return (
    <Center h={"100vh"}>
      <Flex gap='lg' align='center' justify='center' direction='column'>
        <Title size='h1'>Регистрация</Title>
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
              onSubmit={form.onSubmit(submitRegisterForm)}
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
              <PasswordInput
                withAsterisk
                label='Повторите пароль'
                {...form.getInputProps("confirmPassword")}
              />
              <Group position='center' mt='md'>
                <Button type='submit'>Зарегистрироваться</Button>
              </Group>
            </form>
          </Box>
        </MediaQuery>

        <Text>
          Есть аккаунт? <Link to='/login'>Перейти к авторизации</Link>
        </Text>
      </Flex>
    </Center>
  );
}
