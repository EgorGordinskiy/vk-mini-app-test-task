import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstanceFact = axios.create({
  baseURL: import.meta.env.VITE_API_FACT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstanceFact = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiInstanceFact({
    ...config,
    ...options,
  });
  return response.data;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
