import { useAuthServiceAuthControllerLogin } from "@/shared/services/queries";
import { OpenAPI } from "@/shared/services/requests";
import { Layout } from "@/shared/ui/layout/Layout";
import {
  Box,
  Button,
  Container,
  Fieldset,
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
    <Layout>
      <Container
        style={{
          maxWidth: 400,
        }}
        mx="auto"
        mt="xl"
      >
        <Fieldset
          legend={
            <Title
              order={3}
              style={{
                fontWeight: 500,
              }}
            >
              Авторизация
            </Title>
          }
        >
          <Box>
            <form onSubmit={handleSubmit}>
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
              <Button w="100%" mt="md" type="submit">
                Авторизоваться
              </Button>
            </form>
          </Box>
        </Fieldset>
      </Container>
    </Layout>
  );
};
