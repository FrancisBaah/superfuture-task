import { combineReducers } from "redux";
import { resourceReducer } from "./resourceReducer";

const allReducers = combineReducers({
  allResources: resourceReducer,
});
export default allReducers;
