// generated with @7nohe/openapi-react-query-codegen@0.5.3
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { CreateDayDto } from "../requests/models/CreateDayDto";
import { CreateExerciseDto } from "../requests/models/CreateExerciseDto";
import { CreateProgramDto } from "../requests/models/CreateProgramDto";
import { CreateStageDto } from "../requests/models/CreateStageDto";
import { CreateUserDto } from "../requests/models/CreateUserDto";
import { GetDayDto } from "../requests/models/GetDayDto";
import { GetExerciseDto } from "../requests/models/GetExerciseDto";
import { GetProgramDto } from "../requests/models/GetProgramDto";
import { GetStageDto } from "../requests/models/GetStageDto";
import { LoginUserDto } from "../requests/models/LoginUserDto";
import { LoginUserResDto } from "../requests/models/LoginUserResDto";
import { RefreshTokenDto } from "../requests/models/RefreshTokenDto";
import { UpdateDayDto } from "../requests/models/UpdateDayDto";
import { UpdateExerciseDto } from "../requests/models/UpdateExerciseDto";
import { UpdateProgramDto } from "../requests/models/UpdateProgramDto";
import { UpdateStageDto } from "../requests/models/UpdateStageDto";
import { UserDto } from "../requests/models/UserDto";
import { AuthService } from "../requests/services/AuthService";
import { DaysService } from "../requests/services/DaysService";
import { ExercisesService } from "../requests/services/ExercisesService";
import { ProgramsService } from "../requests/services/ProgramsService";
import { StagesService } from "../requests/services/StagesService";
export type AuthServiceAuthControllerRegisterMutationResult = Awaited<
  ReturnType<typeof AuthService.authControllerRegister>
>;
export const useAuthServiceAuthControllerRegister = <
  TData = AuthServiceAuthControllerRegisterMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateUserDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateUserDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.authControllerRegister(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type AuthServiceAuthControllerLoginMutationResult = Awaited<
  ReturnType<typeof AuthService.authControllerLogin>
>;
export const useAuthServiceAuthControllerLogin = <
  TData = AuthServiceAuthControllerLoginMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: LoginUserDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: LoginUserDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.authControllerLogin(requestBody) as unknown as Promise<TData>,
    ...options,
  });
export type AuthServiceAuthControllerRefreshMutationResult = Awaited<
  ReturnType<typeof AuthService.authControllerRefresh>
>;
export const useAuthServiceAuthControllerRefresh = <
  TData = AuthServiceAuthControllerRefreshMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      AuthService.authControllerRefresh() as unknown as Promise<TData>,
    ...options,
  });
export type DaysServiceDayControllerCreateMutationResult = Awaited<
  ReturnType<typeof DaysService.dayControllerCreate>
>;
export const useDaysServiceDayControllerCreate = <
  TData = DaysServiceDayControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateDayDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateDayDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      DaysService.dayControllerCreate(requestBody) as unknown as Promise<TData>,
    ...options,
  });
export type DaysServiceDayControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof DaysService.dayControllerFindAll>
>;
export type DaysServiceDayControllerFindAllQueryResult<
  TData = DaysServiceDayControllerFindAllDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDaysServiceDayControllerFindAllKey =
  "DaysServiceDayControllerFindAll";
export const useDaysServiceDayControllerFindAll = <
  TData = DaysServiceDayControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    programId,
  }: {
    programId?: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useDaysServiceDayControllerFindAllKey,
      ...(queryKey ?? [{ programId }]),
    ],
    queryFn: () => DaysService.dayControllerFindAll(programId) as TData,
    ...options,
  });
export type DaysServiceDayControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof DaysService.dayControllerFindOne>
>;
export type DaysServiceDayControllerFindOneQueryResult<
  TData = DaysServiceDayControllerFindOneDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDaysServiceDayControllerFindOneKey =
  "DaysServiceDayControllerFindOne";
export const useDaysServiceDayControllerFindOne = <
  TData = DaysServiceDayControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useDaysServiceDayControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => DaysService.dayControllerFindOne(id) as TData,
    ...options,
  });
export type DaysServiceDayControllerUpdateMutationResult = Awaited<
  ReturnType<typeof DaysService.dayControllerUpdate>
>;
export const useDaysServiceDayControllerUpdate = <
  TData = DaysServiceDayControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateDayDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateDayDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      DaysService.dayControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type DaysServiceDayControllerRemoveMutationResult = Awaited<
  ReturnType<typeof DaysService.dayControllerRemove>
>;
export const useDaysServiceDayControllerRemove = <
  TData = DaysServiceDayControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      DaysService.dayControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
export type ExercisesServiceExerciseControllerCreateMutationResult = Awaited<
  ReturnType<typeof ExercisesService.exerciseControllerCreate>
>;
export const useExercisesServiceExerciseControllerCreate = <
  TData = ExercisesServiceExerciseControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateExerciseDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateExerciseDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      ExercisesService.exerciseControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ExercisesServiceExerciseControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof ExercisesService.exerciseControllerFindAll>
>;
export type ExercisesServiceExerciseControllerFindAllQueryResult<
  TData = ExercisesServiceExerciseControllerFindAllDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useExercisesServiceExerciseControllerFindAllKey =
  "ExercisesServiceExerciseControllerFindAll";
