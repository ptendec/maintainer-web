import {
  useAuthServiceAuthControllerLogin,
  useAuthServiceAuthControllerRegister,
} from "@/shared/services/queries";
import { OpenAPI } from "@/shared/services/requests";
import { Layout } from "@/shared/ui/layout/Layout";
import { Box, Button, PasswordInput, TextInput, Title } from "@mantine/core";
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
    <Layout>
      <Box style={{ maxWidth: 300, padding: "40px 20px" }} mx="auto">
        <form onSubmit={handleSubmit}>
          <Title order={3} mb="md">
            Регистрация
          </Title>
          <TextInput
            label="Имя"
            error={form.errors.firstName}
            {...form.getInputProps("firstName")}
            required
          />
          <TextInput
            label="Фамилия"
            error={form.errors.lastName}
            {...form.getInputProps("lastName")}
            required
          />
          <TextInput
            error={form.errors.email}
            label="Электронная почта"
            {...form.getInputProps("email")}
            required
          />
          <PasswordInput
            error={form.errors.password}
            label="Пароль"
            {...form.getInputProps("password")}
            required
          />
          <Button mt="md" type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Layout>
  );
};
