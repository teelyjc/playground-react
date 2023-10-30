import { useQuery } from "@tanstack/react-query";

import { RoutesPath } from "@/constants/routesPath";
import { fetch } from "@/utils/fetch";
import { throwError } from "@/utils/error";

export const useRandomNumQuery = () => {
  return useQuery({
    queryKey: ["randomNumber"],
    retry: false,
    queryFn: async () => {
      return fetch
        .get(RoutesPath.RANDOM_NUM)
        .then((response) => response.data.number)
        .catch(throwError);
    },
  });
};
