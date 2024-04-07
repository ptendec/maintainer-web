/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateExerciseDto } from '../models/CreateExerciseDto';
import type { GetExerciseDto } from '../models/GetExerciseDto';
import type { UpdateExerciseDto } from '../models/UpdateExerciseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExercisesService {
  /**
   * @param requestBody
   * @returns GetExerciseDto The exercise has been successfully created.
   * @throws ApiError
   */
  public static exerciseControllerCreate(
    requestBody: CreateExerciseDto,
  ): CancelablePromise<GetExerciseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/exercises',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request.`,
      },
    });
  }
  /**
   * @param stageId
   * @returns GetExerciseDto Array of all exercises.
   * @throws ApiError
   */
  public static exerciseControllerFindAll(
    stageId?: string,
  ): CancelablePromise<Array<GetExerciseDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/exercises',
      query: {
        'stageId': stageId,
      },
    });
  }
  /**
   * @param id
   * @returns GetExerciseDto The exercise with the specified ID.
   * @throws ApiError
   */
  public static exerciseControllerFindOne(
    id: string,
  ): CancelablePromise<GetExerciseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/exercises/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Exercise not found.`,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns UpdateExerciseDto The exercise has been successfully updated.
   * @throws ApiError
   */
  public static exerciseControllerUpdate(
    id: string,
    requestBody: UpdateExerciseDto,
  ): CancelablePromise<UpdateExerciseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/exercises/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Exercise not found.`,
      },
    });
  }
  /**
   * @param id
   * @returns any The exercise has been successfully deleted.
   * @throws ApiError
   */
  public static exerciseControllerRemove(
    id: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/exercises/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Exercise not found.`,
      },
    });
  }
}
