import axiosClient, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { getFromLocalStorage, showErrorMessage } from '../../helpers';
import { defaultConfig, errorsDictionary } from '../constants';
import { APIResponse } from '../types';

enum Methods {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  DELETE = 'delete',
}

export class Api {
  public static axios: AxiosInstance;

  public static initializeAxiosClient() {
    Api.axios = axiosClient.create(defaultConfig);
    Api.axios.interceptors.request.use((config: AxiosRequestConfig) => {
      if (config?.headers) {
        const token = getFromLocalStorage('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  public static async makeRequest<T = any>(
    method: Methods,
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
  ): Promise<APIResponse<T>> {
    try {
      const requestBody = method === Methods.DELETE ? { data } : data;
      const response = await Api.axios[method](url, requestBody, { headers });
      return { data: response.data };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.response?.data || error.message;
      const message = Array.isArray(errorMessage) ? errorMessage[0] : errorMessage;
      showErrorMessage('Помилка', errorsDictionary[message as keyof typeof errorsDictionary] || '');
      return { error: error.message };
    }
  }

  public static async uploadFile<T = any>(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return Api.patch<T>(`files/${id}`, formData);
  }

  public static async postFile<T = any>(url: string, file: any): Promise<APIResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);
    return Api.makeRequest<T>(Methods.POST, url, formData);
  }

  public static async get<T = any>(
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
  ): Promise<APIResponse<T>> {
    return Api.makeRequest<T>(Methods.GET, url, data, headers);
  }

  public static async post<T = any>(
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
  ): Promise<APIResponse<T>> {
    return Api.makeRequest<T>(Methods.POST, url, data, headers);
  }

  public static async patch<T = any>(
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
  ): Promise<APIResponse<T>> {
    return Api.makeRequest<T>(Methods.PATCH, url, data, headers);
  }

  public static async delete<T = any>(
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
  ): Promise<APIResponse<T>> {
    return Api.makeRequest<T>(Methods.DELETE, url, data, headers);
  }
}
