import { notifications } from "@mantine/notifications";
import { CommonError } from "../types";

export const useError = () => {
  const handleError = (error: CommonError | CommonError[]) => {
    const errors = Array.isArray(error) ? error : [error];
    notifications.show({
      id: "hello-there",
      withCloseButton: true,
      onClose: () => console.log("unmounted"),
      onOpen: () => console.log("mounted"),
      autoClose: 5000,
      title: "You've been compromised",
      message: errors.join(". "),
      color: "red",
      className: "my-notification-class",
      // style: { backgroundColor: "red" },
      loading: false,
    });
  };

  return { handleError };
};
