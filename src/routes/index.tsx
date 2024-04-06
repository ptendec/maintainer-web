import { Link } from "@tanstack/react-router";
import React, { Fragment } from "react";

const Main: React.FC = () => {
  const links = [
    {
      name: "Главная",
      path: "/",
    },
    {
      name: "Добавить программу",
      path: "/program/add",
    },
    {
      name: "Добавить день",
      path: "/day/add",
    },
    {
      name: "Добавить этап",
      path: "/stage/add",
    },
    {
      name: "Добавить упражнение",
      path: "/exercise/add",
    },
    {
      name: "Регистрация",
      path: "/auth/registration",
    },
    {
      name: "Вход",
      path: "/auth/login",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Fragment key={link.path}>
          <Link to={link.path}>{link.name}</Link>
          <br />
        </Fragment>
      ))}
    </div>
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
