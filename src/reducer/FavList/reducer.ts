import { SET_FAV_LIST, SET_FAV_OBJ } from "./types";

interface IFavListReducer {
  favObj: { key: String; value: String } | {};
  favList: [];
  // currentCryptoId:string;
}

const FavListReducer: IFavListReducer = {
  favObj: {},
  favList: [],
};

export default (
  state: IFavListReducer = FavListReducer,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case SET_FAV_LIST:
      return {
        ...state,
        favList: payload,
      };
    case SET_FAV_OBJ:
      console.log("payload in reducer", { ...payload });
      return {
        ...state,
        favObj: { ...payload },
      };
    default:
      return { ...state };
  }
};
