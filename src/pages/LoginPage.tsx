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
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { authSelector, fetchLogin } from "../store/authSlice";
import { LoginParams } from "../types";

export default function LoginPage() {
  
  const auth = useSelector(authSelector);
  const dispatch = useAppDispatch();
  if (auth.isAuth) {
    return <Navigate to={window.sessionStorage.getItem("prevUrl") || "/"} />;
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

  const submitLoginForm = async ({ login, password }: LoginParams) => {
    try {
      const { token } = await dispatch(
        fetchLogin({ login, password })
      ).unwrap();
      window.localStorage.setItem("phonebook-token", token);
    } catch {
      form.setFieldError("auth", <Text>Ошибка авторизации</Text>);
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
              <Text>{form.errors.auth}</Text>
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
