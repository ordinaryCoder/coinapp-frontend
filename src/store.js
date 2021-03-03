import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../src/reducer/user/reducer";
const appReducer = combineReducers({
  userReducer,
});

export default createStore(
  appReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
