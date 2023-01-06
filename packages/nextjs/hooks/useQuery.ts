import { useCallback, useEffect, useState } from "react";
import { MeT } from "../interfaces/user";

export type UseQueryDocumentSnapshot = {
  data?: any;
  loading: boolean;
  error?: string;
};

export type MeDocumentData = {
  data?: MeT;
  loading: boolean;
  error?: string;
};

type UseQueryDocumentProperties = {
  variables?: object;
  skip?: boolean;
};

/**
 *
 * @param func Function to exectuce
 * @param {object} variables Parameters of func
 * @param {any} skip If true, the query is not executed. The default value is false.
 *
 * @returns
 */
export const useQuery = (
  func: any,
  { variables, skip = false }: UseQueryDocumentProperties
): UseQueryDocumentSnapshot => {
  const loader = useCallback(func, [skip]);
  const [loading, setLoading] = useState(true);
  const [error, setLoadError] = useState<string>(undefined);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (!skip) {
          const result = await loader(variables);
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setLoadError(err);
        setLoading(false);
      }
    })();
  }, [loader, skip]);
  return { loading, error, data };
};
