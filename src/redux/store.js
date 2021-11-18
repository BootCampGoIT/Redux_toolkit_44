import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });
export default store;

// ============= redux ==============
// import axios from "axios";
// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import groupsReducer from "./groups/groupsReducer";
// import tasksReducer from "./tasks/tasksReducer";
// import userReducer from "./user/userReducer";
// import thunk from "redux-thunk";

// const middleware = (store) => (next) => (action) => {
//   if (action.constructor.name === "AsyncFunction") {
//     console.log("FUNCTION => THUNK");
//   }
//   next(action);
// };

// // const middleware1 = (store) => (next) => async (action) => {
// //   if (action.type === "-=tasks/addTask=-") {
// //     try {
// //       const response = await axios.post(
// //         `https://new44-5ccb0-default-rtdb.firebaseio.com/tasks.json`,
// //         action.payload
// //       );

// //       next({
// //         ...action,
// //         payload: { ...action.payload, id: response.data.name },
// //       });
// //       //   dispatch(addTask({ ...task, id: response.data.name }));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   } else next(action);
// // };

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   user: userReducer,
//   groups: groupsReducer,
// });

// const store = createStore(
//   rootReducer,
//   //   composeWithDevTools(applyMiddleware(middleware, middleware1))
//   composeWithDevTools(applyMiddleware(middleware, thunk))
// );
// console.log("store :>> ", store);
// export default store;
