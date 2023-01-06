export const updateAction = (state, payload) => {
  const modifiedPayload = payload;
  return {
    ...state,
    ...modifiedPayload
  };
};
