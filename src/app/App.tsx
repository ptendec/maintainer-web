import { routeTree } from "@/router";
import "@/shared/api/config";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserHistory,
  createRouter,
} from "@tanstack/react-router";
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const history = createBrowserHistory();
const router = createRouter({ routeTree, history });

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
