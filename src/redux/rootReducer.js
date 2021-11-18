import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import groupsReducer from "./groups/groupsReducer";
import tasksReducer from "./tasks/tasksReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  user: userReducer,
  groups: groupsReducer,
  auth: authReducer
});

export default rootReducer;
