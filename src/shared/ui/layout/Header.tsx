import { useAuthServiceAuthControllerLogout } from "@/shared/services/queries";
import { OpenAPI } from "@/shared/services/requests";
import { useUserStore } from "@/shared/store/user";
import { Container, Group, Menu, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  const { user, removeUser } = useUserStore((state) => state);
  const { mutateAsync } = useAuthServiceAuthControllerLogout();

  const handleLogout = async () => {
    removeUser();
    await mutateAsync();
    OpenAPI.TOKEN = undefined;
  };

  return (
    <header>
      <Container>
        <Group justify="space-between">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <Title>Maintainer</Title>
          </Link>

          <Group>
            {user ? (
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: "pop-top-right" }}
                // onClose={() => setUserMenuOpened(false)}
                // onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <Text
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {user.firstName} {user.lastName}
                  </Text>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={handleLogout}>Выйти</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <>
                <Link to="/auth/registration">Регистрация</Link>
                <Link to="/auth/login">Вход</Link>
              </>
            )}
          </Group>
        </Group>
      </Container>
    </header>
  );
};
