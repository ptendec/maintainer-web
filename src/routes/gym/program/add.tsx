import { useProgramsServiceProgramControllerCreate } from "@/shared/services/queries";
import { Box, Button, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "@tanstack/react-router";

export const AddProgram = () => {
  const navigate = useNavigate();
  const { mutateAsync: addProgram } =
    useProgramsServiceProgramControllerCreate();

  const form = useForm({
    initialValues: {
      name: "",
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
      await addProgram({
        requestBody: {
          ...form.values,
        },
      });
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
          Добавление программы
        </Title>
        <TextInput
          error={form.errors.name}
          label="Название программы"
          placeholder="Первая программа"
          {...form.getInputProps("name")}
          required
        />
        <Button mt="md" w="100%" type="submit">
          Создать
        </Button>
      </form>
    </Box>
  );
};
