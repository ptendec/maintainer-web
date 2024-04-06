/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDayDto } from '../models/CreateDayDto';
import type { UpdateDayDto } from '../models/UpdateDayDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DaysService {
  /**
   * @param requestBody
   * @returns CreateDayDto The day has been successfully created.
   * @throws ApiError
   */
  public static dayControllerCreate(
    requestBody: CreateDayDto,
  ): CancelablePromise<CreateDayDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/days',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request.`,
      },
    });
  }
  /**
   * @returns CreateDayDto Array of all days.
   * @throws ApiError
   */
  public static dayControllerFindAll(): CancelablePromise<Array<CreateDayDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/days',
    });
  }
  /**
   * @param id
   * @returns CreateDayDto The day with the specified ID.
   * @throws ApiError
   */
  public static dayControllerFindOne(
    id: string,
  ): CancelablePromise<CreateDayDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/days/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Day not found.`,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns UpdateDayDto The day has been successfully updated.
   * @throws ApiError
   */
  public static dayControllerUpdate(
    id: string,
    requestBody: UpdateDayDto,
  ): CancelablePromise<UpdateDayDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/days/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Day not found.`,
      },
    });
  }
  /**
   * @param id
   * @returns any The day has been successfully deleted.
   * @throws ApiError
   */
  public static dayControllerRemove(
    id: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/days/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Day not found.`,
      },
    });
  }
}
