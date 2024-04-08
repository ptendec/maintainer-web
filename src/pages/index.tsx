import { Layout } from "@/shared/ui/layout/Layout";
import { Button, Container, Group, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import React from "react";

const Main: React.FC = () => {
  const newLinks = [
    {
      title: "Программы",
      links: [
        {
          name: "Добавить",
          path: "/program/add",
        },
      ],
    },
    {
      title: "Дни",
      links: [
        {
          name: "Добавить",
          path: "/day/add",
        },
      ],
    },
    {
      title: "Этапы",
      links: [
        {
          name: "Добавить",
          path: "/stage/add",
        },
      ],
    },
    {
      title: "Упражнения",
      links: [
        {
          name: "Добавить",
          path: "/exercise/add",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Container>
        {newLinks.map((link) => (
          <Group key={link.title}>
            <Text size="xl">{link.title}</Text>
            {link.links.map((link) => (
              <Link to={link.path} key={link.path}>
                <Button
                  style={{
                    margin: "10px",
                  }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </Group>
        ))}
      </Container>
    </Layout>
  );
};

export default Main;

/*

<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="ptendec_test_1_bot" data-size="large" data-radius="8" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
<script type="text/javascript">
  function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }
</script>
TODO: Add telegram login button
*/
