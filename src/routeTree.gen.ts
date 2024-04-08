/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./pages/__root";
import { Route as AuthLoginImport } from "./pages/auth/login";
import { Route as AuthRegistrationImport } from "./pages/auth/registration";
import { Route as GymDayAddImport } from "./pages/gym/day/add";
import { Route as GymExerciseAddImport } from "./pages/gym/exercise/add";
import { Route as GymProgramAddImport } from "./pages/gym/program/add";
import { Route as GymStageAddImport } from "./pages/gym/stage/add";
import { Route as IndexImport } from "./pages/index";

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AuthRegistrationRoute = AuthRegistrationImport.update({
  path: "/auth/registration",
  getParentRoute: () => rootRoute,
} as any);

const AuthLoginRoute = AuthLoginImport.update({
  path: "/auth/login",
  getParentRoute: () => rootRoute,
} as any);

const GymStageAddRoute = GymStageAddImport.update({
  path: "/gym/stage/add",
  getParentRoute: () => rootRoute,
} as any);

const GymProgramAddRoute = GymProgramAddImport.update({
  path: "/gym/program/add",
  getParentRoute: () => rootRoute,
} as any);

const GymExerciseAddRoute = GymExerciseAddImport.update({
  path: "/gym/exercise/add",
  getParentRoute: () => rootRoute,
} as any);

const GymDayAddRoute = GymDayAddImport.update({
  path: "/gym/day/add",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/login": {
      preLoaderRoute: typeof AuthLoginImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/registration": {
      preLoaderRoute: typeof AuthRegistrationImport;
      parentRoute: typeof rootRoute;
    };
    "/gym/day/add": {
      preLoaderRoute: typeof GymDayAddImport;
      parentRoute: typeof rootRoute;
    };
    "/gym/exercise/add": {
      preLoaderRoute: typeof GymExerciseAddImport;
      parentRoute: typeof rootRoute;
    };
    "/gym/program/add": {
      preLoaderRoute: typeof GymProgramAddImport;
      parentRoute: typeof rootRoute;
    };
    "/gym/stage/add": {
      preLoaderRoute: typeof GymStageAddImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthLoginRoute,
  AuthRegistrationRoute,
  GymDayAddRoute,
  GymExerciseAddRoute,
  GymProgramAddRoute,
  GymStageAddRoute,
]);

/* prettier-ignore-end */
