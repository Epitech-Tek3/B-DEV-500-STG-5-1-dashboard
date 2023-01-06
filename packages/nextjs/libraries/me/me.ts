import { database } from "../firebase";

/**
 * Get current User
 * @param {object} variables Contains currentUser
 *
 * @example
 * ```ts
 * const { data, loading }: MeDocumentData = useQuery(meQuery, {
 *   variables: {
 *     currentUser
 *   }
 * });
 *
 * ```
 */
export const meQuery = async (variables) => {
  return (await database.user.doc(variables.currentUser?.uid).get()).data();
};
