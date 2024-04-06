import {
  useDaysServiceDayControllerFindAll,
  useProgramsServiceProgramControllerFindAll,
  useStagesServiceStageControllerCreate,
} from "@/shared/services/queries";
import { Box, Button, Group, Select, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const AddStage = () => {
  const navigate = useNavigate();
  const { mutateAsync: addStage } = useStagesServiceStageControllerCreate();
  const [programId, setProgramId] = useState<number>();
  const [dayId, setDayId] = useState<number>();

  const { data: programs } = useProgramsServiceProgramControllerFindAll();
  const { data: days } = useDaysServiceDayControllerFindAll({
    programId,
  });

  const form =
    useForm({
      initialValues: {
        name: "",
      },
    }) ?? [];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValues = form.validate();
    if (!dayId) return;
    if (formValues.hasErrors) {
      // обработка ошибок или дополнительная логика
      return;
    }
    try {
      await addStage({
        requestBody: {
          ...form.values,
          dayId,
        },
      });
      navigate({
        to: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formattedPrograms = programs?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const formattedDays = days?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const onProgramChange = (value: string | null) => {
    setProgramId(Number(value));
    setDayId(undefined);
  };

  return (
    <Box style={{ maxWidth: 300, padding: "40px 20px" }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={3} mb="md">
          Добавление программы
        </Title>
        <TextInput
          error={form.errors.name}
          label="Название этапа"
          {...form.getInputProps("name")}
          required
        />
        <Select
          label="Выберите программу"
          placeholder="Выберите программу"
          data={formattedPrograms}
          onChange={onProgramChange}
        />
        <Select
          value={dayId ? String(dayId) : null}
          label="Выберите день"
          placeholder="Выберите день"
          data={formattedDays}
          onChange={(value) => {
            setDayId(Number(value));
          }}
        />
        <Group mt="md">
          <Button type="submit">Создать</Button>
        </Group>
      </form>
    </Box>
  );
};
