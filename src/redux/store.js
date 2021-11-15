import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });
export default store;

// ============= redux ==============
// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import groupsReducer from "./groups/groupsReducer";
// import tasksReducer from "./tasks/tasksReducer";
// import userReducer from "./user/userReducer";

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   user: userReducer,
//   groups: groupsReducer
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
