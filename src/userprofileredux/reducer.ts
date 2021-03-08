import { SET_USER_PROF } from "./types";

interface IInitialReducer {
  //uid: string;
  // email: string;
  //favList: [];
  userProfile: {};
}

const initialReducer: IInitialReducer = {
  userProfile: {},
};
export default (
  state: IInitialReducer = initialReducer,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case SET_USER_PROF: {
      return {
        ...state,
        userProfileObj: payload,
      };
    }
    default:
      return { ...state };
  }
};
