/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetFilesDto } from '../models/GetFilesDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExerciseVideoService {
  /**
   * @param formData
   * @returns GetFilesDto Files uploaded successfully
   * @throws ApiError
   */
  public static exerciseVideoControllerUploadArray(
    formData: {
      exerciseId?: number;
      files?: Array<Blob>;
    },
  ): CancelablePromise<Array<GetFilesDto>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/exercise-video',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
