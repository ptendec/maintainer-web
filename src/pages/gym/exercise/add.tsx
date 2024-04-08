import {
  useDaysServiceDayControllerFindAll,
  useExerciseVideoServiceExerciseVideoControllerUploadArray,
  useExercisesServiceExerciseControllerCreate,
  useProgramsServiceProgramControllerFindAll,
  useStagesServiceStageControllerFindAll,
} from "@/shared/services/queries";
import { Layout } from "@/shared/ui/layout/Layout";
import { formattedData } from "@/shared/utils";
import {
  Button,
  Container,
  Fieldset,
  FileButton,
  Group,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

export const AddExercise = () => {
  const [programId, setProgramId] = useState<number>();
  const [dayId, setDayId] = useState<number>();
  const [stageId, setStageId] = useState<number>();
  const [files, setFiles] = useState<File[]>([]);
  const { mutateAsync: addExercise, isPending } =
    useExercisesServiceExerciseControllerCreate();
  const { mutateAsync: uploadFiles } =
    useExerciseVideoServiceExerciseVideoControllerUploadArray();
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
      warning: "",
      sets: "",
      repeats: "",
    },
    validate: {
      name: (value) => (value.length < 3 ? "Минимум 3 символа" : null),
      sets: (value) =>
        Number(value) < 0 ? "Введите положительное число" : null,
      repeats: (value) =>
        Number(value) < 0 ? "Введите положительное число" : null,
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stageId) return;
    try {
      const exercise = await addExercise({
        requestBody: {
          ...form.values,
          repeats: Number(form.values.repeats),
          sets: Number(form.values.sets),
          stageId,
        },
      });

      await uploadFiles({
        formData: {
          exerciseId: exercise.id,
          files,
        },
      });
      notifications.show({
        title: "Успешно!",
        message: "Добавлено упражнение",
        color: "teal",
        autoClose: 2000,
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
    <Layout>
      <Container
        style={{
          maxWidth: 600,
        }}
        mx="auto"
        mt="xl"
      >
        <Fieldset legend={<Title order={5}> Добавление упражнения</Title>}>
          <form onSubmit={handleSubmit}>
            <TextInput
              placeholder="Жим лежа"
              mt="md"
              error={form.errors.name}
              label="Название упражнения"
              {...form.getInputProps("name")}
            />
            <TextInput
              type="number"
              placeholder="12"
              mt="md"
              error={form.errors.name}
              label="Количество повторений"
              {...form.getInputProps("repeats")}
            />
            <TextInput
              type="number"
              placeholder="3"
              mt="md"
              error={form.errors.name}
              label="Количество подходов"
              {...form.getInputProps("sets")}
            />
            <Textarea
              placeholder="Лежа на спине, руки на ширине плеч, опускаем штангу к груди и поднимаем вверх."
              mt="md"
              rows={3}
              error={form.errors.remark}
              label="Описание упражнения"
              {...form.getInputProps("remark")}
            />
            <Textarea
              placeholder="Не выполнять упражнение слишком быстро, это может привести к травмам."
              mt="md"
              rows={3}
              error={form.errors.remark}
              label="Предупреждение"
              {...form.getInputProps("warning")}
            />
            <Select
              mt="md"
              label="Выберите программу"
              placeholder="Выберите программу"
              data={formattedData(programs)}
              onChange={onProgramChange}
              value={programId ? String(programId) : null}
            />
            <Select
              mt="md"
              data={formattedData(days)}
              label="День"
              placeholder="Выберите день"
              onChange={onDayChange}
              value={dayId ? String(dayId) : null}
              disabled={!programId}
            />
            <Select
              mt="md"
              data={formattedData(stages)}
              label="Этап"
              placeholder="Выберите этап"
              onChange={(value) => setStageId(Number(value))}
              value={stageId ? String(stageId) : null}
              disabled={!dayId}
            />
            <FileButton onChange={setFiles} accept="image/gif" multiple>
              {(props) => (
                <Button w="100%" mt="md" {...props}>
                  Загрузить видео
                </Button>
              )}
            </FileButton>
            <Text>Загружено {files.length}</Text>
            <Group>
              {files.map((file) => (
                <Text key={file.name}>{file.name}</Text>
              ))}
            </Group>
            <Button
              w="100%"
              mt="md"
              type="submit"
              loading={isPending}
              disabled={!stageId || !dayId || !programId}
            >
              Добавить
            </Button>
          </form>
        </Fieldset>
      </Container>
    </Layout>
  );
};
