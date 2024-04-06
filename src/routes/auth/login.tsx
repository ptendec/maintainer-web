import { useAuthServiceAuthControllerLogin } from "@/shared/services/queries";
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

export const UserAuthorizationForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: login } = useAuthServiceAuthControllerLogin();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
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
    <Box style={{ maxWidth: 300, padding: "40px 20px" }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={3} mb="md">
          Авторизация
        </Title>
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
        <Group mt="md">
          <Button type="submit">Авторизоваться</Button>
        </Group>
      </form>
    </Box>
  );
};
