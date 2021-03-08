import { SET_USER_PROF } from "./types";

export const setUserProfile = (userobject: any) => ({
  type: SET_USER_PROF,
  payload: userobject,
});
