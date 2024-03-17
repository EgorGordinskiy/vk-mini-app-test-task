import { useQuery } from "@tanstack/react-query";
import { type IFetchFactResponse, createInstanceFact } from "shared/api";
import { QUERY_KEYS } from "shared/lib";

export const fetchFact = (signal: AbortSignal) => {
  return createInstanceFact<IFetchFactResponse>({
    url: `/fact`,
    method: "GET",
    signal,
  });
};

export function useFactQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.FACT,
    queryFn: ({ signal }) => fetchFact(signal),
    enabled: false,
  });
}
