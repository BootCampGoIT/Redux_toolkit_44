import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addGroupActionCreator,
  deleteGroupActionCreator,
  setFilterActionCreator,
} from "./groupsActions";

const itemsReducer = createReducer([], {
  [addGroupActionCreator]: (state, action) => [...state, action.payload],
  [deleteGroupActionCreator]: (state, action) =>
    state.filter((group) => group.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilterActionCreator]: (_, action) => action.payload,
});

const groupsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default groupsReducer;

// ================== redux ==================
// import { combineReducers } from "redux";
// import { ADDGROUP, DELETEGROUP, SETFILTER } from "./groupsActions";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDGROUP:
//       return [...state, action.payload];
//     case DELETEGROUP:
//       return state.filter((group) => group.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETFILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const groupsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default groupsReducer;
