import { combineReducers } from "redux";
import events from "./events";
import paths from "./paths";
import users from "./users";
export default combineReducers({
  events,
  paths,
  users,
});
