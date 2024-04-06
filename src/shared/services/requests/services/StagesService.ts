/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStageDto } from '../models/CreateStageDto';
import type { GetStageDto } from '../models/GetStageDto';
import type { UpdateStageDto } from '../models/UpdateStageDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StagesService {
  /**
   * @param requestBody
   * @returns CreateStageDto The stage has been successfully created.
   * @throws ApiError
   */
  public static stageControllerCreate(
    requestBody: CreateStageDto,
  ): CancelablePromise<CreateStageDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/stages',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request.`,
      },
    });
  }
  /**
   * @param dayId
   * @returns GetStageDto Array of all stages.
   * @throws ApiError
   */
  public static stageControllerFindAll(
    dayId?: number,
  ): CancelablePromise<Array<GetStageDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stages',
      query: {
        'dayId': dayId,
      },
    });
  }
  /**
   * @param id
   * @returns GetStageDto The stage with the specified ID.
   * @throws ApiError
   */
  public static stageControllerFindOne(
    id: string,
  ): CancelablePromise<GetStageDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stages/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Stage not found.`,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns UpdateStageDto The stage has been successfully updated.
   * @throws ApiError
   */
  public static stageControllerUpdate(
    id: string,
    requestBody: UpdateStageDto,
  ): CancelablePromise<UpdateStageDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/stages/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Stage not found.`,
      },
    });
  }
  /**
   * @param id
   * @returns any The stage has been successfully deleted.
   * @throws ApiError
   */
  public static stageControllerRemove(
    id: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/stages/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Stage not found.`,
      },
    });
  }
}
