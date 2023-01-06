import { FUNCTION_RESOURCE_MANAGER } from "../../utils/constants";

interface cloudManagerCreateIProps {
  name: string;
  projectId: string;
}

/**
 * Request that a new Project be created. The result is an Operation which can be used to track the creation process.
 *
 * @param {String} name name of the project
 * @param {String} projectId id of the project
 *
 * @example
 * ```js
 * await addGCPProject({ name: "dashboard", projectId: "dashboard-d89e6" });
 * ```
 * @returns A promise if used with async/await, or void if used with a callback.
 */
export const addGCPProject = async ({ name, projectId }: cloudManagerCreateIProps) => {
  const result = await fetch(`${FUNCTION_RESOURCE_MANAGER}/create-new-gcp-project`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      projectId
    })
  });
  result.json().catch((e) => {
    throw e;
  });
  return result;
};

export const addFirebaseProject = async (projectId: string) => {
  const result = await fetch(`${FUNCTION_RESOURCE_MANAGER}/create-new-firebase-project`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      projectId
    })
  });
  result.json().catch((e) => {
    throw e;
  });
  return result;
};
