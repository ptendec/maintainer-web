/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { LoginUserDto } from '../models/LoginUserDto';
import type { LoginUserResDto } from '../models/LoginUserResDto';
import type { RefreshTokenDto } from '../models/RefreshTokenDto';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * @param requestBody
   * @returns UserDto
   * @throws ApiError
   */
  public static authControllerRegister(
    requestBody: CreateUserDto,
  ): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param requestBody
   * @returns LoginUserResDto User logged in successfully.
   * @throws ApiError
   */
  public static authControllerLogin(
    requestBody: LoginUserDto,
  ): CancelablePromise<LoginUserResDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/login',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns RefreshTokenDto Token refreshed successfully.
   * @throws ApiError
   */
  public static authControllerRefresh(): CancelablePromise<RefreshTokenDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/refresh',
    });
  }
  /**
   * @returns UserDto User retrieved successfully.
   * @throws ApiError
   */
  public static authControllerMe(): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/me',
    });
  }
  /**
   * @returns any User logged out successfully.
   * @throws ApiError
   */
  public static authControllerLogout(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/logout',
    });
  }
}
