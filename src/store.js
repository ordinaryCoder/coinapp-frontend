import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../src/reducer/user/reducer";
import favListReducer from "../src/reducer/FavList/reducer";
import userProfileReducer from "../src/userprofileredux/reducer";

const appReducer = combineReducers({
  userReducer,
  favListReducer,
  userProfileReducer,
});

export default createStore(
  appReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
