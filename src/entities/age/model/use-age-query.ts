import { useQuery } from "@tanstack/react-query";
import {
  type IFetchAgeParams,
  type IFetchAgeResponse,
  createInstanceAge,
} from "shared/api";

export const fecthAge = (signal: AbortSignal, params: IFetchAgeParams) => {
  return createInstanceAge<IFetchAgeResponse>({
    method: "GET",
    params,
    signal,
  });
};

export interface IUseAgeQueryProps {
  params: IFetchAgeParams;
}

export function useAgeQuery(props: IUseAgeQueryProps) {
  const { params } = props;

  return useQuery({
    queryFn: ({ signal }) => fecthAge(signal, params),
    queryKey: ["age", params.name],
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!params.name,
    retry: 0,
  });
}
