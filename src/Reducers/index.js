import { combineReducers } from "redux";
import Searcher from "./searcher";

export default combineReducers({
  search: Searcher,
});
