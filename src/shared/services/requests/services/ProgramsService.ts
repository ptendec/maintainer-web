/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProgramDto } from '../models/CreateProgramDto';
import type { GetProgramDto } from '../models/GetProgramDto';
import type { UpdateProgramDto } from '../models/UpdateProgramDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProgramsService {
  /**
   * @param requestBody
   * @returns GetProgramDto Создает программу
   * @throws ApiError
   */
  public static programControllerCreate(
    requestBody: CreateProgramDto,
  ): CancelablePromise<GetProgramDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/programs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns GetProgramDto Возвращает список программ
   * @throws ApiError
   */
  public static programControllerFindAll(): CancelablePromise<Array<GetProgramDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/programs',
    });
  }
  /**
   * @param id
   * @returns GetProgramDto Возвращает программу по id
   * @throws ApiError
   */
  public static programControllerFindOne(
    id: string,
  ): CancelablePromise<GetProgramDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/programs/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns GetProgramDto Обновляет программу по id
   * @throws ApiError
   */
  public static programControllerUpdate(
    id: string,
    requestBody: UpdateProgramDto,
  ): CancelablePromise<GetProgramDto> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/programs/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param id
   * @returns GetProgramDto Удаляет программу по id
   * @throws ApiError
   */
  public static programControllerRemove(
    id: string,
  ): CancelablePromise<GetProgramDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/programs/{id}',
      path: {
        'id': id,
      },
    });
  }
}
