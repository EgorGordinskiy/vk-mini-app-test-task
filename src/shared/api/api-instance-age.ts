import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstanceAge = axios.create({
  baseURL: import.meta.env.VITE_API_AGE,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstanceAge = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiInstanceAge({
    ...config,
    ...options,
  });
  return response.data;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
