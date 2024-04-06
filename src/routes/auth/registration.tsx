import {
  useAuthServiceAuthControllerLogin,
  useAuthServiceAuthControllerRegister,
} from "@/shared/services/queries";
import { OpenAPI } from "@/shared/services/requests";
import {
  Box,
  Button,
  Group,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "@tanstack/react-router";
import React from "react";

export const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: register } = useAuthServiceAuthControllerRegister();
  const { mutateAsync: login } = useAuthServiceAuthControllerLogin();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validate: {
      firstName: (value) => (value ? null : "Имя обязательно"),
      lastName: (value) => (value ? null : "Фамилия обязательна"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Некорректный email"),
      password: (value) =>
        value.length >= 6 ? null : "Пароль должен быть длиннее 6 символов",
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValues = form.validate();
    if (formValues.hasErrors) {
      // обработка ошибок или дополнительная логика
      return;
    }
    try {
      await register({
        requestBody: {
          ...form.values,
        },
      });
      const loginData = await login({
        requestBody: {
          ...form.values,
        },
      });
      OpenAPI.TOKEN = `${loginData.accessToken}`;
      navigate({
        to: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box style={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={3} mb="md">
          Регистрация
        </Title>
        <TextInput label="Имя" {...form.getInputProps("firstName")} required />
        <TextInput
          label="Фамилия"
          {...form.getInputProps("lastName")}
          required
        />
        <TextInput
          label="Электронная почта"
          {...form.getInputProps("email")}
          required
        />
        <PasswordInput
          label="Пароль"
          {...form.getInputProps("password")}
          required
        />
        <Group mt="md">
          <Button type="submit">Зарегистрироваться</Button>
        </Group>
      </form>
    </Box>
  );
};
