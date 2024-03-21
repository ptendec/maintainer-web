import { createRootRoute } from "@tanstack/react-router";
import Main from "../pages";

export const rootRoute = createRootRoute({
  component: Main,
});

// const route = createRoute({
//   path: "/",
//   component: Main,
// });
