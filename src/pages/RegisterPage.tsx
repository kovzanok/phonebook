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
import { LoginParams } from "../types";
import { useForm } from "@mantine/form";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { authSelector, fetchRegistration } from "../store/authSlice";
import { SerializedError } from "@reduxjs/toolkit";

export default function RegisterPage() {
  const auth = useSelector(authSelector);
  const dispatch = useAppDispatch();

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

  const submitRegisterForm = async ({ login, password }: LoginParams) => {
    try {
      const res = await dispatch(fetchRegistration({ login, password })).unwrap();
      if (res?.token) {
        window.localStorage.setItem("phonebook-token", res.token);
      }
    } catch(err) {
      form.setFieldError("auth", <Text>{(err as SerializedError).message}</Text>);
    }
  };

  if (auth.isAuth) {
    return <Navigate to={window.sessionStorage.getItem("prevUrl") || "/"} />;
  }

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
              <Text color='red' ta='center'>
                {form.errors.auth}
              </Text>
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
