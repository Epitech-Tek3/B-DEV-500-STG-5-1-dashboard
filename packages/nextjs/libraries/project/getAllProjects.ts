import { database } from "../firebase";

/**
 *
 * @param variables Contains userId
 *
 * @example
 * ```ts
 * const { data, loading } = useQuery(getMyProjects, {
 *   variables: { userId: currentUser?.uid }
 * });
 * ```
 */
export const getMyProjects = async (variables) => {
  try {
    return (await database.project.where("ownerId", "==", variables.userId).get()).docs;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
