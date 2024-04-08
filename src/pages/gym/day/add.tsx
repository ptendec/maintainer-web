import {
  useDaysServiceDayControllerCreate,
  useProgramsServiceProgramControllerFindAll,
} from "@/shared/services/queries";
import { Box, Button, Select, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const AddDay = () => {
  const navigate = useNavigate();
  const { mutateAsync: addDay } = useDaysServiceDayControllerCreate();
  const { data } = useProgramsServiceProgramControllerFindAll();
  const form =
    useForm({
      initialValues: {
        name: "",
      },
    }) ?? [];

  const [programId, setProgramId] = useState<number>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValues = form.validate();
    if (!programId) return;
    if (formValues.hasErrors) {
      // обработка ошибок или дополнительная логика
      return;
    }
    try {
      await addDay({
        requestBody: {
          ...form.values,
          programId,
        },
      });
      navigate({
        to: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formatted = data?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  return (
    <Box style={{ maxWidth: 300, padding: "40px 20px" }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={3} mb="md">
          Добавление программы
        </Title>
        <TextInput
          error={form.errors.name}
          label="Название дня"
          {...form.getInputProps("name")}
          required
        />
        <Select
          label="Выберите программу"
          placeholder="Выберите программу"
          data={formatted}
          onChange={(value) => setProgramId(Number(value))}
        />
        <Button mt="md" w="100%" type="submit">
          Создать
        </Button>
      </form>
    </Box>
  );
};
