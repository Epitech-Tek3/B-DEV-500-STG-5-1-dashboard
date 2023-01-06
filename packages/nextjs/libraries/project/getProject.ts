import { database } from "../firebase";

/**
 *
 * @param variables Contains projectId
 *
 * @example
 * ```ts
 * const { data, loading } = useQuery(getProjectData, {
 *   variables: { projectId, ownerId },
 *   skip: projectId?.length ? false : true
 * });
 * ```
 */
export const getProjectData = async (variables) => {
  return (
    await database.project.where("projectId", "==", variables.projectId).where("ownerId", "==", variables.ownerId).get()
  ).docs[0].data();
};
