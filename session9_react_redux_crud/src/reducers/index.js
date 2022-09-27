import { combineReducers } from "redux";

import tutorials from "./tutorials";
import users from "./users"
import message from "./message";
export default combineReducers({
  users,
  message,
  tutorials,
});
