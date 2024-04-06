import Main from "@/routes";
import { UserAuthorizationForm } from "@/routes/auth/login";
import { UserRegistrationForm } from "@/routes/auth/registration";
import { createRootRoute, createRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main,
});

const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "registration",
  component: UserRegistrationForm,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "login",
  component: UserAuthorizationForm,
});

export const routeTree = rootRoute.addChildren([
  mainRoute,
  registrationRoute,
  loginRoute,
]);
