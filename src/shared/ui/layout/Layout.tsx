import { useAuthServiceAuthControllerMe } from "@/shared/services/queries";
import { useUserStore } from "@/shared/store/user";
import { ReactNode, useEffect } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { addUser } = useUserStore((state) => state);

  const { data } = useAuthServiceAuthControllerMe();

  useEffect(() => {
    if (data) addUser(data);
  }, [data]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};
