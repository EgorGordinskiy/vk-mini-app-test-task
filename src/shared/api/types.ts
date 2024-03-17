export interface IFetchFactResponse {
  fact: string;
  length: number;
}

export interface IFetchAgeResponse {
  count: number;
  name: string;
  age: number;
}

export interface IFetchAgeParams {
  name?: string;
}
