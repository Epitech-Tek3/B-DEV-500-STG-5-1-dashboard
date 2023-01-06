import { database } from "../firebase";

/**
 *
 * @param variables Contains projectId
 *
 * @example
 * ```ts
 * const { data, loading } = useQuery(getSpecificationData, {
 *   variables: { projectId },
 *   skip: projectId?.length ? false : true
 * });
 * ```
 */
export const getSpecificationData = async (variables) => {
  return (await database.specification.where("projectId", "==", variables.projectId).get()).docs[0].data();
};
