import { Container, Group, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export const Header = () => {
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
        </Group>
      </Container>
    </header>
  );
};
