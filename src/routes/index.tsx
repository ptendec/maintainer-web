import { useExercisesServiceExerciseControllerFindAll } from "@/shared/services/queries";
import React from "react";

const Main: React.FC = () => {
  const { data, refetch } = useExercisesServiceExerciseControllerFindAll();
  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={() => refetch()}>ss</button>
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
