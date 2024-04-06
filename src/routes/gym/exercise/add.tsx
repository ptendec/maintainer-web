import {
  useDaysServiceDayControllerFindAll,
  useExercisesServiceExerciseControllerCreate,
  useProgramsServiceProgramControllerFindAll,
  useStagesServiceStageControllerFindAll,
} from "@/shared/services/queries";
import { formattedData } from "@/shared/utils";
import { Box, Button, Select, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

export const AddExercise = () => {
  const [programId, setProgramId] = useState<number>();
  const [dayId, setDayId] = useState<number>();
  const [stageId, setStageId] = useState<number>();

  const { mutateAsync: addExercise } =
    useExercisesServiceExerciseControllerCreate();
  const { data: programs } = useProgramsServiceProgramControllerFindAll();
  const { data: days } = useDaysServiceDayControllerFindAll(
    {
      programId,
    },
    undefined,
    {
      enabled: !!programId,
    }
  );
  const { data: stages } = useStagesServiceStageControllerFindAll(
    {
      dayId,
    },
    undefined,
    {
      enabled: !!dayId,
    }
  );
  const form = useForm({
    initialValues: {
      name: "",
      remark: "",
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValues = form.validate();
    if (!stageId) return;
    if (formValues.hasErrors) {
      // обработка ошибок или дополнительная логика
      return;
    }
    try {
      await addExercise({
        requestBody: {
          ...form.values,
          stageId,
        },
      });
      notifications.show({
        title: "Успешно!",
        message: "Добавлено упражнение",
        color: "teal",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onProgramChange = (value: string | null) => {
    if (programId === Number(value)) return;
    setProgramId(Number(value));
    setDayId(undefined);
    setStageId(undefined);
  };

  const onDayChange = (value: string | null) => {
    if (dayId === Number(value)) return;
    setDayId(Number(value));
    setStageId(undefined);
  };

  return (
    <Box style={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Title order={3} mb="md">
          Добавление упражнения
        </Title>
        <TextInput
          error={form.errors.name}
          label="Название упражнения"
          {...form.getInputProps("name")}
        />
        <TextInput
          error={form.errors.remark}
          label="Описание упражнения"
          {...form.getInputProps("remark")}
        />
        <Select
          label="Выберите программу"
          placeholder="Выберите программу"
          data={formattedData(programs)}
          onChange={onProgramChange}
          value={programId ? String(programId) : null}
        />
        <Select
          data={formattedData(days)}
          label="День"
          placeholder="Выберите день"
          onChange={onDayChange}
          value={dayId ? String(dayId) : null}
          disabled={!programId}
        />
        <Select
          data={formattedData(stages)}
          label="Этап"
          placeholder="Выберите этап"
          onChange={(value) => setStageId(Number(value))}
          value={stageId ? String(stageId) : null}
          disabled={!dayId}
        />
        <Button type="submit">Добавить</Button>
      </form>
    </Box>
  );
};
