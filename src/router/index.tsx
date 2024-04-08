import Main from "@/pages";
import { UserAuthorizationForm } from "@/pages/auth/login";
import { UserRegistrationForm } from "@/pages/auth/registration";
import { AddDay } from "@/pages/gym/day/add";
import { AddExercise } from "@/pages/gym/exercise/add";
import { AddProgram } from "@/pages/gym/program/add";
import { AddStage } from "@/pages/gym/stage/add";
import { createRootRoute, createRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth",
});

const registrationRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "registration",
  component: UserRegistrationForm,
});

const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "login",
  component: UserAuthorizationForm,
});

const programRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "program",
});

const addProgramRoute = createRoute({
  getParentRoute: () => programRoute,
  path: "add",
  component: AddProgram,
});

const dayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "day",
});

const addDayRoute = createRoute({
  getParentRoute: () => dayRoute,
  path: "add",
  component: AddDay,
});

const stageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "stage",
});

const addStageRoute = createRoute({
  getParentRoute: () => stageRoute,
  path: "add",
  component: AddStage,
});

const exerciseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "exercise",
});

const addExerciseRoute = createRoute({
  getParentRoute: () => exerciseRoute,
  path: "add",
  component: AddExercise,
});

export const routeTree = rootRoute.addChildren([
  mainRoute,
  authRoute.addChildren([registrationRoute, loginRoute]),
  programRoute.addChildren([addProgramRoute]),
  dayRoute.addChildren([addDayRoute]),
  stageRoute.addChildren([addStageRoute]),
  exerciseRoute.addChildren([addExerciseRoute]),
]);