export const useExercisesServiceExerciseControllerFindAll = <
  TData = ExercisesServiceExerciseControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    stageId,
  }: {
    stageId?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useExercisesServiceExerciseControllerFindAllKey,
      ...(queryKey ?? [{ stageId }]),
    ],
    queryFn: () => ExercisesService.exerciseControllerFindAll(stageId) as TData,
    ...options,
  });
export type ExercisesServiceExerciseControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof ExercisesService.exerciseControllerFindOne>
>;
export type ExercisesServiceExerciseControllerFindOneQueryResult<
  TData = ExercisesServiceExerciseControllerFindOneDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useExercisesServiceExerciseControllerFindOneKey =
  "ExercisesServiceExerciseControllerFindOne";
export const useExercisesServiceExerciseControllerFindOne = <
  TData = ExercisesServiceExerciseControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useExercisesServiceExerciseControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => ExercisesService.exerciseControllerFindOne(id) as TData,
    ...options,
  });
export type ExercisesServiceExerciseControllerUpdateMutationResult = Awaited<
  ReturnType<typeof ExercisesService.exerciseControllerUpdate>
>;
export const useExercisesServiceExerciseControllerUpdate = <
  TData = ExercisesServiceExerciseControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateExerciseDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateExerciseDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      ExercisesService.exerciseControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ExercisesServiceExerciseControllerRemoveMutationResult = Awaited<
  ReturnType<typeof ExercisesService.exerciseControllerRemove>
>;
export const useExercisesServiceExerciseControllerRemove = <
  TData = ExercisesServiceExerciseControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      ExercisesService.exerciseControllerRemove(
        id
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ProgramsServiceProgramControllerCreateMutationResult = Awaited<
  ReturnType<typeof ProgramsService.programControllerCreate>
>;
export const useProgramsServiceProgramControllerCreate = <
  TData = ProgramsServiceProgramControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateProgramDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateProgramDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      ProgramsService.programControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ProgramsServiceProgramControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof ProgramsService.programControllerFindAll>
>;
export type ProgramsServiceProgramControllerFindAllQueryResult<
  TData = ProgramsServiceProgramControllerFindAllDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useProgramsServiceProgramControllerFindAllKey =
  "ProgramsServiceProgramControllerFindAll";
export const useProgramsServiceProgramControllerFindAll = <
  TData = ProgramsServiceProgramControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useProgramsServiceProgramControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => ProgramsService.programControllerFindAll() as TData,
    ...options,
  });
export type ProgramsServiceProgramControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof ProgramsService.programControllerFindOne>
>;
export type ProgramsServiceProgramControllerFindOneQueryResult<
  TData = ProgramsServiceProgramControllerFindOneDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useProgramsServiceProgramControllerFindOneKey =
  "ProgramsServiceProgramControllerFindOne";
export const useProgramsServiceProgramControllerFindOne = <
  TData = ProgramsServiceProgramControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useProgramsServiceProgramControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => ProgramsService.programControllerFindOne(id) as TData,
    ...options,
  });
export type ProgramsServiceProgramControllerUpdateMutationResult = Awaited<
  ReturnType<typeof ProgramsService.programControllerUpdate>
>;
export const useProgramsServiceProgramControllerUpdate = <
  TData = ProgramsServiceProgramControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateProgramDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateProgramDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      ProgramsService.programControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ProgramsServiceProgramControllerRemoveMutationResult = Awaited<
  ReturnType<typeof ProgramsService.programControllerRemove>
>;
export const useProgramsServiceProgramControllerRemove = <
  TData = ProgramsServiceProgramControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      ProgramsService.programControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
export type StagesServiceStageControllerCreateMutationResult = Awaited<
  ReturnType<typeof StagesService.stageControllerCreate>
>;
export const useStagesServiceStageControllerCreate = <
  TData = StagesServiceStageControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateStageDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateStageDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      StagesService.stageControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type StagesServiceStageControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof StagesService.stageControllerFindAll>
>;
export type StagesServiceStageControllerFindAllQueryResult<
  TData = StagesServiceStageControllerFindAllDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useStagesServiceStageControllerFindAllKey =
  "StagesServiceStageControllerFindAll";
export const useStagesServiceStageControllerFindAll = <
  TData = StagesServiceStageControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    dayId,
  }: {
    dayId?: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useStagesServiceStageControllerFindAllKey,
      ...(queryKey ?? [{ dayId }]),
    ],
    queryFn: () => StagesService.stageControllerFindAll(dayId) as TData,
    ...options,
  });
export type StagesServiceStageControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof StagesService.stageControllerFindOne>
>;
export type StagesServiceStageControllerFindOneQueryResult<
  TData = StagesServiceStageControllerFindOneDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useStagesServiceStageControllerFindOneKey =
  "StagesServiceStageControllerFindOne";
export const useStagesServiceStageControllerFindOne = <
  TData = StagesServiceStageControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useStagesServiceStageControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => StagesService.stageControllerFindOne(id) as TData,
    ...options,
  });
export type StagesServiceStageControllerUpdateMutationResult = Awaited<
  ReturnType<typeof StagesService.stageControllerUpdate>
>;
export const useStagesServiceStageControllerUpdate = <
  TData = StagesServiceStageControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateStageDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateStageDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      StagesService.stageControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type StagesServiceStageControllerRemoveMutationResult = Awaited<
  ReturnType<typeof StagesService.stageControllerRemove>
>;
export const useStagesServiceStageControllerRemove = <
  TData = StagesServiceStageControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      StagesService.stageControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
